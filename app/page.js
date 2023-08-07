import Header from "./components/Header";
import Banner from "./components/Banner";
import ProductFeed from "./components/ProductFeed";
import MongoDbConnect from "@/libs/MongoDb";
import Product from "@/models/ProductModel";

export default async function Home() {
  await MongoDbConnect();
  const products = await Product.find();
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
