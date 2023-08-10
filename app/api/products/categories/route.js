import { NextResponse } from "next/server";
import GetDistinctCategories from "@/libs/Actions/GetDistinctCategories";

export async function GET() {
  const categories = await GetDistinctCategories();
  return NextResponse.json(categories);
}
