import type { Metadata } from "next";
import Link from "next/link";
import { serviceOffers } from "@/constants/profile-pages";

export const metadata: Metadata = {
  title: "Services | Voice AI, Agentic Workflows & Full Stack AI SaaS",
  description:
    "Hire Rida Naz for Voice AI agents, agentic workflow automation, RAG knowledge assistants, full stack AI SaaS MVPs, AI integrations, and agentic SEO.",
  alternates: {
    canonical: "https://www.ridanaz.com/services",
  },
  openGraph: {
    title: "Services | Rida Naz AI Engineering",
    description:
      "Voice AI agents, agentic workflows, RAG systems, full stack AI SaaS, integrations, and AI visibility.",
    url: "https://www.ridanaz.com/services",
    images: ["https://www.ridanaz.com/og"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Rida Naz AI Engineering",
    description:
      "Voice AI agents, agentic workflows, RAG systems, full stack AI SaaS, integrations, and AI visibility.",
    images: ["https://www.ridanaz.com/og"],
  },
};

const process = [
  "Clarify the business workflow, users, tools, and constraints.",
  "Design the AI architecture, product flow, integrations, and deployment path.",
  "Build the interface, backend, agent workflow, data layer, and operational handoff.",
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen px-6 pb-24 pt-32 text-white">
      <section className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Services
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              AI systems and SaaS products built around real workflows.
            </h1>
          </div>
          <p className="text-lg leading-8 text-gray-300">
            I help teams move from AI idea to useful product by designing the
            workflow, building the full stack system, connecting tools and data,
            and keeping the experience clear for real users.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {serviceOffers.map((service) => (
            <article key={service.title} className="rounded-lg border border-white/10 bg-[#0c0e23]/70 p-6 transition hover:-translate-y-1 hover:border-cyan-300/50">
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

        <div className="mt-20 grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
              Engagement Style
            </p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Practical, product-minded implementation.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {process.map((step, index) => (
              <article key={step} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                <p className="text-sm font-semibold text-cyan-200">0{index + 1}</p>
                <p className="mt-3 leading-7 text-gray-300">{step}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-14 rounded-lg border border-white/10 bg-white/[0.04] p-8 md:flex md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold">Have a project in mind?</h2>
            <p className="mt-3 max-w-2xl text-gray-300">
              Share the workflow, product goal, users, and systems involved. I can help shape the technical path and implementation plan.
            </p>
          </div>
          <Link href="/contact" className="mt-6 inline-flex rounded-lg bg-white px-5 py-3 font-semibold text-[#030014] transition hover:bg-cyan-100 md:mt-0">
            Work With Me
          </Link>
        </div>
      </section>
    </main>
  );
}
