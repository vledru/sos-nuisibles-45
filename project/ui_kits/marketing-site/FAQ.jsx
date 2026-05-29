// FAQ.jsx — collapsible accordion

function FAQItem({ q, children }) {
  const [open, setOpen] = React.useState(false);
  const { ChevDown } = window.Icons;
  return (
    <div className={`faq-item${open ? " open" : ""}`}>
      <button className="faq-btn" onClick={() => setOpen(o => !o)}>
        {q}
        <ChevDown size={18} className="faq-chevron" />
      </button>
      {open && <div className="faq-body">{children}</div>}
    </div>
  );
}

function FAQ({ items }) {
  return (
    <div className="faq-list">
      {items.map((it, i) => <FAQItem key={i} q={it.q}>{it.a}</FAQItem>)}
    </div>
  );
}

window.FAQ = FAQ;
