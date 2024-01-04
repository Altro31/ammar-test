import "@/styles/tailwind.css"
import React from 'react'
import {Providers} from "@/components/providers/Providers";

interface Props {
    children: React.ReactNode
    modal: React.ReactNode
}

export default function RootLayout({children, modal}: Props) {

    return (
        <html lang='en'>
        <body>
        <Providers>
            {children}
            {modal}
        </Providers>
        </body>
        </html>
    )
}