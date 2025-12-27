"use client";

import { useEffect, useState } from "react";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { ThemeConfig, ThemeId, themes } from "./components/theme/themeConfig";
import { Hero } from "./components/sections/Hero";
import { Features } from "./components/sections/Features";
import { Pricing } from "./components/sections/Pricing";
import { Testimonials } from "./components/sections/Testimonials";
import { FinalCta } from "./components/sections/FinalCta";
import { Examples } from "./components/sections/Examples";

const THEME_KEY = "motionmint-theme";

export default function Page() {
  const [themeId, setThemeId] = useState<ThemeId>("luxury");
  const theme: ThemeConfig = themes[themeId];

  useEffect(() => {
    const saved = window.localStorage.getItem(THEME_KEY) as ThemeId | null;
    const initial = saved && themes[saved] ? saved : "luxury";
    setThemeId(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  return (
    <div className="mm-primary-bg mm-primary-text min-h-screen">
      <header className="mm-primary-bg sticky top-0 z-20 border-b border-white/10 px-4 py-3 backdrop-blur md:px-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="mm-accent-bg flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-semibold text-black">
              MM
            </div>
            <div>
              <div className="text-sm font-semibold tracking-tight">
                MotionMint
              </div>
              <div className="hidden text-[11px] text-gray-400 md:block">
                {theme.description}
              </div>
            </div>
          </div>
          <ThemeSwitcher themeId={themeId} setThemeId={setThemeId} />
        </div>
      </header>

      <main>
        <Hero theme={theme} />
        <Examples theme={theme} />
        <Features theme={theme} />
        <Pricing theme={theme} />
        <Testimonials theme={theme} />
        <FinalCta theme={theme} />
      </main>

      <footer className="mm-secondary-bg border-t border-white/10 px-4 py-6 text-xs text-gray-400 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 md:flex-row">
          <span>
            © {new Date().getFullYear()} MotionMint. All rights reserved.
          </span>
          <div className="flex gap-4">
            <button className="hover:underline">Terms</button>
            <button className="hover:underline">Privacy</button>
            <button className="hover:underline">Support</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
