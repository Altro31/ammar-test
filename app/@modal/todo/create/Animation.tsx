'use client'
import {motion} from 'framer-motion'
import React from 'react'

interface Props {
    children: React.ReactNode
    className: string
}

export function Animation({children, className}: Props) {

    return (
        <motion.div
            className={className}

            initial={{
                opacity: 0,
                y: 100
            }}

            animate={{
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.4,
                }
            }}
        >
            {children}
        </motion.div>
    )
}