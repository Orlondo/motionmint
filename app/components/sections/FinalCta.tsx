import { ThemeConfig } from "../theme/themeConfig";

interface FinalCtaProps {
  theme: ThemeConfig;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ theme }) => {
  return (
    <section className="mm-primary-bg mm-primary-text border-t border-white/5 px-4 py-16 md:px-10">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-2xl font-semibold md:text-3xl">
          Create your first video in minutes.
        </h2>
        <p className="mt-3 text-sm text-gray-300">
          No cameras. No editors. No complicated tools. Just MotionMint.
        </p>
        <button className="mm-accent-bg mt-6 rounded-full px-8 py-3 text-sm font-medium text-black">
          {theme.hero.primaryCta}
        </button>
      </div>
    </section>
  );
};
