import { NextApiRequest, NextApiResponse } from "next";
import { createCanvas, registerFont, loadImage } from "canvas";
import * as path from "path";

const createOgp = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { id } = req.query;
  const WIDTH = 1200 as const;
  const HEIGHT = 630 as const;
  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext("2d");
  registerFont(path.resolve("./fonts/NikkyouSans-mLKax.ttf"), {
    family: "NikkyouSans-mLKax",
  });
  //背景の色を指定
  ctx.fillStyle = "red";
  //背景を描写
  ctx.fillRect(0, 0, WIDTH, HEIGHT);
  //フォントを指定
  ctx.font = "60px NikkyouSans-mLKax";
  //文字の色を指定
  ctx.fillStyle = "#FFFFFF";
  //文章の位置を指定
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  //文章の内容を決めた
  const text = "入力した文字は「" + String(id) + "」なのねん";
  //文章を描写
  ctx.fillText(text, WIDTH / 2, HEIGHT / 2);
  //buffer型にすることでバイナリデータとする
  const buffer = canvas.toBuffer();
  res.writeHead(200, {
    //ヘッダー情報をレスポンスに書き出す．
    //連想配列で指定
    "Content-Type": "image/png",
    "Content-Length": buffer.length,
  });
  //コンテンツ出力を完了
  //
  res.end(buffer, "binary");
};

export default createOgp;
