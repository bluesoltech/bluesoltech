import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Singal_slider = ({ clients }) => {
    return (
        <div>
            <div className='text-gray-300 mt-14 mx-auto'>
                <h1 className='justify-center text-gray-300 text-center font-bold text-2xl xl:text-4xl'>Our Happy Clients</h1>
                <div className='flex flex-col xl:flex-row mt-4 md:mt-7 space-x-4 items-center justify-center'>
                    <div className='bg-black w-[100%]  h-fit xl:h-[400px] m-2'>
                        <Carousel showThumbs={false} showStatus={false} showArrows={false} renderBottomCenterControls={() => null}>
                            {clients.map((clients, index) => (
                                <div key={index} className='xl:flex flex-row justify-between items-center p-4'>
                                    <div className='xl:w-[50%] w-full flex justify-center overflow-hidden items-center'>
                                        <img src={clients.img} className='gap-10 !w-[70%]' />
                                    </div>
                                    <div className='xl:w-[50%] w-full items-start justify-start'>
                                        <p className="text-gray-500  text-center font-bold">{clients.tittle}</p>
                                        <p className=' text-[1.1rem] leading-7 items-start xl:items-start mt-5 justify-start xl:justify-start text-gray-500 text-start xl:text-start'>{clients.content}</p>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Singal_slider