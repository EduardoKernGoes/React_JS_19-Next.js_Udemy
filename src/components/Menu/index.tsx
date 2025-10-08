import { HistoryIcon, SettingsIcon, HouseIcon, SunIcon, MoonIcon } from 'lucide-react'
import styles from './styles.module.css'
import { useState, useEffect } from 'react'

type Themes = 'dark' | 'light'

export function Menu() {

    const [theme, setTheme] = useState<Themes>(() => {
        const storageTheme = (localStorage.getItem('theme') as Themes) || 'dark'
        return storageTheme;
    })

    const iconTheme = {

        dark: <SunIcon />,
        light: <MoonIcon />

    }

    function changeTheme(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>){
        event.preventDefault()

        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark'
            return nextTheme
        })

    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    return <nav className={styles.menu} >
        <a className={styles.menuLink} href="#" aria-label='Ir para home' title='Home'>
            <HouseIcon />
        </a>
        <a className={styles.menuLink} href="#" aria-label='Ver histórico' title='Histórico'>
            <HistoryIcon />
        </a>
        <a className={styles.menuLink} href="#" aria-label='Configurações' title='Configurações'>
            <SettingsIcon />
        </a>
        <a className={styles.menuLink} href="#" aria-label='Mudar tema' title='Tema' onClick={changeTheme}>
            {iconTheme[theme]}
        </a>
    </nav>
}