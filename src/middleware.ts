// middleware.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  const token = request.cookies.get("nextauth.token")?.value;
  const pathname = request.nextUrl.pathname;

  // Permitir livre acesso ao /login
  if (pathname === "/login") {
    return NextResponse.next();
  }

  // Bloquear tudo que não tem token
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"], // pode ajustar conforme suas rotas privadas
};
