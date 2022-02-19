import Head from "next/head";
import Link from "next/link";
// import { ToastContainer } from "react-toastify";

export default function Layout({ children }) {
  return (
    <div>
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
