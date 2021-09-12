import Head from 'next/head'
import Anchor from '../components/Anchor'
import Button from '../components/Button'
import Header from '../components/Header'
import Item from '../components/Item'
import Subscribe from '../components/Subscribe'
import Text from '../components/Text'
import { articles, projects } from '../elements/items'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sander Vreeken | Home</title>
        <meta name='Home' content='Home' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <Header />
        <span className={styles.home__heading}>
          <Text>
            <p className={styles.home__intro}>Hey, I&apos;m Sander. I&apos;m a <a href='https://dribbble.com/SanderVreeken'>designer</a>, revenue executive, <a href='https://medium.com/@alexanderfvreeken'>writer</a>, and <a href='https://github.com/SanderVreeken'>software tinkerer.</a> I&apos;m currently looking after the rates of the <a href='https://www.ihg.com/holidayinnexpress/hotels/nl/nl/arnhem/zymex/hoteldetail'>Holiday Inn Express Arnhem</a> & <a href='https://www.ihg.com/holidayinnexpress/hotels/nl/nl/the-hague/hagms/hoteldetail'>Holiday Inn Express The Hague Parliament</a> while <a href='https://github.com/The-Vincent-Hotel-Group'>automating most of the repetitive tasks.</a></p>
          </Text>
          <Text>
            <p className={styles.home__intro}>In the past I have worked for the <a href='https://www.marriott.com/hotels/travel/amssi-sheraton-amsterdam-airport-hotel-and-conference-center/'>Sheraton Amsterdam Airport Hotel</a> and the <a href='https://www.marriott.com/hotels/travel/rtmmc-the-hague-marriott-hotel/'>The Hague Marriott Hotel</a>, both in a revenue function.</p>
          </Text>
          <Text>
            <p className={styles.home__intro}>I am currently building <a href='https://www.tasktilt.com'>Tasktilt</a>, a task managenment tool.</p>
          </Text>
          <span>
            <Anchor href='/about'>
              <Button>Learn more about me</Button>
            </Anchor>
            <Anchor href='https://www.linkedin.com/in/sandervreeken/'>
              <Button>My LinkedIn</Button>
            </Anchor>
          </span>
        </span>
        <Subscribe />
        <span>
          <h4 className={styles.home__title}>Recent Writing</h4>
          {articles.map((article, index) => (
            <Item item={article} key={index} />
          ))}
        </span>
        <span>
          <h4 className={styles.home__title}>Select Projects</h4>
          {projects.map((project, index) => (
                <Item item={project} key={index} />
          ))}
        </span>
      </main>
    </div>
  )
}
