import { Target, Eye } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function AboutSection() {
  const stats = [
    { number: '10,000+', label: 'Happy Customers' },
    { number: '₹500Cr+', label: 'Loans Disbursed' },
    { number: '50+', label: 'Bank Partners' },
    { number: '99%', label: 'Approval Rate' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-sky-50 via-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative group">
            <div className="absolute inset-0 rounded-3xl blur-2xl opacity-40 bg-gradient-to-r from-sky-300/30 to-blue-300/30 transition-opacity duration-500 group-hover:opacity-70" />
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden transition-transform duration-500 group-hover:rotate-[-1.5deg] group-hover:scale-[1.02]">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="About Finmitra"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-sky-400 to-blue-500 text-white p-6 rounded-xl shadow-xl">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">About Finmitra</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Finmitra is your trusted financial partner, dedicated to providing comprehensive loan solutions that empower individuals and businesses to achieve their dreams. With over 15 years of experience in the financial services industry, we have established ourselves as a leading facilitator of financial solutions.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We work with a network of 50+ banks and NBFCs to bring you the most competitive rates and flexible terms. Our mission is to simplify the loan process and make financial services accessible to everyone.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="group relative">
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-sky-300/60 via-blue-400/60 to-sky-300/60 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
                <div className="relative rounded-2xl p-5 bg-white border border-gray-100 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-sky-400 to-blue-500 rounded-lg flex items-center justify-center text-white mb-3 transition-transform duration-300 group-hover:rotate-3">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-gray-900">Our Mission</h3>
                  <p className="text-sm text-gray-600">To empower financial dreams through accessible, transparent, and customer-centric loan solutions.</p>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-sky-300/60 via-blue-400/60 to-sky-300/60 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
                <div className="relative rounded-2xl p-5 bg-white border border-gray-100 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-sky-400 to-blue-500 rounded-lg flex items-center justify-center text-white mb-3 transition-transform duration-300 group-hover:rotate-3">
                    <Eye className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-gray-900">Our Vision</h3>
                  <p className="text-sm text-gray-600">To be India's most trusted and preferred financial services partner.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const parsed = parseStat(stat.number);
            return (
              <StatCard key={index} value={parsed.value} prefix={parsed.prefix} suffix={parsed.suffix} label={stat.label} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function parseStat(input: string): { prefix: string; value: number; suffix: string } {
  const match = input.match(/^([^0-9]*)([0-9,]+(?:\.[0-9]+)?)(.*)$/);
  if (!match) return { prefix: '', value: 0, suffix: input };
  const [, prefix, num, rest] = match;
  const value = Number(num.replace(/,/g, ''));
  const suffix = rest || '';
  return { prefix, value, suffix };
}

function StatCard({ value, prefix, suffix, label }: { value: number; prefix?: string; suffix?: string; label: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setStart(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="group relative text-center">
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-sky-300/50 via-blue-400/50 to-sky-300/50 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
      <div className="relative bg-white rounded-2xl p-6 shadow-md border border-gray-100 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600 mb-2">
          {prefix || ''}
          <CountUp to={value} start={start} />
          {suffix || ''}
        </div>
        <div className="text-gray-600 text-sm">{label}</div>
      </div>
    </div>
  );
}

function CountUp({ to, start, duration = 1200 }: { to: number; start: boolean; duration?: number }) {
  const [val, setVal] = useState(0);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const step = (ts: number) => {
      if (startRef.current === null) startRef.current = ts;
      const progress = Math.min(1, (ts - startRef.current) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(Math.round(to * eased));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [start, to, duration]);

  return <>{val.toLocaleString()}</>;
}
