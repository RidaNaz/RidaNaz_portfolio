import Certificates from "../components/main/Certificates";
import Hero from "../components/main/Hero";
import RecentProjects from "../components/main/RecentProjects";
import Services from "../components/main/Services";
import Skills from "../components/main/Skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <RecentProjects />
        <Services />
        {/* <Reviews /> */}
        <Certificates />
      </div>
    </main>
  );
}