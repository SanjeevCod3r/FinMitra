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
                <p className="text-sm font-semibold text-gray-800">Smart Coverage</p>
                <p className="text-xs text-gray-500 group-hover:text-gray-600">Tailored to you</p>
              </div>
              <div className="group rounded-2xl bg-white border border-gray-100 p-4 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center mb-2">
                  <Users size={20} />
                </div>
                <p className="text-sm font-semibold text-gray-800">Cashless Network</p>
                <p className="text-xs text-gray-500 group-hover:text-gray-600">10k+ hospitals</p>
              </div>
              <div className="group rounded-2xl bg-white border border-gray-100 p-4 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center mb-2">
                  <TrendingUp size={20} />
                </div>
                <p className="text-sm font-semibold text-gray-800">Zero‑Hassle Claims</p>
                <p className="text-xs text-gray-500 group-hover:text-gray-600">Paperless support</p>
              </div>
              <div className="group rounded-2xl bg-white border border-gray-100 p-4 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center mb-2">
                  <Shield size={20} />
                </div>
                <p className="text-sm font-semibold text-gray-800">Price Lock</p>
                <p className="text-xs text-gray-500 group-hover:text-gray-600">No hidden costs</p>
              </div>
            </div>
          </div>

          <div className="relative group [transform-style:preserve-3d]">
            {/* layered 3D panels */}
            <div className="absolute inset-0 -z-0 blur-2xl rounded-3xl opacity-60 transition-opacity duration-700 group-hover:opacity-80 bg-gradient-to-tr from-sky-300/30 via-fuchsia-300/25 to-emerald-300/30" />

            <div className="relative z-10">
              {/* back plate */}
              <div className="absolute -top-6 -left-6 w-64 h-64 rounded-3xl rotate-[-8deg] bg-gradient-to-br from-sky-200 to-blue-200 opacity-70 blur-md" />
              {/* mid plate */}
              <div className="absolute top-6 -right-4 w-56 h-56 rounded-3xl rotate-[10deg] bg-gradient-to-br from-fuchsia-200 to-rose-200 opacity-70 blur-md" />

              {/* main interactive card */}
              <div className="relative bg-white/90 backdrop-blur rounded-2xl ring-1 ring-gray-100 shadow-2xl p-6 sm:p-8 lg:p-10 transition-all duration-500 will-change-transform transform group-hover:-rotate-1 group-hover:scale-[1.03]">
                <div className="relative overflow-hidden rounded-xl p-6 sm:p-8 bg-gradient-to-br from-sky-50 via-white to-blue-50 ring-1 ring-sky-100">
                  {/* glossy sweep */}
                  <span className="pointer-events-none absolute inset-y-0 left-[-20%] w-1/3 bg-white/30 blur-md transform -skew-x-12 transition-transform duration-[900ms] ease-out group-hover:translate-x-[240%]" />

                  <div className="grid grid-cols-2 gap-4 sm:gap-6">
                    <div className="rounded-2xl bg-white ring-1 ring-gray-100 p-4 shadow-sm transition-transform duration-500 group-hover:-translate-y-1 group-hover:shadow-md">
                      <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-600 grid place-items-center mb-2">
                        <Shield size={22} />
                      </div>
                      <p className="text-sm font-semibold text-gray-800">Smart Coverage</p>
                      <p className="text-xs text-gray-500">Tailored to you</p>
                    </div>
                    <div className="rounded-2xl bg-white ring-1 ring-gray-100 p-4 shadow-sm transition-transform duration-500 group-hover:-translate-y-1 group-hover:shadow-md">
                      <div className="w-12 h-12 rounded-xl bg-violet-100 text-violet-600 grid place-items-center mb-2">
                        <Users size={22} />
                      </div>
                      <p className="text-sm font-semibold text-gray-800">Cashless Network</p>
                      <p className="text-xs text-gray-500">10k+ hospitals</p>
                    </div>
                    <div className="rounded-2xl bg-white ring-1 ring-gray-100 p-4 shadow-sm transition-transform duration-500 group-hover:-translate-y-1 group-hover:shadow-md">
                      <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 grid place-items-center mb-2">
                        <TrendingUp size={22} />
                      </div>
                      <p className="text-sm font-semibold text-gray-800">Fast Claim Help</p>
                      <p className="text-xs text-gray-500">Under 24 hrs assist</p>
                    </div>
                    <div className="rounded-2xl bg-white ring-1 ring-gray-100 p-4 shadow-sm transition-transform duration-500 group-hover:-translate-y-1 group-hover:shadow-md">
                      <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 grid place-items-center mb-2">
                        <Shield size={22} />
                      </div>
                      <p className="text-sm font-semibold text-gray-800">No Hidden Costs</p>
                      <p className="text-xs text-gray-500">Transparent pricing</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* floating colorful blobs */}
              <div className="absolute top-10 -right-12 w-64 h-64 bg-sky-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
              <div className="absolute -bottom-10 left-0 w-64 h-64 bg-fuchsia-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
              <div className="absolute top-1/2 -left-10 w-64 h-64 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-4000" />

              {/* floating icon pills */}
              <div className="absolute -top-4 left-0 z-20">
                <div className="flex items-center gap-2 bg-white/90 backdrop-blur rounded-full shadow-md px-4 py-2 border border-gray-100 transition hover:shadow-lg">
                  <Shield className="text-sky-600" size={18} />
                  <span className="text-sm font-medium text-gray-700">Cashless Network</span>
                </div>
              </div>
              <div className="absolute bottom-6 -right-6 z-20">
                <div className="flex items-center gap-2 bg-white/90 backdrop-blur rounded-full shadow-md px-4 py-2 border border-gray-100 transition hover:shadow-lg">
                  <Users className="text-violet-600" size={18} />
                  <span className="text-sm font-medium text-gray-700">10k+ Customers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
