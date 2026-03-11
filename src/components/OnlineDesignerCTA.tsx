import { Palette, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { siteConfig } from '../config/site';

export function OnlineDesignerCTA() {
  return (
    <section className="py-20 px-6" style={{ background: 'linear-gradient(135deg, var(--brand-gradient-from), var(--brand-gradient-to))' }}>
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 shadow-md" style={{ backgroundColor: 'var(--brand-primary)' }}>
          <Palette className="w-8 h-8 text-white" />
        </div>

        <h2 className="text-4xl mb-4 font-serif text-slate-900">
          {siteConfig.designerCTA.heading}
        </h2>
        <p className="text-xl text-slate-700 mb-8 max-w-2xl mx-auto">
          {siteConfig.designerCTA.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="text-white gap-2 text-base px-8 py-6"
            style={{ backgroundColor: 'var(--brand-primary)' }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            onClick={() => window.open(siteConfig.urls.designerUrl, '_blank')}
          >
            Explore Memorial Ideas
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-slate-800 border-slate-400 text-base px-8 py-6 hover:bg-white/60"
            onClick={() => window.location.href = '/contact'}
          >
            Talk to Us First
          </Button>
        </div>

        <p className="text-sm text-slate-500 mt-6">
          {siteConfig.designerCTA.footerNote}
        </p>
      </div>
    </section>
  );
}
