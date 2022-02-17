import { createCanvas, registerFont } from "canvas";
import * as path from "path";
import { useEffect, useState } from "react";
// import {NikkyouSans-mLKax.ttf} from "./fonts/NikkyouSans-mLKax.ttf";

//ここで引数をまとめるpropsを定義
type Props = {
  text: string;
};

const width = 600 as const;
const height = 315 as const;
// registerFont(path.resolve("./fonts/NikkyouSans-mLKax.ttf"), {
//   family: "NikkyouSans-mLKax",
// });

export default function CanvasBoard(props: Props) {
  //   const WIDTH = 1200 as const;
  //   const HEIGHT = 630 as const;
  //   const canvas = createCanvas(WIDTH, HEIGHT);
  //   const ctx = canvas.getContext("2d");
  //   registerFont(path.resolve("./fonts/NikkyouSans-mLKax.ttf"), {
  //     family: "NikkyouSans-mLKax",
  //   });
  //   //背景の色を指定
  //   ctx.fillStyle = "red";
  //   //背景を描写
  //   ctx.fillRect(0, 0, WIDTH, HEIGHT);
  //   //フォントを指定
  //   ctx.font = "60px NikkyouSans-mLKax";
  //   //文字の色を指定
  //   ctx.fillStyle = "#FFFFFF";
  //   //文章の位置を指定
  //   ctx.textAlign = "center";
  //   ctx.textBaseline = "middle";
  //   //文章の内容を決めた
  //   const text = "入力した文字は「" + String(props.text) + "」なのねん";
  //   //文章を描写
  //   ctx.fillText(text, WIDTH / 2, HEIGHT / 2);
  //   const url = canvas.toDataURL();

  const [png, setPng] = useState<string | null>(null);

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
    const text = String(props.text);
    //文章を描写
    ctx.fillText(text, width / 2, height / 2);

    setPng(canvasElem.toDataURL());
  }, [props.text]);

  return (
    // <Image src = `${url}` />
    //<img src="/static/image.png"/>
    <div>
      <img src={png} />
    </div>
  );
}
