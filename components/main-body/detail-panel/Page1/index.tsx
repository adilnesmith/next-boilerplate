import { FC, useState, useEffect } from 'react'
import { Page1Props } from 'lib/@types/common'
import styles from './Page1.module.scss'
const arr = [
    "apple", "banana", "mango", "apple"
];
const Page1: FC<Page1Props> = () => {
    const [text, setText] = useState<String | undefined>();
    const [found, setFound] = useState<String | undefined>();
    useEffect(() => {
        if (arr.includes(text)) {
            setFound(text)
        } else {
            setFound("No results found")
        }
    }, [text])
    console.log(found)
    return (
        <div className={styles.wrapper}>
            <input className={styles['wrapper__search-box']} type="text" placeholder="search here ..." onChange={(e) => { setText(e.target.value) }} />
            <div className={styles.wrapper__container}>{found}</div>
        </div>
    )
}
export default Page1;