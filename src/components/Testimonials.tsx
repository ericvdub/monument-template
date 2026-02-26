import { Quote } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Mt Carroll, IL",
    text: "The team at Ivey Monuments helped us create a beautiful memorial for my father. They were patient, understanding, and the craftsmanship is exceptional. We couldn't be more grateful.",
  },
  {
    name: "Michael and Linda Chen",
    location: "Savanna, IL",
    text: "From design to installation, everything was handled with professionalism and care. The monument is exactly what we envisioned. Thank you for honoring our mother's memory so beautifully.",
  },
  {
    name: "Robert Martinez",
    location: "Morrison, IL",
    text: "I highly recommend Ivey Monuments. They restored my grandparents' headstone and it looks brand new. Their attention to detail and respect for family history is outstanding.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 font-serif">
            What Families Say
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We're honored to serve Illinois families during their
            time of need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-slate-200">
              <CardContent className="pt-6">
                <Quote className="w-8 h-8 mb-4" style={{ color: 'var(--brand-primary)' }} />
                <p className="text-slate-700 mb-6 italic">
                  {testimonial.text}
                </p>
                <div>
                  <p className="font-semibold">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-slate-500">
                    {testimonial.location}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}