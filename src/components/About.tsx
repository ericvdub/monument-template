import { Award, Users, MapPin, Clock } from 'lucide-react';
import IconWrapper from './ui/IconWrapper';
import { siteConfig } from '../config/site';

const stats = [
  {
    icon: Clock,
    number: siteConfig.company.yearsInBusiness,
    label: 'Years in Business',
  },
  {
    icon: Users,
    number: siteConfig.company.familiesServed,
    label: 'Families Served',
  },
  {
    icon: Award,
    number: siteConfig.company.qualityGuarantee,
    label: 'Quality Guarantee',
  },
  {
    icon: MapPin,
    number: siteConfig.company.locationsCount,
    label: siteConfig.company.locationLabel,
  },
];

export function About() {
  return (
    <section id="about" className="py-20 px-6 bg-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl mb-6 font-serif">{siteConfig.about.heading}</h2>
            <div className="space-y-4 text-slate-700">
              <p>{siteConfig.about.paragraphs[0]}</p>
              <p>{siteConfig.about.paragraphs[1]}</p>
              <p>{siteConfig.about.paragraphs[2]}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              return (
                <div key={index} className="bg-white p-6 rounded-lg text-center">
                  <IconWrapper icon={stat.icon} />
                  <div className="text-3xl mb-2">{stat.number}</div>
                  <div className="text-slate-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
