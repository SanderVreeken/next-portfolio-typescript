import Anchor from './Anchor'
import styles from '../styles/Banner.module.scss'

// Banner that is fixed at the bottom of the projects and writing page.
export default function Banner() {
    return (
        <div className={styles.banner}>
            <span>
                <p>Like my work and would like to support me?</p>
                <Anchor href='https://www.buymeacoffee.com/sandervreeken'>
                    <p>Click here to buy me a coffee.</p>
                </Anchor>
            </span>
        </div>
    )
}