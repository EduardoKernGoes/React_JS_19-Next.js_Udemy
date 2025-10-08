import styels from './styles.module.css'
import React from 'react'

type HeadingProps = {
    children: React.ReactNode
}

export function Heading({children}: HeadingProps) {
    return <h1 className={styels.heading} > {children}</h1>
}