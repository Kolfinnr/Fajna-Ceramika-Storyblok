import Link from "next/link";

export default function FeaturedGrid({ blok, title, items }) {
  const resolvedTitle = blok?.title ?? title;
  const resolvedItems = blok?.items ?? items;

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="flex items-end justify-between mb-12">
        <h2 className="text-3xl font-semibold tracking-tight">{resolvedTitle}</h2>
        <Link
          href="/store"
          className="text-base text-olive-600 hover:text-olive-500 font-medium flex items-center gap-1"
        >
          Zobacz wszystko <i data-lucide="arrow-right" className="w-4 h-4"></i>
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {resolvedItems.map((item) => (
          <div key={item.name} className="group cursor-pointer">
            <div className="aspect-[3/4] overflow-hidden rounded-xl bg-stone-200 relative">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold tracking-tight">{item.name}</h3>
              <p className="text-base text-stone-500 mt-1">{item.price_pln} PLN</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
