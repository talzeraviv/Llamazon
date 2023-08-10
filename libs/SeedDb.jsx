import MongoDbConnect from "./MongoDbConnection";
import Product from "@/models/ProductModel";
import products from "@/models/Data";

const SeedDb = async () => {
  try {
    await MongoDbConnect();

    await Product.deleteMany();
    await Product.insertMany(products);
  } catch (error) {
    throw new Error(error);
  }
};

export default SeedDb;
