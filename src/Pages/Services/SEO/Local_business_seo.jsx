import React from 'react'
import Services_first from '../../../component/Services_first'
import img1 from '../../../assets/img/vision.png'
import Logoslider from '../../../component/Logoslider'
import { FaUser } from 'react-icons/fa';
import Video1 from '../../../component/Video1';
import Request from '../../../component/Request';
import Questions from '../../../component/Questions';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Happy_client from '../../../component/About/Happy_client';
import Result from '../../../component/Result';
import Slick from '../../../component/Slick';

const faqs = [
  {
    question: "What should an SEO package include?",
    answer: ["When you are looking for an SEO package, there are a few things that you should keep in mind. The first is the size of your business. If you are a small business, you may not need all of the services that an SEO company offers. You may be able to get away with just basic services, such as keyword research and on-page optimization.",
      "Another thing to consider is your budget. An SEO package can be expensive, and it may not be affordable for everyone. If you are on a tight budget, you may want to look for a company that offers discounts or payment plans.",
      "Finally, you should consider the experience and reputation of the company. You want to work with someone who knows what they are doing and has a good track record."
    ]
  },
  {
    question: "How much is an SEO package?",
    answer: ["SEO is one of the most important aspects of online marketing. It can help you rank higher in search engine results pages, which can lead to more website visitors and more customers. If you’re looking for an SEO package, you may be wondering how much they cost.",
      "SEO packages vary in price, depending on the size and complexity of the project. Generally, smaller projects will cost less than larger ones. You can expect to pay anywhere from several hundred dollars to several thousand dollars for an SEO package.",
      "However, it’s important to remember that SEO is an ongoing process, and you should expect to pay monthly fees for maintenance and updates. The cost of an SEO package can be a good investment in your business’ success."
    ]
  },
  {
    question: "Are SEO packages worth it?",
    answer: ["There are a lot of SEO packages on the market. But are they worth the investment?",
      "The answer to that question depends on your business. If you’re just starting out, an SEO package can be a great way to get your website ranked higher in search engines. And if you’re looking for ways to improve your website’s ranking, an SEO package is definitely worth considering.",
      "But if you’ve been in business for a while and have a well-established website, an SEO package might not offer enough value to justify the cost. In that case, it might be better to focus on other areas of your marketing strategy."
    ]
  },
  {
    question: "Is SEO needed monthly?",
    answer: ["SEO is not a one-time job. It’s an ongoing process that needs to be tweaked and adjusted as search engine algorithms change. That’s why most SEO professionals recommend monthly SEO services.",
      "Monthly SEO can help ensure your website is always optimized for the best possible search engine ranking. It also allows you to track your website’s progress and make necessary adjustments along the way.",
      "If you’re looking for long-term success with your website, monthly SEO is a must. It keeps your website on top of search engine results pages, helping you attract more visitors and boost your business."
    ]
  },
  {
    question: "Can I do SEO on my own?",
    answer: ["Yes, you can do SEO on your own, but it’s important to remember that it’s a long-term process that takes patience and diligence. Professional SEO services can help you stay on track and make sure your website is performing at its best."
    ]
  },
  {
    question: "Should I hire someone to do my SEO?",
    answer: ["When it comes to SEO, there are a lot of things to think about. You need to make sure that your website is coded in a way that makes it easy for search engines to crawl, that you have quality content, and that you’re doing everything you can to get links from other websites. If all of this sounds like too much for you, or if you just don’t have the time to do it yourself, you may want to consider hiring an SEO agency.",
      "SEO agencies have a lot of experience when it comes to optimizing websites for search engines, and they can help you get your website ranked higher than your competition. They can also help you create content that is more likely to rank well and generate traffic.",
      "However, before you hire an SEO agency, make sure you do your research."
    ]
  },
  {
    question: "How much should a small business spend on SEO?",
    answer: ["Small businesses should be careful not to spend too much on SEO services each month. While it is important to invest in SEO, small businesses can quickly go over their budget if they’re not careful. It’s important to find a balance between the money you’re spending and the results you’re seeing.",
      "If you’re just starting out, it might be a good idea to invest in some basic services and see how they work for you. As your business grows, you can then start investing in more expensive services. Keep in mind that SEO is an ongoing process, so you’ll need to continue investing in it over time.",

    ]
  },
  {
    question: "What do SEO experts do?",
    answer: ["There is no one definitive answer to this question, as the work of an SEO expert can vary greatly depending on the specific needs of a client or company. However, in general, an SEO expert will work to improve a website’s search engine ranking by optimizing its content and structure for keywords, building backlinks, and improving its overall online visibility. They may also use various analytical tools to track the website’s progress and performance over time."

    ]
  },


];

const Local_business_seo = () => {
  return (
    <div className='bg-[#0F0E0E] p-20 items-center'>
      <div className='md:w-[80%] w-auto mt-4 mx-auto'>
        <Services_first
          imgSrc={img1}
          btn_title="Local Business SEO Services"
          title="SEO vs. PPC Advertising: Which Is"
          duration="Local SEO Company"
          price="55555"
          tittle="Local SEO Services Company In India"
          features2="local business SEO strategy from RankON works like a magic for your local business and our local business SEO experts understand all the local SEO guidelines to rank your Business on top for its local searches."
          features1="Local SEO Company in India- RankON Technologies offers Local Business SEO Services at very low prices. As a leading local SEO service provider in India, our team at RankON has been helping local businesses to rank on the first page of Google on Google map and organic local search results for the past 8 years."
        />
        <div className='flex items-center justify-center xl:mt-[120px] mt-[60px]'>
          <div className=' w-full'>
            <h1 className='text-gray-300 text-2xl xl:text-3xl mt-4 font-bold text-center'>Would You Like To Discuss Your Project With Our Experts?</h1>
            <p className=' text-[1.1rem] leading-7 text-gray-500 text-center  my-5 mx-10'>Check out some of the precious clients we have helped with Digital Marketing and Website Development Services.</p>
            <Logoslider />
          </div>
        </div>
        <div className='xl:flex flex-rowxl:mt-[120px] mt-[60px] justify-around'>
          <div className='xl:w-[50%] w-full'>
            <img src={img1} className='' />
          </div>
          <div className='xl:w-[50%] w-full'>
            <h2 className='font-bold items-start xl:items-start justify-start xl:justify-start text-gray-300 text-3xl'>Affordable Local SEO Services</h2>
            <p className=' text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-start text-gray-500 text-start xl:text-start mt-10'>Did you know that a lot of your customers are just around you, and you just need to get them aware of your products and/or services for outcomes? If you didn’t, now is the time to act fast and get quality local SEO services in India and obtain lots of customers.</p>
            <p className=' text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-start text-gray-500 text-start xl:text-start mt-10'>‘Blue soltech’ has brought you the most sophisticated search engine optimization packages to help you. We will do high-quality local citations to increase your Google map rankings in your area. </p>
            <p className=' text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-start text-gray-500 text-start xl:text-start mt-10'>Blue soltech is one of the most reputed local business SEO agencies in India which has a stronghold in not only listing your business for local searches but also creating your strong online presence with its small business SEO campaign.</p>
          </div>
        </div>
        <div className='xl:flex flex-row xl:mt-[120px] mt-[60px] justify-between items-start'>
          <div className='xl:w-[50%] w-full'>
            <h2 className='font-bold items-start xl:items-start justify-start xl:justify-start text-gray-300 text-3xl'>How Local SEO Services Help?</h2>
            <p className=' text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-start text-gray-500 text-start xl:text-start mt-10'>Suppose, you are a local business owner that offers services to local buyers only then local SEO services can help you to rank your website and Google My Business profile on Google first page results. Still, confused?</p>
            <p className=' text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-start text-gray-500 text-start xl:text-start mt-10'>Ok! let’s get deeper! If you are a plumber having a store in Delhi so local SEO services will help you to rank your website and Google my business listing on the first page of Google when someone searches for Plumbers in Delhi.</p>
            <p className=' text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-start text-gray-500 text-start xl:text-start mt-10'>Local SEO is totally different from national or eCommerce SEO so always trust a Local SEO company for your Local SEO campaign.</p>
          </div>
          <div className='xl:w-[50%] w-full flex justify-end'>
            <img src={img1} className='gap-10' />
          </div>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='text-gray-300 text-2xl  xl:text-3xl mt-4 font-bold text-center'>What Exactly You Get With Our Local SEO Services In India?</h1>
          <p className=' text-[1.1rem] leading-7  items-start xl:items-center justify-start xl:justify-end text-gray-500 text-start xl:text-center mt-7 text-2xl'>Blue soltech’ Offers All-Inclusive Local SEO Packages That Contain The Following:</p>
          <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 text-sm justify-between mt-11'>
            <div className='w-[90%] xl:w-[400px] h-fit xl:h-[350px] md:h-fit bg-black border-gray-500 mx-auto hover:border-2 p-4 m-2'>
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-black">
                  <FaUser size={24} />
                </div>
              </div>
              <h1 className='text-gray-300 text-2xl mt-4 font-bold text-center'>Google My Business Setup</h1>
              <ul className='mt-6 text-gray-500 text-start px-14 text-[1.1rem] leading-7 list-disc'>
                <li> NAP Syncing</li>
                <li> Geotagging Photos</li>
                <li> Business Description</li>
                <li> Service Area</li>
                <li> Business Category</li>
              </ul>
            </div>
            <div className='w-[90%] xl:w-[400px] h-fit xl:h-[350px] md:h-fit bg-black border-gray-500 mx-auto hover:border-2 p-4 m-2'>
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-black">
                  <FaUser size={24} />
                </div>

              </div>
              <h1 className='text-gray-300 text-2xl mt-4 font-bold text-center'>Local SEO Analysis</h1>
              <ul className='mt-6 text-gray-500 text-start px-14 text-[1.1rem] leading-7 list-disc'>
                <li> Analyzing your local markets</li>
                <li> Competitor Citation Audit</li>
                <li> Competitor Backlink Audit</li>
                <li> Analyzing the competition</li>
                <li> Google My Business Audit</li>
              </ul>
            </div>
            <div className='w-[90%] xl:w-[400px] h-fit xl:h-[350px] md:h-fit bg-black border-gray-500 mx-auto hover:border-2 p-4 m-2'>
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-black">
                  <FaUser size={24} />
                </div>

              </div>
              <h1 className='text-gray-300 text-2xl mt-4 font-bold text-center'>Google My Business Setup</h1>
              <ul className='mt-6 text-gray-500 text-start px-14 text-[1.1rem] leading-7 list-disc'>
                <li> NAP Syncing</li>
                <li> Geotagging Photos</li>
                <li> Business Description</li>
                <li> Service Area</li>
                <li> Business Category</li>
              </ul>
            </div>
            <div className='w-[90%] xl:w-[400px] h-fit xl:h-[350px] md:h-fit bg-black border-gray-500 mx-auto hover:border-2 p-4 m-2'>
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-black">
                  <FaUser size={24} />
                </div>

              </div>
              <h1 className='text-gray-300 text-2xl mt-4 font-bold text-center'>Tracking & Reporting</h1>
              <ul className='mt-6 text-gray-500 text-start px-14 text-[1.1rem] leading-7 list-disc'>
                <li> Tracking The Citations</li>
                <li> Observing The Local Traffic</li>
                <li> Observing Competitor Activities</li>
                <li> Detailed Report And Support</li>
              </ul>
            </div>
            <div className='w-[90%] xl:w-[400px] h-fit xl:h-[350px] md:h-fit bg-black border-gray-500 mx-auto hover:border-2 p-4 m-2'>
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-black">
                  <FaUser size={24} />
                </div>

              </div>
              <h1 className='text-gray-300 text-2xl mt-4 font-bold text-center'>NAP Syndication</h1>
              <ul className='mt-6 text-gray-500 text-start px-14 text-[1.1rem] leading-7 list-disc'>
                <li> Building Local Citations</li>
                <li> Finding Local Bloggers for free or sponsored listing</li>
              </ul>
            </div>
            <div className='w-[90%] xl:w-[400px] h-fit xl:h-[350px] md:h-fit bg-black border-gray-500 mx-auto hover:border-2 p-4 m-2'>
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-black">
                  <FaUser size={24} />
                </div>

              </div>
              <h1 className='text-gray-300 text-2xl mt-4 font-bold text-center'>Planning & Brain Storming</h1>
              <ul className='mt-6 text-gray-500 text-start px-14 text-[1.1rem] leading-7 list-disc'>
                <li> Preparing Next Month Plan</li>
                <li> Consulting</li>
                <li> Implementation</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='text-gray-300 text-2xl xl:text-3xl mt-4 font-bold text-center'>What Is The Importance Of</h1>
          <p className=' text-[1.1rem] leading-7 items-start xl:items-center justify-start xl:justify-end text-gray-500 text-start xl:text-center mt-2 font-bold text-3xl'>Local SEO Services?</p>
          <p className=' text-[1.1rem] leading-7  items-start xl:items-center justify-start xl:justify-end text-gray-500 text-start xl:text-center mt-7'>For any business that wants to succeed in the modern world, Local SEO services are an absolute must. It’s no secret that the vast majority of consumers use the internet to find products and services, and if your business doesn’t show up in search results, you’re missing out on a lot of potential customers.</p>
          <p className=' text-[1.1rem] leading-7 items-start xl:items-center justify-start xl:justify-end text-gray-500 text-start xl:text-center mt-7'>A Local SEO company can help make sure your website is optimized for local search results, making it more likely that potential customers in your area will find you. In addition to helping with search engine ranking, a Local SEO company can also help you create targeted content and ads that will reach consumers in your area.</p>
          <p className=' text-[1.1rem] leading-7 items-start xl:items-center justify-start xl:justify-end text-gray-500 text-start xl:text-center mt-7'>If you want your business to thrive, invest in Local SEO services. A reputable Local SEO company can help you achieve better visibility online, leading to more customers and more revenue for your business.</p>
        </div>
        <div className='xl:flex flex-row xl:mt-[120px] mt-[60px] justify-around'>
          <div className='xl:w-[50%] w-full'>
            <img src={img1} className='' />
          </div>
          <div className='xl:w-[50%] w-full'>
            <h1 className='text-gray-300 text-2xl xl:text-3xl mt-4 font-bold text-center'>Why Should You Hire A Local SEO Services Company?</h1>
            <p className=' text-[1.1rem] leading-7  items-start xl:items-start justify-start xl:justify-start text-gray-500 text-start xl:text-start mt-10'>A local SEO services company helps you to optimise your website and Google my business listing for better local rankings.</p>
            <p className=' text-[1.1rem] leading-7  items-start xl:items-start justify-start xl:justify-start text-gray-500 text-start xl:text-start mt-10'>Our Local SEO Experts at RankON Technologies have been helping local businesses to get the first page rankings for the past 7 years.</p>
            <p className=' text-[1.1rem] leading-7  items-start xl:items-start justify-start xl:justify-start text-gray-500 text-start xl:text-start mt-10'>We understand all the local SEO guidelines to provide you with quick local search engine rankings for your business.</p>
          </div>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='text-gray-300 text-2xl xl:text-3xl mt-4 font-bold text-center'>How Do We Optimize Your Local Business Website For Better Local SEO <br></br> Results?</h1>
          <p className='text-[1.1rem]  items-start xl:items-center justify-start xl:justify-end text-gray-500 text-start xl:text-center mt-7 leading-7'>Our team of Local SEO consultants at RankON Technologies have been providing local SEO services for business for the past 7 years and we understand and create the best local business SEO strategy no matter if it’s Pigeons and Possums. We always follow local SEO guidelines to provide your local business with quick and long term growth.</p>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='text-gray-300 text-2xl xl:text-3xl mt-4 font-bold text-center'>How Do We Optimize Your Local Business Website For Better Local SEO <br></br>Results?</h1>
          <p className=' text-[1.1rem] leading-7  items-start xl:items-start justify-start xl:justify-start text-gray-500 text-start xl:text-start mt-10'>Our team of Local SEO consultants at Blue soltech have been providing local SEO services for business for the past 7 years and we understand and create the best local business SEO strategy no matter if it’s Pigeons and Possums. We always follow local SEO guidelines to provide your local business with quick and long term growth.</p>
        </div>
        <Result />
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='text-gray-300 text-2xl xl:text-3xl mt-4 font-bold text-center'>Our Local Business SEO Services Help You To Build</h1>
          <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 text-sm justify-between mt-11'>
            <div className='w-[90%] xl:w-[350px] h-[300px] bg-black justify-center items-center mx-auto m-2 overflow-hidden p-4 border-gray-500 hover:border-2'>
              <h1 className='text-gray-300 text-xl mt-4 font-bold '>Local SEO Friendly URLs</h1>
              <p className='text-gray-500 mt-4 text-[1.1rem] leading-7'>URLs play a very important role in Local Business SEO and if you are not aware of this then ask your local SEO service provider. Our Local SEO experts create URLs that have your business location in them.</p>
            </div>
            <div className='w-[90%] xl:w-[350px] h-[300px] bg-black justify-center items-center mx-auto m-2 overflow-hidden p-4 border-gray-500 hover:border-2'>
              <h1 className='text-gray-300 text-xl mt-4 font-bold '>Content Marketing</h1>
              <p className='text-gray-500 mt-4 text-[1.1rem] leading-7'>We create local SEO-optimized content. Our Local SEO agency has a team of expert content writers who write local SEO content for our clients.  We also help our clients with content marketing services.</p>
            </div>
            <div className='w-[90%] xl:w-[350px] h-[300px] bg-black justify-center items-center mx-auto m-2 overflow-hidden p-4 border-gray-500 hover:border-2'>
              <h1 className='text-gray-300 text-xl mt-4 font-bold '>Google Map Listing</h1>
              <p className='text-gray-500 mt-4 text-[1.1rem] leading-7'>Google my business is a FREE service offered by Google to help local businesses set up a Google my business listing to show their local business information on Google when someone searches for that business.</p>
            </div>
            <div className='w-[90%] xl:w-[350px] h-[300px] bg-black justify-center items-center mx-auto m-2 overflow-hidden p-4 border-gray-500 hover:border-2'>
              <h1 className='text-gray-300 text-xl mt-4 font-bold '>Local Citations Building</h1>
              <p className='text-gray-500 mt-4 text-[1.1rem] leading-7'>Local citations help to create local business profiles on local directories like Yelp, Manta, Yellow Pages, etc. </p>
            </div>
            <div className='w-[90%] xl:w-[350px] h-[300px] bg-black justify-center items-center mx-auto m-2 overflow-hidden p-4 border-gray-500 hover:border-2'>
              <h1 className='text-gray-300 text-xl mt-4 font-bold '>Local Backlinks</h1>
              <p className='text-gray-500 mt-4 text-[1.1rem] leading-7'>Local backlinks from Local resources like news publishers. classifieds websites, and backlinks from local blogs help you o build local signals and it helps you to get better local SEO rankings.</p>
            </div>
            <div className='w-[90%] xl:w-[350px] h-[300px] bg-black justify-center items-center mx-auto m-2 overflow-hidden p-4 border-gray-500 hover:border-2'>
              <h1 className='text-gray-300 text-xl mt-4 font-bold '>Reviews & Ratings</h1>
              <p className='text-gray-500 mt-4 text-[1.1rem] leading-7'>Our local SEO services help you to get and track reviews from your customers and we track reviews on local directories to help your business build a better online reputation.</p>
            </div>
          </div>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='text-gray-300 text-2xl  xl:text-3xl mt-4 font-bold text-center'>Why Choose Our Local SEO Agency In India?</h1>
          <p className=' text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-start text-gray-500 text-start xl:text-start mt-10'>Blue soltech is a team of expert Local Business SEO consultants who understand everything about Local SEO optimization. After 8 years of successful SEO industry experience, our SEO experts started RankON Technologies to help local businesses get the best Local SEO services at affordable prices.</p>
          <p className=' text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-start text-gray-500 text-start xl:text-start mt-10'>That’s why our SEO Packages are very affordable so every single business can afford them. Our SEO packages are affordable but it does not mean that we will compromise on quality. We always focus on quality and never do any low-quality work or use any shortcut to provide you with quick rankings. We use premium SEO tools for every process. Our SEO experts are friendly with keyword research tools, onpage SEO tools and other Technical SEO tools to optimize and rank websites.</p>
          <p className=' text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-start text-gray-500 text-start xl:text-start mt-10'>Surprisingly, all such services come under a single, pocket-friendly local SEO service package and are enough to offer great outcomes in time.</p>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='text-gray-300 text-2xl  xl:text-3xl mt-4 font-bold text-center'>How Does A Local SEO Company Help?</h1>
          <p className=' text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-start text-gray-500 text-start xl:text-start mt-10'>If you have a local business and want to rank on Google Maps and google first page rankings then you must follow the Local SEO guidelines to make your local business website optimized for better local searches. Here are a few Local SEO strategies that our Local SEO Experts follow to rank local businesses on the first page.</p>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='text-gray-300 text-2xl  xl:text-3xl mt-4 font-bold text-center'>Google My Business Listing Optimization</h1>
          <p className=' text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-start text-gray-500 text-start xl:text-start mt-10'>Google my business profile is a FREE service offered by Google. It helps you to set up a Google my business profile where you will be able to show your business details like Name, Phone, Address, business photos and social media profiles to your customers. You will also be able to post regular updates as you do on your social media channels to share updates regarding your business and offerings.</p>
          <div className='w-[30%] h-[100%] border-gray-500 border-2 justify-center items-center text-center mx-auto m-2 overflow-hidden'>
            <img src={img1} />
          </div>
          <p className=' text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-start text-gray-500 text-start xl:text-start mt-10'>You may have noticed Google’s three-pack listing during your search. if not then don’t worry. Basically, when you type any local keyword like digital marketing company near me then you may find some paid ads on the top and 3 Google listings below those Google ads results. Have a look at the below-given picture of a Google three-pack listing example.</p>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='text-gray-300 text-2xl xl:text-3xl mt-4 font-bold text-center'>Optimize Your Website For Better Local SEO</h1>
          <p className=' text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-start text-gray-500 text-start xl:text-start mt-10'>Having a professional local business website is always a good asset that you can add to your business.</p>
          <p className=' text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-start text-gray-500 text-start xl:text-start mt-10'>You can hire Local SEO experts to optimize your website to rank higher in Google searches. A Local SEO professional will follow the search engine guidelines and make required changes to increase its local relevancy. Local SEO experts will do keyword research to find out the best local searches and optimize your website for those local keywords in your local SEO campaign.</p>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='text-gray-300 text-2xl xl:text-3xl mt-4 font-bold text-center'>Building Local Citations And Backlinks From Local Websites</h1>
          <p className=' text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-start text-gray-500 text-start xl:text-start mt-10'>Offpage SEO or Link building should also be a part of your Local SEO campaign. In this process, your local SEO professionals will create backlinks from local publishers’ websites and also build local citations from local directories.</p>
          <p className=' text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-start text-gray-500 text-start xl:text-start mt-10'>Local citations help you to rank on Google’s three-pack listing if done right and also help you to build a better local presence on websites like Yelp, Yellow pages, manta and similar local directories.</p>
          <p className=' text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-start text-gray-500 text-start xl:text-start mt-10'>Your NAP details must be the same everywhere like website, Google my business listing and local directories for better NAP syndication.</p>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='text-gray-300 text-2xl xl:text-3xl mt-4 font-bold text-center'>Getting Reviews, Reply To The Reviews, And Answering Questions</h1>
          <p className=' text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-start text-gray-500 text-start xl:text-start mt-10'>Now, when you have set up the Google my business profile then you must ask your customers to rate your services. You can also ask your customers to mention the services you have provided to them to make your reviews optimized for keywords.</p>
          <p className=' text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-start text-gray-500 text-start xl:text-start mt-10'>You can also reply to the customer’s reviews to let them know that you really care about your customers and business. Also, monitor the questions your customers ask in Google my business listing and try to answer them to make your listing active and helpful for Google users.</p>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='text-gray-300 text-2xl xl:text-3xl mt-4 font-bold text-center'>What Are The Benefits Of Local SEO Services?</h1>
          <p className=' text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-start text-gray-500 text-start xl:text-start mt-10'>If you are new to SEO then asking why local SEO is important is obvious. Being a Local SEO company, we always guide our clients and answer every single question related to their SEO project.</p>
          <p className=' text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-start text-gray-500 text-start xl:text-start mt-10'>There are many benefits of Local SEO services for your business. Have a look at the below-given advantages of Local SEO services.</p>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='text-gray-300 text-2xl xl:text-3xl mt-4 font-bold text-center'>It Helps You TO Drive Local Customers For Your Business</h1>
          <p className=' text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-start text-gray-500 text-start xl:text-start mt-10'>People trust local services providers for any services and when they search for any services or products then it’s Google’s Local SEO Algo that shows them the Google three-pack listing and the first page results to them.</p>
          <p className=' text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-start text-gray-500 text-start xl:text-start mt-10'>Local SEO services help you get the top Google map ranking or Google three-pack listing so your potential users can easily find your business and contact you. This is how Local SEO services help you to increase your local customer base.</p>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='text-gray-300 text-2xl xl:text-3xl mt-4 font-bold text-center'>Local SEO Services Increase Your Website's Traffic</h1>
          <p className=' text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-start text-gray-500 text-start xl:text-start mt-10'>Local SEO services help your website rank and get all the traffic from local searches. Most of the time people don’t bother to visit Google’s second-page results so if your local business ranks on the first page then you will get those clicks and your website will get more exposure.</p>
          <p className=' text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-start text-gray-500 text-start xl:text-start mt-10'>You can link your website to your Google my business listing. for more details, visit Google’s guide to set up Google my business profile.</p>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='text-gray-300 text-2xl xl:text-3xl mt-4 font-bold text-center'>Local SEO Helps You To Get More Conversions & Leads</h1>
          <p className=' text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-start text-gray-500 text-start xl:text-start mt-10'>As we stated in the previous point, you get more traffic when you rank on top of Google Maps and when people always like to hire Local services providers for their jobs. Local SEO results also look great and increase the chances of conversions. So these are the benefits of Local SEO services. </p>
        </div>
        <Video1 />
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='text-gray-300 text-2xl xl:text-3xl mt-4 font-bold text-center'>Local SEO Helps You To Get More Conversions & Leads</h1>
          <div className='bg-white w-full h-[340px] m-10 rounded-sm mx-auto'>
            <img src='' alt='no-video' />
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 text-sm justify-between mt-11 mx-auto'>
            <div className='h-fit w-[90%] bg-black mx-auto m-3'>
              <div className='bg-white w-[90%] h-[300px] rounded-sm mx-auto mt-2'>
                <img src="" alt='no-video' />
              </div>
              <div className='m-5'>
                <h1 className='text-gray-300 text-2xl mt-4 font-bold text-center'>White Hat SEO</h1>
                <p className=' text-[1.1rem] leading-7 items-center xl:items-start  xl:justify-start text-gray-500 text-start xl:text-start mt-4 justify-center'>There are many SEO companies offering shortcuts to get quick results so you must be aware of their SEO strategies.</p>
              </div>
            </div>
            <div className='h-fit w-[90%] bg-black mx-auto m-3'>
              <div className='bg-white w-[90%] h-[300px] rounded-sm mx-auto mt-2'>
                <img src="" alt='no-video' />
              </div>
              <div className='m-5'>
                <h1 className='text-gray-300 text-2xl mt-4 font-bold text-center'>Proof Of Work And Rankings</h1>
                <p className=' text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-start text-gray-500 text-start xl:text-start mt-4'>A good local SEO company will show you the proof of their work and how did they help the client to get better results.</p>
              </div>
            </div>
            <div className='h-fit w-[90%] bg-black mx-auto m-3'>
              <div className='bg-white w-[90%] h-[300px] rounded-sm mx-auto mt-2'>
                <img src="" alt='no-video' />
              </div>
              <div className='m-5'>
                <h1 className='text-gray-300 text-2xl mt-4 font-bold text-center'>Pricing</h1>
                <p className=' text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-start text-gray-500 text-start xl:text-start mt-4'>Budget is also a factor for you to make your Local SEO campaign fruitful. SEO takes time so you must hire affordable SEO service providers.</p>
              </div>
            </div>
          </div>
        </div>
        <Request tittle="How Much Do Local SEO Cost?" content="Local SEO cost depends on many factors and there is no any fixed pricing for Local SEO services." />
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='text-gray-300 text-2xl  xl:text-3xl mt-4 font-bold text-center'>Frequently Asked Questions</h1>
          <Questions faqs={faqs} />
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='text-gray-300 text-2xl xl:text-3xl mt-4 font-bold text-center'>Social Media Marketing Training Resources</h1>
          <Slick />
        </div>
        <Happy_client />

      </div>
    </div>
    </>
  )
}

export default Local_business_seo