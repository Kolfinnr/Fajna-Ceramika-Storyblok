import SiteLayout from "../components/SiteLayout";
import HomeHero from "../components/HomeHero";
import ContactCard from "../components/ContactCard";
import FeaturedGrid from "../components/FeaturedGrid";

export default function HomePage() {
  const featuredItems = [
    {
      name: "Kolekcja Ziemia",
      price_pln: 320,
      imageUrl:
        "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg",
    },
    {
      name: "Zestaw Śniadaniowy",
      price_pln: 240,
      imageUrl:
        "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg",
    },
    {
      name: 'Misa "Ocean"',
      price_pln: 190,
      imageUrl:
        "https://images.unsplash.com/photo-1612151855475-877969f4a6cc?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <SiteLayout>
      <section className="fade-in">
        <HomeHero
          headline={
            <>
              Ceramika dla<br /> <span className="text-stone-400">fajnego życia.</span>
            </>
          }
          subheadline="Unikatowe, ręcznie toczone formy z Bielska-Białej. Sztuka użytkowa, która nadaje codzienności wyjątkowy charakter."
          ctaLabel="Przejdź do sklepu"
          ctaHref="/store"
          heroImageUrl="https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=2000&auto=format&fit=crop"
        />

        <ContactCard
          title="Fajna Ceramika"
          subtitle="Pracownia Artystyczna"
          email="kontakt@fajnaceramika.pl"
          instagramHandle="@fajnaceramika"
        />

        <FeaturedGrid title="Nowości z pieca" items={featuredItems} />
      </section>
    </SiteLayout>
  );
}
