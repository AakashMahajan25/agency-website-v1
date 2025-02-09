import Image from 'next/image'
import React from 'react'
import s1 from "../../../public/assets/services/service1.jpg"
const Services:React.FC = () => {
  const arr:Array<null> = Array.from({length:3})
  return (
    <div id='services' className='p-2 sm:mt-14 mt-4'>
      <h1 className='text-center text-3xl sm:text-5xl font-[500] lg:text-5xl'>Apps, websites & branding</h1>
      <p className='text-center py-2 sm:py-6 lg:py-6 lg:text-xl'>Get expert solutions for every design need </p>

      <div className='flex flex-col sm:flex-row gap-10 p-2 lg:px-20 2xl:px-32 2xl:max-w-[1600px] 2xl:mx-auto'>
        {arr.map((item, index) => (
          <div key={index} className='border pt-4 pl-4'>
            <h4 className='text-xl lg:text-2xl  font-[500]'>Product Design</h4>
            <p className='text-sm py-2 pb-4 pr-2 lg:pr-10 lg:text-base font-[300]'>Our subscription-based design service gives you access to a dedicated team.</p>
            <Image src={s1} alt='service1' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
