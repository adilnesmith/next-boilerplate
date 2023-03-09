import { FC } from 'react';
import { DetailPanelProps } from 'lib/@types/common'
import HomePanel from './home/'
import ProfilePanel from './profile'
import Page1 from './Page1';
import Page2 from './Page2'
import { HOME_PAGE, PAGE_1, PAGE_2, PROFILE } from 'lib/constants'

const DetailPanel: FC<DetailPanelProps> = (selectedId) => {
    return (
        <>
            {selectedId.selectedId == HOME_PAGE && <HomePanel />}
            {selectedId.selectedId == PROFILE && <ProfilePanel />}
            {selectedId.selectedId == PAGE_1 && <Page1 />}
            {selectedId.selectedId == PAGE_2 && <Page2 />}
        </>
    )

}

export default DetailPanel;