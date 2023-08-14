import Image from "next/image";
import StarComponent from "./Star";
import CurrencyFormat from "./CurrencyFormat";

function CheckoutProduct({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
}) {
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
    </div>
  );
}

export default CheckoutProduct;
