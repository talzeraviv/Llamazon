"use client";

import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/cartSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import CurrencyFormat from "../components/CurrencyFormat";
import { useSession } from "next-auth/react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.stripe_public_key);

const Checkout = () => {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const { data: session, status } = useSession();

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;

    const checkoutSession = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ items, email: session.user.email }),
    });

    const id = await checkoutSession.json();

    const result = await stripe.redirectToCheckout({
      sessionId: id,
    });

    if (result.error) alert(result.error.message);
  };

  return (
    <div>
      {/* left */}
      <div className="flex-grow m-5 shadow-sm">
        <Image
          className="object-contain"
          src="https://links.papareact.com/ikj"
          width={1020}
          height={250}
          alt="prime-ad"
        />
        <div className="flex flex-col p-5 space-y-10 bg-white">
          <h1 className="text-3xl border-b pb-4 text-center">
            Your Shopping Cart{" "}
            {items.length === 0
              ? "is empty."
              : `contains ${items.length} items.`}
          </h1>

          {items.map((item, index) => (
            <CheckoutProduct
              key={index}
              id={item.id}
              title={item.title}
              rating={item.rating}
              price={item.price}
              description={item.description}
              category={item.category}
              image={item.image}
            />
          ))}
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-col bg-white p-10 shadow-md">
        {items.length > 0 && (
          <>
            <h2 className="whitespace-nowrap">
              Subtotal ({items.length}) items:
              <span className="font-bold">
                <CurrencyFormat value={total} />
              </span>
            </h2>

            <button
              onClick={createCheckoutSession}
              disabled={!session}
              className={`button mt-2 ${
                !session &&
                "from-gray-300 to-gray-500 border-gray-200 text-gray-300 && cursor-not-allowed"
              }`}
              type="submit"
            >
              {!session ? "Sign in to checkout" : "Proceed to checkout"}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Checkout;
