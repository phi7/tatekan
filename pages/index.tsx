import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { FormEvent, useEffect, useState } from "react";
import CanvasBoard from "../components/CanvasBoard";
import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
  const [body, setBody] = useState("");
  const title = "たてかんメーカー";
  const description = "たてかんを簡単に作れます！";
  const ogpImageUrl = `${process.env.NEXT_PUBLIC_WEB_URL}/images/apple-touch-icon.png`;

  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>{title}</title>
          <meta property="og:image" key="ogImage" content={ogpImageUrl} />
          <meta name="twitter:card" key="twitterCard" content="summary" />
          <meta name="twitter:image" key="twitterImage" content={ogpImageUrl} />
          <meta name="description" key="description" content={description} />
          <meta property="og:title" key="ogTItle" content={title} />
          <meta property="og:site_name" key="ogSiteName" content={title} />
          <meta
            property="og:description"
            key="ogDescription"
            content={description}
          />
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          ></link>
        </Head>

        <div className="text-center">
          <main className={styles.main}>
            <h1 className={styles.title}>
              ようこそ<a>たてかんメーカーへ！</a>
            </h1>
            {/* <div>
              ※Twitterに投稿したときに Nikkyou Sans
              Font（共産党っぽいフォント）に変わります．ただし，Nikkyou Sans
              Fontに収録されていない漢字は文字化けします．使える文字については以下URL参照．
            </div> */}
            <a
              className="kyosan"
              href="https://www.fontspace.com/nikkyou-sans-font-f31053#action=charmap&id=mLKax"
              target="_blank"
              rel="noreferrer"
            >
              Nikkyou Sans Fontで使える文字
            </a>
            <div className="row justify-content-center mb-3">
              {/* <div className="col-12 col-md-6"> */}
              <textarea
                className="form-control"
                placeholder="文字をいれてね！"
                rows={6}
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required
              ></textarea>
              <div>
                <CanvasBoard text={body}></CanvasBoard>
              </div>
              {/* </div> */}
            </div>

            <Link href={`/${body}`}>
              <a className="tatekan-button">たてかんを作成する</a>
            </Link>
          </main>
        </div>
      </div>
    </Layout>
  );
}
