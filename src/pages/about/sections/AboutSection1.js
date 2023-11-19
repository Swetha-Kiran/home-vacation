import React from 'react'
import Image from 'next/image'

function AboutSection1() {
    return (
        <div className='w-full  h-auto relative overflow-hidden Laptop-sm:h-[88vh]  grid Laptop-sm:grid-cols-12 Tablet:grid-cols-8 Mobile:grid-cols-4 Laptop-sm:gap-x-6 Mobile:gap-x-4 Desktop:px-[10.5vw] Laptop-lg:px-[9.7vw] Laptop-sm:px-[1.6vw] Tablet:px-[2vw]'>
            <img className=' absolute Mobile:-left-[90vw] Tablet:-top-8 Tablet:h-[500px] Tablet:w-[600px] Laptop-sm:w-[600px] Laptop-sm:h-[76vh] Laptop-lg:w-[675px] Laptop-sm:top-16 Tablet:-left-[560px]' src="/AboutPageImages/Blob1.svg" alt="" width="675" height="561" />
            <img className='absolute top-[280px] Tablet:top-[200px] Laptop-sm:-top-[80px] -right-[28vw] -z-10 Laptop-sm:w-[880px] Laptop-lg:w-[900px] Desktop:w-[950px]' src="/AboutPageImages/Blob2.svg" alt="" width="950" height="812" />
            <img className='absolute h-4 w-5 Tablet:w-[21px] Tablet:h-[21px] top-[300px] left-[5vw] Laptop-sm:top-[7vh] Laptop-sm:left-[45vw]' src="/AboutPageImages/Circle.svg" alt="" width="21" height="21" />
            <div className='w-full  relative  pt-10 Laptop-sm:pt-0 px-6 Laptop-sm:px-0 col-span-4 Tablet:col-span-8 Laptop-sm:col-span-12 space-x-6 pb-4 Laptop-sm:pb-8 space-y-8 Tablet:space-y-10 Laptop-sm:space-y-0 flex flex-col Laptop-sm:flex-row items-center justify-start'>
                <div className='w-full Laptop-sm:w-[40%] space-y-6 text-left font-montserrat'>
                    <div className='space-y-2.5 px-6 py-2 w-[136px] h-9 rounded-[58px] border flex items-center justify-center bg-[#dff7e5]'>
                        <p className='text-[#68BF7B]  font-bold text-base'>SNSILOS </p>
                    </div>
                    <p className='font-bold text-4xl Laptop-sm:text-5xl'>About Us</p>
                    <p className='font-normal text-base text-[#6E737F]'>{`We're on a mission to create a unique cultural experience. Discover the story behind Mini India and our vision for the future.`}</p>
                </div>

                <Image className=" Laptop-sm:absolute left-[40vw] Z-10" src="/AboutPageImages/Image.svg" alt="" width="600" height="600"></Image>
             
            </div>
        </div>
    )
}

export default AboutSection1 