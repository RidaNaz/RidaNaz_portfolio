import { Skill_data, skill_data2, skill_data3 } from "@/constants";
import { skillGroups, skillHighlights } from "@/constants/profile-pages";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const iconSkills = [...Skill_data, ...skill_data2, ...skill_data3].slice(0, 16);
const featuredGroups = skillGroups.slice(0, 4);

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
              Technical Capabilities
            </p>
            <h2 className="text-[34px] font-bold leading-tight sm:text-[46px]">
              A capability map for AI products, voice systems, and product-ready SaaS.
            </h2>
            <p className="mt-5 text-lg leading-8 text-gray-300">
              These are the engineering domains I combine to ship practical agentic
              AI work: from backend architecture and voice infrastructure to
              trustable knowledge retrieval and customer-facing product flows.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {skillHighlights.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-white/10 bg-white/[0.04] p-5"
              >
                <p className="text-sm font-semibold text-cyan-200">
                  {item.label}
                </p>
                <p className="mt-2 text-xl font-bold">{item.value}</p>
                <p className="mt-3 text-sm leading-6 text-gray-300">
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-lg border border-white/10 bg-surface-soft/70 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-accent/50"
            >
              <h3 className="text-xl font-bold text-white">{group.title}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-300">
                {group.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs text-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="mt-5 space-y-2 text-xs text-gray-400">
                {group.strengths.map((strength) => (
                  <p key={strength}>• {strength}</p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-lg border border-white/10 bg-surface-soft/60 p-5">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {iconSkills.map((skill) => (
              <div
                key={skill.skill_name}
                className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]"
                title={skill.skill_name}
              >
                <Image
                  src={skill.Image}
                  alt={skill.skill_name}
                  width={skill.width}
                  height={skill.height}
                  className="h-8 w-8 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/skills"
            className="rounded-lg border border-emerald-300/40 bg-emerald-300/10 px-5 py-3 font-semibold text-emerald-100 transition hover:bg-emerald-300/20"
          >
            Explore Full Skills Profile
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Skills;
