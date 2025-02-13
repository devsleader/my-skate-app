import PageHeader from "../components/PageHeader";
import FAQ2Section from "../team/FAQ2Section";
import ServicesCardSection from "../components/ServicesCardSection";

export default function FAQ() {
    return (
      <>
        <PageHeader 
          title="FAQ" 
          subtitle="Frequently asked questions" 
        />
        <FAQ2Section />
        <ServicesCardSection />
      </>
    );
}