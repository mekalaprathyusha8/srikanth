import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import srikanthSpeaking from "@/assets/srikanth-speaking.png";

const ServicesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="services" className="section-padding">
      <div ref={ref} className={`section-container transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">What I Do</h2>
            <h3 className="font-semibold text-base mb-2">Founder & CEO</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Bee Echoo — Brand management solutions company helping organizations scale, transforming operations through production and content systems to create consistent and viable brand communication, bridging the gap between creativity and business outcomes, enabling organizations to strengthen their market positioning and accelerate growth.
            </p>

            <div className="space-y-4">
              {[
                { title: "Business Development", desc: "Identifying growth opportunities, building strategic partnerships, and designing go-to-market strategies." },
                { title: "Digital Marketing", desc: "Data-driven strategies across SEO, content, social media, and paid advertising." },
                { title: "Strategic Brand Consulting", desc: "Aligning brand identity and customer experience with long-term business goals." },
              ].map((s, i) => (
                <div key={i} className="bg-card rounded-xl p-4 card-elevated">
                  <h4 className="font-semibold text-sm mb-1">{s.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img src={srikanthSpeaking} alt="Srikanth speaking" className="w-full rounded-2xl object-cover shadow-md" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
