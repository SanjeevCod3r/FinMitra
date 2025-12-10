import { ArrowRight, Shield, TrendingUp, Users } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-sky-50 via-blue-50 to-white pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-sky-100 text-sky-600 px-4 py-2 rounded-full text-sm font-semibold">
                Your Trusted Financial Partner
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Secure Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
                {' '}Future{' '}
              </span>
              with Smart Loans
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Get instant approval on personal, business, home, and car loans. We partner with leading banks and NBFCs to bring you the best financial solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate('services')}
                className="bg-gradient-to-r from-sky-400 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Apply Now</span>
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => onNavigate('emi')}
                className="bg-white text-gray-700 border-2 border-gray-300 px-8 py-4 rounded-lg font-semibold hover:border-sky-400 hover:text-sky-500 transition-all duration-200"
              >
                Calculate EMI
              </button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2">
                <Shield className="text-sky-500" size={24} />
                <span className="text-sm text-gray-600">100% Secure</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="text-sky-500" size={24} />
                <span className="text-sm text-gray-600">Quick Approval</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="text-sky-500" size={24} />
                <span className="text-sm text-gray-600">10k+ Happy Clients</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Financial Planning"
                className="rounded-xl w-full h-auto"
              />
            </div>
            <div className="absolute top-10 -right-10 w-72 h-72 bg-sky-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-10 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
