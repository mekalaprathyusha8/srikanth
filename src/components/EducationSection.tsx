import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { GraduationCap } from "lucide-react";

const education = [
  { school: "University of London", degree: "Brand Management & Business Administration", period: "2019 – 2020" },
  { school: "University of Maryland", degree: "Digital Marketing & Marketing Management", period: "2017 – 2018" },
  { school: "JNTUH College of Engineering, Hyderabad", degree: "B.Tech — Mechanical Engineering", period: "2012 – 2016" },
];

const EducationSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="education" className="section-padding">
      <div ref={ref} className="section-container">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-10">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {education.map((e, i) => (
            <div
              key={i}
              className={`bg-card rounded-2xl p-5 md:p-6 card-elevated transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <GraduationCap className="w-6 h-6 text-accent mb-3" />
              <h3 className="font-semibold text-sm mb-1">{e.school}</h3>
              <p className="text-xs text-muted-foreground mb-1">{e.degree}</p>
              <p className="text-xs text-accent font-medium">{e.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
