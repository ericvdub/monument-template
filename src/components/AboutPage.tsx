import { useState, useEffect, useCallback } from 'react';
import { Heart, Shield, Gem, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import IconWrapper from './ui/IconWrapper';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { siteConfig } from '../config/site';

import teamPhoto from '../assets/about/team-photo.jpg';
import originalStorefront from '../assets/about/original-storefront.webp';
import storeThen from '../assets/about/store-then.webp';
import founderPortrait from '../assets/about/founder-portrait.webp';
import storeNow from '../assets/about/store-now.jpg';
import storeSide from '../assets/about/store-side.webp';

const photoSrcs = [originalStorefront.src, storeThen.src, founderPortrait.src, storeNow.src, storeSide.src];
const photos = siteConfig.aboutPage.photos.map((p, i) => ({ ...p, src: photoSrcs[i] }));

const values = [
  {
    icon: Gem,
    title: 'Quality Craftsmanship',
    description:
      'Every monument is crafted using premium granite and time-honored techniques, ensuring a lasting tribute built to endure generations.',
  },
  {
    icon: Heart,
    title: 'Compassionate Service',
    description:
      'We treat every family with patience and care. Our team guides you through each step during what can be a difficult time.',
  },
  {
    icon: Shield,
    title: 'Lasting Legacy',
    description:
      'Memorials are more than stone — they are a lasting legacy. Our 100% satisfaction guarantee ensures your loved one is honored as they deserve.',
  },
];

const timeline = siteConfig.aboutPage.timeline;

export function AboutPage() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close = useCallback(() => setLightbox(null), []);
  const prev = useCallback(() => setLightbox(i => (i !== null ? (i - 1 + photos.length) % photos.length : null)), []);
  const next = useCallback(() => setLightbox(i => (i !== null ? (i + 1) % photos.length : null)), []);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox, close, prev, next]);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Page Hero */}
      <section
        className="relative pt-32 pb-20 px-6 text-white"
        style={{ background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-amber-400 uppercase tracking-widest text-sm mb-4">{siteConfig.aboutPage.heroSubtitle}</p>
          <h1 className="text-5xl font-serif mb-6">Our Story</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            {siteConfig.aboutPage.heroDescription}
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6 font-serif">{siteConfig.aboutPage.storyHeading}</h2>
              <div className="space-y-4 text-slate-700">
                <p>{siteConfig.aboutPage.storyParagraphs[0]}</p>
                <p>{siteConfig.aboutPage.storyParagraphs[1]}</p>
                <p>{siteConfig.aboutPage.storyParagraphs[2]}</p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src={teamPhoto.src}
                alt={`The ${siteConfig.company.name} team`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

	  {/* Values */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 font-serif">Our Values</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {siteConfig.aboutPage.valuesDescription}
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

      {/* Timeline */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 font-serif">Our History</h2>
          </div>
          <div className="space-y-4">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div
                  className="shrink-0 w-24 text-right font-semibold text-sm pt-1"
                  style={{ color: 'var(--brand-primary)' }}
                >
                  {item.year}
                </div>
                <div className="shrink-0 flex flex-col items-center">
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
       {/* Photo Gallery */}
        <div className="py-8 max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl mb-2 font-serif">Through the Years</h2>
            <p className="text-slate-500 text-sm">Click any photo to enlarge</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {photos.map((photo, index) => (
              <button
                key={index}
                onClick={() => setLightbox(index)}
                className="group relative rounded-lg overflow-hidden shadow-sm aspect-[4/3] focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <img
                  src={photo.src as unknown as string}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-200 flex items-end">
                  <div className="w-full p-2 translate-y-full group-hover:translate-y-0 transition-transform duration-200">
                    <p className="text-white text-xs font-medium leading-snug drop-shadow">{photo.caption}</p>
                    <p className="text-amber-300 text-xs">{photo.year}</p>
                  </div>
                </div>
              </button>
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
          <h3 className="text-3xl font-serif mb-4 text-slate-900">Ready to Get Started?</h3>
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

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={close}
        >
          {/* Close */}
          <button
            onClick={close}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X size={32} />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 text-white/70 hover:text-white transition-colors p-2"
            aria-label="Previous"
          >
            <ChevronLeft size={40} />
          </button>

          {/* Image */}
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={photos[lightbox].src as unknown as string}
              alt={photos[lightbox].alt}
              className="w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="text-center mt-4">
              <p className="text-white font-medium">{photos[lightbox].caption}</p>
              <p className="text-amber-400 text-sm">{photos[lightbox].year}</p>
            </div>
            <p className="text-center text-white/40 text-xs mt-2">{lightbox + 1} / {photos.length}</p>
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 text-white/70 hover:text-white transition-colors p-2"
            aria-label="Next"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </div>
  );
}
