(() => {
  const links = Array.from(document.querySelectorAll("[data-section-link]"));
  const sections = Array.from(document.querySelectorAll("[data-section]"));
  const root = document.documentElement;
  const progressBar = document.querySelector("body.landing-page::after");

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

      // Scroll progress bar
      const scrollTop = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? scrollTop / maxScroll : 0;
      root.style.setProperty("--scroll-progress", `${(progress * 100).toFixed(2)}%`);
    },
    {
      threshold: [0.2, 0.35, 0.55, 0.7],
      rootMargin: "-25% 0px -50% 0px",
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

  // Scroll progress on every scroll event
  window.addEventListener(
    "scroll",
    () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? scrollTop / maxScroll : 0;
      root.style.setProperty("--scroll-progress", `${(progress * 100).toFixed(2)}%`);
    },
    { passive: true }
  );
})();
