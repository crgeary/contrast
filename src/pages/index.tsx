import { NextPage } from 'next';
import Head from 'next/head';
import { App } from '../components/App';

const IndexPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Contrast</title>
            </Head>
            <App />
        </>
    );
};

export default IndexPage;
