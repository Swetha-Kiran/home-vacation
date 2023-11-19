import React from 'react'
import Image from "next/image"

function Section4() {

  return (
    <div className=' h-[70%] w-full grid Laptop-sm:grid-cols-12 Tablet:grid-cols-8 Mobile:grid-cols-4 Laptop-sm:gap-x-6 Mobile:gap-x-4 Desktop:px-[10.5vw] Laptop-lg:px-[9.7vw] Laptop-sm:px-[1.6vw] Tablet:px-0 Laptop-sm:py-[10vh] bg-[#2A2B39]'>
      <div className='bg-[#FCFDFF] col-span-4 Tablet:col-span-8 Laptop-sm:col-span-12 flex flex-col Laptop-sm:flex-row justify-between items-center Laptop-sm:rounded-3xl Laptop-sm:shadow-custom overflow-hidden'>
        <div className='h-full w-0 Laptop-sm:w-[40%] '>
          <Image className='h-full w-full object-cover' src="/HomepageImages/Section4-1.svg" alt="" width="400" height="573"></Image>
        </div>
        <div className='h-full w-full Laptop-sm:w-[60%] flex flex-col justify-between text-center p-6 Laptop-sm:p-12 space-y-[60px]'>
          <p className='font-montserrat font-bold text-3xl Tablet:text-5xl leading-[58px] text-[#2A2B39]'>
            Let’s Connect
          </p>
          <div className='flex flex-row items-center justify-start space-x-8'>
            <p className='font-montserrat font-medium text-base Laptop-sm:text-sm   text-left text-[#6E737F]'>{`Have questions or need more information? We're here to help. Click below to reach out to us`}</p>
            <Image src="/HomepageImages/Section4-2.svg" alt="" width="181" height="216">
            </Image>
          </div>
          <div className='space-y-6 mt-10'>
            <p className='text-center font-montserrat font-medium text-base Laptop-sm:text-sm  text-[#6E737F]'>Ready to get in touch? Click below to get in touch with our team. We look forward to connecting with you.</p>
            <button className='w-full h-[60px] px-6 button-bg rounded-2xl font-montserrat font-bold text-xl'>Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section4