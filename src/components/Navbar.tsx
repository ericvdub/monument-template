import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import logoImage from '../assets/aea4d8c9de9b6aa6aa5110272a59d56bef458746.png';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled past hero section (600px)
      setIsScrolled(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#about', label: 'About' },
    { href: '#process', label: 'Process' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const offset = 80; // Offset for navbar height
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'fixed top-0 shadow-md'
            : 'absolute top-0 bg-transparent'
        }`}
        style={isScrolled ? { backgroundColor: 'var(--brand-primary-bg)' } : undefined}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo and Company Name */}
            <div className={`flex items-center gap-3 transition-opacity duration-300 ${
              isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}>
              <div
                className="w-10 h-10 rounded-lg overflow-hidden"
                style={{ mixBlendMode: isScrolled ? 'multiply' : 'normal' }}
              >
                <img
                  src={logoImage.src}
                  alt="Ivey Monuments Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h1 className={`text-xl font-serif transition-colors ${
                  isScrolled ? 'text-slate-900' : 'text-white'
                }`}>
                  Ivey Monuments
                </h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className={`transition-colors hover:opacity-70 ${
                    isScrolled ? 'text-slate-700' : 'text-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:815-244-3034"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  isScrolled
                    ? 'text-white'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
                style={isScrolled ? { backgroundColor: 'var(--brand-primary)' } : undefined}
                onMouseEnter={(e) => {
                  if (isScrolled) {
                    e.currentTarget.style.opacity = '0.9';
                  }
                }}
                onMouseLeave={(e) => {
                  if (isScrolled) {
                    e.currentTarget.style.opacity = '1';
                  }
                }}
              >
                <Phone className="w-4 h-4" />
                <span>(815) 244-3034</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 transition-colors ${
                isScrolled ? 'text-slate-900' : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-64 shadow-2xl z-50 transform transition-transform duration-300 lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ backgroundColor: 'var(--brand-primary-bg)' }}
      >
        <div className="p-6">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 text-slate-900"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="mt-12 flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-slate-700 transition-colors text-lg"
                style={{ 
                  color: 'var(--foreground)',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--brand-primary)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--foreground)'}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:815-244-3034"
              onClick={handleLinkClick}
              className="flex items-center gap-2 px-4 py-3 text-white rounded-lg transition-colors mt-4"
              style={{ backgroundColor: 'var(--brand-primary)' }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              <Phone className="w-5 h-5" />
              <span>(815) 244-3034</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}