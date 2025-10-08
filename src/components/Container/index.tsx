import styles from './styles.module.css'
import React from 'react'

type ContainersProps = {
    children: React.ReactNode
}

export function Containers({children}: ContainersProps) {
    return (
        <div className={styles.container}>

            <div className={styles.content}>

                {children}

            </div>

        </div>
    )
}