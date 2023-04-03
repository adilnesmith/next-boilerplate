import { FC } from 'react';
import { HomeProps } from 'lib/@types/common'
import { Counter } from 'components/ui/counter'
import { Text } from 'components/ui/text'
const Home: FC<HomeProps> = () => {
    return (
        <div data-testid="home">
            <Counter />
            <Text />
        </div>

    )
}

export default Home;