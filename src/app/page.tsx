
import Hero from "./components/Hero";
import PricingSection from "./components/PricingSection";
import ServiceSection from './components/ServiceSection';
import Class from './components/Class'
import TestimonialsSection from "./components/TestimonialsSection";
import SkateCourseSection from "./components/SkateCourseSection";
import AboutSection from "./components/AboutSection";
import StatsSection from "./components/StatsSection";
import CTASection from "./components/CTASection";
import LogoCarousel from "./components/LogoCarousel";
import SkateboardServices from "./components/SkateboardServices";
import PricingCardSection from "./components/PricingCardSection";
import ServicesCardSection from "./components/ServicesCardSection";
import ContactSection from "./components/ContactSection";
import FAQSection from "./components/FAQSection";
import BlogGrid from "./components/BlogGrid";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceSection />
      <PricingSection />
      <SkateCourseSection />
      <TestimonialsSection />
      <Class />
      <AboutSection /> 
      <StatsSection />
      <CTASection />
       <LogoCarousel />
      <SkateboardServices />
      <PricingCardSection />
      <ServicesCardSection />
      <ContactSection />
      <FAQSection />
      <BlogGrid />
    </>
  );
}
