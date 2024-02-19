import React from 'react'
import Services_first from '../../../component/Services_first'
import Logoslider from '../../../component/Logoslider'
import Questions from '../../../component/Questions';
import onpage1 from '../../../assets/img/onpage1.png'
import onpage2 from '../../../assets/img/onpage2.png'
import onpage3 from '../../../assets/img/onpage3.png'
import onpage4 from '../../../assets/img/onpage4.jpg'
import onpage5 from '../../../assets/img/onpage5.png'
import onpage6 from '../../../assets/img/onpage6.png'
import onpage7 from '../../../assets/img/onpage7.png'

import img1 from '../../../assets/img/img1.webp'

const faqs = [
  {
    question: "What is on-page SEO?",
    answer: ["On-page SEO is the practice of optimizing individual web pages to rank higher and earn more relevant traffic in search engines. It involves optimizing various on-page elements such as content, headings, meta tags, images, internal links, and URL structure to improve search engine visibility.",
    ]
  },
  {
    question: "What are the key elements of on-page SEO?",
    answer: [
      "The key elements of on-page SEO include keyword research, high-quality and relevant content, optimized headings and subheadings, meta tags optimization, internal linking, image optimization, user-friendly URL structure, mobile-friendliness, page speed, and proper use of schema markup."
    ]
  },
  {
    question: "How does on-page SEO differ from off-page SEO?",
    answer: [
      "On-page SEO focuses on optimizing individual web pages on a website, whereas off-page SEO focuses on optimizing external factors such as backlinks, social media presence, and other factors that are not directly related to the website itself.",
    ]
  },
  {
    question: "What are some best practices for on-page SEO?",
    answer: [
      "Some best practices for on-page SEO include conducting thorough keyword research, creating high-quality and relevant content, using descriptive and optimized headings, optimizing meta tags, using internal links, optimizing images, using mobile-friendly designs, and improving page speed.",
    ]
  },
  {
    question: "Why is on-page SEO important?",
    answer: [
      "On-page SEO is important because it helps search engines understand the content and relevance of web pages, which helps them rank higher in search engine results pages (SERPs). By optimizing on-page elements, websites can improve their search engine visibility, attract more relevant traffic, and improve user engagement and conversions.",
    ]
  }
];
const Onpage_seo = () => {
  return (
    <div className='bg-[#0F0E0E] xl:p-20 p-10 items-center'>
      <div className='md:w-[80%] w-auto mt-4 mx-auto'>
        <Services_first
          imgSrc={img1}
          btn_title="OnPage SEO Services"
          duration="OnPage SEO Services"
          tittle="Best OnPage SEO Services From Top-Rated SEO Experts In India"
          features2="Best OnPage SEO Services Company in India – RankON Technologies has a team of experienced SEO professionals who specialize in delivering top-notch on-page SEO services to clients across various industries."
        />
        <div className='flex items-center justify-center xl:mt-[120px] mt-[60px]'>
          <div className=' w-full'>
            <h1 className='text-gray-300 text-2xl xl:text-3xl mt-4 font-bold text-center'>Our Agency Clients</h1>
            <p className=' text-[1.1rem] leading-7 text-gray-500 text-center  my-5 mx-10'>Check out some of the precious clients we have helped with Digital Marketing and Website Development Services.</p>
            <Logoslider />
          </div>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='text-gray-300 text-2xl xl:text-3xl mt-4 font-bold text-center'>What Is OnPage SEO?</h1>
          <div className='xl:flex flex-row mt-9 justify-around'>
            <div className='xl:w-[50%] w-full flex justify-center xl:justify-center items-center'>
              <img src={onpage1} className='w-[70%]' />
            </div>
            <div className='xl:w-[50%] w-full'>
              <p className=' text-[1.1rem] leading-7 text-gray-500 text-start my-5'>OnPage SEO is all about optimizing a website’s pages to make them more search engine friendly for the targeted keywords and audience and enhance their ranking in search engine results pages (SERPs). Essentially, it’s about making your website as effortless to find and navigate as possible. To achieve this, there are many techniques that businesses and website owners can use, such as creating high-quality content that’s relevant to their audience, using relevant keywords throughout their content and meta tags, and making sure their website is visually adorable and easy to navigate.</p>
              <p className=' text-[1.1rem] leading-7 text-gray-500 text-start my-5'>One of the key things to remember about On-Page SEO is that it’s all about providing a great user experience. That means making sure your website is easy to use, loads quickly, and has relevant and engaging content that keeps visitors coming back for more. It also means making sure your website is mobile-friendly, as more and more people are accessing the internet on their mobile devices these days.</p>
            </div>
          </div>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='text-gray-300 text-2xl xl:text-3xl mt-4 font-bold text-center'>What Is Included In On-Page SEO Services?</h1>
          <p className=' text-[1.1rem] leading-7 text-gray-500 text-center my-5'>Some of the most important On-Page SEO factors include using descriptive and keyword-rich titles and meta descriptions, incorporating header tags to structure your content, and optimizing your images and videos with descriptive alt tags. By accomplishing all of these things, businesses and website owners can improve their website’s online visibility and attract more organic traffic, ultimately increasing their chances of ranking higher in SERPs.</p>
          <h1 className='text-gray-300 text-2xl xl:text-3xl mt-4 font-bold text-center'>Our On-Page SEO Services Include: -</h1>
          <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 text-sm justify-between mt-11 mx-auto'>
            <div className='justify-start items-start text-start px-7'>
              <ul className='font-bold text-gray-500  list-disc'>
                <li className='mt-2'>Higher Intent Keyword Research That Has Less Competition and High Search Volume</li>
                <li className='mt-2'>Meta Tags For Better CTR</li>
                <li className='mt-2'>Sitemap Creation for Users and Search Engines</li>
              </ul>
            </div>
            <div className='justify-start items-start text-start px-7'>
              <ul className='font-bold text-gray-500  list-disc'>
                <li className='mt-2'>Internal Linking to Improve Website Structure and Faster Crawling</li>
                <li className='mt-2'>Heading Tags Optimization</li>
                <li className='mt-2'>Alt Text Optimization</li>
                <li className='mt-2'>Website SEO Audit (UI, UX, CTA, Bounce Rate)</li>
              </ul>
            </div>
            <div className='justify-start items-start text-start px-7'>
              <ul className='font-bold text-gray-500  list-disc'>
                <li className='mt-2'>Robots File Set Up and Optimization</li>
                <li className='mt-2'>Anchor Text Optimization</li>
                <li className='mt-2'>Content Optimization</li>
                <li className='mt-2'>Blog Audit</li>
                <li className='mt-2'>Tracking Set Up (Analytics and Search Console)</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='text-gray-300 text-2xl xl:text-3xl mt-4 font-bold text-center'>OnPage SEO Services Overview</h1>
          <div className='xl:flex flex-row mt-9 justify-around'>
            <div className='xl:w-[50%] w-full'>
              <h1 className='text-gray-300 text-2xl xl:text-3xl mt-4 font-bold text-center'>Keyword Research</h1>
              <p className=' text-[1.1rem] leading-7 text-gray-500 text-start my-5'>Keyword research is the process of identifying the words and phrases that people use to search for information on search engines like Google, Bing, and Yahoo.</p>
              <p className=' text-[1.1rem] leading-7 text-gray-500 text-start my-5'>It is a critical aspect of search engine optimization (SEO) as it helps in optimizing the website’s content and improving its visibility on search engine results pages (SERPs).</p>
              <button class='bg-transparent border-[1px] hover:text-black hover:bg-white transition-all duration-200 text-white font-bold py-2 px-4 rounded-md m-4'>Contact Us</button>
            </div>
            <div className='xl:w-[50%] w-full flex justify-center xl:justify-center items-center'>
              <img src={img1} className='w-[50%]' />
            </div>
          </div>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='text-gray-300 text-2xl xl:text-3xl mt-4 font-bold text-center'>What Is Included In On-Page SEO Services?</h1>
          <h1 className='text-gray-300 text-2xl xl:text-3xl mt-7 font-bold text-start'>Our On-Page SEO Services Include: -</h1>
          <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 text-sm justify-between mt-7 mx-auto'>
            <div className='justify-start items-start text-start px-7'>
              <ul className='font-bold text-gray-500  list-disc'>
                <li className='mt-2'>It helps in understanding the search behavior of the target audience.</li>
              </ul>
            </div>
            <div className='justify-start items-start text-start px-7'>
              <ul className='font-bold text-gray-500  list-disc'>
                <li className='mt-2'>It provides insights into the competition and helps identify gaps in the market.</li>
              </ul>
            </div>
            <div className='justify-start items-start text-start px-7'>
              <ul className='font-bold text-gray-500  list-disc'>
                <li className='mt-2'>It helps in optimizing the website’s content, making it more relevant to search queries.</li>
              </ul>
            </div>
            <div className='justify-start items-start text-start px-7'>
              <ul className='font-bold text-gray-500  list-disc'>
                <li className='mt-2'>It helps in improving the website’s ranking on SERPs, increasing the visibility of the website.</li>
              </ul>
            </div>
          </div>
          <h1 className='text-gray-300 text-2xl xl:text-3xl mt-7 font-bold text-start'>How Do We Do Keyword Research</h1>
          <p className=' text-[1.1rem] leading-7 text-gray-500 text-start my-5'>Keyword research involves the following steps:</p>
          <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 text-sm justify-between mt-7 mx-auto my-auto'>
            <div className='justify-start items-start text-start px-7'>
              <ul className='font-bold text-gray-500  list-disc'>
                <li className='mt-2'>Identify the target audience and understand their search behavior.</li>
              </ul>
            </div>
            <div className='justify-start items-start text-start px-7'>
              <ul className='font-bold text-gray-500  list-disc'>
                <li className='mt-2'>Brainstorm a list of keywords that are relevant to the website’s content.</li>
              </ul>
            </div>
            <div className='justify-start items-start text-start px-7'>
              <ul className='font-bold text-gray-500  list-disc'>
                <li className='mt-2'>Analyze the competition and identify the gaps in the market.</li>
              </ul>
            </div>
            <div className='justify-start items-start text-start px-7'>
              <ul className='font-bold text-gray-500  list-disc'>
                <li className='mt-2'>Use keyword research tools to expand the list of keywords and identify the search volume and competition level for each keyword.</li>
              </ul>
            </div>
            <div className='justify-start items-start text-start px-7'>
              <ul className='font-bold text-gray-500  list-disc'>
                <li className='mt-2'>Select the keywords that have a high search volume and low competition level.</li>
              </ul>
            </div>
            <div className='justify-start items-start text-start px-7'>
              <ul className='font-bold text-gray-500  list-disc'>
                <li className='mt-2'>Use the selected keywords in the website’s content, title tags, meta descriptions, and URLs.</li>
              </ul>
            </div>
          </div>
          <h1 className='text-gray-300 text-2xl xl:text-3xl mt-7 font-bold text-start'>Tools We Use For Keyword Research In SEO</h1>
          <p className=' text-[1.1rem] leading-7 text-gray-500 text-start my-5'>Some popular keyword research tools are:</p>
          <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 text-sm justify-between mt-7 mx-auto my-auto'>
            <div className='justify-start items-start text-start px-7'>
              <ul className='font-bold text-gray-500  list-disc'>
                <li className='mt-2'>Google Keyword Planner</li>
                <li className='mt-2'>Ubersuggest</li>
              </ul>
            </div>
            <div className='justify-start items-start text-start px-7'>
              <ul className='font-bold text-gray-500  list-disc'>
                <li className='mt-2'>Ahrefs Keywords Explorer</li>
                <li className='mt-2'>Keyword Tool</li>
              </ul>
            </div>
            <div className='justify-start items-start text-start px-7'>
              <ul className='font-bold text-gray-500  list-disc'>
                <li className='mt-2'>SEMrush Keyword Magic Tool</li>
                <li className='mt-2'>Serpstat</li>
              </ul>
            </div>
            <div className='justify-start items-start text-start px-7'>
              <ul className='font-bold text-gray-500  list-disc'>
                <li className='mt-2'>Moz Keyword Explorer</li>
                <li className='mt-2'>SpyFu</li>
              </ul>
            </div>
          </div>
          <p className=' text-[1.1rem] leading-7 text-gray-500 text-start my-5'>These tools help in identifying relevant keywords, analyzing their search volume, competition level, and providing insights into the competition’s strategy.</p>
          <p className=' text-[1.1rem] leading-7 text-gray-500 text-start my-5'>We also use SEO tools that include keyword analysis tools, onpage SEO tools and technical SEO tools.</p>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <div className='xl:flex flex-row mt-9 justify-around'>
            <div className='xl:w-[50%] w-full flex justify-center xl:justify-center items-center'>
              <img src={onpage2} className='w-[70%]' />
            </div>
            <div className='xl:w-[50%] w-full'>
              <h1 className='text-gray-300 text-2xl xl:text-3xl mt-4 font-bold text-start'>Meta Tag Optimization</h1>
              <p className=' text-[1.1rem] leading-7 text-gray-500 text-start my-5'>Meta tags are snippets of code that are placed in the head section of a web page’s HTML code. They provide information about the web page to search engines and website visitors.</p>
              <p className=' text-[1.1rem] leading-7 text-gray-500 text-start my-5'>Meta tags do not appear on the web page itself but are visible to search engines and are used to provide information about the page’s content.</p>
              <button class='bg-transparent border-[1px] hover:text-black hover:bg-white transition-all duration-200 text-white font-bold py-2 px-4 rounded-md m-4'>Contact Us</button>
            </div>
          </div>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='text-gray-300 text-2xl xl:text-3xl mt-4 font-bold text-start'>Importance Of Meta Tags</h1>
          <p className=' text-[1.1rem] leading-7 text-gray-500 text-start my-5'>Meta tags are important for SEO because they help search engines understand the content of a web page. They provide information such as the page title, description, and keywords, which help search engines and users understand what the page is about. Properly optimized meta tags can help improve a web page’s visibility in search engine results pages (SERPs) and attract more traffic to the website.</p>
          <h1 className='text-gray-300 text-2xl xl:text-3xl mt-4 font-bold text-start'>How Do We Write SEO-Friendly Meta Tags</h1>
          <p className=' text-[1.1rem] leading-7 text-gray-500 font-bold text-start my-5'>To write SEO-friendly meta tags, follow these tips:</p>
          <ul className='font-bold text-gray-500  list-disc'>
            <li className='mt-2'>Write unique and descriptive titles: The page title should be concise, unique, and accurately describe the content of the page. It should contain the primary keyword and be within 60 characters.</li>
            <li className='mt-2'>Write a compelling meta description: The meta description should provide a concise summary of the page’s content and include the primary keyword. It should be within 155 characters and should be compelling enough to attract users to click through to the website.</li>
            <li className='mt-2'>Use relevant keywords: Use relevant keywords in the title and description meta tags. Ensure that the keywords used are relevant to the content of the page and are used naturally.</li>
            <li className='mt-2'>Avoid duplicating meta tags: Each page on the website should have unique meta tags to avoid duplication. This helps search engines understand the content of each page and rank them accordingly.</li>
            <li className='mt-2'>Use schema markup: Schema markup is a type of structured data that provides additional information to search engines about the content of a web page. It can be used to include additional information such as product reviews, prices, and ratings.</li>
          </ul>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='text-gray-300 text-2xl xl:text-3xl mt-4 font-bold text-start'>Sitemap</h1>
          <p className=' text-[1.1rem] leading-7 text-gray-500 text-start my-5'>A sitemap is a file that provides a list of all the pages on a website, including the URLs and metadata for each page. The purpose of a sitemap is to help search engines crawl and index all the pages on a website more efficiently.</p>

          <div className='xl:flex flex-row mt-9 justify-around'>
            <div className='xl:w-[50%] w-full flex justify-center xl:justify-start items-center'>
              <img src={onpage3} className='w-[70%]' />
            </div>
            <div className='xl:w-[50%] w-full'>
              <p className=' text-[1.1rem] leading-7 text-gray-500 text-start my-5'>Sitemaps can be created in various formats, such as XML, HTML, or TXT, and can be submitted to search engines to inform them about the website’s structure and content. This helps search engines understand the website’s organization and hierarchy, which can help improve the website’s search engine ranking.</p>
              <p className=' text-[1.1rem] leading-7 text-gray-500 text-start my-5'>Sitemaps can also include additional information about each page, such as the date it was last modified, the frequency of updates, and the importance of the page relative to other pages on the site. This metadata can help search engines determine which pages to crawl and how often to revisit them.</p>
              <p className=' text-[1.1rem] leading-7 text-gray-500 text-start my-5'>In addition to helping search engines, HTML sitemaps can also be useful for website visitors, as they provide a quick and easy way to navigate to different pages on the site. Some websites may include a link to their sitemap in the footer or navigation menu to make it easily accessible to users.</p>
            </div>
          </div>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <div className='xl:flex flex-row mt-9 justify-around'>
            <div className='xl:w-[50%] w-full'>
              <h1 className='text-gray-300 text-2xl xl:text-3xl mt-4 font-bold text-start'>Robots File Optimization</h1>
              <p className=' text-[1.1rem] leading-7 text-gray-500 text-start my-5'>A robots.txt file is a file that instructs search engine crawlers which pages or directories on a website they should or should not crawl. Optimizing a robots.txt file can help improve a website’s search engine optimization (SEO) by preventing search engines from crawling pages that are not important or should not be indexed.</p>
              <button class='bg-transparent border-[1px] hover:text-black hover:bg-white transition-all duration-200 text-white font-bold py-2 px-4 rounded-md m-4'>Get In Touch</button>
            </div>
            <div className='xl:w-[50%] w-full flex justify-center xl:justify-center items-center'>
              <img src={onpage4} className='w-[60%] rounded-lg' />
            </div>
          </div>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='text-gray-300 text-2xl xl:text-3xl mt-4 font-bold text-start'>How Do We Optimize Your Robots.Txt File?</h1>
          <ul class='text-white list-disc'>
            <li class="mt-7 text-[1.1rem] leading-7 text-gray-500"><span class='text-lg text-white'>Use a robots.txt file : </span>The first step in optimizing a robots.txt file is to make sure that you have one. Some websites do not have a robots.txt file, which can cause search engine crawlers to crawl all pages, including those that are not important or should not be indexed.</li>
            <li class="mt-7 text-[1.1rem] leading-7 text-gray-500"><span class='text-lg text-white'>Specify which pages to crawl : </span>Use the “Disallow” directive to specify which pages or directories should not be crawled by search engines. This can include pages that contain duplicate content, are low-quality, or are not relevant to the website’s main topics. For example, if you have an “admin” directory that contains sensitive information, you may want to disallow crawlers from accessing it.</li>
            <li class="mt-7 text-[1.1rem] leading-7 text-gray-500"><span class='text-lg text-white'>Allow access to important pages : </span>Make sure that the robots.txt file allows search engines to crawl the important pages on your website. You can use the “Allow” directive to specify which pages or directories should be crawled. For example, you may want to allow access to your website’s homepage, product pages, or blog.</li>
            <li class="mt-7 text-[1.1rem] leading-7 text-gray-500"><span class='text-lg text-white'>Use wildcards : </span>Use wildcards to specify a pattern of pages or directories that should be disallowed or allowed. For example, you can use the “*” wildcard to specify all pages in a directory or all directories that contain a certain keyword.</li>
            <li class="mt-7 text-[1.1rem] leading-7 text-gray-500"><span class='text-lg text-white'>Test the robots.txt file : </span>Make sure to test the robots.txt file using Google Search Console or another testing tool to ensure that it is properly configured and that search engines can crawl the important pages on your website.</li>
          </ul>
          <p className=' text-[1.1rem] leading-7 text-gray-500 text-start my-5'>Overall, optimizing a robots.txt file can help improve a website’s SEO by preventing search engines from crawling unimportant or sensitive pages while allowing access to important pages.</p>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <div className='xl:flex flex-row mt-9 justify-around'>
            <div className='xl:w-[50%] w-full flex justify-center xl:justify-center items-center'>
              <img src={onpage5} className='w-[50%]' />
            </div>
            <div className='xl:w-[50%] w-full'>
              <h1 className='text-gray-300 text-2xl xl:text-3xl mt-4 font-bold text-start'>Heading Tag Optimization</h1>
              <p className=' text-[1.1rem] leading-7 text-gray-500 text-start my-5'>Heading tags (H1, H2, H3, etc.) are important elements of on-page optimization in SEO. They help search engines understand the structure and hierarchy of the content on a webpage and can improve the user experience by making the content easier to read and navigate.</p>
              <button class='bg-transparent border-[1px] hover:text-black hover:bg-white transition-all duration-200 text-white font-bold py-2 px-4 rounded-md m-4'>Get In Touch</button>
            </div>
          </div>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='text-gray-300 text-2xl xl:text-3xl mt-4 font-bold text-start'>Here Is How We Optimize Your Website’s Headings For Better SEO</h1>
          <ul class='text-white list-disc'>
            <li class="mt-7 text-[1.1rem] leading-7 text-gray-500"><span class='text-lg text-white'>Use H1 tag for main headings : </span>The H1 tag should be used for the main heading of the webpage and should include the primary keyword that the webpage is targeting. This helps search engines understand the topic of the page and can improve its relevance and ranking.</li>
            <li class="mt-7 text-[1.1rem] leading-7 text-gray-500"><span class='text-lg text-white'>Use H2-H6 tags for subheadings : </span>Use the H2 tag for the first subheading and subsequent subheadings should use H3, H4, and so on, in descending order of importance. This creates a clear hierarchy of the content and helps search engines understand the relationships between different sections of the content.</li>
            <li class="mt-7 text-[1.1rem] leading-7 text-gray-500"><span class='text-lg text-white'>Keep headings concise and descriptive : </span>Headings should be concise and accurately describe the content that follows. They should be relevant to the topic of the page and should include important keywords when appropriate. Avoid using generic or vague headings that don’t accurately describe the content.</li>
            <li class="mt-7 text-[1.1rem] leading-7 text-gray-500"><span class='text-lg text-white'>Use CSS styling instead of font size for headings : </span>Instead of using larger font sizes to indicate headings, use CSS styling to style the heading tags. This helps maintain consistency in the appearance of the headings and avoids potential issues with accessibility and mobile responsiveness.</li>
            <li class="mt-7 text-[1.1rem] leading-7 text-gray-500"><span class='text-lg text-white'>Avoid overusing headings : </span>While headings can improve the readability and SEO of a webpage, overusing them can be counterproductive. Use headings only when appropriate and avoid using multiple H1 tags on a single webpage.</li>
          </ul>
          <p className=' text-[1.1rem] leading-7 text-gray-500 text-start my-5'>Overall, optimizing a robots.txt file can help improve a website’s SEO by preventing search engines from crawling unimportant or sensitive pages while allowing access to important pages.</p>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <div className='xl:flex flex-row mt-9 justify-around'>
            <div className='xl:w-[50%] w-full'>
              <h1 className='text-gray-300 text-2xl xl:text-3xl mt-4 font-bold text-start'>Alt Text Optimization</h1>
              <p className=' text-[1.1rem] leading-7 text-gray-500 text-start my-5'>Alt text (alternative text) is a descriptive text that is added to an image on a webpage to describe its content.</p>
              <p className=' text-[1.1rem] leading-7 text-gray-500 text-start my-5'>It is an important element of on-page optimization in SEO as it helps search engines understand the content of the image and can improve the accessibility of the webpage for visually impaired users.</p>
              <button class='bg-transparent border-[1px] hover:text-black hover:bg-white transition-all duration-200 text-white font-bold py-2 px-4 rounded-md m-4'>Get In Touch</button>
            </div>
            <div className='xl:w-[50%] w-full flex justify-center xl:justify-center items-center'>
              <img src={onpage6} className='w-[50%]' />
            </div>
          </div>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='text-gray-300 text-2xl xl:text-3xl mt-4 font-bold text-start'>Here Is How We Optimize Your Images For Better SEO</h1>
          <ul class='text-white list-disc'>
            <li class="mt-7 text-[1.1rem] leading-7 text-gray-500"><span class='text-lg text-white'>Use descriptive text : </span>The alt text should accurately describe the content of the image. Use clear and concise language to describe the image, including any relevant keywords that are related to the content of the webpage.</li>
            <li class="mt-7 text-[1.1rem] leading-7 text-gray-500"><span class='text-lg text-white'>Keep it concise : </span>The alt text should be concise and to the point. Avoid using long or overly descriptive sentences that may not accurately describe the content of the image.</li>
            <li class="mt-7 text-[1.1rem] leading-7 text-gray-500"><span class='text-lg text-white'>Use relevant keywords : </span>Incorporate relevant keywords into the alt text when appropriate, but avoid keyword stuffing. Only use keywords that accurately describe the content of the image.</li>
            <li class="mt-7 text-[1.1rem] leading-7 text-gray-500"><span class='text-lg text-white'>Be mindful of context : </span>The alt text should be contextually relevant to the content of the webpage. Avoid using generic or irrelevant text that does not accurately describe the content of the image.</li>
            <li class="mt-7 text-[1.1rem] leading-7 text-gray-500"><span class='text-lg text-white'>Don’t leave it blank : </span>Always include alt text for every image on the webpage, even if it is a decorative image or a spacer. Leaving the alt text blank can negatively impact the accessibility of the webpage.</li>
            <li class="mt-7 text-[1.1rem] leading-7 text-gray-500"><span class='text-lg text-white'>Use proper formatting : </span>Use proper formattings, such as capitalization and punctuation, to make the alt text easier to read and understand.</li>
          </ul>
          <p className=' text-[1.1rem] leading-7 text-gray-500 text-start my-5'>In summary, optimizing alt text can improve the SEO and accessibility of a webpage. Use descriptive and concise language, include relevant keywords, be mindful of context, never leave it blank, and use proper formatting.</p>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='text-gray-300 text-2xl xl:text-3xl mt-4 font-bold text-start'>Content Optimization</h1>
          <p className=' text-[1.1rem] leading-7 text-gray-500 text-start my-5'>Content optimization is the process of optimizing website content to improve its search engine visibility and attract more traffic.</p>
          <h1 className='text-gray-300 text-2xl xl:text-3xl mt-4 font-bold text-start'>What do we do to optimize your website’s content for better SEO?</h1>
          <ul class='text-white list-disc'>
            <li class="mt-7 text-[1.1rem] leading-7 text-gray-500"><span class='text-lg text-white'>Conduct keyword research : </span>Keyword research is the foundation of content optimization. Identify relevant keywords that your target audience is using to search for your product or service and incorporate them into your content.</li>
            <li class="mt-7 text-[1.1rem] leading-7 text-gray-500"><span class='text-lg text-white'>Create high-quality content : </span>Creating high-quality, informative, and engaging content is crucial for SEO. Ensure that your content is original, well-researched, and provides value to your audience.</li>
            <li class="mt-7 text-[1.1rem] leading-7 text-gray-500"><span class='text-lg text-white'>Optimize headings : </span>Use descriptive and relevant headings (H1, H2, H3) that include your primary keywords to help search engines understand the structure of your content.</li>
            <li class="mt-7 text-[1.1rem] leading-7 text-gray-500"><span class='text-lg text-white'>Use internal and external links : </span>Use internal links to help search engines understand the relationship between different pages on your website. Use external links to authoritative sources to provide additional context and value to your audience.</li>
            <li class="mt-7 text-[1.1rem] leading-7 text-gray-500"><span class='text-lg text-white'>Optimize meta tags : </span>Meta tags, including title tags and meta descriptions, provide a brief summary of the content on a webpage. Use descriptive and keyword-rich meta tags to help search engines understand the content of your page.</li>
            <li class="mt-7 text-[1.1rem] leading-7 text-gray-500"><span class='text-lg text-white'>Use multimedia : </span>Incorporate images, videos, and other multimedia elements into your content to make it more engaging and visually appealing. Make sure to use alt text for all images to improve accessibility and SEO.</li>
            <li class="mt-7 text-[1.1rem] leading-7 text-gray-500"><span class='text-lg text-white'>Ensure readability : </span>Make your content easy to read and understand by using short paragraphs, bullet points, and clear language. Use tools like Grammarly or Hemingway Editor to check grammar and readability.</li>
            <li class="mt-7 text-[1.1rem] leading-7 text-gray-500"><span class='text-lg text-white'>Update content regularly : </span>Keep your content fresh and up-to-date by regularly updating it with new information, statistics, or insights.</li>
          </ul>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <div className='xl:flex flex-row mt-9 justify-around'>
            <div className='xl:w-[50%] w-full flex justify-center xl:justify-center items-center'>
              <img src={onpage7} className='w-[50%]' />
            </div>
            <div className='xl:w-[50%] w-full'>
              <h1 className='text-gray-300 text-2xl xl:text-3xl mt-4 font-bold text-start'>Internal Linking Optimization</h1>
              <p className=' text-[1.1rem] leading-7 text-gray-500 text-start my-5'>Internal linking refers to the practice of linking pages within the same website. Internal linking is important in SEO for several reasons:</p>
              <p className=' text-[1.1rem] leading-7 text-gray-500 text-start my-5'>Helps search engines crawl and index pages: Internal linking helps search engines understand the structure and hierarchy of a website. When search engines crawl a webpage, they follow links to other pages within the website, which helps them discover new pages and content.</p>
              <button class='bg-transparent border-[1px] hover:text-black hover:bg-white transition-all duration-200 text-white font-bold py-2 px-4 rounded-md m-4'>Get In Touch</button>
            </div>
          </div>
          <ul class='text-white list-disc'>
            <li class="mt-7 text-[1.1rem] leading-7 text-gray-500"><span class='text-lg text-white'>Improves website navigation and user experience : </span>Internal linking helps users navigate a website and find relevant content easily. By providing links to related content within a website, users are more likely to stay on the website for longer and engage with more content, improving the overall user experience.</li>
            <li class="mt-7 text-[1.1rem] leading-7 text-gray-500"><span class='text-lg text-white'>Distributes link equity : </span>Link equity refers to the value passed from one webpage to another through links. Internal linking can help distribute link equity throughout a website, improving the ranking potential of individual pages and improving the overall domain authority of the website.</li>
            <li class="mt-7 text-[1.1rem] leading-7 text-gray-500"><span class='text-lg text-white'>Enhances keyword relevancy : </span>Internal linking helps establish keyword relevancy by linking pages together that are thematically related. By linking to pages with relevant keywords, search engines can better understand the topics and keywords associated with a website.</li>
            <li class="mt-7 text-[1.1rem] leading-7 text-gray-500"><span class='text-lg text-white'>Increases page authority : </span>Internal linking can help increase the authority of individual pages by passing link equity from high-authority pages to lower-authority pages. By linking to high-authority pages, lower-authority pages can benefit from their authority and improve their own ranking potential.</li>
          </ul>
          <p className=' text-[1.1rem] leading-7 text-gray-500 text-start my-5'>Internal linking is important in SEO for improving website architecture and navigation and user experience, distributing link equity, enhancing keyword relevancy, and increasing page authority. By linking pages within a website, you can improve the search engine visibility and ranking potential of individual pages and the overall domain authority of the website.</p>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='text-gray-300 text-2xl  xl:text-3xl mt-4 font-bold text-center'>Frequently Asked Questions</h1>
          <Questions faqs={faqs} />
        </div>
      </div>
    </div>
  )
}

export default Onpage_seo