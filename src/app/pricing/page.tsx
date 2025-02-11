import PageHeader from "../components/PageHeader";
import PricingCardSection from "../components/PricingCardSection";
import PricingSection from "../components/PricingSection";
import CTASection from "../components/CTASection";

export default function pricing() {
    return (
      <>
        <PageHeader 
          title="Pricing" 
          subtitle="We provide innovative solution for your hobby needs." 
        />
        <PricingCardSection />
        <PricingSection />
        <CTASection />
      </>
    );
}