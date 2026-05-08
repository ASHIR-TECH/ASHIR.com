(() => {
  const viewport = document.querySelector(".landing-marquee__viewport");
  const track = document.querySelector(".landing-marquee__track");

  if (!viewport || !track) {
    return;
  }

  if (track.dataset.marqueeReady === "true") {
    return;
  }

  const originalHTML = track.innerHTML;
  track.insertAdjacentHTML("beforeend", originalHTML);
  track.dataset.marqueeReady = "true";
  track.style.setProperty("--marquee-distance", `${track.scrollWidth / 2}px`);
  track.style.animation = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "marquee-flow 22s linear infinite"
    : "marquee-flow 12s linear infinite";
})();
