import { Phone } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import heroImage from "../assets/landing/Hero_BG.png";

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
            <h2 className="text-5xl md:text-6xl mb-6 font-serif">
              Crafted to Honor Every Story
            </h2>
            <p className="max-w-xl text-xl text-text-primary-foreground mb-8">
              Decades of experience helping families honor their loved ones with compassionate, personalized design.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="xl"
				variant="secondary"
              >
                <a href="https://lastingmemori.com/designer/ivey-monuments">Start a Design Online</a>
              </Button>
              <Button
                size="xl"
                variant="outline"
                asChild
              >
                <a href="tel:815-244-3034" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  (815) 244-3034
                </a>
              </Button>
            </div>
        </div>
      </div>
    </div>
  );
}
