import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Srikanth's strategic approach to brand development completely transformed our marketing operations. His ability to bridge creativity with business outcomes is exceptional.",
    name: "Sai Chaitanya Kokku",
    title: "Director, Draper Startup House Hyderabad",
  },
  {
    quote: "Working with Srikanth gave us clarity on our brand positioning and helped us build systems that scaled our marketing output significantly.",
    name: "Sheetal Patil",
    title: "CEO, Cream Stone Ice Cream Concepts",
  },
  {
    quote: "Srikanth brings a rare combination of strategic thinking and hands-on execution. His insights on growth marketing were invaluable to our team.",
    name: "Gautam Jha",
    title: "Event Host & Startup Ecosystem Builder",
  },
];

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-card">
      <div ref={ref} className="section-container">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-10">What People Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`bg-background rounded-2xl p-5 md:p-6 card-elevated transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Quote className="w-6 h-6 text-accent/40 mb-3" />
              <p className="text-xs text-muted-foreground leading-relaxed mb-4 italic">"{t.quote}"</p>
              <p className="font-semibold text-xs text-foreground">{t.name}</p>
              <p className="text-[11px] text-muted-foreground">{t.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
