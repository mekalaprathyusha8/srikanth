import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import srikanthEvent from "@/assets/srikanth-event.png";

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="section-padding">
      <div ref={ref} className={`section-container transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-5">About Srikanth</h2>
            <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>Srikanth Raheja is a business leader, entrepreneur, and brand strategist with deep expertise in digital marketing, brand development, and business growth strategy. He focuses on helping companies transform their marketing operations and scale their brand presence through data-driven decision making and strategic creative execution.</p>
              <p>As the Founder and CEO of Bee Echoo, Srikanth leads initiatives that combine marketing strategy, content production, and operational systems to help businesses create consistent and scalable brand communication, enabling organizations to strengthen their market positioning and accelerate growth.</p>
              <p>Driven by innovation and strategic thinking, Srikanth continuously explores new technologies and digital tools that improve marketing efficiency and customer engagement.</p>
            </div>
          </div>
          <div>
            <img src={srikanthEvent} alt="Srikanth Raheja at an event" className="w-full rounded-2xl object-cover shadow-md" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
