import { NextResponse } from "next/server";
import GetDistinctCategories from "@/libs/ProductRequests/GetDistinctCategories";

export async function GET() {
  const categories = await GetDistinctCategories();
  return NextResponse.json(categories);
}
