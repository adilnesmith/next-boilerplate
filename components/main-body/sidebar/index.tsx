import { FC, useState } from 'react';
import { SidebarProps } from 'lib/@types/common'
import styles from './Sidebar.module.scss'
import { SIDE_BAR } from 'lib/general-config'

const Sidebar: FC<SidebarProps> = (props) => {
    const { setSelectedID } = props
    return (
        <aside data-testid="aside" className={styles.wrapper}>
            <nav>
                <ul className={styles.wrapper__navigation}>
                    {SIDE_BAR?.LINKS?.map((e, i) => {
                        return (
                            <li
                                data-testid={`aside-link-${e.id}`}
                                key={`aside-link-${e.id}`}
                                className={styles.wrapper__navigation__link}
                                onClick={() => { setSelectedID(e.id) }}
                            >
                                {e.label}
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar;