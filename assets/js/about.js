(() => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const counters = Array.from(document.querySelectorAll(".metric-number[data-target]"));
  const metricRow = document.querySelector(".metric-row");

  if (counters.length === 0) {
    return;
  }

  let hasAnimated = false;

  const animateCounter = (element, target) => {
    if (reducedMotion) {
      element.textContent = String(target);
      return;
    }

    const duration = 2200;
    const start = performance.now();
    const startValue = 0;
    element.textContent = "0";

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 2.25);
      const value = Math.round(startValue + (target - startValue) * eased);
      element.textContent = String(value);

      if (progress < 1) {
        window.requestAnimationFrame(tick);
      }
    };

    window.requestAnimationFrame(tick);
  };

  const runAnimation = () => {
    if (hasAnimated) {
      return;
    }

    hasAnimated = true;
    metricRow?.classList.add("is-animating");

    counters.forEach((element) => {
      const target = Number(element.dataset.target);
      if (!Number.isFinite(target)) {
        return;
      }

      animateCounter(element, target);
    });
  };

  if (!("IntersectionObserver" in window)) {
    runAnimation();
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        runAnimation();
        obs.disconnect();
      }
    },
    { threshold: 0.35 }
  );

  if (metricRow) {
    observer.observe(metricRow);
  } else {
    runAnimation();
  }

  window.setTimeout(() => {
    runAnimation();
  }, 900);
})();
