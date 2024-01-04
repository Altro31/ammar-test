'use client'

import React, {useEffect} from 'react'
import Link from "next/link";
import {usePathname} from "next/navigation";
import {getPathnameWithoutQueryParams} from "@/utils/standalones/routes";

interface Props {
    children: React.ReactNode
    text: string
    href: string
}

export function MenuItem({children, href, text}: Props) {

    const pathname = getPathnameWithoutQueryParams(usePathname())
    const active = href === pathname
    const className = `flex flex-col items-center menu-item${active ? '-active' : ''}`

    return (
        <Link href={href} className={className}>
            {children}
            <b>{text}</b>
        </Link>
    )
}