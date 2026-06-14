import Link from "next/link";

const highlights = [
  {
    title: "Services",
    description:
      "Agentic AI systems, Voice AI agents, full stack SaaS development, RAG, MCP, and AI visibility.",
    href: "/services",
  },
  {
    title: "About",
    description:
      "My journey as a Karachi-based Full Stack Developer and Agentic AI Engineer building practical AI products.",
    href: "/about",
  },
  {
    title: "Resume / CV",
    description:
      "Download my latest resume and CV, or scan a structured summary of experience, roles, and skills.",
    href: "/resume",
  },
  {
    title: "Skills",
    description:
      "Explore my technical stack across Next.js, FastAPI, LiveKit, LangGraph, MCP, cloud, and SEO.",
    href: "/skills",
  },
];

const HomeHighlights = () => {
  return (
    <section className="px-6 pt-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {highlights.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-lg border border-white/10 bg-[#0c0e23]/70 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-[#10132e]"
            >
              <h2 className="text-xl font-bold text-white group-hover:text-cyan-200">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-gray-300">
                {item.description}
              </p>
              <span className="mt-5 inline-flex text-sm font-semibold text-pink-200">
                Explore
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-8 rounded-lg border border-white/10 bg-white/[0.04] p-6 text-center">
          <p className="text-base leading-7 text-gray-300">
            I build production-focused AI experiences where agents can reason,
            use tools, speak with users, retrieve trusted knowledge, and connect
            with real business systems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeHighlights;
