import React, { useState } from "react";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import Head from "next/head";
import TwitterShareButton from "../../components/TwitterShareButton";
import CanvasBoard from "../../components/CanvasBoard";
import styles from "../../styles/Home.module.css";
import Layout from "../../components/Layout";
import Link from "next/link";

type Props = {
  id: string;
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<Props>> => {
  if (typeof context.params?.id === "string") {
    return {
      props: {
        id: context.params?.id,
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
};

const Page = ({ id }: Props) => {
  const baseUrl = process.env.NEXT_PUBLIC_WEB_URL ?? "";
  const [body, setBody] = useState("");
  const id_for_url = encodeURIComponent(id);
  return (
    <Layout>
      <>
        <Head>
          <meta
            property="og:image"
            key="ogImage"
            content={`${baseUrl}/api/ogp?id=${id}`}
          />
          <meta
            name="twitter:card"
            key="twitterCard"
            content="summary_large_image"
          />
          <meta
            name="twitter:image"
            key="twitterImage"
            content={`${baseUrl}/api/ogp?id=${id}`}
          />
          <meta property="og:title" content="たてかんメーカー" />
        </Head>
        <main className={styles.main}>
          <div className="text-center">
            <h1 className={styles.title}>
              ようこそ<a>たてかんメーカーへ！</a>
            </h1>
            <div className="row justify-content-center mb-3">
              <CanvasBoard text={id}></CanvasBoard>
            </div>
            <div className="my-3 d-flex justify-content-center">
              <TwitterShareButton
                url={`${process.env.NEXT_PUBLIC_WEB_URL}/`}
                text={id}
              ></TwitterShareButton>
            </div>
            <div className="my-3 d-flex justify-content-center">
              <Link href={`/`}>
                <a className="re-tatekan-button">もう１回たてかんを作る</a>
              </Link>
            </div>
          </div>
        </main>
      </>
    </Layout>
  );
};
export default Page;
