import React from 'react'
import ServicesCard from '../sub/ServiceCard'
import { Button } from '@/ui/MovingBorders'

const Services = () => {
    return (
        <div id="services"
            className="pt-[5rem] pb-[3rem]">
            <div className="text-center px-4">
                <h1 className="text-[40px] font-bold text-white">My Special <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-pink-600">Services</span> For You</h1>
            </div>
            <div className="pt-[5rem] w-full max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center">
                <div data-aos="fade-up" data-aos-anchor-placement="top-center">
                    <Button>
                    <ServicesCard title="Agentic AI Solutions" num="01" description="Building production-grade autonomous agents and multi-agent systems using LangChain, LangGraph, and OpenAI SDK." /></Button>
                </div>
                <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="200">
                    <Button>
                    <ServicesCard title="AI Voice Agents" num="02" description="Developing low-latency voice AI systems with LiveKit, SIP, and custom STT/TTS pipelines for enterprise scaling." />
                </Button>
                </div>
                
                <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="400">
                    <Button>
                    <ServicesCard title="FullStack Development" num="03" description="Architecting modern web applications with Next.js, TypeScript, and high-performance backend systems." />
                </Button>
                </div>
                
                <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="200">
                    <Button>
                    <ServicesCard title="RAG & Knowledge Bases" num="04" description="Implementing advanced Retrieval Augmented Generation (RAG) using vector and graph databases for intelligent context." />
                </Button>
                </div>
                
                <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="400">
                    <Button>
                    <ServicesCard title="API & MCP Integration" num="05" description="Connecting AI systems to real-world actions via REST APIs and Model Context Protocol (MCP) servers." />
                </Button>
                </div>
                
                <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="600">
                    <Button>
                    <ServicesCard title="Scalable AI Infrastructure" num="06" description="Deploying AI workflows using Docker, Kubernetes, and Cloud platforms for high availability and performance." />
                </Button>
                </div>
                
            </div>
        </div>
    )
}


export default Services