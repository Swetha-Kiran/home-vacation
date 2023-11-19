import React from 'react'
import Image from "next/image"
import { useState } from 'react';

function LandProSection4() {
   
  
  return (
    <div className='w-full h-auto Laptop-sm:h-[120%] grid Laptop-sm:grid-cols-12 Tablet:grid-cols-8 Mobile:grid-cols-4 Laptop-sm:gap-x-6 Mobile:gap-x-4 Desktop:px-[10.5vw] Laptop-lg:px-[9.7vw] Laptop-sm:px-[1.6vw] Tablet:px-[2vw] Mobile:px-[1vw]'>
        <div className='py-8 px-6 Tablet:px-0 space-y-12 col-span-4 Tablet:col-span-8 Laptop-sm:col-span-12'>
            <div className='w-full space-y-4 font-montserrat'>
                <p className='font-semibold text-3xl Tablet:text-[32px] text-[#2A2B39]'>Benefits of becoming a LandPro Investor</p>
                <p className='font-normal text-base leading-5 text-[#6E737F]'>{`As a LandPro Investor, you stand to gain several benefits. These include potential rental income, flexible construction options, and the potential for high returns. We also offer long-term rental management services, taking care of everything from property maintenance to guest relations.`}</p>
            </div>
            <div className='w-full space-y-6 flex flex-col'>
              <div className='w-full space-x-0 Tablet:space-x-6 flex flex-col items-center Tablet:items-baseline Tablet:flex-row justify-between'>
                <div className='w-auto Tablet:w-[360px] h-auto Laptop-sm:h-[488px] p-6 space-y-8 flex flex-col border border-transparent rounded-2xl cursor-pointer hover:border-[#68BF7B] hover:bg-[#EEF1F4] hover:text-[#428358]'>
                    <div className='p-4 bg-[#2A2B39] rounded-xl flex justify-center'>
                        <Image src="/LandproPageImages/BenefitsIcon1.svg" alt="" width="128" height="128"></Image>
                    </div>
                    <div className='space-y-4 font-montserrat flex flex-col'>
                        <p className='font-semibold text-xl Tablet:text-2xl leading-none '>Unique Investment Opportunity</p>
                        <p className='font-normal text-base leading-5 text-[#6E737F]'>{`Invest in one of 432 distinct districts, each representing a different aspect of India's rich cultural heritage. This unique opportunity allows you to contribute to and benefit from the growth of cultural tourism in India.`}</p>
                    </div>
                </div>
                <div className=' w-auto Tablet:w-[360px] h-auto Laptop-sm:h-[488px]  p-6 space-y-8 flex flex-col border border-transparent rounded-2xl cursor-pointer hover:border-[#68BF7B] hover:bg-[#EEF1F4] hover:text-[#428358]'>
                    <div className='p-4 bg-[#2A2B39] rounded-xl flex justify-center'>
                        <Image src="/LandproPageImages/BenefitsIcon2.svg" alt="" width="128" height="128"></Image>
                    </div>
                    <div className='space-y-4 font-montserrat flex flex-col'>
                        <p className='font-semibold text-xl Tablet:text-2xl leading-none'>Flexible Construction Options</p>
                        <p className='font-normal text-base leading-5 text-[#6E737F]'>{`Develop your district in the way that suits you best. Whether you choose to build on your land yourself, bring in a third party, or let us connect you with a trusted partner, you're in control.`}</p>
                    </div>
                </div>
                <div className='w-auto Tablet:w-[360px] h-auto Laptop-sm:h-[488px]  p-6 space-y-8 flex flex-col border border-transparent rounded-2xl hover:border-[#68BF7B] cursor-pointer hover:bg-[#EEF1F4] hover:text-[#428358]'>
                    <div className='p-4 bg-[#2A2B39] rounded-xl flex justify-center items-center'>
                        <Image src="/LandproPageImages/BenefitsIcon3.svg" alt="" width="128" height="128"></Image>
                    </div>
                    <div className='space-y-4 font-montserrat'>
                        <p className='font-semibold text-xl Tablet:text-2xl leading-none'>Potential for High <br/> Returns</p>
                        <p className='font-normal text-base leading-5 text-[#6E737F]'>{`With the growing interest in immersive cultural tourism experiences, your investment has the potential for high returns. As more tourists seek out these unique experiences, the demand for our districts is expected to increase, potentially leading to higher rental income and property appreciation.`}</p>
                    </div>
                </div>
              </div>
              <div className='w-full space-x-0 Tablet:space-x-6 flex flex-col items-center Tablet:items-baseline Tablet:flex-row justify-between'>
                <div className='w-auto Tablet:w-[360px] h-auto Laptop-sm:h-[488px] p-6 space-y-8 flex flex-col border border-transparent rounded-2xl cursor-pointer hover:border-[#68BF7B] hover:bg-[#EEF1F4] hover:text-[#428358]'>
                    <div className='p-4 bg-[#2A2B39] rounded-xl flex justify-center'>
                        <Image src="/LandproPageImages/BenefitsIcon4.svg" alt="" width="128" height="128"></Image>
                    </div>
                    <div className='space-y-4 font-montserrat'>
                        <p className='font-semibold text-xl Tablet:text-2xl leading-none'>Long-Term Rental Management</p>
                        <p className='font-normal text-base leading-5 text-[#6E737F]'>{`We offer long-term rental management services, taking care of everything from property maintenance to guest relations. This allows you to focus on your investment, while we handle the day-to-day operations.`}</p>
                    </div>
                </div>
                <div className='w-auto Tablet:w-[360px] h-auto Laptop-sm:h-[488px]  p-6 space-y-8 flex flex-col border border-transparent rounded-2xl hover:border-[#68BF7B] cursor-pointer hover:bg-[#EEF1F4] hover:text-[#428358]'>
                    <div className='p-4 bg-[#2A2B39] rounded-xl flex justify-center'>
                        <Image src="/LandproPageImages/BenefitsIcon5.svg" alt="" width="128" height="128"></Image>
                    </div>
                    <div className='space-y-4 font-montserrat'>
                        <p className='font-semibold text-xl Tablet:text-2xl leading-none'>Added Benefits and Management Services</p>
                        <p className='font-normal text-base leading-5 text-[#6E737F]'>{`We provide extra services and technology that lead to happier guests, higher returns, and effortless vacation rental ownership for you. These services may include advanced booking systems, professional cleaning services, and 24/7 guest support.`}</p>
                    </div>
                </div>
                <div className='w-auto Tablet:w-[360px] h-auto Laptop-sm:h-[488px]  p-6 space-y-8 flex flex-col border border-transparent rounded-2xl hover:border-[#68BF7B] cursor-pointer hover:bg-[#EEF1F4] hover:text-[#428358]'>
                    <div className='p-4 bg-[#2A2B39] rounded-xl flex justify-center items-center'>
                        <Image src="/LandproPageImages/BenefitsIcon6.svg" alt="" width="128" height="128"></Image>
                    </div>
                    <div className='space-y-8 font-montserrat'>
                        <p className='font-semibold text-xl Tablet:text-2xl leading-none '>Onboarding Made Easy</p>
                        <p className='font-normal text-base leading-5 text-[#6E737F]'>{`We provide a seamless onboarding process to help you get started quickly and easily as a LandPro Investor. Our team is here to guide you every step of the way, from purchasing land to constructing your district.`}</p>
                    </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default LandProSection4