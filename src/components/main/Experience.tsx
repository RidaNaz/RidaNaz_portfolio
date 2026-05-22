"use client";

import React from "react";
import { WorkExperience } from "@/constants";
import { Button } from "@/ui/MovingBorders";
import Image from "next/image";

const Experience = () => {
  return (
    <div id="experience" className="py-20 w-full">
      <h1 className="text-center font-bold text-white text-[40px] mb-[15px]">
        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-pink-600">Work Experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10 px-10">
        {WorkExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-4">
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-purple-200 font-semibold mt-1">
                  {card.company} | {card.duration}
                </p>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
