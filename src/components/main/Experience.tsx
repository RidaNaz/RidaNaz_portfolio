import React from "react";
import { WorkExperience } from "@/constants";

const experienceProof = WorkExperience.map((item) => {
  if (item.company === "TalkifAI") {
    return {
      ...item,
      highlights: [
        "Designed the core voice-agent platform with LiveKit, SIP, and low-latency telephony.",
        "Built BYOC telephony routing, batch calling, and automated RAG knowledge-base indexing.",
        "Owned product implementation as a founding team member across architecture, backend, and workflows.",
      ],
    };
  }

  return {
    ...item,
    highlights: [
      "Built JungleMug, an Amazon listing automation platform with AI-generated content and mockup workflows.",
      "Integrated Amazon SP-API and automated product publishing across a full stack application.",
      "Delivered frontend, backend, and operational systems that turned manual ecommerce work into a product workflow.",
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
              I build the infrastructure, workflows, APIs, and interfaces that
              make AI systems dependable, scalable, and useful for operations.
            </p>
          </div>

          <div className="space-y-5">
            {experienceProof.map((item) => (
              <article
                key={item.id}
                className="rounded-lg border border-white/10 bg-surface-soft/70 p-6"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
                      {item.duration}
                    </p>
                    <h3 className="mt-3 text-2xl font-bold text-white">{item.title}</h3>
                    <p className="mt-1 font-semibold text-pink-200">{item.company}</p>
                  </div>
                </div>

                <p className="mt-4 leading-7 text-gray-300">{item.desc}</p>

                <div className="mt-5 grid gap-3 text-sm leading-6 text-gray-300 md:grid-cols-3">
                  {item.highlights.map((highlight) => (
                    <div key={highlight} className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                      {highlight}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
