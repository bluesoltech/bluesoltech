import React from 'react'
import img1 from '../../../assets/img/vision.png'
import Services_first from '../../../component/Services_first'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Singal_slider from '../../../component/Singal_slider'


const sliderContent = [
  {
    title: "Hospital SEO Company",
    description: "Establishing a hospital or clinic is demanding. Hospitals and clinics with better infrastructure, latest machines and treatments perform better. Since several clinics and hospitals are mushrooming it has become crucial to ensure that your position in the market is sound and secure and for that one must invest in high-quality hospital SEO service. Find a professional SEO service provider who has the experience of managing SEO for hospitals and wellness centres so that your position would remain secure.",
    imageUrl: img1
  },
  {
    title: "Google Ads Marketing For Hospitals",
    description: "Don’t wait to grow, invest money in result-oriented promotion methods like PPC. Make sure you find the Best PPC Management Company. There are online marketing experts who can design a PPC plan for your hospital from scratch. Consult them and find out how with the right PPC they can grow their market in a quick period.",
    imageUrl: img1
  },
  {
    title: "SEO Strategy for 2024: Expert Tips to Optimize And Improve Website Rankings",
    description: "An SEO audit is a comprehensive evaluation of a website’s search engine optimization (SEO) performance. The purpose of an SEO audit is to identify areas of improvement, uncover issues that may be affecting a site’s visibility in search engine results, and provide recommendations for optimizing its overall SEO strategy.",
    imageUrl: img1
  },
  {
    title: " Why Your Website Isn’t Ranking and How to Fix Your Website SEO issues in 2024",
    description: "An SEO audit is a comprehensive evaluation of a website’s search engine optimization (SEO) performance. The purpose of an SEO audit is to identify areas of improvement, uncover issues that may be affecting a site’s visibility in search engine results, and provide recommendations for optimizing its overall SEO strategy.",
    imageUrl: img1
  },
  {
    title: "Best SEO Tools You Must Try in 2024 to Improve Your SEO Results	",
    description: "An SEO audit is a comprehensive evaluation of a website’s search engine optimization (SEO) performance. The purpose of an SEO audit is to identify areas of improvement, uncover issues that may be affecting a site’s visibility in search engine results, and provide recommendations for optimizing its overall SEO strategy.",
    imageUrl: img1
  },
  {
    title: "SEO Audit: Most Advanced SEO Audit Checklist for 2024",
    description: "An SEO audit is a comprehensive evaluation of a website’s search engine optimization (SEO) performance. The purpose of an SEO audit is to identify areas of improvement, uncover issues that may be affecting a site’s visibility in search engine results, and provide recommendations for optimizing its overall SEO strategy.",
    imageUrl: img1
  },
]; 
const client = [
  {
    title: "Marketing Goals",
    description: "Since several clinics and hospitals are mushrooming it has become crucial to ensure that your position in the market is sound and secure and for that one must invest in high-quality hospital SEO service. Find a professional SEO service provider who has the experience of managing SEO for hospitals and wellness centres so that your position would remain secure.",
  },
  {
    title: "Utilize Free Online Platforms",
    description: " the Best PPC Management Company. There are online marketing experts who can design a PPC plan for your hospital from scratch. Consult them and find out how with the right PPC they can grow their market in a quick period.",
  },
  {
    title: "SEO Strategy for 2024: Expert Tips to Optimize And Improve Website Rankings",
    description: "The purpose of an SEO audit is to identify areas of improvement, uncover issues that may be affecting a site’s visibility in search engine results, and provide recommendations for optimizing its overall SEO strategy.",
  },
  {
    title: " Why Your Website Isn’t Ranking and How to Fix Your Website SEO issues in 2024",
    description: " The purpose of an SEO audit is to identify areas of improvement, uncover issues that may be affecting a site’s visibility in search engine results, and provide recommendations for optimizing its overall SEO strategy.",
  },
  {
    title: "Best SEO Tools You Must Try in 2024 to Improve Your SEO Results	",
    description: "An SEO audit is a comprehensive evaluation of a website’s search engine optimization (SEO) performance. The purpose of an SEO audit is to identify areas of improvement, uncover issues that may be affecting a site’s visibility in search engine results, and provide recommendations for optimizing its overall SEO strategy.",
  },
  {
    title: "SEO Audit: Most Advanced SEO Audit Checklist for 2024",
    description: "An SEO audit is a comprehensive evaluation of a website’s search engine optimization (SEO) performance. The purpose of an SEO audit is to identify areas of improvement, uncover issues that may be affecting a site’s visibility in search engine results, and provide recommendations for optimizing its overall SEO strategy.",
  },
];
const clients = [
  {
      tittle: 'SEO',
      img: img1,
      content: 'Found the SEO expert (Alok Kumar) on Upwork and selected him based on recommendations and excellent feedback from other clients. My website is now listed on the first-page of Google relevant key-word searches. This is due to the online content created and posted in the various online venues by Alok.'
  },
  {
      tittle: 'SEO',
      img: img1,
      content: 'We came across Alok from Rankon technologies through Google and YouTube. While interacting with him I realised that I am talking to a person with knowledge and values . We are delighted to associate with Alok after that He and his team is professional, transperant and follow values and ethics. Looking forward for a long term association with Rankon.'
  },
  {
      tittle: 'SEO',
      img: img1,
      content: 'Amazing experience with Rankon Technologies. Their whole crew is top notch. I am a plastic surgeon and needed to develop a patient-centric website for my practice in New York. They delivered and some more. The website was exactly how I wanted. They were very professional, thorough and responsive. I asked for multiple revisions and they were extremely patient and nice about it. I would recommend them very highly and have already referred my colleagues to them!'
  }
]

const Homepage = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    arrows: false
  };
  return (
    <div className='bg-[#0F0E0E] p-10 xl:p-20 items-center'>
      <div className='w-full md:w-[80%]  mt-4 mx-auto'>
        <Services_first
          imgSrc={img1}
          btn_title="Educational Marketing In India"
          duration="Real Estate Marketing"
          tittle="Digital Marketing For Doctors & How Much Does It Cost?"
          features1="Want digital marketing for doctors? RankON Technologies is a leading digital marketing agency in India. We offer complete digital marketing services for all types of businesses at very affordable prices. Must check our services and pricing plans."
        />
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='font-bold items-start xl:items-start justify-start xl:justify-start text-start mb-6 text-gray-300 text-2xl xl:text-3xl'>Why Digital Marketing For Doctors?</h1>
          <p className='text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-center text-gray-500 text-start xl:text-start mt-8'>Gone are the days when traditional marketing methods alone could ensure a steady stream of patients. The advent of digital marketing has presented doctors with an unprecedented opportunity to tap into the vast online landscape and establish a robust online presence with best digital marketing for doctors. Through carefully crafted digital strategies, doctors can connect with their target audience, foster trust, and showcase their expertise in an increasingly competitive healthcare landscape.</p>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='font-bold items-start xl:items-start justify-start xl:justify-start text-center mb-10 text-gray-300 text-2xl xl:text-3xl'>How Hospital Marketing Can Help You To Grow?</h1>
          <div className='xl:flex flex-row justify-between items-start'>
            <div className='xl:w-[50%] w-full flex justify-start'>
              <img src={img1} className='gap-10 w-full xl:w-[60%]' />
            </div>
            <div className='xl:w-[50%] w-full'>
              <p className=' text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-start text-gray-500 text-start xl:text-start'>In addition, it allows firms to monitor customer behaviour and alter their ads accordingly. E-commerce marketing has endless potential since it allows firms to adapt their marketing messages to attract the ideal customers and enhance their return on investment.</p>
              <p className=' text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-start text-gray-500 text-start xl:text-start mt-10'>As a result, it should come as no surprise that e-commerce marketing is becoming an increasingly essential component of business marketing efforts.</p>
              <p className=' text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-start text-gray-500 text-start xl:text-start mt-10'>With its vast potential and capacity to reach a larger audience, e-commerce marketing will continue to expand over the next several years.</p>
            </div>
          </div>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='font-bold items-start xl:items-start justify-start xl:justify-start text-center mb-10 text-gray-300 text-2xl xl:text-3xl'>Our Digital Marketing Plan For Doctors Include Following Strategies</h1>
          <div className='xl:flex flex-row justify-between items-start'>
            
            <div className='xl:w-[50%] w-full'>
              <p className=' text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-start text-gray-500 text-start xl:text-start'>In addition, it allows firms to monitor customer behaviour and alter their ads accordingly. E-commerce marketing has endless potential since it allows firms to adapt their marketing messages to attract the ideal customers and enhance their return on investment.</p>
              <p className=' text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-start text-gray-500 text-start xl:text-start mt-10'>As a result, it should come as no surprise that e-commerce marketing is becoming an increasingly essential component of business marketing efforts.</p>
              <p className=' text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-start text-gray-500 text-start xl:text-start mt-10'>With its vast potential and capacity to reach a larger audience, e-commerce marketing will continue to expand over the next several years.</p>
            </div>
            <div className='xl:w-[50%] w-full flex justify-center xl:justify-end'>
              <img src={img1} className='gap-10 w-full xl:w-[60%]' />
            </div>
          </div>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='font-bold items-start xl:items-start justify-start xl:justify-start text-center mb-10 text-gray-300 text-2xl xl:text-3xl'>Digital Marketing Strategies For Hospitals</h1>
          <div className="slider-container text-white justify-around">
            <Slider className='!text-3xl' {...settings}>
              {sliderContent.map((slide, index) => (
                <div key={index} className="rounded-md p-4">
                  <div className="p-4 border-2 border-gray-400 h-fit xl:!h-[600px] w-[100%] xl:w-[90%]">
                    <div className="flex justify-center">
                      <img src={slide.imageUrl} className="xl:w-[50%]" alt="no_img" />
                    </div>
                    <div>
                      <p className=" mt-4 font-bold text-gray-300 text-2xl">{slide.title}</p>
                      <p className="text-[1.1rem] leading-7 text-gray-500 text-start my-5">{slide.description}</p>
                    </div>
                    <button className="bg-transparent border-[1px] hover:text-black hover:bg-white transition-all duration-200 text-sm text-gray-400  py-1 px-2 rounded-md m-4">
                      Request proposal
                    </button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='font-bold items-start xl:items-start justify-start xl:justify-start text-center mb-6 text-gray-300 text-3xl'>Why Digital Marketing For IT Company Is Important?</h1>
          <p className='text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-center text-gray-500 text-start xl:text-center mt-10'>Digital marketing is essential for IT companies for several reasons:</p>
          <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 text-sm justify-between mt-11'>
            <div className='w-[90%] xl:w-[350px] h-fit xl:h-[380px] md:h-fit bg-black border-gray-500 mx-auto hover:border-2 p-2 flex justify-center items-center m-2 rounded-lg'>
              <img src={img1} />
            </div>
            <div className='w-[90%] xl:w-[350px] h-fit xl:h-[380px] md:h-fit bg-black border-gray-500 mx-auto hover:border-2 p-6 m-2 rounded-lg'>
              <h1 className='font-bold items-start xl:items-start justify-start xl:justify-start text-center mb-10 text-gray-300 text-2xl'>Reach A Larger Audience</h1>
              <p className="text-[1.1rem] leading-7 text-gray-500 text-center my-5">With digital marketing, IT companies can reach a global audience, regardless of their location. Digital marketing channels like social media, search engines, and email enable companies to connect with potential customers across the globe.</p>
            </div>
            <div className='w-[90%] xl:w-[350px] h-fit xl:h-[380px] md:h-fit bg-black border-gray-500 mx-auto hover:border-2 p-6 m-2 rounded-lg'>
              <h1 className='font-bold items-start xl:items-start justify-start xl:justify-start text-center mb-10 text-gray-300 text-2xl'>Cost-Effective</h1>
              <p className="text-[1.1rem] leading-7 text-gray-500 text-center my-5">The cost of an IT company website also depends on the level of customization required. A website with a standard template and design will cost less than a fully customized website.</p>
            </div>
            <div className='w-[90%] xl:w-[350px] h-fit xl:h-[380px] md:h-fit bg-black border-gray-500 mx-auto hover:border-2 p-6 m-2 rounded-lg'>
              <h1 className='font-bold items-start xl:items-start justify-start xl:justify-start text-center mb-10 text-gray-300 text-2xl'>Measurable Results</h1>
              <p className="text-[1.1rem] leading-7 text-gray-500 text-center my-5">Digital marketing channels provide real-time data on campaign performance, enabling IT companies to measure the effectiveness of their marketing efforts and make data-driven decisions.</p>
            </div>
            <div className='w-[90%] xl:w-[350px] h-fit xl:h-[380px] md:h-fit bg-black border-gray-500 mx-auto hover:border-2 p-6 m-2 rounded-lg'>
              <h1 className='font-bold items-start xl:items-start justify-start xl:justify-start text-center mb-10 text-gray-300 text-2xl'>Targeted Marketing</h1>
              <p className="text-[1.1rem] leading-7 text-gray-500 text-center my-5">Digital marketing enables IT companies to target specific demographics, behaviors, and interests with their marketing messages. This enables them to create more personalized marketing campaigns that resonate with their target audience.</p>
            </div>
            <div className='w-[90%] xl:w-[350px] h-fit xl:h-[380px] md:h-fit bg-black border-gray-500 mx-auto hover:border-2 p-6 m-2 rounded-lg'>
              <h1 className='font-bold items-start xl:items-start justify-start xl:justify-start text-center mb-10 text-gray-300 text-2xl'>Improved Customer Engagement</h1>
              <p className="text-[1.1rem] leading-7 text-gray-500 text-center my-5">Digital marketing channels like social media and email marketing enable IT companies to engage with their customers in real-time, respond to their queries and concerns, and build stronger relationships.</p>
            </div>
          </div>
          <p className='text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-center text-gray-500 text-start xl:text-center mt-10'>Digital marketing is a powerful tool for IT companies to reach their target audience, build their brand, generate leads, and drive sales. By leveraging digital marketing channels, IT companies can stay ahead of the competition and achieve their business objectives.</p>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='font-bold items-start xl:items-start justify-start xl:justify-start text-start mb-10 text-gray-300 text-3xl'>Factors That Affect The Cost Of IT Company Digital Marketing</h1>
          <p className="text-[1.1rem] leading-7 text-gray-500 text-start my-5">The cost of IT company digital marketing can vary depending on several factors, including:</p>
          <div className="slider-container text-white justify-around">
            <Slider className='!text-3xl' {...settings}>
              {client.map((slide, index) => (
                <div key={index} className="rounded-md p-4">
                  <div className="p-4 border-2 border-gray-400 h-fit xl:!h-[300px] w-[100%] xl:w-[100%]">
                    <div>
                      <p className=" mt-4 font-bold text-gray-300 text-lg text-center">{slide.title}</p>
                      <p className="text-[1.1rem] leading-7 text-gray-500 text-start my-5">{slide.description}</p>
                    </div>
                    <button className="bg-transparent border-[1px] hover:text-black hover:bg-white transition-all duration-200 text-sm text-gray-400  py-1 px-2 rounded-md m-4">
                      Request proposal
                    </button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <p className="text-[1.1rem] leading-7 text-gray-500 text-center mt-10">By considering these factors, an IT company can better understand the cost of digital marketing services and determine a budget that aligns with their goals and resources.</p>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='font-bold items-start xl:items-start justify-start xl:justify-start text-center mb-10 text-gray-300 text-2xl xl:text-3xl'>How To Hire The Best Digital Marketing Agency For Doctor's Digital Marketing Campaign</h1>
          <Singal_slider clients={clients}/>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='font-bold items-start xl:items-start justify-start xl:justify-start text-start mb-10 text-gray-300 text-3xl'>Factors That Affect The Cost Of IT Company Digital Marketing</h1>
          <p className="text-[1.1rem] leading-7 text-gray-500 text-start my-5">The cost of IT company digital marketing can vary depending on several factors, including:</p>
          <div className="slider-container text-white justify-around">
            <Slider className='!text-3xl' {...settings}>
              {client.map((slide, index) => (
                <div key={index} className="rounded-md p-4">
                  <div className="p-4 border-2 border-gray-400 h-fit xl:!h-[300px] w-[100%] xl:w-[100%]">
                    <div>
                      <p className=" mt-4 font-bold text-gray-300 text-lg text-center">{slide.title}</p>
                      <p className="text-[1.1rem] leading-7 text-gray-500 text-start my-5">{slide.description}</p>
                    </div>
                    <button className="bg-transparent border-[1px] hover:text-black hover:bg-white transition-all duration-200 text-sm text-gray-400  py-1 px-2 rounded-md m-4">
                      Request proposal
                    </button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <p className="text-[1.1rem] leading-7 text-gray-500 text-center mt-10">By considering these factors, an IT company can better understand the cost of digital marketing services and determine a budget that aligns with their goals and resources.</p>
        </div>
      </div>
    </div>
  )
}

export default Homepage