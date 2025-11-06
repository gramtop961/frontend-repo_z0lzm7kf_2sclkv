import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("Thanks! We'll be in touch shortly.");
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">Request a Quote</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Tell us about your project and our team will respond within one business day.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <form onSubmit={handleSubmit} className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm text-slate-600">Name</label>
                <input required type="text" className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-500" />
              </div>
              <div>
                <label className="text-sm text-slate-600">Email</label>
                <input required type="email" className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-slate-600">Location / Site Address</label>
                <input type="text" className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-slate-600">Project Details</label>
                <textarea rows={5} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-500" />
              </div>
            </div>
            <button type="submit" className="mt-6 w-full rounded-md bg-cyan-600 px-6 py-3 font-medium text-white shadow hover:bg-cyan-700 transition">
              Send Request
            </button>
            {status && <p className="mt-3 text-sm text-emerald-600">{status}</p>}
          </form>

          <div className="space-y-6">
            <div className="rounded-xl border border-slate-200 p-6">
              <h3 className="text-lg font-medium text-slate-900">Contact</h3>
              <ul className="mt-4 space-y-3 text-slate-700">
                <li className="flex items-center gap-3"><Phone className="h-5 w-5 text-cyan-600" /> 01234 567 890</li>
                <li className="flex items-center gap-3"><Mail className="h-5 w-5 text-cyan-600" /> estimates@yourcompany.co.uk</li>
                <li className="flex items-center gap-3"><MapPin className="h-5 w-5 text-cyan-600" /> Serving UK nationwide</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 p-6 bg-gradient-to-br from-cyan-50 to-amber-50">
              <h3 className="text-lg font-medium text-slate-900">Why choose us?</h3>
              <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-1">
                <li>Method statements and risk assessments provided</li>
                <li>Licensed waste carriers with recycling focus</li>
                <li>Respect for neighbours and site rules</li>
                <li>Transparent pricing and schedules</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
