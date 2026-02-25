import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent } from './ui/card';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 font-serif">Get In Touch</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We're here to help you create a lasting memorial. Contact us for a free consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card className="mb-8">
              <CardContent className="pt-6">
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm mb-2">
                        First Name
                      </label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm mb-2">
                        Last Name
                      </label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm mb-2">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm mb-2">
                      Phone
                    </label>
                    <Input id="phone" type="tel" placeholder="(815) 244-3034" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your needs..."
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full text-black bg-primary" >
                    Submit Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg mb-1">Phone</h3>
                <p className="text-slate-600">(815) 244-3034</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg mb-1">Email</h3>
                <p className="text-slate-600">info@iveymonuments.com</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg mb-1">Location</h3>
                <p className="text-slate-600">204 W Market St,</p>
                <p className="text-slate-600">Mt Carroll, IL 61053</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg mb-1">Hours</h3>
                <p className="text-slate-600">Monday - Friday: 10:00 AM - 2:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
