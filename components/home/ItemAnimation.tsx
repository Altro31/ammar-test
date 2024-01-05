'use client'

import {AnimatePresence, motion} from 'framer-motion'
import React, {useRef} from 'react'
import {MdDelete} from "react-icons/md";
import {deleteTodo} from "@/api/services/todo";
import {useToDoAnimation} from "@/utils/hooks/home/use_todo_animation";

interface Props {
    children: React.ReactNode
    todo_id: string
}

export function ItemAnimation({children, todo_id}: Props) {

    const ref = useRef(null);
    const {isDeleting, dragEndHandler} = useToDoAnimation(ref)

    let className = "relative left-0"
    if (isDeleting) className = "relative -left-20"

    return (
        <motion.li
            className={`p-0.5 pb-1 border shadow-md flex rounded-lg ${className} relative`}
            key={todo_id}
            layout
            drag={"x"}
            dragSnapToOrigin
            dragConstraints={{right: 0, left: 0}}
            onDragEnd={dragEndHandler}
            ref={ref}

            animate={{
                opacity: 1
            }}

            exit={{
                opacity: 0
            }}
        >
            {children}
            <AnimatePresence>
                {isDeleting && (
                    <DeleteForm key={todo_id} todo_id={todo_id}/>
                )}
            </AnimatePresence>
        </motion.li>
    )
}

function DeleteForm({todo_id}: { todo_id: string }) {

    return (
        <motion.form

            action={deleteTodo.bind(null, todo_id)}

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
            className='flex items-center absolute -right-14 text-2xl h-full'
        >
            <DeleteButton/>
        </motion.form>
    )
}

function DeleteButton() {

    return (
        <button>
            <MdDelete/>
        </button>
    )
}