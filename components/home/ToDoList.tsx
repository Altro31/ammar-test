import {ToDo} from '@prisma/client'
import React from 'react'
import {Chip} from "@nextui-org/react";
import {ItemAnimation} from "@/components/home/ItemAnimation";
import {ToDoListAnimation} from "@/components/home/ToDoListAnimation";
import {activeToDo, completeToDo} from "@/api/services/todo";
import {CiBoxList} from "react-icons/ci";

interface Props {
    todos: ToDo[]
    showCompleted?: string
    overflow?: string
    ulClassName?: string
}

export function ToDoList({todos, showCompleted, overflow = 'overflow-auto', ulClassName}: Props) {

    let list = todos.filter(todo => {

        if (showCompleted === 'true')
            return todo.done
        else if (showCompleted === 'false')
            return !todo.done

        return true
    })

    return (
        // Set a key to make 2 different ToDoListAnimations
        <ToDoListAnimation key={`ToDoListAnimation-${showCompleted === 'true'}`} overflow={overflow}
                           ulClassName={ulClassName}>
            {/*Used a fragment here because a list of ReactNodes cannot be passed from server to client*/}
            <>
                {list.length > 0
                    ? (list.map(todo => (
                        <ItemAnimation todo_id={todo.id} key={todo.id}>
                            {/*Quarter, green or gray*/}
                            <form className='basis-1/4 p-1'
                                  action={(todo.done ? activeToDo : completeToDo).bind(null, todo.id)}>
                                <button
                                    className={`w-8 h-8 rounded-md mx-auto border ${todo.done ? 'bg-gray-500 border-gray-700' : 'bg-green-300 border-green-600'}`}
                                ></button>
                            </form>
                            <div className='basis-3/4'>

                                {/*Title*/}
                                <h3 className={`font-bold text-md leading-none ${todo.done ? 'line-through' : ''}`}>
                                    {todo.title}
                                </h3>

                                {/*Time (if any)*/}
                                {todo.hasTime && (
                                    <div className='text-sm font-semibold'>
                                        {'Today '}
                                        {todo.date.toLocaleTimeString("en-US", {
                                            hour: 'numeric',
                                            hour12: true,
                                            minute: "2-digit",
                                        }).toLocaleLowerCase().replaceAll(' ', '')}
                                    </div>
                                )}

                                {/*Description (if any)*/}
                                {todo.description && (
                                    <p className='text-sm text-gray-400 leading-none'>
                                        {todo.description}
                                    </p>
                                )}

                                {/*Tags*/}
                                {todo.Tags.length > 0 && (
                                    <ul className='p-0.5 flex gap-1'>
                                        {todo.Tags.map(tag => (
                                            <li key={tag}>
                                                <Chip size={"sm"} color={"danger"} className='rounded-md'>{tag}</Chip>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </ItemAnimation>
                    )))
                    : (
                        <div className='flex gap-2 h-full w-full items-center justify-center text-gray-400'>
                            <CiBoxList className='text-2xl'/>
                            <span className='text-lg'>Empty List</span>
                        </div>
                    )
                }
            </>
        </ToDoListAnimation>

    )
}