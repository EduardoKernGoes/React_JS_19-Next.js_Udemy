import styels from './Cabecalho.module.css'
import React from 'react'

type CabecalhoProps = {
    children: React.ReactNode
}

export function Cabecalho({children}: CabecalhoProps) {
    return <h1 className={styels.cabecalho} > {children}</h1>
}