
import React from 'react'
import Image from 'next/image'
import { useState, useContext, useEffect } from "react"
import FormContext from '../../../../context/FormContext'


function Step1() {

    const jsonFileURL = 'https://gist.githubusercontent.com/anubhavshrimal/4aeb195a743d0cdd1c3806c9c222ed45/raw/181a34db4fcb8b37533b7c8b9c489b6c01573158/Indian_Cities_In_States_JSON'

    const { formData, setFormData, handleInputChange, isMobileValid, isEmailValid, isZipValid } = useContext(FormContext)
    const [jsonData, setJsonData] = useState([]);

    useEffect(() => {

        fetch(jsonFileURL)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                // Ensure that the fetched data is an array before setting it in the state
                if (Array.isArray(data)) {
                    setJsonData(data);
                } else {
                    // Convert the fetched data to an array
                    const dataArray = Object.entries(data).map(([state, cities]) => ({
                        state,
                        cities,
                    }));
                    setJsonData(dataArray);
                }
            })
            .catch((error) => {
                console.error('Error fetching JSON data:', error);
            });
    }, []);
    console.log(jsonData)


    return (
        <>
            <div className='w-full space-y-4 Tablet:space-y-0 Tablet:space-x-4 flex flex-col Tablet:flex-row items-center justify-between text-[#6E737F]'>
                <div className='space-y-2 w-full Tablet:w-[45%] flex flex-col '>
                    <label htmlFor='companyName' className='font-montserrat font-bold text-xs '>Company / Individual Name</label>
                    <input id="companyName" className='h-[44px] w-full border-2 border-[#D4D3D7] rounded-md px-3' type='text'
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange} />
                </div>
                <div className='space-y-2 w-full Tablet:w-[45%] flex flex-col'>
                    <label htmlFor="pan" className='font-montserrat font-bold text-xs'>GST / PAN Number</label>
                    <input id="pan" className='h-[44px] w-full border-2 border-[#D4D3D7]   rounded-md px-3' type='text'
                        name="pan"
                        value={formData.pan}
                        onChange={handleInputChange} />
                </div>
            </div>

            <div className='w-full space-y-4 Tablet:space-y-0 Tablet:space-x-4 flex flex-col Tablet:flex-row items-center justify-between text-[#6E737F]'>

                <div className='space-y-2 w-full Tablet:w-[45%] flex flex-col '>
                    <label htmlFor='personName' className='font-montserrat font-bold text-xs required-label'>Contact Person Name</label>
                    <input id="personName" className='h-[44px] w-full border-2 border-[#D4D3D7]  rounded-md px-3 text-[#6E737F]' type='text' placeholder='If Company: Company Name' required
                        name="reqcontactName"
                        value={formData.reqcontactName}
                        onChange={handleInputChange} />
                </div>
                <div className='space-y-2 w-full Tablet:w-[45%] flex flex-col '>
                    <label htmlFor='designation' className='font-montserrat font-bold text-xs required-label'>Designation</label>
                    <select id='designation' className='h-[44px] w-full border-2 border-[#D4D3D7]  rounded-md px-3' required
                        name="reqdesignation"
                        value={formData.reqdesignation}
                        onChange={handleInputChange}>
                        <option value="">Select an option</option>
                        <option value="Student">Student</option>
                        <option value="Farmer">Farmer</option>
                        <option value="Broker">Broker</option>
                        <option value="Company">Company</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
            </div>
            <div className='w-full space-y-4 Tablet:space-y-0 Tablet:space-x-4 flex flex-col Tablet:flex-row items-center justify-between text-[#6E737F]'>
                <div className='space-y-2 w-full Tablet:w-[45%] flex flex-col'>
                    <label htmlFor="email" className='font-montserrat font-bold text-xs required-label'>Email ID</label>
                    <input id="email" className='h-[44px] w-full border-2 border-[#D4D3D7]  rounded-md px-3' type='text' required
                        name="reqemail"
                        value={formData.reqemail}
                        onChange={handleInputChange} />
                    {!isEmailValid && (
                        <p className='text-red-500 text-xs mt-1'>Please enter a valid email address.</p>
                    )}
                </div>
                <div className='space-y-2 w-full Tablet:w-[45%] flex flex-col '>
                    <label htmlFor="mobileNumber" className='font-montserrat font-bold text-xs required-label'>Mobile Number</label>
                    <input id="mobileNumber" className='h-[44px] w-full border-2 border-[#D4D3D7]  rounded-md px-3' type='text' maxLength={10} required
                        name="reqmobileNum"
                        value={formData.reqmobileNum}
                        onChange={handleInputChange} />
                    {!isMobileValid && (
                        <p className='text-red-500 text-xs mt-1'>Please enter a valid 10-digit mobile number.</p>
                    )}
                </div>
            </div>
            <div className='w-full space-y-4 Tablet:space-y-0 Tablet:space-x-4 flex flex-col Tablet:flex-row items-center justify-between text-[#6E737F]'>
                <div className='space-y-2 w-full Tablet:w-[45%] flex flex-col'>
                    <label htmlFor="landlineNumber" className='font-montserrat font-bold text-xs'>Landline Number</label>
                    <input id="landlineNumber" className='h-[44px] w-full border-2 border-[#D4D3D7]  rounded-md px-3' type='text'
                        name="landlineNum"
                        value={formData.landlineNum}
                        onChange={handleInputChange} />

                </div>
                <div className='space-y-2 w-full Tablet:w-[45%] flex flex-col '>
                    <label htmlFor="address" className='font-montserrat font-bold text-xs'>Street Address</label>
                    <input id="address" className='h-[44px] w-full border-2 border-[#D4D3D7]  rounded-md px-3' type='text'
                        name="street"
                        value={formData.street}
                        onChange={handleInputChange} />
                </div>
            </div>
            <div className='w-full space-y-4 Tablet:space-y-0 Tablet:space-x-4 flex flex-col Tablet:flex-row items-center justify-between text-[#6E737F]'>

                <div className='space-y-2 w-full Tablet:w-[45%] flex flex-col '>
                    <label htmlFor="state" className='font-montserrat font-bold text-xs'>State</label>
                    <select
                        id='state'
                        className='h-[44px] w-full border-2 border-[#D4D3D7]  rounded-md px-3'
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}>
                        <option value="">Select a state</option>
                        {jsonData.map((stateData, index) => (
                            <option key={index} value={stateData.state}>
                                {stateData.state}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='space-y-2 w-full Tablet:w-[45%] flex flex-col'>
                    <label htmlFor="city" className='font-montserrat font-bold text-xs'>City</label>
                    <select
                        id='city'
                        className='h-[44px] w-full border-2 border-[#D4D3D7]  rounded-md px-3'
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}>
                        <option value="">Select a city</option>
                        {formData.state &&
                            jsonData
                                .find((stateData) => stateData.state === formData.state)
                                ?.cities.map((city, index) => (
                                    <option key={index} value={city}>
                                        {city}
                                    </option>
                                ))}
                    </select>
                </div>
            </div>
            <div className='w-full space-y-4 Tablet:space-y-0 Tablet:space-x-4 flex flex-col Tablet:flex-row items-center justify-between text-[#6E737F]'>
                <div className='space-y-2 w-full Tablet:w-[45%] flex flex-col'>
                    <label htmlFor="zip" className='font-montserrat font-bold text-xs'>ZIP Code</label>
                    <input id="zip" className='h-[44px] w-full border-2 border-[#D4D3D7]  rounded-md px-3' type='text'
                        name="zip"
                        value={formData.zip}
                        onChange={handleInputChange} />
                    {!isZipValid && (
                        <p className='text-red-500 text-xs mt-1'>Please enter a valid 6-digit ZIP.</p>
                    )}
                </div>
                <div className='space-y-2 w-full Tablet:w-[45%] flex flex-col '>
                    <label htmlFor="country" className='font-montserrat font-bold text-xs'>Country</label>
                    <input id="country" className='h-[44px] w-full border-2 border-[#D4D3D7]  rounded-md px-3' type='text'
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange} />
                </div>
            </div>
            <div className='w-full space-y-4 Tablet:space-y-0 Tablet:space-x-4 flex flex-col Tablet:flex-row items-center justify-between text-[#6E737F]'>
                <div className='space-y-2 w-full Tablet:w-[45%] flex flex-col'>
                    <label htmlFor="website" className='font-montserrat font-bold text-xs'>Website / LinkedIn URL</label>
                    <input id="website" className='h-[44px] w-full border-2 border-[#D4D3D7]  rounded-md px-3' type='url'
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange} />
                </div>
                <div className='space-y-2 w-full Tablet:w-[45%] flex flex-col '>
                    <label htmlFor="logo" className='font-montserrat font-bold text-xs'>Company Logo / Person Photo</label>
                    <input id="logo" type='file' name="logo"
                        value={formData.logo}
                        onChange={handleInputChange} />
                </div>
            </div>


        </>
    )
}

export default Step1