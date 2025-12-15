import { ThemeConfig } from "../theme/themeConfig";

interface TestimonialsProps {
  theme: ThemeConfig;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ theme }) => {
  return (
    <section className="mm-secondary-bg mm-primary-text border-t border-white/5 px-4 py-16 md:px-10">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-xl font-semibold md:text-2xl">
          Teams already using MotionMint.
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {theme.testimonials.map((t, idx) => (
            <figure
              key={idx}
              className="rounded-2xl border border-white/10 bg-black/20 p-5 text-sm"
            >
              <blockquote className="text-gray-200">“{t.quote}”</blockquote>
              <figcaption className="mt-3 text-xs text-gray-400">
                — {t.author}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
