import React from 'react'
import Image from 'next/image'
import { useState, useContext } from "react"
import FormContext from '../../../../context/FormContext'

function Step3() {
    const { formData, setFormData, handleInputChange } = useContext(FormContext)
    return (
       <>
            <div className='w-full space-y-4 Tablet:space-y-0 Tablet:space-x-4 flex flex-col Tablet:flex-row items-center justify-between text-[#6E737F]'>
                <div className='space-y-2 w-full Tablet:w-[45%] flex flex-col '>
                    <label htmlFor='minimumProfit' className='font-montserrat font-bold text-xs '>Minimum Profit Return %</label>
                    <input id="minimumProfit" className='h-[44px] w-full border-2 border-[#D4D3D7] rounded-md px-3' type='text' min="0" max="100" step="0.01"
                        name="minimumProfit"
                        value={formData.minimumProfit}
                        onChange={handleInputChange} />
                </div>
                <div className='space-y-2 w-full Tablet:w-[45%] flex flex-col '>
                    <label htmlFor='maximumProfit' className='font-montserrat font-bold text-xs'>Maximum Profit Return % </label>
                    <input id="maximumProfit" className='h-[44px] w-full border-2 border-[#D4D3D7]  rounded-md px-3 text-[#6E737F]' type='number' min="0" max="100" step="0.01"
                        name="maximumProfit"
                        value={formData.maximumProfit}
                        onChange={handleInputChange} />
                </div>
            </div>
        </>

    )
}

export default Step3