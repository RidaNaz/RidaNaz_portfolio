import type { Metadata } from "next";
import Link from "next/link";
import { resumeHighlights, timeline } from "@/constants/profile-pages";

export const metadata: Metadata = {
  title: "About Rida Naz | Agentic AI Engineer in Karachi",
  description:
    "Learn about Rida Naz, an Agentic AI Engineer and Full Stack Product Builder in Karachi building Voice AI, agentic workflows, RAG systems, and SaaS products.",
  alternates: {
    canonical: "https://www.ridanaz.com/about",
  },
  openGraph: {
    title: "About Rida Naz | Agentic AI Engineer",
    description:
      "Rida builds production AI systems, voice agents, RAG workflows, and full stack SaaS products.",
    url: "https://www.ridanaz.com/about",
    images: ["https://www.ridanaz.com/og"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Rida Naz | Agentic AI Engineer",
    description:
      "Rida builds production AI systems, voice agents, RAG workflows, and full stack SaaS products.",
    images: ["https://www.ridanaz.com/og"],
  },
};

const focusAreas = [
  {
    title: "Production AI Systems",
    description:
      "I focus on systems that connect models to tools, data, workflows, interfaces, and deployment environments.",
  },
  {
    title: "Voice AI Infrastructure",
    description:
      "My work includes LiveKit, SIP/WebRTC, BYOC telephony, Twilio, Telnyx, and backend orchestration for real conversations.",
  },
  {
    title: "Full Stack Product Execution",
    description:
      "I build the product layer around AI: interfaces, APIs, databases, dashboards, automations, and operational workflows.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 pb-24 pt-32 text-white">
      <section className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
              About
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              I build the product and infrastructure layer around practical AI.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              I am Rida Naz, an Agentic AI Engineer and Full Stack Product Builder
              based in Karachi, Pakistan. My work is centered on production AI:
              voice agents, agentic workflows, RAG systems, integrations, and SaaS
              platforms that solve real business problems.
            </p>
            <p className="mt-5 text-lg leading-8 text-gray-300">
              As a founding team member and Lead Engineer at TalkifAI, I work
              across product decisions, backend architecture, real-time voice
              infrastructure, telephony workflows, knowledge systems, and deployment.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/portfolio" className="rounded-lg bg-white px-5 py-3 font-semibold text-surface transition hover:bg-accent-soft/20">
                View Case Studies
              </Link>
              <Link href="/contact" className="rounded-lg border border-accent/40 bg-accent/10 px-5 py-3 font-semibold text-accent transition hover:bg-accent/20">
                Work With Me
              </Link>
            </div>
          </div>

          <aside className="rounded-lg border border-white/10 bg-surface-soft/70 p-6">
            <h2 className="text-2xl font-bold">Profile Snapshot</h2>
            <ul className="mt-6 space-y-4 text-gray-300">
              {resumeHighlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-300" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <div className="mt-20 grid gap-5 md:grid-cols-3">
          {focusAreas.map((area) => (
            <article key={area.title} className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
              <h2 className="text-2xl font-bold">{area.title}</h2>
              <p className="mt-4 leading-7 text-gray-300">{area.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-20">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-300">
            Experience
          </p>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Work shaped by shipped systems and technical ownership.
          </h2>
          <div className="mt-8 space-y-5">
            {timeline.map((item) => (
              <article key={`${item.role}-${item.company}`} className="rounded-lg border border-white/10 bg-surface-soft/70 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">{item.period}</p>
                <h3 className="mt-3 text-2xl font-bold">{item.role}</h3>
                <p className="mt-1 font-semibold text-white/80">{item.company}</p>
                <p className="mt-4 leading-7 text-gray-300">{item.details}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
