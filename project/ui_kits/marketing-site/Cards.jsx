// Cards.jsx — ServiceCard, WhyCard, ProcessItem, Testimonial, NuisibleCard

function ServiceCard({ emoji, gradient, icon, title, description, bullets, ctaLabel, onCta }) {
  return (
    <article className="service-card">
      <div className="service-card-img" style={{ background: gradient }}>
        <span className="emoji">{emoji}</span>
      </div>
      <div className="service-card-body">
        <div className="service-card-icon">{icon}</div>
        <h3 className="service-card-title">{title}</h3>
        <p className="service-card-desc">{description}</p>
        {bullets && <CheckList items={bullets} style={{ marginBottom: 24 }} />}
        <Button variant="primary" onClick={onCta} style={{ width: "100%" }}>
          {ctaLabel || "En savoir plus"}
        </Button>
      </div>
    </article>
  );
}

function WhyCard({ icon, title, children }) {
  return (
    <div className="why-card">
      <div className="why-icon">{icon}</div>
      <div className="why-title">{title}</div>
      <p className="why-text">{children}</p>
    </div>
  );
}

function ProcessItem({ num, title, children }) {
  return (
    <div className="process-item">
      <div className="process-num">{num}</div>
      <div className="process-title">{title}</div>
      <p className="process-text">{children}</p>
    </div>
  );
}

function ProcessStep({ num, title, children }) {
  return (
    <div className="process-step">
      <div className="step-num">{num}</div>
      <div className="step-content">
        <h4>{title}</h4>
        <p>{children}</p>
      </div>
    </div>
  );
}

function Testimonial({ stars = 5, text, initials, name, location }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-stars">{"★".repeat(stars)}</div>
      <p className="testimonial-text">"{text}"</p>
      <div className="testimonial-author">
        <div className="testimonial-avatar">{initials}</div>
        <div>
          <div className="testimonial-name">{name}</div>
          <div className="testimonial-location">{location}</div>
        </div>
      </div>
    </div>
  );
}

function NuisibleCard({ emoji, name, description }) {
  return (
    <div className="nuisible-card">
      <div className="nuisible-emoji">{emoji}</div>
      <div className="nuisible-name">{name}</div>
      <p className="nuisible-desc">{description}</p>
    </div>
  );
}

function CTABanner({ title, sub, onDevis }) {
  const { Phone } = window.Icons;
  return (
    <Section bg="var(--bg)">
      <div className="cta-banner">
        <div>
          <h2 className="cta-banner-title" dangerouslySetInnerHTML={{ __html: title }} />
          <p className="cta-banner-sub">{sub}</p>
        </div>
        <div className="cta-banner-actions">
          <Button variant="danger" lg href="tel:+33246915620" icon={<Phone size={18} />}>02 46 91 56 20</Button>
          <Button variant="primary" lg onClick={onDevis}>Demander un devis gratuit</Button>
        </div>
      </div>
    </Section>
  );
}

Object.assign(window, { ServiceCard, WhyCard, ProcessItem, ProcessStep, Testimonial, NuisibleCard, CTABanner });
