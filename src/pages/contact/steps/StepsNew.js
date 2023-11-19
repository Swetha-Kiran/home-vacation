import React, { useContext, useEffect, useRef } from 'react';
import Image from 'next/image';
import FormContext from '../../../../context/FormContext';

function StepsNew() {
    const { step } = useContext(FormContext);
    const stepRefs = []; // Create an array to store references to each step div

   stepRefs[0]=useRef(null)
   stepRefs[1]=useRef(null)
   stepRefs[2]=useRef(null)
   stepRefs[3]=useRef(null)
   stepRefs[4]=useRef(null)
   stepRefs[5]=useRef(null)
   stepRefs[6]=useRef(null)
   stepRefs[7]=useRef(null)
   stepRefs[8]=useRef(null)


    const stepData = [
        'Contact Info',
        'Experience',
        'Invest Now',
        'Reach in India',
        'Sales Roadmap',
        'Time Frame',
        'Sales Description',
        'Payment',
        'Feedback'
    ]

    useEffect(() => {
        // Scroll to the current step when the step changes
        if (step >= 0 && step <= 8 && stepRefs[step] && stepRefs[step].current) {
            stepRefs[step].current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [step]);

    return (
        <div className='w-full px-6 md:px-12 pt-10 pb-6 flex Laptop-sm:hidden'>
            <div className='w-[90%] m-auto flex flex-row items-center justify-start overflow-x-auto overflow-y-hidden'>
                {stepData.map((label, index) => (
                    <div
                        key={index}
                        className={`space-y-4 flex flex-col  justify-start items-start ${index === step ? 'opacity-100' : 'opacity-40'}`} ref={stepRefs[index]}>
                        <div className='flex flex-row items-center justify-start'>
                            <div
                                className={`h-[60px] w-[60px] border-2 border-[#BEBEBF] rounded-[1000px] flex items-center justify-center font-montserrat font-semibold text-xl
              ${index === step ? 'bg-[#428358]' : 'bg-[#68BF7B] '}`}>
                                {step > index ? (
                                    <Image src="/ContactPageImages/Done.svg" alt="" width="40" height="40" />
                                ) : (
                                    <p className={`${step >= index ? 'text-white' : 'text-[#BEBEBF] '}`}>{index + 1}</p>
                                )}
                            </div>
                            <div className={`w-[220px] h-[2px] bg-[#D4D3D7] ${index === stepData.length - 1 ? 'hidden' : 'block'}`}></div>
                        </div>
                        <div className='space-y-1 py-4 font-montserrat flex flex-col justify-start items-start'>
                            <p className='font-semibold text-xl text-[#6E737F]'>{label}</p>
                            <p className='font-normal text-sm text-[#BEBEBF]'>Subtext info for the step</p>
                            {step > index && (
                                <p className='text-[#68BF7B] font-montserrat font-medium text-xs'>Complete</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>


        </div>


    );
}

export default StepsNew;
