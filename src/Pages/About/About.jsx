import React from 'react'
import img1 from '../../assets/img/vision.png'
import Slider from "react-slick";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'tailwindcss/tailwind.css';

const About = () => {
    const slides = [
        {
            name: 'Jane Smith',
            post: 'Designer',
            caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            name: 'Jane Smith',
            post: 'Designer',
            caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            name: 'Jane Smith',
            post: 'Designer',
            caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            name: 'Jane Smith',
            post: 'Designer',
            caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
    ];
    const client1 = [
        {
            tittle: 'SEO',
            content: ' consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, '
        },
        {
            tittle: 'SEO',
            content: 'consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, '
        },
        {
            tittle: 'SEO',
            content: 'consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, '
        }
    ]
    const client2 = [
        {
            tittle: 'SEO',
            content: ' consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, '
        },
        {
            tittle: 'SEO',
            content: ' consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, '
        },
        {
            tittle: 'SEO',
            content: ' consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, '
        }
    ]
    const client3 = [
        {
            tittle: 'SEO',
            content: ' consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, '
        },
        {
            tittle: 'SEO',
            content: ' consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, '
        },
        {
            tittle: 'SEO',
            content: ' consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, '
        }
    ]
    return (
        <div className='bg-[#0F0E0E] p-20 items-center '>
            <div className='md:w-[1200px] w-auto mt-4 mx-auto'>
                <div className='item-center text-center'>
                    <h1 className='text-white font-black text-5xl'>Online Marketing Agency India</h1>
                    <p className='text-gray-500 mt-10 justify-center text-center items-center'> We are one of the finest Web Development and Digital Marketing Company In India renowned for using the latest online marketing
                        techniques and the most sophisticated tools that help your business get a digital edge. Beat your competitors and outshine the crowd
                        with ‘RankOn Technologies’ by your side for all your Digital Marketing needs.</p>
                </div>
                <div className='md:flex flex-row mt-9 justify-around'>
                    <div className=''>
                        <ul className=' text-gray-500'>
                            <li>✔️ Website Design & Development</li>
                            <li>✔️ Online Reputation Management</li>
                            <li>✔️ Search Engine Optimization</li>
                            <li>✔️ Content Marketing</li>
                        </ul>
                        <button className='bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-white py-2 px-4 rounded-md m-4 p-2'>Request Free Audit!</button>
                    </div>
                    <div className=''>
                        <ul className='text-gray-500'>
                            <li>✔️ Social Media Optimization</li>
                            <li>✔️ Email Marketing</li>
                            <li>✔️ Logo Design</li>
                            <li>✔️ Pay-Per-Click (PPC)/Google Ads</li>
                        </ul>
                        <button className='bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-white py-2 px-4 rounded-md m-4'>Our Packages</button>
                    </div>
                </div>

                <div className=''>
                    <h1 className='text-white text-4xl mt-4 font-bold'>About us </h1>
                    <p className='text-gray-500 mt-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged. It was popularised in
                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker
                        including versions of Lorem Ipsum.</p>
                </div>
                <div className='md:flex flex-row mt-9 justify-around'>
                    <div className='w-[50%]'>
                        <img src={img1} className='' />
                    </div>
                    <div className='w-[50%]'>
                        <p className='text-gray-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book. It has survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially u</p>
                        <p className='text-gray-500 mt-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially u</p>
                    </div>
                </div>
                <div className=' mt-14'>
                    <h1 className='text-center text-white font-bold text-4xl'>Our Website Development Services</h1>
                    <p className='text-gray-500 text-center mt-8'> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially u Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially u </p>
                </div>
                <div className=''>
                    <h1 className='text-center text-white font-bold text-4xl mt-14'>Our Digital Marketing Services</h1>
                    <div className='md:flex flex-row mt-9 justify-around'>
                        <div className=''>
                            <img src={img1} className='' />
                        </div>
                        <div className='w-[30%]'>
                            <ul className='text-gray-500'>
                                <li className='p-2'>✔️ Lorem Ipsum </li>
                                <li className='p-2'>✔️ Lorem Ipsum </li>
                                <li className='p-2'>✔️ Lorem Ipsum </li>
                                <li className='p-2'>✔️ Lorem Ipsum </li>
                                <li className='p-2'>✔️ Lorem Ipsum </li>
                                <li className='p-2'>✔️ Lorem Ipsum </li>
                                <li className='p-2'>✔️ Lorem Ipsum </li>
                                <li className='p-2'>✔️ Lorem Ipsum </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <p className='text-gray-500 mt-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book. It has survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially u</p>
                    </div>
                </div>
                <div className='text-white mt-14'>
                    <h1 className='text-center font-bold text-4xl'>Our Happy Clients</h1>
                    <div className='w-auto h-[500px] bg-white mt-14'>
                        <img src="" alt='no_video' />
                    </div>
                </div>
                <div className='text-white mt-14'>
                    <h1 className='text-center font-bold text-4xl'>Testimonial</h1>
                    <Carousel showThumbs={false} showStatus={false} showArrows={false}>
                        {slides.map((slide, index) => (
                            <div key={index} className="p-8 rounded-md ">
                                <p className="text-gray-500 mt-4 text-center">{slide.caption}</p>
                                <p className="text-gray-500 mt-4 text-center">{slide.name}</p>
                                <p className="text-gray-500 text-center mb-10">{slide.post}</p>
                            </div>
                        ))}
                    </Carousel>
                </div>
                <div className='text-white mt-14'>
                    <h1 className='text-center font-bold text-4xl'>What Our Clients Say About Our Services?</h1>
                    <div className='md:flex md-flex-row justify-between mt-10'>
                        <div className='bg-white w-[400px] h-[346px] m-4'>
                            <img src='' alt='no_img' />
                        </div>
                        <div className='bg-white w-[400px] h-[346px] m-4'>
                            <img src='' alt='no_img' />
                        </div>
                        <div className='bg-white w-[400px] h-[346px] m-4'>
                            <img src='' alt='no_img' />
                        </div>
                    </div>
                </div>
                <div className='text-white mt-14'>
                    <h1 className='text-center font-bold text-4xl'>Our Happy Clients</h1>
                    <div className='flex-row md:flex mt-7'>
                        <div className='bg-black w-[400px] h-[700px] m-2'>
                            <Carousel showThumbs={false} showStatus={false} showArrows={false}>
                                {client1.map((client1, index) => (
                                    <div key={index} className=" rounded-md ">
                                        <div className='bg-gray-500 h-[50px] rounded-md flex items-center justify-center'>
                                            <p className="text-white text-center font-bold">{client1.tittle}</p>
                                        </div>
                                        <div className='p-6'>
                                            <p className="text-gray-500 mt-4 text-center mb-4">{client1.content}</p>
                                        </div>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                        <div className='bg-black w-[400px] h-[700px] m-2'>
                            <Carousel showThumbs={false} showStatus={false} showArrows={false}>
                                {client2.map((client2, index) => (
                                    <div key={index} className=" rounded-md ">
                                        <div className='bg-gray-500 h-[50px] rounded-md flex items-center justify-center'>
                                            <p className="text-white text-center font-bold">{client2.tittle}</p>
                                        </div>
                                        <div className='p-6'>
                                            <p className="text-gray-500 mt-4 text-center mb-4">{client2.content}</p>
                                        </div>
                                    </div>
                                ))}
                            </Carousel>
                            </div>
                            <div className='bg-black w-[400px] h-[700px] m-2'>
                                <Carousel showThumbs={false} showStatus={false} showArrows={false}>
                                    {client3.map((client3, index) => (
                                        <div key={index} className=" rounded-md ">
                                            <div className='bg-gray-500 h-[50px] rounded-md flex items-center justify-center'>
                                                <p className="text-white text-center font-bold">{client3.tittle}</p>
                                            </div>
                                            <div className='p-6'>
                                                <p className="text-gray-500 mt-4 text-center mb-4">{client3.content}</p>
                                            </div>
                                        </div>
                                    ))}
                                </Carousel>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            )
}

            export default About