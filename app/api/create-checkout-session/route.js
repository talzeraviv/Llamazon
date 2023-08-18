import { NextResponse } from "next/server";

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

export async function POST(req, res) {
  const { items, email } = await req.json();

  const mappedItems = items.map((item) => ({
    quantity: 1,
    price_data: {
      currency: "ils",
      unit_amount: item.price * 100,
      product_data: {
        name: item.title,
        description: item.description,
        images: [item.image],
      },
    },
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_options: [
      {
        shipping_rate: "shr_1Ngad3DS6DsspPEnGr3B4u9U",
      },
    ],
    shipping_address_collection: {
      allowed_countries: ["IL"],
    },
    line_items: mappedItems,
    mode: "payment",
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/checkout`,
    metadata: {
      email,
      images: JSON.stringify(items.map((item) => item.image)),
    },
  });

  return NextResponse.json(session.id);
}
