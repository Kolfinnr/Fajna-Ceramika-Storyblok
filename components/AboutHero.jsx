export default function AboutHero({ blok, eyebrow, heading }) {
  const resolvedEyebrow = blok?.eyebrow ?? eyebrow;
  const resolvedHeading = blok?.heading ?? heading;

  return (
    <div className="text-center mb-16">
      <span className="text-olive-600 font-semibold tracking-wider text-sm uppercase mb-3 block">
        {resolvedEyebrow}
      </span>
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-stone-900">
        {resolvedHeading}
      </h1>
    </div>
  );
}
