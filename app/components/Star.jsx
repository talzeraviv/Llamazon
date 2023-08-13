import { StarIcon as SolidStarIcon } from "@heroicons/react/24/solid";
import { StarIcon as HollowStarIcon } from "@heroicons/react/24/outline";

export const StarComponent = ({ rating }) => {
  const stars = Array(5)
    .fill()
    .map((_, i) => {
      return Math.floor(rating) >= i + 1 ? (
        <SolidStarIcon key={i} className="h-5 text-yellow-500" />
      ) : (
        <HollowStarIcon key={i} className="h-5 text-yellow-500" />
      );
    });

  return <div className="flex">{stars}</div>;
};

export default StarComponent;
