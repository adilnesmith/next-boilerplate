import { FC } from 'react';
import { DetailPanelProps } from 'lib/types/common'
import HomePanel from './home/'
import ProfilePanel from './profile'
import Page1 from './Page1';
import Page2 from './Page2'


const DetailPanel: FC<DetailPanelProps> = (selectedId) => {

    return (
        <>
            {selectedId.selectedId == 1 && <HomePanel />}
            {selectedId.selectedId == 2 && <ProfilePanel />}
            {selectedId.selectedId == 3 && <Page1 />}
            {selectedId.selectedId == 4 && <Page2 />}
        </>
    )

}

export default DetailPanel;