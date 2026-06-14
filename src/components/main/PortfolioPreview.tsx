import Link from "next/link";
import Image from "next/image";
import { agentic_projects, fullstack_projects } from "@/constants";

const featuredProjects = [
  agentic_projects[0],
  agentic_projects[3],
  fullstack_projects[0],
];

const PortfolioPreview = () => {
  return (
    <section id="portfolio" className="py-20">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-pink-300">
          Selected Work
        </p>
        <h2 className="text-[34px] font-bold text-white sm:text-[44px]">
          Featured projects from my AI and full stack work.
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-300">
          Here are selected projects from TalkifAI, agentic workflows, SaaS
          builds, and custom AI experiences. The full portfolio has the complete
          project collection.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-7xl gap-6 px-6 md:grid-cols-3">
        {featuredProjects.map((project) => (
          <Link
            key={project.title}
            href={project.link}
            target="_blank"
            className="group rounded-lg border border-white/10 bg-[#0c0e23]/70 p-4 backdrop-blur-xl transition hover:-translate-y-1 hover:border-pink-300/50"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-[#13162D]">
              <Image
                src={project.img}
                alt={project.title}
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <h3 className="mt-5 text-xl font-bold text-white">{project.title}</h3>
            <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-300">
              {project.des}
            </p>
          </Link>
        ))}
      </div>

      <div className="mt-4 flex justify-center px-6">
        <Link
          href="/portfolio"
          className="rounded-lg border border-pink-300/40 bg-pink-300/10 px-5 py-3 font-semibold text-pink-100 transition hover:bg-pink-300/20"
        >
          View Full Portfolio
        </Link>
      </div>
    </section>
  );
};

export default PortfolioPreview;
