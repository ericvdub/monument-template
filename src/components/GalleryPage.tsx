import { useState, useEffect, useCallback, useRef, useMemo, type CSSProperties } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { siteConfig } from '../config/site';

interface RawImageData {
  path: string;
  thumbnailSrc: string;
  fullSrc: string;
}

interface GalleryItem {
  thumbnailSrc: string;
  fullSrc: string;
  alt: string;
  category: string;
  context: MemorialContext;
  hasContext: boolean;
}

type MemorialContext = 'Individual' | 'Companion';

const categories = ['All', 'Upright Monuments', 'Flat Markers', 'Slants', 'Benches', 'Custom Monuments', 'Custom Stone Signage'];
const contexts: MemorialContext[] = ['Individual', 'Companion'];
const categoryIndex = new Map(categories.map((category, index) => [category, index]));
const folderToCategory: Record<string, string> = {
  upright: 'Upright Monuments',
  'flat-markers': 'Flat Markers',
  slants: 'Slants',
  benches: 'Benches',
  custom: 'Custom Monuments',
  'custom-stone-signage': 'Custom Stone Signage',
};
const contextFreeCategories = new Set(['Custom Stone Signage']);
const folderToContext: Record<string, MemorialContext> = {
  individual: 'Individual',
  companion: 'Companion',
};

const toTitleCase = (value: string): string =>
  value
    .split(' ')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

const createBaseLabel = (filename: string): string => {
  const normalized = filename
    .replace(/\.[^/.]+$/, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  return toTitleCase(normalized);
};

const cleanLabelForCategory = (label: string, category: string): string => {
  if (category === 'Benches') return label.replace(/^Bench\s+/i, '');
  if (category === 'Flat Markers') return label.replace(/^(Flat|Bevel)\s+/i, '');
  if (category === 'Slants') return label.replace(/^Slant\s+/i, '');
  if (category === 'Upright Monuments') return label.replace(/^(Upright|Boulder)\s+/i, '');
  return label;
};

const createAltText = (
  filename: string,
  category: string,
  context: MemorialContext,
  includeContext: boolean,
): string => {
  const label = createBaseLabel(filename);
  const hasAltView = /\bAlt\b/i.test(label);
  const primaryLabel = cleanLabelForCategory(label.replace(/\bAlt\b/gi, '').replace(/\s+/g, ' ').trim(), category);
  const contextDescriptor = includeContext ? (context === 'Companion' ? 'companion ' : 'individual ') : '';
  const descriptor = category === 'Upright Monuments'
    ? 'upright monument'
    : category === 'Flat Markers'
      ? 'flat marker'
      : category === 'Slants'
        ? 'slant marker'
      : category === 'Benches'
        ? 'memorial bench'
        : category === 'Custom Monuments'
          ? 'custom design monument'
          : category === 'Custom Stone Signage'
            ? 'custom stone signage'
          : '';
  return hasAltView
    ? `${primaryLabel} ${contextDescriptor}${descriptor}, alternate view`
    : `${primaryLabel} ${contextDescriptor}${descriptor}`;
};

function buildGalleryItems(rawImages: RawImageData[]): GalleryItem[] {
  return rawImages
    .map(({ path, thumbnailSrc, fullSrc }) => {
      const relativePath = path.split('/gallery/')[1];
      if (!relativePath) return null;

      const [folder, ...pathSegments] = relativePath.split('/');
      const category = folderToCategory[folder];
      if (!category || pathSegments.length === 0) return null;

      const isContextFreeCategory = contextFreeCategories.has(category);
      const [maybeContext, ...segments] = pathSegments;
      const hasContext = !isContextFreeCategory && Boolean(maybeContext && folderToContext[maybeContext]);
      const context = hasContext ? folderToContext[maybeContext as keyof typeof folderToContext] : 'Individual';
      const filenameSegments = hasContext ? segments : pathSegments;
      if (filenameSegments.length === 0) return null;

      const filename = filenameSegments[filenameSegments.length - 1];
      return {
        thumbnailSrc,
        fullSrc,
        alt: createAltText(filename, category, context, hasContext),
        category,
        context,
        hasContext,
      };
    })
    .filter((item): item is GalleryItem => item !== null)
    .sort((a, b) => {
      const categoryDelta = (categoryIndex.get(a.category) ?? 999) - (categoryIndex.get(b.category) ?? 999);
      if (categoryDelta !== 0) return categoryDelta;
      if (a.context !== b.context) return a.context === 'Individual' ? -1 : 1;
      return a.alt.localeCompare(b.alt);
    });
}

const PAGE_SIZE = 12;

interface GalleryGridProps {
  items: GalleryItem[];
  resetKey: string;
  onSelect: (item: GalleryItem) => void;
}

interface ThumbnailProps {
  item: GalleryItem;
  onSelect: (item: GalleryItem) => void;
  onPreload: (src: string) => void;
}

function GalleryThumbnail({ item, onSelect, onPreload }: ThumbnailProps) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete) setLoaded(true);
  }, []);

  return (
    <button
      type="button"
      className="group relative aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow focus:outline-none focus-visible:ring-2"
      style={{ '--tw-ring-color': 'var(--brand-primary)' } as CSSProperties}
      onClick={() => onSelect(item)}
      onMouseEnter={() => onPreload(item.fullSrc)}
      onFocus={() => onPreload(item.fullSrc)}
      onTouchStart={() => onPreload(item.fullSrc)}
      aria-label={`View: ${item.alt}`}
    >
      {!loaded && <div className="absolute inset-0 bg-slate-200 animate-pulse" />}
      <img
        ref={imgRef}
        src={item.thumbnailSrc}
        alt={item.alt}
        loading="lazy"
        decoding="async"
        fetchPriority="low"
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-[transform,opacity] duration-300 group-hover:scale-105 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
        <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </button>
  );
}

function GalleryGrid({ items, resetKey, onSelect }: GalleryGridProps) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const preloadFullImage = useCallback((src: string) => {
    const image = new Image();
    image.decoding = 'async';
    image.src = src;
  }, []);

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [resetKey]);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((c) => Math.min(c + PAGE_SIZE, items.length));
        }
      },
      { rootMargin: '300px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [items.length]);

  if (items.length === 0) {
    return (
      <div className="text-center py-16 text-slate-500">
        <p className="text-lg">No items in this category yet.</p>
        <p className="text-sm mt-2">Check back soon or <a href="/contact" className="underline" style={{ color: 'var(--brand-primary)' }}>contact us</a> to see our full portfolio.</p>
      </div>
    );
  }

  const visibleItems = items.slice(0, visibleCount);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {visibleItems.map((item) => (
          <GalleryThumbnail
            key={item.fullSrc}
            item={item}
            onSelect={onSelect}
            onPreload={preloadFullImage}
          />
        ))}
      </div>
      {visibleCount < items.length && (
        <div ref={sentinelRef} className="flex justify-center py-10">
          <div className="w-6 h-6 rounded-full border-2 border-slate-300 border-t-amber-500 animate-spin" />
        </div>
      )}
    </>
  );
}

function shuffle<T>(arr: T[]): T[] {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

export function GalleryPage({ images }: { images: RawImageData[] }) {
  const allImages = useMemo(() => buildGalleryItems(images), [images]);
  // Start with sorted items (matches SSR), then shuffle on the client after hydration
  const [shuffledAllImages, setShuffledAllImages] = useState(allImages);
  useEffect(() => {
    setShuffledAllImages(shuffle(allImages));
  }, [allImages]);
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const [lightboxLoaded, setLightboxLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('All');
  const [activeContext, setActiveContext] = useState<MemorialContext>('Individual');
  const getFiltered = useCallback(
    (category: string, context: MemorialContext) =>
      allImages.filter((img) => {
        const matchesCategory = category === 'All' || img.category === category;
        const matchesContext = !img.hasContext || img.context === context;
        return matchesCategory && matchesContext;
      }),
    [allImages],
  );
  // Stable memoized array for the All tab — same reference used by both the grid and viewableItems
  const allTabItems = useMemo(
    () => shuffledAllImages.filter((img) => !img.hasContext || img.context === activeContext),
    [shuffledAllImages, activeContext],
  );

  const viewableItems = activeTab === 'All' ? allTabItems : getFiltered(activeTab, activeContext);
  const currentIndex = selected ? viewableItems.findIndex(i => i.thumbnailSrc === selected.thumbnailSrc) : -1;
  const isContextEnabled = activeTab !== 'Custom Stone Signage';

  const close = useCallback(() => { setSelected(null); setLightboxLoaded(false); }, []);
  const prev = useCallback(() => {
    setLightboxLoaded(false);
    setSelected(s => {
      if (!s || viewableItems.length === 0) return s;
      const idx = viewableItems.findIndex(i => i.thumbnailSrc === s.thumbnailSrc);
      if (idx === -1) return viewableItems[0];
      return viewableItems[(idx - 1 + viewableItems.length) % viewableItems.length];
    });
  }, [viewableItems]);
  const next = useCallback(() => {
    setLightboxLoaded(false);
    setSelected(s => {
      if (!s || viewableItems.length === 0) return s;
      const idx = viewableItems.findIndex(i => i.thumbnailSrc === s.thumbnailSrc);
      if (idx === -1) return viewableItems[0];
      return viewableItems[(idx + 1) % viewableItems.length];
    });
  }, [viewableItems]);

  useEffect(() => {
    if (selected && !viewableItems.some((item) => item.thumbnailSrc === selected.thumbnailSrc)) {
      setSelected(null);
    }
  }, [selected, viewableItems]);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selected, close, prev, next]);

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
            {`Browse examples of the monuments and memorials we've crafted for families throughout ${siteConfig.company.region}.`}
          </p>
        </div>
      </section>

      {/* Gallery with Tabs */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {isContextEnabled && (
            <div className="mb-6 flex justify-center">
              <div className="inline-flex w-fit rounded-xl border border-slate-200 bg-white p-1 shadow-sm">
                {contexts.map((context) => {
                  const count = getFiltered(activeTab, context).length;
                  const isActive = activeContext === context;

                  return (
                    <button
                      key={context}
                      type="button"
                      onClick={() => setActiveContext(context)}
                      aria-pressed={isActive}
                      className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${isActive ? 'text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}`}
                      style={isActive ? { backgroundColor: 'var(--brand-primary)' } : undefined}
                    >
                      {context}
                      <span className={`ml-2 text-xs ${isActive ? 'text-white/80' : 'text-slate-400'}`}>
                        ({count})
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          <Tabs value={activeTab} onValueChange={setActiveTab} className='md:items-center'>
            <div className="overflow-x-auto pb-3 mb-8">
              <TabsList className="flex w-max gap-2 h-auto p-1.5">
                {categories.map((cat) => (
                  <TabsTrigger
                    key={cat}
                    value={cat}
                    className="whitespace-nowrap text-sm md:text-base px-4 py-2.5 h-auto rounded-lg"
                  >
                    {cat}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((cat) => (
              <TabsContent key={cat} value={cat}>
                <GalleryGrid
                  items={cat === 'All' ? allTabItems : getFiltered(cat, activeContext)}
                  resetKey={`${cat}:${activeContext}`}
                  onSelect={setSelected}
                />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={close}
        >
          <button
            onClick={close}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X size={32} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 text-white/70 hover:text-white transition-colors p-2"
            aria-label="Previous"
          >
            <ChevronLeft size={40} />
          </button>

          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative flex items-center justify-center min-h-[40vh]">
              {/* Thumbnail shown instantly — already cached from the grid */}
              <img
                src={selected.thumbnailSrc}
                alt=""
                aria-hidden="true"
                className={`absolute w-full max-h-[80vh] object-contain rounded-lg transition-opacity duration-300 ${lightboxLoaded ? 'opacity-0' : 'opacity-100'} blur-sm scale-[1.02]`}
              />
              {/* Full-size image fades in once loaded */}
              <img
                key={selected.fullSrc}
                src={selected.fullSrc}
                alt={selected.alt}
                onLoad={() => setLightboxLoaded(true)}
                onError={() => setLightboxLoaded(true)}
                loading="eager"
                fetchPriority="high"
                className={`w-full max-h-[80vh] object-contain rounded-lg shadow-2xl transition-opacity duration-300 ${lightboxLoaded ? 'opacity-100' : 'opacity-0'}`}
              />
            </div>
            <p className="text-center text-white font-medium mt-4">{selected.alt}</p>
            <p className="text-center text-white/40 text-xs mt-1">
              {(currentIndex >= 0 ? currentIndex + 1 : 1)} / {Math.max(viewableItems.length, 1)}
            </p>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 text-white/70 hover:text-white transition-colors p-2"
            aria-label="Next"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}

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
