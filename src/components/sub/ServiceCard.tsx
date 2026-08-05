import React from 'react'
import { motion } from 'framer-motion'
import { 
    BugAntIcon, 
    CodeBracketIcon, 
    CommandLineIcon, 
    CursorArrowRaysIcon, 
    RocketLaunchIcon, 
    ServerIcon 
} from '@heroicons/react/16/solid'

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
        <motion.div 
            whileHover={{ y: -5 }}
            className="group relative h-full w-full bg-surface-soft/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 transition-all duration-300 hover:border-accent-alt/50 hover:bg-surface/80"
        >
            <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-purple-900/20 flex items-center justify-center mb-6 border border-purple-500/20 group-hover:bg-purple-600/30 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-purple-500" />
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                    {title}
                </h2>

                <p className="text-gray-400 text-sm leading-relaxed line-clamp-4">
                    {description || "I provide high-quality services to help you build and scale your AI and web applications."}
                </p>
            </div>

            {/* Background Number */}
            <span className="absolute top-4 right-6 text-6xl font-black text-white/[0.03] select-none group-hover:text-purple-500/10 transition-colors duration-500">
                {num}
            </span>

            {/* Bottom Glow */}
            <div className="absolute -bottom-2 -left-2 w-24 h-24 bg-purple-600/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>
    )
}

export default ServicesCard