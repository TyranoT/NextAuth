// middleware.ts
import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default withAuth(
  function middleware(req){

    console.log("midlle")
    if(req.nextUrl.pathname === "/user-admin" && req.nextauth.token?.role !== "admin") {
      return NextResponse.rewrite(new URL("/", req.url))
    }
    
  },
  {
    callbacks: {
      authorized({token}) {
        console.log("Authorized")
        return !!token;
      }
    }
  }
)

export const config = {
  matcher: ['/user-admin'],
};
