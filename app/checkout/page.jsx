"use client";

import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/cartSlice";
import CheckoutProduct from "../components/CheckoutProduct";

const Checkout = () => {
  const items = useSelector(selectItems);

  return (
    <div>
      {/* left */}
      <div className="flex-grow m-5 shadow-sm">
        <Image
          className="object-contain"
          src="https:links.papareact.com/ikj"
          width={1020}
          height={250}
        ></Image>
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

      {/* right */}
      <div></div>
    </div>
  );
};

export default Checkout;
