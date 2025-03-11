import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.pathname;

  if (url.endsWith("/thirteen.svg")) {
    const response = NextResponse.next();
    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set("Access-Control-Allow-Methods", "GET, OPTIONS");
    // response.headers.set(
    //   "Access-Control-Allow-Headers",
    //   "Content-Type, Content-Disposition"
    // );
    // Content-Disposition: attachment; filename="qr.png"; filename*=UTF-8''qr.png
    response.headers.set(
      "Content-Disposition",
      "attachment; filename=thirteen.svg"
    );

    return response;
  }

  return NextResponse.next();
}
