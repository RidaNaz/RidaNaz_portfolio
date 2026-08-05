import React from "react";
import { WorkExperience } from "@/constants";

const experienceProof = WorkExperience.map((item) => {
  if (item.company === "TalkifAI") {
    return {
      ...item,
      proof: [
        "Built core voice-agent platform infrastructure across LiveKit, SIP, and Google Cloud.",
        "Owned BYOC telephony layers, batch calling, and RAG knowledge-base indexing workflows.",
        "Worked across product, architecture, and implementation as a founding team member.",
      ],
    };
  }

  return {
    ...item,
    proof: [
      "Built ecommerce automation workflows around AI content generation and listing operations.",
      "Integrated Amazon SP-API and automated mockup processes for product publishing.",
      "Delivered full stack product features across frontend, backend, and operational workflows.",
    ],
  };
});

const Experience = () => {
  return (
    <section id="experience" className="w-full px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
              Experience
            </p>
            <h2 className="text-[34px] font-bold leading-tight sm:text-[46px]">
              Technical ownership across AI products and full stack systems.
            </h2>
            <p className="mt-5 text-lg leading-8 text-gray-300">
              My work sits close to the product: building the infrastructure,
              workflows, interfaces, and integrations that make AI useful in
              operational environments.
            </p>
          </div>

          <div className="space-y-5">
            {experienceProof.map((item) => (
              <article
                key={item.id}
                className="rounded-lg border border-white/10 bg-[#0c0e23]/70 p-6"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
                  {item.duration}
                </p>
                <h3 className="mt-3 text-2xl font-bold">{item.title}</h3>
                <p className="mt-1 font-semibold text-pink-200">{item.company}</p>
                <p className="mt-4 leading-7 text-gray-300">{item.desc}</p>
                <ul className="mt-5 grid gap-3 text-sm leading-6 text-gray-300 md:grid-cols-3">
                  {item.proof.map((proof) => (
                    <li key={proof} className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                      {proof}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
