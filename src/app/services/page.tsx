import type { Metadata } from "next";
import Link from "next/link";
import { serviceOffers } from "@/constants/profile-pages";

export const metadata: Metadata = {
  title: "Services | Rida Naz",
  description:
    "Explore Rida Naz's services in Agentic AI, Voice AI agents, full stack SaaS development, RAG systems, MCP integrations, and agentic SEO.",
  alternates: {
    canonical: "https://www.ridanaz.com/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen px-6 pt-32 pb-24 text-white">
      <section className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Services
          </p>
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            AI systems and full stack products built for real workflows.
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            I help teams design, build, and ship agentic AI products, voice
            agents, RAG systems, and modern SaaS platforms using practical,
            production-focused engineering.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {serviceOffers.map((service) => (
            <article
              key={service.title}
              className="rounded-lg border border-white/10 bg-[#0c0e23]/70 p-6 backdrop-blur-xl transition hover:border-cyan-300/50"
            >
              <h2 className="text-2xl font-bold text-white">{service.title}</h2>
              <p className="mt-4 leading-7 text-gray-300">{service.summary}</p>
              <ul className="mt-6 space-y-3 text-sm text-gray-300">
                {service.outcomes.map((outcome) => (
                  <li key={outcome} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-pink-400" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-lg border border-white/10 bg-white/[0.04] p-8 md:flex md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold">Have a project in mind?</h2>
            <p className="mt-3 max-w-2xl text-gray-300">
              Share the workflow, product goal, or AI use case you want to
              build. I can help shape the technical path and implementation.
            </p>
          </div>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-lg border border-cyan-300/40 bg-cyan-300/10 px-5 py-3 font-semibold text-cyan-100 transition hover:bg-cyan-300/20 md:mt-0"
          >
            Work With Me
          </Link>
        </div>
      </section>
    </main>
  );
}
