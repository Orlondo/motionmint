import { ThemeConfig } from "../theme/themeConfig";

interface FeaturesProps {
  theme: ThemeConfig;
}

export const Features: React.FC<FeaturesProps> = () => {
  return (
    <section className="mm-secondary-bg mm-primary-text border-t border-white/5 px-4 py-16 md:px-10">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-xl font-semibold md:text-2xl">
          Cinematic videos. Simple 3-step flow.
        </h2>
        <p className="mt-2 text-sm text-gray-300">
          MotionMint turns raw photos and ideas into polished videos for real
          estate, Airbnb, ecommerce, creators, and agencies.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Feature
            title="Upload"
            body="Drop in listing photos, product shots, or brand imagery."
          />
          <Feature
            title="Choose a Style"
            body="Pick a cinematic tour, social reel, or promo layout in one click."
          />
          <Feature
            title="Download"
            body="Get a ready-to-post video with transitions and captions handled."
          />
        </div>
      </div>
    </section>
  );
};

const Feature = ({ title, body }: { title: string; body: string }) => (
  <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm">
    <h3 className="mm-accent mb-2 text-sm font-semibold uppercase tracking-wide">
      {title}
    </h3>
    <p className="text-gray-300">{body}</p>
  </div>
);
