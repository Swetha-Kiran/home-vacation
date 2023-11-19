import React, { useContext, useEffect } from 'react'
import Steps from './steps/Steps'
import Step1 from './steps/Step1'
import Step2 from './steps/Step2'
import Step3 from './steps/Step3'
import Step4 from './steps/Step4'
import Step5 from './steps/Step5'
import Step6 from './steps/Step6'
import Step7 from './steps/Step7'
import Step8 from './steps/Step8'
import Step9 from './steps/Step9'
import FormContext from '../../../context/FormContext'
import StepsNew from './steps/StepsNew'

function ContactPage() {

    const { title, step, setStep, formData, setFormData, handleInputChange, disablePrev, disableNext, prevHide, nextHide, skipHide, submitHide, showText } = useContext(FormContext)

    const display = {
        0: <Step1 />,
        1: <Step2 />,
        2: <Step3 />,
        3: <Step4 />,
        4: <Step5 />,
        5: <Step6 />,
        6: <Step7 />,
        7: <Step8 />,
        8: <Step9 />
    }

    const handlePrev = () => setStep(step => step - 1)

    const handleNext = () => {

        setStep(step => step + 1)
    }

    const handleSkip = () => setStep(step => step + 1)


    const handleSubmit = e => {
        e.preventDefault()
        console.log(JSON.stringify(formData))
        alert("You have submitted the form successfully!")

    }

    useEffect(() => {
        const storedFormData = localStorage.getItem('formData');
        if (storedFormData) {
            const parsedFormData = JSON.parse(storedFormData);


            setFormData({
                ...formData,
                ...parsedFormData,
            });
        }
        // return () => {
        //     localStorage.clear(); // Clear local storage
        // };

    }, []);

    return (
        <div className='w-full h-full grid Laptop-sm:grid-cols-12 Tablet:grid-cols-8 Mobile:grid-cols-4 Laptop-sm:gap-x-6 Mobile:gap-x-4 Desktop:px-[10.5vw] Laptop-lg:px-[9.7vw] Laptop-sm:px-[1.6vw] Tablet:px-[2vw]'>
            <div className='h-full col-span-4 Tablet:col-span-8 Laptop-sm:col-span-12 pt-10 pb-10 space-x-6'>
                <div className='bg-[#FCFDFF] rounded-3xl shadow-custom flex flex-col Laptop-sm:flex-row'>
                    <Steps />
                    <StepsNew />
                    <div className="hidden Laptop-sm:flex border-l border-gray-300 w-1 h-auto">
                    </div>
                    <hr className="flex Laptop-sm:hidden border-l border-gray-300 w-full pt-0" />

                    <div className='h-full w-full Laptop-sm:w-[60%]  px-6 Tablet:px-10 pt-10 pb-6 space-y-8 '>
                        <div className='space-y-3 font-montserrat'>
                            <p className='font-semibold text-2xl text-[#2A2B39]'>{title[step]}</p>
                            <p className='font-normal text-sm text-[#BEBEBF]'>Subtext info about the step</p>
                        </div>
                        <div className='h-full space-y-10 p-6 rounded-lg bg-[#F6F7FB]'>
                            <div className='space-y-6'>
                                <form className='space-y-8' onSubmit={handleSubmit}>
                                    {display[step]}
                                    <div className='flex justify-end items-center'>
                                        <p className={`px-0 md:px-4 mr-4 text-[#2A2B39] text-[8px] Tablet:text-sm ${showText ? 'hidden' : 'block'} `}>{`[*] - Enter the required fields to proceed`}</p>
                                        <button className={`border  text-white w-24 font-montserrat font-semibold text-base py-2  Tablet:px-4 mr-4  rounded bg-[#428358] ${prevHide ? 'hidden' : 'block'}`} type="button"
                                            onClick={handlePrev} disabled={disablePrev}>Prev</button>
                                        <button className={`border  text-white w-24 font-montserrat font-semibold text-base py-2  Tablet:px-4  mr-4 rounded bg-[#428358] ${prevHide ? 'hidden' : 'block'} ${skipHide ? 'hidden' : 'block'}`} type="button"
                                            onClick={handleSkip} >Skip</button>
                                        <button className={`border w-24 font-montserrat font-semibold text-base py-2  Tablet:px-4  mr-4 rounded ${disableNext ? 'bg-grey text-[#BEBEBF]' : 'bg-[#428358] text-white'} ${nextHide ? 'hidden' : 'block'}`} type="button"
                                            onClick={handleNext} disabled={disableNext} >Next</button>
                                        <button className={`border w-24 font-montserrat font-semibold text-base py-2  Tablet:px-4 ml-4 rounded  bg-[#428358] text-white ${submitHide ? 'hidden' : 'block'} `} type="submit">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage