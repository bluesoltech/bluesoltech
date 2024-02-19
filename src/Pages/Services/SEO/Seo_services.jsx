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

const faqs = [
  {
    question: "What should an SEO package include?",
    answer: [
      "When you are looking for an SEO package, there are a few things that you should keep in mind. The first is the size of your business. If you are a small business, you may not need all of the services that an SEO company offers. You may be able to get away with just basic services, such as keyword research and on-page optimization.",
      "Another thing to consider is your budget. An SEO package can be expensive, and it may not be affordable for everyone. If you are on a tight budget, you may want to look for a company that offers discounts or payment plans.",
      "Finally, you should consider the experience and reputation of the company. You want to work with someone who knows what they are doing and has a good track record.",
    ],
  },
  {
    question: "How much is an SEO package?",
    answer: [
      "SEO is one of the most important aspects of online marketing. It can help you rank higher in search engine results pages, which can lead to more website visitors and more customers. If you’re looking for an SEO package, you may be wondering how much they cost.",
      "SEO packages vary in price, depending on the size and complexity of the project. Generally, smaller projects will cost less than larger ones. You can expect to pay anywhere from several hundred dollars to several thousand dollars for an SEO package.",
      "However, it’s important to remember that SEO is an ongoing process, and you should expect to pay monthly fees for maintenance and updates. The cost of an SEO package can be a good investment in your business’ success.",
    ],
  },
  {
    question: "Are SEO packages worth it?",
    answer: [
      "There are a lot of SEO packages on the market. But are they worth the investment?",
      "The answer to that question depends on your business. If you’re just starting out, an SEO package can be a great way to get your website ranked higher in search engines. And if you’re looking for ways to improve your website’s ranking, an SEO package is definitely worth considering.",
      "But if you’ve been in business for a while and have a well-established website, an SEO package might not offer enough value to justify the cost. In that case, it might be better to focus on other areas of your marketing strategy.",
    ],
  },
  {
    question: "Is SEO needed monthly?",
    answer: [
      "SEO is not a one-time job. It’s an ongoing process that needs to be tweaked and adjusted as search engine algorithms change. That’s why most SEO professionals recommend monthly SEO services.",
      "Monthly SEO can help ensure your website is always optimized for the best possible search engine ranking. It also allows you to track your website’s progress and make necessary adjustments along the way.",
      "If you’re looking for long-term success with your website, monthly SEO is a must. It keeps your website on top of search engine results pages, helping you attract more visitors and boost your business.",
    ],
  },
  {
    question: "Can I do SEO on my own?",
    answer: [
      "Yes, you can do SEO on your own, but it’s important to remember that it’s a long-term process that takes patience and diligence. Professional SEO services can help you stay on track and make sure your website is performing at its best.",
    ],
  },
  {
    question: "Should I hire someone to do my SEO?",
    answer: [
      "When it comes to SEO, there are a lot of things to think about. You need to make sure that your website is coded in a way that makes it easy for search engines to crawl, that you have quality content, and that you’re doing everything you can to get links from other websites. If all of this sounds like too much for you, or if you just don’t have the time to do it yourself, you may want to consider hiring an SEO agency.",
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
const Seo_services = () => {
  return (
    <>
      <div className="bg-[#0F0E0E] p-20 items-center">
        <div className="md:w-[80%] w-auto mt-4 mx-auto">
          <Services_first
            imgSrc={img1}
            btn_title="The Best SEO Agency in India"
            title="SEO vs. PPC Advertising: Which Is"
            duration="SEO Services In India"
            tittle="Best SEO Company In India With Top Rated SEO Experts"
            features1="Looking For SEO Services In India? RankON Technologies Is the Best SEO Company In India, And We Have Ample Reasons To Prove The Credibility Of Our SEO Services In India. We have Top Rated SEO Experts with more than 10 years of extensive experience working on national and international SEO campaigns. Contact our Professional SEO agency to get your website audited. Call us today to get a FREE SEO Proposal."
          />
          <div className="flex items-center justify-center mt-[60px] xl:mt-[120px]">
            <div className="lg:w-5/6 sm:w-full md:w-full">
              <h1 className="font-bold text-white text-[2rem] p-4 text-center mb-2">
                SEO Services Company In India That Helps To Get Ranking,
                Traffic, And Sales For You!
              </h1>
              <p className=" text-[1.1rem] leading-7 text-gray-500 text-center my-5 sm:mx-0 lg:mx-10">
                Start getting more qualified traffic, increased sales, and
                higher rankings on SERPs by requesting search engine
                optimization services for your business website type from
                India’s leading SEO Company, Blue Soltech.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center mt-[60px]">
            <div className=" w-5/6 sm:w-full">
              <h1 className="font-bold text-white text-[2rem] p-4 text-center mb-2">
                What Do You Get When You Hire Us As Your SEO Services Company In
                India
              </h1>

              <div className="flex justify-around items-center text-gray-500 lg:flex-row sm:flex-col sm:items-start sm:mx-4 ">
                <ol className="list-disc">
                  <li>All-time access to premium SEO tools</li>
                  <li>
                    Dedicated and skilled project managers and SEO professionals
                  </li>
                  <li>Practice White Hat SEO</li>
                </ol>
                <ol className="list-disc">
                  <li>Affordable SEO Packages</li>
                  <li>Competitive pricing and timely reporting</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center mt-[50px]">
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

          {/* ====================================== pricing plans ======================================= */}

          <div className="flex justify-around items-center sm:flex-wrap lg:flex-nowrap">
            <div className="flex flex-col items-center justify-between lg:my-24 sm:mt-24 sm:mb-4 transition-in duration-100 p-[10px] bg-black hover:border-2 hover:border-gray-600 hover:rounded-lg">
              <img src="" alt="" className="h-[300px] w-[300px] bg-white" />
              <h5 className="text-white text-[1.3rem] mt-[20px]">
                Small Business
              </h5>
              <h5 className="text-white text-[1.4rem]">
                20,000 INR / 250 USD{" "}
                <span className="text-[1.2rem]">monthly</span>{" "}
              </h5>
              <p className="text-gray-500 text-[0.9rem]">
                Best for Small Business
              </p>
              <button className="bg-transparent border-[1px] hover:text-black hover:bg-white transition-all duration-200 text-white font-bold py-2 px-4 rounded-md m-4">
                Our Packages
              </button>
            </div>
            <div className="flex flex-col items-center justify-between my-24 sm:my-4 transition-in duration-100 p-[10px] bg-black hover:border-2 hover:border-gray-600 hover:rounded-lg">
              <img src="" alt="" className="h-[300px] w-[300px] bg-white" />
              <h5 className="text-white text-[1.3rem] mt-[20px]">
                Midsize Business
              </h5>
              <h5 className="text-white text-[1.4rem]">
                30,000 INR / 400 USD
                <span className="text-[1.2rem]">monthly</span>{" "}
              </h5>
              <p className="text-gray-500 text-[0.9rem]">
                Best for Mid Size Business
              </p>
              <button className="bg-transparent border-[1px] hover:text-black hover:bg-white transition-all duration-200 text-white font-bold py-2 px-4 rounded-md m-4">
                Our Packages
              </button>
            </div>
            <div className="flex flex-col items-center justify-between my-24 sm:my-4 transition-in duration-100 p-[10px] bg-black hover:border-2 hover:border-gray-600 hover:rounded-lg">
              <img src="" alt="" className="h-[300px] w-[300px] bg-white" />
              <h5 className="text-white text-[1.3rem] mt-[20px]">
                E-commerce Business
              </h5>
              <h5 className="text-white text-[1.4rem]">
                45,000 INR / 600 USD{" "}
                <span className="text-[1.2rem]">monthly</span>{" "}
              </h5>
              <p className="text-gray-500 text-[0.9rem]">
                Best for eCommerce Business
              </p>
              <button className="bg-transparent border-[1px] hover:text-black hover:bg-white transition-all duration-200 text-white font-bold py-2 px-4 rounded-md m-4">
                Our Packages
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center sm:my-24">
            <div className="w-full">
              <h1 className="font-bold text-white text-[2rem] p-4 text-center mb-2">
                Our Professional SEO Services Include
              </h1>
              <p className=" text-[1.1rem] leading-7   text-gray-500 text-center mx-10">
                We Follow Certain Steps To Provide High-Quality Small Business
                SEO Services.
              </p>
              <div className="flex justify-around items-center mt-12 sm:flex-wrap">
                <div className="flex flex-col items-center justify-between sm:my-4 transition-in duration-100 p-[10px] bg-black hover:border-2 hover:border-gray-600 hover:rounded-lg">
                  <img src="" alt="" className="h-[300px] w-[300px] bg-white" />
                  <h5 className="text-white text-[1.5rem] mt-[20px]">
                    OnPage SEO
                  </h5>
                  <p className="text-white text-[1.2rem]">Services</p>
                  <button className="bg-transparent border-[1px] hover:text-black hover:bg-white transition-all duration-200 text-white font-bold py-2 px-4 rounded-md m-4">
                    OnPage SEO
                  </button>
                </div>
                <div className="flex flex-col items-center justify-between sm:my-4 transition-in duration-100 p-[10px] bg-black hover:border-2 hover:border-gray-600 hover:rounded-lg">
                  <img src="" alt="" className="h-[300px] w-[300px] bg-white" />
                  <h5 className="text-white text-[1.5rem] mt-[20px]">
                    OffPage SEO
                  </h5>
                  <p className="text-white text-[1.2rem]">Services</p>
                  <button className="bg-transparent border-[1px] hover:text-black hover:bg-white transition-all duration-200 text-white font-bold py-2 px-4 rounded-md m-4">
                    OffPage SEO
                  </button>
                </div>
                <div className="flex flex-col items-center justify-between sm:my-4 transition-in duration-100 p-[10px] bg-black hover:border-2 hover:border-gray-600 hover:rounded-lg">
                  <img src="" alt="" className="h-[300px] w-[300px] bg-white" />
                  <h5 className="text-white text-[1.5rem] mt-[20px]">
                    Technical SEO
                  </h5>
                  <p className="text-white text-[1.2rem]">Services</p>
                  <button className="bg-transparent border-[1px] hover:text-black hover:bg-white transition-all duration-200 text-white font-bold py-2 px-4 rounded-md m-4">
                    Technical SEO
                  </button>
                </div>
                <div className="flex flex-col items-center justify-between sm:my-4 transition-in duration-100 p-[10px] bg-black hover:border-2 hover:border-gray-600 hover:rounded-lg">
                  <img src="" alt="" className="h-[300px] w-[300px] bg-white" />
                  <h5 className="text-white text-[1.5rem] mt-[20px]">
                    Competitor Analysis
                  </h5>
                  <p className="text-white text-[1.2rem]">Services</p>
                  <button className="bg-transparent border-[1px] hover:text-black hover:bg-white transition-all duration-200 text-white font-bold py-2 px-4 rounded-md m-4">
                    Competitor Analysis
                  </button>
                </div>
              </div>
              <Request
                tittle="Request A FREE Quote From Best SEO Agency In India"
                content="Hire India's Leading SEO Agency and grow your website rankings with the help of our Top Rated SEO Experts Now!"
              />
            </div>
          </div>
          <div className="my-12">
            <h1 className="font-bold text-white text-[2rem] px-4 py-2 mb-2">
              Why Is SEO Still So Important?
            </h1>
            <p className=" text-gray-500 text-[1.1rem] leading-7 my-2 px-4">
              SEO (Search Engine Optimization) is still important because it’s a
              critical component of digital marketing that helps businesses
              increase their visibility and reach a wider audience. Here are
              some reasons why SEO is still so important:
            </p>
          </div>

          <div className="my-24 flex justify-evenly items-start lg:flex-row sm:flex-col sm:items-center sm:my-0 sm:mb-0">
            <div className="mx-10 p-[20px] ease-linear sm:my-4 hover:bg-black rounded-xl hover:border-[1px] transition-all duration-300 hover:scale-105">
              <h3 className="text-white text-[1.2rem] text-center">
                ORGANIC SEARCH IS A PRIMARY SOURCE OF WEBSITE TRAFFIC
              </h3>
              <p className="text-gray-500 text-[1.1rem] text-center mt-5">
                Organic search results drive the majority of website traffic,
                and studies show that over 50% of website traffic comes from
                organic search. This means that if your website is not optimized
                for search engines, you’re missing out on a significant amount
                of potential traffic.
              </p>
            </div>
            <div className="mx-10 p-[20px] ease-linear sm:my-4 hover:bg-black rounded-xl hover:border-[1px] transition-all duration-300 hover:scale-105">
              <h3 className="text-white text-[1.2rem] text-center">
                HELPS BUILD TRUST AND CREDIBILITY
              </h3>
              <p className="text-gray-500 text-[1.1rem] text-center mt-5">
                People trust search engines, and if your website ranks high in
                search results, it can help build trust and credibility with
                your target audience. High search engine rankings indicate that
                your website is a relevant and authoritative source of
                information.
              </p>
            </div>
            <div className="mx-10 p-[20px] ease-linear sm:my-4 sm:w-full hover:bg-black rounded-xl hover:border-[1px] transition-all duration-300 hover:scale-105 ">
              <h3 className="text-white text-[1.2rem] text-center">
                IMPROVES USER EXPERIENCE AND ENGAGEMENT ON WEBSITE
              </h3>
              <p className="text-gray-500 text-[1.1rem] text-center mt-5">
                SEO involves optimizing your website’s structure and content to
                make it easy for search engines to understand and index your
                pages. This also improves the user experience by making your
                website more organized, informative, and user-friendly.
              </p>
            </div>
          </div>

          <div className="flex justify-evenly items-start lg:flex-row sm:flex-col sm:items-center sm:my-none">
            <div className="mx-10 p-[20px] ease-linear hover:bg-black rounded-xl hover:border-[1px] transition-all duration-300 hover:scale-105 w-1/3 sm:my-4 sm:w-full">
              <h3 className="text-white text-[1.2rem] text-center">
                COST-EFFECTIVE
              </h3>
              <p className="text-gray-500 text-[1.1rem] text-center mt-5">
                SEO is a cost-effective way to drive traffic to your website.
                Unlike paid advertising, which requires ongoing investment, SEO
                can provide long-term results with minimal ongoing costs.
              </p>
            </div>
            <div className="mx-10 p-[20px] ease-linear hover:bg-black rounded-xl hover:border-[1px] transition-all duration-300 hover:scale-105 w-1/3 sm:my-4 sm:w-full">
              <h3 className="text-white text-[1.2rem] text-center">
                COMPETITIVE ADVANTAGE
              </h3>
              <p className="text-gray-500 text-[1.1rem] text-center mt-5">
                SEO is a highly competitive field, and businesses that invest in
                SEO can gain a competitive advantage over their competitors. By
                optimizing your website for search engines, you can attract more
                traffic and leads, which can lead to increased sales and
                revenue.
              </p>
            </div>
          </div>

          <div className="mt-[120px] sm:mt-12">
            <h1 className="text-white text-[1.3rem] mt-4 font-bold text-start">
              Here are some key SEO stats that highlight the importance of SEO
              Services for businesses
            </h1>
            <ol className="mt-8 w-4/5 list-disc sm:w-full">
              <li className="my-2 hover:text-white text-gray-500 hover:scale-[1.01] transition-all duration-[200] ease-linear">
                Google holds 92.05% of the search engine market share worldwide
                (StatCounter, March 2022).
              </li>
              <li className="my-2 hover:text-white text-gray-500 hover:scale-[1.01] transition-all duration-[200] ease-linear">
                75% of users never scroll past the first page of search results
                (HubSpot, 2021).
              </li>
              <li className="my-2 hover:text-white text-gray-500 hover:scale-[1.01] transition-all duration-[200] ease-linear">
                53.3% of all website traffic comes from organic search
                (BrightEdge, 2021).
              </li>
              <li className="my-2 hover:text-white text-gray-500 hover:scale-[1.01] transition-all duration-[200] ease-linear">
                Businesses that appear on the first page of search results get
                91.5% of Google traffic (Zero Limit Web, 2020).
              </li>
              <li className="my-2 hover:text-white text-gray-500 hover:scale-[1.01] transition-all duration-[200] ease-linear">
                The average click-through rate (CTR) for the top organic search
                result on mobile is 27.7% (SparkToro, 2020).
              </li>
              <li className="my-2 hover:text-white text-gray-500 hover:scale-[1.01] transition-all duration-[200] ease-linear">
                70-80% of users ignore paid search results, choosing to only
                click on organic search results (MarTech, 2020).
              </li>
              <li className="my-2 hover:text-white text-gray-500 hover:scale-[1.01] transition-all duration-[200] ease-linear">
                Websites with a strong backlink profile rank higher on search
                engine results pages (SERPs) (Backlinko, 2020).
              </li>
              <li className="my-2 hover:text-white text-gray-500 hover:scale-[1.01] transition-all duration-[200] ease-linear">
                63% of marketers say generating traffic and leads is their top
                challenge (HubSpot, 2021).
              </li>
              <li className="my-2 hover:text-white text-gray-500 hover:scale-[1.01] transition-all duration-[200] ease-linear">
                88% of local business searches on a mobile device result in
                either a call or visit to the business within 24 hours (Nectafy,
                2021).
              </li>
            </ol>
            <p className="text-gray-500 my-6 lg:w-4/5 text-[1.1rem] sm:w-full sm:text-center lg:text-start">
              These stats demonstrate the importance of SEO in driving traffic,
              generating leads, and increasing revenue for businesses. By
              investing in SEO, businesses can improve their online visibility,
              attract more traffic to their website, and gain a competitive
              advantage over their competitors.
            </p>
          </div>

          <div className="flex justify-center items-center">
            <h1 className="text-[1.5rem] text-center transition-all ease-linear duration-300 mt-24 sm:mt-12 sm:mb-0 text-white bg-black w-[250px] rounded-full py-2 border-gray-500 hover:border-white border-2">
              Blue Soltech LLP
            </h1>
          </div>

          <div className="my-12 flex justify-around items-start lg:flex-row sm:flex-col sm:items-center sm:my-0 sm:mt-12">
            <div className="mx-10 p-[20px] ease-linear hover:bg-black rounded-xl hover:border-[1px] transition-all duration-300 hover:scale-105 sm:my-4 sm:w-full">
              <h3 className="text-white text-[1.7rem] text-start sm:text-center">
                Conduct Keyword Research
              </h3>
              <p className="text-gray-500 text-[1.1rem] text-start mt-5 sm:text-center">
                Keyword research is the foundation of SEO. It involves
                identifying the keywords and phrases that your target audience
                is searching for & incorporating them into your website's
                content. Use keyword research tools such as Google Keyword
                Planner, Ahrefs, or SEMrush to find relevant keywords.
              </p>
            </div>
            <div className="mx-10 p-[20px] ease-linear hover:bg-black rounded-xl hover:border-[1px] transition-all duration-300 hover:scale-105 sm:my-4 sm:w-full">
              <h3 className="text-white text-[1.7rem] text-start sm:text-center">
                Optimize Your Website Structure
              </h3>
              <p className="text-gray-500 text-[1.1rem] text-start mt-5 sm:text-center">
                Ensure that your website is easy for search engines to crawl and
                index. Optimize your website structure by creating a clear
                hierarchy, organizing your content into categories, and using
                descriptive URLs.
              </p>
            </div>
            <div className="mx-10 p-[20px] ease-linear hover:bg-black rounded-xl hover:border-[1px] transition-all duration-300 hover:scale-105 sm:my-4 sm:w-full">
              <h3 className="text-white text-[1.7rem] text-start sm:text-center">
                Optimize Your Content
              </h3>
              <p className="text-gray-500 text-[1.1rem] text-start mt-5 sm:text-center">
                Create high-quality content that is relevant, informative, and
                engaging. use your targeted keywords in your headlines,
                subheadings, and throughout your content. Make sure your content
                is easy to read and understand, and use visual aids such as
                images and videos to break up the text.
              </p>
            </div>
          </div>
          <div className="my-3 flex justify-around items-start lg:flex-row sm:flex-col sm:items-center sm:my-none">
            <div className="mx-10 p-[20px] ease-linear hover:bg-black rounded-xl hover:border-[1px] transition-all duration-300 hover:scale-105 sm:my-4 sm:w-full">
              <h3 className="text-white text-[1.7rem] text-start sm:text-center">
                Build Quality Backlinks
              </h3>
              <p className="text-gray-500 text-[1.1rem] text-start mt-5 sm:text-center">
                Backlinks are a keey factor in SEO success. Focus on building
                high-quality, relevant backlinks from authoritative websites in
                your industry. This can be done through guest posting, broken
                link building, and other link building strategies.
              </p>
            </div>
            <div className="mx-10 p-[20px] ease-linear hover:bg-black rounded-xl hover:border-[1px] transition-all duration-300 hover:scale-105 sm:my-4 sm:w-full">
              <h3 className="text-white text-[1.7rem] text-start sm:text-center">
                Monitor And Analyze your Performance
              </h3>
              <p className="text-gray-500 text-[1.1rem] text-start mt-5 sm:text-center">
                Use analytics tools such as Google Analytics and Google Search
                Console to monitor your website's performance. Track your
                rankings, traffic, and conversations and analyze your data to
                identify areas for improvement.
              </p>
            </div>
            <div className="mx-10 p-[20px] ease-linear hover:bg-black rounded-xl hover:border-[1px] transition-all duration-300 hover:scale-105 sm:my-4 sm:w-full">
              <h3 className="text-white text-[1.7rem] text-start sm:text-center">
                Stay Up To Date With SEO Trends
              </h3>
              <p className="text-gray-500 text-[1.1rem] text-start mt-5 sm:text-center">
                SEO is constantly evolving, and it's important to stay up to
                date with the latest trends and best practices. Follow industry
                leaders and subscribe to SEO blogs and newsletters to stay
                informed.
              </p>
            </div>
          </div>
          <h1 className="text-center text-white text-[2rem] mt-24 font-bold">
            How Do SEO Services Work?
          </h1>
          <div className="flex justify-around items-center my-12 lg:flex-row sm:flex-col sm:items-center sm:my-none">
            <div>
              <img src="" alt="" className="h-[300px] w-[600px] bg-white" />
            </div>
            <div className="lg:mx-25 lg:w-4/5 sm:my-10 sm:w-full sm:mx-28">
              <p className="text-gray-500 text-[1.1rem] text-start my-2">
                Search Engine Optimization (SEO) is the inbound marketing
                process of increasing the quantity and quality of traffic
                through organic search results.
              </p>
              <p className="text-gray-500 text-[1.1rem] text-start sm:my-4">
                In other words, it is an approach that helps businesses improve
                their website’s performance in organic search results. The
                ultimate objective of SEO service is to make your website appear
                on the first page of search engine results by following the
                search engine algorithm.
              </p>
            </div>
          </div>

          <h1 className="text-center text-white text-[2rem] mt-26 font-bold">
            Benefits Of SEO Services
          </h1>

          <div className="my-12 flex justify-around lg:items-start lg:flex-row sm:flex-col sm:items-center sm:my-0 sm:mt-12">
            <div className="mx-10 p-[20px] ease-linear hover:bg-black rounded-xl hover:border-[1px] transition-all duration-300 hover:scale-105 lg:w-2/6 sm:w-full sm:mb-2">
              <div className=" mb-5 flex justify-center items-center">
                <img src="" alt="" className="h-[123px] w-[158px] bg-white " />
              </div>
              <h3 className="text-white text-[1.7rem] text-center">
                Quality Of Traffic
              </h3>
              <p className="text-gray-500 text-[1.1rem] text-center mt-5">
                You can attract all the visitors in the world who are genuinely
                interested in the products that you offer.
              </p>
            </div>
            <div className="mx-10 p-[20px] ease-linear hover:bg-black rounded-xl hover:border-[1px] transition-all duration-300 hover:scale-105 lg:w-2/6 sm:w-full sm:my-4">
              <div className=" mb-5 flex justify-center items-center">
                <img src="" alt="" className="h-[123px] w-[158px] bg-white " />
              </div>
              <h3 className="text-white text-[1.7rem] text-center">
                Free Traffic
              </h3>
              <p className="text-gray-500 text-[1.1rem] text-center mt-5">
                Ads make up a large share of SERPs. Organic traffic is any
                traffic that you don’t have to pay for.
              </p>
            </div>
            <div className="mx-10 p-[20px] ease-linear hover:bg-black rounded-xl hover:border-[1px] transition-all duration-300 hover:scale-105 lg:w-2/6 sm:w-full sm:my-4">
              <div className=" mb-5 flex justify-center items-center">
                <img src="" alt="" className="h-[123px] w-[158px] bg-white " />
              </div>
              <h3 className="text-white text-[1.7rem] text-center">
                Conversion
              </h3>
              <p className="text-gray-500 text-[1.1rem] text-center mt-5">
                If you get top search engine rankings then you will get more
                conversions.
              </p>
            </div>
          </div>
          <div className="my-3 flex justify-around lg:items-start lg:flex-row sm:flex-col sm:items-center">
            <div className="mx-10 p-[20px] ease-linear hover:bg-black rounded-xl hover:border-[1px] transition-all duration-300 hover:scale-105 lg:w-2/6 sm:w-full sm:my-4">
              <div className=" mb-5 flex justify-center items-center">
                <img src="" alt="" className="h-[123px] w-[158px] bg-white " />
              </div>
              <h3 className="text-white text-[1.7rem] text-center">
                Better Online Visibility
              </h3>
              <p className="text-gray-500 text-[1.1rem] text-center mt-5">
                You get more brand exposure when you rank on top of the
                first-page search results.
              </p>
            </div>
            <div className="mx-10 p-[20px] ease-linear hover:bg-black rounded-xl hover:border-[1px] transition-all duration-300 hover:scale-105 lg:w-2/6 sm:w-full sm:my-4">
              <div className=" mb-5 flex justify-center items-center">
                <img src="" alt="" className="h-[123px] w-[158px] bg-white " />
              </div>
              <h3 className="text-white text-[1.7rem] text-center">
                Quantity Of Traffic
              </h3>
              <p className="text-gray-500 text-[1.1rem] text-center mt-5">
                Once you have the right people clicking through from those
                search engine results pages (SERPs), more traffic is better.
              </p>
            </div>
            <div className="mx-10 p-[20px] ease-linear hover:bg-black rounded-xl hover:border-[1px] transition-all duration-300 hover:scale-105 lg:w-2/6 sm:w-full sm:my-4">
              <div className=" mb-5 flex justify-center items-center">
                <img src="" alt="" className="h-[123px] w-[158px] bg-white " />
              </div>
              <h3 className="text-white text-[1.7rem] text-center">
                Higher Domain Authority
              </h3>
              <p className="text-gray-500 text-[1.1rem] text-center mt-5">
                A proper SEO strategy helps you to increase your website’s
                domain authority and reputation.
              </p>
            </div>
          </div>

          {/* ================================== Why to invest in SEO ============================================= */}

          <div className="flex justify-center items-center">
            <div className="lg:w-4/6 sm:w-full">
              <h1 className="text-center text-white text-[2rem] lg:mt-28 sm:mt-12 font-bold">
                Why Should You Invest In SEO Services In India?
              </h1>
              <p className=" text-[1.1rem] leading-7 text-gray-500 text-center my-5 mx-10">
                Now that you have comprehended what’s SEO service, let’s get
                into a few figures that determine why should you invest in SEO
                services. Come let’s take a look at the statistics!
              </p>
              <p className=" text-[1.1rem] leading-7 font-semibold text-white text-center my-8 mx-10">
                About 75% Of People Never Scroll Past The First Page Of SERP.
                Indeed, It’s Important To Be On The 1st Page Of Google?
              </p>
            </div>
          </div>

          <div className="my-3 flex justify-around lg:items-start lg:flex-row sm:flex-col sm:items-center">
            <div className="mx-10 p-[20px] ease-linear hover:bg-black rounded-xl hover:border-[1px] transition-all duration-300 hover:scale-105 lg:my-4 lg:w-1/4 lg:h-[400px] sm:w-full sm:h-[300px] sm:my-4">
              <div className=" mb-5 flex justify-center items-center">
                <img src="" alt="" className="h-[123px] w-[158px] bg-white " />
              </div>
              <h3 className="text-white text-[1.7rem] text-center">
                Increased Brand Awareness
              </h3>
              <p className="text-gray-500 text-[1.1rem] text-center mt-5">
                You will Get More Exposure With RIght SEO Services.
              </p>
            </div>
            <div className="mx-10 p-[20px] ease-linear hover:bg-black rounded-xl hover:border-[1px] transition-all duration-300 hover:scale-105 lg:w-1/4 lg:h-[400px] sm:w-full sm:h-[300px] sm:my-4">
              <div className=" mb-5 flex justify-center items-center">
                <img src="" alt="" className="h-[123px] w-[158px] bg-white " />
              </div>
              <h3 className="text-white text-[1.7rem] text-center">
                Increased Domain Power
              </h3>
              <p className="text-gray-500 text-[1.1rem] text-center mt-5">
                SEO helps your domain to get more domain authority and with high
                quality backlinks.
              </p>
            </div>
            <div className="mx-10 p-[20px] ease-linear hover:bg-black rounded-xl hover:border-[1px] transition-all duration-300 hover:scale-105 lg:w-1/4 lg:h-[400px] sm:w-full sm:h-[300px] sm:my-4">
              <div className=" mb-5 flex justify-center items-center">
                <img src="" alt="" className="h-[123px] w-[158px] bg-white " />
              </div>
              <h3 className="text-white text-[1.7rem] text-center">
                Quality Traffic
              </h3>
              <p className="text-gray-500 text-[1.1rem] text-center mt-5">
                90% of all online experiences begin with a search on the search.
                Grab The Traffic!
              </p>
            </div>
            <div className="mx-10 p-[20px] hover:bg-black rounded-xl ease-linear hover:border-[1px] transition-all duration-300 hover:scale-105 lg:w-1/4 lg:h-[400px] sm:w-full sm:h-[300px] sm:my-4">
              <div className=" mb-5 flex justify-center items-center">
                <img src="" alt="" className="h-[123px] w-[158px] bg-white " />
              </div>
              <h3 className="text-white text-[1.7rem] text-center">
                FREE Traffic & Higher Conversion
              </h3>
              <p className="text-gray-500 text-[1.1rem] text-center mt-5">
                You get FREE organic traffic when you rank higher for the
                related terms and more conversion.
              </p>
            </div>
          </div>

          <h1 className="text-center text-white text-[2rem] lg:mt-20 font-bold sm:mt-20">
            Types Of SEO Services We Offer
          </h1>
          <p className=" text-[1.1rem] leading-7 text-gray-500 text-center my-5 mx-10">
            We offer Following SEO Services Depending On Your Business Type!
          </p>

          <div className="flex justify-center items-center lg:mt-12 sm:mt-12 md:my-12">
            <div>
              <div className="flex justify-center items-center lg:flex-row sm:flex-col">
                <div className="lg:w-1/3 sm:w-4/6 lg:order-none sm:order-2 sm:my-12 md:my-3 sm:text-center lg:text-start">
                  <h3 className="text-white text-[1.7rem]">
                    Local SEO Services
                  </h3>
                  <p className="text-gray-500 text-[1.1rem] lg:text-start lg:my-5 md:my-4">
                    Local SEO Helps you to rank higher for local or Geo-specific
                    keywords. For example, if you are a Lawyer and you want your
                    website to appear for you service-related keywords in your
                    services area/city then you need local SEO.
                  </p>
                  <button className="bg-transparent border-[1px] hover:text-black hover:bg-white transition-all duration-200 text-white font-bold py-2 px-4 rounded-md my-4">
                    Local SEO Services
                  </button>
                </div>
                <img
                  src=""
                  alt=""
                  className="h-[392px] w-[520px] bg-white mx-24"
                />
              </div>

              <div className="flex justify-center items-center lg:my-12 lg:flex-row sm:flex-col">
                <img src="" alt="" className="h-[392px] w-[520px] bg-white" />
                <div className="lg:w-1/3 mx-24 sm:w-4/6 lg:order-none sm:order-2 sm:my-12 sm:text-center lg:text-start">
                  <h3 className="text-white text-[1.7rem]">
                    Ecommerce SEO Services
                  </h3>
                  <p className="text-gray-500 text-[1.1rem] lg:my-5 md:my-4">
                    Do you an online store that you want to rank nationally or
                    internationally? Hire us today for eCommerce SEO Services.
                  </p>
                  <button className="bg-transparent border-[1px] hover:text-black hover:bg-white transition-all duration-200 text-white font-bold py-2 px-4 rounded-md my-4">
                    eCommerce SEO
                  </button>
                </div>
              </div>

              <div className="flex justify-center items-center lg:flex-row sm:flex-col">
                <div className="lg:w-1/3 sm:w-4/6 lg:order-none sm:order-2 sm:my-12 sm:text-center lg:text-start">
                  <h3 className="text-white text-[1.7rem]">
                    Small Business SEO
                  </h3>
                  <p className="text-gray-500 text-[1.1rem] lg:my-5 md:my-4">
                    Small Business entails a huge proportion of the economy
                    globally. But despite being a cornerstone in the development
                    of a country, they are often subdued by large business
                    owners or fail to gain customers’ trust.
                  </p>
                  <button className="bg-transparent border-[1px] hover:text-black hover:bg-white transition-all duration-200 text-white font-bold py-2 px-4 rounded-md my-4">
                    Small Business SEO
                  </button>
                </div>
                <img
                  src=""
                  alt=""
                  className="h-[392px] w-[520px] bg-white mx-24"
                />
              </div>

              <div className="flex justify-center items-center lg:my-12 lg:flex-row sm:flex-col">
                <img src="" alt="" className="h-[392px] w-[520px] bg-white" />
                <div className="lg:w-1/3 mx-24 sm:w-4/6 lg:order-none sm:order-2 sm:my-12 sm:text-center lg:text-start">
                  <h3 className="text-white text-[1.7rem]">Outsourced SEO</h3>
                  <p className="text-gray-500 text-[1.1rem] lg:my-5 md:my-4">
                    SEO Outsourcing Company in India- RankON Technologies offers
                    the best outsource SEO Services for businesses and provides
                    white label SEO Services at very affordable monthly charges.
                    As an end-to-end marketing business, web designer, or web
                    developer, you perhaps want to contain SEO in your list of
                    services.
                  </p>
                  <button className="bg-transparent border-[1px] hover:text-black hover:bg-white transition-all duration-200 text-white font-bold py-2 px-4 rounded-md my-4">
                    Outsourced SEO Service
                  </button>
                </div>
              </div>

              <div className="flex justify-center items-center lg:flex-row sm:flex-col">
                <div className="lg:w-1/3 sm:w-4/6 lg:order-none sm:order-2 sm:my-12 sm:text-center lg:text-start">
                  <h3 className="text-white text-[1.7rem] lg:text-start">
                    WordPress SEO Services
                  </h3>
                  <p className="text-gray-500 text-[1.1rem] sm:text-center lg:my-5 md:my-4">
                    Blue Soltech LLp is a top-notch WordPress SEO Company that
                    helps businesses of all types and sizes to leverage the
                    power of Search Engine Optimization and attract qualitative
                    traffic to their websites.
                  </p>
                  <button className="bg-transparent border-[1px] hover:text-black hover:bg-white transition-all duration-200 text-white font-bold py-2 px-4 rounded-md my-4">
                    Small Business SEO
                  </button>
                </div>
                <img
                  src=""
                  alt=""
                  className="h-[392px] w-[520px] bg-white mx-24"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center lg:my-24 sm:my-4">
            <div>
              <h1 className="font-bold text-white text-[2rem] p-4 text-center mb-2">
                We Offer Expert SEO Services For Websites Build On
              </h1>
              <p className=" text-[1.1rem] leading-7 text-gray-500 text-center my-2 mx-10">
                We are expert in following CMS SEO Services listed below.
              </p>
            </div>
          </div>

          <div className="my-3 flex justify-around items-start lg:flex-row sm:flex-col">
            <div className="lg:mx-10 p-[20px] ease-linear hover:bg-black rounded-xl hover:border-[1px] transition-all duration-300 hover:scale-105 lg:w-1/4 lg:h-[400px] sm:my-4">
              <div className=" mb-5 flex justify-center items-center">
                <img src="" alt="" className="h-[123px] w-[158px] bg-white " />
              </div>
              <h3 className="text-white text-[1.2rem] text-center">
                Magento SEO Services
              </h3>
              <p className="text-gray-500 text-[1.1rem] text-center mt-5">
                We offer top-quality SEO services for Magento stores at very
                affordable prices.
              </p>
              <div className="flex justify-center items-center my-4">
                <button className=" bg-transparent m-auto border-[1px] hover:text-black hover:bg-white transition-all duration-200 text-white font-bold py-2 px-4 rounded-md">
                  Magento SEO Services
                </button>
              </div>
            </div>
            <div className="lg:mx-10 p-[20px] ease-linear hover:bg-black rounded-xl hover:border-[1px] transition-all duration-300 hover:scale-105 lg:w-1/4 lg:h-[400px] sm:my-4">
              <div className=" mb-5 flex justify-center items-center">
                <img src="" alt="" className="h-[123px] w-[158px] bg-white " />
              </div>
              <h3 className="text-white text-[1.2rem] text-center">
                Shopify SEO Services
              </h3>
              <p className="text-gray-500 text-[1.1rem] text-center mt-5">
                We offer the best quality SEO services for Shopify stores at
                very affordable prices.
              </p>
              <div className="flex justify-center items-center my-4">
                <button className=" bg-transparent m-auto border-[1px] hover:text-black hover:bg-white transition-all duration-200 text-white font-bold py-2 px-4 rounded-md">
                  Shopify SEO Services
                </button>
              </div>
            </div>
            <div className="lg:mx-10 p-[20px] ease-linear hover:bg-black rounded-xl hover:border-[1px] transition-all duration-300 hover:scale-105 lg:w-1/4 lg:h-[400px] sm:my-4">
              <div className=" mb-5 flex justify-center items-center">
                <img src="" alt="" className="h-[123px] w-[158px] bg-white " />
              </div>
              <h3 className="text-white text-[1.2rem] text-center">
                WIX SEO Services
              </h3>
              <p className="text-gray-500 text-[1.1rem] text-center mt-5">
                We offer best quality SEO Services for WIX Websites at very low
                prices.
              </p>
              <div className="flex justify-center items-center my-4">
                <button className=" bg-transparent m-auto border-[1px] hover:text-black hover:bg-white transition-all duration-200 text-white font-bold py-2 px-4 rounded-md">
                  WIX SEO Services
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-evenly items-start sm:my-0 lg:flex-row sm:flex-col lg:my-12">
            <div className="lg:mx-10 p-[20px] ease-linear hover:bg-black rounded-xl hover:border-[1px] transition-all duration-300 hover:scale-105 lg:w-1/4 lg:h-[400px] sm:my-4">
              <div className=" mb-5 flex justify-center items-center">
                <img src="" alt="" className="h-[123px] w-[158px] bg-white " />
              </div>
              <h3 className="text-white text-[1.2rem] text-center">
                Squarespace SEO Services
              </h3>
              <p className="text-gray-500 text-[1.1rem] text-center mt-5">
                We offer top-quality SEO services for Squarespace websites at
                very affordable prices.
              </p>
              <div className="flex justify-center items-center my-4">
                <button className=" bg-transparent m-auto border-[1px] hover:text-black hover:bg-white transition-all duration-200 text-white font-bold py-2 px-4 rounded-md">
                  Squarespace SEO
                </button>
              </div>
            </div>
            <div className="lg:mx-10 p-[20px] ease-linear hover:bg-black rounded-xl hover:border-[1px] transition-all duration-300 hover:scale-105 lg:w-1/4 lg:h-[400px] sm:my-4">
              <div className=" mb-5 flex justify-center items-center">
                <img src="" alt="" className="h-[123px] w-[158px] bg-white " />
              </div>
              <h3 className="text-white text-[1.2rem] text-center">
                WordPress SEO Services
              </h3>
              <p className="text-gray-500 text-[1.1rem] text-center mt-5">
                We offer the best quality SEO services for WordPress Websites at
                very affordable prices,
              </p>
              <div className="flex justify-center items-center my-4">
                <button className=" bg-transparent m-auto border-[1px] hover:text-black hover:bg-white transition-all duration-200 text-white font-bold py-2 px-4 rounded-md">
                  WordPress SEO Services
                </button>
              </div>
            </div>
          </div>

          <RequestAgain
            tittle="Which SEO Solution Is Right For You?"
            content="Not sure which SEO Service you should opt for? Contact us today to get further assistance and one of our top rated SEO experts will help you to pick the right SEO services after analyzing your business."
          />

          {/* ====================================== Things you should know about Services =================================== */}

          <div className="flex items-center justify-center lg:my-24 sm:mt-24">
            <div>
              <h1 className="font-bold text-white text-[2rem] p-4 text-center mb-2">
                Things You Should Know About SEO Services
              </h1>
              <p className="text-[1.1rem] leading-7 text-gray-500 text-center my-2 mx-10">
                Like any Online marketing strategy, SEO also has advantages and
                disadvantages. But the only difference is the advantages are
                more and nullify the effect of disadvantages.
              </p>
            </div>
          </div>

          <div className="flex lg:justify-evenly lg:items-start lg:my-12 md:flex-row sm:flex-col sm:justify-center sm:items-center sm:my-6">
            <div className="lg:mx-10 md:mx-2 p-[20px] ease-linear hover:bg-black rounded-xl hover:border-[1px] transition-all duration-300 hover:scale-105 lg:w-1/4 lg:h-[350px]  md:w-1/2">
              <h3 className="text-white text-[1.3rem] text-center">
                Advantages Of SEO
              </h3>
              <ul className="text-center">
                <li className="my-2 hover:text-white text-gray-500 hover:scale-[1.01] transition-all duration-[200] ease-linear">
                  Attract Free Traffic
                </li>
                <li className="my-2 hover:text-white text-gray-500 hover:scale-[1.01] transition-all duration-[200] ease-linear">
                  Increase Backlink Profile
                </li>
                <li className="my-2 hover:text-white text-gray-500 hover:scale-[1.01] transition-all duration-[200] ease-linear">
                  Increase Domain Authority
                </li>
                <li className="my-2 hover:text-white text-gray-500 hover:scale-[1.01] transition-all duration-[200] ease-linear">
                  Increase Brand Visibility
                </li>
                <li className="my-2 hover:text-white text-gray-500 hover:scale-[1.01] transition-all duration-[200] ease-linear">
                  Long-Lasting Results
                </li>
                <li className="my-2 hover:text-white text-gray-500 hover:scale-[1.01] transition-all duration-[200] ease-linear">
                  Higher Conversion Rate
                </li>
                <li className="my-2 hover:text-white text-gray-500 hover:scale-[1.01] transition-all duration-[200] ease-linear">
                  Helps Building Online
                </li>
                <li className="my-2 hover:text-white text-gray-500 hover:scale-[1.01] transition-all duration-[200] ease-linear">
                  Reputation Of your business
                </li>
              </ul>
            </div>
            <div className="lg:mx-10 md:mx-2 p-[20px] ease-linear hover:bg-black rounded-xl hover:border-[1px] transition-all duration-300 hover:scale-105 lg:w-1/4 lg:h-[350px]  md:w-1/2">
              <h3 className="text-white text-[1.2rem] text-center">
                Disadvantages Of SEO
              </h3>
              <ul className="text-center">
                <li className="my-2 hover:text-white text-gray-500 hover:scale-[1.01] transition-all duration-[200] ease-linear">
                  SEO is not guaranteed
                </li>
                <li className="my-2 hover:text-white text-gray-500 hover:scale-[1.01] transition-all duration-[200] ease-linear">
                  Ranking Fluctuation
                </li>
                <li className="my-2 hover:text-white text-gray-500 hover:scale-[1.01] transition-all duration-[200] ease-linear">
                  It Takes Time to get first page rankings
                </li>
                <li className="my-2 hover:text-white text-gray-500 hover:scale-[1.01] transition-all duration-[200] ease-linear">
                  If done wrong then the website may get a penalty
                </li>
                <li className="my-2 hover:text-white text-gray-500 hover:scale-[1.01] transition-all duration-[200] ease-linear">
                  Take lots of content marketing
                </li>
                <li className="my-2 hover:text-white text-gray-500 hover:scale-[1.01] transition-all duration-[200] ease-linear">
                  Tough to get natural backlinks
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button className="bg-transparent margin-auto border-[1px] hover:text-black hover:bg-white transition-all duration-200 text-white font-bold py-2 px-4 rounded-md">
              Get SEO Audit
            </button>
          </div>
          <div className="flex justify-around items-center lg:m-24 lg:flex-row sm:flex-col-reverse sm:my-12">
            <div className="lg:w-1/2 sm:w-full sm:text-center lg:text-start sm:my-6 ">
              <h1 className="font-bold text-white text-[1.5rem] p-4 mb-2">
                Quality SEO Services From Best SEO Company In India
              </h1>
              <p className="text-[1.1rem] leading-7 text-gray-500 my-2 p-4">
                If you need to gain the best outcomes from an SEO campaign, you
                need to get in touch with the right SEO company that can provide
                SEO marketing services that will help you earn the trio of
                better online visibility on Google, better organic traffic,
                qualified leads and increased ROI.
              </p>
              <button className="bg-transparent margin-auto border-[1px] hover:text-black hover:bg-white transition-all duration-200 text-white font-bold py-2 px-4 rounded-md my-4 ml-4">
                Check out our SEO pricing
              </button>
            </div>
            <div>
              <img src="" alt="" className="h-[300px] w-[350px] bg-white" />
            </div>
          </div>

          <div className="flex items-center justify-center lg:my-24 sm:my-12">
            <div>
              <h1 className="font-bold text-white text-[2rem] p-4 text-center mb-2">
                Our SEO Results
              </h1>
              <p className="text-white text-[1.1rem]">
                Images for carousal about the Result of SEO Services
              </p>
              {/* ======================================== Carousal needs to be added for SEO Results =============================================== */}
            </div>
          </div>

          {/* ======================================== Affordable Quality of SEO =============================================== */}

          <div className="flex items-center justify-center lg:my-24 sm:my-12">
            <div>
              <h1 className="font-bold text-white text-[2rem] p-2 text-center ">
                Affordable Yet Quality SEO Services In India
              </h1>
              <h1 className="font-bold text-white text-[1.4rem] p-2 text-center mb-2">
                We Offer You The Best SEO Strategy That’s Purposely Made-For-You
                Only!
              </h1>
              <p className="text-[1.1rem] leading-7 text-gray-500 text-center my-2 mx-10">
                It requires a comprehensive SEO plan and an array of SEO
                techniques to help any business grow and thrive in the market.
                And RankON Technologies is the best SEO company in India that
                carries out each one of these to help our clients combat their
                competitors.
              </p>

              <div className="flex justify-evenly lg:items-start lg:my-12 lg:flex-row sm:flex-col sm:items-center sm:mt-12">
                <div className="mx-10 p-[20px] ease-linear hover:bg-black rounded-xl hover:border-[1px] transition-all duration-300 hover:scale-105 lg:w-1/4 lg:h-[350px] sm:w-full sm:h-[200px] lg:my-0 sm:my-4">
                  <ol>
                    <li className="m-2 hover:text-white text-gray-500 hover:scale-[1.01] transition-all duration-[200] ease-linear list-disc">
                      We design a single-point system that is made up of several
                      elements such as link building, on-page optimization,
                      content marketing, keyword research, content creation,
                      competitor analysis, transparent reporting, and more. It
                      also involves some detailed research to find out which SEO
                      areas need to be worked upon to increase their value in
                      the eyes of search engines like Google.
                    </li>
                  </ol>
                </div>
                <div className="mx-10 p-[20px] ease-linear hover:bg-black rounded-xl hover:border-[1px] transition-all duration-300 hover:scale-105 lg:w-1/4 lg:h-[350px] sm:w-full sm:h-[150px] lg:my-0 sm:my-4">
                  <ol>
                    <li className="m-2 hover:text-white text-gray-500 hover:scale-[1.01] transition-all duration-[200] ease-linear list-disc">
                      We create custom SEO campaigns that include keyword
                      research, content optimisation, and full website Onpage
                      optimisation using best keyword research tools and onpage
                      SEO tools.
                    </li>
                  </ol>
                </div>
              </div>
              <div className="flex justify-evenly lg:items-start lg:my-12 lg:flex-row sm:flex-col sm:items-center sm:my-0">
                <div className="mx-10 p-[20px] ease-linear hover:bg-black rounded-xl hover:border-[1px] transition-all duration-300 hover:scale-105 lg:w-1/4 lg:h-[350px] sm:w-full sm:h-[150px] lg:my-0 sm:my-4">
                  <ol>
                    <li className="m-2 hover:text-white text-gray-500 hover:scale-[1.01] transition-all duration-[200] ease-linear list-disc">
                      When you choose Rankon Technologies as your SEO service
                      provider in India, you can pick from three different SEO
                      plans for our services, including our bronze, silver, and
                      gold packages.
                    </li>
                  </ol>
                </div>
                <div className="mx-10 p-[20px] ease-linear hover:bg-black rounded-xl hover:border-[1px] transition-all duration-300 hover:scale-105 lg:w-1/4 lg:h-[350px] sm:w-full sm:h-[150px] lg:my-0 sm:my-4">
                  <ol>
                    <li className="m-2 hover:text-white text-gray-500 hover:scale-[1.01] transition-all duration-[200] ease-linear list-disc">
                      Depending on what service plan you choose, you’ll pay a
                      specific amount per month/year after your initial campaign
                      investment. For enterprises, we offer custom search engine
                      optimization pricing.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          {/* ============================================= Why SEO Company? ========================================= */}

          <h1 className="font-bold text-white text-[2rem] p-2 text-center ">
            Why Blue Soltech As Your SEO Company In India?
          </h1>
          <div className="flex justify-between items-center lg:my-12 lg:mx-10 lg:flex-row sm:flex-col-reverse sm:my-6">
            <div className="sm:my-6 lg:my-0">
              <p className="text-gray-500 text-[1.1rem] leading-7 my-2">
                Being one of the premium SEO companies in India, we always aim
                to increase our client’s digital revenue by practising the best
                SEO strategies using the best SEO tools.
              </p>
              <p className="text-gray-500 text-[1.1rem] leading-7 my-2">
                Moreover, our team of SEO experts understand the SEO guidelines
                for better SEO rankings and they keep themselves updated with
                the latest Google SEO update to provide the best organic SEO
                services to our clients. Check Our reviews here.
              </p>
              <p className="text-gray-500 text-[1.1rem] leading-7 my-2">
                Furthermore, we have access to premium SEO tools to spy on the
                activity of your customers’ competitors.
              </p>
            </div>
            <div>
              <img
                src=""
                alt=""
                className="h-[300px] w-[600px] bg-white mx-12"
              />
            </div>
          </div>

          {/* ======================================= Benefits of hiring us ================================= */}

          <div className="lg:my-24">
            <h1 className="font-bold text-white text-[2rem] p-2 text-center">
              Benefits Of Hiring Blue Soltech For SEO Services In India
            </h1>

            <div className=" flex justify-around lg:items-start lg:my-6 lg:flex-row sm:flex-col sm:items-center">
              <div className="mx-10 p-[20px] ease-linear hover:bg-black rounded-xl hover:border-[1px] transition-all duration-300 hover:scale-105 lg:w-1/4 lg:h-[200px] sm:w-full sm:my-4 lg:my-0">
                <ol>
                  <li className="m-4 hover:text-white text-gray-500 hover:scale-[1.01] transition-all duration-[200] ease-linear list-disc">
                    We Are Top Rated On Upwork
                  </li>
                  <li className="m-4 hover:text-white text-gray-500 hover:scale-[1.01] transition-all duration-[200] ease-linear list-disc">
                    We Use Latest SEO Tools
                  </li>
                  <li className="m-4 hover:text-white text-gray-500 hover:scale-[1.01] transition-all duration-[200] ease-linear list-disc">
                    We Follow SEO Google Guidelines
                  </li>
                </ol>
              </div>
              <div className="mx-10 p-[20px] ease-linear hover:bg-black rounded-xl hover:border-[1px] transition-all duration-300 hover:scale-105 lg:w-1/4 lg:h-[200px] sm:w-full sm:my-4 lg:my-0">
                <ol>
                  <li className="m-4 hover:text-white text-gray-500 hover:scale-[1.01] transition-all duration-[200] ease-linear list-disc">
                    More Than 8 Years of Experience
                  </li>
                  <li className="m-4 hover:text-white text-gray-500 hover:scale-[1.01] transition-all duration-[200] ease-linear list-disc">
                    Only White Hat SEO Approach
                  </li>
                  <li className="m-4 hover:text-white text-gray-500 hover:scale-[1.01] transition-all duration-[200] ease-linear list-disc">
                    We Keep Our Team Updated With SEO Guidelines
                  </li>
                </ol>
              </div>
              <div className="mx-10 p-[20px] ease-linear hover:bg-black rounded-xl hover:border-[1px] transition-all duration-300 hover:scale-105 lg:w-1/4 lg:h-[200px] sm:w-full sm:my-4 lg:my-0">
                <ol>
                  <li className="m-4 hover:text-white text-gray-500 hover:scale-[1.01] transition-all duration-[200] ease-linear list-disc">
                    We Provide Quick Support
                  </li>
                  <li className="m-4 hover:text-white text-gray-500 hover:scale-[1.01] transition-all duration-[200] ease-linear list-disc">
                    We Provide Monthly Reporting
                  </li>
                  <li className="m-4 hover:text-white text-gray-500 hover:scale-[1.01] transition-all duration-[200] ease-linear list-disc">
                    We Follow a Comprehensive Approach
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center lg:my-12 sm:my-0">
            <button className="bg-transparent border-[1px] hover:text-black hover:bg-white transition-all duration-200 text-white font-bold py-2 px-4 rounded-md my-4">
              Request a FREE Proposal NOW!
            </button>
          </div>

          {/* ======================================= Different than others ================================= */}
          <div className="my-12">
            <h1 className="font-bold text-white text-[2rem] p-2 text-center">
              How Our SEO Services Are Different From Other SEO Companies In
              India?
            </h1>
            <div className="flex justify-center items-center">
              <p className="text-gray-500 text-[1.1rem] text-center w-5/6 leading-7 my-2">
                With the right Search Engine Optimization Services, you can
                create better engagement for your brand across multiple digital
                platforms and rank higher on search engines. This is why good
                SEO practices have become invaluable for every business today.
                We as a premier SEO Agency in India, pay keen concentration on
                the best of everything that eventually has led us to thrive.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <p className="text-gray-500 text-[1.1rem] text-center w-5/6 leading-7 my-2">
                Here are our few SEO practices that make us the best of all the
                other SEO service providers. The size of your business does not
                matter; SEO Services come in handy for businesses and entities
                of all sizes, no matter their brand value and reputation.
              </p>
            </div>
          </div>
          <div className=" flex justify-around lg:items-start lg:my-12 lg:p-12 lg:flex-row sm:flex-col sm:my-6 sm:p-0 sm:items-center">
            <div className="mx-10 p-[20px] ease-linear hover:bg-black rounded-xl hover:border-[1px] transition-all duration-300 hover:scale-105 lg:my-0 lg:w-1/4 sm:w-full sm:my-4">
              <ol>
                <li className="m-4 hover:text-white text-gray-500 hover:scale-[1.01] transition-all duration-[200] ease-linear list-disc">
                  Create a website architecture that’s good for Google as well
                  as users.
                </li>
                <li className="m-4 hover:text-white text-gray-500 hover:scale-[1.01] transition-all duration-[200] ease-linear list-disc">
                  Create compelling content that answers the searcher’s query
                </li>
                <li className="m-4 hover:text-white text-gray-500 hover:scale-[1.01] transition-all duration-[200] ease-linear list-disc">
                  Share-worthy content that earns links, citations, and
                  augmentation
                </li>
              </ol>
            </div>
            <div className="mx-10 p-[20px] ease-linear hover:bg-black rounded-xl hover:border-[1px] transition-all duration-300 hover:scale-105 lg:my-0 lg:w-1/4 sm:w-full sm:my-4">
              <ol>
                <li className="m-4 hover:text-white text-gray-500 hover:scale-[1.01] transition-all duration-[200] ease-linear list-disc">
                  Crawl accessibility so search engines can read your website
                </li>
                <li className="m-4 hover:text-white text-gray-500 hover:scale-[1.01] transition-all duration-[200] ease-linear list-disc">
                  Great user experience, fast load speed, and compelling UX
                </li>
                <li className="m-4 hover:text-white text-gray-500 hover:scale-[1.01] transition-all duration-[200] ease-linear list-disc">
                  Keep your website constantly monitored and tracked
                </li>
              </ol>
            </div>
            <div className="mx-10 p-[20px] ease-linear hover:bg-black rounded-xl hover:border-[1px] transition-all duration-300 hover:scale-105 lg:my-0 lg:w-1/4 sm:w-full sm:my-4">
              <ol>
                <li className="m-4 hover:text-white text-gray-500 hover:scale-[1.01] transition-all duration-[200] ease-linear list-disc">
                  Long-Term and many improved results are what SEO offer
                </li>
                <li className="m-4 hover:text-white text-gray-500 hover:scale-[1.01] transition-all duration-[200] ease-linear list-disc">
                  Act in a way that fosters users’ trust.
                </li>
                <li className="m-4 hover:text-white text-gray-500 hover:scale-[1.01] transition-all duration-[200] ease-linear list-disc">
                  Make your site stimulating and useful.
                </li>
              </ol>
            </div>
          </div>

          <Request
            tittle="Would You Like To Discuss Your Project With Our Experts?"
            content="Send Your Project Details By Clicking On Get In Touch And One Of Our Team Members Will Call You Soon!"
          />

          <h1 className="font-bold text-white text-[2rem] p-2 text-center mt-24">
            Want To Discuss Your SEO Project With The Best SEO Agency In India?
          </h1>
          <div className="flex justify-center items-center">
            <p className="text-gray-500 text-[1.1rem] text-center w-5/6 leading-7 my-6">
              Blue Soltech LLP is a leading SEO company in India. We have a very
              strong portfolio of helping more than 500 clients with SEO
              projects. Contact us today to check our previous SEO results and
              know-how can our SEO agency in India help you increase your
              website rankings in search engines.
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

export default Seo_services;
