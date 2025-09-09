import { NextRequest, NextResponse } from 'next/server'

export default function middleware(request: NextRequest) {

    const path = request.nextUrl.pathname;
    const token = request.cookies.get("accessToken")?.value;
    const isPublicPath = path === "/auth/login" || path === "/auth/signup";

    if(isPublicPath && token){
        return NextResponse.redirect(new URL("/dashboard", request.url))
    } else if(!isPublicPath && !token){
        return NextResponse.redirect(new URL('/auth/login', request.url)) 
    }
}

export const config ={
      matcher: ["/dashboard/:path*", "/auth/:path*"],

}