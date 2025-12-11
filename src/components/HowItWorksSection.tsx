import { ClipboardCheck, FileCheck2, Sparkles, ShieldCheck } from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    { title: 'Compare Plans', desc: 'See benefits and prices side by side', icon: Sparkles, color: 'from-sky-400 to-blue-500' },
    { title: 'Get Instant Quote', desc: 'Personalized pricing in seconds', icon: ClipboardCheck, color: 'from-violet-400 to-fuchsia-500' },
    { title: 'Submit Documents', desc: 'Secure, paperless verification', icon: FileCheck2, color: 'from-emerald-400 to-teal-500' },
    { title: 'You’re Covered', desc: 'Policy issued with quick support', icon: ShieldCheck, color: 'from-amber-400 to-orange-500' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-sky-50 via-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 mb-3 rounded-full text-sm font-medium bg-white/70 backdrop-blur ring-1 ring-sky-200 text-sky-700">
            How It Works
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight mb-2 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            Get Covered In 4 Easy Steps
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Fast, transparent and hassle‑free process designed around you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="group relative">
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-sky-300/50 via-blue-400/50 to-indigo-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
              <div className="relative h-full bg-white border-2 border-gray-200 rounded-2xl p-6 text-center transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:border-sky-300">
                <div className={`mx-auto mb-4 w-14 h-14 rounded-xl text-white grid place-items-center bg-gradient-to-br ${s.color}`}>
                  <s.icon className="w-6 h-6" />
                </div>
                <div className="text-xs font-semibold text-sky-600 mb-1">Step {String(i + 1).padStart(2, '0')}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{s.title}</h3>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
