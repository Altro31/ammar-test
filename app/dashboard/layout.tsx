import React from 'react'
import Menu from "@/components/menu/Menu";
import {Aside} from "@/components/aside/Aside";

interface Props {
    children: React.ReactNode
    params: {
        date?: string
    }
}

export default function ToDoRelatedLayout({children}: Props) {

    return (
        <div className='lg:flex lg:px-16 lg:py-2 lg:h-full'>
            {children}
            <Aside />
            <Menu/>
        </div>
    )
}