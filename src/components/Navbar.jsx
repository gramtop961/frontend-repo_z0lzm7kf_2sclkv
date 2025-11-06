import { Menu, Phone } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled ? "backdrop-blur bg-slate-900/70" : "bg-transparent"}`}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between py-4">
          <a href="#" className="flex items-center gap-2 text-white">
            <div className="h-8 w-8 rounded-md bg-cyan-500" />
            <span className="font-semibold">Prime Demolition</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-cyan-600 px-4 py-2 text-white hover:bg-cyan-700 transition">
              <Phone className="h-4 w-4" /> Get a Quote
            </a>
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden text-white">
            <Menu className="h-6 w-6" />
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 text-white/80">
            <a href="#services" className="block py-2">Services</a>
            <a href="#projects" className="block py-2">Projects</a>
            <a href="#contact" className="block py-2">Contact</a>
          </div>
        )}
      </div>
    </header>
  );
}
