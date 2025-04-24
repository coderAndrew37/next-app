import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/client";

interface User {
  id: number;
  name: string;
}

export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany();
  return NextResponse.json(users as User[]);
}

export async function POST(request: NextRequest): Promise<NextResponse<User>> {
  const { name } = await request.json();
  return NextResponse.json({ id: Math.random(), name } as User);
}
