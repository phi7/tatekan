import { createCanvas, registerFont } from "canvas";
import * as path from "path";
import { useEffect, useState } from "react";
// import {NikkyouSans-mLKax.ttf} from "./fonts/NikkyouSans-mLKax.ttf";

//ここで引数をまとめるpropsを定義
// type Props = {
//   text: string;
// };

const width = 600 as const;
const height = 315 as const;
// registerFont(path.resolve("./fonts/NikkyouSans-mLKax.ttf"), {
//   family: "NikkyouSans-mLKax",
// });

export default function CanvasBoard(text2: string) {
  const [png, setPng] = useState("");

  useEffect(() => {
    const canvasElem = document.createElement("canvas");
    canvasElem.width = width;
    canvasElem.height = height;
    const ctx = canvasElem.getContext("2d");

    // draw

    //背景の色を指定
    ctx.fillStyle = "red";
    //背景を描写
    ctx.fillRect(0, 0, width, height);
    //フォントを指定
    ctx.font = "45px NikkyouSans-mLKax";
    //文字の色を指定
    ctx.fillStyle = "#FFFFFF";
    //文章の位置を指定
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    //文章の内容を決めた
    const text = text2 as string;
    //文章を描写
    ctx.fillText(text, width / 2, height / 2);

    setPng(canvasElem.toDataURL());
    // console.log("hoge2");
    // console.log(canvasElem.toDataURL());
    // console.log("hoge2");
  }, [text2]);

  return (
    // <Image src = `${url}` />
    //<img src="/static/image.png"/>
    // <div>
    //   <img src={png} />
    // </div>
    png
  );
}
