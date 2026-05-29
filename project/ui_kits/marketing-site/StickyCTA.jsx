// StickyCTA.jsx — service-page sidebar with phone + form CTA + guarantee badge

function StickyCTA({ onDevis }) {
  const { Phone, Shield } = window.Icons;
  return (
    <aside className="sticky-cta" style={{ position: "sticky", top: 100 }}>
      <div className="sticky-cta-title">Besoin d'une intervention&nbsp;?</div>
      <p className="sticky-cta-sub">Disponibles 24h/24 — intervention sous 2h dans tout le Loiret.</p>
      <a href="tel:+33246915620" className="sticky-cta-phone">
        <Phone size={20} />
        02 46 91 56 20
      </a>
      <div className="sticky-cta-divider">ou</div>
      <Button variant="primary" onClick={onDevis} style={{ width: "100%", justifyContent: "center" }}>
        Devis gratuit en ligne
      </Button>
      <div className="guarantee-badge">
        <Shield size={22} />
        <div className="guarantee-badge-text">
          <span className="guarantee-badge-label">Garantie de résultat</span><br />
          Sur tous nos traitements.
        </div>
      </div>
    </aside>
  );
}

window.StickyCTA = StickyCTA;
