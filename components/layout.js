import Head from "next/head";
import ResponsiveNavBar from "./navbar";
import Footer from "./footer";

const Layout = ({ children }) => {

    return (
        <>
            <Head>
                <title>Casuta de Munte</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ResponsiveNavBar />
            <main>{children}</main>
            <Footer/>
        </>
    )
}

export default Layout;