import PageHeader from "../components/PageHeader";
import ContactSection from "../components/ContactSection";
import ServicesCardSection from "../components/ServicesCardSection";
import FAQSection from "../components/FAQSection";

export default function contact() {
    return (
      <>
        <PageHeader 
          title="Contact" 
          subtitle="We provide innovative solution for your hobby needs." 
        />
              <ContactSection />
              <ServicesCardSection />
              <FAQSection />
           
      </>
    );
}