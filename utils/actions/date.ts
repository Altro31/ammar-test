'use server'

import {redirect} from "next/navigation";

export async function changeDate(date: Date) {
    redirect(`/dashboard/calendar?date=${date.getTime()}`)
}