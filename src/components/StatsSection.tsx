import { Shield, Building2, Users, Clock8 } from 'lucide-react';

export default function StatsSection() {
  const items = [
    { icon: Users, value: '10k+', label: 'Happy Customers', color: 'from-sky-400 to-blue-500' },
    { icon: Building2, value: '50+', label: 'Bank & NBFC Partners', color: 'from-violet-400 to-fuchsia-500' },
    { icon: Shield, value: '100%', label: 'Secure & Transparent', color: 'from-emerald-400 to-teal-500' },
    { icon: Clock8, value: '< 24h', label: 'Claim Assistance', color: 'from-amber-400 to-orange-500' },
  ];

  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur p-6 ring-1 ring-sky-100">
          <div className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-sky-200/40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 -right-10 h-44 w-44 rounded-full bg-blue-200/40 blur-3xl" />
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6">
            {items.map((s) => (
              <div key={s.label} className="group relative">
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-sky-300/50 via-blue-400/50 to-indigo-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                <div className="relative h-full bg-white border-2 border-gray-200 rounded-2xl p-6 text-center transition-all duration-300 transform group-hover:-translate-y-1.5 group-hover:shadow-2xl group-hover:border-sky-300">
                  <div className={`mx-auto mb-2 w-12 h-12 rounded-xl grid place-items-center text-white bg-gradient-to-br ${s.color}`}>
                    <s.icon className="w-6 h-6" />
                  </div>
                  <div className="text-2xl font-extrabold text-gray-900">{s.value}</div>
                  <div className="text-sm text-gray-600">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
