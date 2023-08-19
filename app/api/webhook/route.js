import { NextResponse } from "next/server";
import { buffer } from "micro";
import * as admin from "firebase-admin";

var serviceAccount = require("../../../permissions.json");

// Secure a connection to firebase from backend.
const app = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })
  : admin.app();

const fulfillOrder = async () => {
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

// Establish a connection to Stripe
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

const endpointSecret = process.env.STRIPE_SIGNING_SECRET;

export async function POST(req, res) {
  console.log(req);
  console.log("buffer command /");
  const requestBuffer = await buffer(req);
  console.log("payload command /");
  const payload = requestBuffer.toString();
  console.log("signature command /");
  const signature = req.headers["stripe-signature"];
  console.log(req.headers);

  let event;

  try {
    event = stripe.webhooks.constructEvent(payload, signature, endpointSecret);
    console.log(event);
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: err.message }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    return fulfillOrder(session).then(() => NextResponse.json({ status: 200 }));
  }
}

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
