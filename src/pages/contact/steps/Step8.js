import React from 'react'
import Image from 'next/image'
import { useState, useContext } from "react"
import FormContext from '../../../../context/FormContext'

function Step8() {

    const { formData, setFormData, handleInputChange } = useContext(FormContext)
    return (
        <>
            <div className='w-full space-x-4 flex flex-row items-center justify-between text-[#6E737F]'>
                <div className='space-y-2 w-full Tablet:w-[45%] flex flex-col '>
                    <label htmlFor='paymentmode' className='font-montserrat font-bold text-xs '>Payment Mode</label>
                    <select id='paymentmode' className='h-[44px] w-full border-2 border-[#D4D3D7]  rounded-md px-3'
                        name="paymentMode"
                        value={formData.paymentMode}
                        onChange={handleInputChange}>
                        <option value="">Select an option</option>
                        <option value="Online">Online</option>
                        <option value="Cheque">Cheque</option>
                        <option value="Direct Transfer">Direct Transfer</option>
                    </select>
                </div>
            </div>

        </>

    )
}

export default Step8