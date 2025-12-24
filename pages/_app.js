import Script from "next/script";
import { CartProvider } from "../components/CartContext";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script src="https://unpkg.com/lucide@latest" strategy="beforeInteractive" />
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </>
  );
}
