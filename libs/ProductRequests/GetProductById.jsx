import MongoDbConnect from "../MongoDbConnection";
import Product from "@/models/ProductModel";

const GetProductById = async (id) => {
  try {
    await MongoDbConnect();
    const product = await Product.findById(id);
    return product;
  } catch (error) {
    throw new Error(error);
  }
};

export default GetProductById;
