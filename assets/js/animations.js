(() => {
  if (typeof anime === "undefined") {
    console.warn("[animations] anime.js not loaded");
    return;
  }

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll("[data-reveal]").forEach(function(el) { el.classList.add("is-visible"); });
    return;
  }

  console.log("[animations] anime.js loaded, starting animations");

  var ease = "easeOutExpo";

  anime.set(".landing-eyebrow", { opacity: 0, translateY: 30 });
  anime.set(".landing-title", { opacity: 0, translateY: 50, scale: 0.95 });
  anime.set(".landing-kicker", { opacity: 0, translateY: 30 });
  anime.set(".landing-scroll__arrow", { opacity: 0, translateY: -10 });
  anime.set(".landing-scroll", { opacity: 0 });

  anime.timeline({ delay: 200, easing: ease })
    .add({ targets: ".landing-eyebrow", opacity: [0, 1], translateY: [30, 0], duration: 800 })
    .add({ targets: ".landing-title", opacity: [0, 1], translateY: [50, 0], scale: [0.95, 1], duration: 1000 }, "-=500")
    .add({ targets: ".landing-kicker", opacity: [0, 1], translateY: [30, 0], duration: 800 }, "-=600")
    .add({ targets: ".landing-scroll__arrow", opacity: [0, 1], translateY: [-10, 0], duration: 600 }, "-=300")
    .add({ targets: ".landing-scroll", opacity: [0, 1], duration: 600 }, "-=400");

  function revealSection(sectionSelector, childSelector, animProps, staggerMs) {
    var section = document.querySelector(sectionSelector);
    if (!section) return;

    var children = section.querySelectorAll(childSelector);
    if (!children.length) return;

    anime.set(children, { opacity: 0 });

    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          setTimeout(function() {
            anime(Object.assign({}, animProps, {
              targets: children,
              delay: staggerMs ? anime.stagger(staggerMs) : 0
            }));
          }, 450);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    observer.observe(section);
  }

  var productsSection = document.querySelector("#products");
  if (productsSection) {
    var card1 = productsSection.querySelector(".product-card");

    if (card1) {
      anime.set(card1, { opacity: 0, scale: 0.9, translateY: 40 });

      var prodObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            setTimeout(function() {
              anime({
                targets: card1,
                opacity: [0, 1],
                scale: [0.9, 1],
                translateY: [40, 0],
                duration: 900,
                easing: ease
              });
            }, 450);
            prodObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      prodObserver.observe(productsSection);
    }
  }

  revealSection("#stack", ".stack-card", {
    opacity: [0, 1], translateX: [-60, 0], duration: 900, easing: ease
  }, 160);

  revealSection("#projects", ".project-row", {
    opacity: [0, 1], translateX: [-80, 0], duration: 800, easing: ease
  }, 140);

  revealSection("#contact-band", ".landing-pitch__card", {
    opacity: [0, 1], translateY: [50, 0], scale: [0.97, 1], duration: 900, easing: ease
  }, 180);

  revealSection("#contact-band", ".landing-cta-band", {
    opacity: [0, 1], translateY: [40, 0], duration: 800, easing: ease
  }, 0);

  var footer = document.querySelector(".landing-footer");
  if (footer) {
    var footerChildren = footer.querySelectorAll(".landing-footer__top, .landing-footer__bottom");
    if (footerChildren.length) {
      anime.set(footerChildren, { opacity: 0 });

      var footerObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            setTimeout(function() {
              anime({
                targets: footerChildren,
                opacity: [0, 1],
                translateY: [30, 0],
                duration: 700,
                easing: ease,
                delay: anime.stagger(120)
              });
            }, 200);
            footerObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      footerObserver.observe(footer);
    }

    var socialLinks = footer.querySelectorAll(".social-link");
    if (socialLinks.length) {
      anime.set(socialLinks, { opacity: 0, scale: 0.8 });

      var socialObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            setTimeout(function() {
              anime({
                targets: socialLinks,
                opacity: [0, 1],
                scale: [0.8, 1],
                duration: 500,
                easing: ease,
                delay: anime.stagger(80)
              });
            }, 500);
            socialObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      socialObserver.observe(footer);
    }
  }
})();
