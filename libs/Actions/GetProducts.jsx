import MongoDbConnect from "../MongoDbConnection";
import Product from "@/models/ProductModel";

const GetProducts = async () => {
  try {
    await MongoDbConnect();
    const products = await Product.find();
    return products;
  } catch (error) {
    throw new Error(error);
  }
};

export default GetProducts;
