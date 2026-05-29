// ContactPage.jsx — devis form + side info block

function ContactPage() {
  const { MapPin, Phone, Mail, Clock } = window.Icons;
  return (
    <>
      <PageHero
        eyebrow="Contact & Devis"
        eyebrowIcon={<MapPin size={14} />}
        title="Demandez votre<br>devis gratuit"
        subtitle="Réponse sous 2h en moyenne. Disponibles 24h/24 et 7j/7 dans tout le Loiret. Aucun engagement."
      />

      <Section bg="var(--bg)">
        <div className="contact-grid">
          <ContactForm />

          <div>
            <div className="sidebar-block">
              <div className="sidebar-block-title">Urgence — appelez-nous</div>
              <a href="tel:+33246915620" className="contact-phone-big">
                <Phone size={20} />
                02 46 91 56 20
              </a>
              <p style={{ fontSize: 12, color: "var(--muted)", textAlign: "center", marginTop: 8 }}>
                Disponible 24h/24 — 7j/7
              </p>
            </div>

            <div className="sidebar-block">
              <div className="sidebar-block-title">Coordonnées</div>
              <div className="contact-info-row">
                <div className="contact-info-icon"><Mail size={18} /></div>
                <div>
                  <div className="contact-info-label">Email</div>
                  <div className="contact-info-value">contact@sos-nuisibles45.fr</div>
                </div>
              </div>
              <div className="contact-info-row">
                <div className="contact-info-icon"><MapPin size={18} /></div>
                <div>
                  <div className="contact-info-label">Zone d'intervention</div>
                  <div className="contact-info-value">Tout le Loiret (45)</div>
                </div>
              </div>
              <div className="contact-info-row">
                <div className="contact-info-icon"><Clock size={18} /></div>
                <div>
                  <div className="contact-info-label">Horaires</div>
                  <div className="contact-info-value">24h/24 — 7j/7</div>
                </div>
              </div>
            </div>

            <div className="sidebar-block" style={{
              background: "oklch(56% 0.18 148 / 0.08)",
              border: "1px solid oklch(56% 0.18 148 / 0.25)"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ fontSize: 28 }}>✅</span>
                <div style={{ fontSize: 13, color: "var(--fg)", lineHeight: 1.5 }}>
                  <strong style={{ color: "oklch(46% 0.16 148)", fontFamily: "var(--font-display)" }}>Certifié Biocide</strong><br />
                  Tous nos techniciens sont titulaires du certificat obligatoire.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

window.ContactPage = ContactPage;
