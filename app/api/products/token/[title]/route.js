import { NextResponse } from "next/server";

import Product from "@/models/ProductModel";
import MongoDbConnect from "@/libs/MongoDb";

export async function GET(req, res) {
  const { title } = res.params;

  MongoDbConnect();
  const product = await Product.findOne({ title });

  return product
    ? NextResponse.json(product)
    : NextResponse.json({ status: 404, message: "Product not found" });
}
