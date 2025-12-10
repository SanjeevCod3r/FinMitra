import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '918178625027';
  const message = 'Hello! I would like to inquire about loan services.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:bg-green-600 transition-all duration-300 hover:scale-110 animate-pulse-slow"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
}
