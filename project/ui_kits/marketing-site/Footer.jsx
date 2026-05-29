// Footer.jsx
function Footer({ onNavigate }) {
  const { Phone, Mail, MapPin } = window.Icons;
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <img src="assets/sos-nuisibles-45-logo-white.png" alt="SOS Nuisibles 45" className="footer-brand-logo" />
          <p className="footer-brand-tagline">Votre expert local en dératisation, désinsectisation et traitement punaises de lit dans le Loiret depuis plus de 10 ans.</p>
          <div className="footer-phone">
            <Phone size={18} />
            <a href="tel:+33246915620" style={{ color: "var(--accent)" }}>02 46 91 56 20</a>
          </div>
          <div className="footer-contact-item">
            <Mail size={16} />
            contact@sos-nuisibles45.fr
          </div>
          <div className="footer-contact-item">
            <MapPin size={16} />
            Loiret (45) — Centre-Val de Loire
          </div>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Nos services</div>
          <ul>
            <li><a onClick={() => onNavigate("deratisation")}>Dératisation</a></li>
            <li><a onClick={() => onNavigate("desinsectisation")}>Désinsectisation</a></li>
            <li><a onClick={() => onNavigate("punaises")}>Punaises de lit</a></li>
            <li><a onClick={() => onNavigate("contact")}>Devis gratuit</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Zones d'intervention</div>
          <ul>
            <li><a>Orléans</a></li>
            <li><a>Montargis</a></li>
            <li><a>Gien</a></li>
            <li><a>Pithiviers</a></li>
            <li><a>Sully-sur-Loire</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Informations</div>
          <ul>
            <li><a>Urgence 24h/24</a></li>
            <li><a>Certifications</a></li>
            <li><a>Mentions légales</a></li>
            <li><a>Politique de confidentialité</a></li>
            <li><a onClick={() => onNavigate("contact")}>Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 SOS Nuisibles 45 — Tous droits réservés</span>
        <span>Certifié Biocide — SIRET : XXX XXX XXX XXXXX</span>
      </div>
    </footer>
  );
}

window.Footer = Footer;
