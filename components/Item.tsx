import ItemI from '../interfaces/Item'

import Anchor from '../components/Anchor'
import styles from '../styles/Item.module.scss'

interface Props {
    item: ItemI
}

export default function Item({ item }: Props) {
    return (
        <span className={styles.item}>
            <Anchor href={item.href}>
                <p>{item.title}</p>
            </Anchor>
            <p className={styles.item__subtitle}>{item.subtitle}</p>
            <p className={styles.item__date}>{item.date}</p>
        </span>
    )
}