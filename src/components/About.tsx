import { Award, Users, MapPin, Clock } from 'lucide-react';

const stats = [
  {
    icon: Clock,
    number: '45+',
    label: 'Years in Business',
  },
  {
    icon: Users,
    number: '5,000+',
    label: 'Families Served',
  },
  {
    icon: Award,
    number: '100%',
    label: 'Quality Guarantee',
  },
  {
    icon: MapPin,
    number: '3',
    label: 'Iowa Locations',
  },
];

export function About() {
  return (
    <section id="about" className="py-20 px-6 bg-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl mb-6 font-serif">Family-Owned Since 1975</h2>
            <div className="space-y-4 text-slate-700">
              <p>
                Heritage Monuments has been serving Iowa families for over four decades. Founded by John and Mary Thompson, our family business continues to uphold the values of quality craftsmanship, personal service, and compassionate care.
              </p>
              <p>
                We understand that choosing a memorial is a deeply personal decision. Our experienced team works closely with each family to create a lasting tribute that truly honors their loved one's memory and legacy.
              </p>
              <p>
                From traditional granite monuments to custom-designed memorials, we use only the finest materials and time-honored techniques to ensure your monument stands the test of time.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-900 rounded-lg mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
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
