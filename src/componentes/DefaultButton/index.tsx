import styles from './styles.module.css'

type DefaultButtonProps = {
    icon: React.ReactNode
    color?: 'verde' | 'vermelho'
} & React.ComponentProps<'button'>

export function DefaultButton({ icon, color = 'verde', ...props }: DefaultButtonProps) {
    return <>
        <button className={`${styles.button} ${styles[color]}`} {...props}>

            {icon}

        </button>
    </>
}