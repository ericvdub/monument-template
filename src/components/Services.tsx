import { Heart, Hammer, Palette, Clock } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import IconWrapper from './ui/IconWrapper';

const services = [
  {
    icon: Heart,
    title: 'Memorial Monuments',
    description: 'Custom-designed monuments in granite, marble, and bronze to honor your loved ones with dignity and grace.',
  },
  {
    icon: Hammer,
    title: 'Custom Engraving',
    description: 'Expert stone engraving services including names, dates, epitaphs, religious symbols, and custom artwork.',
  },
  {
    icon: Palette,
    title: 'Personalized Design',
    description: 'Work with our designers to create a unique memorial that reflects your loved one\'s personality and legacy.',
  },
  {
    icon: Clock,
    title: 'Restoration Services',
    description: 'Professional cleaning, repair, and restoration of existing monuments to preserve family memories.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 font-serif">Our Services</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We provide comprehensive memorial services with compassion, craftsmanship, and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            return (
              <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <IconWrapper icon={service.icon} />
                  <h3 className="text-xl mb-3">{service.title}</h3>
                  <p className="text-slate-600">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}