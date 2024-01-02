'use client'

import React, {useState} from 'react'
import Datepicker, {DateRangeType, DateValueType} from "react-tailwindcss-datepicker";

interface Props {
    className?: string
}

export function DatePicker({className}: Props) {

    const [date, setDate] = useState<DateRangeType>({
        endDate: new Date(), startDate: new Date()
    })

    const handleChange = (new_value: DateValueType) => {

        console.log(typeof new_value?.startDate)

        setDate(new_value as DateRangeType)
    }

    return (
        <Datepicker
            value={date}
            onChange={handleChange}
            containerClassName={className}
            inputName='date'
            minDate={new Date()}
            useRange={false}
            asSingle
            popoverDirection='up'
        />
    )
}