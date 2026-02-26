import { Award, Users, MapPin, Clock, Heart, Shield, Gem } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import IconWrapper from './ui/IconWrapper';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

const stats = [
  { icon: Clock, number: '145+', label: 'Years in Business' },
  { icon: Users, number: '5,000+', label: 'Families Served' },
  { icon: Award, number: '100%', label: 'Quality Guarantee' },
  { icon: MapPin, number: '1', label: 'Illinois Location' },
];

const values = [
  {
    icon: Gem,
    title: 'Quality Craftsmanship',
    description:
      'Every monument is crafted using premium granite and time-honored techniques, ensuring a lasting tribute built to endure generations.',
  },
  {
    icon: Heart,
    title: 'Family Service',
    description:
      'We are a family-owned business and we treat every client like family. Our compassionate team guides you through each step with patience and care.',
  },
  {
    icon: Shield,
    title: 'Lasting Legacy',
    description:
      'We believe memorials are more than stone — they are a lasting legacy. Our 100% satisfaction guarantee ensures your loved one is honored as they deserve.',
  },
];

const timeline = [
  {
    year: '1875',
    event: 'Ivey Monuments is founded in Mt Carroll, Illinois, serving the families of Carroll County.',
  },
  {
    year: 'Early 1900s',
    event: 'The business expands its granite sourcing and introduces custom engraving services.',
  },
  {
    year: 'Mid-Century',
    event: 'A second generation of the Ivey family takes the helm, continuing the tradition of personal, compassionate service.',
  },
  {
    year: 'Today',
    event: 'Still family-owned and operating from Mt Carroll, IL — serving northwest Illinois families with the same dedication as always.',
  },
];

export function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Page Hero */}
      <section
        className="relative pt-32 pb-20 px-6 text-white"
        style={{ background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-amber-400 uppercase tracking-widest text-sm mb-4">Family-Owned Since 1875</p>
          <h1 className="text-5xl font-serif mb-6">Our Story</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            For over 145 years, Ivey Monuments has honored the lives of those we've lost — with granite, with care, and with the dedication of a true Illinois family business.
          </p>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6 font-serif">Illinois Heritage</h2>
              <div className="space-y-4 text-slate-700">
                <p>
                  Ivey Monuments was established in 1875 in Mt Carroll, Illinois — a small town in Carroll County with deep roots and strong community ties. From the very beginning, our mission has been simple: create beautiful, lasting memorials that honor the people who matter most.
                </p>
                <p>
                  As a family-owned business spanning multiple generations, we have served thousands of Illinois families during some of their most difficult moments. We understand the weight of that responsibility and approach every order with humility, compassion, and craftsmanship.
                </p>
                <p>
                  Today, we continue to operate from our Mt Carroll location — offering premium granite monuments, custom engraving, flat markers, benches, and restoration services to families throughout northwest Illinois.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div
                    className="flex-shrink-0 w-24 text-right font-semibold text-sm pt-1"
                    style={{ color: 'var(--brand-primary)' }}
                  >
                    {item.year}
                  </div>
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div
                      className="w-3 h-3 rounded-full mt-1"
                      style={{ backgroundColor: 'var(--brand-primary)' }}
                    />
                    {index < timeline.length - 1 && (
                      <div className="w-px flex-1 bg-slate-200 my-1" />
                    )}
                  </div>
                  <div className="flex-1 pb-4">
                    <p className="text-slate-700">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg text-center shadow-sm">
                <IconWrapper icon={stat.icon} />
                <div className="text-3xl font-semibold mb-1 text-slate-900">{stat.number}</div>
                <div className="text-slate-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 font-serif">Our Values</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              The principles that have guided Ivey Monuments for over a century.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-slate-200">
                <CardContent className="pt-6">
                  <IconWrapper icon={value.icon} />
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 px-6 text-center"
        style={{ background: 'linear-gradient(135deg, var(--brand-gradient-from), var(--brand-gradient-to))' }}
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-serif mb-4 text-slate-900">Ready to Get Started?</h2>
          <p className="text-slate-700 mb-8">
            Contact us today for a free consultation. We're here to help you create a lasting memorial.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-white rounded-lg text-lg transition-opacity hover:opacity-90"
            style={{ backgroundColor: 'var(--brand-primary)' }}
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
