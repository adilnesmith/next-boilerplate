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
        <div className={styles.wrapper}>
            <div className={styles.wrapper__columns__logo}>LOGO</div>
            <div className={styles.wrapper__columns__navigation}>Navigation</div>
            <div className={styles.wrapper__columns__search}>search</div>
        </div >
    )
}
export default Header;