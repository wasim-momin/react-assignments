import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const accessToken = request.cookies.get("accessToken")?.value;
  const refreshToken = request.cookies.get("refreshToken")?.value;

  const isPublicPath =
    path === "/auth/login" || path === "/auth/signup";

  // ✅ Already logged in aur public page pe gya
  if (isPublicPath && (accessToken || refreshToken)) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // ✅ Protected route pe gya without tokens
  if (!isPublicPath && !accessToken && !refreshToken) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/auth/:path*"],
};
