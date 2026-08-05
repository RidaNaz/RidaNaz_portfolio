import Link from "next/link";

const serviceOffers = [
  {
    title: "Voice AI Agent Build",
    bestFor: "Support, sales, booking, and phone-based workflows",
    deliverables: ["LiveKit/SIP voice pipeline", "Telephony integration", "Agent flow and backend APIs"],
    outcome: "A voice experience that can talk to users, access business context, and route work reliably.",
  },
  {
    title: "Agentic Workflow Automation",
    bestFor: "Teams replacing repetitive internal work with tool-using agents",
    deliverables: ["LangGraph/OpenAI workflow", "MCP or API tools", "Human checkpoints and logs"],
    outcome: "An AI workflow that plans, calls tools, updates systems, and stays understandable to operators.",
  },
  {
    title: "RAG Knowledge Assistant",
    bestFor: "Products and teams with documents, policies, product data, or support knowledge",
    deliverables: ["Ingestion pipeline", "Retrieval strategy", "Chat or workflow interface"],
    outcome: "AI answers grounded in trusted data instead of generic model memory.",
  },
  {
    title: "Full Stack AI SaaS MVP",
    bestFor: "Founders who need a product interface and backend around an AI workflow",
    deliverables: ["Next.js interface", "FastAPI backend", "Database, auth, deployment path"],
    outcome: "A usable product foundation that can be tested with customers and extended over time.",
  },
  {
    title: "AI Integration Layer",
    bestFor: "Businesses connecting AI to CRMs, databases, dashboards, and third-party tools",
    deliverables: ["API/webhook integration", "Background jobs", "Data and action workflow"],
    outcome: "AI that can operate inside existing systems instead of sitting in a separate chat window.",
  },
  {
    title: "Agentic SEO and AI Visibility",
    bestFor: "Technical brands and portfolios that need search and AI-agent readability",
    deliverables: ["Metadata and schema", "llms.txt strategy", "Crawlable content architecture"],
    outcome: "A clearer entity footprint for search engines, AI summarizers, and high-intent visitors.",
  },
];

const Services = () => {
  return (
    <section id="services" className="relative overflow-hidden px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Services
          </p>
          <h2 className="text-[34px] font-bold leading-tight sm:text-[46px]">
            Focused AI engineering offers for teams that need production outcomes.
          </h2>
          <p className="mt-5 text-lg leading-8 text-gray-300">
            I work best where AI meets real operations: workflows, voice, tools,
            knowledge, product interfaces, APIs, and deployment.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {serviceOffers.map((service) => (
            <article
              key={service.title}
              className="rounded-lg border border-white/10 bg-surface-soft/70 p-6 transition hover:-translate-y-1 hover:border-accent/50"
            >
              <h3 className="text-2xl font-bold text-white">{service.title}</h3>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-cyan-200">
                Best for
              </p>
              <p className="mt-2 leading-7 text-gray-300">{service.bestFor}</p>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-pink-200">
                Deliverables
              </p>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-gray-300">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 rounded-lg border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-gray-200">
                {service.outcome}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/services"
            className="rounded-lg border border-cyan-300/40 bg-cyan-300/10 px-5 py-3 font-semibold text-cyan-100 transition hover:bg-cyan-300/20"
          >
            See Detailed Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
