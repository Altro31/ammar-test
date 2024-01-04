import React from "react"
import {Modal} from "@/components/others/Modal";

interface Props {
    children: React.ReactNode
}

export default function ToDoLayout({children}: Props) {

    return (
        <Modal className='flex'>
            {children}
        </Modal>
    )
}