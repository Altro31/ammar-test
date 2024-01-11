'use client'
import React from 'react'
import {AnimatePresence, motion} from "framer-motion";
import {useDeleteToDo} from "@/utils/store/use_delete_todo";

interface Props {
    children: React.ReactNode
    overflow: string
    ulClassName?: string
}

export function ToDoListAnimation({children, overflow, ulClassName}: Props) {

    const {setDeleteToDo} = useDeleteToDo()

    const handleScroll = () => setDeleteToDo(null)

    return (
        <div className='h-96 w-full mt-2 overflow-auto scrollbar-hide scroll-smooth'>
            <motion.ul className={`h-full w-full flex flex-col gap-2 mb-7 ${ulClassName}`}
                       onScroll={handleScroll}
            >
                <AnimatePresence>
                    {children}
                </AnimatePresence>
            </motion.ul>
        </div>
    )
}