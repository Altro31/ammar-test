'use client'

import {AnimatePresence, motion, PanInfo} from 'framer-motion'
import React, {useState} from 'react'
import {MdDelete} from "react-icons/md";
import {deleteTodo} from "@/api/services/todo";

interface Props {
    children: React.ReactNode
    todo_id: string
}

export function ItemAnimation({children, todo_id}: Props) {

    const [del, setDel] = useState(false)
    const [className, setClassName] = useState('')

    const dragEndHandler = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        if (info.offset.x < -40) {
            console.log('deleting')
            setClassName("relative -left-20")
            setDel(true)
        }
        if (info.offset.x > 0) {
            console.log('close deleting')
            setClassName("relative left-0")
        }
    }

    const dragStartHandler = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        if (info.offset.x > 0) {
            console.log('start close deleting')
            setDel(false)
        }
    }


    return (
        <motion.li
            className={`p-0.5 pb-1 border shadow-md flex rounded-lg ${className}`}
            key={todo_id}
            layout
            drag={"x"}
            dragSnapToOrigin
            dragConstraints={{right: 0, left: 0}}
            onDragEnd={dragEndHandler}
            onDragStart={dragStartHandler}
        >
            {children}
            <AnimatePresence>
                {del && (
                    <motion.button
                        onClick={async () => {
                            await deleteTodo(todo_id)
                        }}
                        key={todo_id}
                        initial={{
                            opacity: 0,
                            scale: 0
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            transition: {
                                delay: 0.3
                            }
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0
                        }}
                        className='relative -right-14 text-2xl'
                    >
                        <MdDelete/>
                    </motion.button>
                )}
            </AnimatePresence>
        </motion.li>
    )
}