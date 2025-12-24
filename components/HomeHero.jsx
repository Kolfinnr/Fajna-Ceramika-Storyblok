import Link from "next/link";

export default function HomeHero({
  blok,
  headline,
  subheadline,
  ctaLabel,
  ctaHref,
  heroImageUrl,
}) {
  const resolvedHeadline = blok?.headline ?? headline;
  const resolvedSubheadline = blok?.subheadline ?? subheadline;
  const resolvedCtaLabel = blok?.ctaLabel ?? ctaLabel;
  const resolvedCtaHref = blok?.ctaHref ?? ctaHref;
  const resolvedHeroImageUrl = blok?.heroImageUrl ?? heroImageUrl;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-200 bg-white text-sm text-stone-500">
          <span className="w-2 h-2 rounded-full bg-olive-500 animate-pulse"></span>
          Nowa kolekcja wiosna 2024
        </div>
        <h1 className="text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.1] text-stone-900">
          {resolvedHeadline}
        </h1>
        <p className="text-xl text-stone-600 max-w-lg leading-relaxed font-light">
          {resolvedSubheadline}
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <Link
            href={resolvedCtaHref}
            className="bg-stone-900 text-white px-8 py-3 rounded-lg text-base font-medium hover:bg-stone-800 transition-all flex items-center gap-2"
          >
            {resolvedCtaLabel}{" "}
            <i data-lucide="arrow-right" className="w-4 h-4"></i>
          </Link>
          <button
            type="button"
            className="px-8 py-3 rounded-lg text-base font-medium border border-stone-200 hover:border-stone-400 text-stone-600 transition-all"
          >
            Kontakt
          </button>
        </div>
      </div>
      <div className="relative group cursor-pointer aspect-[4/5] lg:aspect-square overflow-hidden rounded-2xl bg-stone-200">
        <img
          src={resolvedHeroImageUrl}
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
  );
}
