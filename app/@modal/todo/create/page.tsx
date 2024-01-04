import React from "react"
import {Input} from "@nextui-org/react";
import {DatePicker} from "components/components/create/DatePicker";
import {createToDo} from "@/api/services/todo";
import {Animation} from "@/app/@modal/todo/create/Animation";

export default function CreateToDoPage() {

    return (
        <Animation
            className='bg-white w-full h-4/6 self-end rounded-t-3xl border-t shadow-2xl drop-shadow-2xl shadow-black p-2'
        >
            <h2 className='text-black text-xl font-bold w-10/12 mx-auto my-2'>
                Add a new task
            </h2>
            <form action={createToDo} className='flex flex-col justify-between w-10/12 mx-auto gap-3'>
                <Input name='title' label='Title' size='sm' autoCapitalize='sentences' isRequired/>
                <Input name='description' label='Description' size='sm' autoCapitalize='sentences'/>
                <Input name='tags' label='Tags' size='sm' autoCapitalize='words'/>
                <div className='flex gap-2'>
                    <DatePicker/>
                    <Input name='time' className='basis-2/5' type='time' size='sm'/>
                </div>
                <button className='bg-black text-white p-2 w-full'>
                    Create new task
                </button>
            </form>
        </Animation>
    )
}