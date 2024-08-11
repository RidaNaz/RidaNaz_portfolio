import React from 'react'
import ServicesCard from '../sub/ServiceCard'
import { Button } from '@//ui/MovingBorders'

const Services = () => {
    return (
        <div id="services"
            className="pt-[5rem] pb-[3rem] -mt-8">
            <div className="text-center "
                style={{ transform: "scale(0.9" }}>

                <h1 className="text-[40px] font-bold text-white">My Special <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-pink-600">Services</span> For You</h1>
            </div>
            <div className="pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center">
                <div data-aos="fade-up" data-aos-anchor-placement="top-center">
                    <Button>
                    <ServicesCard title="React.js Website" num="01" /></Button>
                </div>
                <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="200">
                    <Button>
                    <ServicesCard title="Next.js Website" num="02" />
                </Button>
                </div>
                
                <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="400">
                    <Button>
                    <ServicesCard title="Fullstack Website" num="03" />
                </Button>
                </div>
                
                <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="200">
                    <Button>
                    <ServicesCard title="Node Js API" num="04" />
                </Button>
                </div>
                
                <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="400">
                    <Button>
                    <ServicesCard title="MERN WebApp" num="05" />
                </Button>
                </div>
                
                <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="600">
                    <Button>
                    <ServicesCard title="Bug Fixing" num="06" />
                </Button>
                </div>
                
            </div>
        </div>
    )
}


export default Services