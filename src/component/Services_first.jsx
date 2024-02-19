import React from 'react'

const Services_first = ({ imgSrc, btn_title, tittle, duration, features1, features3, features2 }) => {
    return (
        <div className='xl:flex flex-row mt-9 justify-around'>
            <div className='xl:w-[50%] w-full flex justify-center xl:justify-start items-center'>
                <img src={imgSrc} className='w-[60%]' />
            </div>
            <div className='xl:w-[50%] w-full'>
                <div class='flex flex-col md:flex-row bg-white text-black w-full lg:w-[600px] h-auto justify-between items-center p-2 rounded-md mt-4 xl:mt-0'>
                    <div>
                        <p class='font-bold justify-center align-middle'>{btn_title}</p>
                    </div>
                    <div>
                        <button class='bg-[#3B82F6] text-gray-300 font-bold py-2 px-4 rounded-md'>Apply Now</button>
                    </div>
                </div>
                <p className='items-start xl:items-end justify-center xl:justify-center text-gray-500 text-start xl:text-start m-2 text-[1.1rem] leading-7 '>{duration}</p>
                <h2 className='font-bold items-start xl:items-center justify-center xl:justify-end text-gray-300 text-start xl:text-start m-2 text-2xl xl:text-3xl'>{tittle}</h2>
                <p className='items-start xl:items-end justify-center xl:justify-center text-gray-500 text-start xl:text-start mt-4 text-[1.1rem] leading-7'>{features1}</p>
                <p className='items-start xl:items-end justify-center xl:justify-center text-gray-500 text-start xl:text-start mt-4 text-[1.1rem] leading-7 '>{features2}</p>
                <p className='items-start xl:items-end justify-center xl:justify-center text-gray-500 text-start xl:text-start mt-4 text-[1.1rem] leading-7 '>{features3}</p>
                <div className='mt-6 md:flex flex-row justify-around items-start'>
                    <div>
                        <button class='bg-transparent border-[1px] hover:text-black hover:bg-white transition-all duration-200 text-white font-bold py-2 px-4 rounded-md m-4'>Request Proposal</button>
                    </div>
                    <div>
                        <button class='bg-transparent border-[1px] hover:text-black hover:bg-white transition-all duration-200 text-white font-bold py-2 px-4 rounded-md m-4'>Packages</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Services_first