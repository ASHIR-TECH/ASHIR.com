(() => {
  var track = document.querySelector(".landing-marquee__track");
  if (!track) return;
  if (track.dataset.marqueeReady === "true") return;

  track.insertAdjacentHTML("beforeend", track.innerHTML);
  track.dataset.marqueeReady = "true";
  track.style.animation = "marquee-scroll 20s linear infinite";
})();
