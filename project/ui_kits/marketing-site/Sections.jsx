// Sections.jsx — generic page section primitives + small repeating bits

function Section({ id, label, title, lead, center = false, bg = "var(--bg)", titleId, children, style }) {
  return (
    <section id={id} className="section" style={{ background: bg, ...style }}>
      <div className="container">
        {(label || title || lead) && (
          <div className={`section-header${center ? " center" : ""}`}>
            {label && <span className="section-label">{label}</span>}
            {title && <h2 className="section-title" id={titleId} dangerouslySetInnerHTML={{ __html: title }} />}
            {lead && <p className="section-lead">{lead}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

function StatsBar({ items }) {
  return (
    <div className="stats-bar" role="complementary">
      <div className="stats-bar-inner">
        {items.map(it => (
          <div className="stats-bar-item" key={it.label}>
            <div className="stats-bar-num">{it.value}</div>
            <div className="stats-bar-label">{it.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CheckList({ items, style }) {
  const { Check } = window.Icons;
  return (
    <div className="check-list" style={style}>
      {items.map((t, i) => (
        <div className="check-item" key={i}>
          <div className="check-icon"><Check size={12} /></div>
          <span>{t}</span>
        </div>
      ))}
    </div>
  );
}

function InfoBox({ tone = "accent", icon, title, children }) {
  const { Info } = window.Icons;
  return (
    <div className={`info-box info-box-${tone}`}>
      <div className="info-box-icon">{icon || <Info size={20} />}</div>
      <div>
        <div className="info-box-title">{title}</div>
        <p className="info-box-text">{children}</p>
      </div>
    </div>
  );
}

function ZoneTags({ tags, onClick }) {
  return (
    <div className="zone-tags">
      {tags.map(t => (
        <span key={t} className="zone-tag" onClick={onClick ? () => onClick(t) : undefined}>{t}</span>
      ))}
    </div>
  );
}

window.Section   = Section;
window.StatsBar  = StatsBar;
window.CheckList = CheckList;
window.InfoBox   = InfoBox;
window.ZoneTags  = ZoneTags;
