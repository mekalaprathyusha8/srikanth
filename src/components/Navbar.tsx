import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Journey", href: "#journey" },
  { label: "Education", href: "#education" },
  { label: "Insights", href: "#insights" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
      <div className="section-container flex items-center justify-between h-14 md:h-16">
        {/* Logo */}
        <a href="#home" className="flex items-baseline gap-1">
          <span className="font-display text-lg font-semibold text-foreground">Srikanth</span>
          <span className="font-script text-xl text-accent">Raheja</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setActiveLink(l.href)}
              className={`text-[13px] font-medium transition-colors relative pb-0.5 ${activeLink === l.href ? "text-foreground border-b-2 border-accent" : "text-muted-foreground hover:text-foreground"}`}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a href="#contact" className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full bg-primary text-primary-foreground text-[13px] font-medium hover:opacity-90 transition-opacity">
          Let's Connect <ArrowRight className="w-3.5 h-3.5" />
        </a>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 text-foreground" aria-label="Menu">
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-t border-border px-5 pb-5 pt-2">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="block py-3 text-sm font-medium text-muted-foreground">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMobileOpen(false)} className="inline-flex items-center gap-2 mt-3 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium">
            Let's Connect <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
