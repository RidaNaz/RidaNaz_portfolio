"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft } from '@//utils/motion'
// import { SparklesIcon } from '@heroicons/react/24/solid'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[50px] font-medium mt-[10px] text-center mb-[15px] '
      >
        <h1 className="text-center font-bold text-white text-[40px]">Technical {" "}
        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-pink-600">SKILLS</span>
        </h1>
      </motion.div>
    </div>
  )
}

export default SkillText