import Link from "next/link";

const trustSignals = [
  { label: "Current role", value: "Lead Engineer at TalkifAI" },
  { label: "Core focus", value: "Voice AI, agents, RAG, SaaS" },
  { label: "Systems", value: "LiveKit, SIP, FastAPI, Next.js" },
  { label: "Best fit", value: "Founders, startups, AI teams" },
];

const problems = [
  "Manual workflows that slow down support, sales, and internal operations.",
  "AI prototypes that need production architecture, tools, memory, and deployment.",
  "Knowledge scattered across documents, apps, APIs, and business systems.",
  "Voice or chat experiences that must feel reliable, fast, and useful in real conversations.",
];

const buildAreas = [
  {
    title: "Voice AI Agents",
    problem: "Teams need AI that can speak with users, route calls, and handle real conversations.",
    solution: "I build low-latency voice systems with LiveKit, SIP/WebRTC, STT/TTS, Twilio, Telnyx, and backend orchestration.",
    impact: "Useful for support, booking, sales qualification, and internal voice workflows.",
  },
  {
    title: "Agentic Workflows",
    problem: "Businesses want AI that can take action, not just answer questions.",
    solution: "I design tool-using agents with LangGraph, OpenAI SDK, MCP, APIs, checkpoints, and structured workflows.",
    impact: "Useful for automation, operations, customer success, and multi-step business processes.",
  },
  {
    title: "RAG Knowledge Systems",
    problem: "Generic AI answers are not enough when decisions depend on trusted company knowledge.",
    solution: "I build retrieval systems, ingestion pipelines, context flows, and assistant experiences around real documents and data.",
    impact: "Useful for support copilots, internal knowledge assistants, and domain-specific product experiences.",
  },
  {
    title: "Full Stack SaaS Platforms",
    problem: "AI products still need clean interfaces, reliable APIs, auth, data models, and deployment.",
    solution: "I ship product interfaces and backend systems with Next.js, TypeScript, FastAPI, PostgreSQL, Docker, and cloud services.",
    impact: "Useful for MVPs, dashboards, automation platforms, and production AI product foundations.",
  },
];

const HomeHighlights = () => {
  return (
    <section className="px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-4 md:grid-cols-4">
          {trustSignals.map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-white/10 bg-white/[0.035] p-5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                {item.label}
              </p>
              <p className="mt-3 text-base font-semibold leading-6 text-white">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
              Problems I Solve
            </p>
            <h2 className="text-[34px] font-bold leading-tight sm:text-[46px]">
              I turn promising AI ideas into systems people can actually use.
            </h2>
            <p className="mt-5 text-lg leading-8 text-gray-300">
              The work is not only model calls. It is product thinking, backend
              architecture, workflow design, integrations, observability, and a
              user experience that makes AI feel dependable.
            </p>
            <Link
              href="/services"
              className="mt-8 inline-flex rounded-lg border border-emerald-300/40 bg-emerald-300/10 px-5 py-3 font-semibold text-emerald-100 transition hover:bg-emerald-300/20"
            >
              Explore Services
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {problems.map((problem) => (
              <article
                key={problem}
                className="rounded-lg border border-white/10 bg-[#0c0e23]/70 p-5 leading-7 text-gray-300"
              >
                {problem}
              </article>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-pink-300">
              What I Build
            </p>
            <h2 className="text-[34px] font-bold leading-tight sm:text-[46px]">
              Production AI capabilities organized around business outcomes.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {buildAreas.map((area) => (
              <article
                key={area.title}
                className="rounded-lg border border-white/10 bg-[#0c0e23]/70 p-6 transition hover:-translate-y-1 hover:border-cyan-300/50"
              >
                <h3 className="text-2xl font-bold text-white">{area.title}</h3>
                <div className="mt-5 space-y-4 text-sm leading-6 text-gray-300">
                  <p>
                    <span className="font-semibold text-pink-200">Problem: </span>
                    {area.problem}
                  </p>
                  <p>
                    <span className="font-semibold text-cyan-200">Solution: </span>
                    {area.solution}
                  </p>
                  <p>
                    <span className="font-semibold text-emerald-200">Impact: </span>
                    {area.impact}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHighlights;
