import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/client";
import schema from "../schema";

interface Props {
  params: {
    id: string;
  };
}
export async function GET(request: NextRequest, { params }: Props) {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  return NextResponse.json(user);
}

export async function PUT(request: NextRequest, { params }: Props) {
  const { name } = await request.json();
  const validation = schema.safeParse(name);
  if (!validation.success)
    return NextResponse.json(
      { message: validation.error.errors },
      { status: 400 }
    );

  if (parseInt(params.id) > 10) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }
  return NextResponse.json({ id: parseInt(params.id), name });
}

export async function DELETE(request: NextRequest, { params }: Props) {
  if (parseInt(params.id) > 10) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }
  return NextResponse.json({ message: "User deleted" });
}
