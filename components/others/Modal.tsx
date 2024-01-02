import React from 'react'

interface Props {
    children: React.ReactNode
    className?: string
}

export function Modal({children, className}: Props) {

    return (
        <div className={`modal ${className ? className : ''}`}>
            {children}
        </div>
    )
}