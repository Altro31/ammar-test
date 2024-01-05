'use server'

import { prisma } from "../prisma_client/PrismaClient"

interface getCurrentUserArgs {
    withToDos?: boolean
    countActiveToDos?: boolean
    countCompletedToDos?: boolean
    countAllToDos?: boolean
}

export async function getCurrentUser(args?: getCurrentUserArgs) {

    const user = await prisma.user.findUnique({
        where: {email: 'albe020531@outlook.com'},
        include: {
            todos: {
                orderBy: args?.withToDos ? [
                    {hasTime: 'desc'},
                    {date: 'desc'}
                ] : undefined,
            },
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
            const today = new Date()

            user.todos = user.todos.map(todo => {
                return {
                    ...todo,
                    //If previous done is false and actual date is less than todo date, then todo is completed (done), otherwise is active
                    done: todo.done || (todo.hasTime && todo.date.getTime() - today.getTime() < 0)
                }
            })
        }

        if (!user._count) user._count = {todos: 0}

        if (args?.countActiveToDos) {
            // @ts-ignore
            user._count.activeToDos = await prisma.toDo.count({
                where: {
                    userEmail: user.email,
                    done: false
                }
            })
        }

        if (args?.countCompletedToDos) {
            // @ts-ignore
            user._count.completedToDos = await prisma.toDo.count({
                where: {
                    userEmail: user.email,
                    done: true
                }
            })
        }

    }

    return user as typeof user & {
        _count: {
            activeToDos: number | undefined,
            completedToDos: number | undefined
        }
    }
}