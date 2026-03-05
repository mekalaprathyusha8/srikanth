import { ArrowRight } from "lucide-react";

const NAV_LINKS = ["Home", "About", "Services", "Journey", "Insights", "Contact"];

const Footer = () => (
  <footer className="py-8 md:py-10 border-t border-border">
    <div className="section-container">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="flex items-baseline gap-1 justify-center md:justify-start">
            <span className="font-display text-lg font-bold">Srikanth</span>
            <span className="font-script text-xl text-accent">Raheja</span>
          </p>
          <p className="text-[11px] text-muted-foreground mt-1">Entrepreneur • Brand Strategist • Marketing Leader</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {NAV_LINKS.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              {l}
            </a>
          ))}
        </div>

        <div className="text-center md:text-right">
          <p className="text-xs text-muted-foreground">hi@srikanthraheja.com</p>
          <p className="text-xs text-muted-foreground">Hyderabad, India</p>
        </div>
      </div>
      <p className="text-[11px] text-muted-foreground text-center mt-6">© 2026 Srikanth Raheja</p>
    </div>
  </footer>
);

export default Footer;
