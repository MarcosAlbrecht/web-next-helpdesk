// /app/api/me/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const token = req.cookies.get("auth_token")?.value;

  if (!token) {
    return NextResponse.json({ message: "Não autorizado" }, { status: 401 });
  }

  const res = await fetch("https://sua-api.com/me", {
    headers: { Authorization: `Bearer ${token}` },
  });

  const data = await res.json();

  return NextResponse.json(data);
}
