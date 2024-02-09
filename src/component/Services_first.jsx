import React from 'react'

const Services_first = ({ imgSrc, btn_title, tittle, duration, features1, features3, features2 }) => {
    return (
        <div className='xl:flex flex-row mt-9 justify-around'>
            <div className='xl:w-[50%] w-full'>
                <img src={imgSrc} className='' />
            </div>
            <div className='xl:w-[50%] w-full'>
                <div class='xl:flex flex-row bg-white text-black w-[699px] h-[50px] justify-between items-center p-2 rounded-md'>
                    <div>
                        <p class='font-bold justify-center align-middle'>{btn_title}</p>
                    </div>
                    <div>
                        <button class='bg-black text-white font-bold py-2 px-4 rounded-md'>Apply Now</button>
                    </div>
                </div>
                <p className='items-start xl:items-end justify-start xl:justify-end text-gray-500 text-start xl:text-end m-2 text-[1.1rem] leading-7 '>{duration}</p>
                <h2 className='font-bold items-start xl:items-end justify-start xl:justify-end text-white text-start xl:text-end m-2 text-3xl'>{tittle}</h2>
                <p className='items-start xl:items-end justify-start xl:justify-end text-gray-500 text-start xl:text-end mt-4 text-[1.1rem] leading-7'>{features1}</p>
                <p className='items-start xl:items-end justify-start xl:justify-end text-gray-500 text-start xl:text-end mt-4 text-[1.1rem] leading-7 '>{features2}</p>
                <p className='items-start xl:items-end justify-start xl:justify-end text-gray-500 text-start xl:text-end mt-4 text-[1.1rem] leading-7 '>{features3}</p>

            </div>
        </div>
    )
}


export default Services_first