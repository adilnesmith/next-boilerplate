import { FC, useEffect } from 'react'
import { HeaderProps } from 'lib/types/common'
import styles from './Header.module.scss'

const Header: FC<HeaderProps> = ({ }) => {
    return (
        <header className={styles.wrapper}>
            <div className={styles.wrapper__columns__logo}>LOGO</div>
            <nav className={styles.wrapper__columns__navigation}>Navigation</nav>
            <div className={styles.wrapper__columns__search}>search</div>
        </header >
    )
}
export default Header;