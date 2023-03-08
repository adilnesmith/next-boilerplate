import { FC, useContext, useEffect } from 'react'
import { HeaderProps } from 'lib/types/common'
import styles from './Header.module.scss'
import { AppContext } from 'lib/context'

const Header: FC<HeaderProps> = ({ }) => {
    const { appState, setAppState } = useContext(AppContext);
    useEffect(() => {
        setAppState({ iii: "ppp" })
    }, [])

    console.log(appState)
    return (
        <header className={styles.wrapper}>
            <div className={styles.wrapper__columns__logo}>LOGO</div>
            <nav className={styles.wrapper__columns__navigation}>Navigation</nav>
            <div className={styles.wrapper__columns__search}>search</div>
        </header >
    )
}
export default Header;