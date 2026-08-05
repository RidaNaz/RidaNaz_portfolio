"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { agentic_projects, generating_ai_projects, fullstack_projects } from "@/constants/index";
import { PinContainer } from "@/ui/Pin";
import Link from "next/link";
import Image from "next/image";

const ProjectSection = ({ title, projects }: { title: string; projects: any[] }) => (
  <div className="pt-24">
    <h1 className="text-center text-[30px] sm:text-[40px] font-bold text-white px-4">
      A small selection of{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-alt">{title}</span>
    </h1>
    <div className="flex flex-wrap items-center justify-center p-4 gap-x-16 gap-y-24 mt-10">
      {projects.map((item) => (
        <div
          className="sm:h-[35rem] h-[30rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-96 w-[80vw]"
          key={item.id}
        >
          <Link href={item.link}>
            <PinContainer title={item.msg}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-xl bg-surface-panel">
                  <Image src="/bg.png" alt="bgimg" fill className="object-cover opacity-50" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </div>
                <Image
                  src={item.img}
                  width={500}
                  height={500}
                  alt="cover"
                  className="z-10 absolute bottom-0 rounded-xl object-cover w-full h-full"
                  style={{ height: 'auto' }}
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-white">
                {item.title}
              </h1>

              <p className="lg:text-lg lg:font-normal font-light text-xs line-clamp-2 text-text-muted my-4">
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon: string, index: number) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-surface lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image src={icon} alt="icon" width={100} height={100} className="p-2" style={{ height: 'auto' }} />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-sm md:text-xs text-xs text-white">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3 text-accent" />
                </div>
              </div>
            </PinContainer>
          </Link>
        </div>
      ))}
    </div>
  </div>
);

const RecentProjects = () => {
  return (
    <main id="portfolio" className="py-20">
      <ProjectSection title="Agentic AI Projects" projects={agentic_projects} />
      <ProjectSection title="FullStack Projects" projects={fullstack_projects} />
      <ProjectSection title="Custom GPTs" projects={generating_ai_projects} />
    </main>
  );
};

export default RecentProjects;