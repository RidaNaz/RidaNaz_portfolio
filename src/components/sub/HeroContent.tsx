import React from "react";
import { ArrowRightIcon, SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

const credibilitySignals = [
  "Lead Engineer at TalkifAI",
  "Voice AI + Agentic Workflows",
  "Next.js, FastAPI, LiveKit, LangGraph",
];

const HeroContent = () => {
  return (
    <section className="z-[20] mx-auto flex min-h-[760px] w-full max-w-7xl flex-col justify-center px-6 pb-14 pt-36 sm:px-10 lg:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="flex max-w-4xl flex-col justify-center gap-6 text-start">
          <div
            className="Welcome-box border-[#7042f88b] px-[7px] py-[8px] opacity-[0.9] animate-slide-top"
            style={{ animationFillMode: "both" }}
          >
            <SparklesIcon className="mr-[10px] h-5 w-5 text-[#b49bff]" />
            <p className="Welcome-text text-[13px]">
              Agentic AI Engineer & Full Stack Product Builder
            </p>
          </div>

          <h1
            className="max-w-[820px] text-4xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl animate-slide-left"
            style={{ animationDelay: "0.15s", animationFillMode: "both" }}
          >
            I build AI systems that automate real{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-white to-pink-200">
              business operations.
            </span>
          </h1>

          <p
            className="max-w-[720px] text-lg leading-8 text-gray-300 sm:text-xl animate-slide-left"
            style={{ animationDelay: "0.3s", animationFillMode: "both" }}
          >
            I help founders and technical teams ship voice agents, agentic
            workflows, RAG systems, and full stack SaaS platforms that connect to
            real tools, data, and customer-facing workflows.
          </p>

          <div
            className="mt-2 flex flex-wrap gap-3 animate-slide-left"
            style={{ animationDelay: "0.45s", animationFillMode: "both" }}
          >
            <Link
              href="/contact"
              className="button-primary inline-flex items-center gap-2 rounded-lg px-5 py-3 text-center font-semibold text-white transition hover:-translate-y-0.5"
            >
              Work With Me
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link
              href="/portfolio"
              className="rounded-lg border border-white/20 px-5 py-3 text-center font-semibold text-white transition hover:-translate-y-0.5 hover:border-cyan-300/60 hover:bg-white/[0.04]"
            >
              View Case Studies
            </Link>
          </div>

          <div
            className="mt-4 grid gap-3 text-sm text-gray-300 sm:grid-cols-3 animate-slide-left"
            style={{ animationDelay: "0.6s", animationFillMode: "both" }}
          >
            {credibilitySignals.map((signal) => (
              <div
                key={signal}
                className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3"
              >
                {signal}
              </div>
            ))}
          </div>
        </div>

        <div
          className="hidden h-full w-full justify-center lg:flex animate-slide-right"
          style={{ animationDelay: "0.3s", animationFillMode: "both" }}
        >
          <div className="relative flex aspect-square w-full max-w-[500px] items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] p-8">
            <div className="absolute inset-8 rounded-lg border border-cyan-200/10" />
            <Image
              src="/mainIconsdark.svg"
              alt="AI product engineering tools and workflow icons"
              height={460}
              width={460}
              priority
              fetchPriority="high"
              style={{ height: "auto", width: "auto" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroContent;
