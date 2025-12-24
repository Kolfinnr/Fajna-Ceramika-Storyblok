import Script from "next/script";
import { CartProvider } from "../components/CartContext";

import { storyblokInit, apiPlugin } from "@storyblok/react";

import Page from "../components/Page";
import SiteLayout from "../components/SiteLayout";
import Teaser from "../components/Teaser";
import HomeHero from "../components/HomeHero";
import ContactCard from "../components/ContactCard";
import FeaturedGrid from "../components/FeaturedGrid";
import AboutHero from "../components/AboutHero";
import AboutStory from "../components/AboutStory";

// Initialize Storyblok ONCE here
storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
  use: [apiPlugin],
  components: {
    // core
    page: Page,
    teaser: Teaser,
    // layout + sections
    site_layout: SiteLayout,
    home_hero: HomeHero,
    contact_card: ContactCard,
    featured_grid: FeaturedGrid,
    about_hero: AboutHero,
    about_story: AboutStory,
    // page: Page, // only if you created a custom page component
  },
});

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
