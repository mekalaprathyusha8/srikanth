import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Award, Target, Megaphone, Handshake } from "lucide-react";

const stats = [
  { icon: Award, number: "8+", label: "Years in Marketing & Business Strategy" },
  { icon: Target, number: "30+", label: "Brand Strategy Projects" },
  { icon: Megaphone, number: "100+", label: "Marketing Campaigns Managed" },
  { icon: Handshake, number: "15+", label: "Strategic Partnerships" },
];

const AchievementsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-card">
      <div ref={ref} className="section-container text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-10">Impact & Achievements</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`bg-background rounded-2xl p-5 md:p-6 card-elevated text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <s.icon className="w-7 h-7 text-accent mx-auto mb-3" />
              <div className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1">{s.number}</div>
              <p className="text-xs text-muted-foreground leading-tight">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
