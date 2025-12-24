import Head from "next/head";
import { useEffect } from "react";
import CartDrawer from "./CartDrawer";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ title, children }) {
  useEffect(() => {
    if (typeof window !== "undefined" && window.lucide?.createIcons) {
      window.lucide.createIcons();
    }
  }, [children]);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap");
        body {
          font-family: "Inter", sans-serif;
        }
        .fade-in {
          animation: fadeIn 0.4s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      <div className="bg-stone-50 text-stone-900 text-lg antialiased selection:bg-olive-500 selection:text-white min-h-screen">
        <Navbar />
        <main className="pt-20 min-h-screen">{children}</main>
        <Footer />
        <CartDrawer />
      </div>
    </>
  );
}
