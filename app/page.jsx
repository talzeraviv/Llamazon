import Banner from "./components/Banner";
import ProductFeed from "./components/ProductFeed";
import GetProducts from "@/libs/Actions/GetProducts";

export default async function Home() {
  const products = await GetProducts();

  return (
    <div>
      <Banner />
      <ProductFeed products={products} />
    </div>
  );
}

async function GetProducts() {
  const products = await GetProducts();
  return products;
}

// Client Component Code

{
  /* {await new Promise((resolve) => setTimeout(resolve, 2000))} */
}

// import { useEffect, useState } from "react";
// import loading from "./loading";
// const [products, setProducts] = useState([]);
// const [loading, setLoading] = useState(true);

// useEffect(() => {
//   const fetchProducts = async () => {
//     const res = await fetch("/api/products");
//     const data = await res.json();
//     setProducts(data);
//     setLoading(false);
//   };

//   fetchProducts();
// }, []);

// if (loading) {
//   return <loading />;
// }