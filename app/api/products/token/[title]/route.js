import GetProductByToken from "@/libs/ProductRequests/GetProductByToken";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  const { title } = res.params;
  const product = await GetProductByToken({ title });

  return product
    ? NextResponse.json(product)
    : NextResponse.json({ status: 404, message: "Product not found" });
}
