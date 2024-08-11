import React from "react";
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxInstagramLogo,
    RxTwitterLogo,
    RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] py-16">
            <div className="py-8 w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row gap-14 items-center justify-around flex-wrap">


                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[18px] mb-4">Community</div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <FaYoutube />
                            <span className="text-[15px] ml-[6px]">Youtube</span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxGithubLogo />
                            <span className="text-[15px] ml-[6px]">Github</span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxDiscordLogo />
                            <span className="text-[15px] ml-[6px]">Discord</span>
                        </p>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[18px] mb-4">Social Media</div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxInstagramLogo />
                            <span className="text-[15px] ml-[6px]">Instagram</span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxTwitterLogo />
                            <span className="text-[15px] ml-[6px]">Twitter</span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxLinkedinLogo />
                            <span className="text-[15px] ml-[6px]">Linkedin</span>
                        </p>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[18px] mb-4">About</div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">

                            <span className="text-[15px] ml-[6px]">Become Sponsor</span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">

                            <span className="text-[15px] ml-[6px]">Learning about me</span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">

                            <span className="text-[15px] ml-[6px]">rnaz3414@gmail.com</span>
                        </p>
                    </div>
                </div>
                <br />
                <div className="mb-[10px] text-[15px] text-center mt-12">
                    &copy; Web Developer 2024 Inc. All rights reserved
                </div>
            </div>
        </div>
    ) 
}

export default Footer