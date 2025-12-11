import { X } from 'lucide-react';
import React, { useState } from 'react';

type InquiryCategory = 'insurance' | 'cards';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: InquiryCategory;
  itemName: string;
}

export default function InquiryModal({ isOpen, onClose, category, itemName }: InquiryModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get('name') as string,
      phone: form.get('phone') as string,
      email: form.get('email') as string,
      category,
      itemName,
      message: form.get('message') as string,
      created_at: new Date().toISOString(),
    };

    try {
      setIsSubmitting(true);
      // TODO: integrate backend (Supabase or email) if desired
      console.log('Inquiry submitted', payload);
      alert('Thanks! Your inquiry has been submitted. We will contact you shortly.');
      onClose();
    } catch (err) {
      alert('There was an error submitting your inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 sm:p-6">
      <div className="group bg-white rounded-3xl shadow-2xl w-full mx-auto my-8 relative max-w-lg md:max-w-xl max-h-[85vh] overflow-y-auto transition-all duration-300 ring-1 ring-transparent hover:ring-sky-300/60 hover:shadow-[0_20px_50px_-12px_rgba(59,130,246,0.35)]">
        <button
          onClick={onClose}
          title="Close"
          aria-label="Close"
          className="absolute top-4 right-4 text-gray-500 bg-gray-100 rounded-full p-2 transition-all duration-200 ring-2 ring-transparent hover:ring-sky-300 hover:text-white hover:scale-105 hover:rotate-90 hover:bg-gradient-to-r hover:from-sky-400 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-sky-400"
        >
          <X size={22} />
        </button>

        <div className="p-6 sm:p-8">
          <div className="text-center mb-6">
            <div className="inline-flex items-center px-3 py-1 mb-3 rounded-full text-sm font-medium bg-white/70 backdrop-blur ring-1 ring-sky-200 text-sky-700">
              {category === 'insurance' ? 'Insurance Inquiry' : 'Credit Card Inquiry'}
            </div>
            <h2 className="text-2xl font-extrabold tracking-tight mb-1 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              {itemName}
            </h2>
            <p className="text-sm text-gray-600">Share your details and we will reach out shortly.</p>
          </div>

          <form onSubmit={handleSubmit} className="form-interactive space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name *</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent hover:border-sky-300"
                placeholder="Enter your full name"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  pattern="[0-9]{10}"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent hover:border-sky-300"
                  placeholder="10-digit mobile number"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent hover:border-sky-300"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
              <textarea
                name="message"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent hover:border-sky-300 resize-none"
                placeholder="Tell us your requirement (optional)"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-sky-400 to-blue-500 text-white py-3 rounded-xl font-semibold shadow-md ring-2 ring-sky-400/30 hover:ring-sky-500/50 hover:shadow-lg transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
