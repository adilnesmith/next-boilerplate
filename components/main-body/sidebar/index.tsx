import { FC, useState } from 'react';
import { SidebarProps } from 'lib/types/common'
import styles from './Sidebar.module.scss'

const Sidebar: FC<SidebarProps> = (props) => {
    const { setSelectedID } = props
    const links = [
        {
            id: 1,
            label: "Home"
        }, {
            id: 2,
            label: "Profile"
        }, {
            id: 3,
            label: "Page I"
        }, {
            id: 4,
            label: "Page II"
        },
    ]
    return (
        <aside className={styles.wrapper}>
            <nav>
                <ul className={styles.wrapper__navigation}>
                    {links.map((e, i) => {
                        return <li key={i} className={styles.wrapper__navigation__link} onClick={() => { setSelectedID(e.id) }}> {e.label}</li>
                    })}
                </ul>
            </nav>
        </aside >
    )
}

export default Sidebar;