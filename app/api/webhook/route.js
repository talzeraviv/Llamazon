import { NextResponse } from "next/server";
import * as admin from "firebase-admin";

// Establish a connection to Stripe

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

const endpointSecret = process.env.STRIPE_SIGNING_SECRET;

export async function POST(req, res) {
  const payload = await req.text();
  const signature = await req.headers.get("stripe-signature");

  let event;

  try {
    event = stripe.webhooks.constructEvent(payload, signature, endpointSecret);
    // console.log(event);
  } catch (err) {
    console.log(
      "An error has occured while trying to construct webhook event: ",
      err
    );
    return NextResponse.json({ error: err.message }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    return fulfillOrder(session)
      .then(() => NextResponse.json({ status: 200 }))
      .catch((err) =>
        NextResponse.json(
          { error: `Webhook Error: ${err.message}` },
          { status: 400 }
        )
      );
  }

  return NextResponse.json({ message: event.type }, { status: 200 });
}

// Firebase Related:
// Secure a connection to firebase from backend.
const app = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })
  : admin.app();

const fulfillOrder = async (session) => {
  console.log("Fulfilling order");

  return app
    .firestore()
    .collection("users")
    .doc(session.metadata.email)
    .collection("orders")
    .doc(session.id)
    .set({
      amount: session.amount_total / 100,
      amount_shipping: session.total_details.amount_shipping / 100,
      images: JSON.parse(session.metadata.images),
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      console.log(`SUCCESS: Order ${session.id} had been added to the DB.`);
    });
};
