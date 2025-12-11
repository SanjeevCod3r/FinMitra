import { Home, Car, Briefcase, CreditCard, Building2, Shield } from 'lucide-react';
import { useEffect, useState } from 'react';
import personalLoanImg from '../../asset/personal_loan.png';
import businessLoanImg from '../../asset/business_loan.png';
import usedCarLoanImg from '../../asset/used_car_loan.png';
import homeLoanImg from '../../asset/home_loan.png';
import carLoanImg from '../../asset/car_loan.png';
import hdfcCardImg from '../../asset/hdfc_card-removebg-preview.png';
import sbiCardImg from '../../asset/sbi_card-removebg-preview.png';
import indusindCardImg from '../../asset/induslnd_card-removebg-preview.png';
import idfcCardImg from '../../asset/idfc_card-removebg-preview.png';
import bobCardImg from '../../asset/bob_card-removebg-preview.png';
import LoanFormModal from './LoanFormModal';
import InquiryModal from './InquiryModal';

type LoanType = 'personal' | 'business';

export default function ServicesSection() {
  const [selectedLoan, setSelectedLoan] = useState<LoanType | null>(null);
  type Category = 'loans' | 'insurance' | 'cards';
  const [selectedCategory, setSelectedCategory] = useState<Category>('loans');
  const [searchQuery, setSearchQuery] = useState('');
  const [loanFilter, setLoanFilter] = useState<'all' | 'personal' | 'business'>('all');
  const [cardFilter, setCardFilter] = useState<'all' | 'hdfc' | 'sbi' | 'indusind' | 'idfc' | 'bob'>('all');

  const [inquiry, setInquiry] = useState<{ open: boolean; category: 'insurance' | 'cards'; itemName: string } | null>(null);

  // Initialize category from hash (#loans | #insurance | #credit-cards)
  useEffect(() => {
    const hash = (window.location.hash || '').toLowerCase();
    if (hash.includes('insurance')) setSelectedCategory('insurance');
    else if (hash.includes('credit')) setSelectedCategory('cards');
    else if (hash.includes('loan')) setSelectedCategory('loans');
  }, []);

  const loanItems = [
    { icon: <CreditCard className="w-8 h-8" />, title: 'Personal Loan', type: 'personal' as const, desc: 'Quick approvals and flexible tenure.', image: personalLoanImg },
    { icon: <Briefcase className="w-8 h-8" />, title: 'Business Loan', type: 'business' as const, desc: 'Fuel growth with tailored solutions.', image: businessLoanImg },
    { icon: <Car className="w-8 h-8" />, title: 'Used Car Loan', type: 'personal' as const, desc: 'Easy finance for pre-owned cars.', image: usedCarLoanImg },
    { icon: <Home className="w-8 h-8" />, title: 'Home Loan', type: 'personal' as const, desc: 'Affordable rates, long tenure.', image: homeLoanImg },
    { icon: <Car className="w-8 h-8" />, title: 'Car Loan', type: 'personal' as const, desc: 'Up to 90% funding with quick disbursal.', image: carLoanImg },
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
    { name: 'HDFC Credit Card', image: hdfcCardImg, key: 'hdfc' as const },
    { name: 'SBI Credit Card', image: sbiCardImg, key: 'sbi' as const },
    { name: 'Indusind Credit Card', image: indusindCardImg, key: 'indusind' as const },
    { name: 'IDFC Credit Card', image: idfcCardImg, key: 'idfc' as const },
    { name: 'Bank of Baroda Credit Card', image: bobCardImg, key: 'bob' as const },
  ];

  const normalized = (s: string) => s.toLowerCase().trim();
  const q = normalized(searchQuery);
  const filteredLoanItems = loanItems.filter((i) => {
    const matchesType = loanFilter === 'all' ? true : i.type === loanFilter;
    const matchesQuery = !q || normalized(i.title + ' ' + i.desc).includes(q);
    return matchesType && matchesQuery;
  });
  const filteredInsuranceItems = insuranceItems.filter((i) => {
    const matchesQuery = !q || normalized(i.title).includes(q);
    return matchesQuery;
  });
  const filteredCardItems = creditCardItems.filter((i) => {
    const matchesKey = cardFilter === 'all' ? true : i.key === cardFilter;
    const matchesQuery = !q || normalized(i.name).includes(q);
    return matchesKey && matchesQuery;
  });
  const hasResults =
    (selectedCategory === 'loans' && filteredLoanItems.length > 0) ||
    (selectedCategory === 'insurance' && filteredInsuranceItems.length > 0) ||
    (selectedCategory === 'cards' && filteredCardItems.length > 0);

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

          {/* Empty state */}
          {!hasResults && (
            <div className="mt-6 flex flex-col items-center justify-center text-center py-10 rounded-2xl border-2 border-dashed border-gray-200 bg-white">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-100 to-blue-100 text-sky-600 grid place-items-center mb-3">🔎</div>
              <h4 className="text-lg font-bold text-gray-900 mb-1">No results found</h4>
              <p className="text-gray-600 max-w-md">Try adjusting your search or clearing filters to see more options.</p>
            </div>
          )}

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

          {/* Search + Filters */}
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between mb-6">
            <div className="relative w-full sm:max-w-md">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services..."
                className="w-full rounded-xl border border-gray-200 px-4 py-3 pr-10 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-300"
              />
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                🔎
              </span>
            </div>
            {selectedCategory === 'loans' && (
              <select
                value={loanFilter}
                onChange={(e) => setLoanFilter(e.target.value as any)}
                className="w-full sm:w-56 rounded-xl border border-gray-200 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-300"
              >
                <option value="all">All Loans</option>
                <option value="personal">Personal Loans</option>
                <option value="business">Business Loans</option>
              </select>
            )}
            {selectedCategory === 'cards' && (
              <select
                value={cardFilter}
                onChange={(e) => setCardFilter(e.target.value as any)}
                className="w-full sm:w-56 rounded-xl border border-gray-200 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
              >
                <option value="all">All Cards</option>
                <option value="hdfc">HDFC</option>
                <option value="sbi">SBI</option>
                <option value="indusind">INDUSIND</option>
                <option value="idfc">IDFC</option>
                <option value="bob">Bank of Baroda</option>
              </select>
            )}
          </div>

          {/* Filtered Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {selectedCategory === 'loans' &&
              filteredLoanItems.map((item, index) => (
                <div key={index} className="group relative" style={{ transitionDelay: `${index * 50}ms` }}>
                  <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-sky-300/60 via-blue-400/60 to-sky-300/60 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
                  <div
                    onClick={() => setSelectedLoan(item.type)}
                    className="relative bg-white border-2 border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:border-sky-300 cursor-pointer"
                  >
                    <div className="relative h-40 w-full overflow-hidden">
                      <img src={item.image as unknown as string} alt={item.title} className="object-cover w-full h-full transition-transform duration-500 ease-out group-hover:scale-105" />
                      <div className="pointer-events-none absolute inset-0 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700 ease-out">
                        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white/0 via-white/30 to-white/0 skew-x-12" />
                      </div>
                      <div className="absolute top-3 left-3 w-12 h-12 bg-gradient-to-r from-sky-400 to-blue-500 rounded-xl flex items-center justify-center text-white shadow transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110">
                        {item.icon}
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                      <button className="relative overflow-hidden mt-6 w-full bg-gradient-to-r from-sky-400 to-blue-500 text-white py-3 rounded-xl font-semibold shadow-md ring-2 ring-sky-400/30 hover:ring-sky-500/50 hover:shadow-lg transition-all duration-200 hover:scale-[1.02]">
                        <span className="relative z-10">Apply Now</span>
                        <span className="pointer-events-none absolute inset-y-0 left-[-30%] w-1/3 bg-white/20 blur-md transform -skew-x-12 transition-transform duration-500 group-hover:translate-x-[260%]" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

            {selectedCategory === 'insurance' &&
              filteredInsuranceItems.map((item, index) => (
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
              filteredCardItems.map((card, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-indigo-300/60 via-violet-400/60 to-indigo-300/60 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
                  <div
                    onClick={() => setInquiry({ open: true, category: 'cards', itemName: card.name })}
                    className="relative bg-white border-2 border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:border-indigo-300 cursor-pointer"
                  >
                    <div className="relative h-40 w-full bg-gradient-to-br from-indigo-50 to-violet-50 overflow-hidden">
                      <img src={card.image as unknown as string} alt={card.name} className="object-contain w-full h-full p-4 transition-transform duration-500 ease-out group-hover:scale-105" />
                      <div className="pointer-events-none absolute inset-0 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700 ease-out">
                        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white/0 via-white/30 to-white/0 skew-x-12" />
                      </div>
                      <div className="absolute top-3 left-3 w-12 h-12 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-xl flex items-center justify-center text-white shadow transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110">
                        <CreditCard className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-xl font-bold text-gray-900">{card.name}</h3>
                      <p className="text-gray-600 mt-2">Apply with ease and enjoy great benefits.</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <div className="relative mt-12 overflow-hidden rounded-3xl bg-gradient-to-br from-sky-50 via-blue-50 to-white p-10 text-center ring-1 ring-sky-100">
            <div className="pointer-events-none absolute -top-16 -left-10 h-56 w-56 rounded-full bg-sky-200/40 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -right-10 h-60 w-60 rounded-full bg-blue-200/40 blur-3xl" />
            <div className="pointer-events-none absolute -top-10 right-1/4 h-48 w-48 rounded-full bg-fuchsia-200/40 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-1/4 h-48 w-48 rounded-full bg-emerald-200/40 blur-3xl" />

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

              {/* partner badges - 3D styled */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
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
                  <div key={name} className="group relative" title={name}>
                    <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-sky-300/50 via-blue-400/50 to-indigo-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                    <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-fuchsia-300/40 via-rose-300/40 to-amber-300/40 opacity-0 group-hover:opacity-90 transition-opacity duration-500 blur-md" />
                    <div className="absolute -bottom-2 left-3 right-3 h-3 rounded-xl bg-gradient-to-b from-sky-300/30 to-transparent blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div
                      className="relative rounded-2xl bg-white/90 px-5 py-4 text-sm font-semibold text-gray-800 ring-1 ring-gray-100 shadow-[0_8px_18px_-8px_rgba(14,165,233,0.25)] transition-all duration-300 will-change-transform transform group-hover:-translate-y-1.5 group-hover:rotate-[1deg] group-hover:shadow-[0_22px_46px_-12px_rgba(168,85,247,0.45)] group-hover:ring-indigo-300"
                    >
                      <span className="pointer-events-none absolute inset-y-0 left-[-30%] w-1/3 bg-white/20 blur-md transform -skew-x-12 transition-transform duration-700 ease-out group-hover:translate-x-[260%]" />
                      <span className="relative z-10">{name}</span>
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
