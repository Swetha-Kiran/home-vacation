import React, { useContext } from 'react'
import Image from 'next/image'
import FormContext from '../../../../context/FormContext'

function Steps() {
    const { step } = useContext(FormContext)
    return (
        <div className=' w-[40%] px-12 py-[72px] hidden Laptop-sm:flex flex-col items-center justify-center'>
            <div className='space-x-4 flex flex-row  justify-center'>
                <div className='flex flex-col items-center justify-center'>
                    <div className={`h-[60px] w-[60px] border-2 border-[#BEBEBF] rounded-[1000px] flex items-center justify-center font-montserrat font-semibold text-2xl
         ${step === 0 ? 'bg-[#428358]' : 'bg-[#68BF7B] opacity-40'} `}>
                        {step > 0 ? <Image src="/ContactPageImages/Done.svg" alt="" width="60" height="60"></Image>
                            : <p className={`${step >= 0 ? 'text-white' : 'text-[#BEBEBF] '}`}>1</p>}
                    </div>
                    <div className='w-[2px] h-[52px] bg-[#D4D3D7]'></div>
                </div>
                <div className='space-y-1 py-4 font-montserrat flex flex-col items-start justify-start'>
                    <p className='font-semibold text-xl text-[#6E737F]'>Contact info</p>
                    <p className='font-normal text-sm text-[#BEBEBF]'>Subtext info for the step</p>
                    <p className={`${step > 0 ? 'block' : 'hidden'} text-[#68BF7B] font-montserrat font-medium text-xs`}>Complete</p>
                </div>
            </div>
            <div className='space-x-4 flex flex-row  justify-center'>
                <div className='flex flex-col items-center justify-center'>
                    <div className={`h-[60px] w-[60px] border-2 border-[#BEBEBF]  rounded-[1000px] flex items-center justify-center font-montserrat font-semibold text-2xl
        ${step === 1 ? 'bg-[#428358]' : step > 1 ? 'bg-[#68BF7B] opacity-40' : ""}`}>
                        {step > 1 ? <Image src="/ContactPageImages/Done.svg" alt="" width="60" height="60"></Image>
                            : <p className={`${step >= 1 ? 'text-white' : 'text-[#BEBEBF] '}`}>2</p>}
                    </div>
                    <div className='w-[2px] h-[52px] bg-[#D4D3D7]'></div>
                </div>
                <div className='space-y-1 py-4 font-montserrat flex flex-col items-start justify-start'>
                    <p className='font-semibold text-xl text-[#6E737F]'>Experience</p>
                    <p className='font-normal text-sm text-[#BEBEBF]'>Subtext info for the step</p>
                    <p className={`${step > 1 ? 'block' : 'hidden'} text-[#68BF7B] font-montserrat font-medium text-xs`}>Complete</p>
                </div>
            </div>
            <div className='space-x-4 flex flex-row  justify-center'>
                <div className='flex flex-col items-center justify-center'>
                    <div className={`h-[60px] w-[60px] border-2 border-[#BEBEBF] rounded-[1000px] flex items-center justify-center font-montserrat font-semibold text-2xl
        ${step === 2 ? 'bg-[#428358]' : step > 2 ? 'bg-[#68BF7B] opacity-40' : ""}`}>
                        {step > 2 ? <Image src="/ContactPageImages/Done.svg" alt="" width="60" height="60"></Image>
                            : <p className={`${step >= 2 ? 'text-white' : 'text-[#BEBEBF] '}`}>3</p>}
                    </div>
                    <div className='w-[2px] h-[52px] bg-[#D4D3D7]'></div>
                </div>
                <div className='space-y-1 py-4 font-montserrat flex flex-col items-start justify-start'>
                    <p className='font-semibold text-xl text-[#6E737F]'>Why Invest</p>
                    <p className='font-normal text-sm text-[#BEBEBF]'>Subtext info for the step</p>
                    <p className={`${step > 2 ? 'block' : 'hidden'} text-[#68BF7B] font-montserrat font-medium text-xs`}>Complete</p>
                </div>
            </div>
            <div className='space-x-4 flex flex-row  justify-center'>
                <div className='flex flex-col items-center justify-center'>
                    <div className={`h-[60px] w-[60px] border-2 border-[#BEBEBF]  rounded-[1000px] flex items-center justify-center font-montserrat font-semibold text-2xl
        ${step === 3 ? 'bg-[#428358]' : step > 3 ? 'bg-[#68BF7B] opacity-40' : ""}`}>
                        {step > 3 ? <Image src="/ContactPageImages/Done.svg" alt="" width="60" height="60"></Image>
                            : <p className={`${step >= 3 ? 'text-white' : 'text-[#BEBEBF] '}`}>4</p>}
                    </div>
                    <div className='w-[2px] h-[52px] bg-[#D4D3D7]'></div>
                </div>
                <div className='space-y-1 py-4 font-montserrat flex flex-col items-start justify-start'>
                    <p className='font-semibold text-xl text-[#6E737F]'>Reach in India</p>
                    <p className='font-normal text-sm text-[#BEBEBF]'>Subtext info for the step</p>
                    <p className={`${step > 3 ? 'block' : 'hidden'} text-[#68BF7B] font-montserrat font-medium text-xs`}>Complete</p>
                </div>
            </div>
            <div className='space-x-4 flex flex-row  justify-center'>
                <div className='flex flex-col items-center justify-center'>
                    <div className={`h-[60px] w-[60px] border-2 border-[#BEBEBF]  rounded-[1000px] flex items-center justify-center font-montserrat font-semibold text-2xl
        ${step === 4 ? 'bg-[#428358]' : step > 4 ? 'bg-[#68BF7B] opacity-40' : ""}`}>
                        {step > 4 ? <Image src="/ContactPageImages/Done.svg" alt="" width="60" height="60"></Image>
                            : <p className={`${step >= 4 ? 'text-white' : 'text-[#BEBEBF] '}`}>5</p>}
                    </div>
                    <div className='w-[2px] h-[52px] bg-[#D4D3D7]'></div>

                </div>
                <div className='space-y-1 py-4 font-montserrat flex flex-col items-start justify-start'>
                    <p className='font-semibold text-xl text-[#6E737F]'>Sales Roadmap</p>
                    <p className='font-normal text-sm text-[#BEBEBF]'>Subtext info for the step</p>
                    <p className={`${step > 4 ? 'block' : 'hidden'} text-[#68BF7B] font-montserrat font-medium text-xs`}>Complete</p>
                </div>
            </div>
            <div className='space-x-4 flex flex-row  justify-center'>
                <div className='flex flex-col items-center justify-center'>
                    <div className={`h-[60px] w-[60px] border-2 border-[#BEBEBF]  rounded-[1000px] flex items-center justify-center font-montserrat font-semibold text-2xl
        ${step === 5 ? 'bg-[#428358]' : step > 5 ? 'bg-[#68BF7B] opacity-40' : ""}`}>
                        {step > 5 ? <Image src="/ContactPageImages/Done.svg" alt="" width="60" height="60"></Image>
                            : <p className={`${step >= 5 ? 'text-white' : 'text-[#BEBEBF] '}`}>6</p>}
                    </div>
                    <div className='w-[2px] h-[52px] bg-[#D4D3D7]'></div>

                </div>
                <div className='space-y-1 py-4 font-montserrat flex flex-col items-start justify-start'>
                    <p className='font-semibold text-xl text-[#6E737F]'>Time Frame</p>
                    <p className='font-normal text-sm text-[#BEBEBF]'>Subtext info for the step</p>
                    <p className={`${step > 5 ? 'block' : 'hidden'} text-[#68BF7B] font-montserrat font-medium text-xs`}>Complete</p>
                </div>
            </div>
            <div className='space-x-4 flex flex-row  justify-center'>
                <div className='flex flex-col items-center justify-center'>
                    <div className={`h-[60px] w-[60px] border-2 border-[#BEBEBF]  rounded-[1000px] flex items-center justify-center font-montserrat font-semibold text-2xl
        ${step === 6 ? 'bg-[#428358]' : step > 6 ? 'bg-[#68BF7B] opacity-40' : ""}`}>
                        {step > 6 ? <Image src="/ContactPageImages/Done.svg" alt="" width="60" height="60"></Image>
                            : <p className={`${step >= 6 ? 'text-white' : 'text-[#BEBEBF] '}`}>7</p>}
                    </div>
                    <div className='w-[2px] h-[52px] bg-[#D4D3D7]'></div>

                </div>
                <div className='space-y-1 py-4 font-montserrat flex flex-col items-start justify-start'>
                    <p className='font-semibold text-xl text-[#6E737F]'>Sales Description</p>
                    <p className='font-normal text-sm text-[#BEBEBF]'>Subtext info for the step</p>
                    <p className={`${step > 6 ? 'block' : 'hidden'} text-[#68BF7B] font-montserrat font-medium text-xs`}>Complete</p>
                </div>
            </div>


            <div className='space-x-4 flex flex-row  justify-center'>
                <div className='flex flex-col items-center justify-center'>
                    <div className={`h-[60px] w-[60px] border-2 border-[#BEBEBF]  rounded-[1000px] flex items-center justify-center font-montserrat font-semibold text-2xl
        ${step === 7 ? 'bg-[#428358]' : step > 7 ? 'bg-[#68BF7B] opacity-40' : ""}`}>
                        {step > 7 ? <Image src="/ContactPageImages/Done.svg" alt="" width="60" height="60"></Image>
                            : <p className={`${step >= 7 ? 'text-white' : 'text-[#BEBEBF] '}`}>8</p>}
                    </div>
                    <div className='w-[2px] h-[52px] bg-[#D4D3D7]'></div>

                </div>
                <div className='space-y-1 py-4 font-montserrat flex flex-col items-start justify-start'>
                    <p className='font-semibold text-xl text-[#6E737F]'>Payment</p>
                    <p className='font-normal text-sm text-[#BEBEBF]'>Subtext info for the step</p>
                    <p className={`${step > 7 ? 'block' : 'hidden'} text-[#68BF7B] font-montserrat font-medium text-xs`}>Complete</p>
                </div>
            </div>
            <div className='space-x-4 flex flex-row  items-start justify-center'>
                <div className='flex flex-col items-center justify-center'>
                    <div className={`h-[60px] w-[60px] border-2 border-[#BEBEBF]  rounded-[1000px] flex items-center justify-center font-montserrat font-semibold text-2xl
        ${step === 8 ? 'bg-[#428358]' : step > 8 ? 'bg-[#68BF7B] opacity-40' : ""}`}>
                        {step > 8 ? <Image src="/ContactPageImages/Done.svg" alt="" width="60" height="60"></Image>
                            : <p className={`${step >= 8 ? 'text-white' : 'text-[#BEBEBF] '}`}>9</p>}
                    </div>
                </div>
                <div className='space-y-1 py-4 font-montserrat flex flex-col items-start justify-start'>
                    <p className='font-semibold text-xl text-[#6E737F]'>Feedback</p>
                    <p className='font-normal text-sm text-[#BEBEBF]'>Subtext info for the step</p>

                </div>
            </div>


        </div>
    )
}

export default Steps