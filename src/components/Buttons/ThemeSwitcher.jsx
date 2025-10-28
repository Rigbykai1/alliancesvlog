// ...existing code...
import { LuMoonStar, LuSunMedium } from "react-icons/lu";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(() => {
    try {
      const stored = localStorage.getItem("theme");
      if (stored === "light" || stored === "dark") return stored;
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      )
        return "dark";
    } catch (e) {}
    return "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {}

    // emitir evento para la misma pestaña
    try {
      window.dispatchEvent(new CustomEvent("theme-change", { detail: theme }));
    } catch (e) {}

    try {
      const bc = new BroadcastChannel("theme");
      bc.postMessage(theme);
      bc.close();
    } catch (e) {}
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <label
      className="swap swap-rotate fixed bottom-4 right-4 z-10"
      aria-label="Cambiar tema"
    >
      <input
        type="checkbox"
        className="theme-controller"
        checked={theme === "light"}
        onChange={toggleTheme}
      />
      <LuSunMedium className="size-10 swap-off" />
      <LuMoonStar className="size-10 swap-on" />
    </label>
  );
};

export default ThemeSwitcher;
