export default function CallToActionSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 p-8 sm:p-12 text-white ring-1 ring-inset ring-white/10">
          <div className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-white/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 -right-10 h-44 w-44 rounded-full bg-white/15 blur-3xl" />

          <div className="relative grid gap-6 md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Ready to get covered?</h3>
              <p className="mt-2 text-white/90">Compare plans, get instant quotes, and issue your policy with transparent pricing and quick support.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 md:justify-end">
              <a href="#services" className="relative overflow-hidden rounded-xl bg-white text-sky-700 font-semibold px-6 py-3 shadow-md transition hover:shadow-lg hover:-translate-y-0.5">
                <span className="relative z-10">Get Insured</span>
                <span className="pointer-events-none absolute inset-y-0 left-[-30%] w-1/3 bg-white/40 blur-md transform -skew-x-12 transition-transform duration-500 ease-out hover:translate-x-[260%]" />
              </a>
              <a href="#contact" className="rounded-xl border-2 border-white/60 text-white font-semibold px-6 py-3 shadow-sm transition hover:bg-white/10 hover:-translate-y-0.5">
                Talk to Expert
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
