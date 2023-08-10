"use client";

import Header from "./components/Header";
import Banner from "./components/Banner";
import ProductFeed from "./components/ProductFeed";
import { useEffect, useState } from "react";
import loading from "./loading";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <loading />;
  }

  return (
    <div className="bg-gray-100">
      <Header />

      <main className="max-w-screen-2xl mx-auto">
        <Banner />
        <ProductFeed products={products} />
      </main>
    </div>
  );
}
