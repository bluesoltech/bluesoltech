import React from 'react'
import Services_first from '../../../component/Services_first'
import img1 from '../../../assets/img/vision.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Video1 from '../../../component/Video1';
import Happy_client from '../../../component/About/Happy_client';

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
      <div className=' w-full md:w-[80%]  mt-4 mx-auto'>
        <Services_first
          imgSrc={img1}
          btn_title="Website Packages In India"
          duration="Hospital Marketing"
          tittle="Best Digital Marketing Services For Hospitals"
          features1="Empowering Connections Between The Doctor And Patients
          Is Your Current Hospital Digital Marketing Strategy Helping You Get New Patients Online?"
          features2="Get Connected To New Patients By Choosing Us As Your Hospital Digital Marketing Company In India"
        />
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='text-gray-300 text-2xl xl:text-3xl mt-4 font-bold text-center'>Hospital Marketing Company In India</h1>
          <p className=' text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-center text-gray-500 text-start xl:text-center mt-10'>Blue soltech is a leading hospital digital marketing company in India. We have successfully helped many hospitals, clinics and healthcare professionals in India. Our hospital marketing experts leave no stone unturned when it comes to the marketing of healthcare companies.</p>
          <p className=' text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-center text-gray-500 text-start xl:text-center mt-10'>We use trusted marketing tools to make your hospital marketing campaign successful. Our dedication and skills to increase hospitals reputations make us a trusted hospital marketing company in India.</p>
          <img src={img1} className=' w-full xl:w-[30%] my-10 mx-auto' alt="Centered Image" />
          <p className=' text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-center text-gray-500 text-start xl:text-center mt-10'>It does not matter whether you have a multi-speciality hospital or small clinic promoting it in the right manner could help you in finding your roots. The growing number of hospitals and clinics has created tough competition in the market and this is why hospitals should be investing in digital marketing services for hospitals in India. So if you want to offer your service to the maximum number of people starts investing in hospital marketing services.</p>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='font-bold items-start xl:items-start justify-start xl:justify-start text-center mb-10 text-gray-300 text-3xl'>How Hospital Marketing Can Help You To Grow?</h1>
          <div className='xl:flex flex-row justify-between items-start'>
            <div className='xl:w-[50%] w-full'>
              <p className=' text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-start text-gray-500 text-start xl:text-start mt-10'>Unlike one to two decades back when there were just one or two hospitals in a city or region, today the picture is quite different. Today’s scenario is, a single city has hundreds of hospitals with each of them trying to gain an edge over the other.</p>
              <p className=' text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-start text-gray-500 text-start xl:text-start mt-10'>With such massive competition between the hospitals, expecting to combat the competitors with just word of mouth marketing strategy may not be enough. You will need to step forward and embrace the new-fangled digital marketing strategies for hospitals to outperform your competitors.</p>
            </div>
            <div className='xl:w-[50%] w-full flex justify-center'>
              <img src={img1} className='gap-10 w-full xl:w-[60%]' />
            </div>
          </div>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='font-bold items-start xl:items-start justify-start xl:justify-start text-center mb-10 text-gray-300 text-3xl'>Here Are Some Of The Ways By Which Hospital Marketing Can Help You Grow</h1>
          <div className='xl:flex flex-row justify-around items-start'>
            <div className='xl:w-[50%] w-full'>
              <ul className='mt-6 text-gray-500 text-start px-14 text-[1.1rem] leading-7 list-disc'>
                <li>A specialized hospital marketing strategy can help patients know and remember your hospital’s name.</li>
                <li>A hospital marketing strategy will consistently present your brand as well as your USPs creatively to people.</li>
                <li>A user-friendly website can help your patients get a gist of your offerings in a single instance.</li>
                <li>Strong social media marketing for hospitals can help you put a positive forefront in front of your patients.</li>
              </ul>
            </div>
            <div className='xl:w-[50%] w-full'>
              <ul className='mt-6 text-gray-500 text-start px-14 text-[1.1rem] leading-7 list-disc'>
                <li>E-Mail Marketing can help you stay connected with your patients and keep them updated about the addition of new facilities or amenities in your hospital.</li>
                <li>Content Marketing can help to make people aware of different kinds of diseases and health problems and how can your hospital benefit them.</li>
                <li>In case, anybody has tried degrading your online reputation, the online reputation management marketing strategy can help you counter them with ease.</li>
              </ul>
            </div>
          </div>
          <p className=' text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-center text-gray-500 text-start xl:text-center mt-10'>The very first steps that you need to make your hospital industry more viral among local and virtual clients you need a well-designed website. Many website development service providers could help you in having a user-friendly, customized, responsive health industry website for the healthcare industry. Find your website development partner for creating a professional healthcare website.</p>
          <p className=' text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-center text-gray-500 text-start xl:text-center mt-10'>Industries like health care are needed of the time. The growing cases of chronic diseases and acute diseases have been increased tremendously. There was a time when problems like heart trouble, joining problems, blood pressure, and kidney-related issues were experienced by aged people, but now even people in their 30’s are experiencing such problems. Get a mobile-optimized, responsive website along with the mobile application and stay connected with the maximum number of people. Check what makes a website GOOD.</p>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='font-bold items-start xl:items-start justify-start xl:justify-start text-center mb-10 text-gray-300 text-3xl'>Digital Marketing Strategies For Hospitals</h1>
          <div className="slider-container text-white justify-around">
            <Slider className='!text-3xl' {...settings}>
              {sliderContent.map((slide, index) => (
                <div key={index} className="rounded-md p-4">
                  <div className="p-4 border-2 border-gray-400 h-fit xl:!h-[520px] w-[100%] xl:w-[100%]">
                    <div className="flex justify-center">
                      <img src={slide.imageUrl} className="w-[50%]" alt="no_img" />
                    </div>
                    <div>
                      <p className=" mt-4 font-bold text-gray-300 text-2xl">{slide.title}</p>
                      <p className="text-[1.1rem] leading-7 text-gray-500 text-start my-5">{slide.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <p className=' text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-start text-gray-500 text-start xl:text-center mt-10'>Blue soltech, the leading hospital marketing service provider could help you in your online journey from designing a website to promoting it for the local and global market all aspects of the online journey is managed by a team of qualified and seasoned IT professionals. We could support your hospital with the latest healthcare marketing trends.</p>
        </div>
        <Video1 />
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='text-gray-300 text-2xl xl:text-3xl mt-4 font-bold text-center'>Want To Know More About Our Hospital Marketing Company?</h1>
          <p className='text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-center text-gray-500 text-start xl:text-center mt-10'>You don’t have to worry about the website or its promotion as we have a team of web developers and digital marketing experts who have successfully managed the online journey of healthcare marketing service providers. It does not matter how small or big the budget is our well-defined strategy would help you in connecting with the potential market.</p>
          <p className='text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-center text-gray-500 text-start xl:text-center mt-10'>Now patients also prefer clinics and hospitals that are online active as it makes it easier for them to find a doctor and book appointments and learn about the latest treatments. Connect with our hospital digital marketing experts in India and find out with our well-defined and analytical approach one can benefit their healthcare industry. Contact Blue soltech Now!</p>
        </div>
        <Happy_client/>
      </div>
    </div>
  )
}

export default Homepage