"use client";

import { ThemeConfig } from "../theme/themeConfig";

interface HeroProps {
  theme: ThemeConfig;
}

export const Hero: React.FC<HeroProps> = ({ theme }) => {
  const { hero } = theme;

  return (
    <section className="mm-primary-bg mm-primary-text relative px-4 pb-16 pt-10 md:px-10 md:pb-24 md:pt-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-center">
        <div className="flex-1">
          <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
            {hero.title}
          </h1>
          <p className="mt-4 max-w-xl text-sm text-gray-300 md:text-base">
            {hero.subtitle}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="mm-accent-bg rounded-full px-5 py-2 text-sm font-medium text-black shadow-md">
              {hero.primaryCta}
            </button>
            {hero.secondaryCta && (
              <button className="rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-gray-200">
                {hero.secondaryCta}
              </button>
            )}
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Built for real estate, Airbnb hosts, creators, and modern brands.
          </p>
        </div>

        <div className="mm-secondary-bg relative flex flex-1 items-center justify-center overflow-hidden rounded-3xl border border-white/10 p-6">
          <div className="h-40 w-full max-w-sm rounded-2xl bg-black/40" />
          <div className="pointer-events-none absolute inset-x-10 bottom-4 flex justify-between text-[10px] text-gray-400">
            <span>Listing Reel · 0:45</span>
            <span>Rendered by MotionMint</span>
          </div>
        </div>
      </div>
    </section>
  );
};
