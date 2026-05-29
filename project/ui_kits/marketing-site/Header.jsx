// Header.jsx — sticky white nav: logo / nav / phone CTA

function Header({ currentPage, onNavigate }) {
  const { Phone } = window.Icons;
  const links = [
    { id: "home",      label: "Accueil" },
    { id: "deratisation",     label: "Dératisation" },
    { id: "desinsectisation", label: "Désinsectisation" },
    { id: "punaises",         label: "Punaises de lit" },
    { id: "contact",          label: "Contact & Devis" },
  ];
  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="#" className="site-logo" onClick={e => { e.preventDefault(); onNavigate("home"); }}>
          <img src="assets/sos-nuisibles-45-logo.png" alt="SOS Nuisibles 45" />
        </a>
        <nav className="site-nav">
          {links.map(l => (
            <a key={l.id} href="#"
               className={currentPage === l.id ? "active" : ""}
               onClick={e => { e.preventDefault(); onNavigate(l.id); }}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="header-cta">
          <a href="tel:+33246915620" className="btn-phone">
            <Phone size={16} />
            02 46 91 56 20
          </a>
        </div>
      </div>
    </header>
  );
}

window.Header = Header;
