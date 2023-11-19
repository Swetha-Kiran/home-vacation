import React from 'react'
import Image from "next/image"

function Section3() {

  return (
    <div className=' w-full h-auto Laptop-sm:h-4/5 grid Laptop-sm:grid-cols-12 Tablet:grid-cols-8 Mobile:grid-cols-4 Laptop-sm:gap-x-6 Mobile:gap-x-4 Desktop:px-[10.5vw] Laptop-lg:px-[9.7vw] Laptop-sm:px-[1.6vw] Tablet:px-0'>
      <div className=' col-span-4 Tablet:col-span-8 Laptop-sm:col-span-12 space-y-6 pt-[15vh] pb-[4vh] text-[#2A2B39] '>
        <div className=' space-y-4 text-left px-6 Laptop-sm:px-0'>
          <p className='h-auto font-montserrat font-semibold text-2xl Tablet:text-[32px] leading-10'>Become a LandPro Investor</p>
          <p className='h-auto font-montserrat font-normal text-base Tablet:text-xl leading-6 text-[#6E737F]'>{`Invest in a unique cultural experience. Be part of our vision to create distinct districts, each showcasing India's rich heritage.`}</p>
        </div>
        <div className=' w-full h-auto Laptop-sm:h-[650px]   px-6 Laptop-sm:px-0'>
          <div className='space-y-6 flex flex-col Laptop-sm:flex-row justify-between items-center'>
            <div className='py-2.5  Laptop-sm:pr-[72px]  w-full flex items-center Tablet:justify-center'>
              <Image className="object-contain" src="/HomepageImages/Section3.svg" alt="section 3" height="480" width="480" >
              </Image>
            </div>
            <div className='w-full  space-y-[60px]'>
              <hr className='border border-[#BEBEBF]' />
              <div className='space-y-8  Laptop-sm:px-[72px] flex flex-col justify-center items-center Laptop-sm:items-start ' >
                <Image src="/HomepageImages/Section3-2.svg" alt="benefits" height="120" width="120">
                </Image>
                <p className='font-montserrat font-semibold text-xl Tablet:text-2xl'>Potential for High Returns</p>
                <p className='font-montserrat font-normal text-sm Tablet:text-base leading-5'>Benefit from the growing interest in immersive cultural tourism experiences.
                </p>
                <div className='w-[168px] h-10 px-4 py-3 space-x-2 flex  flex-row  items-center button-bg cursor-pointer'>
                  <button className='text-[#2A2B39] font-montserrat font-semibold text-small Laptop-sm:text-base leading-5'>Learn More  </button>
                  <Image src="/HomepageImages/Arrow 1.svg" alt="" width="32" height="8"></Image>
                </div>
              </div>
              <hr className=' border border-[#BEBEBF]' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section3