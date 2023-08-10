import { NextResponse } from "next/server";
import GetProducts from "@/libs/Actions/GetProducts";

export async function GET() {
  const products = await GetProducts();
  return NextResponse.json(products, { status: 200 });
}
