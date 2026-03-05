import { Heart, Hammer, Palette } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import IconWrapper from './ui/IconWrapper';

const services = [
  {
    icon: Heart,
    title: 'Headstones Near Me',
    description:
      'Custom-designed granite headstones with inscription planning, cemetery rule checks, and professional installation.',
    href: '/services/headstones-near-me',
    cta: 'Explore Headstones',
  },
  {
    icon: Hammer,
    title: 'Cemeteries Near Me',
    description:
      'Local cemetery monument support for sizing, section requirements, foundations, lettering, and setting.',
    href: '/services/cemeteries-near-me',
    cta: 'View Cemetery Coverage',
  },
  {
    icon: Palette,
    title: 'Personalized Design',
    description:
      'Use our online design tool to create a memorial that reflects your loved one\'s life and legacy.',
    href: 'https://lastingmemori.com/designer/ivey-monuments',
    cta: 'Start Designing Online',
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => {
            return (
              <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <IconWrapper icon={service.icon} />
                  <h3 className="text-xl mb-3">{service.title}</h3>
                  <p className="text-slate-600">{service.description}</p>
                  <a
                    href={service.href}
                    className="inline-flex mt-4 text-sm font-semibold"
                    style={{ color: 'var(--brand-primary)' }}
                  >
                    {service.cta}
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
