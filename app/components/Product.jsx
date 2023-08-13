import Image from "next/image";
import { StarIcon as SolidStarIcon } from "@heroicons/react/24/solid";
import { StarIcon as HollowStarIcon } from "@heroicons/react/24/outline";

function Product({ title, price, description, category, image, rating }) {
  const StarComponent = ({ rating }) => {
    const stars = Array(5)
      .fill()
      .map((_, i) => {
        return Math.floor(rating.rate) >= i + 1 ? (
          <SolidStarIcon key={i} className="h-5 text-yellow-500" />
        ) : (
          <HollowStarIcon key={i} className="h-5 text-yellow-500" />
        );
      });

    return <div className="flex">{stars}</div>;
  };

  const NumberFormatComponent = (value) =>
    new Intl.NumberFormat("he-IL", {
      style: "currency",
      currency: "ILS",
    }).format(value);

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>

      <Image
        className="h-48 w-48 object-contain mx-auto"
        width={192}
        height={192}
        src={image}
        alt={title}
      />

      <h4 className="my-3">{title}</h4>

      <StarComponent rating={rating} />

      <p className="text-xs my-2 line-clamp-2">{description}</p>

      <div className="mb-5">
        {NumberFormatComponent(Number((price * 3.5).toFixed(0)))}
      </div>

      <div className="flex items-end space-x-1 mt-auto py-1">
        <Image
          height={20}
          width={20}
          className="mb-0.5 h-5"
          src={"/prime-llama.png"}
          alt="prime-llama"
        />
        <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
      </div>
      <button className="button">Add to Cart</button>
    </div>
  );
}

export default Product;
