import React from 'react'
import Menu from "@/components/menu/Menu";

interface Props {
    children: React.ReactNode
    modal: React.ReactNode
}

export default function ToDoRelatedLayout({children, modal}: Props) {

    return (
        <>
            {children}
            <Menu/>
            {modal}
        </>
    )
}