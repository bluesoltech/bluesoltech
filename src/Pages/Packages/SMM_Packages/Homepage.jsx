import React from 'react'
import img1 from '../../../assets/img/vision.png'
import Singal_slider from '../../../component/Singal_slider'
import Services_first from '../../../component/Services_first'
import Video1 from '../../../component/Video1'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Packages from '../../../component/Packages'

const sliderContent = [
  {
    title: "Hospital SEO Company",
    description: " and treatments perform better. Since several clinics and hospitals are mushrooming it has become crucial to ensure that your position in the market is sound and secure and for that one must invest in high-quality hospital SEO service. Find a professional SEO service provider who has the experience of managing SEO for hospitals and wellness centres so that your position would remain secure.",
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
          btn_title="Social Media Marketing Plans"
          duration="Social Media Marketing Packages"
          tittle="Affordable Yet Effective Social Media Management Plans"
          features1="Want digital marketing for doctors? RankON Technologies is a leading digital marketing agency in India. We offer complete digital marketing services for all types of businesses at very affordable prices. Must check our services and pricing plans."
        />

        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='font-bold items-start xl:items-start justify-start xl:justify-start text-center mb-6 text-gray-300 text-2xl xl:text-3xl'>Why Should You Use Social Media Marketing Packages For Your Business?</h1>
          <p className='text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-center text-gray-500 text-center xl:text-start mt-8'>Gone are the days when traditional marketing methods alone could ensure a steady stream of patients. The advent of digital marketing has presented doctors with an unprecedented opportunity to tap into the vast online landscape and establish a robust online presence with best digital marketing for doctors. Through carefully crafted digital strategies, doctors can connect with their target audience, foster trust, and showcase their expertise in an increasingly competitive healthcare landscape.</p>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='font-bold items-start xl:items-start justify-start xl:justify-start text-center mb-6 text-gray-300 text-2xl xl:text-3xl'>Why Do Real Estate Digital Marketing Services Are Important?</h1>
          <p className='text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-center text-gray-500 text-start xl:text-start mt-10'>An IT company digital marketing agency is a specialized agency that provides digital marketing services to IT companies. These agencies have expertise in digital marketing channels, tactics, and strategies that are relevant to the IT industry.</p>
          <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 text-sm justify-between mt-11 mx-auto'>
            <div className='w-[90%] xl:w-[400px] h-fit xl:h-[500px] md:h-fit bg-black border-gray-500 mx-auto hover:border-2 p-6 m-2 rounded-lg flex flex-col justify-center items-center'>
              <img src={img1} className='xl:w-[60%] !top-0' alt="Image" />
              <h1 className='font-bold text-center text-gray-300 text-lg my-4'>Increase Client Inlet</h1>
              <p className="text-[1.1rem] leading-7 text-gray-500 text-center">
                Consider the company's overall marketing goals and objectives, such as increasing website traffic, generating leads, improving brand awareness, or increasing sales. These goals will help determine the scope and budget for the digital marketing campaign.
              </p>
            </div>
            <div className='w-[90%] xl:w-[400px] h-fit xl:h-[500px] md:h-fit bg-black border-gray-500 mx-auto hover:border-2 p-6 m-2 rounded-lg flex flex-col justify-center items-center'>
              <img src={img1} className='xl:w-[60%]' alt="Image" />
              <h1 className='font-bold text-center text-gray-300 text-lg my-4'>Consistent Results In All Domains</h1>
              <p className="text-[1.1rem] leading-7 text-gray-500 text-center">
                Consider the company's overall marketing goals and objectives, such as increasing website traffic, generating leads, improving brand awareness, or increasing sales. These goals will help determine the scope and budget for the digital marketing campaign.
              </p>
            </div>
            <div className='w-[90%] xl:w-[400px] h-fit xl:h-[500px] md:h-fit bg-black border-gray-500 mx-auto hover:border-2 p-6 m-2 rounded-lg flex flex-col justify-center items-center'>
              <img src={img1} className='xl:w-[60%]' alt="Image" />
              <h1 className='font-bold text-center text-gray-300 text-lg my-4'>Streamlined And Tailored Approach</h1>
              <p className="text-[1.1rem] leading-7 text-gray-500 text-center">
                As a general rule of thumb, a company should allocate around 7-12% of its total revenue towards marketing. However, this percentage may vary depending on the factors mentioned above. It is important to keep in mind that digital marketing is an ongoing process and requires continuous investment to maintain and improve results over time.</p>
            </div>
          </div>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='font-bold items-start xl:items-start justify-start xl:justify-start text-center mb-6 text-gray-300 text-2xl xl:text-3xl'>How Much Do Social Media Marketing Packages Cost?</h1>
          <p className='text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-center text-gray-500 text-center xl:text-start mt-4'>Gone are the days when traditional marketing methods alone could ensure a steady stream of patients. The advent of digital marketing has presented doctors with an unprecedented opportunity to tap into the vast online landscape and establish a robust online presence with best digital marketing for doctors. Through carefully crafted digital strategies, doctors can connect with their target audience, foster trust, and showcase their expertise in an increasingly competitive healthcare landscape.</p>
          <h1 className='font-bold items-start xl:items-start justify-start xl:justify-start text-center mt-10 text-gray-300 text-2xl xl:text-3xl'>Choose The Best Social Media Marketing Pricing Plans For Your Business Needs!</h1>
          <p className='text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-center text-gray-500 text-center xl:text-start mt-4'>Gone are the days when traditional marketing methods alone could ensure a steady stream of patients. The advent of digital marketing has presented doctors with an unprecedented opportunity to tap into the vast online landscape and establish a robust online presence with best digital marketing for doctors. Through carefully crafted digital strategies, doctors can connect with their target audience, foster trust, and showcase their expertise in an increasingly competitive healthcare landscape.</p>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='font-bold items-start xl:items-start justify-start xl:justify-start text-center mb-6 text-gray-300 text-2xl xl:text-3xl'>Let Us Find How Much These Social Media Marketing Plans Cost:-</h1>
          <h1 className='font-bold items-start xl:items-start justify-start xl:justify-start text-center mb-6 text-gray-300 text-2xl xl:text-3xl'>Social Media Marketing Pricing Packages In India</h1>
          <p className='text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-center text-gray-500 text-center xl:text-start mt-4'>Gone are the days when traditional marketing methods alone could ensure a steady stream of patients. The advent of digital marketing has presented doctors with an unprecedented opportunity to tap into the vast online landscape and establish a robust online presence with best digital marketing for doctors. Through carefully crafted digital strategies, doctors can connect with their target audience, foster trust, and showcase their expertise in an increasingly competitive healthcare landscape.</p>
          <Packages
            smallprice="20,000 INR/250 USDMonthly"
            smallfeatures="WEBSITE REVIEW & ANALYSIS"
            midprice="20,000 INR/250 USDMonthly"
            midfeatures="WEBSITE REVIEW & ANALYSIS"
            largeprice="20,000 INR/250 USDMonthly"
            largefeatures="WEBSITE REVIEW & ANALYSIS"
          />
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <p className='text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-center text-gray-500 text-start xl:text-start mt-4'>Gone are the days when traditional marketing methods alone could ensure a steady stream of patients. The advent of digital marketing has presented doctors with an unprecedented opportunity to tap into the vast online landscape and establish a robust online presence with best digital marketing for doctors. Through carefully crafted digital strategies, doctors can connect with their target audience, foster trust, and showcase their expertise in an increasingly competitive healthcare landscape.</p>
          <p className='text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-center text-gray-500 text-start xl:text-start mt-4'>Gone are the days when traditional marketing methods alone could ensure a steady stream of patients. The advent of digital marketing has presented doctors with an unprecedented opportunity to tap into the vast online landscape and establish a robust online presence with best digital marketing for doctors. Through carefully crafted digital strategies, doctors can connect with their target audience, foster trust, and showcase their expertise in an increasingly competitive healthcare landscape.</p>
        </div>
        <Video1 />
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
          <h1 className='font-bold items-start xl:items-start justify-start xl:justify-start text-center mb-6 text-gray-300 text-3xl'>Why Choose Us For Best Social Media Marketing Services In India?</h1>
          <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 text-sm justify-between mt-11 mx-auto'>
            <div className='w-[90%] xl:w-[450px] h-fit xl:h-[200px] md:h-fit bg-black border-gray-500 mx-auto hover:border-2 p-6 m-2 rounded-lg flex flex-col justify-center items-center'>
              <ul className=' text-gray-500 text-start px-6 xl:px-10 text-[1.1rem] leading-7 list-disc'>
                <li>We have an expertise of 8+years in the education marketing sector.</li>
                <li>We have numerous happy clients’ in the education sector.</li>
                <li>The result-oriented approach helps us to enjoy faster results.</li>
              </ul>
            </div>
            <div className='w-[90%] xl:w-[450px] h-fit xl:h-[200px] md:h-fit bg-black border-gray-500 mx-auto hover:border-2 p-6 m-2 rounded-lg flex flex-col justify-center items-center'>
              <ul className=' text-gray-500 text-start px-6 xl:px-10 text-[1.1rem] leading-7 list-disc'>
                <li>We have an expertise of 8+years in the education marketing sector.</li>
                <li>We have numerous happy clients’ in the education sector.</li>
                <li>The result-oriented approach helps us to enjoy faster results.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='font-bold items-start xl:items-start justify-start xl:justify-start text-center mb-6 text-gray-300 text-2xl xl:text-3xl'>Join Us And Reach Heights With Our Affordable Social Media Marketing Pricing Plans NOW!</h1>
          <p className='text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-center text-gray-500 text-center xl:text-start mt-8'>Gone are the days when traditional marketing methods alone could ensure a steady stream of patients. The advent of digital marketing has presented doctors with an unprecedented opportunity to tap into the vast online landscape and establish a robust online presence with best digital marketing for doctors. Through carefully crafted digital strategies, doctors can connect with their target audience, foster trust, and showcase their expertise in an increasingly competitive healthcare landscape.</p>
        </div>
      </div>
    </div>
  )
}

export default Homepage