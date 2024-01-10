'use server'

import {prisma} from "@/api/prisma_client/PrismaClient";
import {revalidatePath} from "next/cache";
import {permanentRedirect} from "next/navigation";
import {ToDo} from "@prisma/client";


export async function createToDo(formData: FormData) {

    const title = (formData.get('title') as ToDo["title"])
    const description = (formData.get('description') as ToDo["description"])
    const tags = (formData.get('tags') as string).replaceAll(' ', '').split(',').filter(tag => Boolean(tag))
    const date = formData.get('date') ? new Date(formData.get('date') as string) : new Date()

    // If user specify a time, then it is added to date, otherwise date has time 00:00 and hasTime=false
    const formTime = formData.get('time') as string
    if (formTime) {
        const [hours, minutes] = formTime.split(':')
        date.setHours(parseInt(hours), parseInt(minutes),0,0)
    } else {
        date.setHours(0,0)
        date.setMinutes(date.getMinutes()+date.getTimezoneOffset())
    }

    await prisma.toDo.create({
        data: {
            title,
            description,
            Tags: tags,
            date,
            User: {connect: {email: 'albe020531@outlook.com'}},
            hasTime: Boolean(formTime)
        }
    })

    revalidatePath('/dashboard')
    revalidatePath('/dashboard/calendar')
    permanentRedirect('/dashboard')
}

export async function deleteTodo(id: ToDo["id"]) {

    try {
        await prisma.toDo.delete({where: {id}})

        revalidatePath('/dashboard')
        revalidatePath('/dashboard/calendar')
    } catch (e) {
    }

}

export async function completeToDo(id: ToDo["id"]) {

    await prisma.toDo.update({
        where: {id},
        data: {done: true}
    })

    revalidatePath('/dashboard/calendar')
    revalidatePath('/dashboard')
}

export async function activeToDo(id: ToDo["id"]) {

    const today = new Date()
    today.setHours(0, 0)

    await prisma.toDo.update({
        where: {id},
        data: {
            done: false,
            hasTime: false,
            date: today
        }
    })

    revalidatePath('/dashboard/calendar')
    revalidatePath('/dashboard')
}


interface ToDosArgs {
    user_email?: string
    date?: Date
}

export async function todos(args?: ToDosArgs) {

    let startDate: Date | undefined = undefined
    let endDate: Date | undefined = undefined

    if (args?.date) {
        startDate = new Date(args.date.getFullYear(), args.date.getMonth(), args.date.getDate())
        endDate = new Date(args.date.getFullYear(), args.date.getMonth(), args.date.getDate() + 1)
    }

    const res = await prisma.toDo.findMany({
        where: {
            userEmail: args?.user_email ? args.user_email : undefined,
            date: args?.date ? {
                gte: startDate,
                lt: endDate
            } : undefined
        },
        orderBy: [
            {done: 'desc'},
            {hasTime: 'desc'},
            {date: 'asc'}
        ]
    })

    const today = new Date()

    return res.map(todo => ({
        ...todo,
        done: todo.done || (todo.hasTime && todo.date.getTime() - today.getTime() < 0)
    }))
}