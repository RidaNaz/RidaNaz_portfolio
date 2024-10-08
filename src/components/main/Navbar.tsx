import { Socials } from "@//constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-2 lg:px-10 ">
      <div className="gap-4 sm:gap-0 w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <Link
          href="#web-developer"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/Ridalogo.svg"
            alt="logo"
            width={40}
            height={40}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="hidden md:block font-bold ml-[30px] text-gray-300">
            Web Developer
          </span>
        </Link>

        <div className="w-[500px] h-full flex flex-row items-center justify-center">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200 text-sm sm:text-base">
            <Link href="#skills" className="cursor-pointer">
              Skills
            </Link>
            <Link href="#portfolio" className="cursor-pointer">
              Portfolio
            </Link>
            <Link href="#certificates" className="cursor-pointer">
              Certificates
            </Link>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className=" flex flex-row gap-5">
            {Socials.map((social) => (
              <Link href={social.link} key={social.name}>
                <Image
                  src={social.src}
                  alt={social.name}
                  key={social.name}
                  width={social.width}
                  height={social.height}
                />
              </Link>
            ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;