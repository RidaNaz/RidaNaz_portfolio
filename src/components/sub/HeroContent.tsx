"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="z-[20] mt-36 flex w-full flex-row items-center px-6 sm:px-10 lg:px-20"
    >
      <div className="m-auto flex h-full w-96 flex-col justify-center gap-5 text-start -mx-12 sm:w-full sm:-mx-0">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box border-[#7042f88b] px-[7px] py-[8px] opacity-[0.9]"
        >
          <SparklesIcon className="mr-[10px] h-5 w-5 text-[#b49bff]" />
          <h1 className="Welcome-text text-[13px]">
            Full Stack Developer | Agentic AI Engineer
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="mt-6 flex h-auto w-auto max-w-[700px] flex-col gap-6 text-4xl font-bold text-white sm:text-6xl"
        >
          <span>
            Building Voice AI,
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-pink-600">
              {" "}
              Agentic Workflows{" "}
            </span>
            & Full Stack SaaS
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.5)}
          className="max-w-[650px] text-lg leading-8 text-gray-400"
        >
          I&apos;m Rida Naz, a Full Stack Developer and Agentic AI Engineer with
          1.5+ years of experience building production AI systems, Voice AI
          agents, RAG workflows, and scalable web platforms.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(1)}
          className="mt-3 flex flex-wrap gap-3"
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
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className="-mr-10 hidden h-full w-full justify-center lg:flex"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={500}
          width={500}
          priority
          loading="eager"
          style={{ height: "auto", width: "auto" }}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
