import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPublicPath = path === "/register" || path === "/login";
  const isPrivatePath = path === "/posts" || path === "/reduxToolKit";

  const token = request.cookies.get("token")?.value || null;
  //we can further decode the token and check if it has expired or even check for user authorizations

  if (isPrivatePath && !token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/login", "/register", "/posts", "/reduxToolKit"],
};
