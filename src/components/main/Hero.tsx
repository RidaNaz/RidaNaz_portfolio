import React from 'react'
import HeroContent from "../sub/HeroContent"

const Hero = () => {
  return (
    <div id="web-developer"
      className="relative flex flex-col h-full w-full">
      <video autoPlay muted loop className="rotate-180 absolute top-[-340px] left-0 z-[1] object-cover">
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  )
}

export default Hero 