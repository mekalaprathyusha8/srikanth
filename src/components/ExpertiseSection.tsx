import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const expertise = [
  "Business Development", "Digital Marketing Strategy", "Strategic Brand Consulting",
  "Go-to-Market Strategy", "Marketing Analytics", "Growth Marketing",
];

const ExpertiseSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-card">
      <div ref={ref} className="section-container text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">Core Expertise</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {expertise.map((e, i) => (
            <span
              key={i}
              className={`px-5 py-2.5 rounded-full bg-background text-xs font-medium text-foreground card-elevated transition-all duration-500 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {e}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
