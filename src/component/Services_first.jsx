import React from 'react'

const Services_first = ({ imgSrc, btn_title, tittle, duration, features1, features3, features2 }) => {
    return (
        <div className='xl:flex flex-row mt-9 justify-around'>
            <div className='xl:w-[50%] w-full flex justify-center xl:mb-1 mb-6 xl:justify-start items-start'>
                <img src={imgSrc} className='' />
            </div>
            <div className='xl:w-[50%] w-full flex-row justify-start items-start xl:justify-start m-6'>
                <div class='xl:flex flex-row bg-white text-black w-[90%] text-center xl:w-[600px] h-fit xl:h-[50px] justify-between items-center p-2 rounded-md'>
                    <div className=''>
                        <p className='font-bold justify-center align-middle'>{btn_title}</p>
                    </div>
                    <div className=''>
                        <button class='bg-black text-white font-bold py-2 px-4 rounded-md'>Apply Now</button>
                    </div>
                </div>
                <p className='items-start xl:items-end justify-start xl:justify-end text-gray-500 text-start xl:text-start m-2 text-[1.1rem] leading-7 '>{duration}</p>
                <h2 className='font-bold items-start xl:items-end justify-start xl:justify-end text-gray-300 text-start xl:text-start m-2 text-2xl xl:text-3xl'>{tittle}</h2>
                <p className='items-start xl:items-end justify-start xl:justify-end text-gray-500 text-start xl:text-start mt-4 text-[1.1rem] leading-7'>{features1}</p>
                <p className='items-start xl:items-end justify-start xl:justify-end text-gray-500 text-start xl:text-start mt-4 text-[1.1rem] leading-7 '>{features2}</p>
                <p className='items-start xl:items-end justify-start xl:justify-end text-gray-500 text-start xl:text-start mt-4 text-[1.1rem] leading-7 '>{features3}</p>
                <div className='md:flex flex-row'>
                    <button className="bg-transparent border-[1px] hover:text-black hover:bg-white transition-all duration-200 text-white font-bold py-2 px-4 rounded-md m-4">
                        Request proposal
                    </button>
                    <button className="bg-transparent border-[1px] hover:text-black hover:bg-white transition-all duration-200 text-white font-bold py-2 px-4 rounded-md m-4">
                        Our Packages
                    </button>
                </div>

            </div>
        </div>
    )
}


export default Services_first