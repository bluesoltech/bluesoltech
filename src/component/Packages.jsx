import React from 'react'

const Packages = ({smallprice,smallfeatures,midprice,midfeatures,largeprice,largefeatures}) => {
    return (
        <div>
            <div  className='xl:mt-[120px] mt-[60px]'>
                <h1 className='font-bold items-start xl:items-start justify-start xl:justify-start text-center mb-6 text-gray-300 text-2xl xl:text-3xl'>Let Us Find How Much These Social Media Marketing Plans Cost:-</h1>
                <div  className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 text-sm justify-between mt-11 mx-auto'>
                    <div className='bg-black w-[100%] xl:w-[300px] h-fit xl:h-[400px] m-2 mx-auto rounded-lg'>
                        <div className="rounded-md">
                            <div className='bg-gray-300 hover:bg-gray-300 h-[50px] rounded-t-md flex items-center justify-center'>
                                <p className="text-black text-center font-bold text-lg">Small Business</p>
                            </div>
                            <div className='p-6'>
                                <p className="text-gray-500 text-[1.1rem] font-bold leading-7 mt-4 text-center mb-4">{smallprice}</p>
                                <p className="text-gray-500 text-[1.1rem] font-bold leading-7 mt-4 text-center mb-4">{smallfeatures}</p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-black w-[100%] xl:w-[300px] h-fit xl:h-[400px] m-2 mx-auto rounded-lg'>
                        <div className="rounded-md">
                            <div className='bg-gray-300 hover:bg-gray-300 h-[50px] rounded-t-md flex items-center justify-center'>
                                <p className="text-black text-center text-lg font-bold">Mid Size Business</p>
                            </div>
                            <div className='p-6'>
                                <p className="text-gray-500 text-[1.1rem] font-bold leading-7 mt-4 text-center mb-4">{midprice}</p>
                                <p className="text-gray-500 text-[1.1rem] font-bold leading-7 mt-4 text-center mb-4">{midfeatures}</p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-black w-[100%] xl:w-[300px] h-fit xl:h-[400px] m-2 mx-auto rounded-lg'>
                        <div className="rounded-md">
                            <div className='bg-gray-300 hover:bg-gray-300 h-[50px] rounded-t-md flex items-center justify-center'>
                                <p className="text-black text-center text-lg font-bold">Large Or Ecommerce</p>
                            </div>
                            <div className='p-6'>
                                <p className="text-gray-500 text-[1.1rem] font-bold leading-7 mt-4 text-center mb-4">{largeprice}</p>
                                <p className="text-gray-500 text-[1.1rem] font-bold leading-7 mt-4 text-center mb-4">{largefeatures}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Packages