import {NextRequest, NextResponse} from "next/server";

export const config = {
    matcher: [
        '/((?!_next/static).*)'
    ]
}

export default function middleware(req: NextRequest) {
    //Response initialization
    const res = NextResponse.next({
        request: req
    })

    //apliying middlewares
    //sendPathNameToRoutes(req, res)


    //returning response
    return res
}

function sendPathNameToRoutes(req: NextRequest, res: NextResponse) {
    const pathname = req.nextUrl.pathname
    res.cookies.set('pathname', pathname)
}