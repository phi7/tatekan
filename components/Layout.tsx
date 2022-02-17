import Head from "next/head";
import Link from "next/link";
// import { ToastContainer } from "react-toastify";

export default function Layout({ children }) {
  //   const title = "たてかんメーカー";
  //   const description = "たてかんを簡単に作れます！";
  //   const ogpImageUrl = `${process.env.NEXT_PUBLIC_WEB_URL}/images/card.png`;

  return (
    <div>
      {/* <Head>
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
      </Head> */}
      <nav
        className="navbar navbar-expand-lg navbar-light mb-3"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <div className="container">
          <div className="mr-auto">
            <Link href="/">
              <a className="navbar-brand">たてかんメーカー</a>
            </Link>
          </div>
        </div>
      </nav>
      <div className="container">{children}</div>
      <footer className="text-center mt-5 py-5 bg-light">
        <div className="pb-1 text-muted">
          Created by{" "}
          <a href="https://twitter.com/web5_" className="link-info">
            @web5_
          </a>
        </div>
      </footer>
      {/* <nav className="navbar fixed-bottom navbar-light bg-light">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center w-100">
            <i className="material-icons">menu</i>
            <Link href="/questions/received">
              <a>
                <i className="material-icons">home</i>
              </a>
            </Link>
            <Link href="/users/me">
              <a>
                <i className="material-icons">person</i>
              </a>
            </Link>
          </div>
        </div>
      </nav> */}
      {/* <ToastContainer /> */}
    </div>
  );
}
