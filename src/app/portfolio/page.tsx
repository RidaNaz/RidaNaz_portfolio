import type { Metadata } from "next";
import RecentProjects from "@/components/main/RecentProjects";

export const metadata: Metadata = {
  title: "Portfolio | Rida Naz",
  description:
    "Explore Rida Naz's portfolio of Agentic AI, Voice AI, full stack SaaS, automation, RAG, and custom GPT projects.",
  alternates: {
    canonical: "https://www.ridanaz.com/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen px-2 pt-24 pb-20">
      <section className="mx-auto max-w-5xl px-4 pt-10 text-center text-white">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-pink-300">
          Portfolio
        </p>
        <h1 className="text-4xl font-bold leading-tight md:text-6xl">
          Production AI systems, SaaS platforms, and full stack experiments.
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
          A focused collection of my work across Voice AI, agentic workflows,
          automation platforms, RAG experiences, and modern web applications.
        </p>
      </section>

      <RecentProjects />
    </main>
  );
}
