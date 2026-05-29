// EmergencyBar.jsx — sticky red bar atop every page

function EmergencyBar({ label = "Urgence 24h/24 & 7j/7", suffix = "Intervention rapide dans tout le Loiret — Appelez maintenant :", phone = "02 46 91 56 20", tel = "+33246915620" }) {
  return (
    <div className="emergency-bar" role="banner">
      <span className="pulse-dot" aria-hidden="true"></span>
      <strong>{label}</strong>
      <span>— {suffix}</span>
      <a href={`tel:${tel}`}>{phone}</a>
    </div>
  );
}

window.EmergencyBar = EmergencyBar;
