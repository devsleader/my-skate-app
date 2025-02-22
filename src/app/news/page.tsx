import BlogGrid from "../components/BlogGrid";
import PageHeader from "../components/PageHeader";

export default function News() {
    return (
      <>
        <PageHeader 
          title="News" 
          subtitle="Latest news and updates" 
        />
        <BlogGrid />
      </>
    );
}