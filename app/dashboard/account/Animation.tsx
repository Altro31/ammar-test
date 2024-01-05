'use client'
import {motion} from 'framer-motion'
import React from 'react'


interface Props {
    children: React.ReactNode
    className: string
}

export function AvatarAnimation({children, className}: Props) {

    return (
        <motion.div
            className={className}
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: 1
            }}
        >
            {children}
        </motion.div>
    )
}

export function CardAnimation({children, className}: Props) {

    return (
        <motion.div
            className={className}
            initial={{
                x: -200,
                opacity: 0.5
            }}
            animate={{
                x: 0,
                opacity: 1,
                transition: {
                    bounce: 0,
                    ease: 'easeOut'
                }
            }}
        >
            {children}
        </motion.div>
    )
}