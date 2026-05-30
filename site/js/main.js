// SOS Nuisibles 45 — Shared JS

document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const nav    = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.classList.toggle('open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen);
    });
    document.addEventListener('click', (e) => {
      if (!toggle.contains(e.target) && !nav.contains(e.target)) {
        toggle.classList.remove('open');
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Animate numbers on scroll
  const stats = document.querySelectorAll('[data-count]');
  if (stats.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.count, 10);
          const suffix = el.dataset.suffix || '';
          const duration = 1200;
          const start = performance.now();
          const animate = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.round(eased * target) + suffix;
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    stats.forEach(s => observer.observe(s));
  }

  // Contact form validation & submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    const submitBtn = contactForm.querySelector('button[type="submit"]');

    const rules = {
      nom:        { required: true, minLen: 2,  msg: 'Veuillez saisir votre nom (2 caractères minimum).' },
      telephone:  { required: true, pattern: /^[\d\s().+\-]{7,15}$/, msg: 'Numéro de téléphone invalide.' },
      email:      { required: false, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, msg: 'Adresse e-mail invalide.' },
      codepostal: { required: true, pattern: /^\d{5}$/, msg: 'Code postal à 5 chiffres requis.' },
      nuisible:   { required: true, msg: 'Veuillez sélectionner un type de nuisible.' },
    };

    function validateField(id) {
      const el    = document.getElementById(id);
      const rule  = rules[id];
      const err   = document.getElementById(id + '-error');
      if (!el || !rule) return true;

      const val = el.value.trim();
      let msg = '';

      if (rule.required && !val) {
        msg = rule.msg;
      } else if (val && rule.minLen && val.length < rule.minLen) {
        msg = rule.msg;
      } else if (val && rule.pattern && !rule.pattern.test(val)) {
        msg = rule.msg;
      }

      el.classList.toggle('invalid', !!msg);
      el.classList.toggle('valid', !msg && (rule.required ? !!val : true));
      if (err) {
        err.textContent = msg;
        err.classList.toggle('visible', !!msg);
      }
      return !msg;
    }

    function updateSubmit() {
      const allValid = Object.keys(rules).every(id => {
        const el   = document.getElementById(id);
        const rule = rules[id];
        if (!el) return true;
        const val = el.value.trim();
        if (rule.required && !val) return false;
        if (val && rule.minLen && val.length < rule.minLen) return false;
        if (val && rule.pattern && !rule.pattern.test(val)) return false;
        return true;
      });
      submitBtn.disabled = !allValid;
    }

    // Validate on blur; then live on input/change
    Object.keys(rules).forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      el.addEventListener('blur', () => { validateField(id); updateSubmit(); });
      el.addEventListener(el.tagName === 'SELECT' ? 'change' : 'input', () => {
        if (el.classList.contains('invalid') || el.classList.contains('valid')) {
          validateField(id);
        }
        updateSubmit();
      });
    });

    // Initial state
    updateSubmit();

    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const allValid = Object.keys(rules).every(id => validateField(id));
      updateSubmit();
      if (!allValid) return;

      submitBtn.disabled = true;
      submitBtn.textContent = 'Envoi en cours…';

      try {
        const res = await fetch('https://formspree.io/f/mwvzzjln', {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: new FormData(contactForm),
        });

        if (res.ok) {
          const successMsg = document.getElementById('form-success');
          if (successMsg) {
            successMsg.style.display = 'flex';
            contactForm.style.display = 'none';
            successMsg.scrollIntoView({ block: 'nearest' });
          }
        } else {
          submitBtn.textContent = 'Erreur — réessayez';
          submitBtn.disabled = false;
        }
      } catch {
        submitBtn.textContent = 'Erreur réseau — réessayez';
        submitBtn.disabled = false;
      }
    });
  }
});
