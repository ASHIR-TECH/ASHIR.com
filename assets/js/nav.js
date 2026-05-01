(() => {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".site-nav");
  const icon = document.querySelector(".nav-toggle__icon");
  const storageKey = "ashir-theme";

  if (!toggle || !menu || !icon) {
    return;
  }

  const scriptBase =
    document.querySelector('script[src$="assets/js/nav.js"], script[src$="../assets/js/nav.js"]')?.src ||
    document.currentScript?.src ||
    document.baseURI;
  const lightIcon = new URL("../css/images/whitemode drop-down button.png", scriptBase).href;
  const darkIcon = new URL("../css/images/darkmode drop-down button.png", scriptBase).href;

  const getTheme = () => document.documentElement.dataset.theme || localStorage.getItem(storageKey) || "light";

  const applyIcon = (theme) => {
    toggle.dataset.theme = theme;
    icon.src = theme === "dark" ? darkIcon : lightIcon;
  };

  const setOpen = (open) => {
    menu.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
  };

  applyIcon(getTheme());
  setOpen(false);

  window.addEventListener("ashir-theme-change", (event) => {
    applyIcon(event.detail?.theme || getTheme());
  });

  toggle.addEventListener("click", () => {
    setOpen(!menu.classList.contains("is-open"));
  });

  menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      setOpen(false);
    }
  });

  document.addEventListener("pointerdown", (event) => {
    if (!menu.classList.contains("is-open")) {
      return;
    }

    if (!menu.contains(event.target) && !toggle.contains(event.target)) {
      setOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setOpen(false);
      toggle.focus();
    }
  });
})();
