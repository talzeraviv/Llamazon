import React from "react";
import MongoDbConnect from "@/libs/MongoDb";
import Product from "@/models/ProductModel";
import { NextResponse } from "next/server";

export async function GET() {
  await MongoDbConnect();
  const products = await Product.find();

  try {
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}
