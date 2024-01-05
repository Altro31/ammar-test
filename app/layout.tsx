import "@/styles/tailwind.css"
import React from 'react'
import {Providers} from "@/components/providers/Providers";
import {Metadata} from "next";

interface Props {
    children: React.ReactNode
    modal: React.ReactNode
}

export const metadata: Metadata = {
    title: "ToDo Task Manager",
    description: "Manage your ToDos at any time",
    manifest: 'ToDo Task Manager'
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