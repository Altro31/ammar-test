import React from 'react'
import Menu from "@/components/menu/Menu";

interface Props {
    children: React.ReactNode
}

export default function ToDoRelatedLayout({children}: Props) {

    return (
        <>
            {children}
            <Menu />
        </>
    )
}