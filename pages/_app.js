import { useEffect } from "react";
import Layout from "../components/Layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });

    // Disable right-click
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);

    // Disable copy, cut, paste, and selection
    const handleCopy = (e) => e.preventDefault();
    const handleCut = (e) => e.preventDefault();
    const handlePaste = (e) => e.preventDefault();
    const handleSelect = (e) => e.preventDefault();

    document.addEventListener("copy", handleCopy);
    document.addEventListener("cut", handleCut);
    document.addEventListener("paste", handlePaste);
    document.addEventListener("selectstart", handleSelect);

    // Cleanup event listeners on unmount
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("copy", handleCopy);
      document.removeEventListener("cut", handleCut);
      document.removeEventListener("paste", handlePaste);
      document.removeEventListener("selectstart", handleSelect);
    };
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
