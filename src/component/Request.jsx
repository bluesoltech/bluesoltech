import React from 'react'
import { FcServices } from "react-icons/fc";

const Request = ({tittle,content}) => {
    return (
        <div>
            <div className='flex items-center justify-center mt-14'>
                <div className='bg-black w-[1300px] h-[180px]'>
                    <h1 className='font-bold text-white text-3xl p-4'>{tittle}</h1>
                    <div className='flex xl:flex-row justify-between items-center'>
                        <div>
                            <FcServices size={70} />
                        </div>
                        <div>
                            <p className='font-bold text-gray-500'>{content}</p>
                        </div>
                        <div>
                            <button className='bg-white text-black font-bold py-2 px-4 rounded-full m-4'>Request Proposal</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Request
