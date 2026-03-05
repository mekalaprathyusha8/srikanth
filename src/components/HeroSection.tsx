import srikanthPortrait from "@/assets/srikanth-portrait.png";
import { ArrowRight, Mail, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative gradient-bg min-h-screen pt-14 md:pt-16 overflow-hidden">
      <div className="section-container relative z-10 flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-8 items-center py-8 md:py-16 lg:py-20">
        {/* Text Content */}
        <div className="order-2 lg:order-1 animate-in">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-4 animate-in animate-in-delay-1">
            Srikanth Raheja
          </h1>

          <p className="font-display text-lg md:text-xl mb-4 animate-in animate-in-delay-2">
            Entrepreneur | <span className="text-accent-brand">Brand Strategist</span> | <span className="text-accent-brand">Marketing</span> Leader
          </p>

          <p className="text-sm md:text-base font-semibold text-foreground mb-3 animate-in animate-in-delay-2">
            Founder & CEO building scalable brands through<br className="hidden md:block" />
            <strong>Strategy, Creative Operations & Data-Driven Marketing.</strong>
          </p>

          <p className="text-sm text-muted-foreground leading-relaxed max-w-lg mb-6 animate-in animate-in-delay-3">
            Srikanth Raheja is an entrepreneur and marketing strategist specializing in brand growth, digital marketing, and scalable creative operations. As the Founder & CEO of Bee Echoo, he helps businesses build powerful brands, optimize content production, and achieve measurable market impact through integrated marketing strategies.
          </p>

          <div className="flex flex-wrap gap-3 animate-in animate-in-delay-4">
            <a href="#services" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
              View My Work <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-foreground text-foreground text-sm font-semibold hover:bg-foreground hover:text-background transition-colors">
              Book a Meeting
            </a>
          </div>
        </div>

        {/* Portrait */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-in animate-in-delay-2">
          <img
            src={srikanthPortrait}
            alt="Srikanth Raheja"
            className="w-56 md:w-72 lg:w-[22rem] rounded-2xl object-cover fade-mask-bottom"
          />
        </div>
      </div>

      {/* Bottom info bar */}
      <div className="section-container relative z-10 pb-6 md:pb-10 animate-in animate-in-delay-4">
        <div className="info-bar px-5 py-4 md:px-8 md:py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
            <h3 className="font-display text-base font-semibold">Professional Journey</h3>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> hi@srikanthraheja.com</span>
              <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> Hyderabad, India</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <h3 className="font-display text-base font-semibold">Let's Work Together</h3>
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent text-accent-foreground text-xs font-semibold hover:opacity-90 transition-opacity">
              Get In Touch <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
