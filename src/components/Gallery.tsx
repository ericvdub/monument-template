import img1 from '../assets/10d6e180eecb5772e12484e591fcf4b4b458aef7.png';
import img2 from '../assets/be85dba127a447719c677807155d9961592a80a2.png';
import img3 from '../assets/5e5790795bd94f541578ef04f306f3a8de14781a.png';
import img4 from '../assets/17f6f6cd72d9e5314f41f3414f853c0926a86dc9.png';
import img5 from '../assets/682005e07dc994de99f24b67685a79266343168b.png';
import img6 from '../assets/d250bd85a89088fee3c888baccdceb96874946c0.png';

const galleryImages = [
  { src: img1.src, alt: 'Smith family memorial with autumn decorations' },
  { src: img2.src, alt: 'Lego family memorial with custom truck engravings' },
  { src: img3.src, alt: 'Petersons family memorial with animal silhouettes' },
  { src: img4.src, alt: 'Bork family memorial with heart and floral design' },
  { src: img5.src, alt: 'Schneider family memorial with wheat engraving' },
  { src: img6.src, alt: 'Vick family memorial with personalized seasoning theme' },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="text-center">
          <h2 className="text-4xl mb-4 font-serif">Our Craftsmanship</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Each monument is carefully crafted to honor and remember loved ones with lasting beauty.
          </p>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 md:w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 md:w-32 bg-gradient-to-l from-white to-transparent z-10" />
        
        {/* Marquee wrapper */}
        <div className="flex">
          <div className="flex gap-6 animate-marquee">
            {/* First set of images */}
            {galleryImages.map((image, index) => (
              <div
                key={`set1-${index}`}
                className="flex-shrink-0 w-[400px] h-[300px] rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {galleryImages.map((image, index) => (
              <div
                key={`set2-${index}`}
                className="flex-shrink-0 w-[400px] h-[300px] rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery CTA */}
      <div className="flex justify-center mt-12">
        <a
          href="/gallery"
          className="group inline-flex items-center gap-2 font-serif text-lg text-slate-700 border-b border-amber-500 pb-0.5 hover:text-amber-700 hover:border-amber-700 transition-colors duration-200"
        >
          <span className="tracking-wide">Browse the full gallery</span>
          <span className="inline-block translate-x-0 group-hover:translate-x-1.5 transition-transform duration-200 text-amber-600">
            &rarr;
          </span>
        </a>
      </div>
    </section>
  );
}