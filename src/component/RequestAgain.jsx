import React from 'react'
import { FcServices } from "react-icons/fc";

const RequestAgain = ({tittle,content}) => {
    return (
        <div>
            <div className='flex items-center justify-center mt-14'>
                <div className='bg-black p-4'>
                    <h1 className='font-bold text-white text-3xl lg:ml-4 p-4 sm:ml-4'>{tittle}</h1>
                    <div className='flex xl:flex-row justify-between items-center mx-8 lg:flex-row sm:flex-col sm:items-start'>
                        <div className='lg:w-4/6 sm:my-4'>
                            <p className='font-bold text-gray-500 lg:w-5/6'>{content}</p>
                        </div>
                        <div>
                            <button className='bg-white text-black font-bold py-2 w-full rounded-full px-8 sm:my-4'>Free Consulting</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RequestAgain
