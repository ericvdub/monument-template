import { Quote } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { siteConfig } from '../config/site';

const testimonials = siteConfig.testimonials.items;

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 font-serif">
            {siteConfig.testimonials.heading}
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {siteConfig.testimonials.subheading}
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