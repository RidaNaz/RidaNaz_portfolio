import React from "react";
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxInstagramLogo,
    RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube, FaFacebook } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] py-16">
            <div className="py-8 w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row gap-6 items-center justify-around flex-wrap">


                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[18px] mb-4">Community</div>

                        <Link href="https://www.youtube.com/@RidaNaz67">
                        <div className="flex flex-row items-center my-[15px] cursor-pointer">
                            <FaYoutube />
                            <p className="text-[15px] ml-[6px]">Youtube</p>
                        </div>
                        </Link>
                        <Link href="https://github.com/RidaNaz">
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxGithubLogo />
                            <span className="text-[15px] ml-[6px]">Github</span>
                        </p>
                        </Link>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxDiscordLogo />
                            <span className="text-[15px] ml-[6px]">Discord</span>
                        </p>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[18px] mb-4">Social Media</div>

                        <Link href="https://www.linkedin.com/in/ridanaz67/" >
                            <p className="flex flex-row items-center my-[15px] cursor-pointer">
                                <RxLinkedinLogo />
                                <span className="text-[15px] ml-[6px]">Linkedin</span>
                            </p>
                        </Link>
                        <Link href="https://www.instagram.com/rida_naz67/">
                            <p className="flex flex-row items-center my-[15px] cursor-pointer">
                                <RxInstagramLogo />
                                <span className="text-[15px] ml-[6px]">Instagram</span>
                            </p>
                        </Link>
                        <Link href="https://www.facebook.com/profile.php?id=100082363551016">
                            <p className="flex flex-row items-center my-[15px] cursor-pointer">
                                <FaFacebook />
                                <span className="text-[15px] ml-[6px]">Facebook</span>
                            </p>
                        </Link>
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