import { useMemo, useState } from "react";
import Layout from "../components/Layout";
import { useCart } from "../components/CartContext";

const PRODUCTS = [
  {
    id: 1,
    title: 'Kubek "Poranek"',
    price: 85,
    category: "cup",
    sold: false,
    img: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Talerz rustykalny",
    price: 120,
    category: "plate",
    sold: false,
    img: "https://images.unsplash.com/photo-1596627689914-159b9598858a?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Dzban ozdobny",
    price: 250,
    category: "other",
    sold: true,
    img: "https://images.unsplash.com/photo-1577937927133-66ef06acdf18?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Misa sałatkowa",
    price: 180,
    category: "bowl",
    sold: false,
    img: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Lampa Ceramiczna",
    price: 450,
    category: "lamp",
    sold: false,
    img: "https://images.unsplash.com/photo-1513506003013-195c911713c2?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Filiżanka Espresso",
    price: 65,
    category: "cup",
    sold: false,
    img: "https://images.unsplash.com/photo-1595982824701-443b23e20603?q=80&w=600&auto=format&fit=crop",
  },
];

const FILTERS = [
  { key: "all", label: "Wszystkie" },
  { key: "cup", label: "Kubki & Filiżanki" },
  { key: "plate", label: "Talerze" },
  { key: "bowl", label: "Misy" },
  { key: "lamp", label: "Lampy" },
  { key: "other", label: "Inne" },
];

const CATEGORY_LABELS = {
  cup: "Kubek",
  plate: "Talerz",
  bowl: "Misa",
  lamp: "Lampa",
  other: "Inne",
};

export default function StorePage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const { addItem, openCart } = useCart();

  const filteredProducts = useMemo(() => {
    if (activeFilter === "all") {
      return PRODUCTS;
    }
    return PRODUCTS.filter((product) => product.category === activeFilter);
  }, [activeFilter]);

  const handleAdd = (product) => {
    if (product.sold) return;
    addItem({ id: product.id, title: product.title, price: product.price });
    openCart();
  };

  return (
    <Layout title="Fajna Ceramika | Sklep">
      <section className="fade-in min-h-screen pb-24">
        <div className="border-b border-stone-200 sticky top-20 bg-stone-50/95 z-40 backdrop-blur">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center gap-4 overflow-x-auto no-scrollbar pb-1">
              {FILTERS.map((filter) => (
                <button
                  key={filter.key}
                  type="button"
                  onClick={() => setActiveFilter(filter.key)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full border text-sm font-medium transition-all ${
                    activeFilter === filter.key
                      ? "border-stone-900 bg-stone-900 text-white"
                      : "border-stone-200 text-stone-600 hover:border-stone-400"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="mb-8 flex items-center gap-2 text-stone-400 text-sm font-medium">
            <i data-lucide="database" className="w-4 h-4"></i>
            <span>Powered by Storyblok API</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group flex flex-col gap-3">
                <div className="relative aspect-square overflow-hidden rounded-lg bg-stone-200">
                  <img
                    src={product.img}
                    alt={product.title}
                    className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                      product.sold ? "grayscale opacity-70" : ""
                    }`}
                  />
                  {product.sold ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-stone-900/10 backdrop-blur-[1px]">
                      <span className="bg-stone-900 text-white px-3 py-1 text-sm font-semibold tracking-wide uppercase rounded">
                        Sprzedane
                      </span>
                    </div>
                  ) : (
                    <div className="absolute bottom-4 right-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <button
                        type="button"
                        onClick={() => handleAdd(product)}
                        className="bg-white text-stone-900 shadow-lg px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-olive-500 hover:text-white transition-colors"
                      >
                        <i data-lucide="plus" className="w-4 h-4"></i> Dodaj
                      </button>
                    </div>
                  )}
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium text-stone-900 leading-none">
                      {product.title}
                    </h3>
                    <p className="text-stone-500 text-sm mt-1 capitalize">
                      {CATEGORY_LABELS[product.category] || product.category}
                    </p>
                  </div>
                  <span className="text-lg font-medium text-stone-900">{product.price} PLN</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
