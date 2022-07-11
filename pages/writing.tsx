import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Item from '../components/Item'
import Subscribe from '../components/Subscribe'
import { articles } from '../elements/items'
import styles from '../styles/Writing.module.scss'

export default function Writing() {
  return (
    <div className={styles.container}>
        <Head>
            <title>Sander Vreeken | Writing</title>
            <meta name='Writing' content='Writing' />
            <link rel='icon' href='/favicon.ico' />
        </Head>

        <main className={styles.main}>
            <Header />
            <span className={styles.writing__heading}>
                <h1>Writing</h1>
                <h2>Ideas and tutorials about software design and development.</h2>
            </span>
            {/* <Subscribe /> */}
            <span>
                {articles.map((article, index) => (
                    <Item item={article} key={index} />
                ))}
            </span>
            <Banner />
        </main>
    </div>
  )
}