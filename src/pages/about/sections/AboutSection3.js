import React from 'react'

function AboutSection3() {
  return (
    <div className='w-full h-auto grid Laptop-sm:grid-cols-12 Tablet:grid-cols-8 Mobile:grid-cols-4 Laptop-sm:gap-x-6 Mobile:gap-x-4 Desktop:px-[10.5vw] Laptop-lg:px-[9.7vw] Laptop-sm:px-[1.6vw] Tablet:px-[2vw]'>
    <div className='w-full px-6 Laptop-sm:px-0  col-span-4 Tablet:col-span-8 Laptop-sm:col-span-12 space-y-[60px] py-20 font-montserrat'>
        <p className='font-semibold text-[32px] text-[#2A2B39]'>Our Vision</p>
        <p className='font-normal text-base Tablet:text-xl text-[#6E737F]'>{`Our vision is to create a unique cultural tourism experience that allows people to explore India like never before. We aim to complete all districts within the next few years, and we're excited about the potential to contribute to the growth of cultural tourism in India.`}</p>
    </div>
</div>
  )
}

export default AboutSection3