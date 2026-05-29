// ServicePage.jsx — generic service page (dératisation / désinsectisation / punaises)
// Driven by a config object; same layout, swapped content.

const SERVICE_DATA = {
  deratisation: {
    eyebrow: "Loiret (45)",
    title: "Dératisation<br>professionnelle",
    subtitle: "Élimination certifiée des rongeurs — rats, souris, mulots — dans les habitations, commerces et locaux industriels du Loiret. Intervention rapide, résultat garanti.",
    nuisibleEyebrow: "Rongeurs traités",
    nuisibleTitle: "Quels rongeurs nous éliminons ?",
    nuisibleLead: "Nos techniciens identifient avec précision l'espèce avant d'agir. Chaque traitement est adapté à la nature et à l'étendue de l'infestation.",
    nuisibles: [
      { emoji: "🐀", name: "Rat surmulot", desc: "Le plus commun en France. Vit sous terre, dans les égouts et caves. Destructeur et vecteur de maladies." },
      { emoji: "🐁", name: "Souris grise", desc: "S'infiltre par les moindres interstices. Prolifère rapidement et contamine les denrées alimentaires." },
      { emoji: "🐿️", name: "Mulot sylvestre", desc: "Présent surtout en zones périurbaines et rurales. Endommage les jardins, potagers et fondations." },
      { emoji: "🦦", name: "Ragondin", desc: "Nuisible aux berges et canalisations. Fréquent près de la Loire et des canaux du Loiret." },
      { emoji: "🐭", name: "Rat noir (Rat du toit)", desc: "Grimpe sur les toitures et charpentes. S'installe dans les greniers et combles." },
      { emoji: "🦫", name: "Campagnol", desc: "Ravageur des cultures et des pelouses. Creuse des galeries souterraines extensives." },
    ],
    methodTitle: "Un protocole en 3 phases",
    steps: [
      { t: "Inspection et identification", d: "Notre technicien inspecte l'ensemble du bâtiment, identifie les espèces présentes, les terriers, les voies d'accès et évalue l'étendue de l'infestation." },
      { t: "Mise en place du traitement", d: "Pose d'appâts rodonticides sécurisés (boîtes de sécurité réglementaires), installation de pièges mécaniques, traitement de terriers avec produits homologués." },
      { t: "Suivi et compte-rendu", d: "Visite de contrôle pour vérifier l'efficacité, récupération des appâts consommés, ajustements si nécessaire. Rapport d'intervention officiel remis." },
    ],
    bullets: [
      "Techniciens certifiés Biocide, conformes à la réglementation",
      "Boîtes de sécurité verrouillées, sans risque pour enfants et animaux",
      "Rapport d'intervention fourni (obligatoire pour les restaurateurs)",
      "Disponible 24h/24, 7j/7 pour les urgences",
      "Devis gratuit et sans engagement avant chaque intervention",
    ],
    faq: [
      { q: "Combien de temps dure une intervention de dératisation ?", a: "Une intervention standard dure entre 1h et 2h selon la surface. Pour une infestation importante, plusieurs visites de suivi sont nécessaires sur 2 à 4 semaines." },
      { q: "Les produits sont-ils dangereux pour mes animaux ?", a: "Non — nous utilisons exclusivement des boîtes de sécurité verrouillées, inaccessibles aux animaux domestiques et aux enfants. Les rodonticides sont homologués et conformes à la réglementation européenne." },
      { q: "Intervenez-vous en urgence ?", a: "Oui, 24h/24 et 7j/7 dans tout le Loiret. Une équipe peut être chez vous sous 2 heures pour une urgence sanitaire." },
    ],
  },
  desinsectisation: {
    eyebrow: "Loiret (45)",
    title: "Désinsectisation<br>professionnelle",
    subtitle: "Cafards, fourmis, guêpes, frelons, puces, moustiques. Traitement ciblé ou préventif, nids en hauteur inclus, dans les particuliers et professionnels du Loiret.",
    nuisibleEyebrow: "Insectes traités",
    nuisibleTitle: "Quels insectes nous éliminons ?",
    nuisibleLead: "De l'invasion ponctuelle au nid à neutraliser — chaque espèce demande un protocole spécifique.",
    nuisibles: [
      { emoji: "🪳", name: "Cafards / blattes", desc: "Cuisines, salles de bain, restaurants. Traitement gel + pulvérisation, garantie de résultat." },
      { emoji: "🐝", name: "Guêpes & frelons", desc: "Destruction de nids en hauteur, cavités murales, charpentes. Équipement intégral, sécurité totale." },
      { emoji: "🐜", name: "Fourmis", desc: "Lignes intérieures et extérieures. Traitement par appâts à effet domino sur la colonie." },
      { emoji: "🦟", name: "Moustiques", desc: "Traitement préventif des jardins et zones humides — barrières et gîtes larvaires." },
      { emoji: "🪰", name: "Mouches", desc: "Cuisines, restaurants, élevages. Pièges UV et pulvérisations rémanentes." },
      { emoji: "🪲", name: "Puces & autres", desc: "Tapis, moquettes, locaux après animaux. Traitement intérieur + IGR (régulateur de croissance)." },
    ],
    methodTitle: "Méthode et protocoles",
    steps: [
      { t: "Diagnostic et identification", d: "Identification précise de l'espèce et localisation des foyers et passages. Le protocole dépend complètement de cette étape." },
      { t: "Traitement adapté", d: "Pulvérisation rémanente, gel, appâts ou destruction de nid selon l'espèce. Tous les produits sont homologués et appliqués par technicien certifié." },
      { t: "Conseils & suivi", d: "Conseils de prévention adaptés à votre lieu (entretien, étanchéité, hygiène) et visite de contrôle si nécessaire." },
    ],
    bullets: [
      "Certificat Biocide obligatoire — nos techniciens sont à jour",
      "Destruction de nids de guêpes en hauteur (jusqu'à 12m)",
      "Produits homologués, faible rémanence en milieu habité",
      "Garantie résultat sur tous les traitements de cafards",
      "Devis gratuit sur place avant toute intervention",
    ],
    faq: [
      { q: "Faut-il quitter le logement pendant le traitement ?", a: "Pour la plupart des traitements (gel, appâts), aucun. Pour les pulvérisations, il est recommandé de s'absenter 2 à 4h le temps que le produit sèche." },
      { q: "Combien coûte la destruction d'un nid de guêpes ?", a: "À partir de 90€ TTC pour un nid accessible. Le devis dépend de la hauteur et de la difficulté d'accès, et est gratuit sur place." },
      { q: "Quelle garantie sur les traitements cafards ?", a: "Garantie 3 mois sur tous nos traitements anti-cafards en milieu habité, avec passage de contrôle inclus." },
    ],
  },
  punaises: {
    eyebrow: "Loiret (45)",
    title: "Traitement<br>punaises de lit",
    subtitle: "Protocole thermique ou chimique certifié, contrôle après traitement, garantie de résultat. Discrétion totale pour particuliers, hôtels et résidences.",
    nuisibleEyebrow: "Comment les reconnaître",
    nuisibleTitle: "Signes d'infestation",
    nuisibleLead: "La détection précoce est essentielle — plus l'infestation est traitée tôt, plus le coût et la durée du traitement sont réduits.",
    nuisibles: [
      { emoji: "🛏️", name: "Piqûres alignées", desc: "Petites piqûres rouges en ligne ou en grappe, principalement sur les zones découvertes pendant le sommeil." },
      { emoji: "🩸", name: "Traces de sang", desc: "Petites taches brun-rouge sur les draps, oreillers ou matelas — restes d'écrasement durant la nuit." },
      { emoji: "⚫", name: "Déjections noires", desc: "Points noirs très fins (comme du poivre) le long des coutures du matelas, plinthes ou tête de lit." },
      { emoji: "🥚", name: "Œufs & mues", desc: "Œufs blancs (1mm) et peaux translucides abandonnées dans les recoins sombres et étroits." },
      { emoji: "👀", name: "Punaises visibles", desc: "Adultes de 5–7mm, brun-rougeâtre. Visibles au crépuscule, près du matelas, sommier et tête de lit." },
      { emoji: "💤", name: "Démangeaisons nocturnes", desc: "Réveils nocturnes avec démangeaisons, plus fréquemment à la même heure (cycle d'activité)." },
    ],
    methodTitle: "Notre protocole certifié",
    steps: [
      { t: "Inspection minutieuse", d: "Inspection visuelle complète des chambres, matelas, sommiers, tête de lit, plinthes, rideaux. Identification précise du foyer et de l'étendue." },
      { t: "Traitement thermique ou chimique", d: "Selon l'infestation : traitement par vapeur sèche haute température (90°C+) qui tue tous les stades, ou pulvérisations chimiques rémanentes ciblées. Discrétion totale." },
      { t: "Contrôle et garantie", d: "Visite de contrôle 2 à 3 semaines après traitement pour vérifier l'absence totale. Rapport officiel remis (utile pour les assurances et hôteliers)." },
    ],
    bullets: [
      "Protocole certifié CS3D — référence du secteur",
      "Traitement thermique ou chimique selon votre situation",
      "Discrétion absolue — véhicules non marqués sur demande",
      "Rapport d'intervention officiel pour assurance / hôtels",
      "Garantie de résultat avec passage de contrôle inclus",
    ],
    faq: [
      { q: "Le traitement thermique est-il sans risque pour mes meubles ?", a: "Oui — la vapeur sèche à 90°C ne mouille pas les surfaces et n'endommage ni les textiles ni les meubles en bois. Quelques objets sensibles (bougies, vinyles, chocolat…) doivent être retirés au préalable." },
      { q: "Faut-il jeter le matelas ?", a: "Non, dans 95% des cas. Le traitement élimine tous les stades — œufs, larves, adultes — sans avoir à jeter le mobilier. Nous fournissons un rapport prouvant la non-infestation." },
      { q: "Combien de temps avant d'être tranquille ?", a: "Immédiatement après un traitement thermique réussi. Pour les traitements chimiques, il peut subsister des éclosions sur 2 à 3 semaines, période couverte par notre contrôle de suivi." },
    ],
  },
};

function ServicePage({ slug, navigate }) {
  const data = SERVICE_DATA[slug];
  const { MapPin } = window.Icons;
  if (!data) return null;
  return (
    <>
      <PageHero
        eyebrow={data.eyebrow}
        eyebrowIcon={<MapPin size={14} />}
        title={data.title}
        subtitle={data.subtitle}
        onDevis={() => navigate("contact")}
      />

      <Section bg="var(--bg)"
        label={data.nuisibleEyebrow}
        title={data.nuisibleTitle}
        lead={data.nuisibleLead}
        center
      >
        <div className="nuisible-grid">
          {data.nuisibles.map(n => <NuisibleCard key={n.name} {...n} description={n.desc} />)}
        </div>
      </Section>

      <Section bg="var(--surface)">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 64, alignItems: "start" }} className="content-split">
          <div>
            <span className="section-label">Méthodes d'intervention</span>
            <h2 className="section-title">{data.methodTitle}</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 28, marginBottom: 32 }}>
              {data.steps.map((s, i) => (
                <ProcessStep key={i} num={i + 1} title={s.t}>{s.d}</ProcessStep>
              ))}
            </div>
            <InfoBox tone="accent" title="Conseils de prévention inclus">
              Après l'intervention, nos techniciens vous conseillent sur les mesures à prendre pour prévenir une nouvelle infestation.
            </InfoBox>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, margin: "28px 0 16px", color: "var(--fg)" }}>
              Pourquoi nous faire confiance ?
            </h3>
            <CheckList items={data.bullets} />
          </div>
          <StickyCTA onDevis={() => navigate("contact")} />
        </div>
      </Section>

      <Section bg="var(--bg)" label="Questions fréquentes" title="On vous répond" center>
        <FAQ items={data.faq} />
      </Section>

      <CTABanner
        title="Un doute ? Une urgence ?<br><span>Parlez-en à un technicien.</span>"
        sub="Réponse immédiate au téléphone — devis sous 2h par formulaire"
        onDevis={() => navigate("contact")}
      />
    </>
  );
}

window.ServicePage = ServicePage;
