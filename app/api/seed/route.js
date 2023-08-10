import { NextResponse } from "next/server";
import SeedDb from "@/libs/SeedDb";

export async function GET() {
  await SeedDb();
  return NextResponse.json(
    { message: "Seeded Database Successfully." },
    { status: 201 }
  );
}
