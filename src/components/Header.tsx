import { Phone, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import logoUrl from '../../asset/logo.png';

interface HeaderProps {
  onNavigate: (section: string) => void;
  currentPage: string;
}

export default function Header({ onNavigate, currentPage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    const { body } = document;
    const original = body.style.overflow;
    if (isMenuOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = original || '';
    }
    return () => {
      body.style.overflow = original || '';
    };
  }, [isMenuOpen]);

  const menuItems = [
    { label: 'Home', value: 'home' },
    { label: 'About', value: 'about' },
    { label: 'Services', value: 'services' },
    { label: 'EMI Calculator', value: 'emi' },
    { label: 'Contact', value: 'contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-transparent z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-3 mb-3">
          <div className="flex justify-between items-center h-20 rounded-2xl bg-white/90 backdrop-blur border border-gray-100 shadow-lg px-4 sm:px-6">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <img src={logoUrl} alt="Finmitra Logo" className="h-12 md:h-14 lg:h-16 w-auto" />
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  onNavigate(item.value);
                  setIsMenuOpen(false);
                }}
                className={`group relative px-2 py-1 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 ${
                  currentPage === item.value ? 'text-sky-600' : 'text-gray-700 hover:text-sky-600'
                }`}
              >
                <span className="font-medium">{item.label}</span>
                <span
                  className={`pointer-events-none absolute left-0 -bottom-1 h-0.5 bg-gradient-to-r from-sky-400 to-blue-500 transition-all duration-300 ${
                    currentPage === item.value ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            ))}
            <a
              href="tel:8178625027"
              className="relative overflow-hidden bg-gradient-to-r from-sky-400 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold shadow-md ring-2 ring-sky-400/40 hover:ring-sky-500/60 transition-all duration-200 hover:shadow-lg hover:scale-105 animate-pulse flex items-center space-x-2"
            >
              <Phone size={18} />
              <span>Call Now</span>
            </a>
          </nav>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          </div>
        </div>

        {(
          // Keep overlay and drawer markup together for mobile only
          <>
            {/* Overlay */}
            <div
              className={`md:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
                isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
              }`}
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Drawer */}
            <aside
              className={`md:hidden fixed top-0 right-0 z-50 h-full w-80 max-w-[85%] bg-white shadow-2xl border-l border-gray-100 rounded-l-2xl transform transition-transform duration-300 ease-out ${
                isMenuOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
              aria-hidden={!isMenuOpen}
              role="dialog"
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <div className="flex items-center">
                  <img src={logoUrl} alt="Finmitra Logo" className="h-10 w-auto" />
                </div>
                <button
                  aria-label="Close menu"
                  className="p-2 rounded-lg text-gray-600 hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <X size={24} />
                </button>
              </div>

              <nav className="p-2">
                {menuItems.map((item) => (
                  <button
                    key={item.value}
                    onClick={() => {
                      onNavigate(item.value);
                      setIsMenuOpen(false);
                    }}
                    className={`block w-full text-left py-3 px-4 rounded-xl transition-colors mb-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 ${
                      currentPage === item.value
                        ? 'bg-sky-50 text-sky-700 border-l-4 border-sky-300 pl-3'
                        : 'text-gray-700 hover:bg-sky-50 hover:text-sky-700 hover:border-sky-200 border-l-4 border-transparent pl-3'
                    }`}
                  >
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}

                <a
                  href="tel:8178625027"
                  className="mt-3 flex items-center justify-center space-x-2 bg-gradient-to-r from-sky-400 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold shadow-md ring-2 ring-sky-400/40 animate-pulse"
                >
                  <Phone size={18} />
                  <span>Call Now</span>
                </a>
              </nav>
            </aside>
          </>
        )}
      </div>
    </header>
  );
}
