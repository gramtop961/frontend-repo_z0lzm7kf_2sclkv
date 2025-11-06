import { Building2, Hammer, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              Fully licensed • Insured • Compliant
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
              Precision Demolition & Expert Strip Outs
            </h1>
            <p className="mt-4 text-white/80 text-lg leading-relaxed">
              We deliver safe, efficient, and compliant demolition, soft strip, and site clearance
              for commercial, industrial, and residential projects. On-time. On-budget.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md bg-cyan-500 px-6 py-3 font-medium text-white shadow hover:bg-cyan-600 transition"
              >
                Get a Free Quote
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-md border border-white/20 px-6 py-3 font-medium text-white/90 hover:bg-white/10 transition"
              >
                Our Services
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 text-sm text-white/70">
              <div className="flex items-center gap-3">
                <Building2 className="h-5 w-5 text-cyan-400" />
                Commercial & Residential
              </div>
              <div className="flex items-center gap-3">
                <Hammer className="h-5 w-5 text-amber-400" />
                Soft Strip Specialists
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-400" />
                Health & Safety First
              </div>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="relative mx-auto max-w-xl rounded-2xl border border-white/10 bg-white/5 p-4 shadow-2xl">
              <div className="aspect-[16/10] w-full overflow-hidden rounded-lg">
                {/* Imagery placeholder - could be swapped with project photos */}
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop"
                  alt="Demolition site"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs text-white/70">
                <div className="rounded-md bg-slate-900/50 px-3 py-2">Asbestos-Aware</div>
                <div className="rounded-md bg-slate-900/50 px-3 py-2">Waste Transfer Notes</div>
                <div className="rounded-md bg-slate-900/50 px-3 py-2">RAMS Provided</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
