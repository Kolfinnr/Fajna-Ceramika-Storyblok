export default function ProductCard({ product, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(product)}
      className="group text-left flex flex-col gap-3"
    >
      <div className="relative aspect-square overflow-hidden rounded-lg bg-stone-200">
        <img
          src={product.coverImageUrl}
          alt={product.name}
          className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
            product.status === "sold" ? "grayscale opacity-70" : ""
          }`}
        />
        {product.status === "sold" && (
          <div className="absolute top-4 right-4 bg-stone-900 text-white text-xs font-semibold px-2 py-1 rounded">
            SOLD
          </div>
        )}
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-medium text-stone-900 leading-none">
            {product.name}
          </h3>
          <p className="text-stone-500 text-sm mt-1 capitalize">{product.category}</p>
        </div>
        <span className="text-lg font-medium text-stone-900">
          {product.price_pln} PLN
        </span>
      </div>
    </button>
  );
}
