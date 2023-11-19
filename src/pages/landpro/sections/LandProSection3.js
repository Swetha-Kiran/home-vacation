import React from 'react'
import Image from "next/image"

function LandProSection3() {
    return (
        <div className='h-auto w-full  grid Laptop-sm:grid-cols-12 Tablet:grid-cols-8 Mobile:grid-cols-4 Laptop-sm:gap-x-6 Mobile:gap-x-4 Desktop:px-[10.5vw] Laptop-lg:px-[9.7vw] Laptop-sm:px-[1.6vw] Tablet:px-[2vw] px-[1vh]'>
            <div className='py-20 px-6 Tablet:px-0 space-y-8 col-span-4 Tablet:col-span-8 Laptop-sm:col-span-12'>
                <p className='w-full space-y-4 font-montserrat font-semibold text-3xl Tablet:text-[32px] text-[#2A2B39]'>How to become a LandPro Investor</p>
                <div className='w-full flex flex-col'>
                    <div className='h-auto Tablet:h-[316px] flex flex-col Tablet:flex-row justify-between items-center font-montserrat'>
                        <div className='w-full Tablet:w-[50%] space-y-6 py-12 pr-8  flex flex-col items-start Tablet:items-end'>
                            <div className='rounded-[100px] bg-[#428358] text-[#FFFFFF] h-[60px] w-[60px] flex items-center justify-center font-semibold text-2xl'>1</div>
                            <p className='font-semibold text-xl text-[#2A2B39] text-right'>Download Our App</p>
                            <p className='text-[#6E737F] font-normal text-base text-left Tablet:text-right'>{`Begin your journey by downloading our mobile app. It's your gateway to becoming a LandPro Investor, providing you with all the information you need about our unique project and the available districts.`}</p>
                        </div>
                        <Image className='hidden Tablet:block' src="/LandproPageImages/Center1.svg" alt="" width="48" height="316"></Image>
                        <Image className='Tablet:hidden' src="/LandproPageImages/HorizontalDivider1.svg" alt="" width="316" height="4"></Image>
                        <div className='w-full Tablet:w-[50%] pl-8 pb-8 pt-12'>
                            <Image src="/LandproPageImages/Icon3.svg" alt="" width="200" height="200"></Image>
                        </div>
                    </div>
                    <div className='h-auto Tablet:h-[296px] Mobile:hidden Tablet:flex flex-col Tablet:flex-row  justify-between items-center font-montserrat'>
                        <div className='w-[50%] space-y-6 py-12 pr-8  flex flex-col items-center Tablet:items-end'>
                            <Image src="/LandproPageImages/Icon4.svg" alt="" width="200" height="200"></Image>
                        </div>
                        <Image src="/LandproPageImages/Center2.svg" alt="" width="48" height="296"></Image>

                        <div className='w-[50%] Tablet:pl-8 py-12 space-y-6 flex flex-col items-start'>
                            <div className='rounded-[100px] bg-[#428358] text-[#FFFFFF] h-[60px] w-[60px] flex items-center justify-center font-semibold text-2xl'>2</div>
                            <p className='font-semibold text-xl text-[#2A2B39]'>Explore the Opportunity</p>
                            <p className='text-[#6E737F] font-normal text-base text-left'>Use our app to explore the opportunity to become a LandPro Investor. Learn about the benefits of investing, the potential returns, and the unique aspects of each of our districts.</p>
                        </div>
                    </div>
                    <div className='h-auto Tablet:h-[316px] Tablet:hidden flex flex-col Tablet:flex-row justify-between items-center font-montserrat'>
                        <div className='w-full Tablet:w-[50%] space-y-6 py-12 pr-8  flex flex-col items-start Tablet:items-end'>
                            <div className='rounded-[100px] bg-[#428358] text-[#FFFFFF] h-[60px] w-[60px] flex items-center justify-center font-semibold text-2xl'>2</div>
                            <p className='font-semibold text-xl text-[#2A2B39] text-right'>Explore the Opportunity</p>
                            <p className='text-[#6E737F] font-normal text-base text-left Tablet:text-right'>Use our app to explore the opportunity to become a LandPro Investor. Learn about the benefits of investing, the potential returns, and the unique aspects of each of our districts.</p>
                        </div>
                        <Image src="/LandproPageImages/HorizontalDivider2.svg" alt="" width="316" height="4"></Image>
                        <div className='w-full Tablet:w-[50%] pl-8 pb-8 pt-12 '>
                            <Image src="/LandproPageImages/Icon4.svg" alt="" width="200" height="200"></Image>
                        </div>
                    </div>
                    <div className='h-auto Tablet:h-[296px] flex flex-col Tablet:flex-row  justify-between items-center font-montserrat'>
                        <div className='w-full Tablet:w-[50%] space-y-6 py-12 pr-8  flex flex-col items-start Tablet:items-end'>
                            <div className='rounded-[100px] bg-[#428358] text-[#FFFFFF] h-[60px] w-[60px] flex items-center justify-center font-semibold text-2xl'>3</div>
                            <p className='font-semibold text-xl text-[#2A2B39] text-right'>Choose Your District</p>
                            <p className='text-[#6E737F] font-normal text-base text-left Tablet:text-right'>{`Choose from one of our distinct districts for your investment. Each district is approximately 0.5 acres and represents a different aspect of India's rich cultural heritage.`}</p>
                        </div>
                        <Image className='hidden Tablet:block' src="/LandproPageImages/Center2.svg" alt="" width="48" height="296"></Image>
                        <Image className='Tablet:hidden' src="/LandproPageImages/HorizontalDivider2.svg" alt="" width="316" height="4"></Image>
                        <div className='w-full Tablet:w-[50%] pl-8 pb-8 pt-12'>
                            <Image src="/LandproPageImages/Icon5.svg" alt="" width="200" height="200"></Image>
                        </div>
                    </div>
                    <div className='h-auto Tablet:h-[296px] Mobile:hidden Tablet:flex flex-col Tablet:flex-row  justify-between items-center font-montserrat'>
                        <div className='w-[50%]  space-y-6 py-12 pr-8 flex flex-col items-center Tablet:items-end'>
                            <Image src="/LandproPageImages/Icon6.svg" alt="" width="200" height="200"></Image>
                        </div>
                        <Image src="/LandproPageImages/Center2.svg" alt="" width="48" height="296"></Image>
                        <div className='w-[50%] Tablet:pl-8 py-12 space-y-6 flex flex-col items-start'>
                            <div className='rounded-[100px] bg-[#428358] text-[#FFFFFF] h-[60px] w-[60px] flex items-center justify-center font-semibold text-2xl'>4</div>
                            <p className='font-semibold text-xl text-[#2A2B39]'>Purchase Land</p>
                            <p className='text-[#6E737F] font-normal text-base text-left'>Use our app to explore the opportunity to become a LandPro Investor. Learn about the benefits of investing, the potential returns, and the unique aspects of each of our districts.</p>
                        </div>
                    </div>
                    <div className='h-auto Tablet:h-[316px] Tablet:hidden flex flex-col Tablet:flex-row justify-between items-center font-montserrat'>
                        <div className='w-full Tablet:w-[50%] space-y-6 py-12 pr-8  flex flex-col items-start Tablet:items-end'>
                            <div className='rounded-[100px] bg-[#428358] text-[#FFFFFF] h-[60px] w-[60px] flex items-center justify-center font-semibold text-2xl'>4</div>
                            <p className='font-semibold text-xl text-[#2A2B39] text-right'>Purchase Land</p>
                            <p className='text-[#6E737F] font-normal text-base text-left Tablet:text-right'>Use our app to explore the opportunity to become a LandPro Investor. Learn about the benefits of investing, the potential returns, and the unique aspects of each of our districts.</p>
                        </div>
                        <Image src="/LandproPageImages/HorizontalDivider2.svg" alt="" width="316" height="4"></Image>
                        <div className='w-full Tablet:w-[50%] pl-8 pb-8 pt-12 '>
                            <Image src="/LandproPageImages/Icon6.svg" alt="" width="200" height="200"></Image>
                        </div>
                    </div>
                    <div className='h-auto Tablet:h-[296px] flex flex-col Tablet:flex-row justify-between items-center font-montserrat'>
                        <div className='w-full Tablet:w-[50%] space-y-6 py-12 pr-8  flex flex-col items-start Tablet:items-end'>
                            <div className='rounded-[100px] bg-[#428358] text-[#FFFFFF] h-[60px] w-[60px] flex items-center justify-center font-semibold text-2xl'>5</div>
                            <p className='font-semibold text-xl text-[#2A2B39] text-right'>Plan Your District</p>
                            <p className='text-[#6E737F] font-normal text-base text-left Tablet:text-right'>{`With your land purchased, it's time to plan your district. You have the flexibility to build on your land yourself, bring in a third party, or let us connect you with a trusted partner. Our team will be available to provide support and guidance throughout this process.`}</p>
                        </div>
                        <Image className='hidden Tablet:block' src="/LandproPageImages/Center2.svg" alt="" width="48" height="316"></Image>
                        <Image className='Tablet:hidden' src="/LandproPageImages/HorizontalDivider2.svg" alt="" width="316" height="4"></Image>
                        <div className='w-full Tablet:w-[50%]  pl-8 pb-8 pt-12'>
                            <Image src="/LandproPageImages/Icon7.svg" alt="" width="200" height="200"></Image>
                        </div>
                    </div>
                    <div className='h-auto Tablet:h-[296px] Mobile:hidden Tablet:flex flex-col Tablet:flex-row  justify-between items-center font-montserrat'>
                        <div className='w-[50%] space-y-6 py-12 pr-8  flex flex-col items-center Tablet:items-end'>
                            <Image className='Tablet:hidden' src="/LandproPageImages/Icon8.svg" alt="" width="200" height="200"></Image>
                        </div>
                        <Image src="/LandproPageImages/Center2.svg" alt="" width="48" height="296"></Image>

                        <div className='w-[50%] Tablet:pl-8 py-12 space-y-6 flex flex-col items-start'>
                            <div className='rounded-[100px] bg-[#428358] text-[#FFFFFF] h-[60px] w-[60px] flex items-center justify-center font-semibold text-2xl'>6</div>
                            <p className='font-semibold text-xl text-[#2A2B39]'>Construct Your District</p>
                            <p className='text-[#6E737F] font-normal text-base text-left'>{`After your plans are in place, you can begin construction. Whether you're building yourself or working with a partner, our team will be there to provide support and ensure everything goes smoothly`}.</p>
                        </div>
                    </div>
                    <div className='h-auto Tablet:h-[316px] Tablet:hidden flex flex-col Tablet:flex-row justify-between items-center font-montserrat'>
                        <div className='w-full Tablet:w-[50%] space-y-6 py-12 pr-8  flex flex-col items-start Tablet:items-end'>
                            <div className='rounded-[100px] bg-[#428358] text-[#FFFFFF] h-[60px] w-[60px] flex items-center justify-center font-semibold text-2xl'>6</div>
                            <p className='font-semibold text-xl text-[#2A2B39] text-right'>Construct Your District</p>
                            <p className='text-[#6E737F] font-normal text-base text-left Tablet:text-right'>{`After your plans are in place, you can begin construction. Whether you're building yourself or working with a partner, our team will be there to provide support and ensure everything goes smoothly`}</p>
                        </div>
                        <Image src="/LandproPageImages/HorizontalDivider2.svg" alt="" width="316" height="4"></Image>
                        <div className='w-full Tablet:w-[50%] pl-8 pb-8 pt-12 '>
                            <Image src="/LandproPageImages/Icon8.svg" alt="" width="200" height="200"></Image>
                        </div>
                    </div>
                    <div className='h-auto Tablet:h-[296px] flex flex-col Tablet:flex-row justify-between items-center font-montserrat'>
                        <div className='w-full Tablet:w-[50%] space-y-6 py-12 pr-8  flex flex-col items-start Tablet:items-end'>
                            <div className='rounded-[100px] bg-[#428358] text-[#FFFFFF] h-[60px] w-[60px] flex items-center justify-center font-semibold text-2xl'>7</div>
                            <p className='font-semibold text-xl text-[#2A2B39] text-right'>Begin Operations</p>
                            <p className='text-[#6E737F] font-normal text-base text-left Tablet:text-right'>{`Once construction is complete, you can begin operations. We offer long-term rental management services to help ensure the success of your district. From property maintenance to guest relations, we handle the details so you can focus on your investment.`}</p>
                        </div>
                        <Image className='hidden Tablet:block' src="/LandproPageImages/Center2.svg" alt="" width="48" height="316"></Image>
                        <Image className='Tablet:hidden' src="/LandproPageImages/HorizontalDivider2.svg" alt="" width="316" height="4"></Image>
                        <div className='w-full Tablet:w-[50%] pl-8 pb-8 pt-12'>
                            <Image src="/LandproPageImages/Icon9.svg" alt="" width="200" height="200"></Image>
                        </div>
                    </div>
                    <div className='h-auto Tablet:h-[60px] hidden Tablet:flex justify-center'>
                        <Image src="/LandproPageImages/Center8.svg" alt="" width="48" height="60"></Image>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default LandProSection3