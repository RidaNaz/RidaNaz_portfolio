import React from "react";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { SiUpwork } from "react-icons/si";

const HeroContent = () => {
  return (
    <div className="z-[20] mt-36 flex w-full flex-row items-center px-6 sm:px-10 lg:px-20">
      <div className="m-auto flex h-full w-96 flex-col justify-center gap-5 text-start -mx-12 sm:w-full sm:-mx-0">
        <div
          className="Welcome-box border-[#7042f88b] px-[7px] py-[8px] opacity-[0.9] animate-slide-top"
          style={{ animationFillMode: "both" }}
        >
          <SparklesIcon className="mr-[10px] h-5 w-5 text-[#b49bff]" />
          <h1 className="Welcome-text text-[13px]">
            Full Stack Developer | Agentic AI Engineer
          </h1>
        </div>

        <div
          className="mt-6 flex h-auto w-auto max-w-[700px] flex-col gap-6 text-4xl font-bold text-white sm:text-6xl animate-slide-left"
          style={{ animationDelay: "0.15s", animationFillMode: "both" }}
        >
          <span>
            Building Voice AI,
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-pink-600">
              {" "}
              Agentic Workflows{" "}
            </span>
            & Full Stack SaaS
          </span>
        </div>

        <p
          className="max-w-[650px] text-lg leading-8 text-gray-400 animate-slide-left"
          style={{ animationDelay: "0.3s", animationFillMode: "both" }}
        >
          I&apos;m Rida Naz, a Full Stack Developer and Agentic AI Engineer with
          1.5+ years of experience building production AI systems, Voice AI
          agents, RAG workflows, and scalable web platforms.
        </p>

        <div
          className="mt-3 flex flex-wrap gap-3 animate-slide-left"
          style={{ animationDelay: "0.45s", animationFillMode: "both" }}
        >
          <Link
            href="/services"
            className="button-primary rounded-lg px-5 py-3 text-center font-semibold text-white"
          >
            View Services
          </Link>
          <Link
            href="/resume"
            className="rounded-lg border border-white/20 px-5 py-3 text-center font-semibold text-white transition hover:border-pink-300/60"
          >
            Resume / CV
          </Link>
          <Link
            href="https://github.com/RidaNaz"
            target="_blank"
            className="button-primary flex cursor-pointer flex-row justify-center gap-3 rounded-lg px-5 py-3 text-white"
          >
            <RxGithubLogo className="h-6 w-6" />
            <span>GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/ridanaz67/"
            target="_blank"
            className="button-primary flex cursor-pointer flex-row justify-center gap-3 rounded-lg px-5 py-3 text-white"
          >
            <RxLinkedinLogo className="h-6 w-6" />
            <span>LinkedIn</span>
          </Link>
          <Link
            href="https://www.upwork.com/freelancers/~0110100ff16de521db"
            target="_blank"
            rel="noopener"
            className="button-primary flex cursor-pointer flex-row justify-center gap-3 rounded-lg px-5 py-3 text-white"
          >
            <SiUpwork className="h-6 w-6" />
            <span>Hire Me on Upwork</span>
          </Link>
        </div>
      </div>

      <div
        className="-mr-10 hidden h-full w-full justify-center lg:flex animate-slide-right"
        style={{ animationDelay: "0.3s", animationFillMode: "both" }}
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={500}
          width={500}
          priority
          fetchPriority="high"
          style={{ height: "auto", width: "auto" }}
        />
      </div>
    </div>
  );
};

export default HeroContent;

