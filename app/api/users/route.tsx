import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/client";
import schema from "./schema";

interface User {
  id: number;
  name: string;
}

export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany();
  return NextResponse.json(users as User[]);
}

export async function POST(
  request: NextRequest
): Promise<NextResponse<User | { error: string }>> {
  const body = await request.json();
  const validationResult = schema.safeParse(body);
  if (!validationResult.success) {
    return NextResponse.json(
      { error: validationResult.error.message },
      { status: 400 }
    );
  }

  // First check if user exists
  const existingUser = await prisma.user.findUnique({
    where: { email: body.email },
  });

  if (existingUser) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }

  // If no existing user, create new one
  const user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      password: body.password,
    },
  });

  return NextResponse.json(user as User, { status: 201 });
}
