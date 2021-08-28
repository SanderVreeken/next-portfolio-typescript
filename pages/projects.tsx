import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Item from '../components/Item'
import Subscribe from '../components/Subscribe'
import { projects } from '../elements/items'
import styles from '../styles/Projects.module.scss'

export default function Projects() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sander Vreeken | Projects</title>
        <meta name='Projects' content='Projects' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <Header />
        <span className={styles.projects__heading}>
            <h1>Projects</h1>
            <h2>Apps and scripts written for myself and others.</h2>
        </span>
        <Subscribe />
        <span>
            {projects.map((project, index) => (
                <Item item={project} key={index} />
            ))}
        </span>
        <Banner />
      </main>
    </div>
  )
}