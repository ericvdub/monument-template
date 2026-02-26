import { Phone, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import heroImage from "../assets/9603c851bd3f943399ed40250633f3da0ce0381e.png";
// import logoImage from "../assets/aea4d8c9de9b6aa6aa5110272a59d56bef458746.png";
import logoImage from '../assets/logo/Ivey_Logo.png';

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

      <div className="absolute top-0 left-0 right-0 z-10 px-6 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-lg overflow-hidden"
              style={{ mixBlendMode: "multiply" }}
            >
              <img
                src={logoImage.src}
                alt="Ivey Monuments Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-2xl font-serif">
                Ivey Monuments
              </h1>
              <p className="text-sm text-slate-300">
                Serving Illinois Since 1875
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl px-6 w-full ml-auto">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl mb-6 font-serif ">
              A Lifetime Guarantee for a Lasting Legacy
            </h2>
            <p className="text-xl text-text-primary-foreground mb-8">
              Decades of experience helping families honor their loved ones with compassionate, personalized design.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-slate-100 rounded-full"
              >
                <a href="#contact">Create a Design Online</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-black/20 border-primary text-white hover:text-white hover:bg-black rounded-full text-lg"
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
    </div>
  );
}