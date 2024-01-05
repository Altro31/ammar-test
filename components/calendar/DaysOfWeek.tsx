import React from 'react'

const weekdays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

export function DaysOfWeek() {

    return weekdays.map(day => (
        <span key={day} className='text-gray-400 text-sm text-center w-8 h-6'>
            {day}
        </span>
    ))
}