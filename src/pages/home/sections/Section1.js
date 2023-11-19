import React,{useState,useEffect} from 'react'
import Image from "next/image"
import Modal from '@/components/Modal'



function Section1() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    document.body.style.overflowY = "hidden"
    document.getElementById("scroll").style.opacity = 0.2

  }
  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflowY = "auto"
    document.getElementById("scroll").style.opacity = 1
  }



  return (
    <div className='w-full h-auto Desktop:h-[88vh] space-x-6 relative overflow-hidden  grid Laptop-sm:grid-cols-12 Tablet:grid-cols-8 Mobile:grid-cols-4 Laptop-sm:gap-x-6 Mobile:gap-x-4 Desktop:px-[10.5vw] Laptop-lg:px-[9.7vw] Laptop-sm:px-[1.6vw] Tablet:px-0 '>
      <div className='absolute -left-80 top-16 -z-10 '>
        <Image className="w-[400px]  Tablet:w-[450px] Laptop-sm:w-[530px] Laptop-lg:w-[490px] Laptop-lg:h-[470px] Desktop:w-[550px] Desktop:h-[500px]"src="/HomepageImages/Blob1.svg" alt="" width="530" height="500"></Image>
      </div>
      <div className='absolute -right-20 top-[40vh] Tablet:top-[300px] Laptop-sm:-top-10 -z-10 '>
        <Image className="w-[350px] h-[480px]  Tablet:w-[600px] Tablet:h-[700px] Laptop-lg:w-[500px] Laptop-lg:h-[550px] Desktop:w-[580px] Desktop:h-[650px]"src="/HomepageImages/Blob2.svg" alt="" width="600" height="754"></Image>
      </div> 

      <div className='h-full col-span-4 Tablet:col-span-8 Laptop-sm:col-span-6 pb-8 pt-6 Laptop-sm:pt-0 flex flex-col items-center justify-center'>
      <div className='space-y-[60px]'>
            <div className='space-y-8  text-left '>
              <p className='text-[#2A2B39] font-montserrat font-bold text-3xl Tablet:text-4xl Laptop-sm:text-5xl leading-none'>{`Invest in India’s Culture Future`}</p>
              <p className='text-[#6E737F] font-montserrat font-medium text-sm Tablet:text-base'>{`Join us in creating immersive cultural experiences in our unique Home Vacations Property, featuring distinct districts each representing a different aspect of India's rich cultural heritage.`}</p>
            </div>
            <button className='h-10 w-[141px] px-6 py-2 bg-[#2A2B39] text-[#FFFFFF]'  onClick={openModal}>Invest Now</button>
            <Modal isOpen={isModalOpen} onClose={closeModal}/>
          </div>
      </div>
      <div className='h-full col-span-4 Tablet:col-span-8 Laptop-sm:col-span-6'>
      <Image  className=" w-full object-cover" src="/HomepageImages/Section1.svg" alt="" width="400" height="450"></Image>
      </div>
      <div className='col-span-12 font-montserrat font-normal text-xs text-[#6E737F] justify-center hidden Laptop-sm:block'>
        <div  className='w-[159px] h-[47px] space-y-2 mx-auto flex flex-col items-center justify-center'>
        <p>Scroll Down to Learn More</p>
        <Image id="scroll" className='animate-bounce' src="/HomepageImages/Section1-Icon.svg" alt="" height="24" width="24"></Image>
        </div>
      </div>
    
    </div>
  )
}

export default Section1