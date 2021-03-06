import { NextApiRequest, NextApiResponse } from "next";
import { createCanvas, registerFont, loadImage } from "canvas";
import * as path from "path";

// const createOgp = async (
//   req: NextApiRequest,
//   res: NextApiResponse
// ): Promise<void> => {
//   const { id } = req.query;
//   const WIDTH = 600 as const;
//   const HEIGHT = 315 as const;
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
//   ctx.font = "45px NikkyouSans-mLKax";
//   //文字の色を指定
//   ctx.fillStyle = "#FFFFFF";
//   //文章の位置を指定
//   ctx.textAlign = "center";
//   ctx.textBaseline = "middle";
//   //文章の内容を決めた
//   const text = String(id);
//   //文章を描写
//   ctx.fillText(text, WIDTH / 2, HEIGHT / 2);
//   //buffer型にすることでバイナリデータとする
//   const buffer = canvas.toBuffer();
//   res.writeHead(200, {
//     //ヘッダー情報をレスポンスに書き出す．
//     //連想配列で指定
//     "Content-Type": "image/png",
//     "Content-Length": buffer.length,
//   });
//   //コンテンツ出力を完了
//   //
//   res.end(buffer, "binary");
// };
const createOgp = async (req: NextApiRequest, res: NextApiResponse) => {
  //多分urlを分解してidのところをとってきている．どこでidを定義しているのだろうか？
  var id = req.query.id as string;
  console.log(id);

  registerFont(path.resolve("./fonts/NikkyouSans-mLKax.ttf"), {
    family: "NikkyouSans-mLKax",
  });

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
  var font_size = 45;
  //フォントを指定
  ctx.font = font_size + "px NikkyouSans-mLKax";
  //文字の色を指定
  ctx.fillStyle = "#FFFFFF";
  //文章の位置を指定
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  //テキストを1文字ずつ分割し，配列に
  var idAry = id.split("");
  //*とそれ以外でわけた配列をつくるための空の配列
  var idAry2 = [];
  //わけた配列を実装するための「それ以外」の部分
  var senten = "";
  //アスタリスクの数をカウントする．あとで使う
  var astCnt = 0;
  //*とそれ以外でわけた配列をつくる
  for (var i = 0; i < idAry.length; i++) {
    if (idAry[i] == "*") {
      astCnt++;
      idAry2.push(senten);
      senten = "";
      idAry2.push(idAry[i]);
    } else {
      senten += idAry[i];
    }
  }
  //改行しないと追加されないので，最終行のテキストを追加
  idAry2.push(senten);

  //行ごとに描写しながら，astCntを使って中央寄せをしている．
  var gyosu = 0;
  for (var i = 0; i < idAry2.length; i++) {
    var text = idAry2[i];
    //console.log(text);
    if (text == "*") {
    } else {
      gyosu++;
      //console.log(gyosu);
      //どうやらfillTextで指定する座標は文字の中心．
      ctx.fillText(
        text,
        WIDTH / 2,
        HEIGHT / 2 -
          ((astCnt + 1) * font_size) / 2 +
          (gyosu - 1) * font_size +
          font_size / 2
      );
    }
  }
  // //buffer型にすることでバイナリデータとする
  // //const buffer = canvas.toBuffer();
  // const url = canvas.toDataURL();
  // //おくりかえしている
  // //   res.status(200).json({
  // //     url,
  // //   });
  // res.send({ url });
  // //return url;
  // //res.end();
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
