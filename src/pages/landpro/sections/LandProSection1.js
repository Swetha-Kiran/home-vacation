import React from 'react'

function LandProSection1() {
    return (
        <div className='w-full h-auto Laptop-sm:h-[88vh]  grid Laptop-sm:grid-cols-12 Tablet:grid-cols-8 Mobile:grid-cols-4 Laptop-sm:gap-x-6 Mobile:gap-x-4 Desktop:px-[10.5vw] Laptop-lg:px-[9.7vw] Laptop-sm:px-[1.6vw] Tablet:px-[2vw] px-[1vh]'>
            <div className='w-full px-6 Laptop-lg:px-24 Laptop-lg:relative pt-8 Laptop-lg:pt-44 pb-8 space-y-[72px] col-span-4 Tablet:col-span-8 Laptop-sm:col-span-12 flex flex-col  items-center '>
                <div className=' w-full  space-y-6 text-left Laptop-lg:text-center'>
                    <p className='font-montserrat font-bold text-3xl  Laptop-lg:text-5xl text-[#2A2B39]'>Become a LandPro Investor</p>
                    <p className='font-montserrat font-normal text-base text-[#6E737F]'>Embark on a unique investment journey with Mini India. Transform a piece of land into a vibrant district, showcasing the rich cultural heritage of India</p>
                </div>

                <div className='w-full text-[#6E737F]  static space-y-16 flex flex-col items-center justify-center Laptop-lg:absolute top-[36vh] '>
                    <div className='static Laptop-lg:absolute -left-[7vw] top-[2vh] w-auto Tablet:w-[360px]  p-6 bg-[#FFFFFF] border rounded-3xl shadow-custom font-montserrat font-normal text-base text-center'>
                        Invest in one of 432 distinct districts within our Global Tourism initiative
                    </div>
                    <div className='static Laptop-lg:absolute left-[25vw] top-[8vh] w-auto Tablet:w-[360px] p-6 bg-[#FFFFFF] border rounded-3xl shadow-custom font-montserrat font-normal text-base text-center'>
                        Experience the flexibility of developing  your district your way
                    </div>
                    <div className='static Laptop-lg:absolute left-[60vw] top-0 w-auto Tablet:w-[360px] p-6 bg-[#FFFFFF] border rounded-3xl shadow-custom font-montserrat font-normal text-base text-center'>
                        Benefit from potential rental income, flexible construction options, and the potential for high returns
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandProSection1