'use client'
import {redirect, usePathname, useRouter, useSearchParams} from "next/navigation";

export function useDecider(completed: boolean) {

    const pathname = usePathname()

    const searchParams = useSearchParams()
    let completed_param: string | boolean = searchParams.get('completed') ?? 'false'

    // Convert completed_param to boolean
    if (completed_param === 'true'){
        completed_param = true
    } else if (completed_param === 'false'){
        completed_param = false
    } else {
        redirect(pathname)
    }

    let style = 'decider-active'
    if (completed && !completed_param) style = ''
    if (!completed && completed_param) style = ''

    const router = useRouter()
    const handler = () => {
        router.replace(`${pathname}${completed ? `?completed=true` : ''}`)
    }

    return {
        style,
        handler
    }
}