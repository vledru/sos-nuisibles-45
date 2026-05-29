// Hero.jsx — homepage dark hero with floating status cards

function HeroBadge({ text }) {
  return (
    <div className="hero-badge">
      <span className="hero-badge-dot" aria-hidden="true"></span>
      {text}
    </div>
  );
}

function HeroTrustItem({ icon, children }) {
  return <span className="hero-trust-item">{icon}{children}</span>;
}

function HeroVisualCard({ emoji, title, badge, badgeOk, urgency, text }) {
  return (
    <div className={`hero-card${urgency ? " hero-card-urgency" : ""}`}>
      <div className="hero-card-header">
        <div className="hero-card-row">
          <span className="hero-card-icon">{emoji}</span>
          <span className="hero-card-title">{title}</span>
        </div>
        <span className={`hero-card-badge${badgeOk ? " ok" : ""}`}>{badge}</span>
      </div>
      <p className="hero-card-text" dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
}

function Hero({ onNavigate }) {
  const { Doc, Phone, Shield, Clock, MapPin, Star } = window.Icons;
  return (
    <section className="hero" aria-label="Présentation">
      <div className="hero-inner">
        <div className="hero-content">
          <HeroBadge text="Intervention d'urgence disponible" />
          <h1 className="hero-title">
            Nuisibles dans le <em>Loiret</em> ?<br />
            On intervient<br />sous 2 heures.
          </h1>
          <p className="hero-subtitle">
            SOS Nuisibles 45 — votre expert local en dératisation, désinsectisation et traitement punaises de lit dans tout le département du Loiret. Certifié, rapide et efficace.
          </p>
          <div className="hero-actions">
            <Button variant="primary" lg href="#" icon={<Doc size={18} />}
              onClick={e => { e.preventDefault(); onNavigate("contact"); }}>
              Demander un devis gratuit
            </Button>
            <Button variant="danger" lg href="tel:+33246915620" icon={<Phone size={18} />}>
              Urgence — Appeler
            </Button>
          </div>
          <div className="hero-trust">
            <HeroTrustItem icon={<Shield size={16} />}>Certifié Biocide</HeroTrustItem>
            <HeroTrustItem icon={<Clock size={16} />}>Disponible 24h/24</HeroTrustItem>
            <HeroTrustItem icon={<MapPin size={16} />}>Tout le Loiret (45)</HeroTrustItem>
            <HeroTrustItem icon={<Star size={16} />}>+500 clients satisfaits</HeroTrustItem>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <HeroVisualCard emoji="🚨" title="Urgence signalée" badge="En cours" urgency
            text="Intervention dératisation — Orléans Centre<br>Technicien en route · Arrivée estimée 45 min" />
          <HeroVisualCard emoji="🐀" title="Dératisation" badge="Disponible" badgeOk
            text="Traitement rongeurs : rats, souris, mulots<br>Maisons, commerces, collectivités" />
          <HeroVisualCard emoji="🐝" title="Nid de guêpes / frelons" badge="Disponible" badgeOk
            text="Destruction de nids en hauteur ou cavités<br>Intervention sécurisée, équipement professionnel" />
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
