import { BugAntIcon, CodeBracketIcon, CommandLineIcon, CursorArrowRaysIcon, RocketLaunchIcon, ServerIcon } from '@heroicons/react/16/solid'
import React from 'react'

interface Props {
    title: string
    num: string
    description?: string
}

const iconMapping = {
    "01": CommandLineIcon,
    "02": ServerIcon,
    "03": CodeBracketIcon,
    "04": CursorArrowRaysIcon,
    "05": RocketLaunchIcon,
    "06": BugAntIcon
}

const ServicesCard = ({ num, title, description }: Props) => {
    const IconComponent = (iconMapping as Record<string, React.ComponentType<{ className?: string }>>)[num] || CommandLineIcon

    return (
        <div className="bg-transparent border border-white/[.2] custom_service z-[100] transform rounded-2xl text-center p-6 shadow-md h-full relative overflow-hidden transition-all duration-300 hover:scale-[1.02]">
            <IconComponent className="w-[5rem] relative z-[1] mx-auto h-[5rem] text-purple-600" />
            <h1 className="text-[25px] relative z-[1] text-white mt-[1rem] font-bold">{title}</h1>

            <p className="text-white text-[15px] opacity-70 mt-[0.8rem] relative z-[1]">
                {description || "I provide high-quality services to help you build and scale your AI and web applications."}
            </p>
            <p className="text-purple-400/30 text-[4rem] font-bold absolute -bottom-4 -right-2 select-none z-[0]">{num}</p>
        </div>
    )
}

export default ServicesCard