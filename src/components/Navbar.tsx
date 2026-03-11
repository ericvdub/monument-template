import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import logoImage from '../assets/logo/logo.png';
import { siteConfig } from '../config/site';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const startDesignHref = siteConfig.urls.designerUrl;

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled past hero section (600px)
      setIsScrolled(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/about', label: 'About', isAnchor: false },
    { href: '/services', label: 'Services', isAnchor: false },
    { href: '/gallery', label: 'Gallery', isAnchor: false },
    { href: '/materials', label: 'Materials', isAnchor: false },
    { href: '/contact', label: 'Contact', isAnchor: false },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isAnchor: boolean) => {
    if (!isAnchor) {
      setIsMobileMenuOpen(false);
      return;
    }
    // Only smooth scroll for same-page anchor links
    const hash = href.includes('#') ? href.split('#')[1] : '';
    if (hash && window.location.pathname === '/') {
      e.preventDefault();
      const targetElement = document.getElementById(hash);
      if (targetElement) {
        const offset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
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
        <div className={`max-w-7xl mx-auto px-6 transition-all duration-300 ${isScrolled ? 'py-3' : 'py-5'}`}>
          <div className="flex items-center justify-between">
            {/* Logo and Company Name */}
            <a
              href="/"
              onClick={handleLinkClick}
              className={`flex items-center transition-all duration-300 ${isScrolled ? 'gap-3' : 'gap-4 md:gap-5'}`}
            >
              <div
                className={`rounded-lg overflow-hidden transition-all duration-300 ${isScrolled ? 'w-10 h-10' : 'w-14 h-14 md:w-16 md:h-16'}`}
                style={{ mixBlendMode: isScrolled ? 'multiply' : 'normal' }}
              >
                <img
                  src={logoImage.src}
                  alt={`${siteConfig.company.name} Logo`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h1 className={`font-serif leading-tight transition-all duration-300 ${
                  isScrolled ? 'text-2xl' : 'text-2xl md:text-3xl lg:text-4xl'
                } ${
                  isScrolled ? 'text-slate-900' : 'text-white'
                }`}>
                  {siteConfig.company.name}
                </h1>
				<p className={`transition-all duration-300 ${
                  isScrolled ? 'text-sm text-slate-500' : 'text-base md:text-lg text-slate-300'
                }`}>
                  {siteConfig.company.tagline}
                </p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href, link.isAnchor)}
                  className={`transition-colors hover:opacity-70 ${
                    isScrolled ? 'text-slate-700' : 'text-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={startDesignHref}
                onClick={handleLinkClick}
                className="px-4 py-2 rounded-lg text-white font-medium shadow-md transition-all"
                style={{ backgroundColor: 'var(--brand-primary)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '0.9';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '1';
                }}
              >
                Start Designing
              </a>
              <a
                href={siteConfig.contact.phoneTel}
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
                <span>{siteConfig.contact.phone}</span>
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
                onClick={(e) => handleSmoothScroll(e, link.href, link.isAnchor)}
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
              href={startDesignHref}
              onClick={handleLinkClick}
              className="flex items-center justify-center px-4 py-3 text-white rounded-lg transition-colors font-medium"
              style={{ backgroundColor: 'var(--brand-primary)' }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              Start Designing
            </a>
            <a
              href={siteConfig.contact.phoneTel}
              onClick={handleLinkClick}
              className="flex items-center gap-2 px-4 py-3 text-white rounded-lg transition-colors mt-4"
              style={{ backgroundColor: 'var(--brand-primary)' }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              <Phone className="w-5 h-5" />
              <span>{siteConfig.contact.phone}</span>
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
