import React from 'react'
import img1 from '../../assets/img/vision.png'
import Slider from "react-slick";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'tailwindcss/tailwind.css';
import { motion } from "framer-motion";
import  Happy_client from "../../component/About/Happy_client.jsx";



const About = (index) => {
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

    return (
        <div className='bg-[#0F0E0E] p-20 items-center '>
            <div className='md:w-[80%] w-auto mt-4 mx-auto'>
                <div className='item-center text-center'>
                    <motion.div
                        className="card"
                        initial={{
                            opacity: 0,
                            // if odd index card, slide from right instead of left
                            y: index % 2 === 0 ? -50 : 50,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0, // Slide in to its original position
                            transition: {
                                duration: 1, // Animation duration
                            },
                        }}
                        viewport={{ once: true }}
                    >
                        <h1 className='text-white font-black text-5xl'>Online Marketing Agency India</h1>
                        <p className='text-gray-500 mt-10 justify-center text-center items-center'> We are one of the finest Web Development and Digital Marketing Company In India renowned for using the latest online marketing
                            techniques and the most sophisticated tools that help your business get a digital edge. Beat your competitors and outshine the crowd
                            with ‘RankOn Technologies’ by your side for all your Digital Marketing needs.</p>
                    </motion.div>
                </div>
                <div className='md:flex flex-row mt-9 justify-around'>
                    <motion.div
                        className="card"
                        initial={{
                            opacity: 0,
                            // if odd index card, slide from right instead of left
                            x: index % 2 === 0 ? 50 : -50,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0, // Slide in to its original position
                            transition: {
                                duration: 1, // Animation duration
                            },
                        }}
                        viewport={{ once: true }}
                    >
                        <div className=''>
                            <ul className=' text-gray-500'>
                                <li>✔️ Website Design & Development</li>
                                <li>✔️ Online Reputation Management</li>
                                <li>✔️ Search Engine Optimization</li>
                                <li>✔️ Content Marketing</li>
                            </ul>
                            <button className='bg-white text-black font-bold py-2 px-4 rounded-md m-4'>Request Free Audit!</button>
                        </div>
                    </motion.div>
                    <motion.div
                        className="card"
                        initial={{
                            opacity: 0,
                            // if odd index card, slide from right instead of left
                            x: index % 2 === 0 ? -50 : 50,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0, // Slide in to its original position
                            transition: {
                                duration: 1, // Animation duration
                            },
                        }}
                        viewport={{ once: true }}
                    >
                        <div className=''>
                            <ul className='text-gray-500'>
                                <li>✔️ Social Media Optimization</li>
                                <li>✔️ Email Marketing</li>
                                <li>✔️ Logo Design</li>
                                <li>✔️ Pay-Per-Click (PPC)/Google Ads</li>
                            </ul>
                            <button className='bg-white text-black font-bold py-2 px-4 rounded-md m-4'>Our Packages</button>
                        </div>
                    </motion.div>
                </div>

                <div className=''>
                    <motion.div
                        className="card"
                        initial={{
                            opacity: 0,
                            // if odd index card, slide from right instead of left
                            y: index % 2 === 0 ? -50 : 50,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0, // Slide in to its original position
                            transition: {
                                duration: 1, // Animation duration
                            },
                        }}
                        viewport={{ once: true }}
                    >

                        <h1 className='text-white text-4xl mt-4 font-bold'>About us </h1>
                        <p className='text-gray-500 mt-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book. It has survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially unchanged. It was popularised in
                            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                            and more recently with desktop publishing software like Aldus PageMaker
                            including versions of Lorem Ipsum.</p>
                    </motion.div>
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
                    <motion.div
                        className="card"
                        initial={{
                            opacity: 0,
                            // if odd index card, slide from right instead of left
                            y: index % 2 === 0 ? -50 : 50,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0, // Slide in to its original position
                            transition: {
                                duration: 1, // Animation duration
                            },
                        }}
                        viewport={{ once: true }}
                    >
                        <h1 className='text-center font-bold text-4xl'>Our Happy Clients</h1>
                    </motion.div>
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
                <Happy_client />
            </div>
        </div>
    )
}

export default About