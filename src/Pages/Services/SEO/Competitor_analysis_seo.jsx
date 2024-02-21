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
const Competitor_analysis_seo = () => {
  return (
    <>
      <div className="bg-[#0F0E0E] p-10 xl:p-20 items-center">
        <div className="md:w-[80%] w-auto mt-4 mx-auto">
          <Services_first
            imgSrc={img1}
            btn_title="SEO Competitor Analysis"
            title="SEO Competitor Analysis As A Service"
            duration="SEO Competitor Analysis As A Service"
            tittle="Competitor Research Services In SEO That You Can Trust!"
            features1="Have a peek of your competitor’s online marketing strategy with Rankon Technologies. Start examining the strengths and weaknesses of your competitors to gain insights that can be used to improve your own online presence. With us, explore the importance of competitor analysis in SEO and know what factors should be considered during the analysis process."
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

          <h1 className="text-center text-white text-[2rem] mt-24 font-bold">
            Beat Your Competitors At Their Own Game With SEO Competitor Analysis
            Services
          </h1>
          <div className="flex justify-around items-center my-6 md:flex-row sm:flex-col-reverse sm:my-none">
            <div className="lg:w-2/5 sm:my-10 sm:w-full sm:mx-28 lg:mx-0 lg:text-start sm:text-center">
              <p className="text-gray-500 text-[1.1rem] my-2">
                Just like offpage SEO, onpage SEO, and technical SEO, competitor
                analysis is a crucial aspect of any SEO strategy. It provides
                valuable insights into what is working in your industry and what
                isn’t.
              </p>
              <p className="text-gray-500 text-[1.1rem] sm:my-4">
                By examining the strategies of your competitors, you can
                identify opportunities for growth, as well as potential areas of
                weakness.
              </p>
              <button className="bg-transparent border-[1px] hover:text-black hover:bg-white transition-all duration-200 text-white font-bold py-2 px-4 rounded-md lg:my-4">
                Get SEO Audit
              </button>
            </div>
            <div>
              <img src="" alt="" className="h-[300px] w-[600px] bg-white" />
            </div>
          </div>

          {/* ====================================== pricing plans ======================================= */}

          <div className="flex justify-center items-center lg:mt-24 sm:mt-0">
            <h1 className="text-center text-white text-[2rem] lg:mt-24 font-bold lg:w-4/5 sm:mt-12">
              Maximize Your Business Potential With Competitor Analysis: Know
              How It Can Help
            </h1>
          </div>
          <div className="flex justify-center items-center lg:my-24 text-center lg:flex-row sm:flex-col sm:w-[80%] sm:m-auto sm:my-12">
            <div className="flex flex-col items-center justify-between sm:my-4 transition-in duration-100 p-[10px] bg-black hover:border-2 hover:border-gray-600 hover:rounded-lg lg:mx-2">
              <img
                src=""
                alt=""
                className="h-[134px] w-[202px] bg-white mt-4"
              />
              <h5 className="text-white text-[1.5rem] mt-[20px]">
                Understand Your Market Better
              </h5>
              <p className="text-gray-500 text-[1.1rem] leading-7 my-2">
                Start analyzing your competitors' strategies to identify market
                trends, audience behavior, and consumer preferences.
              </p>
            </div>
            <div className="flex flex-col items-center justify-between sm:my-4 transition-in duration-100 p-[10px] bg-black hover:border-2 hover:border-gray-600 hover:rounded-lg lg:mx-2">
              <img
                src=""
                alt=""
                className="h-[134px] w-[202px] bg-white mt-4"
              />
              <h5 className="text-white text-[1.5rem] mt-[20px]">
                Stay Ahead Of Your Competition
              </h5>
              <p className="text-gray-500 text-[1.1rem] leading-7 my-2">
                Start identifying your competitors' strengths and weaknesses to
                improve your own strategies and stay ahead of the competition.
              </p>
            </div>
            <div className="flex flex-col items-center justify-between sm:my-4 transition-in duration-100 p-[10px] bg-black hover:border-2 hover:border-gray-600 hover:rounded-lg lg:mx-2">
              <img
                src=""
                alt=""
                className="h-[134px] w-[202px] bg-white mt-4"
              />
              <h5 className="text-white text-[1.5rem] mt-[20px]">
                Identify Opportunities For Growth
              </h5>
              <p className="text-gray-500 text-[1.1rem] leading-7 my-2">
                By identifying gaps in the market or areas where your
                competitors are weak, you can capitalize on these opportunities
                to grow your own business.
              </p>
            </div>
          </div>

          <div className="my-12">
            <h1 className="font-bold text-white text-[2rem] px-4 py-2 mb-2">
              The Importance Of SEO Competitor Analysis: Know By Numbers
            </h1>
            <p className=" text-gray-500 text-[1.1rem] leading-7 my-2 px-4">
              According to recent studies, businesses that perform competitor
              analysis are more likely to achieve higher search engine rankings
              and attract more organic traffic to their website. The study found
              that:
            </p>
            <p className=" text-gray-500 text-[1.1rem] leading-7 my-2 px-4">
              60.8% of websites that rank in the top 10 positions in search
              engine results pages (SERPs) perform competitor analysis
              regularly.
            </p>
            <p className=" text-gray-500 text-[1.1rem] leading-7 my-2 px-4">
              Websites that perform competitor analysis have, on average, 2.2
              times more organic search traffic than those that don’t.
            </p>
            <p className=" text-gray-500 text-[1.1rem] leading-7 my-2 px-4">
              The top-ranking website in SERPs has, on average, 168% more
              referring domains than the 10th ranking website.
            </p>
          </div>

          <div className="my-12">
            <h1 className="font-bold text-white text-[2rem] px-4 py-2 mb-2">
              What Is Included When Performing SEO Competitor Analysis?
            </h1>
            <p className=" text-gray-500 text-[1.1rem] leading-7 my-2 px-4">
              What Is Included When Performing SEO Competitor Analysis?
            </p>
            <p className=" text-gray-500 text-[1.1rem] leading-7 my-2 px-4">
              <span className="text-[1.2rem] text-gray-300">
                Website Domain Authority:
              </span>{" "}
              A website’s domain authority (DA) is a score assigned by search
              engines that indicates the website’s credibility and relevance. A
              higher DA can indicate better search engine rankings.
            </p>
            <p className=" text-gray-500 text-[1.1rem] leading-7 my-2 px-4">
              <span className="text-[1.2rem] text-gray-300">Domain Age:</span>{" "}
              The age of a website’s domain can influence its search engine
              rankings. Older domains are often seen as more credible by search
              engines.
            </p>
            <p className=" text-gray-500 text-[1.1rem] leading-7 my-2 px-4">
              <span className="text-[1.2rem] text-gray-300">
                Content Quality:
              </span>{" "}
              The quality of a website’s content can influence its search engine
              rankings. High quality content is more likely to attract links and
              shares. Informative contents help websites to get natural
              backlinks with content marketing services.
            </p>
            <p className=" text-gray-500 text-[1.1rem] leading-7 my-2 px-4">
              <span className="text-[1.2rem] text-gray-300">Backlink Gap:</span>{" "}
              Backlinks are links from other websites that point to your
              website. The number and quality of backlinks can influence your
              search engine rankings.
            </p>
            <p className=" text-gray-500 text-[1.1rem] leading-7 my-2 px-4">
              <span className="text-[1.2rem] text-gray-300">
                Loading Speed:
              </span>{" "}
              A website’s loading speed can influence its search engine
              rankings. Faster-loading websites are often ranked higher.
            </p>
            <p className=" text-gray-500 text-[1.1rem] leading-7 my-2 px-4">
              <span className="text-[1.2rem] text-gray-300">Keyword Gap:</span>{" "}
              The keywords used by your competitors can provide insights into
              what is working in your industry and what isn’t. Identifying gaps
              in your keyword strategy can help you improve your search engine
              rankings.
            </p>
            <p className=" text-gray-500 text-[1.1rem] leading-7 my-2 px-4">
              <span className="text-[1.2rem] text-gray-300">
                Common Keywords:
              </span>{" "}
              Identifying the common keywords used by your competitors can help
              you identify areas where you can differentiate your business and
              stand out from the competition.
            </p>
            <p className=" text-gray-500 text-[1.1rem] leading-7 my-2 px-4">
              <span className="text-[1.2rem] text-gray-300">
                Website Technical Analysis:
              </span>{" "}
              A website’s technical performance can influence its search engine
              rankings. Technical analysis can identify issues that may be
              affecting your search engine rankings.
            </p>
          </div>

          {/* ============================ Domain Age ====================================== */}

          <h1 className="text-center text-white text-[2rem] mt-24 font-bold">
            Domain Age And Its Significance In SEO Competitor Analysis
          </h1>
          <div className="flex justify-evenly items-center my-6 lg:flex-row sm:flex-col sm:my-none">
            <div>
              <img src="" alt="" className="h-[250px] w-[250px] bg-white" />
            </div>
            <div className="lg:w-2/5 sm:my-10 sm:w-full sm:mx-28 lg:mx-0 lg:text-start sm:text-center">
              <p className="text-gray-500 text-[1.1rem] my-2">
                Domain age is the length of time that a website has been
                registered and active. In general, older domains are seen as
                more credible and trustworthy by search engines. As a result,
                websites with older domains may have an advantage in search
                engine rankings.
              </p>
              <p className="text-gray-500 text-[1.1rem] sm:my-4">
                When performing competitor analysis, it is important to consider
                the age of your competitors’ domains and how it may be affecting
                their search engine rankings.
              </p>
            </div>
          </div>

          <Request
            tittle="Would You Like To Discuss Your Project With Our Experts?"
            content="Send Your Project Details By Clicking On Get In Touch And One Of Our Team Members Will Call You Soon!"
          />

          <h1 className="text-center text-white text-[2rem] mt-24 font-bold">
            Website Domain Authority And Its Significance In SEO Competitor
            Analysis
          </h1>
          <div className="flex justify-around items-center my-6 lg:flex-row sm:flex-col-reverse sm:my-none">
            <div className="lg:w-2/5 sm:my-10 sm:w-full sm:mx-28 lg:mx-0 lg:text-start sm:text-center">
              <p className="text-gray-500 text-[1.1rem] my-2">
                Domain authority (DA) is a metric that indicates the strength
                and credibility of a website. It is calculated by taking into
                account factors such as the number and quality of inbound links
                to the website, as well as its age, size, and content relevance.
              </p>
              <p className="text-gray-500 text-[1.1rem] sm:my-4">
                In competitor analysis, DA is important because it can give you
                an idea of how strong your competitors are in terms of their
                online presence. By analyzing their DA, you can determine how
                difficult it may be to outrank them in search engine results
                pages (SERPs).
              </p>
            </div>
            <div>
              <img src="" alt="" className="h-[300px] w-[600px] bg-white" />
            </div>
          </div>

          {/* =================================== Content Quality And Its Significance In SEO Competitor Analysis ====================== */}

          <h1 className="text-center text-white text-[2rem] lg:mt-20 font-bold sm:mt-20">
            Content Quality And Its Significance In SEO Competitor Analysis
          </h1>

          <div className="flex justify-center items-center lg:mt-12 sm:mt-12 md:my-12">
            <div>
              <div className="flex justify-center items-center lg:flex-row sm:flex-col">
                <img src="" alt="" className="h-[392px] w-[520px] bg-white" />
                <div className="lg:w-1/3 mx-24 sm:w-4/6 lg:order-none sm:order-2 sm:my-12 sm:text-center lg:text-start">
                  <p className="text-gray-500 text-[1.1rem] my-2">
                    Content is a critical component of any SEO strategy, as it
                    is what search engines use to understand what a website is
                    about and how relevant it is to a user’s search query.
                  </p>
                  <p className="text-gray-500 text-[1.1rem] sm:my-4">
                    In competitor analysis, content quality is important because
                    it can give you an idea of how well your competitors are
                    engaging with their audience. By analyzing their content,
                    you can identify gaps in your own content strategy and
                    improve your content to better meet the needs of your target
                    audience.
                  </p>
                </div>
              </div>

              <div className="flex justify-center items-center lg:my-12 lg:flex-row sm:flex-col">
                <div className="lg:w-1/3 sm:w-4/6 lg:order-none sm:order-2 sm:my-12 sm:text-center lg:text-start">
                  <h3 className="text-white text-[1.7rem]">
                    Backlink Gap And Its Significance In SEO Competitor Analysis
                  </h3>
                  <p className="text-gray-500 text-[1.1rem] lg:my-5 sm:my-4">
                    Backlinks are links from other websites that point to your
                    website. In SEO, backlinks are an important ranking factor,
                    as they indicate to search engines that other websites
                    consider your content to be valuable and relevant.
                  </p>
                </div>
                <img
                  src=""
                  alt=""
                  className="h-[392px] w-[520px] bg-white mx-24"
                />
              </div>

              <div className="flex justify-center items-center">
                <p className="text-gray-500 text-[1.1rem] lg:my-5 md:my-4 lg:mx-24 tracking-wide sm:my-12 sm:text-center sm:w-[80%]">
                  Backlink gap analysis involves analyzing your competitors’
                  backlinks to identify opportunities to build your own backlink
                  profile. By analyzing their backlinks, you can identify
                  high-quality websites that may be willing to link back to your
                  own website, improving your own search engine rankings.
                </p>
              </div>

              <div className="flex justify-center items-center lg:my-12 lg:flex-row sm:flex-col sm:lg-12">
                <img src="" alt="" className="h-[392px] w-[520px] bg-white" />
                <div className="lg:w-1/3 mx-24 sm:w-4/6 lg:order-none sm:order-2 sm:my-12 sm:text-center lg:text-start">
                  <h3 className="text-white text-[1.7rem]">
                    Loading Speed And Its Significance In SEO Competitor
                    Analysis
                  </h3>
                  <p className="text-gray-500 text-[1.1rem] lg:my-5 md:my-4">
                    Website loading speed is an important factor in SEO, as
                    slow-loading websites can negatively impact user experience
                    and lead to higher bounce rates.
                  </p>
                  <p className="text-gray-500 text-[1.1rem] lg:my-5 md:my-4">
                    In competitor analysis, loading speed is important because
                    it can give you an idea of how well your competitors are
                    meeting the needs of their audience.
                  </p>
                  <p className="text-gray-500 text-[1.1rem] lg:my-5 md:my-4">
                    By analyzing their loading speed, you can identify areas
                    where your own website may be underperforming and take steps
                    to improve it.
                  </p>
                </div>
              </div>

              <div className="flex justify-center items-center lg:flex-row sm:flex-col sm:lg-12">
                <div className="lg:w-1/3 sm:w-4/6 lg:order-none sm:order-2 sm:my-12 sm:text-center lg:text-start">
                  <h3 className="text-white text-[1.7rem] lg:text-start">
                    Keyword Gap And Its Significance In SEO Competitor Analysis
                  </h3>
                  <p className="text-gray-500 text-[1.1rem] lg:my-5 md:my-4">
                    Keywords are the terms that users enter into search engines
                    when they are looking for information. In competitor
                    analysis, keyword gap analysis involves identifying the
                    keywords that your competitors are targeting and comparing
                    them to your own keyword strategy.
                  </p>
                  <p className="text-gray-500 text-[1.1rem] lg:my-5 md:my-4">
                    By analyzing their keywords, you can identify opportunities
                    to improve your own keyword strategy and better meet the
                    needs of your target audience.
                  </p>
                </div>
                <img
                  src=""
                  alt=""
                  className="h-[392px] w-[520px] bg-white mx-24"
                />
              </div>

              <div className="flex justify-center items-center lg:my-12 lg:flex-row sm:flex-col sm:lg-12">
                <img src="" alt="" className="h-[392px] w-[520px] bg-white" />
                <div className="lg:w-1/3 mx-24 sm:w-4/6 lg:order-none sm:order-2 sm:my-12 sm:text-center lg:text-start">
                  <h3 className="text-white text-[1.7rem]">
                    Common Keywords And Their Significance In SEO Competitor
                    Analysis
                  </h3>
                  <p className="text-gray-500 text-[1.1rem] lg:my-5 md:my-4">
                    Common keywords are the keywords that multiple competitors
                    are targeting. In competitor analysis, common keyword
                    analysis can give you an idea of what is important to your
                    industry and what keywords are essential to rank for.
                  </p>
                  <p className="text-gray-500 text-[1.1rem] lg:my-5 md:my-4">
                    By analyzing common keywords, you can identify gaps in your
                    own keyword strategy and take steps to improve it.
                  </p>
                </div>
              </div>

              <div className="flex justify-center items-center lg:flex-row sm:flex-col sm:lg-12">
                <div className="lg:w-1/3 sm:w-4/6 lg:order-none sm:order-2 sm:my-12 sm:text-center lg:text-start">
                  <h3 className="text-white text-[1.7rem] lg:text-start">
                    Website Technical Analysis And Its Significance In SEO
                    Competitor Analysis
                  </h3>
                  <p className="text-gray-500 text-[1.1rem] lg:my-5 md:my-4">
                    Website technical SEO analysis involves analyzing the
                    technical aspects of a website, such as its structure, URL
                    structure, and meta tags.
                  </p>
                  <p className="text-gray-500 text-[1.1rem] lg:my-5 md:my-4">
                    In competitor analysis, technical analysis is important
                    because it can give you an idea of how well your
                    competitors’ websites are optimized for search engines. By
                    analyzing their technical aspects, you can identify areas
                    where your own website may be underperforming.
                  </p>
                </div>
                <img
                  src=""
                  alt=""
                  className="h-[392px] w-[520px] bg-white mx-24"
                />
              </div>
            </div>
          </div>

          <p className="bg-gray-500 text-white text-[1.1rem] lg:my-5 md:my-4 text-center py-6 rounded-lg">
            We also use SEO tools that include keyword analysis tools, onpage
            SEO tools and technical SEO tools.
          </p>

          {/* ================================================================================================================================================ */}

          <h1 className="text-center text-white text-[2rem] lg:mt-20 font-bold sm:mt-20 lg:mx-48">
            When Performing Competitor Analysis Rely Only On Our Competitive SEO
            Experts
          </h1>

          <p className="text-gray-500 text-[1.1rem] lg:my-5 md:my-4 lg:mx-24 tracking-wide text-center">
            Competitor analysis is a critical component of any SEO strategy, and
            it requires a deep understanding of the various factors that impact
            a website’s search engine rankings, and here’s where you will need
            the assistance of the experts at Rankon Technologies.
          </p>

          <div className="my-24 flex justify-evenly items-start lg:flex-row sm:flex-col sm:items-center sm:my-0 sm:mb-0">
            <div className="mx-10 p-[20px] sm:my-4 hover:bg-black ease-linear rounded-xl hover:border-[1px] transition-all duration-300 hover:scale-105">
              <img src="" alt="" className="h-[199px] w-[249px] m-auto my-6" />
              <h3 className="text-white text-[1.2rem] text-center">
                Expertise
              </h3>
              <p className="text-gray-500 text-[1.1rem] text-center mt-5">
                Our team has the knowledge and expertise needed to conduct a
                thorough competitor analysis. We understand the various factors
                that impact search engine rankings and will be able to provide
                you with insights and recommendations to improve your SEO
                strategy.
              </p>
            </div>
            <div className="mx-10 p-[20px] ease-linear sm:my-4 hover:bg-black rounded-xl hover:border-[1px] transition-all duration-300 hover:scale-105">
              <img src="" alt="" className="h-[199px] w-[249px] m-auto my-6" />
              <h3 className="text-white text-[1.2rem] text-center">
                Resources
              </h3>
              <p className="text-gray-500 text-[1.1rem] text-center mt-5">
                Being a professional team, we have access to the latest tools
                and resources needed to conduct a comprehensive competitor
                analysis. We will be able to gather and analyze data quickly and
                efficiently, saving you time and effort.
              </p>
            </div>
          </div>

          <div className="my-24 flex justify-evenly items-start lg:flex-row sm:flex-col sm:items-center sm:my-0 sm:mb-0">
            <div className="mx-10 p-[20px] ease-linear sm:my-4 hover:bg-black rounded-xl hover:border-[1px] transition-all duration-300 hover:scale-105">
              <img src="" alt="" className="h-[199px] w-[249px] m-auto my-6" />
              <h3 className="text-white text-[1.2rem] text-center">
                Objectivity
              </h3>
              <p className="text-gray-500 text-[1.1rem] text-center mt-5">
                Our team of professionals will be able to provide you with an
                objective analysis of your competitors, free from bias or
                personal opinions. This can help you make informed decisions
                about your own SEO strategy.
              </p>
            </div>
            <div className="mx-10 p-[20px] ease-linear sm:my-4 hover:bg-black rounded-xl hover:border-[1px] transition-all duration-300 hover:scale-105">
              <img src="" alt="" className="h-[199px] w-[249px] m-auto my-6" />
              <h3 className="text-white text-[1.2rem] text-center">
                Customization
              </h3>
              <p className="text-gray-500 text-[1.1rem] text-center mt-5">
                A professional team will be able to tailor their analysis to
                your specific business needs and goals. They will be able to
                provide you with insights and recommendations that are relevant
                and actionable.
              </p>
            </div>
          </div>

          <p className="bg-gray-500 text-white text-[1.1rem] lg:my-5 md:my-4 text-center py-6 rounded-lg sm:px-2">
            Visit our SEO services to know more about SEO offerings. We offer
            best SEO packages with quick support.
          </p>

          <div className="flex flex-col justify-around items-center">
            <div>
              <h1 className="text-center text-white text-[2rem] lg:mt-20 font-bold sm:mt-20 lg:mx-48">
                Our SEO Results
              </h1>
            </div>
            <div className="flex justify-around items-center my-12 lg:flex-row sm:flex-col">
              <div>
                <img
                  src=""
                  alt=""
                  className="h-[203px] w-[360px] mx-6 lg:my-0 sm:my-4"
                />
              </div>
              <div>
                <img
                  src=""
                  alt=""
                  className="h-[203px] w-[360px] mx-6 lg:my-0 sm:my-4"
                />
              </div>
              <div>
                <img
                  src=""
                  alt=""
                  className="h-[203px] w-[360px] mx-6 lg:my-0 sm:my-4"
                />
              </div>
            </div>
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

export default Competitor_analysis_seo;
