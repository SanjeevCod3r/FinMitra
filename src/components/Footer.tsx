import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-sky-400 to-blue-500 text-white rounded-lg p-2">
                <span className="text-xl font-bold">FM</span>
              </div>
              <span className="text-xl font-bold text-white">Finmitra</span>
            </div>
            <p className="text-sm">
              Your trusted partner for all financial solutions. We provide comprehensive loan services through our network of Bank and NBFC partners.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-sky-400 transition-colors text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-sky-400 transition-colors text-sm"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-sky-400 transition-colors text-sm"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('emi')}
                  className="hover:text-sky-400 transition-colors text-sm"
                >
                  EMI Calculator
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-sky-400 transition-colors text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Personal Loan</li>
              <li>Business Loan</li>
              <li>Home Loan</li>
              <li>Car Loan</li>
              <li>Education Loan</li>
              <li>Overdraft Facility</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a
                href="tel:8178625027"
                className="flex items-center space-x-2 hover:text-sky-400 transition-colors text-sm"
              >
                <Phone size={16} />
                <span>8178625027</span>
              </a>
              <a
                href="mailto:subhashchandrans1010@gmail.com"
                className="flex items-center space-x-2 hover:text-sky-400 transition-colors text-sm"
              >
                <Mail size={16} />
                <span>subhashchandrans1010@gmail.com</span>
              </a>
              <div className="flex items-start space-x-2 text-sm">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Mumbai, Maharashtra, India</span>
              </div>

              <div className="flex space-x-4 pt-4">
                <a
                  href="#"
                  className="hover:text-sky-400 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="hover:text-sky-400 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="hover:text-sky-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className="hover:text-sky-400 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>© {currentYear} Finmitra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
