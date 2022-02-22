import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { FormEvent, useEffect, useState } from "react";
import CanvasBoard from "../components/CanvasBoard";
import Link from "next/link";
import Layout from "../components/Layout";
import TwitterShareButton from "../components/TwitterShareButton";

export default function Home() {
  const [body, setBody] = useState("");
  const title = "たてかんメーカー";
  const description = "たてかんを簡単に作れます！";
  // const ogpImageUrl = `${process.env.NEXT_PUBLIC_WEB_URL}/images/apple-touch-icon.png`;
  const [ogpImageUrl, setOgpImageUrl] = useState(
    `${process.env.NEXT_PUBLIC_WEB_URL}/images/apple-touch-icon.png`
  );
  const [textArea3, settextArea3] = useState("");
  const [ogpSize, setOgpSize] = useState("summary");
  // const [png, setPng] = useState<string | null>(null);
  const [png, setPng] = useState(
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAE7CAYAAAAB7v+1AAAABmJLR0QA/wD/AP+gvaeTAAAFqElEQVR4nO3WwQkAIBDAsNP9d9YlCoIkE/TZdWbOAACQ2a8DAAB+Y7AAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIXk0UEdP06U4gAAAAASUVORK5CYII="
  );

  async function setCanvas(textAreaText: string) {
    setBody(textAreaText);

    if (textAreaText == "") {
      setOgpImageUrl(
        `${process.env.NEXT_PUBLIC_WEB_URL}/images/apple-touch-icon.png`
      );
      setOgpSize("summary");
      setPng(
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAE7CAYAAAAB7v+1AAAABmJLR0QA/wD/AP+gvaeTAAAFqElEQVR4nO3WwQkAIBDAsNP9d9YlCoIkE/TZdWbOAACQ2a8DAAB+Y7AAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIXk0UEdP06U4gAAAAASUVORK5CYII="
      );
      settextArea3("");
    } else {
      setOgpSize("summary_large_image");
      //console.log(textAreaText + "です");
      //\nをurlに含むとなくなってしまうのでそれを防ぐための処理
      var ary = textAreaText.split("");
      var textAreaText2 = "";
      for (var i = 0; i < ary.length; i++) {
        if (ary[i] === "\n") {
          console.log("hoge");
          textAreaText2 = (textAreaText2 + "*") as string;
          settextArea3(textAreaText2);
        } else {
          textAreaText2 = (textAreaText2 + ary[i]) as string;
          settextArea3(textAreaText2);
        }
      }
      setOgpImageUrl(
        `${process.env.NEXT_PUBLIC_WEB_URL}/api/ogp?id=${textAreaText2}`
      );

      const res = await fetch(
        process.env.NEXT_PUBLIC_WEB_URL + `/api/${textAreaText2}`
      );
      //レスポンスをjsonファイルにして，その中からurlを取り出す．
      const json = await res.json();
      const pngURL = json["url"];
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

      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          {/* <main className={styles.main}> */}
          {/* <h1 className={styles.title}>
                ようこそ<a>たてかんメーカーへ！</a>
              </h1> */}
          <div>
            ※Nikkyou Sans
            Fontに収録されていない漢字は文字化けします．使える文字については次のURL参照．
            <a
              className="kyosan"
              href="https://www.fontspace.com/nikkyou-sans-font-f31053#action=charmap&id=mLKax"
              target="_blank"
              rel="noreferrer"
            >
              Nikkyou Sans Fontで使える文字
            </a>
          </div>
          <div>
            実装が下手なため，たまに文字が上手く消去できません．コードレビューしてくれる人募集中→
            <a href="https://twitter.com/web5_" className="link-info">
              @web5_
            </a>
            のDMへ！
          </div>

          <section className="text-center mt-4">
            {/* <div className="row justify-content-center mb-3"> */}
            {/* <div className="col-12 col-md-6"> */}
            <textarea
              className="form-control"
              placeholder="文字をいれてね！"
              rows={6}
              value={body}
              onChange={(e) => setCanvas(e.target.value)}
              required
            ></textarea>
            <div className="m-3">
              {/* <div> */}
              <img src={png} className="img-fluid" />
              {/* <CanvasBoard text={body}></CanvasBoard> */}
              {/* </div> */}
              {/* </div> */}
              {/* </div> */}
            </div>

            {/* <div className="my-3 d-flex justify-content-center">
              <Link href={`/${body}`}>
                <a className="tatekan-button">たてかんを作成する</a>
              </Link>
            </div> */}
            <div className="my-3 d-flex justify-content-center">
              <TwitterShareButton
                url={`${process.env.NEXT_PUBLIC_WEB_URL}/`}
                text={textArea3}
              ></TwitterShareButton>
            </div>

            {/* </main> */}
          </section>
        </div>
      </div>
    </Layout>
  );
}
