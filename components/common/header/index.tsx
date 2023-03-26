import { FC } from 'react'
import { HeaderProps } from 'lib/@types/common'
import { NAVIGATION, SEARCH, LOGO_ALT_TEXT } from 'lib/constants/Header';
import Image from 'next/image'
import styles from './Header.module.scss'

const Header: FC<HeaderProps> = ({ }) => {
    return (
        <header className={styles.wrapper}>
            <div className={styles.wrapper__columns__logo}>
                <Image
                    data-testid="logo"
                    src="https://testing-library.com/img/octopus-64x64.png"
                    alt={'this is the logo of xyz company' || LOGO_ALT_TEXT}
                    width={50}
                    height={50}
                />
            </div>
            <nav data-testid="navigation" className={styles.wrapper__columns__navigation}>{NAVIGATION}</nav>
            <div data-testid="search" className={styles.wrapper__columns__search}>{SEARCH}</div>
        </header >
    )
}
export default Header;