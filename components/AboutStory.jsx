export default function AboutStory({
  blok,
  portraitImage,
  studioImage,
  quote,
  heading,
  paragraphs,
  signatureImage,
}) {
  const resolvedPortrait = blok?.portraitImage ?? portraitImage;
  const resolvedStudio = blok?.studioImage ?? studioImage;
  const resolvedQuote = blok?.quote ?? quote;
  const resolvedHeading = blok?.heading ?? heading;
  const resolvedParagraphs = blok?.paragraphs ?? paragraphs;
  const resolvedSignature = blok?.signatureImage ?? signatureImage;

  return (
    <div className="grid md:grid-cols-12 gap-12 items-start">
      <div className="md:col-span-5 space-y-6 sticky top-24">
        <div className="aspect-[4/5] rounded-xl overflow-hidden bg-stone-200">
          <img
            src={resolvedPortrait}
            alt="Artisan working"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="aspect-video rounded-xl overflow-hidden bg-stone-200">
          <img src={resolvedStudio} alt="Finished ceramics" className="w-full h-full object-cover" />
        </div>
        <div className="p-6 bg-stone-100 rounded-xl">
          <i data-lucide="quote" className="w-8 h-8 text-olive-500 mb-4 opacity-50"></i>
          <p className="font-medium text-stone-800 italic">{resolvedQuote}</p>
        </div>
      </div>

      <div className="md:col-span-7 prose prose-stone prose-lg text-stone-600 leading-relaxed">
        {resolvedHeading && (
          <h3 className="text-2xl font-semibold text-stone-900 tracking-tight mt-10 mb-4">
            {resolvedHeading}
          </h3>
        )}
        {resolvedParagraphs.map((paragraph, index) => (
          <p key={index} className="mb-6">
            {paragraph}
          </p>
        ))}

        <div className="mt-12 pt-8 border-t border-stone-200">
          <img src={resolvedSignature} alt="Signatures" className="h-16 opacity-40" />
        </div>
      </div>
    </div>
  );
}
