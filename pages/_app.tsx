import "../styles/globals.scss";
import { createCanvas, registerFont, loadImage } from "canvas";
import * as path from "path";

// registerFont(path.resolve("../fonts/NikkyouSans-mLKax.ttf"), {
//   family: "NikkyouSans-mLKax",
// });

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
