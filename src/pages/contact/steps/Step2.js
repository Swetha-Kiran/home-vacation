import React from 'react'
import Image from 'next/image'
import { useState, useContext } from "react"
import FormContext from '../../../../context/FormContext'

function Step2() {
    const { formData, setFormData, handleInputChange } = useContext(FormContext)

    return (
        <>
            <div className='w-full space-y-4 Tablet:space-y-0 Tablet:space-x-4 flex flex-col Tablet:flex-row items-center justify-between text-[#6E737F]'>
                <div className='space-y-2 w-full Tablet:w-[45%] flex flex-col '>
                    <label htmlFor='domain' className='font-montserrat font-bold text-xs '>Domain of Expertise</label>
                    <input id="domain" className='h-[44px] w-full border-2 border-[#D4D3D7] rounded-md px-3' type='text' name="domainOfExpertise"
                        value={formData.domainOfExpertise}
                        onChange={handleInputChange} />
                </div>
                <div className='space-y-2 w-full Tablet:w-[45%] flex flex-col '>
                    <label htmlFor='experience' className='font-montserrat font-bold text-xs'>Experience in years</label>
                    <input id="experience" className='h-[44px] w-full border-2 border-[#D4D3D7]  rounded-md px-3 text-[#6E737F]' type='number' name="experience"
                        value={formData.experience}
                        onChange={handleInputChange} />
                </div>
            </div>

            <div className='w-full space-y-4 Tablet:space-y-0 Tablet:space-x-4 flex flex-col Tablet:flex-row items-center justify-between text-[#6E737F]'>
                <div className='space-y-2 w-full Tablet:w-[45%] flex flex-col'>
                    <label htmlFor="sale" className='font-montserrat font-bold text-xs'>Previous Annual Sale</label>
                    <input id="sale" className='h-[44px] w-full border-2 border-[#D4D3D7]   rounded-md px-3' type='number' name="previousSale"
                        value={formData.previousSale}
                        onChange={handleInputChange} />
                </div>
                <div className='space-y-2 w-full Tablet:w-[45%] flex flex-col '>
                    <label htmlFor='agents' className='font-montserrat font-bold text-xs'>Total Agents (if any)</label>
                    <input id="agents" className='h-[44px] w-full border-2 border-[#D4D3D7]  rounded-md px-3' type='number' name="agents"
                        value={formData.agents}
                        onChange={handleInputChange} />
                </div>
            </div>
            <div className='w-full space-y-4 Tablet:space-y-0 Tablet:space-x-4 flex flex-col Tablet:flex-row items-center justify-between text-[#6E737F]'>
                <div className='space-y-2 w-full Tablet:w-[45%] flex flex-col'>
                    <label htmlFor="investment" className='font-montserrat font-bold text-xs'>Investment willing to invest</label>
                    <select id='investment' className='h-[44px] w-full border-2 border-[#D4D3D7]  rounded-md px-3' name="investmentAmount"
                        value={formData.investmentAmount}
                        onChange={handleInputChange}>
                        <option value="">Select an option</option>
                        <option value="Less than 10 Lakh">Less than 10 Lakh</option>
                        <option value="10Lac to 50lac"> 10Lac to 50lac</option>
                        <option value="20lac to 30lac">20lac to 30lac</option>
                        <option value="50lac to 1cr">50lac to 1cr</option>
                        <option value="1cr to 5 cr">1cr to 5 cr</option>
                        <option value="5cr to 10cr">5cr to 10cr</option>
                        <option value="1cr to 5 cr">more than 10cr</option>
                    </select>
                </div>
                <div className='space-y-2 w-full Tablet:w-[45%] flex flex-col '>
                    <label htmlFor="network" className='font-montserrat font-bold text-xs'>Network/Channel Description</label>
                    <textarea id="network" className='h-[44px] w-full border-2 border-[#D4D3D7]  rounded-md px-3' name="networkDescription"
                        value={formData.networkDescription}
                        onChange={handleInputChange} />
                </div>
            </div>
            <div className='w-full space-y-4 Tablet:space-y-0 Tablet:space-x-4 flex flex-col Tablet:flex-row items-center justify-between text-[#6E737F]'>
                <div className='space-y-2 w-full Tablet:w-[45%] flex flex-col'>
                    <label htmlFor="previousWork" className='font-montserrat font-bold text-xs'>Previous Work Return %</label>
                    <input id="previousWork" className='h-[44px] w-full border-2 border-[#D4D3D7]  rounded-md px-3' type="number" min="0" max="100" step="0.01" name="return"
                        value={formData.return}
                        onChange={handleInputChange} />
                </div>
            </div>


        </>
    )
}

export default Step2