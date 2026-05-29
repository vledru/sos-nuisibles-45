// Pages.jsx — page-level compositions, one per route in the click-thru demo

// ── HomePage ──────────────────────────────────────────────────
function HomePage({ navigate }) {
  const { Cog, Warning, Home, Clock, Shield, MapPin, Calendar, Info } = window.Icons;
  return (
    <>
      <Hero onNavigate={navigate} />

      <StatsBar items={[
        { value: "500+",   label: "Interventions réalisées" },
        { value: "24h",    label: "Service d'urgence" },
        { value: "98%",    label: "Clients satisfaits" },
        { value: "10 ans", label: "D'expérience dans le 45" },
      ]} />

      <Section
        bg="var(--bg)"
        label="Nos prestations"
        title="Tous les traitements nuisibles<br>en un seul appel"
        lead="Diagnostics précis, produits homologués, résultats garantis. Nous intervenons chez les particuliers, les professionnels et les collectivités."
        center
      >
        <div className="grid-3">
          <ServiceCard
            emoji="🐀"
            gradient="linear-gradient(135deg, oklch(20% 0.02 60) 0%, oklch(30% 0.04 60) 100%)"
            icon={<Cog size={32} />}
            title="Dératisation"
            description="Élimination des rats, souris et mulots par poses d'appâts sécurisés, pièges et traitement de terriers. Rapport d'intervention détaillé fourni."
            bullets={[
              "Rats, souris, mulots, ragondins",
              "Particuliers, restaurants, entrepôts",
              "Produits homologués, sans danger",
            ]}
            onCta={() => navigate("deratisation")}
          />
          <ServiceCard
            emoji="🪳"
            gradient="linear-gradient(135deg, oklch(18% 0.03 200) 0%, oklch(28% 0.05 180) 100%)"
            icon={<Warning size={32} />}
            title="Désinsectisation"
            description="Traitement contre les cafards, fourmis, guêpes, frelons, moustiques, mouches et tout insecte nuisible à votre domicile ou local professionnel."
            bullets={[
              "Cafards, guêpes, frelons, puces",
              "Traitement ciblé ou préventif",
              "Nids de guêpes en hauteur inclus",
            ]}
            onCta={() => navigate("desinsectisation")}
          />
          <ServiceCard
            emoji="🛏️"
            gradient="linear-gradient(135deg, oklch(30% 0.05 290) 0%, oklch(22% 0.04 310) 100%)"
            icon={<Home size={32} />}
            title="Punaises de lit"
            description="Protocole de traitement thermique ou chimique certifié, avec contrôle et garantie après intervention. Discrétion assurée pour particuliers et hôtels."
            bullets={[
              "Traitement thermique ou chimique",
              "Résultat garanti, rapport officiel",
              "Intervention discrète et rapide",
            ]}
            onCta={() => navigate("punaises")}
          />
        </div>
      </Section>

      <section className="why-section">
        <div className="container">
          <div className="section-header center">
            <span className="section-label" style={{ color: "var(--accent)" }}>Pourquoi nous choisir</span>
            <h2 className="section-title" style={{ color: "#fff" }}>Votre tranquillité,<br />notre priorité</h2>
            <p className="section-lead" style={{ color: "rgba(255,255,255,0.60)", margin: "0 auto" }}>
              Des techniciens qualifiés, des produits certifiés, une entreprise ancrée localement dans le Loiret depuis plus de 10 ans.
            </p>
          </div>
          <div className="why-grid">
            <WhyCard icon={<Clock size={28} />} title="Réactivité maximale">
              Disponibles 24h/24 et 7j/7, nos équipes peuvent intervenir dans les 2 heures suivant votre appel partout dans le Loiret.
            </WhyCard>
            <WhyCard icon={<Shield size={28} />} title="Certifiés et agréés">
              Titulaires du certificat Biocide obligatoire et formés aux dernières normes réglementaires. Vos garanties sont couvertes.
            </WhyCard>
            <WhyCard icon={<MapPin size={28} />} title="Expertise locale">
              Nous connaissons parfaitement le terrain, les espèces présentes et les habitudes de nuisibles spécifiques au Loiret.
            </WhyCard>
            <WhyCard icon={<Calendar size={28} />} title="Devis gratuit">
              Diagnostic sur place sans engagement, devis transparent avant chaque intervention. Pas de frais cachés.
            </WhyCard>
          </div>
        </div>
      </section>

      <Section bg="var(--surface)" label="Comment ça marche" title="Intervention en 3 étapes simples" center>
        <div className="process-grid">
          <ProcessItem num="1" title="Appelez ou contactez-nous">
            Par téléphone au 02 46 91 56 20 — disponible 24h/24 — ou via le formulaire en ligne. Décrivez votre problème en quelques mots.
          </ProcessItem>
          <ProcessItem num="2" title="Diagnostic et devis gratuit">
            Nos techniciens se rendent sur place, identifient le type de nuisible et son étendue. Le devis vous est remis sur place, sans engagement.
          </ProcessItem>
          <ProcessItem num="3" title="Traitement et garantie">
            Intervention avec les produits adaptés, rapport d'intervention remis en fin de traitement. Garantie de résultat sur tous nos traitements.
          </ProcessItem>
        </div>
      </Section>

      <Section bg="var(--surface)" label="Avis clients" title="Ce que disent nos clients"
        lead="Plus de 500 familles et professionnels du Loiret nous font confiance." center
        style={{ paddingTop: 0 }}
      >
        <div className="grid-3">
          <Testimonial text="Intervention ultra-rapide pour un problème de rats dans mon garage. Le technicien était là en moins d'une heure. Résultat au top, plus aucun signe depuis 3 mois."
            initials="JM" name="Jean-Marc D." location="Orléans (45)" />
          <Testimonial text="Nid de frelons à 8 mètres de hauteur. L'équipe a géré ça avec beaucoup de professionnalisme et de sécurité. Je les recommande vivement à tous mes voisins."
            initials="SL" name="Sophie L." location="Montargis (45)" />
          <Testimonial text="Problème de punaises de lit dans notre chambre d'hôtel. SOS Nuisibles 45 a traité ça discrètement et efficacement. Rapport fourni pour notre assurance."
            initials="PC" name="Pierre C." location="Gien (45) — Hôtelier" />
        </div>
      </Section>

      <Section bg="var(--bg)" id="zone">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <span className="section-label">Zone d'intervention</span>
            <h2 className="section-title">Nous intervenons dans tout le Loiret</h2>
            <p className="section-lead">Implantés dans le département du Loiret (45), nos équipes se déplacent dans toutes les communes : ville, périphérie, zones rurales et industrielles.</p>
            <ZoneTags tags={["Orléans","Montargis","Gien","Pithiviers","Sully-sur-Loire","Châteauneuf-sur-Loire","Beaugency","Meung-sur-Loire","Fleury-les-Aubrais","Olivet","Saint-Jean-de-la-Ruelle","Amilly","Et toutes les communes 45…"]} />
            <div style={{ marginTop: 28 }}>
              <InfoBox tone="accent" title="Intervention dans les départements limitrophes">
                Nous pouvons également intervenir dans le Cher (18), le Loir-et-Cher (41) et l'Essonne (91) selon disponibilité. Appelez-nous pour plus d'informations.
              </InfoBox>
            </div>
          </div>
          <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: 40, boxShadow: "var(--shadow)", textAlign: "center" }}>
            <div style={{ width: "100%", aspectRatio: "3/4", maxHeight: 320, background: "linear-gradient(135deg, var(--accent-light) 0%, oklch(93% 0.012 85) 100%)", borderRadius: "var(--radius)", marginBottom: 20, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
              <LoiretMap />
            </div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, color: "var(--fg)" }}>Zone d'intervention principale</div>
            <div style={{ fontSize: 13, color: "var(--muted)", marginTop: 4 }}>Loiret (45) — Intervention en moins de 2h</div>
          </div>
        </div>
      </Section>

      <CTABanner
        title="Un problème de nuisibles ?<br><span>Appelez-nous maintenant.</span>"
        sub="Service d'urgence disponible 24h/24 — 7j/7 — Intervention rapide dans tout le Loiret"
        onDevis={() => navigate("contact")}
      />
    </>
  );
}

function LoiretMap() {
  return (
    <svg viewBox="0 0 300 380" style={{ width: "100%", height: "100%" }}>
      <path d="M60,40 L90,20 L140,15 L200,25 L240,50 L260,90 L250,130 L270,160 L260,200 L240,230 L230,270 L200,300 L170,330 L140,350 L100,340 L70,310 L40,280 L30,240 L20,200 L25,160 L40,120 L35,80 Z"
        fill="oklch(92% 0.10 82)" stroke="oklch(78% 0.19 82)" strokeWidth="2.5" />
      <path d="M30,210 Q60,195 90,200 Q130,205 160,190 Q200,175 240,180 Q255,183 265,195"
        fill="none" stroke="oklch(58% 0.15 240)" strokeWidth="3.5" strokeLinecap="round" opacity="0.6"/>
      <circle cx="140" cy="175" r="10" fill="var(--danger)" />
      <circle cx="140" cy="175" r="16" fill="none" stroke="var(--danger)" strokeWidth="2" opacity="0.4"/>
      <text x="155" y="172" fontFamily="Montserrat, sans-serif" fontSize="12" fontWeight="700" fill="var(--fg)">Orléans</text>
      <circle cx="215" cy="100" r="6" fill="var(--accent-dark)" />
      <text x="225" y="103" fontFamily="Montserrat, sans-serif" fontSize="10" fontWeight="600" fill="var(--fg)">Montargis</text>
      <circle cx="220" cy="190" r="6" fill="var(--accent-dark)" />
      <text x="228" y="193" fontFamily="Montserrat, sans-serif" fontSize="10" fontWeight="600" fill="var(--fg)">Gien</text>
      <circle cx="135" cy="90" r="6" fill="var(--accent-dark)" />
      <text x="143" y="93" fontFamily="Montserrat, sans-serif" fontSize="10" fontWeight="600" fill="var(--fg)">Pithiviers</text>
      <text x="75" y="260" fontFamily="Montserrat, sans-serif" fontSize="20" fontWeight="900" fill="var(--accent-dark)" opacity="0.6">LOIRET</text>
      <text x="100" y="285" fontFamily="Montserrat, sans-serif" fontSize="28" fontWeight="900" fill="var(--accent)">45</text>
    </svg>
  );
}

window.HomePage = HomePage;
