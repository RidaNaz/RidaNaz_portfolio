"use client";

import React from 'react'
import ServicesCard from '../sub/ServiceCard'
import { motion } from 'framer-motion'

const services_data = [
    {
        num: "01",
        title: "Agentic AI Solutions",
        description: "Building production-grade autonomous agents and multi-agent systems using LangChain, LangGraph, and OpenAI SDK."
    },
    {
        num: "02",
        title: "AI Voice Agents",
        description: "Developing low-latency voice AI systems with LiveKit, SIP, and custom STT/TTS pipelines for enterprise scaling."
    },
    {
        num: "03",
        title: "FullStack Development",
        description: "Architecting modern web applications with Next.js, TypeScript, and high-performance backend systems."
    },
    {
        num: "04",
        title: "RAG & Knowledge Bases",
        description: "Implementing advanced Retrieval Augmented Generation (RAG) using vector and graph databases for intelligent context."
    },
    {
        num: "05",
        title: "API & MCP Integration",
        description: "Connecting AI systems to real-world actions via REST APIs and Model Context Protocol (MCP) servers."
    },
    {
        num: "06",
        title: "Scalable AI Infrastructure",
        description: "Deploying AI workflows using Docker, Kubernetes, and Cloud platforms for high availability and performance."
    }
]

const Services = () => {
    return (
        <section id="services" className="relative py-32 px-6 overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[150px] -z-10 translate-x-1/2" />
            
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-[40px] md:text-[50px] font-bold text-white mb-6"
                    >
                        My Special <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Services</span> For You
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                    >
                        I deliver high-performance AI solutions and scalable fullstack applications tailored for the next generation of digital innovation.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services_data.map((service, index) => (
                        <motion.div
                            key={service.num}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="h-full"
                        >
                            <ServicesCard 
                                title={service.title} 
                                num={service.num} 
                                description={service.description} 
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services