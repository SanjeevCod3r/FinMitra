import { ArrowRight, Shield, TrendingUp, Users } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-sky-50 via-blue-50 to-white pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-semibold">
                Comprehensive Insurance Solutions
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Protect What
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
                {' '}Matters{' '}
              </span>
              Most
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Secure your life, health, vehicle, and home with plans tailored to your needs. Trusted by thousands for transparent and quick support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate('services')}
                className="bg-gradient-to-r from-sky-400 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Get Insured</span>
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="bg-white text-gray-700 border-2 border-gray-200 px-8 py-4 rounded-xl font-semibold hover:border-sky-400 hover:text-sky-600 transition-all duration-200"
              >
                Talk to Expert
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              <div className="group rounded-2xl bg-white border border-gray-100 p-4 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center mb-2">
                  <Shield size={20} />
                </div>
                <p className="text-sm font-semibold text-gray-800">Health Cover</p>
                <p className="text-xs text-gray-500 group-hover:text-gray-600">Cashless claims</p>
              </div>
              <div className="group rounded-2xl bg-white border border-gray-100 p-4 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center mb-2">
                  <Users size={20} />
                </div>
                <p className="text-sm font-semibold text-gray-800">Family Plans</p>
                <p className="text-xs text-gray-500 group-hover:text-gray-600">All-age support</p>
              </div>
              <div className="group rounded-2xl bg-white border border-gray-100 p-4 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center mb-2">
                  <TrendingUp size={20} />
                </div>
                <p className="text-sm font-semibold text-gray-800">No Claim Bonus</p>
                <p className="text-xs text-gray-500 group-hover:text-gray-600">Save more yearly</p>
              </div>
              <div className="group rounded-2xl bg-white border border-gray-100 p-4 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center mb-2">
                  <Shield size={20} />
                </div>
                <p className="text-sm font-semibold text-gray-800">24/7 Support</p>
                <p className="text-xs text-gray-500 group-hover:text-gray-600">Claim assistance</p>
              </div>
            </div>
          </div>

          <div className="relative group">
            {/* Soft pulsing glow behind the card */}
            <div className="absolute inset-0 -z-0 blur-2xl rounded-3xl opacity-50 transition-opacity duration-500 group-hover:opacity-70 bg-gradient-to-r from-sky-300/30 to-blue-300/30" />
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8 transition-transform duration-500 group-hover:rotate-[-1.5deg] group-hover:scale-[1.04] hover:shadow-3xl">
              <img
                src="https://images.pexels.com/photos/8962268/pexels-photo-8962268.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Family Insurance Protection"
                className="rounded-xl w-full h-auto"
              />
            </div>
            <div className="absolute top-10 -right-10 w-72 h-72 bg-sky-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-10 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

            <div className="absolute -top-4 left-0 z-20">
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur rounded-full shadow-md px-4 py-2 border border-gray-100 hover:shadow-lg transition">
                <Shield className="text-sky-600" size={18} />
                <span className="text-sm font-medium text-gray-700">Cashless Network</span>
              </div>
            </div>
            <div className="absolute bottom-6 -right-6 z-20">
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur rounded-full shadow-md px-4 py-2 border border-gray-100 hover:shadow-lg transition">
                <Users className="text-sky-600" size={18} />
                <span className="text-sm font-medium text-gray-700">10k+ Customers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
