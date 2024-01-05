'use client'
import React from 'react'
import {AnimatePresence, motion} from "framer-motion";
import {useDeleteToDo} from "@/utils/store/use_delete_todo";

interface Props {
    children: React.ReactNode
    overflow: string
}

export function ToDoListAnimation({children, overflow}: Props) {

    const {setDeleteToDo} = useDeleteToDo()

    const handleScroll = () => setDeleteToDo(null)

    return (
        <motion.ul className={`h-full my-4 mb-10 flex flex-col gap-2 max-h-80 scrollbar-hide scroll-smooth ${overflow}`}
                   onScroll={handleScroll}
        >
            <AnimatePresence>
                {children}
            </AnimatePresence>
        </motion.ul>
    )
}