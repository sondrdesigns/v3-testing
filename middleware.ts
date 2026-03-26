import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
    const hostname = request.headers.get("host") || ""

    if (hostname.startsWith("book.")) {
        const url = request.nextUrl.clone()
        const pathname = url.pathname === "/" ? "" : url.pathname
        url.pathname = `/book${pathname}`
        return NextResponse.rewrite(url)
    }

    return NextResponse.next()
}

export const config = {
    matcher: ["/((?!_next/static|_next/image|favicon\\.ico|.*\\.png|.*\\.svg|.*\\.webp|.*\\.ico).*)"],
}
