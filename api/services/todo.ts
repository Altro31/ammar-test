'use server'

import {prisma} from "@/api/prisma_client/PrismaClient";
import {revalidatePath} from "next/cache";
import {permanentRedirect, redirect} from "next/navigation";

export async function createToDo(formData: FormData) {

    const title = (formData.get('title') as string)
    const description = (formData.get('description') as string)
    const tags = (formData.get('tags') as string).replaceAll(' ', '').split(',').filter(tag => Boolean(tag))
    const date = new Date(formData.get('date') as string)
    const [hours, minutes] = (formData.get('time') as string).split(':')
    date.setHours(parseInt(hours) || 0, parseInt(minutes) || 0)

    await prisma.toDo.create({
        data: {
            title,
            description,
            Tags: tags,
            date,
            User: {connect: {email: 'albe020531@outlook.com'}}
        }
    })

    revalidatePath('/home')
    permanentRedirect('/home')
}