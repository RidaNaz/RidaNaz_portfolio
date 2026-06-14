import type { Metadata } from "next";
import Link from "next/link";
import { contactOptions, profileLinks } from "@/constants/profile-pages";

export const metadata: Metadata = {
  title: "Contact & Work With Me | Rida Naz",
  description:
    "Contact Rida Naz for Agentic AI systems, Voice AI agents, full stack SaaS development, AI automation, and technical collaboration.",
  alternates: {
    canonical: "https://www.ridanaz.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen px-6 pt-32 pb-24 text-white">
      <section className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Contact
          </p>
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Work with me on AI products, agents, and full stack systems.
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            I&apos;m open to meaningful collaborations around Voice AI,
            Agentic AI, SaaS products, automation, and technical content.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {contactOptions.map((option) => (
            <article
              key={option.title}
              className="rounded-lg border border-white/10 bg-[#0c0e23]/70 p-6 backdrop-blur-xl"
            >
              <h2 className="text-2xl font-bold">{option.title}</h2>
              <p className="mt-4 leading-7 text-gray-300">{option.description}</p>
              <Link
                href={option.href}
                target={option.href.startsWith("http") ? "_blank" : undefined}
                className="mt-6 inline-flex rounded-lg border border-cyan-300/40 bg-cyan-300/10 px-4 py-3 font-semibold text-cyan-100 transition hover:bg-cyan-300/20"
              >
                {option.action}
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-lg border border-white/10 bg-white/[0.04] p-8">
          <h2 className="text-2xl font-bold">Best starting points</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Link
              href={profileLinks.linkedin}
              target="_blank"
              className="rounded-lg border border-white/10 p-5 transition hover:border-cyan-300/50"
            >
              <span className="font-semibold">LinkedIn</span>
              <p className="mt-2 text-gray-300">
                Best for professional conversations and collaboration requests.
              </p>
            </Link>
            <Link
              href={profileLinks.github}
              target="_blank"
              className="rounded-lg border border-white/10 p-5 transition hover:border-pink-300/50"
            >
              <span className="font-semibold">GitHub</span>
              <p className="mt-2 text-gray-300">
                Best for reviewing repositories, projects, and engineering work.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
