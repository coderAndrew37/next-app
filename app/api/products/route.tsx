import { NextResponse, NextRequest } from "next/server";
import schema from "./schema";
import { prisma } from "@/prisma/client";

interface Product {
  name: string;
  priceCents: number;
}

export async function GET(request: NextRequest) {
  const products = await prisma.product.findMany({;
  return NextResponse.json(products as Product[]);
}

export async function POST(
  request: NextRequest
): Promise<NextResponse<Product | { error: string }>> {
  const body = await request.json();

  const validationResult = schema.safeParse(body);
  if (!validationResult.success) {
    return NextResponse.json(
      { error: validationResult.error.message },
      { status: 400 }
    );
  }

  // First check if product exists
  const existingProduct = await prisma.product.findUnique({
    where: { id: body.id }, // Assuming 'id' is the unique identifier for the product
  });

  if (existingProduct) {
    return NextResponse.json(
      { error: "Product already exists" },
      { status: 400 }
    );
  }

  // Create the product if it doesn't exist
  const createdProduct = await prisma.product.create({
    name: body.name,
    priceCents: body.priceCents,
  });

  return NextResponse.json(
    {
      name: createdProduct.name,
      priceCents: createdProduct.priceCents,
    } as Product,
    { status: 201 }
  );
}
