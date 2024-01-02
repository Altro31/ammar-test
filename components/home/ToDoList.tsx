import {ToDo} from '@prisma/client'
import React from 'react'
import {compareDatesByDMY} from "@/utils/standalones/date";
import {Chip} from "@nextui-org/react";

interface Props {
    todos: ToDo[]
    showCompleted: boolean
}

export function ToDoList({todos, showCompleted}: Props) {

    const list = todos.filter(todo => showCompleted ? todo.done : !todo.done)

    return (
        <ul className='my-4 flex flex-col gap-2 overflow-auto max-h-80'>
            {list.map(todo => (
                <li key={todo.id} className='p-0.5 pb-1 border shadow-md flex rounded-lg'>
                    <div className='basis-1/4 p-1'>
                        <div className='w-9 h-9 bg-red-500 rounded-md mx-auto'></div>
                    </div>
                    <div className='basis-3/4'>
                        <h3 className='font-bold text-md leading-none'>
                            {todo.title}
                        </h3>
                        <div className='text-sm font-semibold'>
                            {compareDatesByDMY(new Date(), todo.date) == 0
                                ? 'Today'
                                : todo.date.toLocaleDateString()
                            }
                            {' '}
                            {todo.date.toLocaleTimeString("en-US", {
                                hour: 'numeric',
                                hour12: true,
                                minute: "2-digit",
                            }).toLocaleLowerCase().replaceAll(' ', '')}
                        </div>
                        {todo.description && (
                            <p className='text-sm text-gray-400 leading-none'>
                                {todo.description}
                            </p>
                        )}
                        {todo.Tags.length > 0 && (
                            <ul>
                                {todo.Tags.map(tag => (
                                    <li key={tag}>
                                        <Chip size={"sm"} color={"danger"}>{tag}</Chip>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </li>
            ))}
        </ul>
    )
}