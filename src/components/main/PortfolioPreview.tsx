import Link from "next/link";
import Image from "next/image";
import { agentic_projects, fullstack_projects } from "@/constants";

const caseStudies = [
  {
    ...agentic_projects[0],
    challenge: "Create a platform foundation for deployable AI voice agents with telephony, realtime audio, and customer-facing workflows.",
    solution: "Architected LiveKit and SIP infrastructure, BYOC telephony layers, backend services, and product workflows for agent deployment.",
    outcome: "A production-focused voice agent platform foundation for support, sales, and business automation use cases.",
    role: "Founding team member and Lead Engineer",
  },
  {
    ...agentic_projects[1],
    challenge: "Design an autonomous digital worker that can monitor channels and take action across tools.",
    solution: "Used Claude Code, MCP, Azure, and full stack orchestration to connect reasoning with operational workflows.",
    outcome: "A practical Digital FTE concept for always-on task execution and lower-cost operations.",
    role: "AI workflow and product engineer",
  },
  {
    ...agentic_projects[3],
    challenge: "Make task management usable through natural language while keeping business data structured and reliable.",
    solution: "Built a full stack MCP-powered todo app with FastAPI, SQLModel, Neon PostgreSQL, and a stateless AI chat interface.",
    outcome: "A clear example of how agentic interfaces can operate against real application data.",
    role: "Full stack and agentic systems engineer",
  },
  {
    ...fullstack_projects[1],
    challenge: "Reduce manual work in Amazon listing creation, image handling, and product content generation.",
    solution: "Built automation flows for AI content generation, mockup processing, and Amazon SP-API listing workflows.",
    outcome: "A full stack automation product that turns repeated ecommerce operations into a guided workflow.",
    role: "Full stack developer",
  },
];

const PortfolioPreview = () => {
  return (
    <section id="portfolio" className="px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-pink-300">
              Featured Case Studies
            </p>
            <h2 className="text-[34px] font-bold leading-tight sm:text-[46px]">
              Proof from AI products, voice infrastructure, and SaaS automation.
            </h2>
          </div>
          <p className="text-lg leading-8 text-gray-300">
            These projects show the shape of my work: translating messy business
            operations into useful AI systems with product interfaces, backend
            architecture, integrations, and deployment paths.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {caseStudies.map((project) => (
            <article
              key={project.title}
              className="group rounded-lg border border-white/10 bg-[#0c0e23]/70 p-5 transition hover:-translate-y-1 hover:border-pink-300/50"
            >
              <Link href={project.link} target="_blank" rel="noopener">
                <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-[#13162D]">
                  <Image
                    src={project.img}
                    alt={`${project.title} project screenshot`}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </Link>
              <div className="mt-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
                  {project.role}
                </p>
                <h3 className="mt-3 text-2xl font-bold text-white">
                  {project.title}
                </h3>
                <div className="mt-5 grid gap-4 text-sm leading-6 text-gray-300 md:grid-cols-3">
                  <p>
                    <span className="block font-semibold text-pink-200">Challenge</span>
                    {project.challenge}
                  </p>
                  <p>
                    <span className="block font-semibold text-cyan-200">Solution</span>
                    {project.solution}
                  </p>
                  <p>
                    <span className="block font-semibold text-emerald-200">Outcome</span>
                    {project.outcome}
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.iconLists.slice(0, 5).map((icon: string) => (
                    <span
                      key={icon}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]"
                    >
                      <Image src={icon} alt="" width={24} height={24} className="h-6 w-6 object-contain" />
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/portfolio"
            className="rounded-lg border border-pink-300/40 bg-pink-300/10 px-5 py-3 font-semibold text-pink-100 transition hover:bg-pink-300/20"
          >
            View Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
