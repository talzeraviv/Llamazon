import { NextResponse } from "next/server";
import Product from "@/models/ProductModel";
import MongoDbConnect from "@/libs/MongoDb";

export async function GET(_, { params: { id } }) {
  MongoDbConnect();
  const product = await Product.findById(id);

  return product
    ? NextResponse.json(product)
    : NextResponse.json({ status: 404, message: "Product not found" });
}
