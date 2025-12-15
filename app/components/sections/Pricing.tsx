import { ThemeConfig } from "../theme/themeConfig";

interface PricingProps {
  theme: ThemeConfig;
}

export const Pricing: React.FC<PricingProps> = ({ theme }) => {
  return (
    <section className="mm-primary-bg mm-primary-text border-t border-white/5 px-4 py-16 md:px-10">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-xl font-semibold md:text-2xl">
          Simple pricing for serious output.
        </h2>
        <p className="mt-2 text-sm text-gray-300">
          Start small or scale to unlimited campaigns. Switch plans any time.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {theme.pricing.tiers.map((tier) => (
            <div
              key={tier.name}
              className="mm-secondary-bg rounded-2xl border border-white/10 p-5 text-sm"
            >
              <h3 className="text-base font-semibold">{tier.name}</h3>
              <p className="mt-1 text-lg font-semibold">{tier.price}</p>
              <p className="mt-1 text-xs text-gray-400">{tier.tagline}</p>
              <ul className="mt-4 space-y-2 text-xs text-gray-200">
                {tier.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="mt-[3px] h-1.5 w-1.5 rounded-full mm-accent-bg" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button className="mm-accent-bg mt-5 w-full rounded-full px-4 py-2 text-xs font-medium text-black">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
