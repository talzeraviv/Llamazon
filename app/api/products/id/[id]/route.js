import { NextResponse } from "next/server";
import GetProductById from "@/libs/ProductRequests/GetProductById";

export async function GET(_, { params: { id } }) {
  const product = await GetProductById(id);

  return product
    ? NextResponse.json(product)
    : NextResponse.json({ status: 404, message: "Product not found" });
}
