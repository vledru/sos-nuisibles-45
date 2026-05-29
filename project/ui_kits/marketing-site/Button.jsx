// Button.jsx — primary (amber), danger (red), secondary, lg variant
function Button({ variant = "primary", lg = false, icon = null, children, onClick, href, style, type }) {
  const className = `btn btn-${variant}${lg ? " btn-lg" : ""}`;
  const content = <>{icon}{children}</>;
  if (href) return <a className={className} href={href} onClick={onClick} style={style}>{content}</a>;
  return <button type={type || "button"} className={className} onClick={onClick} style={style}>{content}</button>;
}

window.Button = Button;
