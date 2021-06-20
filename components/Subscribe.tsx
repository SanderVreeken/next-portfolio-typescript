import Button from '../components/Button'
import Text from '../components/Text'
import styles from '../styles/Subscribe.module.scss'

export default function Subscribe() {
    return (
        <span className={styles.subscribe}>
            <h4>The email newsletter</h4>
            <Text>
                <p>Get updates about new posts, new projects, or other meaningful updates to this site delivered to your inbox. Alternatively, you can follow me on <a href='https://twitter.com/SanderVreeken'>Twitter.</a></p>
            </Text>
            <span>
                <input placeholder='Email address' />
                <Button>Subscribe</Button>
            </span>
        </span>
    )
}