(() => {
  const storageKey = "ashir-theme";
  const root = document.documentElement;
  const toggle = document.querySelector(".theme-toggle");
  const label = document.querySelector(".theme-toggle__label");

  if (!toggle || !label) {
    return;
  }

  const getSystemTheme = () =>
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

  const applyTheme = (theme) => {
    root.dataset.theme = theme;
    label.textContent = theme === "dark" ? "Dark mode" : "Light mode";
    toggle.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
    window.dispatchEvent(new CustomEvent("ashir-theme-change", { detail: { theme } }));
  };

  const savedTheme = localStorage.getItem(storageKey);
  const initialTheme = savedTheme || getSystemTheme();
  applyTheme(initialTheme);

  toggle.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem(storageKey, nextTheme);
    applyTheme(nextTheme);
  });

  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  mediaQuery.addEventListener?.("change", () => {
    if (!localStorage.getItem(storageKey)) {
      applyTheme(getSystemTheme());
    }
  });
})();
