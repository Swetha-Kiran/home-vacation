import React from 'react'
import Image from 'next/image'
import { useState, useContext } from "react"
import FormContext from '../../../../context/FormContext'

function Step4() {

    const { formData, setFormData, handleInputChange } = useContext(FormContext)

    return (
        <>
            <div className='w-full space-y-4 Tablet:space-y-0 Tablet:space-x-4 flex flex-col Tablet:flex-row items-center justify-between text-[#6E737F]'>
                <div className='space-y-2 w-full Tablet:w-[45%] flex flex-col '>
                    <label htmlFor='districtwise' className='font-montserrat font-bold text-xs '>Reach: District Wise</label>
                    <textarea id="districtwise" className='h-[44px] w-full border-2 border-[#D4D3D7] rounded-md px-3'
                        name="districtSpecific"
                        value={formData.districtSpecific}
                        onChange={handleInputChange} />
                </div>
                <div className='space-y-2 w-full Tablet:w-[45%] flex flex-col '>
                    <label htmlFor='cityspecific' className='font-montserrat font-bold text-xs'>Reach: City Specific</label>
                    <textarea id="cityspecific" className='h-[44px] w-full border-2 border-[#D4D3D7]  rounded-md px-3 text-[#6E737F]'
                        name="citySpecific"
                        value={formData.citySpecific}
                        onChange={handleInputChange} />
                </div>
            </div>
            <div className='w-full space-y-4 Tablet:space-y-0 Tablet:space-x-4 flex flex-col Tablet:flex-row items-center justify-between text-[#6E737F]'>
                <div className='space-y-2 w-full Tablet:w-[45%] flex flex-col '>
                    <label htmlFor='statespecific' className='font-montserrat font-bold text-xs '>Reach: State Specific</label>
                    <textarea id="statespecific" className='h-[44px] w-full border-2 border-[#D4D3D7] rounded-md px-3'
                        name="stateSpecific"
                        value={formData.stateSpecific}
                        onChange={handleInputChange} />
                </div>
            </div>

        </>
    )
}

export default Step4