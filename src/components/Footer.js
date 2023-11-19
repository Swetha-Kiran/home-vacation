import React from 'react'
import Image from "next/image"
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin, FaWhatsapp } from "react-icons/fa";

function Footer() {
    return (
        <div className='w-full  grid Laptop-sm:grid-cols-12 Tablet:grid-cols-8 Mobile:grid-cols-4 Laptop-sm:gap-x-6 Mobile:gap-x-4 Desktop:px-[10.5vw] Laptop-lg:px-[9.7vw] Laptop-sm:px-[1.6vw] Tablet:px-[2.1vw] Mobile:px-[1vw] py-[11.8vh] m-auto  bg-[#2A2B39]'>
            <div className='space-y-8 Laptop-sm:space-y-12 col-span-4 Tablet:col-span-8 Laptop-sm:col-span-12'>
                <div className='space-x-0 Laptop-sm:space-x-24 flex flex-col Laptop-sm:flex-row space-y-20 Laptop-sm:space-y-0 '>
                    <div className=' space-y-10 flex flex-col '>
                        <div className=' space-x-3 p-1 flex flex-row items-center justify-center '>
                            <div>
                                <Image src="HomepageImages/Brand Logo.svg" alt="" height="73" width="72"></Image>
                            </div>
                            <p className='font-lemon font-normal text-2xl text-[#FFFFFF]'>Global <br /> Tourism</p>
                        </div>

                        <div className='space-x-6 flex flex-row justify-center '>
                            <a href='https://www.facebook.com/techlandofficial1/'>
                                <FaFacebook className='cursor-pointer text-white h-6 w-6' />
                            </a>
                            <a href='https://www.secure.instagram.com/techland_snsilos/'>
                                <FaInstagram className='cursor-pointer text-white h-6 w-6' />
                            </a>
                            <a href='https://www.linkedin.com/company/techlandofficial1/'>
                                <FaLinkedin className='cursor-pointer text-white h-6 w-6' />
                            </a>
                            <a href='https://twitter.com/techland01'>
                                <FaTwitter className='cursor-pointer text-white h-6 w-6' />
                            </a>
                            <a href='https://www.youtube.com/@techland01/featured'>
                                <FaYoutube className='cursor-pointer text-white h-6 w-6' />
                            </a>
                            <a href='https://wa.me/917827154022?text='>
                                <FaWhatsapp className='cursor-pointer text-white h-6 w-6' />
                            </a>
                        </div>
                    </div>
                    <div className='w-full  space-x-6 flex flex-row  text-[#D4D3D7] justify-around text-xs Tablet:text-base px-4 Laptop-sm:px-0'>
                        <div className='space-y-5 flex flex-col items-start'>
                            <Link href="/mini-india">Mini India</Link>
                            <Link href="/mini-world">Mini World</Link>
                            <Link href="/landpro">LandPro</Link>
                        </div>
                        <div className='space-y-5 flex flex-col items-start'>
                            <a href="https://tech-land.in/">Techland</a>
                            <a href="https://soilsense.in/">SoilSense</a>
                            <a href="https://organic-chef.com/">Organic Chef</a>
                        </div>
                        <div className='space-y-5 flex flex-col items-start'>
                            <Link href="/about">About Us</Link>
                            <button>Career</button>
                            <button>FAQ</button>
                        </div>
                        <div className='space-y-5 flex flex-col items-start'>
                            <button>Privacy Policy</button>
                            <button>Cookie Policy</button>
                            <button>Terms</button>
                        </div>
                    </div>
                </div>
                <div className='text-[#BEBEBF] text-right text-xs  pr-4 Tablet:pr-0'>
                    Copyright reserved@snsilos.in
                </div>
            </div>
        </div>
    )
}

export default Footer