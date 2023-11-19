import React from 'react'
import Image from 'next/image'
import { useState, useContext } from "react"
import FormContext from '../../../../context/FormContext'

function Step7() {


    const { formData, setFormData, handleInputChange } = useContext(FormContext)
    return (
        <>
            <div className='w-full space-x-4 flex flex-row items-center justify-between text-[#6E737F]'>
                <div className='space-y-2 w-full Tablet:w-[45%] flex flex-col '>
                    <label htmlFor='salesdescription' className='font-montserrat font-bold text-xs '>Description of Sales Plan</label>
                    <textarea id="salesdescription" className='h-[44px] w-full border-2 border-[#D4D3D7] rounded-md px-3'
                        name="salesPlan"
                        value={formData.salesPlan}
                        onChange={handleInputChange} />
                </div>
            </div>
        </>
    )
}

export default Step7