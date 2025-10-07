import styles from './Conteiners.module.css'
import React from 'react'

type ConteinersProps = {
    children: React.ReactNode
}

export function Conteiners({children}: ConteinersProps) {
    return (
        <div className={styles.container}>

            <div className={styles.content}>

                {children}

            </div>

        </div>
    )
}