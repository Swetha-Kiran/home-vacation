import React from 'react'
import Image from 'next/image'

function Section2() {

    return (
        <div className=' w-full h-auto Laptop-sm:h-4/5 grid Laptop-sm:grid-cols-12 Tablet:grid-cols-8 Mobile:grid-cols-4 Laptop-sm:gap-x-6 Mobile:gap-x-4 Desktop:px-[10.5vw] Laptop-lg:px-[9.7vw] Laptop-sm:px-[1.6vw] Tablet:px-0 '>
            <div className='col-span-4 Tablet:col-span-8 Laptop-sm:col-span-12 space-y-6 pt-20 pb-8 text-[#2A2B39] '>
                <div className2='  h-[39px]  col-span-12 space-x-2.5 align-left'>
                    <h1 className=' font-montserrat font-semibold text-3xl Tablet:text-[32px] pl-6 leading-10'>Discover Mini India</h1>
                </div>
            </div>
            <div className=" h-auto Laptop-sm:h-[645px] col-span-4 Tablet:col-span-8 Laptop-sm:col-span-12 flex Laptop-sm:flex-row Mobile:flex-col justify-between items-center overflow-hidden bg-white Laptop-sm:border border-[#D4D3D7] Laptop-sm:rounded-3xl">
                <div className="h-full px-6  Laptop-sm:px-[72px] py-6 space-y-10 Tablet:space-y-16 Laptop-sm:space-y-[72px] flex flex-col justify-center items-start">
                    <h5 className="font-montserrat font-semibold text-xl Tablet:text-2xl text-[#2A2B39]">Mini India: A Cultural Odyssey</h5>
                    <p className="font-montserrat font-normal text-sm Tablet:text-base  ">{`A unique cultural experience awaits you. Explore our distinct districts, each showcasing a different aspect of India's rich cultural heritage.`}</p>
                    <button className='w-[280px] h-[48px] button-bg font-montserrat font-bold text-[16px] '>Become a LandPro Investor</button>
                </div>
                <Image className="h-full w-full object-cover " src="/HomepageImages/Section2.svg" alt="" width="552" height="645">
                </Image>
            </div>
        </div>
    )
}

export default Section2