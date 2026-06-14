import type { Metadata } from "next";
import Link from "next/link";
import { resumeHighlights, timeline } from "@/constants/profile-pages";

export const metadata: Metadata = {
  title: "About | Rida Naz",
  description:
    "Learn about Rida Naz, a Karachi-based Full Stack Developer and Agentic AI Engineer building Voice AI, agentic workflows, and SaaS platforms.",
  alternates: {
    canonical: "https://www.ridanaz.com/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 pt-32 pb-24 text-white">
      <section className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
              About Me
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              I build AI products where agents, voice, and full stack systems
              meet.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              I&apos;m Rida Naz, a Full Stack Developer and Agentic AI Engineer
              based in Karachi, Pakistan. My work focuses on practical AI:
              systems that connect to tools, talk to users, retrieve trusted
              knowledge, and support real business workflows.
            </p>
            <p className="mt-5 text-lg leading-8 text-gray-300">
              As a founding team member at TalkifAI, I work across product,
              infrastructure, and implementation, from LiveKit voice pipelines
              and SIP telephony to RAG knowledge bases and scalable web
              experiences.
            </p>
          </div>

          <aside className="rounded-lg border border-white/10 bg-[#0c0e23]/70 p-6 backdrop-blur-xl">
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

        <div className="mt-16">
          <h2 className="text-3xl font-bold">Current Focus</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {["Voice AI agents", "Agentic workflows", "Scalable SaaS platforms"].map(
              (focus) => (
                <div
                  key={focus}
                  className="rounded-lg border border-white/10 bg-white/[0.04] p-6"
                >
                  <p className="text-lg font-semibold text-white">{focus}</p>
                </div>
              )
            )}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold">Experience Timeline</h2>
          <div className="mt-8 space-y-5">
            {timeline.map((item) => (
              <article
                key={`${item.role}-${item.company}`}
                className="rounded-lg border border-white/10 bg-[#0c0e23]/70 p-6"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-pink-300">
                  {item.period}
                </p>
                <h3 className="mt-3 text-2xl font-bold">{item.role}</h3>
                <p className="mt-1 font-semibold text-cyan-200">{item.company}</p>
                <p className="mt-4 leading-7 text-gray-300">{item.details}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-wrap gap-4">
          <Link
            href="/resume"
            className="rounded-lg bg-white px-5 py-3 font-semibold text-[#030014] transition hover:bg-cyan-100"
          >
            View Resume
          </Link>
          <Link
            href="/contact"
            className="rounded-lg border border-white/20 px-5 py-3 font-semibold text-white transition hover:border-emerald-300/60"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </main>
  );
}
