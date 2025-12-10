import { Clock, Shield, DollarSign, HeadphonesIcon, FileCheck, Sparkles } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Quick Approval',
      description: 'Get your loan approved in as little as 24 hours with our streamlined process.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: '100% Secure',
      description: 'Bank-grade security ensures your personal and financial data is always protected.'
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Competitive Rates',
      description: 'Access the best interest rates through our network of trusted bank and NBFC partners.'
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8" />,
      title: '24/7 Support',
      description: 'Our dedicated team is always available to assist you with your loan requirements.'
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: 'Minimal Documentation',
      description: 'Simple paperwork and easy verification process to get you started quickly.'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Flexible Options',
      description: 'Customized loan solutions tailored to your specific financial needs and goals.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Finmitra?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive financial solutions with unmatched service quality and customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              {/* Animated gradient frame */}
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-sky-300/60 via-blue-400/60 to-sky-300/60 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />

              <div className="relative rounded-2xl p-8 bg-gradient-to-br from-sky-50 to-blue-50 border border-gray-100 shadow-sm transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-2xl">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-sky-400 to-blue-500 text-white flex items-center justify-center mb-6 transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105">
                  <span className="drop-shadow-sm">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Bottom accent line that slides in */}
                <span className="pointer-events-none absolute left-8 right-8 bottom-6 h-0.5 bg-gradient-to-r from-sky-400 to-blue-500 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
