import { FC, useState } from 'react';
import { MainBodyProps } from 'lib/types/common'
import Sidebar from './sidebar/index'
import styles from './MainBody.module.scss'
import DetailPanel from './detail-panel'
const MainBody: FC<MainBodyProps> = ({ }) => {
    const [selectedId, setSelectedID] = useState(1)
    return (
        <div className={styles.wrapper} >
            <Sidebar setSelectedID={setSelectedID} />
            <DetailPanel selectedId={selectedId} />
        </div>
    )
}
export default MainBody;