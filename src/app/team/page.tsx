import PageHeader from "../components/PageHeader";
import TeamMembers from "../components/TeamMembers";
import TeamSection from "../components/TeamSection";

export default function Team() {
    return (
      <>
        <PageHeader 
          title="Team" 
          subtitle="Meet the team" 
        />
        <TeamSection />
        <TeamMembers />
      </>
    );
}