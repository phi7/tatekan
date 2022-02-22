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
  // const [png, setPng] = useState<string | null>(null);
  const [png, setPng] = useState(
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAE7CAYAAAAB7v+1AAAABmJLR0QA/wD/AP+gvaeTAAAFqElEQVR4nO3WwQkAIBDAsNP9d9YlCoIkE/TZdWbOAACQ2a8DAAB+Y7AAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIXk0UEdP06U4gAAAAASUVORK5CYII="
  );

  async function setCanvas(textAreaText: string) {
    setBody(textAreaText);
    if (textAreaText == "") {
      setPng(
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAE7CAYAAAAB7v+1AAAABmJLR0QA/wD/AP+gvaeTAAAFqElEQVR4nO3WwQkAIBDAsNP9d9YlCoIkE/TZdWbOAACQ2a8DAAB+Y7AAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIXk0UEdP06U4gAAAAASUVORK5CYII="
      );
    } else {
      console.log(textAreaText + "です");
      //\nをurlに含むとなくなってしまうのでそれを防ぐための処理
      var ary = textAreaText.split("");
      var textAreaText2 = "";
      for (var i = 0; i < ary.length; i++) {
        if (ary[i] === "\n") {
          console.log("hoge");
          textAreaText2 = (textAreaText2 + "*") as string;
        } else {
          textAreaText2 = (textAreaText2 + ary[i]) as string;
        }
      }

      const res = await fetch(
        process.env.NEXT_PUBLIC_WEB_URL + `/api/${textAreaText2}`
      );
      console.log("hoge4");
      const json = await res.json();
      console.log(json);
      const pngURL = json["url"];
      console.log(pngURL);
      setPng(pngURL);
    }
  }

  //const text = await res.text();
  //const text2 = JSON.parse(text);
  //setPng(text);
  // console.log("hoge1");
  // console.log(res);
  //console.log(res.json());
  // console.log(text);
  // console.log(text2.url);
  // console.log("hoge1");
  //setPng(text2.url);

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
            <div>
              ※Nikkyou Sans
              Fontに収録されていない漢字は文字化けします．使える文字については以下URL参照．
            </div>
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
                onChange={(e) => setCanvas(e.target.value)}
                required
              ></textarea>
              <div>
                <img src={png} />
                {/* <CanvasBoard text={body}></CanvasBoard> */}
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
