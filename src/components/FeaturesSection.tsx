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
            <div
              key={index}
              className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-blue-500 rounded-lg flex items-center justify-center text-white mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
