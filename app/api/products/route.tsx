import { NextResponse, NextRequest } from "next/server";
import schema from "./schema";

interface Product {
  name: string;
  priceCents: number;
}

export async function GET(request: NextRequest) {
  return NextResponse.json([
    {
      id: 1,
      name: "Milk",
      priceCents: 35,
    },
    {
      id: 2,
      name: "Bread",
      priceCents: 45,
    },
  ]);
}

export async function POST(
  request: NextRequest
): Promise<NextResponse<Product>> {
  const { name, priceCents } = await request.json();
  return NextResponse.json({
    id: "4",
    name: "Tea",
    priceCents: 15,
  } as Product);
}
