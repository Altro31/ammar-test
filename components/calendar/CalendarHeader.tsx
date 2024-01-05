'use client'

import React from 'react'
import {IoChevronBackOutline, IoChevronForwardOutline} from "react-icons/io5";
import {usePathname, useRouter} from "next/navigation";

interface Props {
    date: Date
}

export function CalendarHeader({date}: Props) {

    const {replace} = useRouter()
    const pathname = usePathname()

    const handleBack = () => {
        const new_date = new Date(date)
        new_date.setMonth(new_date.getMonth() - 1)
        replace(`${pathname}?date=${new_date.getTime()}`)
    }

    const handleForward = () => {
        const new_date = new Date(date)
        new_date.setMonth(new_date.getMonth() + 1)
        replace(`${pathname}?date=${new_date.getTime()}`)
    }

    return (
        <div className='flex bg-black text-gray-100 justify-around p-1'>
            <button onClick={handleBack}>
                <IoChevronBackOutline className='text-2xl'/>
            </button>
            <span className='text-sm text-center basis-3/5'>
                {date.toLocaleString('en-US', {
                    month: 'long',
                    year: 'numeric',
                })}
            </span>
            <button onClick={handleForward}>
                <IoChevronForwardOutline className='text-2xl'/>
            </button>
        </div>
    )
}