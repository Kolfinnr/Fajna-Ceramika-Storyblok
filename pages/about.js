import Layout from "../components/Layout";

export default function AboutPage() {
  return (
    <Layout title="Fajna Ceramika | O nas">
      <section className="fade-in">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <span className="text-olive-600 font-semibold tracking-wider text-sm uppercase mb-3 block">
              Nasza Historia
            </span>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-stone-900">
              Mistrzowie Ceramiki<br />z Bielska-Białej
            </h1>
          </div>

          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-5 space-y-6 sticky top-24">
              <div className="aspect-[4/5] rounded-xl overflow-hidden bg-stone-200">
                <img
                  src="https://images.unsplash.com/photo-1459156212016-c812468e2115?q=80&w=800&auto=format&fit=crop"
                  alt="Artisan working"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-video rounded-xl overflow-hidden bg-stone-200">
                <img
                  src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"
                  alt="Finished ceramics"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 bg-stone-100 rounded-xl">
                <i data-lucide="quote" className="w-8 h-8 text-olive-500 mb-4 opacity-50"></i>
                <p className="font-medium text-stone-800 italic">
                  "Efekt końcowy to coś, na co warto czekać."
                </p>
              </div>
            </div>

            <div className="md:col-span-7 prose prose-stone prose-lg text-stone-600 leading-relaxed">
              <p className="mb-6">
                Mamy na imię Jurij i Tatiana – jesteśmy mistrzami ceramiki, obecnie tworzymy
                pracownię „Fajna ceramika” w Bielsku Białej. Rękodziełem ceramicznym zajmujemy się
                od 1998 roku, co stanowi połowę naszego życia.
              </p>
              <p className="mb-6">
                Pracowaliśmy w wielu krajach, poznając techniki i style ceramiczne z całej Europy.
                Tak bogate doświadczenie pozwoliło nam stworzyć unikatowe naczynia, elementy dekoru
                i wiele innych ceramicznych wyrobów na wysokim poziomie technicznym i artystycznym.
              </p>
              <h3 className="text-2xl font-semibold text-stone-900 tracking-tight mt-10 mb-4">
                Proces Tworzenia
              </h3>
              <p className="mb-6">
                Każdy wyrób naszej pracowni jest unikatowy, ponieważ tworzony jest w całości
                ręcznie. Zaczynając od modelowania na kole garncarskim, poprzez lepienie dekoracyjnych
                elementów, aż na ręcznym malowaniu i szkliwieniu kończąc.
              </p>
              <p className="mb-6">
                Nasza ceramika przechodzi przez dwukrotny wypał, zwiększający jej trwałość i jakość.
                Proces wyrobu jest czasochłonny – zajmuje aż dwa tygodnie. Jednak efekt końcowy to
                coś, na co warto czekać.
              </p>
              <p className="mb-6">
                Z dumą prezentujemy państwu kolorową, oryginalną i artystyczną ceramikę, która
                będzie piękną ozdobą każdego domu. Mamy nadzieję, że wybierając „Fajną ceramikę”
                będziecie na długo cieszyć się naszymi dziełami stworzonymi z myślą o was.
              </p>

              <div className="mt-12 pt-8 border-t border-stone-200">
                <img
                  src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"
                  alt="Signatures"
                  className="h-16 opacity-40"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
