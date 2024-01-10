'use server'

import { prisma } from "../prisma_client/PrismaClient"
import {todos} from "@/api/services/todo";
import {ToDo} from "@prisma/client";

interface getCurrentUserArgs {
    withToDos?: boolean
    countAllToDos?: boolean
}

export async function getCurrentUser(args?: getCurrentUserArgs) {

    const user = await prisma.user.findUnique({
        where: {email: 'albe020531@outlook.com'},
        include: {
            ...(args?.countAllToDos ? {
                _count: {
                    select: {
                        todos: true
                    }
                }
            } : {})
        }
    })

    if (user) {

        if (args?.withToDos) {
            // @ts-ignore
            user.todos = await todos({
                user_email: user.email,
                date: new Date()
            })
        }

        if (!user._count) user._count = {todos: 0}

    }

    return user as typeof user & {todos: ToDo[]}
}