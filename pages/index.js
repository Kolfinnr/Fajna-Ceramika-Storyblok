import { useRef } from "react";
import Link from "next/link";
import Layout from "../components/Layout";

export default function HomePage() {
  const contactRef = useRef(null);

  const scrollToCard = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout title="Fajna Ceramika | Bielsko-Biała">
      <section className="fade-in">
        <div className="max-w-7xl mx-auto px-6 py-12 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-200 bg-white text-sm text-stone-500">
              <span className="w-2 h-2 rounded-full bg-olive-500 animate-pulse"></span>
              Nowa kolekcja wiosna 2024
            </div>
            <h1 className="text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.1] text-stone-900">
              Ceramika dla<br /> <span className="text-stone-400">fajnego życia.</span>
            </h1>
            <p className="text-xl text-stone-600 max-w-lg leading-relaxed font-light">
              Unikatowe, ręcznie toczone formy z Bielska-Białej. Sztuka użytkowa, która nadaje
              codzienności wyjątkowy charakter.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/store"
                className="bg-stone-900 text-white px-8 py-3 rounded-lg text-base font-medium hover:bg-stone-800 transition-all flex items-center gap-2"
              >
                Przejdź do sklepu <i data-lucide="arrow-right" className="w-4 h-4"></i>
              </Link>
              <button
                type="button"
                onClick={scrollToCard}
                className="px-8 py-3 rounded-lg text-base font-medium border border-stone-200 hover:border-stone-400 text-stone-600 transition-all"
              >
                Kontakt
              </button>
            </div>
          </div>
          <div className="relative group cursor-pointer aspect-[4/5] lg:aspect-square overflow-hidden rounded-2xl bg-stone-200">
            <img
              src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=2000&auto=format&fit=crop"
              alt="Ceramics Hero"
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-sm rounded-xl border border-white/20 shadow-sm">
              <p className="text-xs font-semibold text-olive-600 uppercase tracking-widest mb-1">
                Featured
              </p>
              <h3 className="text-lg font-semibold tracking-tight">Wazon "Skrzydła"</h3>
              <p className="text-sm text-stone-500 mt-1">Ręcznie szkliwiony, edycja limitowana.</p>
            </div>
          </div>
        </div>

        <div ref={contactRef} className="bg-stone-100 py-20 border-y border-stone-200">
          <div className="max-w-2xl mx-auto px-6">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-stone-100 flex flex-col md:flex-row gap-8 items-start md:items-center relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-olive-500/10 rounded-full blur-3xl"></div>

              <div className="flex-1 space-y-6 relative z-10">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-stone-900">
                    Fajna Ceramika
                  </h2>
                  <p className="text-stone-500 text-base">Pracownia Artystyczna</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-stone-600">
                    <div className="p-2 bg-stone-50 rounded-lg border border-stone-100">
                      <i data-lucide="user" className="w-4 h-4"></i>
                    </div>
                    <span className="text-base">Jurij &amp; Tatiana</span>
                  </div>
                  <div className="flex items-center gap-3 text-stone-600">
                    <div className="p-2 bg-stone-50 rounded-lg border border-stone-100">
                      <i data-lucide="map-pin" className="w-4 h-4"></i>
                    </div>
                    <span className="text-base">Bielsko-Biała, Polska</span>
                  </div>
                  <div className="flex items-center gap-3 text-stone-600">
                    <div className="p-2 bg-stone-50 rounded-lg border border-stone-100">
                      <i data-lucide="mail" className="w-4 h-4"></i>
                    </div>
                    <a
                      href="mailto:kontakt@fajnaceramika.pl"
                      className="text-base hover:text-olive-600 transition-colors"
                    >
                      kontakt@fajnaceramika.pl
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-auto flex flex-col items-center gap-2">
                <div className="w-32 h-32 bg-stone-900 rounded-xl flex items-center justify-center text-white p-2">
                  <i data-lucide="qr-code" className="w-full h-full opacity-90"></i>
                </div>
                <span className="text-xs text-stone-400 font-medium tracking-wide uppercase">
                  Zeskanuj wizytówkę
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-3xl font-semibold tracking-tight">Nowości z pieca</h2>
            <Link
              href="/store"
              className="text-base text-olive-600 hover:text-olive-500 font-medium flex items-center gap-1"
            >
              Zobacz wszystko <i data-lucide="arrow-right" className="w-4 h-4"></i>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden rounded-xl bg-stone-200 relative">
                <img
                  src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Kolekcja Ziemia"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold tracking-tight">Kolekcja Ziemia</h3>
                <p className="text-base text-stone-500 mt-1">Surowa glina, naturalne barwniki.</p>
              </div>
            </div>
            <div className="group cursor-pointer md:mt-12">
              <div className="aspect-[3/4] overflow-hidden rounded-xl bg-stone-200 relative">
                <img
                  src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Zestaw Śniadaniowy"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold tracking-tight">Zestaw Śniadaniowy</h3>
                <p className="text-base text-stone-500 mt-1">Idealny start dnia w kolorze błękitu.</p>
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden rounded-xl bg-stone-200 relative">
                <img
                  src="https://images.unsplash.com/photo-1612151855475-877969f4a6cc?q=80&w=800&auto=format&fit=crop"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Misa Ocean"
                />
                <div className="absolute top-4 right-4 bg-stone-900 text-white text-xs font-semibold px-2 py-1 rounded">
                  SOLD OUT
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold tracking-tight">Misa "Ocean"</h3>
                <p className="text-base text-stone-500 mt-1">Unikatowy egzemplarz, 34cm.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
