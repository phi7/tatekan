import * as path from "path";
import { createCanvas, registerFont } from "canvas";
import { NextApiResponse } from "next";
import { NextApiRequest } from "next";

// type Data = {
//   png: string;
// };

const width = 600 as const;
const height = 315 as const;

const responseJson = async (req: NextApiRequest, res: NextApiResponse) => {
  //多分urlを分解してidのところをとってきている．どこでidを定義しているのだろうか？
  const id = req.query.id as string;
  registerFont(path.resolve("./fonts/NikkyouSans-mLKax.ttf"), {
    family: "NikkyouSans-mLKax",
  });

  //const { id } = req.query;
  const WIDTH = 600 as const;
  const HEIGHT = 315 as const;
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
  ctx.font = "45px NikkyouSans-mLKax";
  //文字の色を指定
  ctx.fillStyle = "#FFFFFF";
  //文章の位置を指定
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  //文章の内容を決めた
  const text = String(id);
  //文章を描写
  ctx.fillText(text, WIDTH / 2, HEIGHT / 2);
  //buffer型にすることでバイナリデータとする
  //const buffer = canvas.toBuffer();
  const url = canvas.toDataURL();
  //   console.log("hoge3");
  //   console.log(url);
  //   console.log("hoge3");
  //おくりかえしている
  //   res.status(200).json({
  //     url,
  //   });
  res.send({ url });
  //return url;
  //res.end();
};

export default responseJson;
