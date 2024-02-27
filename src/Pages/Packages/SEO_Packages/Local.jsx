import React from 'react'
import Services_first from '../../../component/Services_first'
import img1 from "../../../assets/img/vision.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Video1 from '../../../component/Video1';
import Image from '../../../component/Image';


const sliderContent = [
  {
    title: "Business Goals",
    description: "Consider your business objectives and what you want to achieve through SEO. Are you looking to increase organic traffic, improve search engine rankings, generate more leads, or boost online sales? The level of investment may vary depending on the scale of your goals.",
    imageUrl: img1
  },
  {
    title: "Competitiveness",
    description: "If you operate in a highly competitive industry, achieving significant SEO results may require more resources and a higher investment. More competitive keywords and markets typically require a more extensive and ongoing SEO effort to stand out.",
    imageUrl: img1
  },
  {
    title: "xyzxyzxyzxyzxyzxyz",
    description: "An SEO audit is a comprehensive evaluation of a website’s search engine optimization (SEO) performance. The purpose of an SEO audit is to identify areas of improvement, uncover issues that may be affecting a site’s visibility in search engine results, and provide recommendations for optimizing its overall SEO strategy.",
    imageUrl: img1
  },

  {
    title: "ABCDEFGHI",
    description: "An SEO audit is a comprehensive evaluation of a website’s search engine optimization (SEO) performance. The purpose of an SEO audit is to identify areas of improvement, uncover issues that may be affecting a site’s visibility in search engine results, and provide recommendations for optimizing its overall SEO strategy.",
    imageUrl: img1
  },
  {
    title: "xyzxyzxyzxyzxyzxyz",
    description: "An SEO audit is a comprehensive evaluation of a website’s search engine optimization (SEO) performance. The purpose of an SEO audit is to identify areas of improvement, uncover issues that may be affecting a site’s visibility in search engine results, and provide recommendations for optimizing its overall SEO strategy.",
    imageUrl: img1
  },
];

const Local = () => {
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
    <div className="bg-[#0F0E0E] p-10 xl:p-20 items-center ">
      <div className="md:w-[80%] w-auto mt-4 mx-auto">
        {/* <Services_first
          imgSrc={img1} alt
          btn_title="PPC Media Marketing Plans"
          title="How Much Do Google Ads Services And Management Cost In India?"
          duration="PPC Packages"
          features2="Are you searching for PPC Packages in India? RankON Technologies offers affordable Google Ads Pricing Packages for small to large businesses in India. We help you make the best use of your Google advertising budget. We are one of trusted Google advertising agencies in India that helps businesses to spot their positions at the top of search results through our PPC Management Packages."
          features3="We offer three different PPC packages in India exclusively designed to help our clients achieve their Google ads marketing goals. Continue reading to know “How Much Do Google Ads Cost."
        /> */}

        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='text-gray-300 text-2xl w-full xl:text-3xl mt-4 font-bold text-center'>Best SEO Packages That Increase Website Organic SEO Ranking, Traffic & Sales</h1>
          <p className=' text-[1.1rem] leading-7 mt-10 text-gray-500 text-start my-5'>SEO packages from RankON don’t only increase your search engine rankings but also improve your conversion, domain authority and brand visibility. RankON Technologies is a leading search engine optimization company in India whose SEO Packages are worth every dime. Our SEO packages help you to rank higher in Google search results.</p>
          <p className=' text-[1.1rem] leading-7 mt-5 text-gray-500 text-start my-5'>From website optimization to keyword rankings we take care of every single aspect of SEO to increase your organic traffic asap.</p>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='text-gray-300 text-2xl w-full xl:text-3xl mt-4 font-bold text-center'>Why Should You Invest In RankON Technologies' SEO Packages?</h1>
          <p className=' text-[1.1rem] leading-7 mt-5 text-gray-500 text-start my-5'>right place! At RankON Technologies, we offer a variety of affordable and effective SEO packages that can help your website achieve better rankings.</p>
          <p className=' text-[1.1rem] leading-7 mt-5 text-gray-500 text-start my-5'>Our team of SEO experts will work with you to create a customized SEO package that fits your specific needs and budget. We’ll help you choose the right keywords, optimize your website content, and build high-quality backlinks to improve your website’s visibility and authority.</p>
          <p className=' text-[1.1rem] leading-7 mt-5 text-gray-500 text-start my-5'>With our help, you can achieve the top spot in search engine results pages and get more traffic, leads, and sales for your business. Contact us today to learn more about our SEO packages and how we can help you grow your business online. We Follow search engine guidelines To Provide High-Quality Small Business SEO Services.</p>
        </div>

        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='text-gray-300 text-2xl w-full xl:text-3xl mt-4 font-bold text-center'>How Much Does SEO Cost?</h1>
          <p className=' text-[1.1rem] leading-7 mt-10 text-gray-500 text-start my-5 justify-around '>The cost of SEO (Search Engine Optimization) can vary widely depending on various factors. Some common pricing models used by SEO agencies or consultants include:</p>
          <div className='grid gap-5'>

            <div className='w-[90%] xl:w-[1150px] h-fit xl:h-[200px] md:h-fit bg-black border-gray-500 mx-auto hover:border-2 p-6 m-2 rounded-lg flex flex-col justify-center items-center'>
              <p className="text-[1.1rem] leading-7 text-gray-500 text-center">
                <span className='text-gray-300 font-bold'>Hourly Rates : </span> Some SEO professionals charge an hourly rate for their services. Hourly rates can range from $75 to $200 or more, depending on the experience and expertise of the SEO specialist.              </p>
            </div>
            <div className='w-[90%] xl:w-[1150px] h-fit xl:h-[200px] md:h-fit bg-black border-gray-500 mx-auto hover:border-2 p-6 m-2 rounded-lg flex flex-col justify-center items-center'>
              <p className="text-[1.1rem] leading-7 text-gray-500 text-center">
                <span className='text-gray-300 font-bold'>Monthly Retainer : </span>Many SEO agencies work on a monthly retainer basis, where clients pay a fixed fee each month for ongoing SEO services. Retainer fees can vary significantly depending on the scope and complexity of the project, as well as the reputation and location of the agency. Monthly retainers can range from a few hundred dollars to several thousand dollars.              </p>
            </div>
            <div className='w-[90%] xl:w-[1150px] h-fit xl:h-[200px] md:h-fit bg-black border-gray-500 mx-auto hover:border-2 p-6 m-2 rounded-lg flex flex-col justify-center items-center'>
              <p className="text-[1.1rem] leading-7 text-gray-500 text-center">
                <span className='text-gray-300 font-bold'>Project-Based Pricing : </span>For specific SEO projects with a well-defined scope, SEO professionals may provide project-based pricing. The cost will depend on the specific requirements of the project, such as website audit, keyword research, content optimization, link building, etc.              </p>
            </div>
            <div className='w-[90%] xl:w-[1150px] h-fit xl:h-[200px] md:h-fit bg-black border-gray-500 mx-auto hover:border-2 p-6 m-2 rounded-lg flex flex-col justify-center items-center'>
              <p className="text-[1.1rem] leading-7 text-gray-500 text-center">
                <span className='text-gray-300 font-bold'> Performance-Based Pricing : </span> In some cases, SEO agencies may offer performance-based pricing, where the cost is tied to the results achieved. For example, they may charge a fee based on the improvement in search engine rankings or the increase in organic traffic. This model is less common and is typically combined with a base retainer or project fee.              </p>
            </div>
            <p className=' text-[1.1rem] leading-7 mt-10 text-gray-500 text-start my-5'>It’s important to note that the cost of SEO is influenced by several factors, including the size and complexity of the website, the competitiveness of the industry or market, the geographic target area, and the goals of the SEO campaign. Each project is unique, so it’s recommended to consult with different SEO professionals or agencies to get a customized quote based on your specific needs and budget.</p>
          </div>
        </div>
        <div className='mt-[60px] xl:mt-[120px]'>
          <h1 className='text-gray-300 text-2xl  xl:text-3xl mt-4 font-bold text-center'>How Much Does SEO Cost In India?</h1>
          <p className='mt-5 text-[1.1rem] leading-7 text-gray-500 text-center'>The cost of SEO services in India can vary depending on several factors, including the scope of the project, the expertise of the SEO professional or agency, and the specific requirements of the client. However, in general, SEO services in India tend to be more affordable compared to other countries.</p>
          <h1 className='text-gray-300 text-2xl  xl:text-xl mt-4 font-bold text-start'>Here are some approximate price ranges you can expect for SEO services in India:</h1>
          <div className=' flex-row xl:flex justify-between mt-10'>
            <div className='w-[90%] xl:w-[450px] h-fit xl:h-[400px] md:h-fit bg-black border-gray-500 mx-auto border-2 p-6 m-2 rounded-lg flex flex-col justify-center items-center'>
              <h2 className='font-bold text-gray-300 text-center mt-4'>Freelancers</h2>
              <p className='text-[1.1rem] leading-7 text-gray-500 text-center'>SEO freelancers in India may charge anywhere from $5 to $25 per hour, depending on their experience and skill level. Keep in mind that rates can vary widely, and it's essential to assess the freelancer's expertise and track record before hiring</p>
            </div>
            <div className='w-[90%] xl:w-[450px] h-fit xl:h-[400px] md:h-fit bg-black border-gray-500 mx-auto border-2 p-6 m-2 rounded-lg flex flex-col justify-center items-center'>
              <h2 className='font-bold text-gray-300 text-center mt-4'>Small Agencies</h2>
              <p className='text-[1.1rem] leading-7 text-gray-500 text-center'>Small SEO agencies in India typically offer packages or monthly retainer plans. Prices for these services can range from $200 to $1000 per month, depending on the agency's size, reputation, and the extent of the SEO work required.</p>
            </div>
            <div className='w-[90%] xl:w-[450px] h-fit xl:h-[400px] md:h-fit bg-black border-gray-500 mx-auto border-2 p-6 m-2 rounded-lg flex flex-col justify-center items-center'>
              <h2 className='font-bold text-gray-300 text-center mt-4'>Medium To Large Agencies</h2>
              <p className='text-[1.1rem] leading-7 text-gray-500 text-center'>Larger SEO agencies in India may have higher prices compared to smaller ones. The cost can range from $1000 to $5000 or more per month, depending on the complexity of the project and the level of competition in the industry.</p>
            </div>
          </div>
          <p className="mt-4 text-[1.1rem] leading-7 text-gray-500 text-center">
            Monthly Retainer: Many SEO agencies work on a monthly retainer basis, where clients pay a fixed fee each month for ongoing SEO services. Retainer fees can vary significantly depending on the scope and complexity of the project, as well as the reputation and location of the agency. Monthly retainers can range from a few hundred dollars to several thousand dollars.              </p>
        </div>
        <div className='mt-[60px] xl:mt-[120px]'>
          <h1 className='text-gray-300 text-2xl  xl:text-3xl mt-4 font-bold text-center'>How Much Should I Invest In SEO Packages?</h1>
          <p className='mt-5 text-[1.1rem] leading-7 text-gray-500 text-center'>The amount you should invest in SEO packages depends on several factors, including your business goals, the competitiveness of your industry, the size of your website, and your budget. It’s important to approach SEO as a long-term investment rather than a one-time expense.</p>
          <h1 className='text-gray-300 text-2xl  xl:text-xl mt-4 font-bold text-start'>Here are some considerations to help you determine how much to invest in SEO packages:</h1>

          <div className='xl:mt-[60px] mt-[40px]'>
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
          <p className="mt-10 text-[1.1rem] leading-7 text-gray-500 text-center">
            Ultimately, there is no fixed amount that applies universally to all businesses. It’s recommended to consult with multiple SEO professionals or agencies, discuss your goals and requirements, and get customized proposals or quotes. This way, you can assess the value they can provide and make an informed decision about the appropriate investment for your specific needs. </p>
        </div>
        <div className='mt-[60px] xl:mt-[120px]'>
          <h1 className='text-gray-300 text-2xl  xl:text-3xl mt-4 font-bold text-center'>Our SEO Packages Include</h1>
          <div className=' flex-row xl:flex justify-center mt-10'>
            <div className='bg-black w-[90%] xl:w-[400px] h-fit xl:h-[550px] flex flex-col justify-center items-center shadow-2xl m-4'>
              <div className='h-fit w-fit  flex justify-center items-center p-4'>
                <img src={img1} alt='no_img' className='w-full h-auto' />
              </div>
              <h2 className='font-bold text-gray-300 text-[22px] text-center mt-5'>Onpage SEO</h2>
              <p className='text-gray-400 font-bold text-center my-5'>Packages</p>
              <button className="bg-transparent border-[1px] hover:text-black hover:bg-white transition-all duration-200 text-sm text-gray-400  py-1 px-2 rounded-md m-4">
                Click
              </button>
            </div>
            <div className='bg-black w-[90%] xl:w-[400px] h-fit xl:h-[550px] flex flex-col justify-center items-center shadow-2xl m-4'>
              <div className='h-fit w-fit  flex justify-center items-center p-4'>
                <img src={img1} alt='no_img' className='w-full h-auto' />
              </div>
              <h2 className='font-bold text-gray-300 text-[22px] text-center mt-5'>Offpage SEO</h2>
              <p className='text-gray-400 font-bold text-center my-5'>Packages</p>
              <button className="bg-transparent border-[1px] hover:text-black hover:bg-white transition-all duration-200 text-sm text-gray-400  py-1 px-2 rounded-md m-4">
                Click
              </button>
            </div>
          </div>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='text-gray-300 text-2xl w-full xl:text-3xl mt-4 font-bold text-center'>Affordable SEO Packages For All Size Businesses From RankON Technologies</h1>
          <p className=' text-[1.1rem] leading-7 mt-5 text-gray-500 text-start my-5'>Indian SEO packages from RankON Technologies are not the same for all types of businesses because we understand that when every business is not the same then how SEO packages can that’s why we offer custom SEO packages for our clients if they are looking for custom search engine optimization packages.</p>
          <p className=' text-[1.1rem] leading-7 mt-5 text-gray-500 text-start my-5'>Because of these variations, RankON Technologies has categorized its SEO pricing into 3 monthly SEO plans. These are Local Business SEO Package, Small Business SEO  Package, and Large Scaled Business SEO Package.</p>
          <p className=' text-[1.1rem] leading-7 mt-5 text-gray-500 text-start my-5'>With RankON Technologies, you can rest assured about promising results out of your investment in Outsourced SEO Services.</p>
        </div>

        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='font-bold items-start xl:items-start justify-start xl:justify-start text-center mb-6 text-gray-300 text-2xl xl:text-3xl'>Our SEO Packages Help You With</h1>
          <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 text-sm justify-between mt-11 mx-auto'>
            <div className='w-[90%] xl:w-[400px] h-fit xl:h-[570px] md:h-fit bg-black border-gray-500 mx-auto hover:border-2 p-6 m-2 rounded-lg flex flex-col justify-center items-center'>
              <img src={img1} className='xl:w-[60%] !top-0' alt="Image" />
              <h1 className='font-bold text-center text-gray-300 text-lg my-4'>On-Page SEO</h1>
              <p className="text-[1.1rem] leading-7 text-gray-500 text-center">
                Our SEO packages help you to optimize the complete website for better SEO results.              </p>
              <button className="bg-transparent border-[1px] hover:text-black hover:bg-white transition-all duration-200 text-white font-bold py-2 px-4 rounded-md m-4">
                Request proposal
              </button>
            </div>
            <div className='w-[90%] xl:w-[400px] h-fit xl:h-[570px] md:h-fit bg-black border-gray-500 mx-auto hover:border-2 p-6 m-2 rounded-lg flex flex-col justify-center items-center'>
              <img src={img1} className='xl:w-[60%]' alt="Image" />
              <h1 className='font-bold text-center text-gray-300 text-lg my-4'>Off-Page SEO</h1>
              <p className="text-[1.1rem] leading-7 text-gray-500 text-center">
                We build high-quality backlinks during Off-Page SEO.              </p>
              <button className="bg-transparent border-[1px] hover:text-black hover:bg-white transition-all duration-200 text-white font-bold py-2 px-4 rounded-md m-4">
                Request proposal
              </button>
            </div>
            <div className='w-[90%] xl:w-[400px] h-fit xl:h-[570px] md:h-fit bg-black border-gray-500 mx-auto hover:border-2 p-6 m-2 rounded-lg flex flex-col justify-center items-center'>
              <img src={img1} className='xl:w-[60%]' alt="Image" />
              <h1 className='font-bold text-center text-gray-300 text-lg my-4'>Content Marketing</h1>
              <p className="text-[1.1rem] leading-7 text-gray-500 text-center">
                We market your content online to drive maximum exposure to it.  
              </p>
              <button className="bg-transparent border-[1px] hover:text-black hover:bg-white transition-all duration-200 text-white font-bold py-2 px-4 rounded-md m-4">
                Request proposal
              </button>
            </div>
          </div>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <Image />
        </div>

        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='text-gray-300 text-2xl xl:text-3xl mt-4 font-bold text-center'>How Much Do <br />SEO Packages Cost In India?</h1>
          <div className='xl:flex flex-row mt-9 justify-around'>
            <p className='text-[1.1rem] xl:w-[70%] w-full md:[w-full] leading-7 text-gray-500 text-start'>SEO Cost depends on many factors like the number of keywords to target, Local SEO, National or international or Ecommerce SEO, Content marketing and website design upgrades so  SEO cost also depends on the agency’s pricing.</p>
          </div>
          <div className='xl:flex flex-row mt-9 justify-around'>
            <p className='text-[1.1rem] leading-5 font-bold text-gray-300 text-start'>If you hire an SEO agency in India then you can expect an average SEO cost of 8K to 25K per month (1 Lac to 3 Lac Per Year). </p>
          </div>
          <div className='xl:flex flex-row mt-9 justify-around'>
            <p className='text-[1.1rem] leading-5 font-bold text-gray-300 text-start'>If you hire an SEO agency in India then you can expect an average SEO cost of 8K to 25K per month (1 Lac to 3 Lac Per Year). </p>
          </div>
          <p className='text-[1.1rem] leading-7 text-gray-500 text-center my-5'>Here we have listed the factors that affect SEO Services packages Pricing</p>
        </div>
        <div className='xl:flex flex-row mt-[5rem] justify-end gap-4'>
          <p className='text-[1.8rem] font-bold xl:w-[40%] w-full md:[w-full] text-gray-400 text-center '>SEO Packages <br /> Pricing Factors</p>
          <p className='text-[1.1rem] xl:w-[80%] w-full md:[w-full] mt-5 leading-7 text-gray-500 text-start'>There are mainly 2 factors that affect SEO packages:, On-page Optimization, Off-page Optimization. Besides, these two, there are factors like reporting, keywords rank tracking, link-building strategies that affect the price of our SEO Package. RankON Technologies offers Affordable SEO packages that depend on a number of factors. Here are the main things we look at to determine the cost of your SEO campaign.</p>
        </div>

        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='text-gray-300 text-2xl xl:text-3xl mt-4 font-bold text-center'>Several factors can influence the cost of SEO services. Here are some key factors that affect the pricing:</h1>
          <div className='xl:flex flex-row mt-9 justify-around'>
            <p className='text-[1.1rem] leading-6.5 text-gray-500 text-start'><span className='font-bold text-gray-300'>Scope of Work : </span>The extent of the SEO work required plays a significant role in determining the cost. This includes factors such as website analysis and audit, keyword research, on-page optimization, content creation, link building, technical optimization, and ongoing maintenance. The more comprehensive the scope of work, the higher the cost is likely to be.</p>
          </div>
          <div className='xl:flex flex-row mt-9 justify-around'>
            <p className='text-[1.1rem] leading-6.5 text-gray-500 text-start'><span className='font-bold text-gray-300'>Competition : </span>The level of competition in your industry or market can impact the cost. Highly competitive niches may require more extensive and aggressive SEO strategies, which can result in higher costs. The effort needed to outrank competitors and achieve desired results can influence pricing.</p>
          </div>
          <div className='xl:flex flex-row mt-9 justify-around'>
            <p className='text-[1.1rem] leading-6.5 text-gray-500 text-start'><span className='font-bold text-gray-300'>Geographic Targeting : </span>If you target a specific geographic area, the cost of SEO may vary depending on the size and competitiveness of that region. Local SEO targeting a small city or town may be less expensive compared to national or international SEO campaigns. </p>
          </div>
          <div className='xl:flex flex-row mt-9 justify-around'>
            <p className='text-[1.1rem] leading-6.5 text-gray-500 text-start'><span className='font-bold text-gray-300'>Website Size and Complexity : </span>The extent of the SEO work required plays a significant role in determining the cost. This includes factors such as website analysis and audit, keyword research, on-page optimization, content creation, link building, technical optimization, and ongoing maintenance. The more comprehensive the scope of work, the higher the cost is likely to be.</p>
          </div>
          <div className='xl:flex flex-row mt-9 justify-around'>
            <p className='text-[1.1rem] leading-6.5 text-gray-500 text-start'><span className='font-bold text-gray-300'>Industry or Niche : </span>The level of competition in your industry or market can impact the cost. Highly competitive niches may require more extensive and aggressive SEO strategies, which can result in higher costs. The effort needed to outrank competitors and achieve desired results can influence pricing.</p>
          </div>
          <div className='xl:flex flex-row mt-9 justify-around'>
            <p className='text-[1.1rem] leading-6.5 text-gray-500 text-start'><span className='font-bold text-gray-300'>Service Provider : </span>If you target a specific geographic area, the cost of SEO may vary depending on the size and competitiveness of that region. Local SEO targeting a small city or town may be less expensive compared to national or international SEO campaigns. </p>
          </div>
          <div className='xl:flex flex-row mt-9 justify-around'>
            <p className='text-[1.1rem] leading-6.5 text-gray-500 text-start'><span className='font-bold text-gray-300'>Contract Duration : </span>If you target a specific geographic area, the cost of SEO may vary depending on the size and competitiveness of that region. Local SEO targeting a small city or town may be less expensive compared to national or international SEO campaigns. </p>
          </div>
        </div>

        <div className='mt-[60px] xl:mt-[100px]'>
          <h1 className='text-gray-300 text-2xl  xl:text-3xl mt-4 font-bold text-center'>What Do Our SEO Packages Include?</h1>
          <p className='mt-5 text-[1.1rem] leading-7 text-gray-500 text-center'>Our monthly SEO packages can help you to optimize and rank your website with safe SEO techniques. Have a look on below-given points to know what our SEO packages offer.</p>
        </div>

        <div className='mt-[60px] xl:mt-[100px]'>
          <h1 className='text-gray-300 text-2xl  xl:text-3xl mt-4 font-bold text-center'>OnPage SEO Packages Includes</h1>
          <p className='mt-5 text-[1.1rem] leading-7 text-gray-500 text-center'>On-site optimization is the most important factor we focus on during any website SEO. A perfect on-page SEO marketing plan can increase website rankings in Google search results quickly. Have a look at our onsite SEO process:</p>
        </div>



        <div className='mt-[50px] xl:mt-[100px]'>
          <h1 className='text-gray-300 text-2xl  xl:text-3xl mt-4 font-bold text-center'>Off Page SEO <br />Packages Include</h1>
          <p className='mt-5 text-[1.1rem] leading-7 text-gray-500 text-center'>
            Offpage SEO is another crucial factor in our SEO marketing strategy. Off-page is also known as link building. Our link building techniques are safe and totally white hat. Our team of link builders stringently follows Google guidelines for backlinks creation. Moreover, they focus on content marketing to build high-quality natural backlinks to give high rankings to our client website. More quality and high authority backlinks increase your website’s link profile. Have a look at our Link Building Process:
          </p>
        </div>








      </div>
    </div>
  )
}

export default Local