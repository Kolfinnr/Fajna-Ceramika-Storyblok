export default function StoreFilters({
  categories,
  activeCategory,
  onCategoryChange,
  showSold,
  onToggleShowSold,
}) {
  return (
    <div className="border-b border-stone-200 sticky top-20 bg-stone-50/95 z-40 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
        <div className="flex items-center gap-4 overflow-x-auto no-scrollbar pb-1">
          {categories.map((category) => (
            <button
              key={category.key}
              type="button"
              onClick={() => onCategoryChange(category.key)}
              className={`whitespace-nowrap px-4 py-2 rounded-full border text-sm font-medium transition-all ${
                activeCategory === category.key
                  ? "border-stone-900 bg-stone-900 text-white"
                  : "border-stone-200 text-stone-600 hover:border-stone-400"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        <label className="inline-flex items-center gap-3 text-sm text-stone-600">
          <span className="relative inline-flex items-center">
            <input
              type="checkbox"
              className="peer sr-only"
              checked={showSold}
              onChange={(event) => onToggleShowSold(event.target.checked)}
            />
            <span className="w-10 h-6 bg-stone-200 rounded-full peer-checked:bg-olive-500 transition-colors"></span>
            <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-transform peer-checked:translate-x-4"></span>
          </span>
          Pokaż sprzedane
        </label>
      </div>
    </div>
  );
}
