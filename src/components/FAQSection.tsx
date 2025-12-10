import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What documents do I need to apply for a loan?',
      answer: 'Basic documents include PAN Card, Aadhaar Card, bank statements (last 6 months), salary slips (for personal loans), and business documents (for business loans). Specific requirements may vary based on the loan type.'
    },
    {
      question: 'How long does the loan approval process take?',
      answer: 'Most loan applications are processed within 24-48 hours. Once approved, the loan amount is typically disbursed within 3-5 business days, depending on the loan type and completeness of documentation.'
    },
    {
      question: 'What is the interest rate on loans?',
      answer: 'Interest rates vary based on the loan type, amount, tenure, and your credit profile. We offer competitive rates starting from 9.5% per annum. Contact us for personalized rates based on your requirements.'
    },
    {
      question: 'Can I prepay my loan without penalties?',
      answer: 'Yes, most of our loan products allow prepayment with minimal or no charges. However, terms may vary depending on the specific bank or NBFC partner. We recommend checking the specific terms during the application process.'
    },
    {
      question: 'What is the minimum and maximum loan amount?',
      answer: 'Loan amounts vary by type: Personal Loans (₹50,000 - ₹25 Lakhs), Business Loans (₹1 Lakh - ₹1 Crore), Home Loans (₹5 Lakhs - ₹5 Crores). The final amount depends on your eligibility and credit profile.'
    },
    {
      question: 'Do you charge any processing fees?',
      answer: 'Processing fees vary by loan type and lending partner, typically ranging from 1-3% of the loan amount. Some promotional offers may have reduced or zero processing fees. We ensure complete transparency in all charges.'
    },
    {
      question: 'What is the minimum CIBIL score required?',
      answer: 'Generally, a CIBIL score of 750 or above is preferred for quick approvals. However, we work with multiple lending partners, so loans may be available even with lower scores, subject to additional verification.'
    },
    {
      question: 'Can I apply for multiple loans simultaneously?',
      answer: 'While it\'s possible to apply for multiple loans, we recommend discussing your complete financial requirements with our advisors. They can help you choose the best combination of loan products suited to your needs.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our loan services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`text-sky-500 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  size={24}
                />
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6 text-gray-700 leading-relaxed animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-sky-400 to-blue-500 rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-2">Still have questions?</h3>
          <p className="mb-4">Our team is here to help you with any queries</p>
          <a
            href="tel:8178625027"
            className="inline-block bg-white text-sky-600 px-8 py-3 rounded-lg font-semibold hover:shadow-xl transition-all"
          >
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
