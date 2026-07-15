(() => {
  if (typeof anime === "undefined") return;

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) {
    document.querySelectorAll("[data-reveal]").forEach(el => el.classList.add("is-visible"));
    return;
  }

  const ease = "easeOutExpo";

  /* ── hero entrance ── */
  anime.set(".landing-eyebrow", { opacity: 0, y: 30 });
  anime.set(".landing-title", { opacity: 0, y: 50, scale: 0.95 });
  anime.set(".landing-kicker", { opacity: 0, y: 30 });

  anime.timeline({ delay: 200, easing: ease })
    .add({ targets: ".landing-eyebrow", opacity: [0, 1], y: [30, 0], duration: 800 })
    .add({ targets: ".landing-title", opacity: [0, 1], y: [50, 0], scale: [0.95, 1], duration: 1000 }, "-=500")
    .add({ targets: ".landing-kicker", opacity: [0, 1], y: [30, 0], duration: 800 }, "-=600");

  /* ── hero scroll-fade: content fades out as user scrolls ── */
  const heroContent = document.querySelector(".landing-hero__content");
  const heroSticky = document.querySelector(".landing-hero__sticky");
  if (heroContent && heroSticky) {
    const heroEls = heroContent.querySelectorAll(".landing-eyebrow, .landing-title, .landing-kicker");
    let heroTicking = false;

    const onScroll = () => {
      const progress = Math.min(window.scrollY / window.innerHeight, 1);
      const fade = 1 - progress;
      heroContent.style.opacity = fade;
      heroContent.style.transform = "translateY(" + (progress * 60) + "px)";
      heroSticky.style.filter = "blur(" + (progress * 8) + "px)";
      heroSticky.style.opacity = 1 - progress * 0.4;
      heroTicking = false;
    };

    window.addEventListener("scroll", () => {
      if (!heroTicking) { heroTicking = true; requestAnimationFrame(onScroll); }
    }, { passive: true });
    onScroll();
  }

  /* ── section reveal helper ── */
  function revealSection(id, childSel, props, stagger) {
    const section = document.querySelector(id);
    if (!section) return;
    const children = section.querySelectorAll(childSel);
    if (!children.length) return;
    anime.set(children, { opacity: 0 });

    const obs = new IntersectionObserver(entries => {
      const visible = entries.find(e => e.isIntersecting);
      if (visible) {
        setTimeout(() => {
          anime(Object.assign({}, props, {
            targets: children,
            delay: stagger ? anime.stagger(stagger) : 0
          }));
        }, 300);
        obs.unobserve(section);
      }
    }, { threshold: 0.15 });
    obs.observe(section);
  }

  /* ── products ── */
  const prodSection = document.querySelector("#products");
  if (prodSection) {
    const card = prodSection.querySelector(".product-card");
    if (card) {
      anime.set(card, { opacity: 0, scale: 0.92, y: 50 });
      const prodObs = new IntersectionObserver(entries => {
        if (entries.some(e => e.isIntersecting)) {
          setTimeout(() => {
            anime({ targets: card, opacity: [0, 1], scale: [0.92, 1], y: [50, 0], duration: 1000, easing: ease });
          }, 300);
          prodObs.unobserve(prodSection);
        }
      }, { threshold: 0.15 });
      prodObs.observe(prodSection);
    }
  }

  /* ── stack cards ── */
  revealSection("#stack", ".stack-card", {
    opacity: [0, 1], x: [-60, 0], duration: 900, easing: ease
  }, 180);

  /* ── project rows ── */
  revealSection("#projects", ".project-row", {
    opacity: [0, 1], x: [-80, 0], duration: 800, easing: ease
  }, 160);

  /* ── pitch cards ── */
  revealSection("#contact-band", ".landing-pitch__card", {
    opacity: [0, 1], y: [60, 0], scale: [0.97, 1], duration: 1000, easing: ease
  }, 200);

  /* ── cta band ── */
  revealSection("#contact-band", ".landing-cta-band", {
    opacity: [0, 1], y: [40, 0], duration: 800, easing: ease
  }, 0);

  /* ── footer ── */
  const footer = document.querySelector(".landing-footer");
  if (footer) {
    const footerParts = footer.querySelectorAll(".landing-footer__top, .landing-footer__bottom");
    if (footerParts.length) {
      anime.set(footerParts, { opacity: 0 });
      const fObs = new IntersectionObserver(entries => {
        if (entries.some(e => e.isIntersecting)) {
          setTimeout(() => {
            anime({ targets: footerParts, opacity: [0, 1], y: [30, 0], duration: 700, easing: ease, delay: anime.stagger(120) });
          }, 200);
          fObs.unobserve(footer);
        }
      }, { threshold: 0.1 });
      fObs.observe(footer);
    }

    const socials = footer.querySelectorAll(".social-link");
    if (socials.length) {
      anime.set(socials, { opacity: 0, scale: 0.8 });
      const sObs = new IntersectionObserver(entries => {
        if (entries.some(e => e.isIntersecting)) {
          setTimeout(() => {
            anime({ targets: socials, opacity: [0, 1], scale: [0.8, 1], duration: 500, easing: ease, delay: anime.stagger(80) });
          }, 500);
          sObs.unobserve(footer);
        }
      }, { threshold: 0.1 });
      sObs.observe(footer);
    }
  }
})();
