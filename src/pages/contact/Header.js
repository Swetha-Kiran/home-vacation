import React from 'react'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import Link from 'next/link'


function Header() {

  const [scrolling, setScrolling] = useState(false);
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
  
  return (
    <div className={`h-[70px] w-full space-x-6 px-4 Tablet:px-8 sticky top-6 z-10 flex flex-row items-center justify-between shadow-md transition duration-300 ${scrolling ? 'bg-[#FCFDFF]' : 'bg-[#F7F9FC]'}`}>            
      <Link href="/" className='flex flex-row items-center justify-start space-x-2 Tablet:space-x-6 cursor-pointer'>
        <Image src="/ContactPageImages/Arrow.svg" alt="" width="24" height="24"></Image>
          <p className='font-montserrat font-semibold text-sm text-[#BEBEBF]'>Go back</p>
        </Link>
      
      <div className='flex flex-row items-center justify-start Tablet:space-x-2'>
        <Image className='p-1' src="/ContactPageImages/Brand Logo Icon.svg" alt="" width="54" height="54"></Image>
        <p className='font-lemon font-normal text-sm Tablet:text-lg Laptop-sm:text-2xl text-[#428358]'>Global Tourism</p>
      </div>
    </div>
  )
}

export default Header