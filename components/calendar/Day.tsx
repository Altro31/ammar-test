import React from 'react'
import {changeDate} from "@/utils/actions/date";

interface Props {
    date: Date
    day: number
}


export async function Day({date, day}: Props) {

    const new_date = new Date(date)
    new_date.setDate(day)

    const isActive = new Date(new_date).getTime() - new Date(date).getTime() == 0

    return (
        <button disabled={isActive || !day} formAction={changeDate.bind(null, new_date)}
                className={`text-md ${isActive ? 'bg-gray-300' : ''}`}
        >
            {day ? day : null}
        </button>
    )
}