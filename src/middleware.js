import { isUserLogged } from "@/pages/_app"
export function middleware(request) {
    console.log(isUserLogged)
    console.log(request.nextUrl.pathname)
    if (!isUserLogged.value && request.nextUrl.pathname === "/account") {
      return Response.redirect(new URL('/login', request.url))
    }
  }
   