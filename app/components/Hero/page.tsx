import React from 'react'
import shape1 from '../../../public/shape1.png'
import Image from 'next/image'

const Hero: React.FC = () => {
    return (
        <div className='flex flex-col justify-center pt-8 px-2 sm:pt-12 lg:pt-10 relative'>
            <Image src={shape1} alt='arrow' className='absolute w-[100px] sm:right-10 md:right-0 md:w-[150px] md:bottom-4 right-0 -bottom-12 lg:w-[200px] lg:right-0 lg:bottom-10 xl:right-20 2xl:right-[8%] 2xl:w-[250px]' width={1000}  />

            <h1 className=' text-3xl sm:text-5xl lg:text-7xl font-[600] sm:max-w-[650px] lg:max-w-[800px] sm:mx-auto py-4 sm:py-6` text-center'>Hire Full-Service Design Agency For A Simple Monthly Fee.</h1>
            <p className='text-center text-[13.4px] sm:text-lg px-8 sm:py-2 lg:py-4 sm:max-w-[700px] sm:mx-auto lg:font-[400] lg:text-xl lg:max-w-[800px]'>Create your products with top-tier designers at an affordable price. One subscription fee covers unlimited design requests.</p>
            <div className='flex gap-4 justify-center py-4 sm:py-6'>
                <button className='bg-blue-500 text-white rounded-full py-2 px-6 lg:text-xl'>Click Me</button>
                <button className='bg-blue-500 text-white rounded-full py-2 px-6 lg:text-xl'>Click Me</button>
            </div>
        </div>
    )
}

export default Hero
