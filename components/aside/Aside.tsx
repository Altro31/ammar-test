import React from 'react'
import {ToDoList} from "@/components/home/ToDoList";
import {ToDoServices} from 'components/api/services';

interface Props {

}

export async function Aside({}: Props) {

    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)

    const todos = await ToDoServices.todos({user_email: 'albe020531@outlook.com', date: tomorrow})

    return (
        <div className='hidden lg:block mt-5 ml-5 border px-8 py-3 rounded-xl'>
            <h2 className='text-xl font-medium sticky top-0 z-10 bg-white/95'>
                What's on Tomorrow
            </h2>
            <ToDoList todos={todos} overflow={'overflow-normal'} showCompleted={'false'}/>
        </div>
    )
}