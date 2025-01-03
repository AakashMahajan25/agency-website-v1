import Image from 'next/image'
import React from 'react'
import p1 from '../../../public/assets/projects/Picture1.png'
import wordScribble from "../../../public/work-scribble.png"


const Projects: React.FC = () => {
    const arr: Array<null> = Array.from({ length: 4 })
    return (
        <div className='lg:mt-12 mt-14 ' id='project'>
            <div className='w-fit mx-auto  border border-gray-100 rounded-full px-5 py-2 sm:my-2 lg:my-10 xl:my-6  text-gray-600'>Projects</div>
            <h2 className='text-4xl sm:text-5xl text-center font-[500] py-2 sm:py-5 lg:py-0'>Featured Projects</h2>

        

            <div className='p-2 relative sm:px-10 lg:my-4 lg:px-32 flex md:gap-4 lg:py-10  lg:gap-10 justify-center flex-wrap'>
                <Image src={wordScribble} alt='wordscribble' className='absolute -top-20 hidden lg:block left-44 lg:-top-32 lg:w-[300px]' />
                {/* Projects */}
                {arr.map((item) => (
                    <div className='group relative my-2 lg:my-0 overflow-hidden w-full rounded-xl   md:w-[45%] '>
                        {/* <div className='absolute border top-2 right-2 bg-orange-300 rounded-full text-white px-4 py-1 transition-all duration-1000'>
                            Design
                        </div> */}
                        <Image src={p1} alt='' className='group-hover:blur-[3px] w-full rounded-xl  transition-all duration-300 group-hover:scale-105 ease-out ' />
                        <h4 className='absolute text-2xl sm:text-4xl lg:text-4xl lg:group-hover:bottom-12 bottom-2 left-1/2 -translate-x-1/2 w-max opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bottom-4 text-white font-semibold'>Mobile Application deisgn</h4>
                    </div>
                ))}
            </div>

            <div className='w-full flex justify-center'>
                <button className='bg-blue-700 py-2 px-10 rounded-full text-white '>View All Works</button>
            </div>
        </div>
    )
}

export default Projects
