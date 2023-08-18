"use client";

import Image from "next/image";
import StarComponent from "./Star";
import CurrencyFormat from "./CurrencyFormat";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../slices/cartSlice";

function CheckoutProduct({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
}) {
  const dispatch = useDispatch();

  const addItemToCart = () => {
    const product = { id, title, price, rating, description, category, image };
    dispatch(addToCart(product));
  };

  const removeItemFromCart = ({ id }) => {
    dispatch(removeFromCart({ id }));
  };

  return (
    <div className="grid grid-cols-5">
      <Image
        className="object-contain"
        src={image}
        height={200}
        width={200}
        alt={title}
      />
      <div className="col-span-3 mx-5">
        <p className="text-xs text-gray-500">{category}</p>
        <p>{title}</p>
        <StarComponent rating={rating} />
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <CurrencyFormat value={price} />
      </div>

      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button className="button" onClick={addItemToCart}>
          Add to Cart
        </button>
        <button className="button" onClick={removeItemFromCart}>
          Remove from Cart
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
