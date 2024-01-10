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
        <div className='h-full max-h-full mt-2'>
            <motion.ul className={`flex h-full flex-col gap-2 scrollbar-hide scroll-smooth ${overflow}`}
                       onScroll={handleScroll}
            >
                <AnimatePresence>
                    {children}
                </AnimatePresence>
            </motion.ul>
        </div>
    )
}