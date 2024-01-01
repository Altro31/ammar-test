'use client'

import {DateRangeType, DateValueType } from "react-tailwindcss-datepicker";
import {useCallback, useState} from "react";

export function useDatePicker() {

    const today = new Date()

    // State for date picker to preserve the selected date over renderings
    const [date, setDate] = useState({
        startDate: today,
        endDate: today,
    } as DateRangeType)

    // Manage any change when date change
    const handleDateChange = useCallback((new_value: DateValueType) => {
        console.log(new_value)
        setDate(new_value as DateRangeType)
    }, [])

    const invalidDates: DateRangeType = {
        startDate: new Date(0),
        endDate: new Date(today.setDate(today.getDate()-1))
    }

    // Return date and function that manages date change
    return {date, handleDateChange, invalidDates}
}