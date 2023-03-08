import { FC } from 'react';
import { FooterProps } from 'lib/@types/common'
import styles from './Footer.module.scss';
import {COLUMN_1,COLUMN_2,COLUMN_3 } from 'lib/constants/Footer';
const Footer: FC<FooterProps> = () => {
    return (
        <footer className={styles.wrapper}>
            <div className={styles.wrapper__columns__first}>{COLUMN_1}</div>
            <div className={styles.wrapper__columns__second}>{COLUMN_2}</div>
            <div className={styles.wrapper__columns__third}>{COLUMN_3}</div>
        </footer>
    )
}
export default Footer;