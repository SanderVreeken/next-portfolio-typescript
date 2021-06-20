import styles from '../styles/Text.module.scss'

interface Props {
    children: JSX.Element
}

export default function Text({ children }: Props) {
    return (
        <div className={styles.text}>
            {children}
        </div>
    )
}