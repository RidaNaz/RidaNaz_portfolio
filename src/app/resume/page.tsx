import type { Metadata } from "next";
import Link from "next/link";
import { profileLinks, resumeHighlights, skillGroups, timeline } from "@/constants/profile-pages";

export const metadata: Metadata = {
  title: "Resume & CV | Rida Naz",
  description:
    "Download Rida Naz's resume and CV, and review her experience in Agentic AI, Voice AI, Next.js, FastAPI, LiveKit, and full stack development.",
  alternates: {
    canonical: "https://www.ridanaz.com/resume",
  },
};

export default function ResumePage() {
  return (
    <main className="min-h-screen px-6 pt-32 pb-24 text-white">
      <section className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-pink-300">
            Resume / CV
          </p>
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Resume, CV, and technical profile.
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Download the latest PDF documents or review the structured profile
            summary below for quick hiring and collaboration context.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href={profileLinks.resume}
            target="_blank"
            className="rounded-lg bg-white px-5 py-3 font-semibold text-[#030014] transition hover:bg-pink-100"
          >
            Download Resume
          </Link>
          <Link
            href={profileLinks.cv}
            target="_blank"
            className="rounded-lg border border-pink-300/40 bg-pink-300/10 px-5 py-3 font-semibold text-pink-100 transition hover:bg-pink-300/20"
          >
            Download CV
          </Link>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="rounded-lg border border-white/10 bg-[#0c0e23]/70 p-6">
            <h2 className="text-2xl font-bold">Highlights</h2>
            <ul className="mt-6 space-y-4 text-gray-300">
              {resumeHighlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-pink-300" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </aside>

          <div className="space-y-5">
            {timeline.map((item) => (
              <article
                key={`${item.role}-${item.company}`}
                className="rounded-lg border border-white/10 bg-white/[0.04] p-6"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                  {item.period}
                </p>
                <h2 className="mt-3 text-2xl font-bold">{item.role}</h2>
                <p className="mt-1 font-semibold text-white/80">{item.company}</p>
                <p className="mt-4 leading-7 text-gray-300">{item.details}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <h2 className="text-3xl font-bold">Core Skill Areas</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {skillGroups.slice(0, 6).map((group) => (
              <article
                key={group.title}
                className="rounded-lg border border-white/10 bg-[#0c0e23]/70 p-5"
              >
                <h3 className="font-bold">{group.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-300">
                  {group.skills.join(", ")}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
