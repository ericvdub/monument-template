import { Phone } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import heroImage from "../assets/landing/Hero_BG.png";
import { siteConfig } from '../config/site';

export function Hero() {
  return (
    <div className="relative h-[600px] bg-slate-900 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <ImageWithFallback
          src={heroImage.src}
          alt="Historic monument with natural beauty"
          className="w-full h-full object-cover opacity-60 md:opacity-80"
        />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl px-6 w-full ml-auto">
            <h1 className="text-5xl md:text-6xl mb-6 font-serif">
              {siteConfig.hero.headline}
            </h1>
            <p className="max-w-xl text-xl text-text-primary-foreground mb-8">
              {siteConfig.hero.subheadline}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="xl"
				variant="secondary"
              >
                <a href={siteConfig.urls.designerUrl} rel="noopener noreferrer" target="_blank">Start a Design Online</a>
              </Button>
              <Button
                size="xl"
                variant="outline"
                asChild
              >
                <a href={siteConfig.contact.phoneTel} className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  {siteConfig.contact.phone}
                </a>
              </Button>
            </div>
        </div>
      </div>
    </div>
  );
}
