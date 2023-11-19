import React from 'react'
import Image from "next/image"

function LandProSection2() {
    return (
        <div className='h-auto w-full  grid Laptop-sm:grid-cols-12 Tablet:grid-cols-8 Mobile:grid-cols-4 Laptop-sm:gap-x-6 Mobile:gap-x-4 Desktop:px-[10.5vw] Laptop-lg:px-[9.7vw] Laptop-sm:px-[1.6vw] Tablet:px-[2vw] px-[1vh]'>
            <div className='col-span-4 Tablet:col-span-8 Laptop-sm:col-span-12 space-y-[60px] py-20 px-6 Tablet:px-0'>
                <p className='space-y-4 font-montserrat font-semibold text-3xl Tablet:text-[32px] text-[#2A2B39]'>About the Project</p>
                <div className='w-full space-y-12 h-auto'>
                    <div className=' w-full h-auto space-y-10 Tablet:space-y-0 Tablet:space-x-10 flex flex-col Tablet:flex-row justify-center items-center'>
                        <div className='w-full Tablet:w-[50%] space-y-10 flex flex-col justify-center items-center '>
                                 <Image src="/LandproPageImages/Icon1.svg" alt="" width="150" height="150"></Image>
                                 <div className='space-y-4 font-montserrat flex flex-col justify-center items-center'>
                                    <p className='font-bold text-2xl'>Unique Vision</p>
                                    <p className='font-normal text-base text-[#6E737F] text-left Tablet:text-center'>{`Mini India is a unique project within our Global Tourism initiative. We aim to create distinct districts, each representing a different aspect of India's rich cultural heritage. Each district is designed to provide an immersive cultural experience for guests.`}</p>
                                 </div>
                        </div>
                        <div className='w-full Tablet:w-[50%]  space-y-10 flex flex-col justify-center items-center'>
                                 <Image src="/LandproPageImages/Icon2.svg" alt="" width="150" height="150"></Image>
                                 <div className='space-y-4 font-montserrat flex flex-col justify-center items-center'>
                                    <p className='font-bold text-2xl'>Development Plan</p>
                                    <p className='font-normal text-base text-[#6E737F] text-left Tablet:text-center'>Our development plans for each district are carefully designed. As a LandPro Investor, you have the flexibility to build on your land yourself, bring in a third party, or let us connect you with a trusted partner. Our team will be available to provide support and guidance throughout this process.</p>
                                 </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>

    )
}

export default LandProSection2