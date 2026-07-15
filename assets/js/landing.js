(() => {
  const links = Array.from(document.querySelectorAll("[data-section-link]"));
  const sections = Array.from(document.querySelectorAll("[data-section]"));
  const root = document.documentElement;

  if (!links.length || !sections.length) {
    return;
  }

  const setActive = (id) => {
    links.forEach((link) => {
      const active = link.dataset.sectionLink === id;
      link.classList.toggle("is-active", active);
      if (active) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visible) {
        setActive(visible.target.dataset.section);
      }
    },
    {
      threshold: [0.2, 0.35, 0.55, 0.7],
      rootMargin: "-20% 0px -50% 0px",
    }
  );

  sections.forEach((section) => observer.observe(section));

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      setActive(link.dataset.sectionLink);
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  const revealTargets = document.querySelectorAll(".landing-section[data-reveal]");

  if (revealTargets.length && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealTargets.forEach((el) => revealObserver.observe(el));
  } else {
    revealTargets.forEach((el) => el.classList.add("is-visible"));
  }

  let scrollTarget = window.scrollY;
  let scrollAnimating = false;

  const smoothScroll = () => {
    const current = window.scrollY;
    const diff = scrollTarget - current;
    if (Math.abs(diff) < 0.5) {
      window.scrollTo({ top: scrollTarget, behavior: "auto" });
      scrollAnimating = false;
      return;
    }
    window.scrollTo({ top: current + diff * 0.12, behavior: "auto" });
    scrollAnimating = true;
    requestAnimationFrame(smoothScroll);
  };

  const isLandingPage = document.body.classList.contains("landing-page");

  if (isLandingPage && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.addEventListener("wheel", (e) => {
      e.preventDefault();
      scrollTarget = Math.max(0, Math.min(scrollTarget + e.deltaY * 0.5, document.documentElement.scrollHeight - window.innerHeight));
      if (!scrollAnimating) {
        requestAnimationFrame(smoothScroll);
      }
    }, { passive: false });
  }

  const hero = document.querySelector(".landing-hero");

  if (hero && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    let ticking = false;

    const updateHero = () => {
      const progress = Math.min(window.scrollY / window.innerHeight, 1);
      root.style.setProperty("--hero-shift", `${progress * 26}px`);
      root.style.setProperty("--hero-glow", `${0.25 + progress * 0.35}`);
      ticking = false;
    };

    window.addEventListener("scroll", () => {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(updateHero);
    }, { passive: true });

    updateHero();
  }
})();
