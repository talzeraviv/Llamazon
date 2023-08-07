import { NextResponse } from "next/server";
import Product from "@/models/ProductModel";

export async function GET(req) {
  const PAGE_SIZE = 6;

  const searchParams = Object.fromEntries([...req.nextUrl.searchParams]);

  const pageSize = searchParams.pageSize || PAGE_SIZE;
  const page = searchParams.page || 1;
  const category = searchParams.category || "";
  const price = searchParams.price || "";
  const rating = searchParams.rating || "";
  const order = searchParams.order || "";
  const searchQuery = searchParams.searchQuery || "";

  const queryFilter =
    searchQuery && searchQuery !== "all"
      ? { title: { $regex: searchQuery, $options: "i" } }
      : {};

  const categoryFilter =
    category && category !== "all"
      ? { category: { $regex: category, $options: "i" } }
      : {};

  const ratingFilter =
    rating && rating !== "all"
      ? { "rating.rate": { $gte: Number(rating) } }
      : {};

  const priceFilter =
    price && price !== "all"
      ? {
          price: {
            $gte: Number(price.split("-")[0]),
            $lte: Number(price.split("-")[1]),
          },
        }
      : {};

  const sortOrder =
    order === "lowest"
      ? { price: 1 }
      : order === "highest"
      ? { price: -1 }
      : order === "toprated"
      ? { rating: -1 }
      : order === "newest"
      ? { createdAt: -1 }
      : { _id: -1 };

  const products = await Product.find({
    ...queryFilter,
    ...categoryFilter,
    ...ratingFilter,
    ...priceFilter,
  })
    .sort(sortOrder)
    .skip((page - 1) * pageSize)
    .limit(pageSize);

  const countproduct = products.length;
  return NextResponse.json({
    products,
    page,
    pages: Math.ceil(countproduct / pageSize),
  });
}
