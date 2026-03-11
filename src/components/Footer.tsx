import { siteConfig } from '../config/site';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl mb-4 font-serif">
              {siteConfig.company.name}
            </h3>
            <p className="text-slate-400">
              {siteConfig.footer.description}
            </p>
          </div>
          <div>
            <h4 className="text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/gallery"
                  className="hover:text-white transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="/materials"
                  className="hover:text-white transition-colors"
                >
                  Materials
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg mb-4">Contact Info</h4>
            <ul className="space-y-2 text-slate-400">
              <li>{siteConfig.contact.phone}</li>
              <li>{siteConfig.contact.email}</li>
              <li>{siteConfig.contact.address.street + ','}</li>
              <li>{`${siteConfig.contact.address.city}, ${siteConfig.contact.address.state} ${siteConfig.contact.address.zip}`}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.company.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
