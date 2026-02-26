import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent } from './ui/card';
import IconWrapper from './ui/IconWrapper';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    lines: ['(815) 244-3034'],
    href: 'tel:815-244-3034',
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['info@iveymonuments.com'],
    href: 'mailto:info@iveymonuments.com',
  },
  {
    icon: MapPin,
    title: 'Address',
    lines: ['204 W Market St', 'Mt Carroll, IL 61053'],
    href: 'https://maps.google.com/?q=204+W+Market+St+Mt+Carroll+IL+61053',
  },
  {
    icon: Clock,
    title: 'Hours',
    lines: ['Monday – Friday: 10:00 AM – 2:00 PM', 'Or by appointment'],
    href: null,
  },
];

const cemeteries = [
  'Carroll County: Mt Carroll Cemetery, Shannon Cemetery, Milledgeville Cemetery, Lanark Township Cemetery',
  'Whiteside County: Morrison City Cemetery, Tampico Cemetery, Prophetstown Cemetery',
  'Jo Daviess County: Galena Township Cemetery, Elizabeth Township Cemetery',
  'Ogle County: Oregon Cemetery, Rochelle Township Cemetery',
  'Lee County: Dixon Cemetery, Amboy Township Cemetery',
];

export function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Page Hero */}
      <section
        className="relative pt-32 pb-20 px-6 text-white"
        style={{ background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-amber-400 uppercase tracking-widest text-sm mb-4">Mt Carroll, Illinois</p>
          <h1 className="text-5xl font-serif mb-6">Get In Touch</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            We're here to help you create a lasting memorial. Reach out for a free, no-pressure consultation.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-slate-200 text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center">
                    <IconWrapper icon={info.icon} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                  {info.lines.map((line, i) =>
                    info.href && i === 0 ? (
                      <a
                        key={i}
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-slate-600 hover:underline block"
                        style={{ color: 'var(--brand-primary)' }}
                      >
                        {line}
                      </a>
                    ) : (
                      <p key={i} className="text-slate-600 text-sm">{line}</p>
                    )
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-16 px-6 bg-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-serif mb-6">Send Us a Message</h2>
              <Card>
                <CardContent className="pt-6">
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm mb-2">First Name</label>
                        <Input id="firstName" placeholder="John" />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm mb-2">Last Name</label>
                        <Input id="lastName" placeholder="Doe" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm mb-2">Email</label>
                      <Input id="email" type="email" placeholder="john@example.com" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm mb-2">Phone</label>
                      <Input id="phone" type="tel" placeholder="(815) 244-3034" />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm mb-2">Message</label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your needs..."
                        rows={5}
                      />
                    </div>
                    <Button type="submit" className="w-full text-white" style={{ backgroundColor: 'var(--brand-primary)' }}>
                      Submit Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map + Cemeteries */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-serif mb-6">Find Us</h2>
                <div className="rounded-xl overflow-hidden shadow-md">
                  <iframe
                    title="Ivey Monuments Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2975.1234567890!2d-89.974097!3d42.098543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880b1e3b3f0f0f0f%3A0x0!2s204+W+Market+St%2C+Mt+Carroll%2C+IL+61053!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <p className="text-slate-600 mt-3 text-sm">
                  204 W Market St, Mt Carroll, IL 61053
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Cemeteries We Serve</h3>
                <ul className="space-y-2">
                  {cemeteries.map((entry, index) => (
                    <li key={index} className="text-slate-600 text-sm flex gap-2">
                      <span style={{ color: 'var(--brand-primary)' }}>•</span>
                      {entry}
                    </li>
                  ))}
                </ul>
                <p className="text-slate-500 text-sm mt-4">
                  Don't see your area? Call us — we serve families throughout northwest Illinois.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
