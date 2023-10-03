import { NextResponse } from "next/server";


export function middleware(request) {
    if (!request.cookies.has('freestyle_token'))
        return NextResponse.redirect(new URL('/login', request.url))
}

export const config = {
    matcher: [
        '/contas/:path*',
        '/despesas/:path*',
        '/home/:path*',
    ]
}