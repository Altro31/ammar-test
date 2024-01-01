'use server'

import {prisma} from "@/api/prisma_client/PrismaClient";

export async function getCurrentUser() {
    return prisma.user.findUnique({
        where: {email: 'albe020531@outlook.com'},
        include: {todos: true}
    })
}