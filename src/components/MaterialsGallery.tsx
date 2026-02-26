import { Card, CardContent } from './ui/card';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface MaterialCard {
  name: string;
  description: string;
  bgClass: string;
  category: string;
  popular?: boolean;
}

const materials: MaterialCard[] = [
  // Granite
  {
    name: 'Jet Black Granite',
    description: 'A classic, deep black granite with a polished mirror finish. The most popular choice for monuments — provides strong contrast for engraving.',
    bgClass: 'bg-slate-900',
    category: 'Granite',
    popular: true,
  },
  {
    name: 'Dark Gray Granite',
    description: 'A rich charcoal-gray with subtle speckling. Elegant and understated — pairs well with traditional or contemporary designs.',
    bgClass: 'bg-slate-600',
    category: 'Granite',
  },
  {
    name: 'Medium Gray Granite',
    description: 'A versatile mid-tone gray with fine texture. A timeless option that suits any style of memorial.',
    bgClass: 'bg-slate-400',
    category: 'Granite',
  },
  {
    name: 'Pink/Rose Granite',
    description: 'A warm rose-pink granite with light speckling. A popular choice for a softer, more personal tribute.',
    bgClass: 'bg-rose-300',
    category: 'Granite',
  },
  {
    name: 'Blue Pearl Granite',
    description: 'Imported Norwegian granite with deep blue iridescence and silvery crystals. Distinctive and striking.',
    bgClass: 'bg-blue-800',
    category: 'Granite',
  },
  {
    name: 'Imperial Red Granite',
    description: 'A bold red granite with black and gray flecks. Makes a powerful statement for a one-of-a-kind memorial.',
    bgClass: 'bg-red-800',
    category: 'Granite',
  },
  // Marble
  {
    name: 'White Marble',
    description: 'Classic white marble with natural veining. Traditional and timeless — a symbol of purity and remembrance.',
    bgClass: 'bg-stone-100 border border-stone-300',
    category: 'Marble',
  },
  {
    name: 'Gray Marble',
    description: 'A softer, muted gray marble with delicate patterning. Elegant and refined.',
    bgClass: 'bg-stone-300',
    category: 'Marble',
  },
  // Bronze
  {
    name: 'Antique Bronze',
    description: 'Cast bronze plaques offer a traditional look with exceptional durability. Bronze naturally develops a beautiful patina over time.',
    bgClass: 'bg-amber-800',
    category: 'Bronze',
  },
];

const categories = ['Granite', 'Marble', 'Bronze'];

export function MaterialsGallery() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Page Hero */}
      <section
        className="relative pt-32 pb-20 px-6 text-white"
        style={{ background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-amber-400 uppercase tracking-widest text-sm mb-4">Premium Stone & Metal</p>
          <h1 className="text-5xl font-serif mb-6">Granite &amp; Material Colors</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            We source only premium granite, marble, and bronze to ensure your monument stands strong for generations to come.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-serif mb-4">Choosing Your Material</h2>
          <p className="text-slate-600 text-lg">
            The material you choose shapes the look and feel of your monument for decades. Our team will help you select the right option based on your cemetery's requirements, your budget, and your vision. Below is an overview of the materials we carry.
          </p>
        </div>
      </section>

      {/* Material Categories */}
      {categories.map((category) => (
        <section key={category} className="py-16 px-6 odd:bg-slate-50 even:bg-white">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-serif mb-8 text-slate-900">{category}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {materials
                .filter((m) => m.category === category)
                .map((material, index) => (
                  <Card key={index} className="border-slate-200 overflow-hidden">
                    {/* Color swatch */}
                    <div className={`h-32 w-full ${material.bgClass} relative`}>
                      {material.popular && (
                        <span
                          className="absolute top-3 right-3 text-xs font-semibold px-2 py-1 rounded-full text-white"
                          style={{ backgroundColor: 'var(--brand-primary)' }}
                        >
                          Most Popular
                        </span>
                      )}
                    </div>
                    <CardContent className="pt-4">
                      <h4 className="text-lg font-semibold mb-2">{material.name}</h4>
                      <p className="text-slate-600 text-sm">{material.description}</p>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </section>
      ))}

      {/* Note */}
      <section className="py-12 px-6 bg-slate-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-slate-600 text-sm">
            * Color swatches shown are for reference only. Actual granite appearance varies by slab and lighting. We recommend viewing physical samples at our Mt Carroll showroom before finalizing your selection.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 px-6 text-center"
        style={{ background: 'linear-gradient(135deg, var(--brand-gradient-from), var(--brand-gradient-to))' }}
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-serif mb-4 text-slate-900">Visit Our Showroom</h2>
          <p className="text-slate-700 mb-8">
            See and touch our granite samples in person at our Mt Carroll location. Our team will walk you through every option.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-white rounded-lg text-lg transition-opacity hover:opacity-90"
            style={{ backgroundColor: 'var(--brand-primary)' }}
          >
            Schedule a Visit
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
