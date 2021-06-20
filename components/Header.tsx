import { useRouter } from 'next/router'
import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

import { headerButtons } from '../elements/buttons'
import ButtonI from '../interfaces/Button'

import Anchor from './Anchor'
import Button from './Button'
import styles from '../styles/Header.module.scss'

export default function Header() {
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)

    // Function that returns the title for the page based on the pathname.
    const getTitle = () => {
        const filter = headerButtons.filter(button => {
            return button.href === router.pathname 
        })
        return filter[0].title
    }

    // Function that returns the designated className in case the page is selected in the Header component.
    const isSelected = (button: ButtonI) => button.href === router.pathname ? styles.button__selected : undefined
    
    return (
        <header className={styles.header}>
            <span>
                {headerButtons.map((button, index) => (
                    <Anchor href={button.href} key={index}>
                        <Button className={isSelected(button)}>
                            {button.title}
                        </Button>
                    </Anchor>
                ))}
            </span>
            <span>
                <Button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                </Button>
                <p>{getTitle()}</p>
                <span className={styles.header__options} style={{
                    display: isOpen ? 'flex' : 'none'
                }}>
                    {headerButtons.map((button, index) => (
                        <Anchor href={button.href} key={index}>
                            <Button>
                                {button.title}
                            </Button>
                        </Anchor>
                    ))}
                </span>
            </span>
        </header>
    )
}