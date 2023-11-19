import React from 'react'
import Image from 'next/image'

function Section5() {

  return (
    <div className='h-auto Laptop-sm:h-screen w-full grid Laptop-sm:grid-cols-12 Tablet:grid-cols-8 Mobile:grid-cols-4 Laptop-sm:gap-x-6 Mobile:gap-x-4 Desktop:px-[10.5vw] Laptop-lg:px-[9.7vw] Laptop-sm:px-[1.6vw] Tablet:px-0 pt-[13vh] pb-[10vh] bg-[#FCFDFF]'>
    <div className='bg-[#2A2B39] h-full w-full space-x-[72px] col-span-4 Tablet:col-span-8 Laptop-sm:col-span-12 Laptop-sm:border shadow-custom Laptop-sm:rounded-3xl px-6 Laptop-sm:px-0'>
      <div className='flex flex-col Laptop-sm:flex-row pt-[72px] pb-0 Laptop-sm:pb-[72px] pl-0 Laptop-sm:pl-[72px] space-y-12 Laptop-sm:space-y-0 space-x-[72px]  relative h-full w-full'>
        <div className=' text-[#FFFFFF] w-full space-y-10 flex flex-col  Laptop-sm:items-start justify-between  Laptop-sm:justify-center '>
          
          <p className='font-montserrat font-bold text-2xl Tablet:text-4xl'>Unleash Your Adventure with Global Tourism</p>
          <p className='font-montserrat font-normal text-sm Tablet:text-base'>{`Experience the richness of India's culture at your fingertips.`} <br />Download our app and step into a world of unique experiences.</p>
          <button className='bg-[#B4E816] px-6 space-y-2.5 w-[173px] h-12 text-[#2A2B39] font-montserrat font-bold text-base '>Download App</button>
        </div>
   
          <div className='border-box-container h-full w-[60%] flex items-start Tablet:w-[80%] Laptop-sm:w-full'>
            <Image className='rotate-6 object-cover max-w-full h-auto static Laptop-sm:absolute -top-[8vh] left-[44vw]' src='/HomepageImages/iPhone 14 Pro.svg' alt='' width='413' height='695' />
          </div>
        </div>
     
    </div>
  </div>
  )
}

export default Section5
