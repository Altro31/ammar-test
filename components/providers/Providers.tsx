'use client'
import React from 'react'
import {NextUIProvider} from "@nextui-org/react";
import {useRouter} from "next/navigation";

interface Props {
    children: React.ReactNode
}

export function Providers({children}: Props) {

    const router = useRouter()

    return (
        <NextUIProvider navigate={router.push} className='h-full'>
            {children}
        </NextUIProvider>
    )
}