import { Home, Car, GraduationCap, Briefcase, CreditCard, Building2, CircleDollarSign } from 'lucide-react';
import { useState } from 'react';
import LoanFormModal from './LoanFormModal';

type LoanType = 'personal' | 'business';
type Service = {
  icon: JSX.Element;
  title: string;
  description: string;
  features: string[];
  type: LoanType;
};

export default function ServicesSection() {
  const [selectedLoan, setSelectedLoan] = useState<LoanType | null>(null);

  const services: Service[] = [
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: 'Personal Loan',
      description: 'Quick personal loans with minimal documentation for all your immediate needs.',
      features: ['Up to ₹25 Lakhs', 'Flexible tenure', 'Quick approval'],
      type: 'personal'
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Business Loan',
      description: 'Fuel your business growth with customized business loan solutions.',
      features: ['Up to ₹1 Crore', 'Competitive rates', 'Easy documentation'],
      type: 'business'
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Home Loan',
      description: 'Make your dream home a reality with our affordable home loan options.',
      features: ['Low interest rates', 'Long tenure', 'Tax benefits'],
      type: 'personal'
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: 'Car Loan',
      description: 'Drive your dream car home with our attractive car loan schemes.',
      features: ['Up to 90% funding', 'Quick disbursal', 'Flexible EMI'],
      type: 'personal'
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: 'Used Car Loan',
      description: 'Get financing for pre-owned vehicles with easy approval process.',
      features: ['Up to 80% funding', 'Instant approval', 'Low rates'],
      type: 'personal'
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'Education Loan',
      description: 'Invest in your future with our comprehensive education loan options.',
      features: ['Cover full fees', 'Moratorium period', 'Tax benefits'],
      type: 'personal'
    },
    {
      icon: <CircleDollarSign className="w-8 h-8" />,
      title: 'Overdraft Facility',
      description: 'Access funds whenever you need with our flexible overdraft solutions.',
      features: ['Instant access', 'Pay for usage', 'Revolving credit'],
      type: 'business'
    }
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group relative" style={{ transitionDelay: `${index * 50}ms` }}>
                {/* Animated gradient frame */}
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-sky-300/60 via-blue-400/60 to-sky-300/60 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />

                <div
                  onClick={() => setSelectedLoan(service.type)}
                  className="relative bg-white border-2 border-gray-200 rounded-2xl p-8 transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:border-sky-300 cursor-pointer"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-blue-500 rounded-xl flex items-center justify-center text-white mb-6 transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 bg-sky-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="mt-6 w-full bg-gradient-to-r from-sky-400 to-blue-500 text-white py-3 rounded-xl font-semibold shadow-md ring-2 ring-sky-400/30 hover:ring-sky-500/50 hover:shadow-lg transition-all duration-200 hover:scale-[1.02]">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-sky-50 to-blue-50 rounded-xl p-8 text-center">
            <Building2 className="w-12 h-12 text-sky-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Powered by Leading Financial Institutions
            </h3>
            <p className="text-gray-600">
              All our loan services are provided through our network of trusted Bank and NBFC partners, ensuring you get the best rates and terms.
            </p>
          </div>
        </div>
      </section>

      <LoanFormModal
        isOpen={selectedLoan !== null}
        onClose={() => setSelectedLoan(null)}
        loanType={selectedLoan || 'personal'}
      />
    </>
  );
}
