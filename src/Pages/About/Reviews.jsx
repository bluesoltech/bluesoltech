import React, { useState } from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Happy_client from '../../component/About/Happy_client';
import img1 from '../../assets/img/review.png'


const Reviews = () => {
  const Upwork = [
    {
      tittle: 'SEO',
      content: 'Working with Blue Soltech was a game-changer for our project. Their teams expertise in IT solutions exceeded our expectations. Communication was seamless, deadlines were met, and the quality of  work was exceptional. Highly recommended!'
    },
    {
      tittle: 'SEO',
      content: 'I ve collaborated with several IT firms in the past, but none have matched the professionalism and dedication of them. From software development to network security, they tackled every aspect of our project with precision and efficiency. Looking forward to future partnerships!'
    },
    {
      tittle: 'SEO',
      content: 'Outstanding service from Blue Soltech! Their IT specialists provided invaluable support throughout our system upgrade. Not only did they  deliver results promptly, but they also offered proactive solutions to  potential issues. Definitely my go-to team for all IT-related projects.'
    },
    {
      tittle: 'SEO',
      content: 'I can t thank Blue Soltech enough for their expertise and commitment. They transformed our outdated IT infrastructure into a streamlined and secure system. Their attention to detail and proactive approach truly sets them apart. Highly recommended for any IT project!'
    }
  ]
  const slides = [
    {
      name: 'Jane Smith',
      post: 'Designer',
      caption: 'Impressed by the professionalism and technical proficiency of Blue Soltech. They quickly grasped the complexities of our project and  delivered innovative solutions that exceeded our expectations. A reliable partner for all our IT needs!',
    },
    {
      name: 'Jane Smith',
      post: 'Designer',
      caption: 'Choosing Blue Soltech was one of the best decisions we made for our business. Their IT solutions were tailored to our specific  requirements and seamlessly integrated into our operations. The teams responsiveness and expertise made the entire process smooth and stress-free.',
    },
    {
      name: 'Jane Smith',
      post: 'Designer',
      caption: 'Highly impressed by the quality of work delivered by Blue Soltech. Their IT specialists demonstrated a deep understanding of our industry and provided solutions that were both innovative and practical. Exceptional communication and attention to detail throughout the project.',
    },
    {
      name: 'Jane Smith',
      post: 'Designer',
      caption: 'Thanks to the team at Blue Soltech for their exceptional IT services.They took the time to understand our unique challenges and delivered customized solutions that exceeded our expectations. Professionalism, expertise, and reliability - everything you could ask for in an IT partner!',
    },
    {
      name: 'Jane Smith',
      post: 'Designer',
      caption: 'Working with Blue Soltech was a breath of fresh air. Their IT experts were knowledgeable, responsive, and went above and  beyond to ensure the success of our project. I wouldn t hesitate to  recommend them to anyone in need of top-notch IT solutions.'
    },
    {
      name: 'Jane Smith',
      post: 'Designer',
      caption: 'A big thank you to Blue Soltech for their outstanding IT support. From software development to cybersecurity, they handled every aspect of our project with expertise and professionalism. Their proactive approach and attention to detail truly set them apart from the competition.'
    }
  ];
  const Googel = [
    {
      contents: [{ content: 'Outstanding IT services! Blue Soltech transformed our outdated systems into a seamless digital infrastructure. Their expertise and dedication are unmatched.' },
      { content: 'Highly recommend Blue Soltech for their innovative IT solutions. They helped us navigate complex challenges with ease.' },
      { content: 'Prompt and reliable support from Blue Soltech. Their team goes above and beyond to ensure our systems are always running smoothly.' }],
      name: [
        { name: 'Rinku Sharma' },
        { name: 'Rinku Sharma' },
        { name: 'Rinku Sharma' }
      ],
      imageSrc: [
        { imageSrc: { img1 } },
        { imageSrc: { img1 } },
        { imageSrc: { img1 } }]
    },
    {
      contents: [{ content: 'Impressed by the professionalism of Blue Soltech. Their IT specialists are knowledgeable and responsive, making them a valuable partner for any business.' },
      { content: 'Excellent experience working with Blue Soltech. Their IT solutions are cutting-edge, and their customer service is exceptional.' },
      { content: 'Five stars for Blue Soltech! Their attention to detail and  commitment to quality set them apart in the IT industry.' }
      ],
      name: [
        { name: 'Rinku Sharma' },
        { name: 'Rinku Sharma' },
        { name: 'Rinku Sharma' }
      ],
      imageSrc: [
        { imageSrc: { img1 } },
        { imageSrc: { img1 } },
        { imageSrc: { img1 } }]
    },
    {
      contents: [{ content: 'Efficient and effective IT support from Blue Soltech. They consistently deliver results and exceed expectations.' },
      { content: 'Weve been working with Blue Soltech for months and couldnt be  happier. Their IT solutions have helped our business thrive.' },
      { content: 'Professional and reliable IT services from Blue Soltech. They understand our needs and provide tailored solutions every time.' }
      ],
      name: [
        { name: 'Rinku Sharma' },
        { name: 'Rinku Sharma' },
        { name: 'Rinku Sharma' }
      ],
      imageSrc: [
        { imageSrc: { img1 } },
        { imageSrc: { img1 } },
        { imageSrc: { img1 } }]
    },
    {
      contents: [{ content: 'Thanks to Blue Soltech for their exceptional IT support.They re always available when we need them and go the extra mile to ensure our satisfaction.' },
      { content: 'Great team at Blue Soltech. Their IT solutions have streamlined our operations and improved productivity.' },
      { content: 'We trust Blue Soltech with all our IT needs. Their expertise and reliability make them a valuable partner for our business.' }],
      name: [
        { name: 'Rinku Sharma' },
        { name: 'Rinku Sharma' },
        { name: 'Rinku Sharma' }
      ],
      imageSrc: [
        { imageSrc: { img1 } },
        { imageSrc: { img1 } },
        { imageSrc: { img1 } }]
    },
    {
      contents: [{ content: 'Top-notch IT services from Blue Soltech. Their team is knowledgeable, responsive, and dedicated to delivering results.' },
      { content: 'Reliable and professional IT support from Blue Soltech.  Theyve helped us overcome numerous challenges and improve our systems.' },
      { content: 'Exceptional IT solutions provided by Blue Soltech. Their expertise and attention to detail are unmatched.' }],
      name: [
        { name: 'Rinku Sharma' },
        { name: 'Rinku Sharma' },
        { name: 'Rinku Sharma' }
      ],
      imageSrc: [
        { imageSrc: { img1 } },
        { imageSrc: { img1 } },
        { imageSrc: { img1 } }]
    },
    {
      contents: [{ content: 'Highly recommend Blue Soltech for their reliable IT services. Their team is always there when we need them.' },
      { content: 'We ve been working with Blue Soltech for months and have always been impressed. Their IT solutions are top-notch.' },
      { content: 'Great experience with Blue Soltech. Their IT support is prompt, professional, and effective.' }],
      name: [
        { name: 'Rinku Sharma' },
        { name: 'Rinku Sharma' },
        { name: 'Rinku Sharma' }
      ],
      imageSrc: [
        { imageSrc: { img1 } },
        { imageSrc: { img1 } },
        { imageSrc: { img1 } }]
    }
  ]
  const [currentUpworkIndex, setCurrentUpworkIndex] = useState(0);

  const nextUpworkIndex = () => {
    setCurrentUpworkIndex((prevIndex) => (prevIndex + 1) % Upwork.length);
  };

  const [currentGoogelIndex, setCurrentGoogelIndex] = useState(0);

  const nextGoogelIndex = () => {
    setCurrentGoogelIndex((prevIndex) => (prevIndex + 1) % Googel.length);
  };
  return (
    <div className='bg-[#0F0E0E] p-20 items-center'>
      <div className='md:w-[80%] w-auto mt-4 mx-auto'>
        <div className='item-center text-center'>
          <h1 className='text-white font-black text-5xl'>Blue soltech  Reviews</h1>
          <p className='text-white mt-6 justify-center text-center items-center text-3xl'>Upwork Reviews</p>
        </div>
        <div className='mt-14'>
          <Carousel showThumbs={false} showStatus={false} showArrows={false}>
            {Upwork.map((upwork, index) => (
              <div key={index} className="xl:flex flex-row justify-around mb-10 ">
                {/* First Box */}
                <div className="rounded-md m-2 border border-gray-500 h-[300px] w-[600px]">

                  <div className='p-6'>
                    <p className="text-gray-500 mt-4 text-center mb-4">{upwork.content}</p>
                  </div>
                  <div className=' flex items-center justify-center'>
                    ⭐ ⭐ ⭐ ⭐ ⭐
                  </div>
                </div>
                {/* Second Box */}
                <div className="rounded-md m-2 border border-gray-500 h-[300px] w-[600px]">
                  <div className='p-6'>
                    <p className="text-gray-500 mt-4 text-center mb-4">{Upwork[(index + 1) % Upwork.length].content}</p>
                  </div>
                  <div className=' flex items-center justify-center my-2'>
                    ⭐ ⭐ ⭐ ⭐ ⭐
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <div className='text-white mt-14'>
          <h1 className='text-center font-bold text-4xl'>Clutch Reviews</h1>
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
        <Happy_client />

        <div className='mt-14'>
          <h1 className='text-center font-bold text-4xl text-white mb-7'>Google Reviews</h1>
          <p className='font-bold text-white text-center'>Google rating score:4.8 of 5,based on 112 reviews.</p>
          <p className='text-center mt-4 mb-4'> ⭐ ⭐ ⭐ ⭐ ⭐ </p>
          <Carousel showThumbs={false} showStatus={false} showArrows={false}>
            {Googel.map((item, index) => (
              <div key={index} className="xl:flex flex-row xl:justify-around justify-center items-center mb-10 ">
                {/* First Box */}
                <div className="rounded-md m-2 border border-gray-500 h-auto w-[500px]">
                  <div className='p-6'>
                    <div className='h-[60px] w-full flex items-center justify-center rounded-full'>
                      <img src={item.imageSrc[0].imageSrc.img1} className='!h-[60px] !w-[60px] rounded-full' alt="" />
                    </div>
                    <div>
                      <p className="text-gray-500 mt-4 text-center mb-4 font-bold">{item.name[0].name}</p>
                    </div>
                    <p className="text-gray-500 mt-4 text-center mb-4">{item.contents[0].content}</p>
                  </div>
                  <div className=' flex items-center justify-center my-2'>
                    ⭐ ⭐ ⭐ ⭐ ⭐
                  </div>
                </div>
                {/* Second Box */}
                <div className="rounded-md m-2 border border-gray-500 h-auto w-[500px]">
                  <div className='p-6'>
                    <div className='h-[60px] w-full flex items-center justify-center rounded-full'>
                      <img src={item.imageSrc[1].imageSrc.img1} className='!h-[60px] !w-[60px] rounded-full' alt="" />
                    </div>
                    <div>
                      <p className="text-gray-500 mt-4 text-center mb-4 font-bold">{item.name[1].name}</p>
                    </div>
                    <p className="text-gray-500 mt-4 text-center mb-4">{item.contents[1].content}</p>
                  </div>
                  <div className=' flex items-center justify-center my-2'>
                    ⭐ ⭐ ⭐ ⭐ ⭐
                  </div>
                </div>
                <div className="rounded-md m-2 border border-gray-500 h-auto w-[500px]">
                  <div className='p-6'>
                    <div className='h-[60px] w-full flex items-center justify-center rounded-full'>
                      <img src={item.imageSrc[2].imageSrc.img1} className='!h-[60px] !w-[60px] rounded-full' alt="" />
                    </div>
                    <div>
                      <p className="text-gray-500 mt-4 text-center mb-4 font-bold">{item.name[2].name}</p>
                    </div>
                    <p className="text-gray-500 mt-4 text-center mb-4">{item.contents[2].content}</p>
                  </div>
                  <div className=' flex items-center justify-center my-2'>
                    ⭐ ⭐ ⭐ ⭐ ⭐
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <Happy_client />
      </div>
    </div>
  )
}

export default Reviews