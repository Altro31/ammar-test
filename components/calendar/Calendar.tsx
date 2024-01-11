import React from 'react'
import {CalendarHeader} from "@/components/calendar/CalendarHeader";
import {Day} from "@/components/calendar/Day";
import {DaysOfWeek} from "@/components/calendar/DaysOfWeek";

interface Props {
    date: Date
    className?: string
}

export async function Calendar({date, className}: Props) {

    //to date
    const new_date = new Date(date)

    //1st day of this month
    new_date.setDate(0)

    //Day of week of the 1st date of this month
    let day_of_week = new_date.getDay()

    //Las day of this month
    new_date.setMonth(new_date.getMonth() + 2, -1)
    const last_day = new_date.getDate() + 1

    //Fill unused days
    let list: number[] = []
    for (let i = 0; i < day_of_week; i++) {
        list[i] = 0
    }

    //Fill day that will be used
    for (let i = 1; i <= last_day; i++) {
        list[i + day_of_week - 1] = i
    }

    return (
        <div className={className}>
            <CalendarHeader date={date}/>
            <form className='grid grid-cols-7 mt-3 gap-2'>
                <DaysOfWeek/>
                {list.map((day, i) => (
                    <Day date={date} day={day} key={date.getTime() + i}/>
                ))}
            </form>
        </div>
    )
}