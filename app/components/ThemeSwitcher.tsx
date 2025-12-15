"use client";

import { ThemeId, themes } from "./theme/themeConfig";
import { useEffect, useState } from "react";

const THEME_KEY = "motionmint-theme";

type ThemeSwitcherProps = {
  themeId: ThemeId;
  setThemeId: (id: ThemeId) => void;
};

export function ThemeSwitcher({ themeId, setThemeId }: ThemeSwitcherProps) {
  // const [theme, setTheme] = useState<ThemeId>("luxury");

  useEffect(() => {
    const saved = window.localStorage.getItem(THEME_KEY) as ThemeId | null;
    const initial = saved && themes[saved] ? saved : "luxury";
    setThemeId(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  const handleChange = (id: ThemeId) => {
    setThemeId(id);
    document.documentElement.setAttribute("data-theme", id);
    window.localStorage.setItem(THEME_KEY, id);
  };

  return (
    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs md:text-sm">
      <span className="hidden text-xs text-gray-300 md:inline">
        Theme:
      </span>
      {Object.values(themes).map((t) => (
        <button
          key={t.id}
          onClick={() => handleChange(t.id)}
          className={`rounded-full px-2 py-1 transition ${
            themeId === t.id
              ? "mm-accent-bg text-black"
              : "bg-white/5 text-gray-300 hover:bg-white/10"
          }`}
        >
          {t.label.split(" ")[0]}
        </button>
      ))}
    </div>
  );
}
