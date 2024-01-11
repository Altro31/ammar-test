import React from 'react'

const weekdays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']

export function DaysOfWeek() {

    return weekdays.map(day => (
        <i key={day} className='text-gray-400 text-sm text-center w-full h-6'>
            {day}
        </i>
    ))
}