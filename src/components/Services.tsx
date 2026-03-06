import { Heart, Hammer, Palette } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import IconWrapper from './ui/IconWrapper';

const services = [
  {
    icon: Heart,
    title: 'Headstones & Memorials',
    description:
      'Custom-designed granite headstones with inscription planning, cemetery rule checks, and professional installation.',
    href: '/services/headstones-memorials',
    cta: 'Explore Headstones',
  },
  {
    icon: Hammer,
    title: 'Cemeteries We Service',
    description:
      'Local cemetery monument support for sizing, section requirements, foundations, lettering, and setting.',
    href: '/services/cemetery-coverage',
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
              <a key={index} href={service.href} className="group block h-full">
                <Card className="h-full border-slate-200 hover:shadow-lg transition-shadow">
                  <CardContent className="h-full pt-6 flex flex-col">
                    <IconWrapper icon={service.icon} />
                    <h3 className="text-xl mb-3">{service.title}</h3>
                    <p className="text-slate-600 flex-1">{service.description}</p>
                    <span
                      className="inline-flex items-center gap-2 mt-4 text-sm font-semibold"
                      style={{ color: 'var(--brand-primary)' }}
                    >
                      <span>{service.cta}</span>
                      <span className="inline-block translate-x-0 group-hover:translate-x-1.5 transition-transform duration-200">
                        &rarr;
                      </span>
                    </span>
                  </CardContent>
                </Card>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
