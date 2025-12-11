import { Home, Car, Briefcase, CreditCard, Building2, Shield } from 'lucide-react';
import { useEffect, useState } from 'react';
import LoanFormModal from './LoanFormModal';
import InquiryModal from './InquiryModal';

type LoanType = 'personal' | 'business';

export default function ServicesSection() {
  const [selectedLoan, setSelectedLoan] = useState<LoanType | null>(null);
  type Category = 'loans' | 'insurance' | 'cards';
  const [selectedCategory, setSelectedCategory] = useState<Category>('loans');

  const [inquiry, setInquiry] = useState<{ open: boolean; category: 'insurance' | 'cards'; itemName: string } | null>(null);

  // Initialize category from hash (#loans | #insurance | #credit-cards)
  useEffect(() => {
    const hash = (window.location.hash || '').toLowerCase();
    if (hash.includes('insurance')) setSelectedCategory('insurance');
    else if (hash.includes('credit')) setSelectedCategory('cards');
    else if (hash.includes('loan')) setSelectedCategory('loans');
  }, []);

  const loanItems = [
    { icon: <CreditCard className="w-8 h-8" />, title: 'Personal Loan', type: 'personal' as const, desc: 'Quick approvals and flexible tenure.' },
    { icon: <Briefcase className="w-8 h-8" />, title: 'Business Loan', type: 'business' as const, desc: 'Fuel growth with tailored solutions.' },
    { icon: <Car className="w-8 h-8" />, title: 'Used Car Loan', type: 'personal' as const, desc: 'Easy finance for pre-owned cars.' },
    { icon: <Home className="w-8 h-8" />, title: 'Home Loan', type: 'personal' as const, desc: 'Affordable rates, long tenure.' },
    { icon: <Car className="w-8 h-8" />, title: 'Car Loan', type: 'personal' as const, desc: 'Up to 90% funding with quick disbursal.' },
  ];

  const insuranceItems = [
    { icon: <Shield className="w-8 h-8" />, title: 'Health Insurance' },
    { icon: <Shield className="w-8 h-8" />, title: 'Life Insurance' },
    { icon: <Car className="w-8 h-8" />, title: 'Auto Insurance' },
    { icon: <TruckLike />, title: 'Car, Truck, Bus Etc.' },
    { icon: <Car className="w-8 h-8" />, title: 'Two Wheeler Insurance' },
  ];

  // Fallback icon component for vehicles category text when lucide lacks a specific icon
  function TruckLike() {
    return (
      <div className="w-8 h-8 rounded-md bg-gradient-to-r from-sky-400 to-blue-500 text-white grid place-items-center text-xs font-bold">
        Auto
      </div>
    );
  }

  const creditCardItems = [
    'HDFC Credit Card',
    'SBI Credit Card',
    'INDUSIND Credit Card',
    'IDFC Credit Card',
    'Bank of Baroda Credit Card',
  ];

  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Loan Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-2">
              Comprehensive financial solutions provided through our trusted Bank and NBFC partners
            </p>
            <p className="text-sm text-gray-500 italic">
              Click on any service to apply
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-10">
            {([
              { key: 'loans', label: 'Loans' },
              { key: 'insurance', label: 'Insurance' },
              { key: 'cards', label: 'Credit Cards' }
            ] as { key: Category; label: string }[]).map((tab) => {
              const active = selectedCategory === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => {
                    setSelectedCategory(tab.key);
                    const hash = tab.key === 'loans' ? '#loans' : tab.key === 'insurance' ? '#insurance' : '#credit-cards';
                    try { window.history.replaceState(null, '', hash); } catch {}
                  }}
                  className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all ring-1 ${
                    active
                      ? 'bg-gradient-to-r from-sky-400 to-blue-500 text-white ring-sky-300 shadow'
                      : 'bg-white text-gray-700 ring-gray-200 hover:ring-sky-300 hover:text-sky-700'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Filtered Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {selectedCategory === 'loans' &&
              loanItems.map((item, index) => (
                <div key={index} className="group relative" style={{ transitionDelay: `${index * 50}ms` }}>
                  <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-sky-300/60 via-blue-400/60 to-sky-300/60 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
                  <div
                    onClick={() => setSelectedLoan(item.type)}
                    className="relative bg-white border-2 border-gray-200 rounded-2xl p-8 transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:border-sky-300 cursor-pointer"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-blue-500 rounded-xl flex items-center justify-center text-white mb-6 transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                    <button className="mt-6 w-full bg-gradient-to-r from-sky-400 to-blue-500 text-white py-3 rounded-xl font-semibold shadow-md ring-2 ring-sky-400/30 hover:ring-sky-500/50 hover:shadow-lg transition-all duration-200 hover:scale-[1.02]">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}

            {selectedCategory === 'insurance' &&
              insuranceItems.map((item, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-blue-300/60 via-indigo-400/60 to-blue-300/60 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
                  <div
                    onClick={() => setInquiry({ open: true, category: 'insurance', itemName: item.title })}
                    className="relative bg-white border-2 border-gray-200 rounded-2xl p-8 transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:border-blue-300 cursor-pointer"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center text-white mb-6 transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 mt-2">Get the right coverage with guidance from our experts.</p>
                  </div>
                </div>
              ))}

            {selectedCategory === 'cards' &&
              creditCardItems.map((name, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-indigo-300/60 via-violet-400/60 to-indigo-300/60 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
                  <div
                    onClick={() => setInquiry({ open: true, category: 'cards', itemName: name })}
                    className="relative bg-white border-2 border-gray-200 rounded-2xl p-8 transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:border-indigo-300 cursor-pointer"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-xl flex items-center justify-center text-white mb-6 transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110">
                      <CreditCard className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{name}</h3>
                    <p className="text-gray-600 mt-2">Apply with ease and enjoy great benefits.</p>
                  </div>
                </div>
              ))}
          </div>

          <div className="relative mt-12 overflow-hidden rounded-2xl bg-gradient-to-br from-sky-50 via-blue-50 to-white p-8 text-center ring-1 ring-sky-100">
            <div className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-sky-200/40 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-44 w-44 rounded-full bg-blue-200/40 blur-3xl" />

            <div className="relative">
              <div className="inline-flex items-center px-3 py-1 mb-3 rounded-full text-sm font-medium bg-white/70 backdrop-blur ring-1 ring-sky-200 text-sky-700">
                Trusted Partners
              </div>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-sky-50 to-blue-50 ring-1 ring-sky-100 text-sky-500 mb-3">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Powered by Leading Financial Institutions
              </h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                All our loan services are provided through our network of trusted Bank and NBFC partners, ensuring you get the best rates and terms.
              </p>

              {/* partner badges */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
                {[
                  'HDFC Bank',
                  'ICICI Bank',
                  'Axis Bank',
                  'Kotak Bank',
                  'SBI',
                  'IDFC FIRST',
                  'Bajaj Finserv',
                  'Tata Capital'
                ].map((name) => (
                  <div
                    key={name}
                    className="group relative"
                    title={name}
                  >
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-sky-300/50 via-blue-300/50 to-indigo-300/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[2px]" />
                    <div className="relative rounded-xl bg-white px-4 py-3 text-sm font-semibold text-gray-800 ring-1 ring-gray-100 shadow-sm transition-all duration-300 group-hover:ring-sky-300 group-hover:shadow-lg group-hover:-translate-y-0.5">
                      {name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <LoanFormModal
        isOpen={selectedLoan !== null}
        onClose={() => setSelectedLoan(null)}
        loanType={selectedLoan || 'personal'}
      />

      <InquiryModal
        isOpen={Boolean(inquiry?.open)}
        onClose={() => setInquiry(null)}
        category={(inquiry?.category || 'insurance') as 'insurance' | 'cards'}
        itemName={inquiry?.itemName || ''}
      />
    </>
  );
}
