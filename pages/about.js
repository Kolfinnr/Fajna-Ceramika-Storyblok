import Layout from "../components/Layout";
import AboutHero from "../components/AboutHero";
import AboutStory from "../components/AboutStory";

export default function AboutPage() {
  return (
    <Layout title="Fajna Ceramika | O nas">
      <section className="fade-in">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <AboutHero
            eyebrow="Nasza Historia"
            heading={
              <>
                Mistrzowie Ceramiki<br />z Bielska-Białej
              </>
            }
          />

          <AboutStory
            portraitImage="https://images.unsplash.com/photo-1459156212016-c812468e2115?q=80&w=800&auto=format&fit=crop"
            studioImage="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"
            quote="Efekt końcowy to coś, na co warto czekać."
            heading="Proces Tworzenia"
            paragraphs={[
              "Mamy na imię Jurij i Tatiana – jesteśmy mistrzami ceramiki, obecnie tworzymy pracownię „Fajna ceramika” w Bielsku Białej. Rękodziełem ceramicznym zajmujemy się od 1998 roku, co stanowi połowę naszego życia.",
              "Pracowaliśmy w wielu krajach, poznając techniki i style ceramiczne z całej Europy. Tak bogate doświadczenie pozwoliło nam stworzyć unikatowe naczynia, elementy dekoru i wiele innych ceramicznych wyrobów na wysokim poziomie technicznym i artystycznym.",
              "Każdy wyrób naszej pracowni jest unikatowy, ponieważ tworzony jest w całości ręcznie. Zaczynając od modelowania na kole garncarskim, poprzez lepienie dekoracyjnych elementów, aż na ręcznym malowaniu i szkliwieniu kończąc.",
              "Nasza ceramika przechodzi przez dwukrotny wypał, zwiększający jej trwałość i jakość. Proces wyrobu jest czasochłonny – zajmuje aż dwa tygodnie. Jednak efekt końcowy to coś, na co warto czekać.",
              "Z dumą prezentujemy państwu kolorową, oryginalną i artystyczną ceramikę, która będzie piękną ozdobą każdego domu. Mamy nadzieję, że wybierając „Fajną ceramikę” będziecie na długo cieszyć się naszymi dziełami stworzonymi z myślą o was.",
            ]}
            signatureImage="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"
          />
        </div>
      </section>
    </Layout>
  );
}
