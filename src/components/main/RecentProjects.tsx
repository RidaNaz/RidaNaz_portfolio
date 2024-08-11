"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { fullstack_projects, projects } from "@//constants/index";
import { PinContainer } from "@//ui/Pin";
import Link from "next/link";
import Image from "next/image";

const RecentProjects = () => {
  return (
    <main id="portfolio" className="-mt-48">
    <div className="py-5">
      <h1 className="text-center text-[40px] font-bold text-white">
        A small selection of{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-pink-600">Frontend Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <Link href={item.link}>
              <PinContainer
                title={item.msg}
              >
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <Image src="/bg.png" alt="bgimg" width={50} height={50} />
                  </div>
                  <Image
                    src={item.img}
                    width={500}
                    height={500}
                    alt="cover"
                    className="z-10 absolute bottom-0 rounded-3xl"
                  />
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-white">
                  {item.title}
                </h1>

                <p
                  className="lg:text-lg lg:font-normal font-light text-xs line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <Image src={icon} alt="icon5" width={100} height={100} className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-base md:text-xs text-sm text-white">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </PinContainer>
            </Link>
          </div>
        ))}
      </div>
    </div>
    <div className="pt-4">
      <h1 className="text-center text-[40px] font-bold text-white">
        A small selection of{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-pink-600">FullStack Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16">
        {fullstack_projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <Link href={item.link}>
              <PinContainer
                title={item.msg}
              >
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <Image src="/bg.png" alt="bgimg" width={50} height={50} />
                  </div>
                  <Image
                    src={item.img}
                    width={500}
                    height={500}
                    alt="cover"
                    className="z-10 absolute bottom-0 rounded-3xl"
                  />
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-white">
                  {item.title}
                </h1>

                <p
                  className="lg:text-lg lg:font-normal font-light text-xs line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <Image src={icon} alt="icon5" width={100} height={100} className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-base md:text-xs text-sm text-white">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </PinContainer>
            </Link>
          </div>
        ))}
      </div>
    </div>
    </main>
  );
};

export default RecentProjects;