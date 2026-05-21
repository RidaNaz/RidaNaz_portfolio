import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto max-w-screen-2xl">
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

          <span className="hidden md:block font-bold ml-[10px] text-gray-300">
            Rida Naz
          </span>
        </Link>

        <div className="flex-1 max-w-[600px] h-full flex flex-row items-center justify-center mx-4">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] px-[15px] sm:px-[20px] py-[10px] rounded-full text-gray-200 text-[12px] sm:text-base gap-2 sm:gap-4">
            <Link href="#skills" className="cursor-pointer hover:text-purple-400 transition">
              Skills
            </Link>
            <Link href="#experience" className="cursor-pointer hover:text-purple-400 transition">
              Experience
            </Link>
            <Link href="#portfolio" className="cursor-pointer hover:text-purple-400 transition">
              Portfolio
            </Link>
            <Link href="#certificates" className="cursor-pointer hover:text-purple-400 transition">
              Certificates
            </Link>
          </div>
        </div>

        <div className="flex flex-row gap-3 sm:gap-5">
          {Socials.map((social) => (
            <Link href={social.link} key={social.name} className="hover:scale-110 transition">
              <Image
                src={social.src}
                alt={social.name}
                width={social.width}
                height={social.height}
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;