import { FC } from 'react';
import { FooterProps } from 'lib/types/common'
import styles from './Footer.module.scss';
const Footer: FC<FooterProps> = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__columns__first}>Column I</div>
            <div className={styles.wrapper__columns__second}>Column II</div>
            <div className={styles.wrapper__columns__third}>Column III</div>
        </div>
    )
}
export default Footer;