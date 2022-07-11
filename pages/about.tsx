import Head from 'next/head'
import Image from 'next/image'
import Anchor from '../components/Anchor'
import Button from '../components/Button'
import Header from '../components/Header'
import Item from '../components/Item'
import Subscribe from '../components/Subscribe'
import Text from '../components/Text'
import { experiences } from '../elements/items'
import styles from '../styles/About.module.scss'

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sander Vreeken | About</title>
        <meta name='About' content='About' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <Header />
        <span>
          <span className={styles.about__image}>
            <Image alt='Photo Sander Vreeken' height={308.8} layout='fixed' src='/assets/SanderVreeken.jpg' width={231.6} />
          </span>
          <Text>
            <p className={styles.home__intro}>Hey, I&apos;m Sander. I&apos;m a <a href='https://dribbble.com/SanderVreeken'>designer</a>, revenue executive, <a href='https://medium.com/@alexanderfvreeken'>writer</a>, and <a href='https://github.com/SanderVreeken'>software tinkerer.</a> I&apos;m currently looking after the rates of the <a href='https://www.ihg.com/holidayinnexpress/hotels/nl/nl/arnhem/zymex/hoteldetail'>Holiday Inn Express Arnhem</a> & <a href='https://www.ihg.com/holidayinnexpress/hotels/nl/nl/the-hague/hagms/hoteldetail'>Holiday Inn Express The Hague Parliament</a> while <a href='https://github.com/The-Vincent-Hotel-Group'>automating most of the repetitive tasks.</a></p>
          </Text>
          <Text>
            <p className={styles.home__intro}>In the past I have worked for the <a href='https://www.marriott.com/hotels/travel/amssi-sheraton-amsterdam-airport-hotel-and-conference-center/'>Sheraton Amsterdam Airport Hotel</a> and the <a href='https://www.marriott.com/hotels/travel/rtmmc-the-hague-marriott-hotel/'>The Hague Marriott Hotel</a>, both in a revenue role.</p>
          </Text>
          <Text>
            <p className={styles.home__intro}>Before joining the workforce, I graduated from <a href='https://hotelschool.nl/en'>Hotelschool The Hague</a> with a Bachelor Business Administration in Hotel Management. In high school I completed my Pre University Education.</p>
          </Text>
          <Text>
            <p className={styles.home__intro}>You can find me on <a href='https://twitter.com/SanderVreeken'>Twitter</a>, or on GitHub where I’m building and maintaining in the open for both <a href='https://github.com/SanderVreeken'>myself</a> and <a href='https://github.com/The-Vincent-Hotel-Group'>The Vincent Hotel Group.</a></p>
          </Text>
          <Anchor href='/assets/CV_Sander-Vreeken.pdf'>
            <Button>Download my CV [.pdf]</Button>
          </Anchor>
        </span>
        {/* <Subscribe /> */}
        <span>
            {experiences.map((project, index) => (
                <Item item={project} key={index} />
            ))}
        </span>
      </main>
    </div>
  )
}
