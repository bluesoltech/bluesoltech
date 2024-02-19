import React from 'react'
import img1 from '../assets/img/vision.png'


const Result = () => {
    return (
        <div className='mt-[120px]'>
            <h1 className='text-gray-300 text-3xl mt-4 font-bold text-center'>Our SEO Results</h1>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 text-sm justify-between mt-11'>
                <div className='w-[90%] md:w-[300px] h-[200px] border-gray-500 border-2 justify-center items-center text-center mx-auto m-2 overflow-hidden'>
                    <img src={img1} />
                </div>
                <div className='w-[90%] md:w-[300px] h-[200px] border-gray-500 border-2 justify-center items-center text-center mx-auto m-2 overflow-hidden'>
                    <img src={img1} />
                </div>
                <div className='w-[90%] md:w-[300px] h-[200px] border-gray-500 border-2 justify-center items-center text-center mx-auto m-2 overflow-hidden'>
                    <img src={img1} />
                </div>
            </div>
        </div>
    )
}

export default Result
