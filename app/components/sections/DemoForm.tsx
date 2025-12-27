export function DemoForm() {
  return (
    <section id="demo" className="mm-primary-bg mm-primary-text border-t border-white/10 px-4 py-16 md:px-10">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-xl font-semibold md:text-2xl">Request a demo video</h2>
        <p className="mt-2 text-sm text-gray-300">
          Drop a link to a listing, product, or brand page. We’ll send back a sample video style.
        </p>

        <form
          className="mt-6 grid gap-3 rounded-3xl border border-white/10 bg-black/20 p-5"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Demo request captured (next step: wire to email/DB).");
          }}
        >
          <input
            className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none"
            placeholder="Your email"
            type="email"
            required
          />
          <input
            className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none"
            placeholder="Link (listing, Airbnb, product, or website)"
            type="url"
            required
          />
          <textarea
            className="min-h-[90px] w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none"
            placeholder="Anything to highlight? (e.g., 'focus on kitchen + backyard')"
          />
          <button className="mm-accent-bg mt-2 rounded-full px-5 py-3 text-sm font-medium text-black">
            Request Demo
          </button>

          <p className="text-xs text-gray-400">
            Next step: store submissions in Supabase + auto-reply email.
          </p>
        </form>
      </div>
    </section>
  );
}
