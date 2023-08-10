import MongoDbConnect from "../MongoDbConnection";
import Product from "@/models/ProductModel";

const GetProductsBySearch = async (
  queryFilter,
  categoryFilter,
  ratingFilter,
  priceFilter,
  sortOrder,
  page,
  pageSize
) => {
  try {
    MongoDbConnect();
    const products = await Product.find({
      ...queryFilter,
      ...categoryFilter,
      ...ratingFilter,
      ...priceFilter,
    })
      .sort(sortOrder)
      .skip((page - 1) * pageSize)
      .limit(pageSize);
    return products;
  } catch (error) {
    throw new Error(error);
  }
};

export default GetProductsBySearch;
