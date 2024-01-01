'use client'

import React from 'react'
import Link from "next/link";
import {usePathname} from "next/navigation";

interface Props {
    children: React.ReactNode
    text: string
    href: string
}

export function MenuItem({children, href, text}: Props) {

    const pathname = usePathname()
    const active = pathname.startsWith(href)

    return (
        <Link href={href} className={`flex flex-col items-center menu-item${active ? '-active' : ''}`}>
            {children}
            <b>{text}</b>
        </Link>
    )
}