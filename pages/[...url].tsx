import { FC } from 'react';
import { GetStaticPaths, GetStaticProps, GetServerSideProps } from 'next'
const CustomPage: FC<any> = () => {
    return (
        <>hello page</>
    )
}
export default CustomPage;

export const getStaticPaths: GetStaticPaths = (context) => {

    return {
        paths: [], fallback: "blocking"
    }
}
export const getStaticProps: GetStaticProps = (context) => {
    return {
        props: {},
        revalidate: 5
    }

}
// export const getServerSideProps: GetServerSideProps = async (context) => {
//     return {
//         props: {

//         }
//     }
// }