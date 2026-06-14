import type { Metadata } from "next";
import { skillGroups } from "@/constants/profile-pages";

export const metadata: Metadata = {
  title: "Skills | Rida Naz",
  description:
    "Explore Rida Naz's skills across Next.js, React, TypeScript, FastAPI, Python, Agentic AI, LangGraph, LiveKit, MCP, RAG, Docker, and cloud systems.",
  alternates: {
    canonical: "https://www.ridanaz.com/skills",
  },
};

export default function SkillsPage() {
  return (
    <main className="min-h-screen px-6 pt-32 pb-24 text-white">
      <section className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
            Skills
          </p>
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Technical skills for agentic AI and full stack product work.
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            My skill set combines frontend engineering, backend architecture,
            real-time Voice AI, RAG systems, MCP tools, cloud deployment, and
            SEO-aware product development.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-lg border border-white/10 bg-[#0c0e23]/70 p-6 backdrop-blur-xl"
            >
              <h2 className="text-2xl font-bold">{group.title}</h2>
              <p className="mt-4 leading-7 text-gray-300">{group.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-sm text-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
