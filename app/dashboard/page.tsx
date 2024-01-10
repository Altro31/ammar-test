import React from 'react'
import * as UserService from "@/api/services/user"
import {getDayTimeGreeting} from "@/utils/standalones/date";
import {redirect} from "next/navigation";
import {DeciderButtonGroup} from "@/components/home/DeciderButtonGroup";
import {ToDoList} from "@/components/home/ToDoList";

interface Props {
    searchParams: {
        completed: string
    }
}


export default async function HomePage({searchParams}: Props) {

    const user = await UserService.getCurrentUser({withToDos: true})

    if (!user) redirect('/')

    const activesCount = user.todos.reduce((prev, curr) => {
        return curr.done? prev : prev+1
    }, 0)

    let todo_count_str = `${activesCount} things`
    if (activesCount == 0) todo_count_str = 'nothing'
    if (activesCount == 1) todo_count_str = 'only 1 thing'

    const greeting = getDayTimeGreeting()

    return (
        <div className='h-full w-[85%] mx-auto mt-2'>
            <h1 className='text-2xl font-semibold my-1'>
                {greeting}, {user?.name}
            </h1>
            <h2 className='text-medium font-semibold text-gray-700 my-1'>
                {`We have ${todo_count_str} on the list today`}
            </h2>
            <DeciderButtonGroup/>
            <ToDoList todos={user.todos} showCompleted={searchParams.completed}/>
        </div>
    )
}