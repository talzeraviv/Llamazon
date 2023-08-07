import { NextResponse } from "next/server";
import Product from "@/models/ProductModel";
import MongoDbConnect from "@/libs/MongoDb";

export async function GET() {
  MongoDbConnect();
  const categories = await Product.find().distinct("category");
  return NextResponse.json(categories);
}
