import ItemI from '../interfaces/Item'

import Anchor from '../components/Anchor'
import styles from '../styles/Item.module.scss'

interface Props {
    item: ItemI
}

export default function Item({ item }: Props) {
    // Function that is used to decide whether a Anchor component or solely a title should be returned.
    const getTitle = () => {
        if (item.href) {
            return (
                <Anchor href={item.href}>
                    <p>{item.title}</p>
                </Anchor>
            )
        } else {
            return <p>{item.title}</p>
        }
    }

    return (
        <span className={styles.item}>
            <p>{item.function}</p>
            {getTitle()}
            <p className={styles.item__subtitle}>{item.subtitle}</p>
            <p className={styles.item__date}>{item.date}</p>
        </span>
    )
}