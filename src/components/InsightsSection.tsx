import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ArrowRight } from "lucide-react";

const insights = [
  { title: "Scaling Startups Through Operational Excellence", tag: "Strategy" },
  { title: "AI in Marketing and Hyper-Personalization", tag: "Technology" },
  { title: "Building Strong Brand Identity", tag: "Branding" },
  { title: "Strategic Leadership in Growing Companies", tag: "Leadership" },
];

const InsightsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="insights" className="section-padding">
      <div ref={ref} className="section-container">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-10">Insights & Thought Leadership</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {insights.map((item, i) => (
            <div
              key={i}
              className={`bg-card rounded-2xl p-5 md:p-6 card-elevated group cursor-pointer transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="text-[10px] font-semibold uppercase tracking-wider text-accent">{item.tag}</span>
              <h3 className="font-display text-base md:text-lg font-semibold mt-2 mb-2 group-hover:text-accent transition-colors">{item.title}</h3>
              <span className="inline-flex items-center gap-1 text-xs text-muted-foreground group-hover:text-accent transition-colors">
                Read more <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
