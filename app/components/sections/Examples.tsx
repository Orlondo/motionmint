import { ThemeConfig } from "../theme/themeConfig";

export function Examples({ theme }: { theme: ThemeConfig }) {
  const cards =
    theme.id === "luxury"
      ? [
          { title: "Luxury Listing Tour", tag: "Real estate", meta: "0:45 · Cinematic" },
          { title: "Designer Showcase", tag: "Interior design", meta: "0:30 · Elegant" },
          { title: "Airbnb Walkthrough", tag: "Short-term rental", meta: "0:25 · Warm" },
        ]
      : theme.id === "tech"
      ? [
          { title: "Listing Reel Template", tag: "Real estate", meta: "0:45 · Automated" },
          { title: "Product Ad Variant Pack", tag: "Ecommerce", meta: "0:15 · Multi-output" },
          { title: "Agency Pitch Clip", tag: "Agency", meta: "0:20 · Fast" },
        ]
      : theme.id === "friendly"
      ? [
          { title: "Airbnb Highlight Reel", tag: "Airbnb", meta: "0:20 · Fun" },
          { title: "Creator Hook Reel", tag: "Creator", meta: "0:12 · Trendy" },
          { title: "Small Biz Promo", tag: "Business", meta: "0:15 · Easy" },
        ]
      : [
          { title: "Clean Listing Tour", tag: "Real estate", meta: "0:45 · Minimal" },
          { title: "Simple Product Demo", tag: "Ecommerce", meta: "0:15 · Crisp" },
          { title: "Brand Intro Clip", tag: "Brand", meta: "0:10 · Quiet" },
        ];

  return (
    <section id="examples" className="mm-secondary-bg mm-primary-text border-t border-white/10 px-4 py-16 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-xl font-semibold md:text-2xl">Examples</h2>
            <p className="mt-1 text-sm text-gray-300">
              Swap themes to see how MotionMint can feel premium, modern, friendly, or minimal.
            </p>
          </div>
          <a href="#pricing" className="text-sm underline underline-offset-4">
            See pricing
          </a>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {cards.map((c) => (
            <div key={c.title} className="rounded-3xl border border-white/10 bg-black/20 p-5">
              <div className="flex items-center justify-between">
                <span className="mm-accent inline-flex rounded-full bg-white/5 px-3 py-1 text-xs">
                  {c.tag}
                </span>
                <span className="text-xs text-gray-400">{c.meta}</span>
              </div>
              <h3 className="mt-4 text-base font-semibold">{c.title}</h3>

              {/* Placeholder "video" */}
              <div className="mt-4 h-40 rounded-2xl bg-black/40" />

              <button className="mm-accent-bg mt-5 w-full rounded-full px-4 py-2 text-sm font-medium text-black">
                Request a demo like this
              </button>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-gray-400">
          Tip: later we’ll replace these placeholders with real MP4 previews (hosted on your CDN).
        </p>
      </div>
    </section>
  );
}
