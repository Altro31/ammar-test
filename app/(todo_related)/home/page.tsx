import React from 'react'
import * as UserService from "@/api/services/user"

export default async function HomePage() {

    const user = await UserService.getCurrentUser()
    const todo_count = user?.todos.length ?? 0

    let todo_count_str = `${todo_count} things`
    if (todo_count == 0) todo_count_str = 'nothing'
    if (todo_count == 1) todo_count_str = 'only 1 thing'

    console.log(user)

    return (
        <>
            <h1>
                Good morning, {user?.name}
            </h1>
            <h2>
                {`We have ${todo_count_str} on the list today`}
            </h2>

        </>
    )
}