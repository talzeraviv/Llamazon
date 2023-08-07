import Product from "@/models/ProductModel";
import MongoDbConnect from "@/libs/MongoDb";
import products from "@/models/Data";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await MongoDbConnect();

    await Product.deleteMany();
    await Product.insertMany(products);
  } catch (error) {
    console.log("Failed to seed/format database.", error);
  }

  return NextResponse.json({ status: 200 });
}
