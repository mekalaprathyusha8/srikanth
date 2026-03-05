import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const timeline = [
  {
    title: "Founder & CEO",
    org: "Bee Echoo",
    period: "2019 – Present",
    desc: "Leading a creative and marketing solutions company helping organizations scale marketing operations through integrated production systems, brand strategy, and content development.",
  },
  {
    title: "Founder & CEO",
    org: "ARA Incorp",
    period: "2016 – Present",
    desc: "Built and managed business operations focused on brand consulting and strategic growth initiatives.",
  },
  {
    title: "Manager",
    org: "Yash Agencies",
    period: "2014 – 2016",
    desc: "Managed operations and business processes while gaining early leadership and business management experience.",
  },
];

const JourneySection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="journey" className="section-padding bg-card">
      <div ref={ref} className="section-container">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-10">Professional Journey</h2>

        <div className="relative max-w-2xl mx-auto">
          {/* Line */}
          <div className="absolute left-3 md:left-4 top-0 bottom-0 w-px bg-border" />

          {timeline.map((item, i) => (
            <div
              key={i}
              className={`relative pl-10 md:pl-12 pb-10 last:pb-0 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Dot */}
              <div className="absolute left-1.5 md:left-2.5 top-1.5 w-3 h-3 rounded-full bg-accent border-2 border-background" />

              <h3 className="font-semibold text-sm">{item.title}</h3>
              <p className="text-xs text-accent font-medium">{item.org} | {item.period}</p>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
