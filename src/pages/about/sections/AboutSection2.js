import React from 'react'

function AboutSection2() {
    return (
        <div className='w-full h-auto grid Laptop-sm:grid-cols-12 Tablet:grid-cols-8 Mobile:grid-cols-4 Laptop-sm:gap-x-6 Mobile:gap-x-4 Desktop:px-[10.5vw] Laptop-lg:px-[9.7vw] Laptop-sm:px-[1.6vw] Tablet:px-[2vw]'>
            <div className='w-full px-6 Laptop-sm:px-0  col-span-4 Tablet:col-span-8 Laptop-sm:col-span-12 space-y-[60px] py-20 font-montserrat'>
                <p className='font-semibold text-[32px] text-[#2A2B39]'>Our Story</p>
                <p className='font-normal text-base Tablet:text-xl text-[#6E737F]'>{`Mini India started with a simple idea: to create a unique cultural experience that showcases the rich heritage of India. Our journey began with the acquisition of land, which we divided into 432 distinct districts. Each district is designed to provide an immersive cultural experience, representing a different aspect of India's rich heritage.`}</p>
            </div>
        </div>
    )
}

export default AboutSection2
