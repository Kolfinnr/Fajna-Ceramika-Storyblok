import { useEffect, useState } from "react";

export default function ProductModal({ open, onClose, product }) {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    if (open) {
      setImageIndex(0);
    }
  }, [open, product]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && open) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open || !product) {
    return null;
  }

  const images = product.images || [];
  const activeImage = images[imageIndex] || product.coverImageUrl;

  const handlePrev = () => {
    setImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8">
      <div className="absolute inset-0 bg-stone-900/50" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden grid md:grid-cols-2 gap-0">
        <div className="relative bg-stone-100">
          <img src={activeImage} alt={product.name} className="w-full h-full object-cover" />
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-stone-900 rounded-full p-2 shadow"
                aria-label="Poprzednie zdjęcie"
              >
                <i data-lucide="chevron-left" className="w-4 h-4"></i>
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-stone-900 rounded-full p-2 shadow"
                aria-label="Następne zdjęcie"
              >
                <i data-lucide="chevron-right" className="w-4 h-4"></i>
              </button>
            </>
          )}
          {product.status === "sold" && (
            <div className="absolute top-4 right-4 bg-stone-900 text-white text-xs font-semibold px-3 py-1 rounded">
              SOLD
            </div>
          )}
        </div>
        <div className="p-6 md:p-8 flex flex-col gap-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-stone-900">
                {product.name}
              </h2>
              <p className="text-stone-500 mt-2">{product.description}</p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full hover:bg-stone-100"
              aria-label="Zamknij"
            >
              <i data-lucide="x" className="w-5 h-5"></i>
            </button>
          </div>
          <div className="text-lg font-semibold text-stone-900">
            {product.price_pln} PLN
          </div>
          <div className="text-sm text-stone-500">
            Status:{" "}
            <span className="font-medium text-stone-900">
              {product.status === "sold" ? "Sprzedane" : "Dostępne"}
            </span>
          </div>
          <button
            type="button"
            className="mt-auto inline-flex items-center justify-center rounded-lg border border-stone-200 px-4 py-3 text-stone-600 hover:border-stone-400 transition-colors"
            onClick={onClose}
          >
            Zamknij podgląd
          </button>
        </div>
      </div>
    </div>
  );
}
