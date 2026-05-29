// ContactForm.jsx — devis form with simple submit → success state

function ContactForm() {
  const [submitted, setSubmitted] = React.useState(false);
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [postal, setPostal] = React.useState("");
  const [pest, setPest] = React.useState("rongeurs");
  const [message, setMessage] = React.useState("");
  const [urgent, setUrgent] = React.useState(false);
  const { Check } = window.Icons;

  function onSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="form-card">
        <div className="form-success">
          <div className="form-success-icon"><Check size={32} /></div>
          <div className="form-success-title">Demande envoyée !</div>
          <p className="form-success-msg">
            Merci {name || "à vous"}. Nous vous recontactons sous 2 heures{urgent ? " — votre demande est marquée urgente" : ""}.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={onSubmit}>
      <div className="form-card-title">Demande de devis gratuit</div>
      <p className="form-card-sub">Réponse sous 2h — sans engagement.</p>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Nom <span className="required">*</span></label>
          <input className="form-input" required value={name} onChange={e => setName(e.target.value)} placeholder="Jean Martin" />
        </div>
        <div className="form-group">
          <label className="form-label">Téléphone <span className="required">*</span></label>
          <input className="form-input" required type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="06 12 34 56 78" />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Email</label>
          <input className="form-input" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="vous@exemple.fr" />
        </div>
        <div className="form-group">
          <label className="form-label">Code postal <span className="required">*</span></label>
          <input className="form-input" required value={postal} onChange={e => setPostal(e.target.value)} placeholder="45000" />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Type de nuisible <span className="required">*</span></label>
        <select className="form-select" value={pest} onChange={e => setPest(e.target.value)}>
          <option value="rongeurs">Rongeurs (rats, souris, mulots)</option>
          <option value="insectes">Insectes (cafards, fourmis)</option>
          <option value="guepes">Guêpes / frelons</option>
          <option value="punaises">Punaises de lit</option>
          <option value="autre">Autre / je ne sais pas</option>
        </select>
      </div>

      <div className="form-group">
        <label className="form-label">Décrivez votre situation</label>
        <textarea className="form-textarea" value={message} onChange={e => setMessage(e.target.value)}
          placeholder="Où avez-vous observé les nuisibles ? Depuis combien de temps ?"></textarea>
      </div>

      <label className="urgency-check-wrap">
        <input type="checkbox" checked={urgent} onChange={e => setUrgent(e.target.checked)} />
        <span className="urgency-check-label">
          <strong>Urgence</strong> — je souhaite une intervention sous 2h
        </span>
      </label>

      <button type="submit" className="btn-submit">Envoyer ma demande</button>
      <p className="form-privacy">
        En envoyant ce formulaire, vous acceptez d'être recontacté par SOS Nuisibles 45.
      </p>
    </form>
  );
}

window.ContactForm = ContactForm;
