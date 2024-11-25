import Head from "next/head";
import Footer from "./ui/Footer";
import Navbar from "./ui/Navbar";

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>AOR Global - Empowering Strategic Growth</title>
                <meta
                    name="description"
                    content="AOR Global empowers businesses with data-driven strategies, innovative solutions, and measurable results to thrive in a competitive landscape."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
