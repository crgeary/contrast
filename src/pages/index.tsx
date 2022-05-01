import { NextPage } from "next";
import Head from "next/head";
import { Dispatch, SetStateAction } from "react";
import { App } from "../components/App";

const IndexPage: NextPage<{ setIsDark: Dispatch<SetStateAction<boolean>> }> = ({ setIsDark }) => {
    return (
        <>
            <Head>
                <title>Contrast</title>
            </Head>
            <App setIsDark={setIsDark} />
        </>
    );
};

export default IndexPage;
