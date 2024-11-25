import { useEffect } from "react";
import Layout from "../components/Layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
