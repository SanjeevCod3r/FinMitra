import { Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Business Owner',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'Finmitra made my business loan process incredibly smooth. Got approval within 24 hours with minimal documentation. Highly recommended!'
    },
    {
      name: 'Priya Sharma',
      role: 'Software Engineer',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'I needed a personal loan urgently and Finmitra delivered. The team was professional, rates were competitive, and the process was hassle-free.'
    },
    {
      name: 'Amit Patel',
      role: 'Entrepreneur',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'Best financial partner for home loans. They helped me find the perfect loan with the lowest interest rate. Thank you Finmitra team!'
    },
    {
      name: 'Sneha Reddy',
      role: 'Marketing Manager',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'Finmitra helped me finance my dream car with an amazing deal. The customer service was exceptional and the process was transparent.'
    },
    {
      name: 'Vikram Singh',
      role: 'Shop Owner',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'Got my business expansion loan approved quickly. The team understood my needs and provided the perfect solution. Excellent service!'
    },
    {
      name: 'Anita Desai',
      role: 'Teacher',
      image: 'https://images.pexels.com/photos/3796810/pexels-photo-3796810.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'Education loan for my daughter was processed smoothly. Very supportive team and great rates. Couldn\'t have asked for better service.'
    }
  ];

  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-br from-sky-50 via-blue-50 to-white overflow-hidden">
      {/* soft background blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 bg-sky-200/40 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-80 h-80 bg-blue-200/40 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full text-sm font-medium bg-white/70 backdrop-blur ring-1 ring-sky-200 text-sky-700">
            Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Finmitra for their financial needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="group relative">
              {/* gradient frame */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-300 via-blue-300 to-indigo-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[2px]" />
              <div className="relative bg-white rounded-2xl p-6 md:p-8 shadow-lg ring-1 ring-gray-100 transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2">
                {/* corner glow */}
                <div className="absolute -top-3 -right-3 w-16 h-16 bg-sky-400/10 rounded-full blur-xl" />

                {/* quote icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-sky-50 to-blue-50 ring-1 ring-sky-100 text-sky-500 mb-5 transition-transform duration-300 group-hover:scale-110">
                  <Quote size={26} />
                </div>

                {/* rating */}
                <div className="flex mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-yellow-400 fill-current drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)] transition-transform duration-200 group-hover:scale-110"
                    />
                  ))}
                </div>

                {/* text */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  “{t.text}”
                </p>

                {/* author */}
                <div className="flex items-center gap-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-sm transition-transform duration-300 group-hover:scale-105"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{t.name}</div>
                    <div className="text-sm text-gray-600">{t.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
