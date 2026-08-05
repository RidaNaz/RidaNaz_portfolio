import Certificates from "../components/main/Certificates";
import Experience from "../components/main/Experience";
import Hero from "../components/main/Hero";
import HomeHighlights from "../components/main/HomeHighlights";
import HomepageFAQ, { FinalCTA } from "../components/main/HomepageFAQ";
import PortfolioPreview from "../components/main/PortfolioPreview";
import Services from "../components/main/Services";
import Skills from "../components/main/Skills";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What types of AI systems does Rida Naz build?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rida builds agentic workflows, voice AI agents, RAG knowledge systems, AI integrations, internal automation tools, and full stack SaaS products around AI use cases.",
      },
    },
    {
      "@type": "Question",
      name: "Can Rida Naz handle both frontend and backend work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Her common stack includes Next.js, React, TypeScript, FastAPI, PostgreSQL, Docker, cloud deployment, APIs, and AI orchestration tools.",
      },
    },
    {
      "@type": "Question",
      name: "Does Rida Naz build voice AI agents?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. She has hands-on platform experience with LiveKit, SIP/WebRTC, BYOC telephony, Twilio, Telnyx, backend orchestration, and real-time agent workflows.",
      },
    },
  ],
};

export default function Home() {
  return (
    <main className="h-full w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="flex flex-col">
        <Hero />
        <HomeHighlights />
        <PortfolioPreview />
        <Skills />
        <Services />
        <Experience />
        <Certificates />
        <HomepageFAQ />
        <FinalCTA />
      </div>
    </main>
  );
}
