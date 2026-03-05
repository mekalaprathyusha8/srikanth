import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useState } from "react";
import { Mail, MapPin, Phone, ArrowRight, Send } from "lucide-react";

const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <section id="contact" className="section-padding bg-card">
      <div ref={ref} className={`section-container transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-3">Let's Work Together</h2>
        <p className="text-sm text-muted-foreground text-center max-w-lg mx-auto mb-10">
          Open to collaborations, consulting opportunities, and strategic partnerships.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact info */}
          <div className="space-y-5">
            {[
              { icon: Mail, label: "Email", value: "hi@srikanthraheja.com", href: "mailto:hi@srikanthraheja.com" },
              { icon: Phone, label: "Phone", value: "+91 93814 01197", href: "tel:+919381401197" },
              { icon: MapPin, label: "Location", value: "Hyderabad, India", href: undefined },
            ].map((c, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
                  <c.icon className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{c.label}</p>
                  {c.href ? (
                    <a href={c.href} className="text-sm font-medium text-foreground hover:text-accent transition-colors">{c.value}</a>
                  ) : (
                    <p className="text-sm font-medium">{c.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social placeholder
            <div className="flex gap-3 pt-2">
              {["LinkedIn", "Twitter",].map((s) => (
                <span key={s} className="w-9 h-9 rounded-full bg-background flex items-center justify-center text-xs text-muted-foreground card-elevated cursor-pointer">
                  {s[0]}
                </span>
              ))}
            </div> */}
          </div>

          {/* Form */}
          <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text" placeholder="Your Name" value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
            />
            <input
              type="email" placeholder="Your Email" value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
            />
            <textarea
              placeholder="Your Message" rows={4} value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
            />
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
              Send Message <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
