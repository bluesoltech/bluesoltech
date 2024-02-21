import React from 'react'
import img1 from "../assets/img/vision.png";

const Image = () => {
    return (
        <div>
            <div className='mt-[100px]'>
                <h1 className='text-gray-300 text-2xl  xl:text-3xl mt-4 font-bold text-center'>What Our Clients Say About Our Services?</h1>
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 text-sm justify-between mt-11 mx-auto'>
                    <div className='bg-white w-[300px] h-[300px] m-4 flex justify-center items-center mx-auto overflow-hidden'>
                    <img width="1257" height="707" src={img1} alt='no_img' className='w-full h-auto' />
                    </div>
                    <div className='bg-white w-[300px] h-[300px] m-4 flex justify-center items-center mx-auto overflow-hidden'>
                    <img width="1257" height="707" src={img1} alt='no_img' className='w-full h-auto' />
                    </div>
                    <div className='bg-white w-[300px] h-[300px] m-4 flex justify-center items-center mx-auto overflow-hidden'>
                    <img width="1257" height="707" src={img1} alt='no_img' className='w-full h-auto' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Image