import Certificates from "../components/main/Certificates";
import Experience from "../components/main/Experience";
import Hero from "../components/main/Hero";
import HomeHighlights from "../components/main/HomeHighlights";
import PortfolioPreview from "../components/main/PortfolioPreview";
import Services from "../components/main/Services";
import Skills from "../components/main/Skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <HomeHighlights />
        <Skills />
        <Experience />
        <PortfolioPreview />
        <Services />
        <Certificates />
      </div>
    </main>
  );
}
