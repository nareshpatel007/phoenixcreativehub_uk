import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const url = request.nextUrl

    // Check if the path exists by trying to match it against known routes
    // If it doesn't match, redirect to home with 301
    const pathname = url.pathname

    // Skip API routes and static files
    if (pathname.startsWith('/api/') || pathname.startsWith('/_next/') || pathname.includes('.')) {
        return NextResponse.next()
    }

    // List of valid routes
    const validRoutes = [
        '/',
        '/about-us',
        '/contact',
        '/services',
        '/portfolio',
        '/blog',
        '/pricing',
        '/privacy-policy',
        '/terms-of-service',
        '/why-us',
    ]

    // Check if it's a valid static route
    const isValidStaticRoute = validRoutes.includes(pathname)

    // Check if it's a dynamic route pattern
    const isServiceRoute = pathname.startsWith('/services/')
    const isPortfolioRoute = pathname.startsWith('/portfolio/')
    const isBlogRoute = pathname.startsWith('/blog/')
    const isGuidesRoute = pathname.startsWith('/guides/')

    // If it's not a valid route, redirect to home with 301
    if (!isValidStaticRoute && !isServiceRoute && !isPortfolioRoute && !isBlogRoute && !isGuidesRoute) {
        const redirectUrl = new URL('/', request.url)
        return NextResponse.redirect(redirectUrl, 301)
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        /*
         * Match all request paths except:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public folder files
         */
        '/((?!_next/static|_next/image|favicon.ico|.*\\..*$).*)',
    ],
}
