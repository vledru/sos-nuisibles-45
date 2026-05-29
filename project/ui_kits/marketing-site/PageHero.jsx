// PageHero.jsx — service-page dark hero (compact)

function PageHero({ eyebrow, eyebrowIcon, title, subtitle, onDevis }) {
  const { Phone } = window.Icons;
  return (
    <section className="page-hero">
      <div className="page-hero-inner">
        {eyebrow && (
          <div className="page-hero-label">
            {eyebrowIcon}{eyebrow}
          </div>
        )}
        <h1 className="page-hero-title" dangerouslySetInnerHTML={{ __html: title }} />
        <p className="page-hero-sub">{subtitle}</p>
        <div className="page-hero-actions">
          <Button variant="danger" lg href="tel:+33246915620" icon={<Phone size={18} />}>
            Urgence — Appeler maintenant
          </Button>
          <Button variant="secondary" lg onClick={onDevis}
            style={{ color: "#fff", borderColor: "rgba(255,255,255,0.3)" }}>
            Demander un devis gratuit
          </Button>
        </div>
      </div>
    </section>
  );
}

window.PageHero = PageHero;
