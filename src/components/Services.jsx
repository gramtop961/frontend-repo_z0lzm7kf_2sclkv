import { Wrench, Construction, Recycle, Building } from "lucide-react";

const services = [
  {
    icon: Construction,
    title: "Demolition",
    text: "Controlled structural demolition with full waste management and environmental controls.",
  },
  {
    icon: Wrench,
    title: "Soft Strip",
    text: "Interior strip outs including fixtures, partitions, ceilings, MEP, and floor finishes.",
  },
  {
    icon: Recycle,
    title: "Waste Removal",
    text: "Responsible segregation, recycling, and disposal with documentation provided.",
  },
  {
    icon: Building,
    title: "Site Clearance",
    text: "Rapid clearance for refurbishments and new builds, ready for the next phase.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">Services</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            From selective internal works to full structure removal — we plan and execute with safety at the core.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow transition">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-50 text-cyan-600">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
