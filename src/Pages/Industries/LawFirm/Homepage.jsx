import React from 'react'
import img1 from '../../../assets/img/vision.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Services_first from '../../../component/Services_first'

const sliderContent = [
  {
    title: "Website Design And Development",
    description: "Establishing a hospital or clinic is demanding. Hospitals and clinics with better infrastructure, latest machines and treatments perform better. Since several clinics and hospitals are mushrooming it has become crucial to ensure that your position in the market is sound and secure and for that one must invest in high-quality hospital SEO service. Find a professional SEO service provider who has the experience of managing SEO for hospitals and wellness centres so that your position would remain secure.",
    imageUrl: img1
  },
  {
    title: "Search Engine Optimization (SEO)",
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
    title: "Hospital SEO Company",
    description: "Establishing a hospital or clinic is demanding. Hospitals and clinics with better infrastructure, latest machines and treatments perform better. Since several clinics and hospitals are mushrooming it has become crucial to ensure that your position in the market is sound and secure and for that one must invest in high-quality hospital SEO service. Find a professional SEO service provider who has the experience of managing SEO for hospitals and wellness centres so that your position would remain secure.",
  },
  {
    title: "Google Ads Marketing For Hospitals",
    description: "Don’t wait to grow, invest money in result-oriented promotion methods like PPC. Make sure you find the Best PPC Management Company. There are online marketing experts who can design a PPC plan for your hospital from scratch. Consult them and find out how with the right PPC they can grow their market in a quick period.",
  },
  {
    title: "SEO Strategy for 2024: Expert Tips to Optimize And Improve Website Rankings",
    description: "An SEO audit is a comprehensive evaluation of a website’s search engine optimization (SEO) performance. The purpose of an SEO audit is to identify areas of improvement, uncover issues that may be affecting a site’s visibility in search engine results, and provide recommendations for optimizing its overall SEO strategy.",
  },
  {
    title: " Why Your Website Isn’t Ranking and How to Fix Your Website SEO issues in 2024",
    description: "An SEO audit is a comprehensive evaluation of a website’s search engine optimization (SEO) performance. The purpose of an SEO audit is to identify areas of improvement, uncover issues that may be affecting a site’s visibility in search engine results, and provide recommendations for optimizing its overall SEO strategy.",
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
          btn_title="Law Firm Marketing Services"
          duration="Law Firm Marketing Services"
          tittle="Law Firm Marketing Services From Expert Attorney Marketing Company"
          features1="Law firm marketing services at RankON Technologies include Google ads, Social Media Marketing, And SEO Services to help attorneys to build better online presence and generate leads for their businesses at affordable prices."
        />
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='font-bold items-start xl:items-start justify-start xl:justify-start text-center mb-6 text-gray-300 text-3xl'>What Is Law Firm Marketing?</h1>
          <p className='text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-center text-gray-500 text-start xl:text-center mt-10'>Law firm marketing refers to the activities that a law firm undertakes to promote its services and attract new clients. It involves using various marketing techniques to create awareness of the law firm’s brand, establish its reputation, and differentiate it from other law firms.
            The goal of law firm marketing is to create a steady stream of qualified leads that can be converted into clients. This involves identifying and targeting specific audiences, developing messaging that resonates with them, and using marketing channels to reach them effectively.
            Some common marketing strategies used by law firms include search engine optimization (SEO), pay-per-click advertising (PPC), content marketing, social media marketing, email marketing, and event marketing.
            Law firm marketing can help a law firm to build its brand, establish its reputation, and differentiate itself from competitors. By using effective marketing strategies, a law firm can attract new clients, increase its revenue, and grow its business.</p>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='font-bold items-start xl:items-start justify-start xl:justify-start text-center mb-10 text-gray-300 text-3xl'>Digital Marketing Strategies For Hospitals</h1>
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
          <h1 className='font-bold items-start xl:items-start justify-start xl:justify-start text-center mb-10 text-gray-300 text-3xl'>Benefits Of Law Firm Marketing Services</h1>
          <p className="text-[1.1rem] leading-7 text-gray-500 text-center">There are several benefits of using law firm marketing services to promote your legal practice. Here are some key benefits:</p>
          <div className="slider-container text-white justify-around">
            <Slider className='!text-3xl' {...settings}>
              {client.map((slide, index) => (
                <div key={index} className="rounded-md p-4">
                  <div className="p-4 border-2 border-gray-400 h-fit xl:!h-[400px] w-[100%] xl:w-[100%]">
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
          <h1 className='font-bold items-start xl:items-start justify-start xl:justify-start text-start mb-6 text-gray-300 text-3xl'>How Much Do Law Firm Marketing Services Cost?</h1>
          <p className='text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-center text-gray-500 text-start xl:text-start mt-10'>Law firm marketing refers to the activities that a law firm undertakes to promote its services and attract new clients. It involves using various marketing techniques to create awareness of the law firm’s brand, establish its reputation, and differentiate it from other law firms.
            The goal of law firm marketing is to create a steady stream of qualified leads that can be converted into clients. This involves identifying and targeting specific audiences, developing messaging that resonates with them, and using marketing channels to reach them effectively.
            Some common marketing strategies used by law firms include search engine optimization (SEO), pay-per-click advertising (PPC), content marketing, social media marketing, email marketing, and event marketing.
            Law firm marketing can help a law firm to build its brand, establish its reputation, and differentiate itself from competitors. By using effective marketing strategies, a law firm can attract new clients, increase its revenue, and grow its business.</p>
          <p className='text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-center text-gray-500 text-start xl:text-start mt-10'>Law firm marketing refers to the activities that a law firm undertakes to promote its services and attract new clients. It involves using various marketing techniques to create awareness of the law firm’s brand, establish its reputation, and differentiate it from other law firms.
            The goal of law firm marketing is to create a steady stream of qualified leads that can be converted into clients. This involves identifying and targeting specific audiences, developing messaging that resonates with them, and using marketing channels to reach them effectively.
            Some common marketing strategies used by law firms include search engine optimization (SEO), pay-per-click advertising (PPC), content marketing, social media marketing, email marketing, and event marketing.
            Law firm marketing can help a law firm to build its brand, establish its reputation, and differentiate itself from competitors. By using effective marketing strategies, a law firm can attract new clients, increase its revenue, and grow its business.</p>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='font-bold items-start xl:items-start justify-start xl:justify-start text-start mb-6 text-gray-300 text-3xl'>Why Should You Use Law Firm Marketing Services Company?</h1>
          <p className='text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-center text-gray-500 text-start xl:text-start mt-10'>Law firm marketing services can be used at any stage of your legal practice to promote your services, build your brand, and attract new clients. Here are some examples of when to use law firm marketing services:</p>
          <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 text-sm justify-between mt-11'>
            <div className='w-[90%] xl:w-[350px] h-fit xl:h-[380px] md:h-fit bg-black border-gray-500 mx-auto hover:border-2 p-6 m-2 rounded-lg'>
              <h1 className='font-bold items-start xl:items-start justify-start xl:justify-start text-center mb-10 text-gray-300 text-2xl'>Social Media Marketing</h1>
              <p className="text-[1.1rem] leading-7 text-gray-500 text-center my-5">Digital marketing channels provide real-time data on campaign performance, enabling IT companies to measure the effectiveness of their marketing efforts and make data-driven decisions.</p>
            </div>
            <div className='w-[90%] xl:w-[350px] h-fit xl:h-[380px] md:h-fit bg-black border-gray-500 mx-auto hover:border-2 p-6 m-2 rounded-lg'>
              <h1 className='font-bold items-start xl:items-start justify-start xl:justify-start text-center mb-10 text-gray-300 text-2xl'>Content Marketing</h1>
              <p className="text-[1.1rem] leading-7 text-gray-500 text-center my-5">Digital marketing enables IT companies to target specific demographics, behaviors, and interests with their marketing messages. This enables them to create more personalized marketing campaigns that resonate with their target audience.</p>
            </div>
            <div className='w-[90%] xl:w-[350px] h-fit xl:h-[380px] md:h-fit bg-black border-gray-500 mx-auto hover:border-2 p-6 m-2 rounded-lg'>
              <h1 className='font-bold items-start xl:items-start justify-start xl:justify-start text-center mb-10 text-gray-300 text-2xl'>Email Marketing</h1>
              <p className="text-[1.1rem] leading-7 text-gray-500 text-center my-5">Digital marketing channels like social media and email marketing enable IT companies to engage with their customers in real-time, respond to their queries and concerns, and build stronger relationships.</p>
            </div>
          </div>
          <p className='text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-center text-gray-500 text-start xl:text-start mt-10'>Law firm marketing services can be used at any stage of your practice to help you achieve your business goals and attract new clients.</p>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='font-bold items-start xl:items-start justify-start xl:justify-start text-start mb-6 text-gray-300 text-3xl'>How To Hire Best Law Firm Marketing Company?</h1>
          <p className="text-[1.1rem] leading-7 text-gray-500 text-start my-5">When it comes to hiring the best law firm marketing company, there are several key factors to consider to ensure you find a company that can help you achieve your marketing goals. Here are some steps to help you hire the best law firm marketing company:</p>
          <ul className='list-disc p-4'>
            <li className='text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-center text-gray-500 text-start xl:text-start'><span className='text-gray-400 font-bold text-lg'>Search Engine Optimization (SEO) : </span> The cost of SEO services can range from a few hundred dollars to thousands of dollars per month, depending on the scope of the project and the competitiveness of the industry.</li>
            <li className='text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-center text-gray-500 text-start xl:text-start mt-4'><span className='text-gray-400 font-bold text-lg'>Pay-Per-Click Advertising (PPC) : </span> The cost of PPC advertising can vary depending on the target audience, the keywords being targeted, and the platform being used. On average, businesses can expect to spend around $1-2 </li>
            <li className='text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-center text-gray-500 text-start xl:text-start mt-4'><span className='text-gray-400 font-bold text-lg'>Social Media Marketing : </span> Develop a content marketing plan that includes blog posts, videos, white papers, and other forms of content that educate your audience and showcase your expertise.</li>
            <li className='text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-center text-gray-500 text-start xl:text-start mt-4'><span className='text-gray-400 font-bold text-lg'>Optimize your website : </span> Ensure your website is optimized for search engines and user experience. This includes optimizing website copy, improving website speed, and creating a responsive design that looks great on all devices.</li>
            <li className='text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-center text-gray-500 text-start xl:text-start mt-4'><span className='text-gray-400 font-bold text-lg'>Leverage social media : </span> Use social media platforms like LinkedIn, Twitter, Facebook, and Instagram to engage with your audience, share industry news, and promote your brand.</li>
          </ul>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='font-bold items-start xl:items-start justify-start xl:justify-start text-start mb-6 text-gray-300 text-3xl'>Why Blue soltech Is Best For Law Firm Marketing Services In India?</h1>
          <p className='text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-center text-gray-500 text-start xl:text-start mt-10'>Blue soltech is one of the best law firm marketing companies in India. We offer top quality digital marketing services for law firms that include:</p>
          <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 text-sm justify-between mt-11 mx-auto'>
            <div className='w-[90%] xl:w-[450px] h-fit xl:h-[500px] md:h-fit bg-black border-gray-500 mx-auto hover:border-2 p-6 m-2 rounded-lg flex flex-col justify-center items-center'>
              <img src={img1} className='xl:w-[60%]' alt="Image" />
              <h1 className='font-bold text-center text-gray-300 text-lg my-4'>Search Engine Optimization (SEO)</h1>
              <p className="text-[1.1rem] leading-7 text-gray-500 text-center">
                Consider the company's overall marketing goals and objectives, such as increasing website traffic, generating leads, improving brand awareness, or increasing sales. These goals will help determine the scope and budget for the digital marketing campaign.
              </p>
            </div>
            <div className='w-[90%] xl:w-[450px] h-fit xl:h-[500px] md:h-fit bg-black border-gray-500 mx-auto hover:border-2 p-6 m-2 rounded-lg flex flex-col justify-center items-center'>
              <img src={img1} className='xl:w-[60%]' alt="Image" />
              <h1 className='font-bold text-center text-gray-300 text-lg my-4'>Pay-Per-Click (PPC) Advertising</h1>
              <p className="text-[1.1rem] leading-7 text-gray-500 text-center">
                As a general rule of thumb, a company should allocate around 7-12% of its total revenue towards marketing. However, this percentage may vary depending on the factors mentioned above. It is important to keep in mind that digital marketing is an ongoing process and requires continuous investment to maintain and improve results over time.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage