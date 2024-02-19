import React from 'react'
import img1 from '../../../assets/img/vision.png'
import Services_first from '../../../component/Services_first'
import Result from '../../../component/Result'
import Logoslider from '../../../component/Logoslider'
import Video1 from '../../../component/Video1'
import Slick from '../../../component/Slick'
import Questions from '../../../component/Questions'
import Happy_client from '../../../component/About/Happy_client'

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
    answer: [
      "SEO is one of the most important aspects of online marketing. It can help you rank higher in search engine results pages, which can lead to more website visitors and more customers. If you’re looking for an SEO package, you may be wondering how much they cost.",
      "SEO packages vary in price, depending on the size and complexity of the project. Generally, smaller projects will cost less than larger ones. You can expect to pay anywhere from several hundred dollars to several thousand dollars for an SEO package.",
      "However, it’s important to remember that SEO is an ongoing process, and you should expect to pay monthly fees for maintenance and updates. The cost of an SEO package can be a good investment in your business’ success."
    ]
  },
  {
    question: "Are SEO packages worth it?",
    answer: [
      "There are a lot of SEO packages on the market. But are they worth the investment?",
      "The answer to that question depends on your business. If you’re just starting out, an SEO package can be a great way to get your website ranked higher in search engines. And if you’re looking for ways to improve your website’s ranking, an SEO package is definitely worth considering.",
      "But if you’ve been in business for a while and have a well-established website, an SEO package might not offer enough value to justify the cost. In that case, it might be better to focus on other areas of your marketing strategy."
    ]
  },
  {
    question: "Is SEO needed monthly?",
    answer: [
      "SEO is not a one-time job. It’s an ongoing process that needs to be tweaked and adjusted as search engine algorithms change. That’s why most SEO professionals recommend monthly SEO services.",
      "Monthly SEO can help ensure your website is always optimized for the best possible search engine ranking. It also allows you to track your website’s progress and make necessary adjustments along the way.",
      "If you’re looking for long-term success with your website, monthly SEO is a must. It keeps your website on top of search engine results pages, helping you attract more visitors and boost your business."
    ]
  },
  {
    question: "Can I do SEO on my own?",
    answer: [
      "Yes, you can do SEO on your own, but it’s important to remember that it’s a long-term process that takes patience and diligence. Professional SEO services can help you stay on track and make sure your website is performing at its best.",
    ]
  },
  {
    question: "Should I hire someone to do my SEO?",
    answer: [
      "When it comes to SEO, there are a lot of things to think about. You need to make sure that your website is coded in a way that makes it easy for search engines to crawl, that you have quality content, and that you’re doing everything you can to get links from other websites. If all of this sounds like too much for you, or if you just don’t have the time to do it yourself, you may want to consider hiring an SEO agency.",
    ]
  },
];
const Small_business_seo = () => {
  return (
    <div className='bg-[#0F0E0E] xl:p-20 p-10 items-center'>
      <div className='md:w-[80%] w-auto mt-4 mx-auto'>
        <Services_first
          imgSrc={img1}
          btn_title="SEO Services in India"
          duration="Small Business SEO Company"
          tittle="Affordable SEO Services For Small Businesses In India"
          features1="Small Business SEO Company: The Smartest Yet Most Effective Means To Help Small Business Owners Thrive, Build Identity, And Grow ROI "
          features2="Small Business entails a huge proportion of the economy globally. But despite being a cornerstone in the development of a country, they are often subdued by large business owners or fail to gain customers’ trust. So, what’s the key? Small Business SEO services are the way through which small business owners can come on the top of SERPs, gain audience trust, draw conversions and grow ROI."
        />
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='text-gray-300 text-2xl xl:text-3xl mt-4 font-bold text-center'>Affordable SEO Services For Small Businesses In India</h1>
          <p className=' text-[1.1rem] leading-7 text-gray-500 text-center font-bold my-2'>Do you think large businesses steal all the limelight of the first page of Google Search Results by investing a big amount in paid advertising?</p>
          <p className=' text-[1.1rem] leading-7 text-gray-500 text-center font-bold my-2'>Affordable Small Business SEO Services from Blue soltech in India Can Help Get You the Same Exposure at Lesser Costs.</p>
          <p className=' text-[1.1rem] leading-7 text-gray-500 text-start mt-7'>We are a small business SEO Company in India that understands the difficulties and struggles of small businesses in this competitive market.</p>
          <p className=' text-[1.1rem] leading-7 text-gray-500 text-start my-5'>As a business, we understand that there are certain administrative, payroll, rental and other expenses that make it difficult for a small business owner to invest for marketing and promotional purposes. And, here’s where they stop growing even before starting to grow! Because in today’s digitalized world one who stays in front is the one who grows. Hence, if you can’t invest then you must forget to grow.</p>
          <p className=' text-[1.1rem] leading-7 text-gray-500 text-start my-5'>But SEO is an exception! As a small business SEO company in India, we have helped thousands of small business owners grow and are still working.</p>
        </div>
        <Result />
        <div className='flex items-center justify-center xl:mt-[120px] mt-[60px]'>
          <div className=' w-full'>
            <h1 className='text-gray-300 text-2xl xl:text-3xl mt-4 font-bold text-center'>Our Agency Clients</h1>
            <p className=' text-[1.1rem] leading-7 text-gray-500 text-center  my-5 mx-10'>Check out some of the precious clients we have helped with Digital Marketing and Website Development Services.</p>
            <Logoslider />
          </div>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='text-gray-300 text-2xl xl:text-3xl mt-4 font-bold text-center'>What Is The Importance Of SEO Services For Small Businesses?</h1>
          <div className='xl:flex flex-row mt-9 justify-around'>
            <div className='xl:w-[50%] w-full'>
              <p className='text-[1.1rem] leading-7 text-gray-500 text-start my-5 font-bold'>Get To Know From The Professional Small Business SEO Company In India</p>
              <p className='text-[1.1rem] leading-7 text-gray-500 text-start my-5'>As a provider of Small Business SEO services, we have seen business owners comparing themselves with the Internet giants like Amazon or Flipkart. And that can be depressing as well! But what we suggest is that this shouldn’t be the thing, because, Google has already set an arena where both the giant businesses as well as the smaller ones can co-exist.</p>
              <p className='text-[1.1rem] leading-7 text-gray-500 text-start my-5'>Small businesses get an added SEO advantage. They get to maintain their identity by forming a user-friendly website, searching potential customers and converting them, and building your website’s legitimacy.</p>
              <p className='text-[1.1rem] leading-7 text-gray-500 text-start my-5'>It helps small businesses to gain leads and convert them into customers, and then into returning ones.</p>
            </div>
            <div className='xl:w-[50%] w-full  flex justify-center xl:justify-center items-center overflow-hidden'>
              <iframe width="1236" height="350" src="https://www.youtube.com/embed/bucbImZ_IfQ" title="Phone पर Taarak किसे सुना रहा है Bhide और Popatlal की लड़ाई? | Taarak Mehta Ka Ooltah Chashmah" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>
          <p className=' text-[1.1rem] leading-7 text-gray-500 text-start my-5'>So, if you are a brick or mortar business, or a small e-commerce store, or give at-home electrical, plumbing, furnishing, salon services, then grow your website rankings with India’s finest Small Business SEO Company Rankon Technologies.</p>
        </div>
        <div className='mt-[60px] xl:mt-[120px]'>
          <h1 className='text-gray-300 text-2xl  xl:text-3xl mt-4 font-bold text-center'>Benefits Of Opting Us For Small Business Website SEO Services In India</h1>
          <p className='text-[1.1rem] leading-7 text-gray-500 text-center my-5'>There are hundreds of benefits of SEO services for small business owners. Let’s have a glance at each one of them:</p>
          <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 text-sm justify-between mt-11 mx-auto'>
            <div className='bg-black w-[90%] xl:w-[500px] h-fit xl:h-[600px] flex flex-col justify-center items-center shadow-2xl m-4 mx-auto  hover:border-2 border-gray-600 rounded-lg p-4'>
              <div className='h-fit w-fit flex justify-center items-center '>
                <img src={img1} alt='no_img' className='w-[70%] rounded-lg' />
              </div>
              <h1 className='text-gray-300 text-1xl xl:text-2xl mt-4 font-bold text-center'>Focus On Your Forte</h1>
              <p className=' text-[1.1rem] leading-7 text-gray-500 text-start my-5'>Whether big or small, every business owner is busy. In such a fast-running schedule, it can be quite cumbersome for you to stay abreast of the changing SEO policies, Google Updates, etc. Being backed with a reliable SEO Company will assure you that your website’s SEO is being taken care of, whereas you can concentrate on your core business roles.</p>
            </div>
            <div className='bg-black w-[90%] xl:w-[500px] h-fit xl:h-[600px] flex flex-col justify-center items-center shadow-2xl m-4 mx-auto  hover:border-2 border-gray-600 rounded-lg p-4'>
              <div className='h-fit w-fit flex justify-center items-center'>
                <img src={img1} alt='no_img' className='w-[70%] rounded-lg' />
              </div>
              <h1 className='text-gray-300 text-1xl xl:text-2xl mt-4 font-bold text-center'>Get Results Faster</h1>
              <p className=' text-[1.1rem] leading-7 text-gray-500 text-start my-5'>Indeed SEO is slow, but it can be even slower when you choose to do it all by yourself. Hence, if you want to see faster outcomes, rely on a Small Business SEO Company. Regular performance tracks, monitoring keywords performance, regular reporting are some added benefits that you gain when contacting a Small Business SEO Company.</p>
            </div>
            <div className='bg-black w-[90%] xl:w-[500px] h-fit xl:h-[600px] flex flex-col justify-center items-center shadow-2xl m-4 mx-auto  hover:border-2 border-gray-600 rounded-lg p-4'>
              <div className='h-fit w-fit flex justify-center items-center'>
                <img src={img1} alt='no_img' className='w-[70%] rounded-lg' />
              </div>
              <h1 className='text-gray-300 text-1xl xl:text-2xl mt-4 font-bold text-center'>Analysis & Strategy</h1>
              <p className=' text-[1.1rem] leading-7 text-gray-500 text-start my-5'>When you take SEO help for Small businesses, an exhaustive check is performed on your website that determines the traffic of each page of your website, effective CTAs that captivate users to take action, conversion rates, and the demographic profile of the target audience and a lot more.</p>
            </div>
            <div className='bg-black w-[90%] xl:w-[500px] h-fit xl:h-[600px] flex flex-col justify-center items-center shadow-2xl m-4 mx-auto  hover:border-2 border-gray-600 rounded-lg p-4'>
              <div className='h-fit w-fit flex justify-center items-center'>
                <img src={img1} alt='no_img' className='w-[70%] rounded-lg' />
              </div>
              <h1 className='text-gray-300 text-1xl xl:text-2xl mt-4 font-bold text-center'>Grow Your Sales Funnel</h1>
              <p className=' text-[1.1rem] leading-7 text-gray-500 text-start my-5'>SEO doesn’t just drive visitors to your website, but it drives customers as well. When you opt for a professional Small Business SEO Company to perform your website’s SEO, you get a wholesome approach that is comprehensively based on the analytics.</p>
            </div>
          </div>
        </div>
        <div className='mt-[60px] xl:mt-[120px]'>
          <h1 className='text-gray-300 text-2xl  xl:text-3xl mt-4 font-bold text-center'>Small Business SEO Services In India</h1>
          <p className='text-[1.1rem] leading-7 text-gray-500 text-center my-5'>SEO has got many things! It is a diverse arena consisting of a lot of things that only an experienced and skilled SEO company like Blue soltech delivers. Get in touch with our Small Business SEO Company and get the following:</p>
          <h1 className='text-gray-300 text-2xl  xl:text-3xl mt-4 font-bold text-center'>OnPage SEO Services for Small Business</h1>
          <p className='text-[1.1rem] leading-7 text-gray-500 text-center my-5'>On-Page SEO accentuates your website’s crawl ability and scalability. When you contact Blue soltech for SEO services, we take care of the following aspects when performing On-Page SEO.</p>
        </div>
        <div className='mt-[60px] xl:mt-[120px]'>
          <h1 className='text-gray-300 text-2xl  xl:text-3xl mt-4 font-bold text-center'>Benefits Of Opting Us For Small Business Website SEO Services In India</h1>
          <p className='text-[1.1rem] leading-7 text-gray-500 text-center my-5'>There are hundreds of benefits of SEO services for small business owners. Let’s have a glance at each one of them:</p>
          <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 text-sm justify-between mt-11 mx-auto'>
            <div className='bg-black w-[90%] xl:w-[300px] h-fit xl:h-[500px] flex flex-col justify-center items-center shadow-2xl m-4 mx-auto  hover:border-2 border-gray-600 rounded-lg p-4'>
              <div className='h-fit w-fit flex justify-center items-center '>
                <img src={img1} alt='no_img' className='w-[70%] rounded-lg' />
              </div>
              <h1 className='text-gray-300 text-1xl xl:text-2xl mt-4 font-bold text-center'>Website Audit</h1>
              <p className=' text-[1.1rem] leading-7 text-gray-500 text-center my-5'>Our Small Business SEO Agency offers top quality website audits when you hire us for small business SEO services in India. We have expert website analysts who understand the features of a website that help small business website SEO.</p>
            </div>
            <div className='bg-black w-[90%] xl:w-[300px] h-fit xl:h-[500px] flex flex-col justify-center items-center shadow-2xl m-4 mx-auto  hover:border-2 border-gray-600 rounded-lg p-4'>
              <div className='h-fit w-fit flex justify-center items-center '>
                <img src={img1} alt='no_img' className='w-[70%] rounded-lg' />
              </div>
              <h1 className='text-gray-300 text-1xl xl:text-2xl mt-4 font-bold text-center'>Ui/UX Improvement</h1>
              <p className=' text-[1.1rem] leading-7 text-gray-500 text-center my-5'>The performance of the website is a lot determined by the User Experience it provides. We make sure if the graphics and content on the website are eye-catching and grasp user attention.</p>
            </div>
            <div className='bg-black w-[90%] xl:w-[300px] h-fit xl:h-[500px] flex flex-col justify-center items-center shadow-2xl m-4 mx-auto  hover:border-2 border-gray-600 rounded-lg p-4'>
              <div className='h-fit w-fit flex justify-center items-center '>
                <img src={img1} alt='no_img' className='w-[70%] rounded-lg' />
              </div>
              <h1 className='text-gray-300 text-1xl xl:text-2xl mt-4 font-bold text-center'>Regular Reporting</h1>
              <p className=' text-[1.1rem] leading-7 text-gray-500 text-center my-5'>Regular reporting is the most important part of any SEO campaign. Our small business SEO company in India offers on-time reporting to our clients.</p>
            </div>
            <div className='bg-black w-[90%] xl:w-[300px] h-fit xl:h-[500px] flex flex-col justify-center items-center shadow-2xl m-4 mx-auto  hover:border-2 border-gray-600 rounded-lg p-4'>
              <div className='h-fit w-fit flex justify-center items-center '>
                <img src={img1} alt='no_img' className='w-[70%] rounded-lg' />
              </div>
              <h1 className='text-gray-300 text-1xl xl:text-2xl mt-4 font-bold text-center'>Content Writing & Marketing</h1>
              <p className=' text-[1.1rem] leading-7 text-gray-500 text-center my-5'>A webpage is defined by the content it has. Hence, we determine whether or not each page of your webpage has sufficient, relevant, and keyword-optimised content.</p>
            </div>
            <div className='bg-black w-[90%] xl:w-[300px] h-fit xl:h-[500px] flex flex-col justify-center items-center shadow-2xl m-4 mx-auto  hover:border-2 border-gray-600 rounded-lg p-4'>
              <div className='h-fit w-fit flex justify-center items-center '>
                <img src={img1} alt='no_img' className='w-[70%] rounded-lg' />
              </div>
              <h1 className='text-gray-300 text-1xl xl:text-2xl mt-4 font-bold text-center'>Internal Linking Structure</h1>
              <p className=' text-[1.1rem] leading-7 text-gray-500 text-center my-5'>There is a big role of interlinking in SEO. Hence, we at RankON Technologies strive to create a strong network within your website to increase its performance.</p>
            </div>
            <div className='bg-black w-[90%] xl:w-[300px] h-fit xl:h-[500px] flex flex-col justify-center items-center shadow-2xl m-4 mx-auto  hover:border-2 border-gray-600 rounded-lg p-4'>
              <div className='h-fit w-fit flex justify-center items-center '>
                <img src={img1} alt='no_img' className='w-[70%] rounded-lg' />
              </div>
              <h1 className='text-gray-300 text-1xl xl:text-2xl mt-4 font-bold text-center'>Meta Tags Writing</h1>
              <p className=' text-[1.1rem] leading-7 text-gray-500 text-center my-5'>As an experienced Small Business SEO Company, we ensure each of your web pages has title tags, headers, image tags, meta descriptions that contain keywords being targeted.</p>
            </div>
          </div>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <div className='xl:flex flex-row mt-9 justify-around'>
            <div className='xl:w-[50%] w-full  flex justify-center xl:justify-center items-center overflow-hidden'>
              <img src={img1} alt="" />
            </div>
            <div className='xl:w-[50%] w-full'>
              <h1 className='text-gray-300 text-2xl xl:text-3xl mt-4 font-bold text-start'>Link Building Services For Small Businesses</h1>
              <p className='text-[1.1rem] leading-7 text-gray-500 text-start my-5 font-bold'>At Blue soltech, we employ various Off-Page SEO activities to rank keywords on the first page of search engines to increase traffic to your website. Link building And content marketing services help your website to rank higher and build a better online reputation and domain authority.</p>
              <button class='bg-transparent border-[1px] hover:text-black hover:bg-white transition-all duration-200 text-white font-bold py-2 px-4 rounded-md m-4'>Contact With us</button>
            </div>
          </div>
        </div>
        <div className='mt-[60px] xl:mt-[120px]'>
          <h1 className='text-gray-300 text-2xl  xl:text-3xl mt-4 font-bold text-center'>Here Are The Backlink Activities We Do To Help Your Small Business SEO Campaign.</h1>
          <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 text-sm justify-between mt-11 mx-auto'>
            <div className='bg-black w-[90%] xl:w-[400px] h-fit xl:h-[500px] flex flex-col justify-center items-center shadow-2xl m-4 mx-auto  hover:border-2 border-gray-600 rounded-lg p-4'>
              <div className='h-fit w-fit flex justify-center items-center '>
                <img src={img1} alt='no_img' className='w-[70%] rounded-lg' />
              </div>
              <h1 className='text-gray-300 text-1xl xl:text-2xl mt-4 font-bold text-center'>A Trusted Seo Agency In India</h1>
              <p className=' text-[1.1rem] leading-7 text-gray-500 text-center my-5'>Blue soltech is the No.1 SEO Agency in India. With over 9 years of experience, we have become a pioneer in the Indian SEO industry.</p>
            </div>
            <div className='bg-black w-[90%] xl:w-[400px] h-fit xl:h-[500px] flex flex-col justify-center items-center shadow-2xl m-4 mx-auto  hover:border-2 border-gray-600 rounded-lg p-4'>
              <div className='h-fit w-fit flex justify-center items-center '>
                <img src={img1} alt='no_img' className='w-[70%] rounded-lg' />
              </div>
              <h1 className='text-gray-300 text-1xl xl:text-2xl mt-4 font-bold text-center'>Exceptional Reviews And Testimonials</h1>
              <p className=' text-[1.1rem] leading-7 text-gray-500 text-center my-5'>It’s not us who are blowing our own trumpet, it is our clients as well and Google that is boasting and appreciating us.</p>
            </div>
            <div className='bg-black w-[90%] xl:w-[400px] h-fit xl:h-[500px] flex flex-col justify-center items-center shadow-2xl m-4 mx-auto  hover:border-2 border-gray-600 rounded-lg p-4'>
              <div className='h-fit w-fit flex justify-center items-center '>
                <img src={img1} alt='no_img' className='w-[70%] rounded-lg' />
              </div>
              <h1 className='text-gray-300 text-1xl xl:text-2xl mt-4 font-bold text-center'>Zillions Of Success Stories In Our Name</h1>
              <p className=' text-[1.1rem] leading-7 text-gray-500 text-center my-5'>Having been in the SEO industry for the past 9 years, we have attained an invincible position and surfeit of success in our name.</p>
            </div>
            <div className='bg-black w-[90%] xl:w-[400px] h-fit xl:h-[500px] flex flex-col justify-center items-center shadow-2xl m-4 mx-auto  hover:border-2 border-gray-600 rounded-lg p-4'>
              <div className='h-fit w-fit flex justify-center items-center '>
                <img src={img1} alt='no_img' className='w-[70%] rounded-lg' />
              </div>
              <h1 className='text-gray-300 text-1xl xl:text-2xl mt-4 font-bold text-center'>Specialized In Small Business Seo</h1>
              <p className=' text-[1.1rem] leading-7 text-gray-500 text-center my-5'>Our SEO experts have the specialization to help prosper small business owners through well-targeted, result-oriented, and fine-tuned SEO services.</p>
            </div>
            <div className='bg-black w-[90%] xl:w-[400px] h-fit xl:h-[500px] flex flex-col justify-center items-center shadow-2xl m-4 mx-auto  hover:border-2 border-gray-600 rounded-lg p-4'>
              <div className='h-fit w-fit flex justify-center items-center '>
                <img src={img1} alt='no_img' className='w-[70%] rounded-lg' />
              </div>
              <h1 className='text-gray-300 text-1xl xl:text-2xl mt-4 font-bold text-center'>Fit For Every Budget</h1>
              <p className=' text-[1.1rem] leading-7 text-gray-500 text-center my-5'>Our SEO Packages do not burn a hole in any pocket. Whether you are a small business owner or big, our SEO packages are for all!</p>
            </div>
            <div className='bg-black w-[90%] xl:w-[400px] h-fit xl:h-[500px] flex flex-col justify-center items-center shadow-2xl m-4 mx-auto  hover:border-2 border-gray-600 rounded-lg p-4'>
              <div className='h-fit w-fit flex justify-center items-center '>
                <img src={img1} alt='no_img' className='w-[70%] rounded-lg' />
              </div>
              <h1 className='text-gray-300 text-1xl xl:text-2xl mt-4 font-bold text-center'>One-On-One Consultation</h1>
              <p className=' text-[1.1rem] leading-7 text-gray-500 text-center my-5'>To us, customer satisfaction holds utmost importance. Hence, we provide end-to-end support at any time to our clients.</p>
            </div>
          </div>
        </div>
        <Video1 />
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='text-gray-300 text-2xl xl:text-3xl mt-4 font-bold text-center'>Reporting</h1>
          <p className='text-[1.1rem] leading-7 text-gray-500 text-center my-5 font-bold'>We update our clients on the performance of their sites. With the help of powerful SEO tools like Ahrefs, and Google Search Console, we keep them abreast of their website’s performance. </p>
          <h1 className='text-gray-300 text-2xl xl:text-3xl mt-4 font-bold text-center'>Let The Best Small Business SEO Company in India Have Your Back Choose RankON Technologies For Small Business SEO Services Today!</h1>
          <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 text-sm justify-between mt-11 mx-auto'>
            <div className='bg-black w-fit xl:w-[400px] h-fit xl:h-[200px] mx-auto p-4 hover:border-2 border-gray-600 rounded-lg m-2'>
              <div className='justify-start items-start text-start px-7'>
                <ul className='font-bold text-gray-500  list-disc'>
                  <li className='mt-2'>Sky Scrapper</li>
                  <li className='mt-2'>Broken Backlinks Building</li>
                  <li className='mt-2'>Resource Backlinking</li>
                  <li className='mt-2'>Guest Blogging</li>
                  <li className='mt-2'>Social Networking</li>
                </ul>
              </div>
            </div>
            <div className='bg-black w-fit xl:w-[400px] h-fit xl:h-[200px] mx-auto p-4 hover:border-2 border-gray-600 rounded-lg m-2'>
              <div className='justify-start items-start text-start px-7'>
                <ul className='font-bold text-gray-500  list-disc'>
                  <li className='mt-2'>Link Reclaim</li>
                  <li className='mt-2'>Backlinks from Local Websites</li>
                  <li className='mt-2'>Web 2.0 Submissions</li>
                  <li className='mt-2'>Local Citations</li>
                  <li className='mt-2'>Classifieds Ads Posting</li>
                </ul>
              </div>
            </div>
            <div className='bg-black w-fit xl:w-[400px] h-fit xl:h-[200px] mx-auto p-4 hover:border-2 border-gray-600 rounded-lg m-2'>
              <div className='justify-start items-start text-start px-7'>
                <ul className='font-bold text-gray-500  list-disc'>
                  <li className='mt-2'>Article Posting</li>
                  <li className='mt-2'>Video Creation</li>
                  <li className='mt-2'>Image Sharing</li>
                  <li className='mt-2'>Infographic Sharing Powerpoint sharing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-[60px] xl:mt-[120px]'>
          <h1 className='text-gray-300 text-2xl  xl:text-3xl mt-4 font-bold text-center'>Looking For Small Business SEO Services? Hire Us Now!</h1>
          <p className='text-[1.1rem] leading-7 text-gray-500 text-start my-5'>Blue soltech offers the best SEO Services for small businesses at the best prices. Our SEO packages are affordable and made for all sizes of businesses. We use the best SEO Tools, onpage SEO tools, Keyword Research Tools, And Technical SEO Tools to optimize your website for better SEO results. Contact Us Now!</p>
        </div>
        <div className='xl:mt-[120px] mt-[60px] '>
          <h1 className='text-gray-300 text-2xl  xl:text-3xl mt-4 font-bold text-center'>Frequently Asked Questions About Small Business SEO</h1>
          <Questions faqs={faqs} />

        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
        <h1 className='text-gray-300 text-2xl  xl:text-3xl mt-4 font-bold text-center'>Latest SEO Article</h1>
          <Slick />
        </div>
        <Happy_client/>
        
      </div>
    </div>
  )
}

export default Small_business_seo