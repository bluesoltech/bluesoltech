import React from 'react'
import Services_first from '../../../component/Services_first'
import img1 from '../../../assets/img/vision.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
          btn_title="IT Company Digital Marketing"
          duration="IT Company Digital Marketing Company"
          tittle="Grow Your IT Company With Best Digital Marketing Services In India"
          features1="Searching for an IT Company Digital Marketing Company in India? Contact Blue soltech today for the best IT Company marketing services at very affordable prices. RankON Technologies is a leading IT Company digital marketing agency in India with more than 100 successful IT digital marketing projects."
        />
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
          <h1 className='font-bold items-start xl:items-start justify-start xl:justify-start text-center mb-6 text-gray-300 text-2xl xl:text-3xl'>Best Practices For IT Company Marketing</h1>
          <ul className='list-decimal p-4'>
            <li className='text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-center text-gray-500 text-start xl:text-start mt-4'><span className='text-gray-400 font-bold text-lg'>Define your target audience : </span> Identify your ideal customers based on their demographics, behavior, and preferences. This will help you create targeted marketing campaigns that resonate with your audience.</li>
            <li className='text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-center text-gray-500 text-start xl:text-start mt-4'><span className='text-gray-400 font-bold text-lg'>Develop a unique value proposition : </span> Determine what sets your IT company apart from competitors and how you can communicate this to your target audience.</li>
            <li className='text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-center text-gray-500 text-start xl:text-start mt-4'><span className='text-gray-400 font-bold text-lg'>Create high-quality content : </span> Develop a content marketing plan that includes blog posts, videos, white papers, and other forms of content that educate your audience and showcase your expertise.</li>
            <li className='text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-center text-gray-500 text-start xl:text-start mt-4'><span className='text-gray-400 font-bold text-lg'>Optimize your website : </span> Ensure your website is optimized for search engines and user experience. This includes optimizing website copy, improving website speed, and creating a responsive design that looks great on all devices.</li>
            <li className='text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-center text-gray-500 text-start xl:text-start mt-4'><span className='text-gray-400 font-bold text-lg'>Leverage social media : </span> Use social media platforms like LinkedIn, Twitter, Facebook, and Instagram to engage with your audience, share industry news, and promote your brand.</li>
          </ul>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='font-bold items-start xl:items-start justify-start xl:justify-start text-start mb-6 text-gray-300 text-2xl xl:text-3xl'>What Does An IT Company Digital Marketing Agency Do?</h1>
          <p className='text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-center text-gray-500 text-start xl:text-start mt-10'>An IT company digital marketing agency is a specialized agency that provides digital marketing services to IT companies. These agencies have expertise in digital marketing channels, tactics, and strategies that are relevant to the IT industry.</p>
          <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 text-sm justify-between mt-11 mx-auto'>
            <div className='w-[90%] xl:w-[450px] h-fit xl:h-[500px] md:h-fit bg-black border-gray-500 mx-auto hover:border-2 p-6 m-2 rounded-lg flex flex-col justify-center items-center'>
              <img src={img1} className='xl:w-[60%]' alt="Image" />
              <h1 className='font-bold text-center text-gray-300 text-lg my-4'>Business Goals</h1>
              <p className="text-[1.1rem] leading-7 text-gray-500 text-center">
                Consider the company's overall marketing goals and objectives, such as increasing website traffic, generating leads, improving brand awareness, or increasing sales. These goals will help determine the scope and budget for the digital marketing campaign.
              </p>
            </div>
            <div className='w-[90%] xl:w-[450px] h-fit xl:h-[500px] md:h-fit bg-black border-gray-500 mx-auto hover:border-2 p-6 m-2 rounded-lg flex flex-col justify-center items-center'>
              <img src={img1} className='xl:w-[60%]' alt="Image" />
              <h1 className='font-bold text-center text-gray-300 text-lg my-4'>Target Audience</h1>
              <p className="text-[1.1rem] leading-7 text-gray-500 text-center">
                As a general rule of thumb, a company should allocate around 7-12% of its total revenue towards marketing. However, this percentage may vary depending on the factors mentioned above. It is important to keep in mind that digital marketing is an ongoing process and requires continuous investment to maintain and improve results over time.</p>
            </div>
          </div>
          <p className='text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-center text-gray-500 text-center xl:text-start mt-10'>As a general rule of thumb, a company should allocate around 7-12% of its total revenue towards marketing. However, this percentage may vary depending on the factors mentioned above. It is important to keep in mind that digital marketing is an ongoing process and requires continuous investment to maintain and improve results over time.</p>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='font-bold items-start xl:items-start justify-start xl:justify-start text-center mb-6 text-gray-300 text-3xl'>How Much Does It Actually Cost For IT Company Digital Marketing?</h1>
          <p className="text-[1.1rem] leading-7 text-gray-500 text-start my-5">The cost of digital marketing for an IT company can vary widely based on a number of factors, including the type of services needed, the size of the company, the industry, and the target audience.</p>
          <ul className='list-disc p-4'>
            <li className='text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-center text-gray-500 text-start xl:text-start'><span className='text-gray-400 font-bold text-lg'>Search Engine Optimization (SEO) : </span> The cost of SEO services can range from a few hundred dollars to thousands of dollars per month, depending on the scope of the project and the competitiveness of the industry.</li>
            <li className='text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-center text-gray-500 text-start xl:text-start mt-4'><span className='text-gray-400 font-bold text-lg'>Pay-Per-Click Advertising (PPC) : </span> The cost of PPC advertising can vary depending on the target audience, the keywords being targeted, and the platform being used. On average, businesses can expect to spend around $1-2 </li>
            <li className='text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-center text-gray-500 text-start xl:text-start mt-4'><span className='text-gray-400 font-bold text-lg'>Social Media Marketing : </span> Develop a content marketing plan that includes blog posts, videos, white papers, and other forms of content that educate your audience and showcase your expertise.</li>
            <li className='text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-center text-gray-500 text-start xl:text-start mt-4'><span className='text-gray-400 font-bold text-lg'>Optimize your website : </span> Ensure your website is optimized for search engines and user experience. This includes optimizing website copy, improving website speed, and creating a responsive design that looks great on all devices.</li>
            <li className='text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-center text-gray-500 text-start xl:text-start mt-4'><span className='text-gray-400 font-bold text-lg'>Leverage social media : </span> Use social media platforms like LinkedIn, Twitter, Facebook, and Instagram to engage with your audience, share industry news, and promote your brand.</li>
          </ul>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='font-bold items-start xl:items-start justify-start xl:justify-start text-start mb-10 text-gray-300 text-3xl'>Factors That Affect The Cost Of IT Company Digital Marketing</h1>
          <p className="text-[1.1rem] leading-7 text-gray-500 text-start my-5">The cost of IT company digital marketing can vary depending on several factors, including:</p>
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
          <h1 className='font-bold items-start xl:items-start justify-start xl:justify-start text-start mb-6 text-gray-300 text-3xl'>IT Company Marketing Process</h1>
          <p className="text-[1.1rem] leading-7 text-gray-500 text-start my-5">The marketing process for an IT company typically involves the following steps:</p>
          <ul className='list-disc p-4'>
            <li className='text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-center text-gray-500 text-start xl:text-start'><span className='text-gray-400 font-bold text-lg'>Search Engine Optimization (SEO) : </span> The cost of SEO services can range from a few hundred dollars to thousands of dollars per month, depending on the scope of the project and the competitiveness of the industry.</li>
            <li className='text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-center text-gray-500 text-start xl:text-start mt-4'><span className='text-gray-400 font-bold text-lg'>Pay-Per-Click Advertising (PPC) : </span> The cost of PPC advertising can vary depending on the target audience, the keywords being targeted, and the platform being used. On average, businesses can expect to spend around $1-2 </li>
            <li className='text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-center text-gray-500 text-start xl:text-start mt-4'><span className='text-gray-400 font-bold text-lg'>Social Media Marketing : </span> Develop a content marketing plan that includes blog posts, videos, white papers, and other forms of content that educate your audience and showcase your expertise.</li>
            <li className='text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-center text-gray-500 text-start xl:text-start mt-4'><span className='text-gray-400 font-bold text-lg'>Optimize your website : </span> Ensure your website is optimized for search engines and user experience. This includes optimizing website copy, improving website speed, and creating a responsive design that looks great on all devices.</li>
            <li className='text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-center text-gray-500 text-start xl:text-start mt-4'><span className='text-gray-400 font-bold text-lg'>Leverage social media : </span> Use social media platforms like LinkedIn, Twitter, Facebook, and Instagram to engage with your audience, share industry news, and promote your brand.</li>
          </ul>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='font-bold items-start xl:items-start justify-start xl:justify-start text-center mb-6 text-gray-300 text-3xl'>How Long Does It Take For An IT Company Digital Marketing?</h1>
          <p className='text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-center text-gray-500 text-start xl:text-center mt-10'> The timeline for an IT company’s digital marketing campaign can vary depending on several factors, such as the goals of the campaign, the channels being used, the level of competition, and the target audience. Here are some general timelines for common digital marketing channels:</p>
          <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 text-sm justify-between mt-11'>
            <div className='w-[90%] xl:w-[350px] h-fit xl:h-[380px] md:h-fit bg-black border-gray-500 mx-auto hover:border-2 p-2 flex justify-center items-center m-2 rounded-lg'>
              <img src={img1} />
            </div>
            <div className='w-[90%] xl:w-[350px] h-fit xl:h-[380px] md:h-fit bg-black border-gray-500 mx-auto hover:border-2 p-6 m-2 rounded-lg'>
              <h1 className='font-bold items-start xl:items-start justify-start xl:justify-start text-center mb-10 text-gray-300 text-2xl'>Search Engine Optimization (SEO)</h1>
              <p className="text-[1.1rem] leading-7 text-gray-500 text-center my-5">With digital marketing, IT companies can reach a global audience, regardless of their location. Digital marketing channels like social media, search engines, and email enable companies to connect with potential customers across the globe.</p>
            </div>
            <div className='w-[90%] xl:w-[350px] h-fit xl:h-[380px] md:h-fit bg-black border-gray-500 mx-auto hover:border-2 p-6 m-2 rounded-lg'>
              <h1 className='font-bold items-start xl:items-start justify-start xl:justify-start text-center mb-10 text-gray-300 text-2xl'>Pay-Per-Click Advertising (PPC)</h1>
              <p className="text-[1.1rem] leading-7 text-gray-500 text-center my-5">The cost of an IT company website also depends on the level of customization required. A website with a standard template and design will cost less than a fully customized website.</p>
            </div>
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
          <p className='text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-center text-gray-500 text-start xl:text-center mt-10'>It’s important to keep in mind that digital marketing is an ongoing process that requires continuous effort and optimization to maintain and improve results over time. Results may also vary depending on the specific goals and circumstances of each IT company.</p>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='font-bold items-start xl:items-start justify-start xl:justify-start text-start mb-6 text-gray-300 text-3xl'>How To Hire The Best Digital Marketing Company For IT Marketing Services?</h1>
          <p className="text-[1.1rem] leading-7 text-gray-500 text-start my-5">The marketing process for an IT company typically involves the following steps:</p>
          <ul className='list-disc p-4'>
            <li className='text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-center text-gray-500 text-start xl:text-start'><span className='text-gray-400 font-bold text-lg'>Search Engine Optimization (SEO) : </span> The cost of SEO services can range from a few hundred dollars to thousands of dollars per month, depending on the scope of the project and the competitiveness of the industry.</li>
            <li className='text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-center text-gray-500 text-start xl:text-start mt-4'><span className='text-gray-400 font-bold text-lg'>Pay-Per-Click Advertising (PPC) : </span> The cost of PPC advertising can vary depending on the target audience, the keywords being targeted, and the platform being used. On average, businesses can expect to spend around $1-2 </li>
            <li className='text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-center text-gray-500 text-start xl:text-start mt-4'><span className='text-gray-400 font-bold text-lg'>Social Media Marketing : </span> Develop a content marketing plan that includes blog posts, videos, white papers, and other forms of content that educate your audience and showcase your expertise.</li>
            <li className='text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-center text-gray-500 text-start xl:text-start mt-4'><span className='text-gray-400 font-bold text-lg'>Optimize your website : </span> Ensure your website is optimized for search engines and user experience. This includes optimizing website copy, improving website speed, and creating a responsive design that looks great on all devices.</li>
            <li className='text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-center text-gray-500 text-start xl:text-start mt-4'><span className='text-gray-400 font-bold text-lg'>Leverage social media : </span> Use social media platforms like LinkedIn, Twitter, Facebook, and Instagram to engage with your audience, share industry news, and promote your brand.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Homepage