import PageHeader from "../components/PageHeader";
import ServiceSection from "../components/ServiceSection";
import LogoCarousel from "../components/LogoCarousel";
import SkateboardServices from "../components/SkateboardServices";
import Class from "../components/Class";

export default function service() {
    return (
      <>
        <PageHeader 
          title="Service" 
          subtitle="We provide innovative solution for your hobby needs." 
        />
        <ServiceSection />
        <LogoCarousel />
        <SkateboardServices />
        <Class />
      </>
    );
}