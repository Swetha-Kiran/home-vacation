import React from 'react'
import Image from 'next/image'
import { useState, useContext } from "react"
import FormContext from '../../../../context/FormContext'

function Step6() {

    const { formData, setFormData, handleInputChange } = useContext(FormContext)
    return (
        <>
            <div className='w-full space-y-4 Tablet:space-y-0 Tablet:space-x-4 flex flex-col Tablet:flex-row items-center justify-between text-[#6E737F]'>
                <div className='space-y-2 w-full Tablet:w-[45%] flex flex-col '>
                    <label htmlFor='6months' className='font-montserrat font-bold text-xs '>6 months</label>
                    <input id="6months" className='h-[44px] w-full border-2 border-[#D4D3D7] rounded-md px-3' type='number'
                        name="sixMonths"
                        value={formData.sixMonths}
                        onChange={handleInputChange} />
                </div>
                <div className='space-y-2 w-full Tablet:w-[45%] flex flex-col '>
                    <label htmlFor='1year' className='font-montserrat font-bold text-xs'>1 Year </label>
                    <input id="1year" className='h-[44px] w-full border-2 border-[#D4D3D7]  rounded-md px-3' type='number'
                        name="oneYear"
                        value={formData.oneyear}
                        onChange={handleInputChange} />
                </div>
            </div>
            <div className='w-full space-y-4 Tablet:space-y-0 Tablet:space-x-4 flex flex-col Tablet:flex-row items-center justify-between text-[#6E737F]'>
                <div className='space-y-2 w-full Tablet:w-[45%] flex flex-col '>
                    <label htmlFor='2years' className='font-montserrat font-bold text-xs '>2 Years</label>
                    <input id="2years" className='h-[44px] w-full border-2 border-[#D4D3D7] rounded-md px-3' type='number'
                        name="twoYears"
                        value={formData.twoYears}
                        onChange={handleInputChange} />
                </div>
                <div className='space-y-2 w-full Tablet:w-[45%] flex flex-col '>
                    <label htmlFor='3year' className='font-montserrat font-bold text-xs'>3 Years </label>
                    <input id="3year" className='h-[44px] w-full border-2 border-[#D4D3D7]  rounded-md px-3' type='number'
                        name="threeYears"
                        value={formData.threeYears}
                        onChange={handleInputChange} />
                </div>
            </div>
            <div className='w-full space-y-4 Tablet:space-y-0 Tablet:space-x-4 flex flex-col Tablet:flex-row items-center justify-between text-[#6E737F]'>
                <div className='space-y-2 w-full Tablet:w-[45%] flex flex-col '>
                    <label htmlFor='4years' className='font-montserrat font-bold text-xs '>4 Years</label>
                    <input id="4years" className='h-[44px] w-full border-2 border-[#D4D3D7] rounded-md px-3' type='number'
                        name="fourYears"
                        value={formData.fourYears}
                        onChange={handleInputChange} />
                </div>
                <div className='space-y-2 w-full Tablet:w-[45%] flex flex-col '>
                    <label htmlFor='5year' className='font-montserrat font-bold text-xs'>5 Years </label>
                    <input id="5year" className='h-[44px] w-full border-2 border-[#D4D3D7]  rounded-md px-3' type='number'
                        name="fiveYears"
                        value={formData.fiveYears}
                        onChange={handleInputChange} />
                </div>
            </div>
            <div className='w-full space-y-4 Tablet:space-y-0 Tablet:space-x-4 flex flex-col Tablet:flex-row items-center justify-between text-[#6E737F]'>
                <div className='space-y-2 w-full Tablet:w-[45%] flex flex-col '>
                    <label htmlFor='10years' className='font-montserrat font-bold text-xs '>10 Years</label>
                    <input id="10years" className='h-[44px] w-full border-2 border-[#D4D3D7] rounded-md px-3' type='number'
                        name="tenYears"
                        value={formData.tenYears}
                        onChange={handleInputChange} />
                </div>
            </div>

        </>
    )
}

export default Step6