import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import srikanthEvent from "@/assets/srikanth-event.png";

const EventHighlight = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding">
      <div ref={ref} className={`section-container transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-8">Event Highlight</h2>

        <div className="bg-card rounded-2xl overflow-hidden card-elevated max-w-3xl mx-auto">
          <img src={srikanthEvent} alt="Srikanth moderating at CIE IIIT Hyderabad" className="w-full h-48 md:h-64 object-cover" />
          <div className="p-5 md:p-8">
            <h3 className="font-display text-lg md:text-xl font-semibold mb-3">Moderating at CIE IIIT Hyderabad</h3>
            <p className="text-xs text-muted-foreground leading-relaxed mb-3">
              Moderated a candid conversation with Sai Chaitanya Kokku and Sheetal Patil about what separates a fast-scaling startup from a steady business.
            </p>
            <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
              <li>Startups are experiments; Businesses are repeatable systems.</li>
              <li>Hire generalists early, specialists after product-market fit.</li>
              <li>Fundraising is a tool, not a goal.</li>
              <li>Ops and margin architecture matter more than flashy acquisition.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventHighlight;
