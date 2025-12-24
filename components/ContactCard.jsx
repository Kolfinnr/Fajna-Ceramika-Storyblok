export default function ContactCard({
  blok,
  title,
  subtitle,
  email,
  instagramHandle,
}) {
  const resolvedTitle = blok?.title ?? title;
  const resolvedSubtitle = blok?.subtitle ?? subtitle;
  const resolvedEmail = blok?.email ?? email;
  const resolvedInstagramHandle = blok?.instagramHandle ?? instagramHandle;

  return (
    <div className="bg-stone-100 py-20 border-y border-stone-200">
      <div className="max-w-2xl mx-auto px-6">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-stone-100 flex flex-col md:flex-row gap-8 items-start md:items-center relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-olive-500/10 rounded-full blur-3xl"></div>

          <div className="flex-1 space-y-6 relative z-10">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-stone-900">
                {resolvedTitle}
              </h2>
              <p className="text-stone-500 text-base">{resolvedSubtitle}</p>
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
                  href={`mailto:${resolvedEmail}`}
                  className="text-base hover:text-olive-600 transition-colors"
                >
                  {resolvedEmail}
                </a>
              </div>
              <div className="flex items-center gap-3 text-stone-600">
                <div className="p-2 bg-stone-50 rounded-lg border border-stone-100">
                  <i data-lucide="instagram" className="w-4 h-4"></i>
                </div>
                <span className="text-base">{resolvedInstagramHandle}</span>
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
  );
}
