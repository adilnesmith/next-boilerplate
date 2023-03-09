import { FC, useEffect } from 'react';
import { HomeProps } from 'lib/@types/common'
import { Counter } from 'pages/counter'
const Home: FC<HomeProps> = () => {
    return (
        <Counter />
    )
}

export default Home;