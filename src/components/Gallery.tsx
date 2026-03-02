import imgCourtley from '../assets/gallery/upright/individual/courtley.jpg';
import imgLego from '../assets/gallery/custom/individual/lego.jpg';
import imgBickelhaupt from '../assets/gallery/upright/individual/bickelhaupt.jpg';
import imgKeim from '../assets/gallery/upright/individual/keim.jpg';
import imgVick from '../assets/gallery/custom/individual/vick-jackie.png';
import imgDauphin from '../assets/gallery/upright/individual/dauphin.jpg';

const galleryImages = [
  { src: imgCourtley.src, alt: 'Smith family double upright in black granite' },
  { src: imgLego.src, alt: 'Lego family monument with custom vehicle engravings' },
  { src: imgBickelhaupt.src, alt: 'Paxton family monument with farm scene and portrait' },
  { src: imgKeim.src, alt: 'Roberts family monument with pastoral landscape engraving' },
  { src: imgVick.src, alt: 'Vick family flat marker with custom seasoning engravings' },
  { src: imgDauphin.src, alt: 'Dauphin family double upright in black granite' },
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
