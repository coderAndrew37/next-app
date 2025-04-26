import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const token = await getToken({ req: request });
  if (!token) {
    return new Response("Unauthorized", { status: 401 });
  }
  return new NextResponse(JSON.stringify(token), { status: 200 });
}
