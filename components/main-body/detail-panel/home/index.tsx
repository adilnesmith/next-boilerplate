import { FC, useEffect } from 'react';
import { HomeProps } from 'lib/@types/common'
import { Counter } from 'pages/counter'
import { Text } from 'pages/text'
const Home: FC<HomeProps> = () => {
    return (
        <div data-testid="home">
            <Counter />
            <Text />
        </div>

    )
}

export default Home;