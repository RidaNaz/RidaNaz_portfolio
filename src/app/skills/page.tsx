import type { Metadata } from "next";
import Link from "next/link";
import {
  skillGroups,
  skillHighlights,
  skillWorkflows,
} from "@/constants/profile-pages";

export const metadata: Metadata = {
  title: "Skills | Rida Naz",
  description:
    "Explore Rida Naz's skills across Next.js, React, TypeScript, FastAPI, Python, Agentic AI, LangGraph, LiveKit, MCP, RAG, Docker, cloud systems, and Agentic SEO.",
  alternates: {
    canonical: "https://www.ridanaz.com/skills",
  },
};

export default function SkillsPage() {
  return (
    <main className="min-h-screen px-6 pt-32 pb-24 text-white">
      <section className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
              Skills
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Technical skills for agentic AI, voice systems, and full stack
              products.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              My skill set is shaped by production work: building Voice AI
              infrastructure, tool-using agents, SaaS interfaces, APIs,
              automation systems, and AI-readable portfolio architecture.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {skillHighlights.map((highlight) => (
              <article
                key={highlight.label}
                className="rounded-lg border border-white/10 bg-[#0c0e23]/70 p-5"
              >
                <p className="text-sm font-semibold text-cyan-200">
                  {highlight.label}
                </p>
                <p className="mt-2 text-2xl font-bold">{highlight.value}</p>
                <p className="mt-3 text-sm leading-6 text-gray-300">
                  {highlight.note}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-300">
                Practical Workflows
              </p>
              <h2 className="mt-3 text-3xl font-bold">
                How these skills show up in real projects.
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="w-fit rounded-lg border border-pink-300/40 bg-pink-300/10 px-5 py-3 font-semibold text-pink-100 transition hover:bg-pink-300/20"
            >
              View Portfolio
            </Link>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {skillWorkflows.map((workflow) => (
              <article
                key={workflow.title}
                className="rounded-lg border border-white/10 bg-white/[0.04] p-6"
              >
                <h3 className="text-2xl font-bold">{workflow.title}</h3>
                <p className="mt-4 leading-7 text-gray-300">{workflow.result}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {workflow.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-white/10 bg-[#030014]/70 px-3 py-2 text-sm text-gray-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Skill Matrix
          </p>
          <h2 className="mt-3 text-3xl font-bold">
            Tools, strengths, and implementation areas.
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-lg border border-white/10 bg-[#0c0e23]/70 p-6 backdrop-blur-xl transition hover:border-emerald-300/50"
              >
                <h3 className="text-2xl font-bold">{group.title}</h3>
                <p className="mt-4 leading-7 text-gray-300">
                  {group.description}
                </p>

                <div className="mt-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-200">
                    Tools
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-sm text-gray-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-pink-200">
                    Strengths
                  </p>
                  <ul className="mt-3 space-y-3 text-sm text-gray-300">
                    {group.strengths.map((strength) => (
                      <li key={strength} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-300" />
                        <span>{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-lg border border-white/10 bg-white/[0.04] p-8 md:flex md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold">Want to see the skills in use?</h2>
            <p className="mt-3 max-w-2xl text-gray-300">
              The portfolio page connects these tools to actual projects,
              including TalkifAI, AI-powered todo workflows, and full stack
              automation platforms.
            </p>
          </div>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-lg bg-white px-5 py-3 font-semibold text-[#030014] transition hover:bg-emerald-100 md:mt-0"
          >
            Work With Me
          </Link>
        </div>
      </section>
    </main>
  );
}
