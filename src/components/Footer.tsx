export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl mb-4 font-serif">
              Ivey Monuments
            </h3>
            <p className="text-slate-400">
              Creating lasting tributes with care, compassion,
              and craftsmanship since 1975.
            </p>
          </div>
          <div>
            <h4 className="text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="hover:text-white transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
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
              <li>(815) 244-3034</li>
              <li>info@iveymonuments.com</li>
              <li>204 W Market St,</li>
              <li>Mt Carroll, IL 61053</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} Ivey
            Monuments. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}