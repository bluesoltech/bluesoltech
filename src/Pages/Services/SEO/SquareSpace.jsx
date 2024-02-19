import React from "react";
import Services_first from "../../../component/Services_first";
import img1 from "../../../assets/img/vision.png";
import Logoslider from "../../../component/Logoslider";
import { FaUser } from "react-icons/fa";
import Video1 from "../../../component/Video1";
import Request from "../../../component/Request";
import RequestAgain from "../../../component/RequestAgain";
import Questions from "../../../component/Questions";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Happy_client from "../../../component/About/Happy_client";
import { CgCarousel } from "react-icons/cg";

const faqs = [
  {
    question: "What is competitor analysis?",
    answer: [
      "Competitor analysis is the process of analyzing your competitors’ online presence to gain insights into their SEO strategy. This involves analyzing factors such as their website domain authority, content quality, backlink profile, loading speed, and keyword strategy.",
    ],
  },
  {
    question: "Why is competitor analysis important?",
    answer: [
      "Competitor analysis is important because it can help you identify areas where your own SEO strategy may be underperforming. By understanding what your competitors are doing well, you can make improvements to your own strategy and gain a competitive advantage.",
    ],
  },
  {
    question: "What factors should be considered in competitor analysis?",
    answer: [
      "Some of the key factors to consider in competitor analysis include website domain authority, content quality, backlink profile, loading speed, and keyword strategy. Other factors, such as social media presence and online reviews, may also be important depending on your industry.",
    ],
  },
  {
    question: "What tools can be used for competitor analysis?",
    answer: [
      "There are many tools available for competitor analysis, including SEMrush, Ahrefs, and Moz. These tools can provide insights into your competitors’ SEO strategy, including their keywords, backlinks, and content.",
    ],
  },
  {
    question: "Can I do SEO on my own?",
    answer: [
      "Yes, you can do SEO on your own, but it’s important to remember that it’s a long-term process that takes patience and diligence. Professional SEO services can help you stay on track and make sure your website is performing at its best.",
    ],
  },
  {
    question: "How often should competitor analysis be conducted?",
    answer: [
      "Competitor analysis should be conducted on a regular basis, as your competitors’ SEO strategy can change over time. Depending on your industry and the level of competition, it may be necessary to conduct competitor analysis on a monthly or quarterly basis.",
    ],
  },
];
const Googel = [
  {
    contents: [
      {
        content:
          "An SEO audit is a comprehensive evaluation of a website’s search engine optimization (SEO) performance. The purpose of an SEO audit is to identify areas of improvement, uncover issues that may be affecting a site’s visibility in search engine results, and provide recommendations for optimizing its overall SEO strategy.",
      },
      {
        content:
          "An SEO audit is a comprehensive evaluation of a website’s search engine optimization (SEO) performance. The purpose of an SEO audit is to identify areas of improvement, uncover issues that may be affecting a site’s visibility in search engine results, and provide recommendations for optimizing its overall SEO strategy.",
      },
      {
        content:
          "An SEO audit is a comprehensive evaluation of a website’s search engine optimization (SEO) performance. The purpose of an SEO audit is to identify areas of improvement, uncover issues that may be affecting a site’s visibility in search engine results, and provide recommendations for optimizing its overall SEO strategy.",
      },
    ],
    name: [
      {
        name: "SEO vs. PPC Advertising: Which Is Better for Your Business in 2024?",
      },
      {
        name: "SEO vs. PPC Advertising: Which Is Better for Your Business in 2024?",
      },
      {
        name: "SEO vs. PPC Advertising: Which Is Better for Your Business in 2024?",
      },
    ],
    imageSrc: [
      { imageSrc: { img1 } },
      { imageSrc: { img1 } },
      { imageSrc: { img1 } },
    ],
  },
  {
    contents: [
      {
        content:
          "An SEO audit is a comprehensive evaluation of a website’s search engine optimization (SEO) performance. The purpose of an SEO audit is to identify areas of improvement, uncover issues that may be affecting a site’s visibility in search engine results, and provide recommendations for optimizing its overall SEO strategy.",
      },
      {
        content:
          "An SEO audit is a comprehensive evaluation of a website’s search engine optimization (SEO) performance. The purpose of an SEO audit is to identify areas of improvement, uncover issues that may be affecting a site’s visibility in search engine results, and provide recommendations for optimizing its overall SEO strategy.",
      },
      {
        content:
          "An SEO audit is a comprehensive evaluation of a website’s search engine optimization (SEO) performance. The purpose of an SEO audit is to identify areas of improvement, uncover issues that may be affecting a site’s visibility in search engine results, and provide recommendations for optimizing its overall SEO strategy.",
      },
    ],
    name: [
      {
        name: "SEO vs. PPC Advertising: Which Is Better for Your Business in 2024?",
      },
      {
        name: "SEO vs. PPC Advertising: Which Is Better for Your Business in 2024?",
      },
      {
        name: "SEO vs. PPC Advertising: Which Is Better for Your Business in 2024?",
      },
    ],
    imageSrc: [
      { imageSrc: { img1 } },
      { imageSrc: { img1 } },
      { imageSrc: { img1 } },
    ],
  },
  {
    contents: [
      {
        content:
          "An SEO audit is a comprehensive evaluation of a website’s search engine optimization (SEO) performance. The purpose of an SEO audit is to identify areas of improvement, uncover issues that may be affecting a site’s visibility in search engine results, and provide recommendations for optimizing its overall SEO strategy.",
      },
      {
        content:
          "An SEO audit is a comprehensive evaluation of a website’s search engine optimization (SEO) performance. The purpose of an SEO audit is to identify areas of improvement, uncover issues that may be affecting a site’s visibility in search engine results, and provide recommendations for optimizing its overall SEO strategy.",
      },
      {
        content:
          "An SEO audit is a comprehensive evaluation of a website’s search engine optimization (SEO) performance. The purpose of an SEO audit is to identify areas of improvement, uncover issues that may be affecting a site’s visibility in search engine results, and provide recommendations for optimizing its overall SEO strategy.",
      },
    ],
    name: [
      {
        name: "SEO vs. PPC Advertising: Which Is Better for Your Business in 2024?",
      },
      {
        name: "SEO vs. PPC Advertising: Which Is Better for Your Business in 2024?",
      },
      {
        name: "SEO vs. PPC Advertising: Which Is Better for Your Business in 2024?",
      },
    ],
    imageSrc: [
      { imageSrc: { img1 } },
      { imageSrc: { img1 } },
      { imageSrc: { img1 } },
    ],
  },
  {
    contents: [
      {
        content:
          "An SEO audit is a comprehensive evaluation of a website’s search engine optimization (SEO) performance. The purpose of an SEO audit is to identify areas of improvement, uncover issues that may be affecting a site’s visibility in search engine results, and provide recommendations for optimizing its overall SEO strategy.",
      },
      {
        content:
          "An SEO audit is a comprehensive evaluation of a website’s search engine optimization (SEO) performance. The purpose of an SEO audit is to identify areas of improvement, uncover issues that may be affecting a site’s visibility in search engine results, and provide recommendations for optimizing its overall SEO strategy.",
      },
      {
        content:
          "An SEO audit is a comprehensive evaluation of a website’s search engine optimization (SEO) performance. The purpose of an SEO audit is to identify areas of improvement, uncover issues that may be affecting a site’s visibility in search engine results, and provide recommendations for optimizing its overall SEO strategy.",
      },
    ],
    name: [
      {
        name: "SEO vs. PPC Advertising: Which Is Better for Your Business in 2024?",
      },
      {
        name: "SEO vs. PPC Advertising: Which Is Better for Your Business in 2024?",
      },
      {
        name: "SEO vs. PPC Advertising: Which Is Better for Your Business in 2024?",
      },
    ],
    imageSrc: [
      { imageSrc: { img1 } },
      { imageSrc: { img1 } },
      { imageSrc: { img1 } },
    ],
  },
];
const SquareSpace = () => {
  return (
    <>
      <div className="bg-[#0F0E0E] p-20 items-center">
        <div className="md:w-[80%] w-auto mt-4 mx-auto">
          <Services_first
            imgSrc={img1}
            btn_title="Squarespace SEO Services in India"
            title="Squarespace SEO Company In India"
            duration="Squarespace SEO Company In India"
            tittle="Boost Your Squarespace Website Rankings With Best Squarespace SEO Services In India"
            features1="Are you looking for Squarespace SEO Services? We are a leading Squarespace SEO Company in India and we have worked with many Squarespace website owners and provided very good results. Must check our SEO packages or call us for FREE Squarespace SEO Consulting."
          />

          <div className="flex items-center justify-center lg:mt-24 sm:my-12">
            <div className=" w-5/6 sm:w-full">
              <h1 className="font-bold text-white text-[2rem] px-4 text-center mb-2">
                Our Agency Clients
              </h1>
              <p className=" text-[1.1rem] leading-7 text-gray-500 text-center my-5 mx-10">
                Check out some of the precious clients we have helped with
                Digital Marketing and Website Development Services.
              </p>
              <Logoslider />
            </div>
          </div>

          <div className="mt-24">
            <div className="flex items-start mt-6 lg:flex-row sm:flex-col sm:my-none md:flex-col">
              <div>
                <img
                  src=""
                  alt=""
                  className="h-[300px] w-[600px] bg-white lg:mt-2 sm:mt-0"
                />
              </div>
              <div className="sm:w-full lg:mx-0 lg:text-start md:mt-6 lg:my-0 sm:my-0 lg:ml-6">
                <p className=" text-gray-500 text-[1.1rem] leading-7 lg:px-4 sm:px-0 sm:my-2 lg:my-0">
                  Unlock the full potential of your Squarespace website with our
                  expert Squarespace SEO services. In the vast digital
                  landscape, standing out requires more than just a stunning
                  website – it demands strategic optimization to capture the
                  attention of search engines and potential visitors alike. Our
                  specialized team combines a deep understanding of the
                  Squarespace platform with advanced SEO techniques to elevate
                  your online presence, boost organic traffic, and drive
                  meaningful results.
                </p>
                <p className=" text-gray-500 text-[1.1rem] leading-7 my-2 lg:px-4 sm:px-0 sm:my-2 lg:mt-2 lg:mb-0">
                  At Blue Soltech we recognize that Squarespace is more than
                  just a website builder—it’s a powerful tool that, when
                  optimized effectively, can propel your business to new
                  heights. Our tailored Squarespace SEO strategies are crafted
                  to align seamlessly with the unique features and capabilities
                  of the Squarespace platform, ensuring maximum visibility and
                  discoverability for your website.
                </p>
              </div>
            </div>
          </div>
          <p className=" text-gray-500 text-[1.1rem] leading-7 lg:my-2 sm:my-0">
            Whether you’re a budding entrepreneur, a growing business, or an
            established brand, we’re here to optimize every facet of your
            Squarespace site. From comprehensive keyword research to on-page and
            technical optimizations, we meticulously craft strategies that align
            with your business goals and resonate with your target audience. Our
            approach is not one-size-fits-all; it’s a personalized SEO journey
            designed to unlock your website’s potential and place it at the
            forefront of relevant search results.
          </p>
          <p className=" text-gray-500 text-[1.1rem] leading-7 lg:my-2 sm:my-2">
            Join us as we embark on this collaborative journey to enhance your
            Squarespace website’s performance and achieve sustainable growth.
            Let’s harness the power of Squarespace and SEO to ensure your online
            presence reflects the true essence of your brand and captivates the
            audiences you seek to reach.
          </p>
          <p className=" text-gray-500 text-[1.1rem] leading-7 lg:my-2 sm:my-2">
            Ready to make your Squarespace website shine? Explore our range of
            Squarespace SEO services and let’s set the stage for your digital
            success. Check our SEO Packages now!
          </p>

          {/* ========================================================================== Importance ====================================================================== */}

          <div className="flex items-center justify-center lg:mt-36 sm:my-12 md:my-20">
            <div className=" w-5/6 sm:w-full">
              <h1 className="font-bold text-white text-[2rem] px-4 text-center mb-2">
                Why SEO For Squarespace Websites Is Important?
              </h1>
              <p className=" text-[1.1rem] leading-7 text-gray-500 text-center my-5 mx-10">
                SEO, or Search Engine Optimization, is crucial for any website,
                including those built on Squarespace. Squarespace is a popular
                website building platform known for its user-friendly interface
                and visually appealing designs. However, having a beautifully
                designed website is not enough to attract organic traffic and
                reach your target audience. Here’s why SEO is important for
                Squarespace websites:
              </p>
            </div>
          </div>

          <div className="grid lg:grid-rows-3 lg:grid-cols-3 lg:gap-y-10 lg:gap-x-8 sm:grid-rows-9 sm:grid-cols-1 sm:gap-2 md:grid-cols-2 md:grid-rows-6">
            <div className="flex items-center m-auto flex-col text-center sm:w-4/5 rounded-xl ease-linear hover:border-[1px] transition-all duration-300 hover:scale-105 p-4 hover:bg-black">
              <img
                src=""
                alt=""
                className="h-[217px] w-[217px] bg-white my-2"
              />
              <h5 className="text-white text-[1.5rem] my-2">
                Visibility & Ranking
              </h5>
              <p className="text-gray-500 text-[1.1rem] leading-7 my-2">
                SEO helps improve your website’s visibility in search engine
                results. By optimizing your website for relevant keywords and
                creating high-quality content, you increase the chances of
                ranking higher in search engine results pages (SERPs). Higher
                rankings mean more visibility and traffic.
              </p>
            </div>
            <div className="flex items-center m-auto flex-col text-center sm:w-4/5 rounded-xl ease-linear hover:border-[1px] transition-all duration-300 hover:scale-105 p-4 hover:bg-black sm:my-2">
              <img
                src=""
                alt=""
                className="h-[217px] w-[217px] bg-white my-2"
              />
              <h5 className="text-white text-[1.5rem] my-2">Organic Traffic</h5>
              <p className="text-gray-500 text-[1.1rem] leading-7 my-2">
                SEO focuses on attracting organic, non-paid traffic to your
                website. When people search for products, services, or
                information related to your business, SEO helps ensure that your
                Squarespace website is among the top results they see. Organic
                traffic is often more valuable and cost-effective compared to
                paid traffic.
              </p>
            </div>
            <div className="flex items-center m-auto flex-col text-center sm:w-4/5 rounded-xl ease-linear hover:border-[1px] transition-all duration-300 hover:scale-105 p-4 hover:bg-black sm:my-2">
              <img
                src=""
                alt=""
                className="h-[217px] w-[217px] bg-white my-2"
              />
              <h5 className="text-white text-[1.5rem] my-2">
                Better User Experience
              </h5>
              <p className="text-gray-500 text-[1.1rem] leading-7 my-2">
                SEO involves optimizing your website’s structure, content, and
                user interface to provide a better experience for visitors. A
                well-structured website with easy navigation and relevant
                content improves user satisfaction, which can lead to longer
                visits, lower bounce rates, and increased engagement.
              </p>
            </div>
            <div className="flex items-center m-auto flex-col text-center sm:w-4/5 rounded-xl ease-linear hover:border-[1px] transition-all duration-300 hover:scale-105 p-4 hover:bg-black">
              <img
                src=""
                alt=""
                className="h-[217px] w-[217px] bg-white my-2"
              />
              <h5 className="text-white text-[1.5rem] my-2">
                Targeted Audience Reach
              </h5>
              <p className="text-gray-500 text-[1.1rem] leading-7 my-2">
                Effective SEO strategies help target the right audience based on
                their search intent. By understanding your audience’s behavior
                and preferences, you can tailor your content and optimize your
                Squarespace website to meet their specific needs and interests.
              </p>
            </div>
            <div className="flex items-center m-auto flex-col text-center sm:w-4/5 rounded-xl ease-linear hover:border-[1px] transition-all duration-300 hover:scale-105 p-4 hover:bg-black">
              <img
                src=""
                alt=""
                className="h-[217px] w-[217px] bg-white my-2"
              />
              <h5 className="text-white text-[1.5rem] my-2">
                Credibility & Trust
              </h5>
              <p className="text-gray-500 text-[1.1rem] leading-7 my-2">
                Websites that rank higher in search results are often perceived
                as more credible and trustworthy by users. SEO helps establish
                your Squarespace website as a reliable source of information,
                products, or services in your industry, which can positively
                impact your brand’s reputation.
              </p>
            </div>
            <div className="flex items-center m-auto flex-col text-center sm:w-4/5 rounded-xl ease-linear hover:border-[1px] transition-all duration-300 hover:scale-105 p-4 hover:bg-black">
              <img
                src=""
                alt=""
                className="h-[217px] w-[217px] bg-white my-2"
              />
              <h5 className="text-white text-[1.5rem] my-2">
                Local Visibility
              </h5>
              <p className="text-gray-500 text-[1.1rem] leading-7 my-2">
                For businesses with physical locations, local SEO is crucial.
                Optimizing your Squarespace website for local search ensures
                that your business appears in local searches, helping attract
                nearby customers and driving foot traffic to your physical
                store.
              </p>
            </div>

            {/*  */}

            <div className="flex items-center m-auto flex-col text-center sm:w-4/5 rounded-xl ease-linear hover:border-[1px] transition-all duration-300 hover:scale-105 p-4 hover:bg-black">
              <img
                src=""
                alt=""
                className="h-[217px] w-[217px] bg-white my-2"
              />
              <h5 className="text-white text-[1.5rem] my-2">
                Cost-Effectiveness
              </h5>
              <p className="text-gray-500 text-[1.1rem] leading-7 my-2">
                While SEO does require an investment of time and effort, it’s a
                cost-effective marketing strategy in the long run. Once your
                Squarespace website is well-optimized and starts ranking higher,
                the organic traffic you receive doesn’t incur ongoing costs like
                paid advertising.
              </p>
            </div>
            <div className="flex items-center m-auto flex-col text-center sm:w-4/5 rounded-xl ease-linear hover:border-[1px] transition-all duration-300 hover:scale-105 p-4 hover:bg-black">
              <img
                src=""
                alt=""
                className="h-[217px] w-[217px] bg-white my-2"
              />
              <h5 className="text-white text-[1.5rem] my-2">
                Adaptability & Long-Term Benefits
              </h5>
              <p className="text-gray-500 text-[1.1rem] leading-7 my-2">
                SEO strategies can be adapted and refined over time based on
                changing market trends, algorithm updates, and user behavior.
                Unlike paid advertising, the benefits of good SEO can be
                long-lasting, providing a sustainable source of organic traffic
                and leads.
              </p>
            </div>
            <div className="flex justify-center items-center lg:my-12 sm:my-0 rounded-xl ease-linear hover:border-[1px] transition-all duration-300 hover:scale-105 hover:bg-black">
              <h1 className="text-center text-gray-500 hover:text-white ease-linear transition-all duration-300 text-[1.3rem] lg:w-5/6 sm:w-full">
                Implementing effective SEO strategies for your Squarespace
                website is essential for increasing visibility, attracting
                targeted traffic, enhancing user experience, and ultimately
                growing your online presence and business.
              </h1>
            </div>
          </div>

          {/* ====================================== Followed Practices ======================================= */}

          <div className="flex justify-center items-center flex-col lg:my-12 sm:mt-0">
            <h1 className="text-center text-white text-[2rem] lg:mt-24 font-bold lg:w-4/5 sm:mt-12">
              Squarespace SEO Best Practices We Follow To Provide Best SEO
              Results
            </h1>
            <p className="text-gray-500 text-[1.1rem] leading-7 my-2 text-center lg:w-5/6">
              Optimizing your Squarespace website for SEO involves several
              strategies and best practices to improve its visibility in search
              engine results. Here are some essential Squarespace SEO best
              practices:
            </p>
          </div>

          <p className="text-red-700 text-[4rem]">Need to create a Carousal</p>

          <div className="flex justify-center items-center my-10">
            <p className="text-gray-500 text-[1.1rem] leading-7 text-center lg:w-5/6">
              By implementing these Squarespace SEO best practices, We can
              enhance your website’s visibility, improve user experience, and
              ultimately drive more organic traffic to your site. Regular
              monitoring and adjustments based on performance data are also key
              to ongoing Squarespace SEO success.
            </p>
          </div>

          {/* ====================================== Services include ======================================= */}

          <div className="lg:my-12 sm:mt-0">
            <div className="flex justify-center items-center flex-col">
              <h1 className="text-center text-white text-[2rem] lg:mt-24 font-bold lg:w-4/5 sm:mt-12">
                Our Squarespace SEO Services Include
              </h1>
              <p className="text-gray-500 text-[1.1rem] leading-7 my-2 text-center lg:w-5/6">
                Developing a comprehensive SEO process for a Squarespace website
                involves a series of steps and ongoing strategies to optimize
                the website for search engine visibility and improved rankings.
                Here’s a suggested SEO process tailored for Squarespace:
              </p>
            </div>
            <div className="flex justify-center items-center">
              <div className="grid lg:grid-rows-4 lg:grid-cols-3 my-12 gap-x-11 gap-y-11 lg:w-5/6 sm:w-full sm:grid-rows-12 sm:grid-cols-1">
                <div className="flex items-center flex-col rounded-xl ease-linear hover:border-[1px] transition-all duration-300 hover:scale-105 p-4 hover:bg-black">
                  <h5 className="text-white text-[1.5rem] my-2 text-center">
                    Keyword Research And Analysis:
                  </h5>
                  <ol className="text-gray-500 text-[1.1rem] my-2 mx-8 list-disc">
                    <li>
                      We conduct thorough keyword research to identify relevant
                      keywords and phrases that align with your business, target
                      audience, and industry.
                    </li>
                  </ol>
                  <button className="bg-transparent border-[1px] hover:text-black hover:bg-white transition-all duration-200 text-white font-bold py-2 px-4 rounded-md my-4 ">
                    Keyword Research
                  </button>
                </div>
                <div className="flex items-center flex-col rounded-xl ease-linear hover:border-[1px] transition-all duration-300 hover:scale-105 p-4 hover:bg-black">
                  <h5 className="text-white text-[1.5rem] my-2 text-center">
                    Website Audit:
                  </h5>
                  <ol className="text-gray-500 text-[1.1rem] my-2 mx-8 list-disc">
                    <li>
                      We perform an SEO audit of your Squarespace website to
                      identify existing issues, technical errors, and
                      opportunities for improvement. This could include checking
                      for broken links, duplicate content, and site speed.
                    </li>
                  </ol>
                  <button className="bg-transparent border-[1px] hover:text-black hover:bg-white transition-all duration-200 text-white font-bold py-2 px-4 rounded-md my-4">
                    Website Audit
                  </button>
                </div>
                <div className="flex items-center flex-col rounded-xl ease-linear hover:border-[1px] transition-all duration-300 hover:scale-105 p-4 hover:bg-black">
                  <h5 className="text-white text-[1.5rem] my-2 text-center">
                    On-Page Optimization:
                  </h5>
                  <ol className="text-gray-500 text-[1.1rem] my-2 mx-8 list-disc">
                    <li className="my-2">
                      We optimize on-page elements such as meta titles, meta
                      descriptions, headers, and content using the identified
                      keywords.
                    </li>
                    <li className="my-2">
                      We ensure keyword placement is natural and aligns with
                      user intent.
                    </li>
                    <li className="my-2">
                      We optimize images with appropriate alt text and file
                      names.
                    </li>
                  </ol>
                  <button className="bg-transparent border-[1px] hover:text-black hover:bg-white transition-all duration-200 text-white font-bold py-2 px-4 rounded-md my-4">
                    OnPage SEO Service
                  </button>
                </div>
                <div className="flex items-center flex-col rounded-xl ease-linear hover:border-[1px] transition-all duration-300 hover:scale-105 p-4 hover:bg-black">
                  <h5 className="text-white text-[1.5rem] my-2 text-center">
                    Technical SEO Optimization:
                  </h5>
                  <ol className="text-gray-500 text-[1.1rem] my-2 mx-8 list-disc">
                    <li className="my-2">
                      We address technical aspects like website speed, mobile
                      responsiveness, SSL implementation, and URL structure.
                    </li>
                    <li className="my-2">
                      We Ensure proper HTML markup, canonical tags, and schema
                      markup to improve search engine understanding of your
                      content.
                    </li>
                  </ol>
                  <button className="bg-transparent border-[1px] hover:text-black hover:bg-white transition-all duration-200 text-white font-bold py-2 px-4 rounded-md my-4">
                    Technical SEO Services
                  </button>
                </div>
                <div className="flex items-center flex-col rounded-xl ease-linear hover:border-[1px] transition-all duration-300 hover:scale-105 p-4 hover:bg-black">
                  <h5 className="text-white text-[1.5rem] my-2 text-center">
                    Content Creation And Optimization:
                  </h5>
                  <ol className="text-gray-500 text-[1.1rem] my-2 mx-8 list-disc">
                    <li className="my-2">
                      We develop high-quality, relevant, and engaging content
                      based on the identified keywords and user intent.
                    </li>
                    <li className="my-2">
                      We optimize content for readability, ensuring it’s easily
                      digestible and appeals to your target audience.
                    </li>
                  </ol>
                  <button className="bg-transparent border-[1px] hover:text-black hover:bg-white transition-all duration-200 text-white font-bold py-2 px-4 rounded-md my-4">
                    Content Writing
                  </button>
                </div>
                <div className="flex items-center flex-col rounded-xl ease-linear hover:border-[1px] transition-all duration-300 hover:scale-105 p-4 hover:bg-black">
                  <h5 className="text-white text-[1.5rem] my-2 text-center">
                    Link Building And Internal Linking:
                  </h5>
                  <ol className="text-gray-500 text-[1.1rem] my-2 mx-8 list-disc">
                    <li className="my-2">
                      We build high-quality backlinks from reputable sources
                      related to your industry.
                    </li>
                    <li className="my-2">
                      We implement an internal linking strategy to enhance
                      navigation and guide visitors to relevant pages on your
                      website.
                    </li>
                  </ol>
                  <button className="bg-transparent border-[1px] hover:text-black hover:bg-white transition-all duration-200 text-white font-bold py-2 px-4 rounded-md my-4">
                    Backlink Building
                  </button>
                </div>
                <div className="flex items-center flex-col rounded-xl ease-linear hover:border-[1px] transition-all duration-300 hover:scale-105 p-4 hover:bg-black">
                  <h5 className="text-white text-[1.5rem] my-2 text-center">
                    Local SEO Optimization (If Applicable):
                  </h5>
                  <ol className="text-gray-500 text-[1.1rem] my-2 mx-8 list-disc">
                    <li className="my-2">
                      We optimize your Squarespace website for local search by
                      including location-based keywords and details on your
                      website.
                    </li>
                    <li className="my-2">
                      We create and optimize a Google My Business profile with
                      accurate business information.
                    </li>
                  </ol>
                  <button className="bg-transparent border-[1px] hover:text-black hover:bg-white transition-all duration-200 text-white font-bold py-2 px-4 rounded-md my-4">
                    Local SEO Service
                  </button>
                </div>
                <div className="flex items-center flex-col rounded-xl ease-linear hover:border-[1px] transition-all duration-300 hover:scale-105 p-4 hover:bg-black">
                  <h5 className="text-white text-[1.5rem] my-2 text-center">
                    Social Media Integration:
                  </h5>
                  <ol className="text-gray-500 text-[1.1rem] my-2 mx-8 list-disc">
                    <li className="my-2">
                      We integrate social media sharing buttons to encourage
                      visitors to share your content across social platforms.
                    </li>
                    <li className="my-2">
                      We leverage social media to promote your content and
                      engage with your audience.
                    </li>
                  </ol>
                </div>
                <div className="flex items-center flex-col rounded-xl ease-linear hover:border-[1px] transition-all duration-300 hover:scale-105 p-4 hover:bg-black">
                  <h5 className="text-white text-[1.5rem] my-2 text-center">
                    Monitoring And Analytics:
                  </h5>
                  <ol className="text-gray-500 text-[1.1rem] my-2 mx-8 list-disc">
                    <li className="my-2">
                      We use SEO tools to monitor keyword rankings, website
                      traffic, user behavior, and conversions.
                    </li>
                    <li className="my-2">
                      We analyze the data to identify trends, assess the
                      effectiveness of your SEO efforts, and make data-driven
                      decisions for improvements.
                    </li>
                  </ol>
                </div>
                <div className="flex items-center flex-col rounded-xl ease-linear hover:border-[1px] transition-all duration-300 hover:scale-105 p-4 hover:bg-black">
                  <h5 className="text-white text-[1.5rem] my-2 text-center">
                    Regular Content Updates And Expansion:
                  </h5>
                  <ol className="text-gray-500 text-[1.1rem] my-2 mx-8 list-disc">
                    <li className="my-2">
                      We continuously update and expand your content to keep it
                      fresh and relevant to both users and search engines.
                    </li>
                    <li className="my-2">
                      We monitor and respond to comments, reviews, and feedback
                      to engage with your audience and improve user
                      satisfaction.
                    </li>
                  </ol>
                </div>
                <div className="flex items-center flex-col rounded-xl ease-linear hover:border-[1px] transition-all duration-300 hover:scale-105 p-4 hover:bg-black">
                  <h5 className="text-white text-[1.5rem] my-2 text-center">
                    Education And Adaptation:
                  </h5>
                  <ol className="text-gray-500 text-[1.1rem] my-2 mx-8 list-disc">
                    <li className="my-2">
                      We stay informed about SEO trends, algorithm updates, and
                      best practices.
                    </li>
                    <li className="my-2">
                      We adapt your SEO strategy based on industry changes and
                      the evolving landscape of search engine algorithms
                    </li>
                  </ol>
                </div>
                <div className="flex items-center flex-col rounded-xl ease-linear hover:border-[1px] transition-all duration-300 hover:scale-105 p-4 hover:bg-black">
                  <h5 className="text-white text-[1.5rem] my-2 text-center">
                    Collaboration And Communication:
                  </h5>
                  <ol className="text-gray-500 text-[1.1rem] my-2 mx-8 list-disc">
                    <li className="my-2">
                      We foster collaboration between your content creators,
                      developers, and marketing team to ensure a holistic and
                      effective SEO strategy.
                    </li>
                    <li className="my-2">
                      We maintain open communication and regular updates on SEO
                      initiatives and progress.
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center my-2">
              <p className="text-gray-500 text-[1.1rem] leading-7 text-center lg:w-5/6">
                By following this SEO process and continuously iterating and
                adapting based on data and industry changes, you can effectively
                optimize your Squarespace website to improve its search engine
                visibility and drive organic traffic.
              </p>
            </div>
          </div>

          {/* ====================================== Magento Importance ======================================= */}

          <div className="flex justify-center items-center flex-col lg:my-12 sm:mt-0">
            <h1 className="text-center text-white text-[2rem] lg:mt-24 font-bold lg:w-4/5 sm:mt-12">
              Why Should You Hire Sqaurespace SEO Company Instead Of Generic SEO
              Agency?
            </h1>
            <p className="text-gray-500 text-[1.1rem] leading-7 my-2 text-center lg:w-4/5">
              Choosing between a Squarespace SEO company and a generic SEO
              agency ultimately depends on your specific needs, preferences, and
              the nature of your website. Here are some considerations to help
              you decide:
            </p>
          </div>
          <div className="flex justify-center items-center">
            <div className="grid lg:grid-rows-3 lg:grid-cols-3 gap-y-10 gap-x-8 md:grid-cols-2 md:mt-12 sm:my-12 sm:w-4/5 lg:w-full">
              <div className="flex items-center flex-col text-center rounded-xl ease-linear hover:border-[1px] transition-all duration-300 hover:scale-105 p-4 hover:bg-black">
                <img
                  src=""
                  alt=""
                  className="h-[217px] w-[217px] bg-white my-2"
                />
                <h5 className="text-white text-[1.5rem] my-2">
                  Expertise In Squarespace Platform
                </h5>
                <p className="text-gray-500 text-[1.1rem] leading-7 my-2">
                  A Squarespace SEO company specializes in optimizing websites
                  specifically built on the Squarespace platform. They possess
                  in-depth knowledge of Squarespace’s features, structure, and
                  capabilities, allowing them to tailor their strategies and
                  optimizations accordingly.
                </p>
              </div>
              <div className="flex items-center flex-col text-center rounded-xl ease-linear hover:border-[1px] transition-all duration-300 hover:scale-105 p-4 hover:bg-black">
                <img
                  src=""
                  alt=""
                  className="h-[217px] w-[217px] bg-white my-2"
                />
                <h5 className="text-white text-[1.5rem] my-2">
                  Familiarity With Squarespace SEO Tools & Resources
                </h5>
                <p className="text-gray-500 text-[1.1rem] leading-7 my-2">
                  Squarespace SEO companies are likely well-versed in utilizing
                  the built-in SEO features and tools provided by Squarespace,
                  maximizing their effectiveness in optimizing your website
                  within this platform.
                </p>
              </div>
              <div className="flex items-center flex-col text-center rounded-xl ease-linear hover:border-[1px] transition-all duration-300 hover:scale-105 p-4 hover:bg-black">
                <img
                  src=""
                  alt=""
                  className="h-[217px] w-[217px] bg-white my-2"
                />
                <h5 className="text-white text-[1.5rem] my-2">
                  Efficient Implementation
                </h5>
                <p className="text-gray-500 text-[1.1rem] leading-7 my-2">
                  Squarespace SEO companies can efficiently implement SEO
                  strategies on a Squarespace website due to their expertise
                  with the platform. They can navigate Squarespace’s backend,
                  make necessary changes, and optimize content with precision
                  and speed.
                </p>
              </div>
              <div className="flex items-center flex-col text-center rounded-xl ease-linear hover:border-[1px] transition-all duration-300 hover:scale-105 p-4 hover:bg-black">
                <img
                  src=""
                  alt=""
                  className="h-[217px] w-[217px] bg-white my-2"
                />
                <h5 className="text-white text-[1.5rem] my-2">
                  Streamlined Communication
                </h5>
                <p className="text-gray-500 text-[1.1rem] leading-7 my-2">
                  Working with a Squarespace SEO company can result in smoother
                  communication and collaboration, as they already understand
                  the Squarespace environment and can easily convey ideas and
                  strategies tailored to this platform.
                </p>
              </div>
              <div className="flex items-center flex-col text-center rounded-xl ease-linear hover:border-[1px] transition-all duration-300 hover:scale-105 p-4 hover:bg-black">
                <img
                  src=""
                  alt=""
                  className="h-[217px] w-[217px] bg-white my-2"
                />
                <h5 className="text-white text-[1.5rem] my-2">
                  Customization For Squarespace Templates
                </h5>
                <p className="text-gray-500 text-[1.1rem] leading-7 my-2">
                  Squarespace SEO companies can customize the SEO elements and
                  strategies to match the specific Squarespace template you’re
                  using. They can work within the design and structure of the
                  template while optimizing it for better search visibility.
                </p>
              </div>
              <div className="flex items-center flex-col text-center rounded-xl ease-linear hover:border-[1px] transition-all duration-300 hover:scale-105 p-4 hover:bg-black">
                <img
                  src=""
                  alt=""
                  className="h-[217px] w-[217px] bg-white my-2"
                />
                <h5 className="text-white text-[1.5rem] my-2">
                  Expertise In Squarespace SEO Best Practices
                </h5>
                <p className="text-gray-500 text-[1.1rem] leading-7 my-2">
                  Squarespace SEO companies are likely to have a strong
                  understanding of the best practices specifically applicable to
                  Squarespace websites, allowing for more effective and
                  strategic SEO campaigns.
                </p>
              </div>
              <div className="flex items-center flex-col text-center rounded-xl ease-linear hover:border-[1px] transition-all duration-300 hover:scale-105 p-4 hover:bg-black">
                <img
                  src=""
                  alt=""
                  className="h-[217px] w-[217px] bg-white my-2"
                />
                <h5 className="text-white text-[1.5rem] my-2">
                  Faster Results & Effectiveness
                </h5>
                <p className="text-gray-500 text-[1.1rem] leading-7 my-2">
                  Due to their specialized focus on Squarespace SEO, these
                  companies may achieve faster results and more effective
                  outcomes since their strategies are tailored to the strengths
                  and limitations of the Squarespace platform.
                </p>
              </div>
              <div className="flex items-center flex-col text-center rounded-xl ease-linear hover:border-[1px] transition-all duration-300 hover:scale-105 p-4 hover:bg-black">
                <img
                  src=""
                  alt=""
                  className="h-[217px] w-[217px] bg-white my-2"
                />
                <h5 className="text-white text-[1.5rem] my-2">
                  Dedication To Squarespace Clients
                </h5>
                <p className="text-gray-500 text-[1.1rem] leading-7 my-2">
                  A Squarespace SEO company may prioritize Squarespace clients
                  and have a deeper commitment to understanding and meeting the
                  unique needs of websites built on this platform.
                </p>
              </div>
              <div className="flex items-center flex-col text-center rounded-xl ease-linear hover:border-[1px] transition-all duration-300 hover:scale-105 p-4 hover:bg-black">
                <img
                  src=""
                  alt=""
                  className="h-[217px] w-[217px] bg-white my-2"
                />
                <h5 className="text-white text-[1.5rem] my-2">
                  Cost-Effectiveness
                </h5>
                <p className="text-gray-500 text-[1.1rem] leading-7 my-2">
                  In some cases, a Squarespace SEO company may offer
                  cost-effective solutions tailored to the Squarespace platform
                  since their expertise and experience are primarily focused on
                  this platform.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center flex-col text-center m-auto ">
            <p className="text-gray-500 text-[1.1rem] leading-7 text-center lg:w-5/6 my-2">
              On the other hand, a generic SEO agency might provide a broader
              range of services and expertise across various platforms and
              website types. They may have a more generalized approach to SEO,
              which can be advantageous if you have multiple types of websites
              or complex needs beyond Squarespace.
            </p>
            <p className="text-gray-500 text-[1.1rem] leading-7 text-center lg:w-5/6 my-2">
              Ultimately, the decision will depend on your priorities, budget,
              and the level of specialization you require for optimizing your
              Squarespace website effectively. It’s important to evaluate your
              specific circumstances and conduct thorough research before making
              a decision.
            </p>
          </div>

          {/* =========================================== Charges for Squarespace SEO ========================================= */}

          <div className="flex justify-center items-center flex-col lg:mt-24 sm:mt-12">
            <h1 className="text-center text-white text-[2rem] font-bold lg:w-4/5">
              How Much Do SEO Agencies Charge For Squarespace SEO?
            </h1>
            <p className="text-gray-500 text-[1.1rem] leading-7 my-2 text-center lg:w-5/6">
              The cost of hiring an SEO agency for Squarespace SEO can vary
              widely depending on several factors, including the agency’s
              expertise, location, the scope of services, the size and
              complexity of your website, and your specific SEO goals. Here are
              some general pricing structures and factors that can influence the
              cost:
            </p>
          </div>

          <div className="grid lg:grid-rows-3 lg:grid-cols-3 gap-y-10 gap-x-8 md:grid-cols-2 md:mt-12 sm:my-12">
            <div className="flex items-center flex-col text-center rounded-xl ease-linear hover:border-[1px] transition-all duration-300 hover:scale-105 p-4 hover:bg-black">
              <img
                src=""
                alt=""
                className="h-[217px] w-[217px] bg-white my-2"
              />
              <h5 className="text-white text-[1.5rem] my-2">Hourly Rates</h5>
              <p className="text-gray-500 text-[1.1rem] leading-7 my-2">
                Many SEO agencies charge an hourly rate for their services.
                Rates can range from $75 to $200+ per hour, depending on the
                agency’s reputation, experience, and location.
              </p>
            </div>
            <div className="flex items-center flex-col text-center rounded-xl ease-linear hover:border-[1px] transition-all duration-300 hover:scale-105 p-4 hover:bg-black">
              <img
                src=""
                alt=""
                className="h-[217px] w-[217px] bg-white my-2"
              />
              <h5 className="text-white text-[1.5rem] my-2">
                Monthly Retainer
              </h5>
              <p className="text-gray-500 text-[1.1rem] leading-7 my-2">
                Some SEO agencies offer monthly retainers where you pay a fixed
                amount each month for a set number of hours or a predefined
                scope of work. Monthly retainers can range from a few hundred to
                several thousand dollars per month.
              </p>
            </div>
            <div className="flex items-center flex-col text-center rounded-xl ease-linear hover:border-[1px] transition-all duration-300 hover:scale-105 p-4 hover:bg-black">
              <img
                src=""
                alt=""
                className="h-[217px] w-[217px] bg-white my-2"
              />
              <h5 className="text-white text-[1.5rem] my-2">
                Project-Based Pricing
              </h5>
              <p className="text-gray-500 text-[1.1rem] leading-7 my-2">
                For specific SEO projects or tasks, agencies may offer a
                one-time project fee. The cost will depend on the complexity and
                scope of the project.
              </p>
            </div>
            <div className="flex items-center flex-col text-center rounded-xl ease-linear hover:border-[1px] transition-all duration-300 hover:scale-105 p-4 hover:bg-black">
              <img
                src=""
                alt=""
                className="h-[217px] w-[217px] bg-white my-2"
              />
              <h5 className="text-white text-[1.5rem] my-2">
                Performance-Based Pricing
              </h5>
              <p className="text-gray-500 text-[1.1rem] leading-7 my-2">
                In some cases, agencies may tie their fees to the performance of
                your SEO campaign, such as rankings or traffic improvements.
                This model often includes a base fee plus bonuses based on the
                achieved results.
              </p>
            </div>
            <div className="flex items-center flex-col text-center rounded-xl ease-linear hover:border-[1px] transition-all duration-300 hover:scale-105 p-4 hover:bg-black">
              <img
                src=""
                alt=""
                className="h-[217px] w-[217px] bg-white my-2"
              />
              <h5 className="text-white text-[1.5rem] my-2">
                Location & Market
              </h5>
              <p className="text-gray-500 text-[1.1rem] leading-7 my-2">
                The cost of SEO services can vary based on the cost of living
                and market demand in the agency’s location. Agencies in larger,
                more competitive markets may charge higher rates.
              </p>
            </div>
            <div className="flex items-center flex-col text-center rounded-xl ease-linear hover:border-[1px] transition-all duration-300 hover:scale-105 p-4 hover:bg-black">
              <img
                src=""
                alt=""
                className="h-[217px] w-[217px] bg-white my-2"
              />
              <h5 className="text-white text-[1.5rem] my-2">
                Complexity Of Your Website
              </h5>
              <p className="text-gray-500 text-[1.1rem] leading-7 my-2">
                The complexity and size of your Squarespace website can
                influence the cost. Larger websites with more pages and
                intricate structures may require more time and effort to
                optimize, impacting the pricing.
              </p>
            </div>
            <div className="flex items-center flex-col text-center rounded-xl ease-linear hover:border-[1px] transition-all duration-300 hover:scale-105 p-4 hover:bg-black">
              <img
                src=""
                alt=""
                className="h-[217px] w-[217px] bg-white my-2"
              />
              <h5 className="text-white text-[1.5rem] my-2">
                Scope Of Services
              </h5>
              <p className="text-gray-500 text-[1.1rem] leading-7 my-2">
                The breadth and depth of the services you require will affect
                the cost. Common SEO services include keyword research, on-page
                optimization, link building, content creation, and analytics
                tracking.
              </p>
            </div>
            <div className="flex items-center flex-col text-center rounded-xl ease-linear hover:border-[1px] transition-all duration-300 hover:scale-105 p-4 hover:bg-black">
              <img
                src=""
                alt=""
                className="h-[217px] w-[217px] bg-white my-2"
              />
              <h5 className="text-white text-[1.5rem] my-2">
                Expertise & Reputation Of The Agency
              </h5>
              <p className="text-gray-500 text-[1.1rem] leading-7 my-2">
                Well-established and reputable SEO agencies often charge higher
                fees due to their expertise and track record of delivering
                successful SEO campaigns.
              </p>
            </div>
            <div className="flex items-center flex-col text-center rounded-xl ease-linear hover:border-[1px] transition-all duration-300 hover:scale-105 p-4 hover:bg-black">
              <img
                src=""
                alt=""
                className="h-[217px] w-[217px] bg-white my-2"
              />
              <h5 className="text-white text-[1.5rem] my-2">
                Customization & Personalization
              </h5>
              <p className="text-gray-500 text-[1.1rem] leading-7 my-2">
                Tailored strategies and a personalized approach to your specific
                industry and goals can influence the cost, as this requires
                additional time and effort for research and planning.
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center flex-col">
            <p className="text-gray-500 text-[1.1rem] leading-7 my-2 text-center lg:w-5/6">
              It’s important to discuss your needs and goals with potential SEO
              agencies to get a customized quote based on your requirements. Be
              sure to clarify the pricing structure, the services included, and
              any potential additional costs. Always prioritize the value and
              results you expect to achieve from the SEO agency when evaluating
              the cost.
            </p>
          </div>

          {/* ============================================ Factors affecting Squarespace =================================================== */}

          <div className="lg:my-24 sm:my-8 md:my-24">
            <div className="flex justify-center items-center flex-col ">
              <h1 className="text-center text-white text-[2rem] font-bold lg:w-4/5">
                Factors That Affect Squarespace SEO Pricing
              </h1>
              <p className="text-gray-500 text-[1.1rem] leading-7 my-2 text-center lg:w-5/6">
                Several factors can affect the pricing of Squarespace SEO
                services. Pricing for Squarespace SEO can vary based on the
                complexity of the project, the scope of services offered, the
                expertise and reputation of the SEO agency, and other related
                aspects. Here are the key factors that influence Squarespace SEO
                pricing:
              </p>
            </div>

            <p className="text-red-700 text-[4rem]">
              Path line for factors affection
            </p>

            <p className="text-gray-500 text-[1.1rem] leading-7 my-2 text-center lg:w-5/6 m-auto">
              It’s essential to discuss your requirements, budget, and
              expectations with potential us to get a clear understanding of the
              pricing structure and the services we offer our SEO packages. A
              transparent communication regarding pricing and services With us
              will help you make an informed decision based on your needs and
              budget.
            </p>
          </div>

          {/* ============================================== Success We Care For ================================================ */}

          <div className="flex justify-center items-center flex-col lg:my-12 sm:mt-0">
            <h1 className="text-center text-white text-[2rem] lg:mt-24 font-bold lg:w-4/5 sm:mt-12">
              KPIs For Squarespace SEO Success We Care For
            </h1>
            <p className="text-gray-500 text-[1.1rem] leading-7 my-2 text-center lg:w-4/5">
              Key Performance Indicators (KPIs) are crucial for measuring the
              success and effectiveness of your Squarespace SEO efforts. Here
              are some essential KPIs that can help us evaluate the impact of
              our SEO strategy on your Squarespace website SEO campaign:
            </p>
          </div>

          <div className="grid lg:grid-rows-4 lg:grid-cols-3 gap-y-10 gap-x-8 md:grid-cols-2 md:mt-12 sm:my-12">
            <div className="flex items-center flex-col text-center rounded-xl ease-linear hover:border-[1px] transition-all duration-300 hover:scale-105 p-4 hover:bg-black">
              <h5 className="text-white text-[1.5rem] my-2">Organic Traffic</h5>
              <p className="text-gray-500 text-[1.1rem] leading-7 my-2">
                We measure the total number of visitors coming to your website
                through organic search. An increase in organic traffic indicates
                improved visibility and better rankings.
              </p>
            </div>
            <div className="flex items-center flex-col text-center rounded-xl ease-linear hover:border-[1px] transition-all duration-300 hover:scale-105 p-4 hover:bg-black">
              <h5 className="text-white text-[1.5rem] my-2">
                Keyword Rankings
              </h5>
              <p className="text-gray-500 text-[1.1rem] leading-7 my-2">
                We monitor the rankings of your target keywords in search engine
                results. Tracking the movement of keywords can provide insights
                into the effectiveness of your optimization efforts.
              </p>
            </div>
            <div className="flex items-center flex-col text-center rounded-xl ease-linear hover:border-[1px] transition-all duration-300 hover:scale-105 p-4 hover:bg-black">
              <h5 className="text-white text-[1.5rem] my-2">
                Click-Through Rate (CTR)
              </h5>
              <p className="text-gray-500 text-[1.1rem] leading-7 my-2">
                We calculate the percentage of users who clicked on your website
                from the search results. A higher CTR indicates that your meta
                titles and descriptions are compelling and attractive to users.
              </p>
            </div>
            <div className="flex items-center flex-col text-center rounded-xl ease-linear hover:border-[1px] transition-all duration-300 hover:scale-105 p-4 hover:bg-black">
              <h5 className="text-white text-[1.5rem] my-2">Bounce Rate</h5>
              <p className="text-gray-500 text-[1.1rem] leading-7 my-2">
                We assess the percentage of visitors who leave your website
                after viewing only one page. A lower bounce rate suggests that
                visitors find your content engaging and relevant.
              </p>
            </div>
            <div className="flex items-center flex-col text-center rounded-xl ease-linear hover:border-[1px] transition-all duration-300 hover:scale-105 p-4 hover:bg-black">
              <h5 className="text-white text-[1.5rem] my-2">Conversion Rate</h5>
              <p className="text-gray-500 text-[1.1rem] leading-7 my-2">
                We measure the percentage of visitors who complete a desired
                action, such as making a purchase, signing up for a newsletter,
                or filling out a contact form. An improvement in conversion rate
                indicates the quality of traffic and the effectiveness of your
                website in converting visitors into customers.
              </p>
            </div>
            <div className="flex items-center flex-col text-center rounded-xl ease-linear hover:border-[1px] transition-all duration-300 hover:scale-105 p-4 hover:bg-black">
              <h5 className="text-white text-[1.5rem] my-2">
                Average Session Duration
              </h5>
              <p className="text-gray-500 text-[1.1rem] leading-7 my-2">
                We evaluate the average time users spend on your website during
                a session. A longer average session duration indicates that
                visitors find your content valuable and engaging.
              </p>
            </div>
            <div className="flex items-center flex-col text-center rounded-xl ease-linear hover:border-[1px] transition-all duration-300 hover:scale-105 p-4 hover:bg-black">
              <h5 className="text-white text-[1.5rem] my-2">
                Pages Per Session
              </h5>
              <p className="text-gray-500 text-[1.1rem] leading-7 my-2">
                We analyze the average number of pages a user visits during a
                single session. A higher pages per session value implies that
                visitors are engaging with your content and exploring multiple
                pages on your site.
              </p>
            </div>
            <div className="flex items-center flex-col text-center rounded-xl ease-linear hover:border-[1px] transition-all duration-300 hover:scale-105 p-4 hover:bg-black">
              <h5 className="text-white text-[1.5rem] my-2">
                Backlinks & Referring Domains
              </h5>
              <p className="text-gray-500 text-[1.1rem] leading-7 my-2">
                We track the number and quality of backlinks pointing to your
                Squarespace website. Quality backlinks are essential for
                building authority and improving search rankings.
              </p>
            </div>
            <div className="flex items-center flex-col text-center rounded-xl ease-linear hover:border-[1px] transition-all duration-300 hover:scale-105 p-4 hover:bg-black">
              <h5 className="text-white text-[1.5rem] my-2">Page Load Speed</h5>
              <p className="text-gray-500 text-[1.1rem] leading-7 my-2">
                We monitor the time it takes for your pages to load. Faster page
                load speed is crucial for user experience and can positively
                impact rankings.
              </p>
            </div>
            <div className="flex items-center flex-col text-center rounded-xl ease-linear hover:border-[1px] transition-all duration-300 hover:scale-105 p-4 hover:bg-black">
              <h5 className="text-white text-[1.5rem] my-2">
                Mobile Responsiveness
              </h5>
              <p className="text-gray-500 text-[1.1rem] leading-7 my-2">
                We check the performance of your website on mobile devices,
                including mobile page load speed and mobile user experience. As
                mobile usage continues to rise, ensuring a mobile-friendly
                website is crucial for SEO success.
              </p>
            </div>
            <div className="flex items-center flex-col text-center rounded-xl ease-linear hover:border-[1px] transition-all duration-300 hover:scale-105 p-4 hover:bg-black">
              <h5 className="text-white text-[1.5rem] my-2">
                Local Search Performance
              </h5>
              <p className="text-gray-500 text-[1.1rem] leading-7 my-2">
                We monitor KPIs related to local SEO, such as local organic
                traffic, local keyword rankings, and actions taken on local
                landing pages.
              </p>
            </div>
            <div className="flex items-center flex-col text-center rounded-xl ease-linear hover:border-[1px] transition-all duration-300 hover:scale-105 p-4 hover:bg-black">
              <h5 className="text-white text-[1.5rem] my-2">
                On-Page Optimization
              </h5>
              <p className="text-gray-500 text-[1.1rem] leading-7 my-2">
                We keep track of on-page factors like meta title and description
                optimizations, keyword usage, and content relevance to ensure
                that your on-page SEO efforts are effective.
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center text-center">
            <p className="text-gray-500 text-[1.1rem] leading-7 my-2 w-4/5">
              Regularly monitoring and analyzing these KPIs will provide
              valuable insights into the success of your Squarespace SEO
              strategy and allow us to make data-driven decisions to improve
              your website’s performance and visibility.
            </p>
          </div>

          <div className="mt-[120px]">
            <h1 className="text-white text-4xl mt-4 font-bold text-center">
              Frequently Asked Questions
            </h1>
            <Questions faqs={faqs} />
          </div>

          <div className="mt-14">
            <h1 className="text-center font-bold text-4xl text-white mb-7">
              SEO Resources
            </h1>
            <Carousel showThumbs={false} showStatus={false} showArrows={false}>
              {Googel.map((item, index) => (
                <div
                  key={index}
                  className="xl:flex flex-row xl:justify-around justify-center items-center mb-10 "
                >
                  {/* First Box */}
                  <div className="rounded-md m-2 border border-gray-500 h-max w-[500px] p-4">
                    <div className="p-6">
                      <div className="h-fit w-full flex items-center justify-center mb-11">
                        <img
                          src={item.imageSrc[0].imageSrc.img1}
                          className="!h-[150px] !w-full"
                          alt=""
                        />
                      </div>
                      <div>
                        <p className="text-white mt-4 text-start mb-4 font-bold">
                          {item.name[0].name}
                        </p>
                      </div>
                      <p className="text-gray-500 mt-4 text-start mb-4">
                        {item.contents[0].content}
                      </p>
                    </div>
                  </div>
                  {/* Second Box */}
                  <div className="rounded-md m-2 border border-gray-500 h-max w-[500px] p-4">
                    <div className="p-6">
                      <div className="h-fit w-full flex items-center justify-center mb-11">
                        <img
                          src={item.imageSrc[0].imageSrc.img1}
                          className="!h-[150px] !w-full"
                          alt=""
                        />
                      </div>
                      <div>
                        <p className="text-white mt-4 text-start mb-4 font-bold">
                          {item.name[1].name}
                        </p>
                      </div>
                      <p className="text-gray-500 mt-4 text-start mb-4">
                        {item.contents[1].content}
                      </p>
                    </div>
                  </div>
                  <div className="rounded-md m-2 border border-gray-500 h-max w-[500px] p-4">
                    <div className="p-6">
                      <div className="h-fit w-full flex items-center justify-center mb-11">
                        <img
                          src={item.imageSrc[0].imageSrc.img1}
                          className="!h-[150px] !w-full"
                          alt=""
                        />
                      </div>
                      <div>
                        <p className="text-white mt-4 text-start mb-4 font-bold">
                          {item.name[2].name}
                        </p>
                      </div>
                      <p className="text-gray-500 mt-4 text-start mb-4">
                        {item.contents[2].content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
          <Happy_client />
        </div>
      </div>
    </>
  );
};

export default SquareSpace;
