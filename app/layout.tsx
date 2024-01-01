import "@/styles/tailwind.css"
import React from 'react'
import {Providers} from "@/components/providers/Providers";

interface Props {
    children: React.ReactNode
}

export default function RootLayout({children}: Props) {

    return (
        <html lang='en'>
            <body>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    )
}