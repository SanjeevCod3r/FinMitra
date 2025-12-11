import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import HowItWorksSection from '../components/HowItWorksSection';
import CallToActionSection from '../components/CallToActionSection';
// import StatsSection from '../components/StatsSection';

interface HomeProps {
  onNavigate: (section: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div>
      <HeroSection onNavigate={onNavigate} />
      <FeaturesSection />
      <AboutSection />
      <ServicesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CallToActionSection />
      <FAQSection />
    </div>
  );
}
