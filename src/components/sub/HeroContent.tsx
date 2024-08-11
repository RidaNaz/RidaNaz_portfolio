"use client"

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@//utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { RxGithubLogo } from "react-icons/rx";

const HeroContent = () => {
  return (
    <motion.div initial="hidden" animate="visible" className='flex flex-row items-center px-20 mt-36 w-full z-[20]'>
      <div className='h-full w-96 sm:w-full flex flex-col gap-5 justify-center m-auto text-start -mx-12 sm:-mx-0'>

        <motion.div
          variants={slideInFromTop}
          className='Welcome-box py-[8px] px-[7px] border-[#7042f88b] opacity-[0.9]'>
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            <Link href = "#projects">Future Cloud Native AI Engineer</Link>
          </h1>
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className='flex flex-col gap-6 mt-6 text-4xl sm:text-6xl font-bold text-white max-w-[600px] w-auto h-auto'
        >
          <span>
            Here&rsquo;s
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-pink-600"> Rida Naz </span>
            Project Experience
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.5)}
          className="text-lg text-gray-400 my-5n max-w-[600px]"
        >
         I &apos;m a Frontend Web Developer with high skills in website development. Checkout my Skills, Certificates and Portfolio.

        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        ><Link href ="https://github.com/RidaNaz" className = "cursor-poniter flex flex-row gap-4 justify-center pt-1">
          <RxGithubLogo /><span className="-mt-1">Github Profile</span>
          </Link>
        </motion.a>
      </div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className="hidden -mr-10 lg:block w-full h-full flex justify-center items-center">
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={500}
          width={500}
        />
      </motion.div> 
    </motion.div>
  )
}

export default HeroContent