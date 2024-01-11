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
        <div className='lg:flex lg:px-16 lg:pt-4 lg:pb-10 lg:h-full lg:gap-2'>
            {children}
            <Aside />
            <Menu/>
        </div>
    )
}