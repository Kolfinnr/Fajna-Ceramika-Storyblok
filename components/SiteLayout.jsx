import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function SiteLayout({ children }) {
  return (
    <>
      <Head>
        <title>Fajna Ceramika | Bielsko-Biała</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="bg-stone-50 text-stone-900 text-lg antialiased selection:bg-olive-500 selection:text-white min-h-screen">
        <Navbar />
        <main className="pt-20 min-h-screen">{children}</main>
        <Footer />
      </div>
    </>
  );
}
