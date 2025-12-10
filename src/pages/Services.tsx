import ServicesSection from '../components/ServicesSection';

export default function Services() {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-sky-50 via-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Our Loan Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive financial solutions tailored to your needs, provided through our trusted network of Bank and NBFC partners
          </p>
        </div>
      </div>
      <ServicesSection />
    </div>
  );
}
