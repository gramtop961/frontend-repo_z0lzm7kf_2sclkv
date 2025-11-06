import { CheckCircle2 } from "lucide-react";

const projects = [
  {
    title: "Warehouse Strip Out",
    location: "Birmingham",
    scope: ["Soft strip of offices", "MEP removal", "Concrete breakout"],
    img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Retail Unit Demolition",
    location: "Manchester",
    scope: ["Facade removal", "Shop fit-out clearance", "Waste recycling 85%"],
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Residential Clearance",
    location: "Leeds",
    scope: ["Internal strip", "Kitchen & bathroom removal", "Skip supply"],
    img: "https://images.unsplash.com/photo-1523419409543-a5e549c1a9b8?q=80&w=1400&auto=format&fit=crop",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">Recent Work</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            A snapshot of projects delivered safely and efficiently for clients across the UK.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div key={p.title} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="aspect-[16/10] w-full">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <div className="text-xs uppercase tracking-wider text-cyan-600">{p.location}</div>
                <h3 className="mt-1 text-lg font-medium text-slate-900">{p.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {p.scope.map((s) => (
                    <li key={s} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
