import { Target, Eye, Award, Users } from 'lucide-react';

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
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="About Finmitra"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-sky-400 to-blue-500 text-white p-6 rounded-xl shadow-xl">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">
              About Finmitra
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Finmitra is your trusted financial partner, dedicated to providing comprehensive loan solutions that empower individuals and businesses to achieve their dreams. With over 15 years of experience in the financial services industry, we have established ourselves as a leading facilitator of financial solutions.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We work with a network of 50+ banks and NBFCs to bring you the most competitive rates and flexible terms. Our mission is to simplify the loan process and make financial services accessible to everyone.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-gradient-to-r from-sky-400 to-blue-500 rounded-lg flex items-center justify-center text-white">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900">Our Mission</h3>
                <p className="text-sm text-gray-600">
                  To empower financial dreams through accessible, transparent, and customer-centric loan solutions.
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-12 h-12 bg-gradient-to-r from-sky-400 to-blue-500 rounded-lg flex items-center justify-center text-white">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900">Our Vision</h3>
                <p className="text-sm text-gray-600">
                  To be India's most trusted and preferred financial services partner.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
