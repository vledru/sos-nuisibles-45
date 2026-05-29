# Brand Spec — SOS Nuisibles 45

## Source
Logo `mpo5f0px-sos-nuisibles-45-logo-v1.png` — guêpe noire et ambre doré sur fond blanc.

## Color tokens (OKLch)

```css
:root {
  --bg:      oklch(99% 0.003 90);      /* blanc légèrement chaud */
  --surface: oklch(100% 0 0);          /* blanc pur pour les cartes */
  --fg:      oklch(14% 0.018 60);      /* charbon très foncé (corps guêpe) */
  --muted:   oklch(52% 0.015 60);      /* gris-brun moyen */
  --border:  oklch(88% 0.008 85);      /* bordure légère dorée-neutre */
  --accent:  oklch(78% 0.19 82);       /* ambre jaune guêpe (signature logo) */
  --accent-dark: oklch(58% 0.18 70);   /* ambre foncé pour hover / texte sur clair */
  --danger:  oklch(54% 0.20 25);       /* rouge urgence */

  --font-display: 'Montserrat', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
  --font-body:    -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
}
```

## Font stacks
- **Display**: Montserrat (Google Fonts, weights 700/800) → system sans fallback. Fort, confiant, local.
- **Body**: System UI stack — lisible à toutes tailles.

## Layout posture rules
1. Radius généreux (12–16px) sur les cartes — chaleureux, pas froid
2. Badge urgence 24/7 toujours visible en rouge dans le header + bandeau sticky
3. Accent jaune réservé aux CTA primaires et aux highlights — max 2 utilisations par écran
4. Ombres légères sur les cartes (box-shadow avec 8–12px de blur, 4–8px de spread, opacité ≤ 0.10)
5. Navigation sobre : logo gauche, liens centre/droite, téléphone urgence bien visible

## Posture en une phrase
"Fond blanc propre, charbon profond, ambre doré signature, typographie robuste Montserrat — PME de proximité sérieuse avec un soupçon de chaleur."
