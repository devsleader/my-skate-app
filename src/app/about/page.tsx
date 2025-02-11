import PageHeader from "../components/PageHeader";
import AboutSection from "../components/AboutSection";
import SkateCourseSection1 from "../components/SkateCourseSection1";
import SkateCourseSection2 from "../components/SkateCourseSection2";
import StatsSection from "../components/StatsSection";
import CTASection from "../components/CTASection";


export default function About() {
    return (
      <>
        <PageHeader 
          title="ABOUT US" 
          subtitle="We provide innovative solution for your hobby needs." 
        />
        <AboutSection /> 
        <SkateCourseSection1 />
        <StatsSection />
        <SkateCourseSection2 />
        <CTASection />
      </>
    );
}