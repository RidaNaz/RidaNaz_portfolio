import { BugAntIcon, CodeBracketIcon, CommandLineIcon, CursorArrowRaysIcon, RocketLaunchIcon, ServerIcon } from '@heroicons/react/16/solid'
import React from 'react'

interface Props {
    title: string
    num: string
}

const iconMapping = {
    "01": CommandLineIcon,
    "02": ServerIcon,
    "03": CodeBracketIcon,
    "04": CursorArrowRaysIcon,
    "05": RocketLaunchIcon,
    "06": BugAntIcon
}

const ServicesCard = ({ num, title }: Props) => {
    const IconComponent = (iconMapping as Record<string, React.ElementType>)[num] || CommandLineIcon

    return (
        <div className="bg-transparent border border-white/[.2] custom_service z-[100] transform rounded-2xl text-center p-6 shadow-md">
            <IconComponent className="w-[5rem] relative z-[1] mx-auto h-[5rem] text-purple-900" />
            <h1 className="text-[25px] relative x-[1] text-white mt-[1rem]">{title}</h1>

            <p className="text-white text-[15px] opacity-60 mt-[0.8rem]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores optio quisquam facilis commodi laboriosam. Excepturi totam modi necessitatibus enim aut officia omnis. Nostrum, dolorem non! Iure voluptate repudiandae aliquid fugit?</p>
            <p className="text-white text-[1.6rem] font-semibold absolute top-3 right-4">{num}</p>
        </div>
    )
}

export default ServicesCard