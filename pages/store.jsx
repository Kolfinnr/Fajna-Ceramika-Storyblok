import { useMemo, useState } from "react";
import SiteLayout from "../components/SiteLayout";
import StoreFilters from "../components/StoreFilters";
import ProductGrid from "../components/ProductGrid";
import ProductModal from "../components/ProductModal";

const CATEGORIES = [
  { key: "all", label: "Wszystkie" },
  { key: "cup", label: "Kubki & Filiżanki" },
  { key: "plate", label: "Talerze" },
  { key: "bowl", label: "Misy" },
  { key: "lamp", label: "Lampy" },
  { key: "other", label: "Inne" },
];

const PRODUCTS = [
  {
    id: 1,
    name: 'Kubek "Poranek"',
    price_pln: 85,
    status: "available",
    category: "cup",
    coverImageUrl:
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506086679525-9a2e2ea8b420?q=80&w=800&auto=format&fit=crop",
    ],
    description: "Ręcznie toczony kubek z delikatnym szkliwem w odcieniach poranka.",
  },
  {
    id: 2,
    name: "Talerz rustykalny",
    price_pln: 120,
    status: "available",
    category: "plate",
    coverImageUrl:
      "https://images.unsplash.com/photo-1596627689914-159b9598858a?q=80&w=600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1596627689914-159b9598858a?q=80&w=900&auto=format&fit=crop",
    ],
    description: "Talerz o surowym wykończeniu, idealny do codziennych posiłków.",
  },
  {
    id: 3,
    name: "Dzban ozdobny",
    price_pln: 250,
    status: "sold",
    category: "other",
    coverImageUrl:
      "https://images.unsplash.com/photo-1577937927133-66ef06acdf18?q=80&w=600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1577937927133-66ef06acdf18?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=900&auto=format&fit=crop",
    ],
    description: "Dekoracyjny dzban inspirowany folklorem południa Polski.",
  },
  {
    id: 4,
    name: "Misa sałatkowa",
    price_pln: 180,
    status: "available",
    category: "bowl",
    coverImageUrl:
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=900&auto=format&fit=crop",
    ],
    description: "Pojemna misa z delikatnym połyskiem i organicznym rantem.",
  },
  {
    id: 5,
    name: "Lampa ceramiczna",
    price_pln: 450,
    status: "available",
    category: "lamp",
    coverImageUrl:
      "https://images.unsplash.com/photo-1513506003013-195c911713c2?q=80&w=600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1513506003013-195c911713c2?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=900&auto=format&fit=crop",
    ],
    description: "Ręcznie formowana lampa z ciepłym, rozproszonym światłem.",
  },
  {
    id: 6,
    name: "Filiżanka espresso",
    price_pln: 65,
    status: "available",
    category: "cup",
    coverImageUrl:
      "https://images.unsplash.com/photo-1595982824701-443b23e20603?q=80&w=600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1595982824701-443b23e20603?q=80&w=900&auto=format&fit=crop",
    ],
    description: "Mała filiżanka o miękkiej linii, idealna do espresso.",
  },
];

export default function StorePage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [showSold, setShowSold] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const categoryMatch =
        activeCategory === "all" || product.category === activeCategory;
      const soldMatch = showSold || product.status !== "sold";
      return categoryMatch && soldMatch;
    });
  }, [activeCategory, showSold]);

  return (
    <SiteLayout>
      <section className="fade-in min-h-screen pb-24">
        <StoreFilters
          categories={CATEGORIES}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          showSold={showSold}
          onToggleShowSold={setShowSold}
        />

        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="mb-8 flex items-center gap-2 text-stone-400 text-sm font-medium">
            <i data-lucide="database" className="w-4 h-4"></i>
            <span>Powered by Storyblok API</span>
          </div>

          <ProductGrid products={filteredProducts} onSelectProduct={setSelectedProduct} />
        </div>

        <ProductModal
          open={Boolean(selectedProduct)}
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      </section>
    </SiteLayout>
  );
}
