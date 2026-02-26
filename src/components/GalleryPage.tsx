import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Dialog, DialogContent, DialogTitle } from './ui/dialog';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

import img1 from '../assets/10d6e180eecb5772e12484e591fcf4b4b458aef7.png';
import img2 from '../assets/be85dba127a447719c677807155d9961592a80a2.png';
import img3 from '../assets/5e5790795bd94f541578ef04f306f3a8de14781a.png';
import img4 from '../assets/17f6f6cd72d9e5314f41f3414f853c0926a86dc9.png';
import img5 from '../assets/682005e07dc994de99f24b67685a79266343168b.png';
import img6 from '../assets/d250bd85a89088fee3c888baccdceb96874946c0.png';

interface GalleryItem {
  src: string;
  alt: string;
  category: string;
}

const allImages: GalleryItem[] = [
  { src: img1.src, alt: 'Smith family memorial with autumn decorations', category: 'Upright Monuments' },
  { src: img2.src, alt: 'Lego family memorial with custom truck engravings', category: 'Custom Designs' },
  { src: img3.src, alt: 'Petersons family memorial with animal silhouettes', category: 'Upright Monuments' },
  { src: img4.src, alt: 'Bork family memorial with heart and floral design', category: 'Flat Markers' },
  { src: img5.src, alt: 'Schneider family memorial with wheat engraving', category: 'Custom Designs' },
  { src: img6.src, alt: 'Vick family memorial with personalized seasoning theme', category: 'Custom Designs' },
];

const categories = ['All', 'Upright Monuments', 'Flat Markers', 'Benches', 'Custom Designs', 'Restoration'];

// Placeholder items for categories with no real images yet
const placeholderItems: GalleryItem[] = [
  { src: '', alt: 'Granite bench memorial', category: 'Benches' },
  { src: '', alt: 'Cemetery bench with inscription', category: 'Benches' },
  { src: '', alt: 'Restored headstone', category: 'Restoration' },
  { src: '', alt: 'Monument restoration project', category: 'Restoration' },
];

const combinedImages = [...allImages, ...placeholderItems];

function PlaceholderImage({ alt }: { alt: string }) {
  return (
    <div className="w-full h-full bg-slate-200 flex flex-col items-center justify-center gap-2">
      <div className="w-12 h-12 rounded-full bg-slate-300 flex items-center justify-center">
        <ZoomIn className="w-5 h-5 text-slate-400" />
      </div>
      <p className="text-slate-400 text-xs text-center px-2">{alt}</p>
      <p className="text-slate-300 text-xs">Photo coming soon</p>
    </div>
  );
}

interface GalleryGridProps {
  items: GalleryItem[];
  onSelect: (item: GalleryItem) => void;
}

function GalleryGrid({ items, onSelect }: GalleryGridProps) {
  if (items.length === 0) {
    return (
      <div className="text-center py-16 text-slate-500">
        <p className="text-lg">No items in this category yet.</p>
        <p className="text-sm mt-2">Check back soon or <a href="/contact" className="underline" style={{ color: 'var(--brand-primary)' }}>contact us</a> to see our full portfolio.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {items.map((item, index) => (
        <button
          key={index}
          className="group relative aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow focus:outline-none focus-visible:ring-2"
          style={{ '--tw-ring-color': 'var(--brand-primary)' } as React.CSSProperties}
          onClick={() => onSelect(item)}
          aria-label={`View: ${item.alt}`}
        >
          {item.src ? (
            <>
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </>
          ) : (
            <PlaceholderImage alt={item.alt} />
          )}
        </button>
      ))}
    </div>
  );
}

export function GalleryPage() {
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  const getFiltered = (category: string) =>
    category === 'All'
      ? combinedImages
      : combinedImages.filter((img) => img.category === category);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Page Hero */}
      <section
        className="relative pt-32 pb-20 px-6 text-white"
        style={{ background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-amber-400 uppercase tracking-widest text-sm mb-4">Our Work</p>
          <h1 className="text-5xl font-serif mb-6">Monument Gallery</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Browse examples of the monuments and memorials we've crafted for families throughout Carroll County and northwest Illinois.
          </p>
        </div>
      </section>

      {/* Gallery with Tabs */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="All">
            <div className="overflow-x-auto pb-2 mb-8">
              <TabsList className="flex w-max gap-1">
                {categories.map((cat) => (
                  <TabsTrigger key={cat} value={cat} className="whitespace-nowrap">
                    {cat}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((cat) => (
              <TabsContent key={cat} value={cat}>
                <GalleryGrid items={getFiltered(cat)} onSelect={setSelected} />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-3xl p-2 bg-slate-900 border-slate-700">
          <DialogTitle className="sr-only">{selected?.alt}</DialogTitle>
          <button
            className="absolute top-3 right-3 text-white/70 hover:text-white z-10"
            onClick={() => setSelected(null)}
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
          {selected && (
            <div>
              {selected.src ? (
                <img
                  src={selected.src}
                  alt={selected.alt}
                  className="w-full max-h-[80vh] object-contain rounded-lg"
                />
              ) : (
                <div className="w-full h-64 flex items-center justify-center bg-slate-800 rounded-lg">
                  <PlaceholderImage alt={selected.alt} />
                </div>
              )}
              <p className="text-slate-300 text-sm mt-3 px-2">{selected.alt}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* CTA */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-serif mb-4 text-slate-900">Like What You See?</h2>
        <p className="text-slate-600 mb-8 max-w-xl mx-auto">
          Every monument is custom — contact us to discuss your vision and get a free consultation.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 text-white rounded-lg text-lg transition-opacity hover:opacity-90"
          style={{ backgroundColor: 'var(--brand-primary)' }}
        >
          Request a Consultation
        </a>
      </section>

      <Footer />
    </div>
  );
}
