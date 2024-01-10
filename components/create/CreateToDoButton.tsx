'use client'

import React from 'react'
import {useFormStatus} from 'react-dom'

interface Props {

}

export function CreateToDoButton({}: Props) {

    const {pending} = useFormStatus()

    return (
        <button className='bg-black text-white p-2 w-full' disabled={pending}>
            Create new task
        </button>
    )
}