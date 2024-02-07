import React, { useState } from 'react'
import img1 from '../../assets/img/vision.png'
import { FcServices } from "react-icons/fc";
import { CgProfile } from "react-icons/cg";
import { FaReact } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Bs1Circle } from "react-icons/bs";
import { Bs2Circle } from "react-icons/bs";
import { Bs3Circle } from "react-icons/bs";
import { Bs4Circle } from "react-icons/bs";
import Happy_client from '../../component/About/Happy_client';



const Degital_marketing = () => {
  const [fVideo, setFVideo] = useState(true);
  const [sVideo, setSVideo] = useState(false);
  const [tVideo, setTVideo] = useState(false);
  // const [selectedVideo, setSelectedVideo] = useState('');

  const handleVideo1Click = () => {
    if (fVideo == true) {
      return;
    }
    else {
      setFVideo(true);
      setSVideo(false);
      setTVideo(false);
    }
  };
  const handleVideo2Click = () => {
    if (sVideo == true) {
      return;
    }
    else {
      setFVideo(false);
      setSVideo(true);
      setTVideo(false);
    }
  };
  const handleVideo3Click = () => {
    if (tVideo == true) {
      return;
    }
    else {
      setFVideo(false);
      setSVideo(false);
      setTVideo(true);
    }
  };
  const Googel = [
    {
      contents: [{ content: 'An SEO audit is a comprehensive evaluation of a website’s search engine optimization (SEO) performance. The purpose of an SEO audit is to identify areas of improvement, uncover issues that may be affecting a site’s visibility in search engine results, and provide recommendations for optimizing its overall SEO strategy.' },
      { content: 'An SEO audit is a comprehensive evaluation of a website’s search engine optimization (SEO) performance. The purpose of an SEO audit is to identify areas of improvement, uncover issues that may be affecting a site’s visibility in search engine results, and provide recommendations for optimizing its overall SEO strategy.' },
      { content: 'An SEO audit is a comprehensive evaluation of a website’s search engine optimization (SEO) performance. The purpose of an SEO audit is to identify areas of improvement, uncover issues that may be affecting a site’s visibility in search engine results, and provide recommendations for optimizing its overall SEO strategy.' }],
      name: [
        { name: 'SEO vs. PPC Advertising: Which Is Better for Your Business in 2024?' },
        { name: 'SEO vs. PPC Advertising: Which Is Better for Your Business in 2024?' },
        { name: 'SEO vs. PPC Advertising: Which Is Better for Your Business in 2024?' }
      ],
      imageSrc: [
        { imageSrc: { img1 } },
        { imageSrc: { img1 } },
        { imageSrc: { img1 } }]
    },
    {
      contents: [{ content: 'An SEO audit is a comprehensive evaluation of a website’s search engine optimization (SEO) performance. The purpose of an SEO audit is to identify areas of improvement, uncover issues that may be affecting a site’s visibility in search engine results, and provide recommendations for optimizing its overall SEO strategy.' },
      { content: 'An SEO audit is a comprehensive evaluation of a website’s search engine optimization (SEO) performance. The purpose of an SEO audit is to identify areas of improvement, uncover issues that may be affecting a site’s visibility in search engine results, and provide recommendations for optimizing its overall SEO strategy.' },
      { content: 'An SEO audit is a comprehensive evaluation of a website’s search engine optimization (SEO) performance. The purpose of an SEO audit is to identify areas of improvement, uncover issues that may be affecting a site’s visibility in search engine results, and provide recommendations for optimizing its overall SEO strategy.' }],
      name: [
        { name: 'SEO vs. PPC Advertising: Which Is Better for Your Business in 2024?' },
        { name: 'SEO vs. PPC Advertising: Which Is Better for Your Business in 2024?' },
        { name: 'SEO vs. PPC Advertising: Which Is Better for Your Business in 2024?' }
      ],
      imageSrc: [
        { imageSrc: { img1 } },
        { imageSrc: { img1 } },
        { imageSrc: { img1 } }]
    },
    {
      contents: [{ content: 'An SEO audit is a comprehensive evaluation of a website’s search engine optimization (SEO) performance. The purpose of an SEO audit is to identify areas of improvement, uncover issues that may be affecting a site’s visibility in search engine results, and provide recommendations for optimizing its overall SEO strategy.' },
      { content: 'An SEO audit is a comprehensive evaluation of a website’s search engine optimization (SEO) performance. The purpose of an SEO audit is to identify areas of improvement, uncover issues that may be affecting a site’s visibility in search engine results, and provide recommendations for optimizing its overall SEO strategy.' },
      { content: 'An SEO audit is a comprehensive evaluation of a website’s search engine optimization (SEO) performance. The purpose of an SEO audit is to identify areas of improvement, uncover issues that may be affecting a site’s visibility in search engine results, and provide recommendations for optimizing its overall SEO strategy.' }],
      name: [
        { name: 'SEO vs. PPC Advertising: Which Is Better for Your Business in 2024?' },
        { name: 'SEO vs. PPC Advertising: Which Is Better for Your Business in 2024?' },
        { name: 'SEO vs. PPC Advertising: Which Is Better for Your Business in 2024?' }
      ],
      imageSrc: [
        { imageSrc: { img1 } },
        { imageSrc: { img1 } },
        { imageSrc: { img1 } }]
    },
    {
      contents: [{ content: 'An SEO audit is a comprehensive evaluation of a website’s search engine optimization (SEO) performance. The purpose of an SEO audit is to identify areas of improvement, uncover issues that may be affecting a site’s visibility in search engine results, and provide recommendations for optimizing its overall SEO strategy.' },
      { content: 'An SEO audit is a comprehensive evaluation of a website’s search engine optimization (SEO) performance. The purpose of an SEO audit is to identify areas of improvement, uncover issues that may be affecting a site’s visibility in search engine results, and provide recommendations for optimizing its overall SEO strategy.' },
      { content: 'An SEO audit is a comprehensive evaluation of a website’s search engine optimization (SEO) performance. The purpose of an SEO audit is to identify areas of improvement, uncover issues that may be affecting a site’s visibility in search engine results, and provide recommendations for optimizing its overall SEO strategy.' }],
      name: [
        { name: 'SEO vs. PPC Advertising: Which Is Better for Your Business in 2024?' },
        { name: 'SEO vs. PPC Advertising: Which Is Better for Your Business in 2024?' },
        { name: 'SEO vs. PPC Advertising: Which Is Better for Your Business in 2024?' }
      ],
      imageSrc: [
        { imageSrc: { img1 } },
        { imageSrc: { img1 } },
        { imageSrc: { img1 } }]
    },
  ]
  return (
    <div className='bg-[#0F0E0E] p-20 items-center'>
      <div className='md:w-[80%] w-auto mt-4 mx-auto'>
        <div className='md:flex flex-row mt-9 justify-around'>
          <div className='w-[50%]'>
            <img src={img1} className='' />
          </div>
          <div className='w-[50%]'>
            <div class='flex bg-white text-black w-[699px] h-[50px] justify-between items-center p-2 rounded-md'>
              <div>
                <p class='font-bold justify-center align-middle'>Digital Marketing Training In India</p>
              </div>
              <div>
                <button class='bg-black text-white font-bold py-2 px-4 rounded-md'>Apply Now</button>
              </div>
            </div>
            <p className='items-end justify-end text-gray-500 text-end m-2'>Digital Marketing Training</p>
            <h2 className='font-bold text-white text-2xl text-end m-2'>Best Digital Marketing Training In word</h2>
            <p className='items-end justify-end text-gray-500 text-end m-2'>Digital Marketing Course Duration – 2 Months</p>
            <h2 className='font-bold text-white text-2xl text-end m-2'>Limited Time Offer Rs.  25,000</h2>
            <div className='md:flex flex-row mt-9 justify-end '>
              <div className='p-3'>
                <ul className=' text-gray-500'>
                  <li>✔️ 100% Practical Training</li>
                  <li>✔️ Learn Through Live Projects</li>
                  <li>✔️ Top Digital Marketing Certifications</li>
                </ul>
                <button className='bg-white text-black font-bold py-2 px-4 rounded-md m-4'>Our Packages</button>
              </div>
              <div className='p-3'>
                <ul className='text-gray-500'>
                  <li>✔️ Full Placement Assistance</li>
                  <li>✔️ Doubt Clearing Sessions</li>
                  <li>✔️ Get Trained By Expert Trainers</li>
                </ul>
                <button className='bg-white text-black font-bold py-2 px-4 rounded-md m-4'>Our Packages</button>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-[100px]'>
          <h1 className='text-white text-4xl mt-4 font-bold text-center'>Digital Marketing Training In Lucknow</h1>
        </div>
        <div className='md:flex flex-row mt-9 justify-around'>
          <div className='w-[30%]'>
            <img src={img1} className='' />
          </div>
          <div className='w-[50%]'>
            <p className='text-gray-500 mt-7'>Digital Marketing industry see new changes almost every week so learn from working professionals and understand the concept by working on live projects.</p>
            <p className='text-gray-500 mt-10'>Are you a student and have interest in learning digital marketing to get a job in digital marketing industry? Blue soltech is a leading digital marketing company in Lucknow offering job oriented digital marketing training in Lucknow.</p>
            <p className='text-gray-500 mt-8'>We offer latest digital marketing courses so you learn latest digital marketing skills to secure a bright future in digital marketing industry.</p>
          </div>
        </div>
        <div className=''>
          <p className='text-gray-500 mt-10'>We have expert digital marketing professionals in Lucknow who have years of experience in providing digital marketing training and services in Lucknow. We offer live training on digital marketing projects so you get the skill to manage projects independently.</p>
          <p className="text-gray-500 mt-10">If you are interested in learning digital marketing then you have come to the right place. Blue soltech offers digital marketing course and provide affordable digital marketing training in Lucknow so every student who have interest in learning digital marketing can afford it.</p>
        </div>
        <div className='mt-[100px]'>
          <h1 className='text-white text-4xl mt-4 font-bold text-center'>Digital Marketing Classes Lucknow</h1>
          <div className=' flex flex-col xl:flex-row justify-between mt-10'>
            <div className='bg-black w-[400px] h-[400px] flex flex-col justify-center items-center shadow-2xl m-4'>
              <div className='h-[200px] w-[300px] flex justify-center items-center p-4'>
                <img src={img1} alt='no_img' className='w-full h-auto' />
              </div>
              <h2 className='font-bold text-white text-center mt-5'>Next Batch</h2>
              <p className='text-gray-500 text-center my-5'>1 Hour Per Day – (Monday To Friday)</p>
            </div>
            <div className='bg-black w-[400px] h-[400px] flex flex-col justify-center items-center shadow-2xl m-4'>
              <div className='h-[200px] w-[300px] flex justify-center items-center p-4'>
                <img src={img1} alt='no_img' className='w-full h-auto' />
              </div>
              <h2 className='font-bold text-white text-center mt-5'>Next Batch</h2>
              <p className='text-gray-500 text-center my-5'>2 Hours Per Day (Saturday & Sunday)</p>
            </div>
            <div className='bg-black w-[400px] h-[400px] flex flex-col justify-center items-center shadow-2xl m-4'>
              <div className='h-[200px] w-[300px] flex justify-center items-center p-4'>
                <img src={img1} alt='no_img' className='w-full h-auto' />
              </div>
              <h2 className='font-bold text-white text-center mt-5'>Next Batch</h2>
              <p className='text-gray-500 text-center my-5'>Starting From – 1 March 2022</p>
            </div>
          </div>
        </div>
        <div className='mt-[100px]'>
          <h1 className='text-white text-4xl mt-4 font-bold text-center'>Why Should You Choose Blue soltech For Digital Marketing Training In word?</h1>
          <h1 className='text-white text-4xl mt-12 font-bold text-center'>What You Will Learn In Our Digital Marketing Course In word?</h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 text-sm justify-between mt-11'>
            <div className='bg-black w-[200px] h-[300px] flex flex-col justify-center items-center shadow-2xl m-4 mx-auto'>
              <div className='h-[200px] w-[200px] flex justify-center items-center p-4'>
                <img src={img1} alt='no_img' className='w-full h-auto' />
              </div>
              <h2 className='font-bold text-gray-500 text-center mt-5'>SEO</h2>
            </div>
            <div className='bg-black w-[200px] h-[300px] flex flex-col justify-center items-center shadow-2xl m-4 mx-auto'>
              <div className='h-[200px] w-[200px] flex justify-center items-center p-4'>
                <img src={img1} alt='no_img' className='w-full h-auto' />
              </div>
              <h2 className='font-bold text-gray-500 text-center mt-5'>Google Analytics</h2>
            </div>
            <div className='bg-black w-[200px] h-[300px] flex flex-col justify-center items-center shadow-2xl m-4 mx-auto'>
              <div className='h-[200px] w-[200px] flex justify-center items-center p-4'>
                <img src={img1} alt='no_img' className='w-full h-auto' />
              </div>
              <h2 className='font-bold text-gray-500 text-center mt-5'>Google Ads</h2>
            </div>
            <div className='bg-black w-[200px] h-[300px] flex flex-col justify-center items-center shadow-2xl m-4 mx-auto'>
              <div className='h-[200px] w-[200px] flex justify-center items-center p-4'>
                <img src={img1} alt='no_img' className='w-full h-auto' />
              </div>
              <h2 className='font-bold text-gray-500 text-center mt-5'>Social Media Marketing</h2>
            </div>
            <div className='bg-black w-[200px] h-[300px] flex flex-col justify-center items-center shadow-2xl m-4 mx-auto'>
              <div className='h-[200px] w-[200px] flex justify-center items-center p-4'>
                <img src={img1} alt='no_img' className='w-full h-auto' />
              </div>
              <h2 className='font-bold text-gray-500 text-center mt-5'>Google Search Console</h2>
            </div>
            <div className='bg-black w-[200px] h-[300px] flex flex-col justify-center items-center shadow-2xl m-4 mx-auto'>
              <div className='h-[200px] w-[200px] flex justify-center items-center p-4'>
                <img src={img1} alt='no_img' className='w-full h-auto' />
              </div>
              <h2 className='font-bold text-gray-500 text-center mt-5'>Video Marketing</h2>
            </div>
            <div className='bg-black w-[200px] h-[300px] flex flex-col justify-center items-center shadow-2xl m-4 mx-auto'>
              <div className='h-[200px] w-[200px] flex justify-center items-center p-4'>
                <img src={img1} alt='no_img' className='w-full h-auto' />
              </div>
              <h2 className='font-bold text-gray-500 text-center mt-5'>Introduction of WordPress Web Development</h2>
            </div>
            <div className='bg-black w-[200px] h-[300px] flex flex-col justify-center items-center shadow-2xl m-4 mx-auto'>
              <div className='h-[200px] w-[200px] flex justify-center items-center p-4'>
                <img src={img1} alt='no_img' className='w-full h-auto' />
              </div>
              <h2 className='font-bold text-gray-500 text-center mt-5'>Introduction of Graphics Designing</h2>
            </div>
            <div className='bg-black w-[200px] h-[300px] flex flex-col justify-center items-center shadow-2xl m-4 mx-auto'>
              <div className='h-[200px] w-[200px] flex justify-center items-center p-4'>
                <img src={img1} alt='no_img' className='w-full h-auto' />
              </div>
              <h2 className='font-bold text-gray-500 text-center mt-5'>Introduction of Video Editing</h2>
            </div>
            <div className='bg-black w-[200px] h-[300px] flex flex-col justify-center items-center shadow-2xl m-4 mx-auto'>
              <div className='h-[200px] w-[200px] flex justify-center items-center p-4'>
                <img src={img1} alt='no_img' className='w-full h-auto' />
              </div>
              <h2 className='font-bold text-gray-500 text-center mt-5'>Google Tag Manager</h2>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center mt-14'>
          <div className='bg-black w-[1300px] h-[180px]'>
            <h1 className='font-bold text-white text-3xl p-4'>Would You Like To Discuss Your Project With Our Experts?</h1>
            <div className='flex xl:flex-row justify-between items-center'>
              <div>
                <FcServices size={70} />
              </div>
              <div>
                <p className='font-bold text-gray-500'>Send Your Project Details By Clicking On Get In Touch And One Of Our Team Members Will Call You Soon!</p>
              </div>
              <div>
                <button className='bg-white text-black font-bold py-2 px-4 rounded-full m-4'>Request Proposal</button>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-[100px]'>
          <h1 className='text-white text-4xl mt-4 font-bold text-center'>What Our Clients Say About Our Services?</h1>
          <div className='flex-row  xl:flex mt-12  xl:justify-between'>
            <div className='bg-white w-[300px] h-[300px] m-4'>
              <img src='' alt='no-img'></img>
            </div>
            <div className='bg-white w-[300px] h-[300px] m-4'>
              <img src='' alt='no-img'></img>
            </div>
            <div className='bg-white w-[300px] h-[300px] m-4'>
              <img src='' alt='no-img'></img>
            </div>
          </div>
        </div>
        {/* <div className='mt-[100px]'>
          <h1 className='text-white text-4xl mt-4 font-bold text-center'>Our Certificate</h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 text-sm mt-11 w-full'>
            <div className='bg-white w-[300px] h-[300px] mx-auto m-4 overflow-hidden'>
              <div className='relative w-full h-full'>
                <img src={img1} alt='no-img' className='absolute inset-0 w-full h-full object-cover transition duration-300 transform scale-100 hover:scale-110'></img>
              </div>
            </div>
            <div className='bg-white w-[300px] h-[300px] mx-auto m-4 overflow-hidden'>
              <div className='relative w-full h-full'>
                <img src={img1} alt='no-img' className='absolute inset-0 w-full h-full object-cover transition duration-300 transform scale-100 hover:scale-110'></img>
              </div>
            </div>
            <div className='bg-white w-[300px] h-[300px] mx-auto m-4 overflow-hidden'>
              <div className='relative w-full h-full'>
                <img src={img1} alt='no-img' className='absolute inset-0 w-full h-full object-cover transition duration-300 transform scale-100 hover:scale-110'></img>
              </div>
            </div>
            <div className='bg-white w-[300px] h-[300px] mx-auto m-4 overflow-hidden'>
              <div className='relative w-full h-full'>
                <img src={img1} alt='no-img' className='absolute inset-0 w-full h-full object-cover transition duration-300 transform scale-100 hover:scale-110'></img>
              </div>
            </div>
            <div className='bg-white w-[300px] h-[300px] mx-auto m-4 overflow-hidden'>
              <div className='relative w-full h-full'>
                <img src={img1} alt='no-img' className='absolute inset-0 w-full h-full object-cover transition duration-300 transform scale-100 hover:scale-110'></img>
              </div>
            </div>
            <div className='bg-white w-[300px] h-[300px] mx-auto m-4 overflow-hidden'>
              <div className='relative w-full h-full'>
                <img src={img1} alt='no-img' className='absolute inset-0 w-full h-full object-cover transition duration-300 transform scale-100 hover:scale-110'></img>
              </div>
            </div>
            <div className='bg-white w-[300px] h-[300px] mx-auto m-4 overflow-hidden'>
              <div className='relative w-full h-full'>
                <img src={img1} alt='no-img' className='absolute inset-0 w-full h-full object-cover transition duration-300 transform scale-100 hover:scale-110'></img>
              </div>
            </div>
            <div className='bg-white w-[300px] h-[300px] mx-auto m-4 overflow-hidden'>
              <div className='relative w-full h-full'>
                <img src={img1} alt='no-img' className='absolute inset-0 w-full h-full object-cover transition duration-300 transform scale-100 hover:scale-110'></img>
              </div>
            </div>
            <div className='bg-white w-[300px] h-[300px] mx-auto m-4 overflow-hidden'>
              <div className='relative w-full h-full'>
                <img src={img1} alt='no-img' className='absolute inset-0 w-full h-full object-cover transition duration-300 transform scale-100 hover:scale-110'></img>
              </div>
            </div>
            <div className='bg-white w-[300px] h-[300px] mx-auto m-4 overflow-hidden'>
              <div className='relative w-full h-full'>
                <img src={img1} alt='no-img' className='absolute inset-0 w-full h-full object-cover transition duration-300 transform scale-100 hover:scale-110'></img>
              </div>
            </div>
            <div className='bg-white w-[300px] h-[300px] mx-auto m-4 overflow-hidden'>
              <div className='relative w-full h-full'>
                <img src={img1} alt='no-img' className='absolute inset-0 w-full h-full object-cover transition duration-300 transform scale-100 hover:scale-110'></img>
              </div>
            </div>
            <div className='bg-white w-[300px] h-[300px] mx-auto m-4 overflow-hidden'>
              <div className='relative w-full h-full'>
                <img src={img1} alt='no-img' className='absolute inset-0 w-full h-full object-cover transition duration-300 transform scale-100 hover:scale-110'></img>
              </div>
            </div>
            <div className='bg-white w-[300px] h-[300px] mx-auto m-4 overflow-hidden'>
              <div className='relative w-full h-full'>
                <img src={img1} alt='no-img' className='absolute inset-0 w-full h-full object-cover transition duration-300 transform scale-100 hover:scale-110'></img>
              </div>
            </div>
            <div className='bg-white w-[300px] h-[300px] mx-auto m-4 overflow-hidden'>
              <div className='relative w-full h-full'>
                <img src={img1} alt='no-img' className='absolute inset-0 w-full h-full object-cover transition duration-300 transform scale-100 hover:scale-110'></img>
              </div>
            </div>
            <div className='bg-white w-[300px] h-[300px] mx-auto m-4 overflow-hidden'>
              <div className='relative w-full h-full'>
                <img src={img1} alt='no-img' className='absolute inset-0 w-full h-full object-cover transition duration-300 transform scale-100 hover:scale-110'></img>
              </div>
            </div>
          </div>
        </div> */}
        <div className='mt-[100px]'>
          <h1 className='text-white text-4xl mt-4 font-bold text-center'>Our Digital Marketing Trainers In Lucknow</h1>
          <div className='flex-row xl:flex mt-10 justify-around'>
            <div className='text-white w-[350px] h-[300px] bg-black p-4 flex flex-col justify-center items-center m-2'>
              <div className='h-[100px] w-[100px] rounded-full flex items-center justify-center text-center'>
                <CgProfile size={100} /> {/* Adjust size as needed */}
              </div>
              <div className='text-center'>
                <h1 className='font-bold text-white mt-4'>Anand Tiwari</h1>
                <h1 className='font-bold text-white mt-4'>Experience: 8 Years</h1>
                <p className='text-gray-500 mt-4'>SEO & Content Marketing, Google analytics</p>
              </div>
            </div>
            <div className='text-white w-[350px] h-[300px] bg-black p-4 flex flex-col justify-center items-center m-2'>
              <div className='h-[100px] w-[100px] rounded-full flex items-center justify-center text-center'>
                <CgProfile size={100} /> {/* Adjust size as needed */}
              </div>
              <div className='text-center'>
                <h1 className='font-bold text-white mt-4'>Alok Tiwari</h1>
                <h1 className='font-bold text-white mt-4'>Experience :- 7 Years</h1>
                <p className='text-gray-500 mt-4'>Youtube SEO & Google Map SEO, Google search Console</p>
              </div>
            </div>
            <div className='text-white w-[350px] h-[300px] bg-black p-4 flex flex-col justify-center items-center m-2'>
              <div className='h-[100px] w-[100px] rounded-full flex items-center justify-center text-center'>
                <CgProfile size={100} /> {/* Adjust size as needed */}
              </div>
              <div className='text-center'>
                <h1 className='font-bold text-white mt-4'>Ashok Kumar Pal</h1>
                <h1 className='font-bold text-white mt-4'>Experience :- 7 Years</h1>
                <p className='text-gray-500 mt-4'>Website SEO Changes, WordPress Intro</p>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-[100px]'>
          <h1 className='text-white text-4xl mt-4 font-bold text-center'>Check Our Latest Youtube Video On Digital Marketing</h1>
          <div className='md:flex flex-row mt-9 justify-around'>
            <div className='w-[50%]'>
              <div className='w-full h-[420px] bg-white'>
                {fVideo && (
                  <iframe className="w-full h-full" src="https://www.youtube.com/embed/OsDNyNW6j5U?si=8hUuHd3otC1OUnVG&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                )}
                {sVideo && (
                  <iframe className="w-full h-full" src="https://www.youtube.com/embed/feqafo-7Dok?si=j67dm2-Rhy95qab8&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe>
                )}
                {tVideo && (
                  <iframe className="w-full h-full" src="https://www.youtube.com/embed/OsDNyNW6j5U?si=8hUuHd3otC1OUnVG&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                )}
              </div>
            </div>
            <div className='w-[30%] '>
              <div className='bg-black border-white border-2 w-[470px] h-[53px] m-4' onClick={handleVideo1Click}>
                Video 1
              </div>
              <div className='bg-black border-white border-2 w-[470px] h-[53px] m-4' onClick={handleVideo2Click}>
                Video 2
              </div>
              <div className='bg-black border-white border-2 w-[470px] h-[53px] m-4' onClick={handleVideo3Click}>
                Video 3
              </div>
            </div>
          </div>
        </div>
        <div className='mt-[100px]'>
          <h1 className='bg-gradient-to-t bg-clip-text from-black text-transparent to-white text-4xl mt-4 font-bold text-center'>Digital Marketing Course Schedule</h1>
          <div className='flex justify-around mt-11'>
            <div className='bg-black w-[350px] h-fit'>
              <div className='w-full h-[50px] bg-white flex justify-center items-center'>
                <p className='font-bold text-xl'>Social Media Optimization (SMO)</p>
              </div>
              <div className=''>
                <h1 className='font-bold text-white text-center mt-6'>2 Week</h1>
              </div>
              <div className='justify-start items-start text-start px-7'>
                <ul className='font-bold text-gray-500 mt-6 list-none'>
                  <li className='mt-2'>➤ Introduction of SMO/SMM</li>
                  <li className='mt-2'>➤ Facebook Marketing</li>
                  <li className='mt-2'>➤ Twitter Marketing</li>
                  <li className='mt-2'>➤ Linkedin Marketing</li>
                  <li className='mt-2'>➤ Youtube Marketing</li>
                  <li className='mt-2'>➤ Quora Marketing</li>
                  <li className='mt-2'>➤ Reddit Marketing</li>
                  <li className='mt-2'>➤ Advanced SMO Tips</li>
                  <li className='mt-2'>➤ SMO Tools</li>
                  <li className='mt-2'>➤ Reporting</li>
                </ul>
              </div>
              <div className='item-center justify-center text-center'>
                <button className='bg-white text-black font-bold py-2 px-4 rounded-md m-4'>Get Started Now!</button>
              </div>
            </div>
            <div className='bg-black w-[350px] h-fit'>
              <div className='w-full h-[50px] bg-white flex justify-center items-center'>
                <p className='font-bold text-xl'>Google Ads (PPC)</p>
              </div>
              <div className=''>
                <h1 className='font-bold text-white text-center mt-6'>2 Week</h1>
              </div>
              <div className='justify-start items-start text-start px-7'>
                <ul className='font-bold text-gray-500 mt-6 list-none'>
                  <li className='mt-2'>➤ Pay Per Click (PPC) Introduction</li>
                  <li className='mt-2'>➤ Google Search Ads</li>
                  <li className='mt-2'>➤ Google Display Ads</li>
                  <li className='mt-2'>➤ Google Video Ads</li>
                  <li className='mt-2'>➤ Google Shopping Ads</li>
                  <li className='mt-2'>➤ Google Gmail Ads</li>
                  <li className='mt-2'>➤ Landing Page Tips</li>
                  <li className='mt-2'>➤ Google Ads Advanced tips</li>
                  <li className='mt-2'>➤ Google Ads Case studies</li>
                  <li className='mt-2'>➤ Keyword Categorization.</li>
                  <li className='mt-2'>➤ Campaign Management.</li>
                  <li className='mt-2'>➤ Google Ads and Bids Management.</li>
                  <li className='mt-2'>➤ PPC Tools.</li>
                  <li className='mt-2'>➤  PPC Report Generation.</li>
                </ul>
              </div>
              <div className='item-center justify-center text-center'>
                <button className='bg-white text-black font-bold py-2 px-4 rounded-md m-4'>Get Started Now!</button>
              </div>
            </div>
            <div className='bg-black w-[350px] h-fit'>
              <div className='w-full h-[50px] bg-white flex justify-center items-center'>
                <p className='font-bold text-xl'>Search Engine Optimization (SEO)</p>
              </div>
              <div className=''>
                <h1 className='font-bold text-white text-center mt-6'>3 Week</h1>
              </div>
              <div className='justify-start items-start text-start px-7'>
                <ul className='font-bold text-gray-500 mt-6 list-none'>
                  <li className='mt-2'>➤ Introduction of SEO</li>
                  <li className='mt-2'>➤ Website SEO Audit</li>
                  <li className='mt-2'>➤ Competitor Analysis</li>
                  <li className='mt-2'>➤ Website Audit tools Introduction</li>
                  <li className='mt-2'>➤ Keyword Research</li>
                  <li className='mt-2'>➤ HTML Overview</li>
                  <li className='mt-2'>➤ Backlink analysis tool introduction</li>
                  <li className='mt-2'>➤ On-Page Optimization.</li>
                  <li className='mt-2'>➤ Off-Page Optimization.</li>
                  <li className='mt-2'>➤ Google Search Console</li>
                  <li className='mt-2'>➤ Google Tag manager</li>
                  <li className='mt-2'>➤ Google Data Studio</li>
                  <li className='mt-2'>➤ Other Popular SEO Tools.</li>
                  <li className='mt-2'>➤ Google Algorithm Updates</li>
                  <li className='mt-2'>➤ Report Generation.</li>
                  <li className='my-2'>➤ Advanced Tips</li>
                </ul>
              </div>
              <div className='item-center justify-center text-center'>
                <button className='bg-white text-black font-bold py-2 px-4 rounded-md m-4'>Get Started Now!</button>
              </div>
            </div>

          </div>
        </div>
        <div className='mt-[100px]'>
          <h1 className='bg-gradient-to-t bg-clip-text from-black text-transparent to-white text-4xl mt-4 font-bold text-center'>Extra Freebies We Offer In Our Digital Marketing Course In Lucknow – 1 Week</h1>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-sm justify-between mt-11'>
            <div className='bg-black w-[200px] h-fit flex flex-col justify-center items-center shadow-2xl m-4 mx-auto p-7'>
              <div className="w-[100px] h-[100px] bg-white rounded-full flex items-center justify-center">
                <MdEmail size={70} />
              </div>
              <h2 className='font-bold text-gray-500 text-center mt-5'>Email Marketing</h2>
            </div>
            <div className='bg-black w-[200px] h-fit flex flex-col justify-center items-center shadow-2xl m-4 mx-auto p-7'>
              <div className="w-[100px] h-[100px] bg-white rounded-full flex items-center justify-center">
                <FaReact size={70} />
              </div>
              <h2 className='font-bold text-gray-500 text-center mt-5'>Blogging Tips</h2>
            </div>
            <div className='bg-black w-[200px] h-fit flex flex-col justify-center items-center shadow-2xl m-4 mx-auto p-7'>
              <div className="w-[100px] h-[100px] bg-white rounded-full flex items-center justify-center">
                <FaReact size={70} />
              </div>
              <h2 className='font-bold text-gray-500 text-center mt-5'>Affiliate Marketing</h2>
            </div>
            <div className='bg-black w-[200px] h-fit flex flex-col justify-center items-center shadow-2xl m-4 mx-auto p-7'>
              <div className="w-[100px] h-[100px] bg-white rounded-full flex items-center justify-center">
                <FaReact size={70} />
              </div>
              <h2 className='font-bold text-gray-500 text-center mt-5'>Graphic Designing & Video Editing</h2>
            </div>
            <div className='bg-black w-[200px] h-fit flex flex-col justify-center items-center shadow-2xl m-4 mx-auto p-7'>
              <div className="w-[100px] h-[100px] bg-white rounded-full flex items-center justify-center">
                <FaReact size={70} />
              </div>
              <h2 className='font-bold text-gray-500 text-center mt-5'>E-Commerce Marketing</h2>
            </div>
            <div className='bg-black w-[200px] h-fit flex flex-col justify-center items-center shadow-2xl m-4 mx-auto p-7'>
              <div className="w-[100px] h-[100px] bg-white rounded-full flex items-center justify-center">
                <FaReact size={70} />
              </div>
              <h2 className='font-bold text-gray-500 text-center mt-5'>Video Marketing</h2>
            </div>
            <div className='bg-black w-[200px] h-fit flex flex-col justify-center items-center shadow-2xl m-4 mx-auto p-7'>
              <div className="w-[100px] h-[100px] bg-white rounded-full flex items-center justify-center">
                <FaReact size={70} />
              </div>
              <h2 className='font-bold text-gray-500 text-center mt-5'>Online Reputation Management</h2>
            </div>
            <div className='bg-black w-[200px] h-fit flex flex-col justify-center items-center shadow-2xl m-4 mx-auto p-7'>
              <div className="w-[100px] h-[100px] bg-white rounded-full flex items-center justify-center">
                <FaReact size={70} />
              </div>
              <h2 className='font-bold text-gray-500 text-center mt-5'>IInterview Preparation</h2>
            </div>
          </div>
        </div>
        <div className='mt-14'>
          <h1 className='text-center font-bold text-4xl text-white mb-7'>SEO Training Resources</h1>
          <Carousel showThumbs={false} showStatus={false} showArrows={false}>
            {Googel.map((item, index) => (
              <div key={index} className="xl:flex flex-row xl:justify-around justify-center items-center mb-10 ">
                {/* First Box */}
                <div className="rounded-md m-2 border border-gray-500 h-max w-[500px] p-4">
                  <div className='p-6'>
                    <div className='h-fit w-full flex items-center justify-center mb-11'>
                      <img src={item.imageSrc[0].imageSrc.img1} className='!h-[150px] !w-full' alt="" />
                    </div>
                    <div>
                      <p className="text-white mt-4 text-start mb-4 font-bold">{item.name[0].name}</p>
                    </div>
                    <p className="text-gray-500 mt-4 text-start mb-4">{item.contents[0].content}</p>
                  </div>
                </div>
                {/* Second Box */}
                <div className="rounded-md m-2 border border-gray-500 h-max w-[500px] p-4">
                  <div className='p-6'>
                    <div className='h-fit w-full flex items-center justify-center mb-11'>
                      <img src={item.imageSrc[0].imageSrc.img1} className='!h-[150px] !w-full' alt="" />
                    </div>
                    <div>
                      <p className="text-white mt-4 text-start mb-4 font-bold">{item.name[1].name}</p>
                    </div>
                    <p className="text-gray-500 mt-4 text-start mb-4">{item.contents[1].content}</p>
                  </div>
                </div>
                <div className="rounded-md m-2 border border-gray-500 h-max w-[500px] p-4">
                  <div className='p-6'>
                    <div className='h-fit w-full flex items-center justify-center mb-11'>
                      <img src={item.imageSrc[0].imageSrc.img1} className='!h-[150px] !w-full' alt="" />
                    </div>
                    <div>
                      <p className="text-white mt-4 text-start mb-4 font-bold">{item.name[2].name}</p>
                    </div>
                    <p className="text-gray-500 mt-4 text-start mb-4">{item.contents[2].content}</p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <div className='mt-14'>
          <h1 className='text-center font-bold text-4xl text-white mb-7'>Google Ads Training Resources</h1>
          <Carousel showThumbs={false} showStatus={false} showArrows={false}>
            {Googel.map((item, index) => (
              <div key={index} className="xl:flex flex-row xl:justify-around justify-center items-center mb-10 ">
                {/* First Box */}
                <div className="rounded-md m-2 border border-gray-500 h-max w-[500px] p-4">
                  <div className='p-6'>
                    <div className='h-fit w-full flex items-center justify-center mb-11'>
                      <img src={item.imageSrc[0].imageSrc.img1} className='!h-[150px] !w-full' alt="" />
                    </div>
                    <div>
                      <p className="text-white mt-4 text-start mb-4 font-bold">{item.name[0].name}</p>
                    </div>
                    <p className="text-gray-500 mt-4 text-start mb-4">{item.contents[0].content}</p>
                  </div>
                </div>
                {/* Second Box */}
                <div className="rounded-md m-2 border border-gray-500 h-max w-[500px] p-4">
                  <div className='p-6'>
                    <div className='h-fit w-full flex items-center justify-center mb-11'>
                      <img src={item.imageSrc[0].imageSrc.img1} className='!h-[150px] !w-full' alt="" />
                    </div>
                    <div>
                      <p className="text-white mt-4 text-start mb-4 font-bold">{item.name[1].name}</p>
                    </div>
                    <p className="text-gray-500 mt-4 text-start mb-4">{item.contents[1].content}</p>
                  </div>
                </div>
                <div className="rounded-md m-2 border border-gray-500 h-max w-[500px] p-4">
                  <div className='p-6'>
                    <div className='h-fit w-full flex items-center justify-center mb-11'>
                      <img src={item.imageSrc[0].imageSrc.img1} className='!h-[150px] !w-full' alt="" />
                    </div>
                    <div>
                      <p className="text-white mt-4 text-start mb-4 font-bold">{item.name[2].name}</p>
                    </div>
                    <p className="text-gray-500 mt-4 text-start mb-4">{item.contents[2].content}</p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <div className='mt-14'>
          <h1 className='text-center font-bold text-4xl text-white mb-7'>Social Media Marketing Training Resources</h1>
          <Carousel showThumbs={false} showStatus={false} showArrows={false}>
            {Googel.map((item, index) => (
              <div key={index} className="xl:flex flex-row xl:justify-around justify-center items-center mb-10 ">
                {/* First Box */}
                <div className="rounded-md m-2 border border-gray-500 h-max w-[500px] p-4">
                  <div className='p-6'>
                    <div className='h-fit w-full flex items-center justify-center mb-11'>
                      <img src={item.imageSrc[0].imageSrc.img1} className='!h-[150px] !w-full' alt="" />
                    </div>
                    <div>
                      <p className="text-white mt-4 text-start mb-4 font-bold">{item.name[0].name}</p>
                    </div>
                    <p className="text-gray-500 mt-4 text-start mb-4">{item.contents[0].content}</p>
                  </div>
                </div>
                {/* Second Box */}
                <div className="rounded-md m-2 border border-gray-500 h-max w-[500px] p-4">
                  <div className='p-6'>
                    <div className='h-fit w-full flex items-center justify-center mb-11'>
                      <img src={item.imageSrc[0].imageSrc.img1} className='!h-[150px] !w-full' alt="" />
                    </div>
                    <div>
                      <p className="text-white mt-4 text-start mb-4 font-bold">{item.name[1].name}</p>
                    </div>
                    <p className="text-gray-500 mt-4 text-start mb-4">{item.contents[1].content}</p>
                  </div>
                </div>
                <div className="rounded-md m-2 border border-gray-500 h-max w-[500px] p-4">
                  <div className='p-6'>
                    <div className='h-fit w-full flex items-center justify-center mb-11'>
                      <img src={item.imageSrc[0].imageSrc.img1} className='!h-[150px] !w-full' alt="" />
                    </div>
                    <div>
                      <p className="text-white mt-4 text-start mb-4 font-bold">{item.name[2].name}</p>
                    </div>
                    <p className="text-gray-500 mt-4 text-start mb-4">{item.contents[2].content}</p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <div className='mt-[100px]'>
          <h1 className='bg-gradient-to-t bg-clip-text from-black text-transparent to-white text-4xl mt-4 font-bold text-center'>Extra Freebies We Offer In Our Digital Marketing Course In Lucknow – 1 Week</h1>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-sm justify-between mt-11'>
            <div className='bg-black w-[200px] flex flex-col justify-center items-center shadow-2xl m-4 mx-auto p-7'>
              <div className="w-[90px] h-[90px] bg-white rounded-full flex items-center justify-center">
                <Bs1Circle size={60} />
              </div>
              <h2 className='font-bold text-gray-500 text-center mt-5'>Students willing to work in Digital Marketing Industry</h2>
            </div>
            <div className='bg-black w-[200px] flex flex-col justify-center items-center shadow-2xl m-4 mx-auto p-7'>
              <div className="w-[90px] h-[90px] bg-white rounded-full flex items-center justify-center">
                <Bs2Circle size={60} />
              </div>
              <h2 className='font-bold text-gray-500 text-center mt-5'>Business Owners who want to promote their business</h2>
            </div>
            <div className='bg-black w-[200px] flex flex-col justify-center items-center shadow-2xl m-4 mx-auto p-7'>
              <div className="w-[90px] h-[90px] bg-white rounded-full flex items-center justify-center">
                <Bs3Circle size={60} />
              </div>
              <h2 className='font-bold text-gray-500 text-center mt-5'>Working professionals who want to learn new skills.</h2>
            </div>
            <div className='bg-black w-[200px] flex flex-col justify-center items-center shadow-2xl m-4 mx-auto p-7'>
              <div className="w-[90px] h-[90px] bg-white rounded-full flex items-center justify-center">
                <Bs4Circle size={60} />
              </div>
              <h2 className='font-bold text-gray-500 text-center mt-5'>Working professionals who want to learn new skills.</h2>
            </div>
          </div>

          <p className='text-gray-500 mt-4'>After Completion of the course you will get the competition certification of Blue soltech Private Limited.
            Feel free to contact us in case of any queries.</p>
          <p className='text-gray-500 font-bold mt-4'>If you are looking for a reputed and experienced digital marketing institute in word then look no further than Blue Soltech in Lucknow. We have expert certified professionals in SEO, Google Ads, Social Media marketing who can teach you complete digital marketing course for better career opportunity.</p>
          <p className='text-gray-500 font-bold mt-4'>Don’t wait! Call us now to know about the digital marketing course and fee.</p>
          <div className='flex items-center justify-center'>
            <button className='bg-white text-black font-bold py-2 px-4 rounded-md m-4'>Our Packages</button>
          </div>
        </div>
        <Happy_client/>
      </div>

    </div>
  )
}

export default Degital_marketing