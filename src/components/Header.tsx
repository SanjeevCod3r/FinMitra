import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  onNavigate: (section: string) => void;
  currentPage: string;
}

export default function Header({ onNavigate, currentPage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', value: 'home' },
    { label: 'About', value: 'about' },
    { label: 'Services', value: 'services' },
    { label: 'EMI Calculator', value: 'emi' },
    { label: 'Contact', value: 'contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <div className="bg-gradient-to-r from-sky-400 to-blue-500 text-white rounded-lg p-2">
              <span className="text-2xl font-bold">FM</span>
            </div>
            <span className="text-2xl font-bold text-gray-800">Finmitra</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  onNavigate(item.value);
                  setIsMenuOpen(false);
                }}
                className={`text-gray-700 hover:text-sky-500 transition-colors font-medium ${
                  currentPage === item.value ? 'text-sky-500' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:8178625027"
              className="bg-gradient-to-r from-sky-400 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center space-x-2"
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

        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            {menuItems.map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  onNavigate(item.value);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left py-3 px-4 text-gray-700 hover:bg-sky-50 hover:text-sky-500 transition-colors ${
                  currentPage === item.value ? 'text-sky-500 bg-sky-50' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:8178625027"
              className="flex items-center justify-center space-x-2 mt-4 bg-gradient-to-r from-sky-400 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold"
            >
              <Phone size={18} />
              <span>Call Now</span>
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
