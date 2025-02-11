
import Hero from "./components/Hero";
import PricingSection from "./components/PricingSection";
import ServiceSection from './components/ServiceSection';
import Class from './components/Class'
import TestimonialsSection from "./components/TestimonialsSection";
import SkateCourseSection1 from "./components/SkateCourseSection1";
import SkateCourseSection2 from "./components/SkateCourseSection2";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceSection />
      <PricingSection />
      <SkateCourseSection1 />
      <SkateCourseSection2 />
      <TestimonialsSection />
      <Class />
    </>
  );
}
