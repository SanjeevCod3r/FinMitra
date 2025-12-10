import AboutSection from '../components/AboutSection';

export default function About() {
  return (
    <div className="pt-20">
      <AboutSection />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide us in serving you better
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
                T
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Transparency</h3>
              <p className="text-gray-600">
                Complete transparency in all our processes, terms, and conditions
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
                I
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Integrity</h3>
              <p className="text-gray-600">
                We uphold the highest standards of integrity in everything we do
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
                C
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Customer First</h3>
              <p className="text-gray-600">
                Your financial success and satisfaction are our top priorities
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
                E
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600">
                Commitment to excellence in service delivery and customer support
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-sky-50 via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Partner With Us?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-4xl font-bold text-sky-500 mb-4">01</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Expert Guidance
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our experienced financial advisors provide personalized guidance to help you make informed decisions about your loan requirements.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-4xl font-bold text-sky-500 mb-4">02</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Wide Network
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Access to 50+ leading banks and NBFCs ensures you get the best rates and terms tailored to your specific needs.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-4xl font-bold text-sky-500 mb-4">03</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Quick Processing
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Streamlined application process with digital documentation and quick approval turnaround times for your convenience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
