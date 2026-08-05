import Link from "next/link";

const faqs = [
  {
    question: "What types of AI systems do you build?",
    answer:
      "I build agentic workflows, voice AI agents, RAG knowledge systems, AI integrations, internal automation tools, and full stack SaaS products around AI use cases.",
  },
  {
    question: "Can you handle both frontend and backend work?",
    answer:
      "Yes. My common stack includes Next.js, React, TypeScript, FastAPI, PostgreSQL, Docker, cloud deployment, APIs, and AI orchestration tools.",
  },
  {
    question: "Do you work with founders and startups?",
    answer:
      "Yes. The portfolio is focused on founders, AI startups, SaaS teams, and technical teams that need practical product execution rather than only prototypes.",
  },
  {
    question: "What makes your voice AI work different?",
    answer:
      "I have hands-on platform experience with LiveKit, SIP/WebRTC, BYOC telephony, Twilio, Telnyx, backend orchestration, and real-time agent workflows.",
  },
  {
    question: "What is the best way to start a project conversation?",
    answer:
      "LinkedIn is best for professional conversations, Upwork is best for freelance contracts, and email works well for direct collaboration requests.",
  },
];

const HomepageFAQ = () => {
  return (
    <section className="px-6 py-24 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            FAQ
          </p>
          <h2 className="text-[34px] font-bold leading-tight sm:text-[46px]">
            Questions clients usually ask before working together.
          </h2>
        </div>

        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className="rounded-lg border border-white/10 bg-[#0c0e23]/70 p-6"
            >
              <h3 className="text-xl font-bold text-white">{faq.question}</h3>
              <p className="mt-3 leading-7 text-gray-300">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="px-6 pb-24 pt-8 text-white">
      <div className="mx-auto max-w-7xl rounded-lg border border-white/10 bg-white/[0.04] p-8 md:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-pink-300">
              Work With Me
            </p>
            <h2 className="text-[32px] font-bold leading-tight sm:text-[44px]">
              Have an AI workflow, voice agent, or SaaS product to build?
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-300">
              Share the business problem, the users, and the systems involved. I
              can help shape the architecture and build the product path from
              prototype to production-ready implementation.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link
              href="/contact"
              className="rounded-lg bg-white px-5 py-3 font-semibold text-[#030014] transition hover:bg-cyan-100"
            >
              Contact Me
            </Link>
            <Link
              href="https://www.linkedin.com/in/ridanaz67/"
              target="_blank"
              className="rounded-lg border border-cyan-300/40 bg-cyan-300/10 px-5 py-3 font-semibold text-cyan-100 transition hover:bg-cyan-300/20"
            >
              LinkedIn
            </Link>
            <Link
              href="https://www.upwork.com/freelancers/~0110100ff16de521db"
              target="_blank"
              rel="noopener"
              className="rounded-lg border border-emerald-300/40 bg-emerald-300/10 px-5 py-3 font-semibold text-emerald-100 transition hover:bg-emerald-300/20"
            >
              Upwork
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export { FinalCTA };
export default HomepageFAQ;
