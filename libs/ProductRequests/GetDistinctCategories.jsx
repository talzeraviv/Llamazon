import MongoDbConnect from "../MongoDbConnection";
import Product from "@/models/ProductModel";

const GetDistinctCategories = async () => {
  try {
    await MongoDbConnect();
    const categories = await Product.find().distinct("category");
    return categories;
  } catch (error) {
    throw new Error(error);
  }
};

export default GetDistinctCategories;
