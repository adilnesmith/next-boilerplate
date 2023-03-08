import { FC, useEffect } from 'react'
import { HeaderProps } from 'lib/@types/common'
import {NAVIGATION,SEARCH,LOGO } from 'lib/constants/Header';
import styles from './Header.module.scss'

const Header: FC<HeaderProps> = ({ }) => {
    return (
        <header className={styles.wrapper}>
            <div className={styles.wrapper__columns__logo}>{LOGO}</div>
            <nav className={styles.wrapper__columns__navigation}>{NAVIGATION}</nav>
            <div className={styles.wrapper__columns__search}>{SEARCH}</div>
        </header >
    )
}
export default Header;