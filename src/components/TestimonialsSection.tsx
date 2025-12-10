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
    <section className="py-20 bg-gradient-to-br from-sky-50 via-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Finmitra for their financial needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <Quote className="text-sky-400 mb-4" size={32} />

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
