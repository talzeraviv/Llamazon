import MongoDbConnect from "@/libs/MongoDbConnection";
import Product from "@/models/ProductModel";

const GetProductByToken = async (title) => {
  try {
    MongoDbConnect();
    const product = await Product.findOne(title);

    return product;
  } catch (error) {
    throw new Error(error);
  }
};

export default GetProductByToken;
