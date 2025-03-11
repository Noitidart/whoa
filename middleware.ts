import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.pathname;

  if (url.endsWith("/thirteen.svg")) {
    const response = NextResponse.next();
    response.headers.set("Access-Control-Allow-Origin", "*");
    return response;
  }

  return NextResponse.next();
}
