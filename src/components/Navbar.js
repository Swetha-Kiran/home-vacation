import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

function Navbar() {
    const router = useRouter();
    const [scrolling, setScrolling] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    

    const handleNav = () => {
        setMenuOpen(!menuOpen);
    }

    return (

        <nav className={`h-[70px] w-full space-x-6 px-8 sticky top-6 z-10 shadow-md transition duration-300 ${scrolling ? 'bg-[#FCFDFF]' : 'bg-[#F7F9FC]'}`}>
            <div className='space-x-2  flex h-full justify-between items-center'>
                <div className='flex items-center p-1'>
                    <Image className='h-[44px] w-[44px] Laptop-sm:h-[54px] Laptop-sm:w-[54px]' src="/NavbarImages/Brand Logo Icon.svg" alt="Global Tourism" width="54" height="54">
                    </Image>
                    <div className='text-[#2A2B39] font-lemon text-lg Laptop-sm:text-2xl '>
                        <h1>Global Tourism</h1>
                    </div>
                </div>

                <div className='hidden Laptop-lg:flex'>
                    <ul className='space-x-6 text-sm font-montserrat font-semibold hidden Laptop-lg:flex'>
                        <Link href="/" className='px-5 py-2 space-y-2.5'>
                            <li className={`text-[#2A2B39] ${router.pathname === '/' ? 'text-[#428358]' : 'hover:text-[#68BF7B]'}`}>Home</li>
                        </Link>
                        <Link href="/mini-india" className='px-5 py-2 space-y-2.5'>
                            <li className={`text-[#2A2B39] ${router.pathname === '/mini-india' ? 'text-[#428358]' : 'hover:text-[#68BF7B]'}`}>Mini India</li>
                        </Link>
                        <Link href="/mini-world" className='px-5 py-2 space-y-2.5'>
                            <li className={`text-[#2A2B39] ${router.pathname === '/mini-world' ? 'text-[#428358]' : 'hover:text-[#68BF7B]'}`}>Mini World</li>
                        </Link>
                        <Link href="/landpro" className='px-5 py-2 space-y-2.5'>
                            <li className={`text-[#2A2B39] ${router.pathname === '/landpro' ? 'text-[#428358]' : 'hover:text-[#68BF7B]'}`}>LandPro</li>
                        </Link>
                        <Link href="/about" className='px-5 py-2 space-y-2.5'>
                            <li className={`text-[#2A2B39] ${router.pathname === '/about' ? 'text-[#428358]' : 'hover:text-[#68BF7B]'}`}>About Us</li>
                        </Link>
                    </ul>
                </div>
                <div className='space-y-2.5 w-93 font-montserrat font-bold text-[16px] hidden Laptop-lg:flex'>
                    <Link href="/contact">
                        <button className='px-6 space-y-auto text-[#2A2B39] button-bg w-141 h-[48px]'>Contact Us</button>
                    </Link>
                </div>
                <div onClick={handleNav} className='cursor-pointer Laptop-lg:hidden'>
                    <AiOutlineMenu size={25} />
                </div>
                <div className={
                    menuOpen ? "fixed right-0 top-0 w-[50%] h-screen Laptop-lg:hidden bg-[#F7F9FC]  ease-in duration-500"
                        : "fixed right-[-100%] top-0 ease-in duration-500"
                }>

                    <div className='flex w-full items-center justify-end'>
                        <div onClick={handleNav} className='cursor-pointer'>
                            <AiOutlineClose size={20} />
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <ul className='space-x-6 text-sm font-montserrat font-semibold'>
                            <Link href="/" className='px-5 py-2 space-y-2.5'>
                                <li className={`text-[#2A2B39] ${router.pathname === '/' ? 'text-[#428358]' : 'hover:text-[#68BF7B]'}`}>Home</li>
                            </Link>
                            <Link href="/mini-india" className='px-5 py-2 space-y-2.5'>
                                <li className={`text-[#2A2B39] ${router.pathname === '/mini-india' ? 'text-[#428358]' : 'hover:text-[#68BF7B]'}`}>Mini India</li>
                            </Link>
                            <Link href="/mini-world" className='px-5 py-2 space-y-2.5'>
                            <li className={`text-[#2A2B39] ${router.pathname === '/mini-world' ? 'text-[#428358]' : 'hover:text-[#68BF7B]'}`}>Mini World</li>
                        </Link>
                            <Link href="/landpro" className='px-5 py-2 space-y-2.5'>
                                <li className={`text-[#2A2B39] ${router.pathname === '/landpro' ? 'text-[#428358]' : 'hover:text-[#68BF7B]'}`}>LandPro</li>
                            </Link>
                            <Link href="/about" className='px-5 py-2 space-y-2.5'>
                                <li className={`text-[#2A2B39] ${router.pathname === '/about' ? 'text-[#428358]' : 'hover:text-[#68BF7B]'}`}>About Us</li>
                            </Link>
                        </ul>
                        <div className='space-y-[10px] w-93 font-montserrat font-bold text-[16px]'>
                            <Link href="/contact">
                                <button className='px-4 space-y-auto text-[#2A2B39] button-bg w-auto h-[40px]'>Contact Us</button>
                            </Link>
                        </div>
                    </div>

                </div>


            </div>
        </nav>
    )
}

export default Navbar