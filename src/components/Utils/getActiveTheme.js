export function getActiveTheme() {
  try {
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") return stored;
  } catch (e) {
    console.error("Error accessing localStorage:", e);
  }

  try {
    const dataTheme = document.documentElement.getAttribute("data-theme");
    if (dataTheme === "light" || dataTheme === "dark") return dataTheme;
  } catch (e) {
    console.error("Error accessing localStorage:", e);
  }

  if (typeof window !== "undefined" && window.matchMedia) {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches)
      return "dark";
  }

  return "light";
}
