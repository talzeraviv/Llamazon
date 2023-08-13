import React from "react";
import Product from "./Product";
import Image from "next/image";

const ProductFeed = ({ products }) => {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:-mt-64 md:-mt-48 mx-auto">
      {products.map(
        ({ _id, title, description, price, category, image, rating }) => (
          <Product
            key={_id}
            title={title}
            description={description}
            price={price}
            category={category}
            image={image}
            rating={rating}
          />
        )
      )}

      <div className="object-contain col-span-full">
        <Image
          className=" md:col-span-full"
          src="https://links.papareact.com/dyz"
          alt="ad"
          width={1500}
          height={300}
        />
      </div>

      <div className="md:col-span-2">
        {products
          .slice(4, 5)
          .map(
            ({ _id, title, description, price, category, image, rating }) => (
              <Product
                key={_id}
                title={title}
                description={description}
                price={price}
                category={category}
                image={image}
                rating={rating}
              />
            )
          )}
      </div>
      {products
        .slice(5)
        .map(({ _id, title, description, price, category, image, rating }) => (
          <Product
            key={_id}
            title={title}
            description={description}
            price={price}
            category={category}
            image={image}
            rating={rating}
          />
        ))}
    </div>
  );
};

export default ProductFeed;
