import {MalformedPathnameError} from "@/utils/errors/MalformedPathnameError";

export function getPathnameWithoutQueryParams(pathname: string) {

    if (!pathname.startsWith('/'))
        throw new MalformedPathnameError()

    let pos = pathname.indexOf('?')
    if (pos == -1)
        pos = pathname.length

    return pathname.slice(0,pos)
}