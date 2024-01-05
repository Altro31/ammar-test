import React from 'react'
import {CalendarHeader} from "@/components/calendar/CalendarHeader";
import {Day} from "@/components/calendar/Day";
import {DaysOfWeek} from "@/components/calendar/DaysOfWeek";

interface Props {
    date: Date
}

export function Calendar({date}: Props) {

    const new_date = new Date(date)
    new_date.setDate(1)
    let day_of_week = new_date.getDay()

    new_date.setMonth(new_date.getMonth() + 1)
    new_date.setDate(new_date.getDate() - 1)

    const max = new_date.getDate() + day_of_week
    let list: number[] = []
    for (let i = 0; i < day_of_week; i++) {
        list[i] = 0
    }

    for (let i = day_of_week + 1; i <= max; i++) {
        list[i] = i - day_of_week
    }

    return (
        <div>
            <CalendarHeader date={date}/>
            <form className='grid grid-cols-7 mt-3 gap-2'>
                <DaysOfWeek />
                {list.map((day, i) => (
                    <Day date={date} day={day} key={date.getTime() + i}/>
                ))}
            </form>
        </div>
    )
}