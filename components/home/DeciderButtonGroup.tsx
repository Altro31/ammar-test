'use client'
import React from 'react'
import {useDecider} from "@/utils/hooks/menu/use_decider";

interface Props {

}

export function DeciderButtonGroup({}: Props) {

    return (
        <div className='flex w-full justify-center border rounded-md mt-3'>
            <DeciderButton>
                To Do
            </DeciderButton>
            <DeciderButton completed>
                Done
            </DeciderButton>
        </div>
    )
}

interface DeciderButtonProps {
    children: React.ReactNode
    completed?: boolean
}

function DeciderButton({children, completed = false}: DeciderButtonProps) {

    console.log(typeof completed)

    const {style, handler} = useDecider(completed)

    return style ?
        (
            <button
                onClick={handler}
                className={`flex-1 font-semibold text-gray-600 p-1 rounded-md decider-active`}>
                {children}
            </button>
        ) : (
            <button
                onClick={handler}
                className='flex-1 font-semibold text-gray-600 p-1 rounded-md'>
                {children}
            </button>
        )

}