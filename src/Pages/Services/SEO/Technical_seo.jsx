import React from 'react'
import Services_first from '../../../component/Services_first'
import img1 from '../../../assets/img/vision.png'
import Logoslider from '../../../component/Logoslider'
import Request from '../../../component/Request'
import Video1 from '../../../component/Video1'
import Result from '../../../component/Result'
import Questions from '../../../component/Questions'


const faqs = [
  {
    question: "What is Technical SEO?",
    answer: ["Technical SEO is a crucial practice for optimizing a website’s technical features to boost its search engine visibility and rankings. This method involves several tactics such as website architecture, mobile-friendliness, page loading speed, crawlability, and indexability.",
    ]
  },
  {
    question: "What are the key elements of Technical SEO?",
    answer: [
      "The key elements of technical SEO include website speed optimization, mobile-friendliness, page structure, crawl ability, internal link structure, and HTTPS protocol.",
    ]
  },
  {
    question: "What is the difference between on-page SEO and technical SEO?",
    answer: [
      "On-page SEO involves optimizing elements such as page titles, meta descriptions, header tags, content, images, and internal linking structure. Whereas, technical SEO involves optimizing elements such as website speed, mobile-friendliness, site architecture, XML sitemaps, robots.txt files, canonicalization, structured data, and HTTPS protocol.",
    ]
  },
  {
    question: "How long does it take to undertake a technical SEO audit?",
    answer: [
      "For larger websites with numerous pages and technical issues, the process can take several weeks or even months. The duration of the audit also depends on the expertise of the person conducting the audit and the tools used to identify and fix technical issues.",
    ]
  },
  {
    question: "Why is Technical SEO important?",
    answer: [
      "Technical SEO services play an important role in improving a website’s search engine visibility and rankings. These services encompass various tactics, such as optimizing website structure, improving site speed, implementing schema markup, and ensuring proper indexing and crawling.",
    ]
  }
];

const Technical_seo = () => {
  return (
    <div className='bg-[#0F0E0E] p-20 items-center'>
      <div className='md:w-[80%] w-auto mt-4 mx-auto'>
        <Services_first
          imgSrc={img1}
          btn_title="The Best SEO Agency in India"
          title="SEO vs. PPC Advertising: Which Is"
          duration="Technical SEO Services"
          tittle="Best Technical SEO Services From Top-Rated SEO Experts In India"
          features1="Best Technical SEO Services in India – Rankon Technologies is a highly esteemed provider of technical SEO services in India, equipped with an experienced team of seasoned professionals. Their comprehensive range of technical SEO solutions has helped numerous businesses achieve their online marketing goals. They offer a variety of services, such as website structure optimization, site speed enhancement, schema markup implementation, proper indexing and crawling, and mobile device optimization."
        />
        <div className='flex items-center justify-center mt-[120px]'>
          <div className=' w-[1300px] h-[180px]'>
            <h1 className='font-bold text-gray-300 text-3xl p-4 text-center mb-2'>Our Agency Clients</h1>
            <p className=' text-[1.1rem] leading-7 text-gray-500 text-center my-5 mx-10'>Check out some of the precious clients we have helped with Digital Marketing and Website Development Services.</p>
            <Logoslider />
          </div>
        </div>
        <div className=''>
          <p className=' text-[1.1rem] leading-7 text-gray-500 text-center my-5 mt-4 mx-10'>Blue soltech ensures that its clients’ websites remain optimized for search engine algorithms with regular SEO audits and ongoing monitoring. With a data-driven approach and results-oriented strategies, Rankon Technologies is a trusted partner for businesses looking to improve their online visibility and drive targeted traffic to their websites. Choose Blue soltech for your technical SEO needs and get the peace of mind that comes with a reliable, professional partner.</p>
        </div>
        <div className='mt-[100px]'>
          <h1 className='text-gray-300 text-3xl mt-4 font-bold text-center'>What Is Technical SEO?</h1>

          <div className='md:flex flex-row mt-9 justify-around'>
            <div className='w-[30%]'>
              <img src={img1} className='' />
            </div>
            <div className='w-[40%]'>
              <p className='text-gray-500 mt-10'>A robust technical SEO strategy is a necessary component of any comprehensive SEO plan and a must-have for companies that want to thrive in the highly competitive online marketplace.</p>
              <p className='text-gray-500 mt-7'>Technical SEO is a crucial practice for optimizing a website’s technical features to boost its search engine visibility and rankings. This method involves several tactics such as website architecture, mobile-friendliness, page loading speed, crawlability, and indexability. By optimizing these technical factors, businesses can ensure their website meets search engine algorithms’ requirements, ultimately leading to higher rankings, targeted traffic, and increased revenue.</p>
            </div>
          </div>
        </div>
        <div className='mt-[100px]'>
          <h1 className='text-gray-300 text-3xl mt-4 font-bold text-start my-5'>What Is Included In Technical SEO Services?</h1>
          <p className=' text-[1.1rem] leading-7  text-gray-500 text-start my-5'>echnical SEO services play a vital role in improving a website’s search engine visibility and rankings. These services encompass various tactics, such as optimizing website structure, improving site speed, implementing schema markup, and ensuring proper indexing and crawling. Technical SEO services also include mobile optimization to ensure a seamless user experience across all devices. A comprehensive technical SEO audit is typically performed to identify areas of improvement, followed by ongoing monitoring to maintain website optimization.</p>
          <p className=' text-[1.1rem] leading-7  text-gray-500 text-start my-5'>By implementing effective technical SEO services, businesses can significantly enhance their website’s search engine rankings, drive targeted traffic, and increase their online visibility and revenue. Partnering with a professional provider of technical SEO services is essential for businesses seeking to remain competitive in the ever-evolving digital landscape.</p>
          <h1 className='text-gray-300 text-3xl mt-10 font-bold text-start'>Our Technical SEO Services Include</h1>
          <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 text-sm justify-between mt-11'>
            <div>
              <ul className='text-gray-500 text-[1.1rem] leading-7'>
                <li>✔️ Running a Crawl Error Report</li>
                <li>✔️ Checking HTTPS Status Code</li>
                <li>✔️ Implementing SSL (Secure Socket Layer)</li>
                <li>✔️ Creating an XML Sitemap</li>
                <li>✔️ Page Speed Optimization</li>

              </ul>
            </div>
            <div>
              <ul className='text-gray-500 text-[1.1rem] leading-7'>
                <li>✔️ Optimized Website for Mobile</li>
                <li>✔️ Image Optimization</li>
                <li>✔️ Eliminating Duplicate Content</li>
                <li>✔️ Auditing Redirects</li>
                <li>✔️ Removing Spam Backlinks</li>
              </ul>
            </div>
            <div>
              <ul className='text-gray-500 text-[1.1rem] leading-7'>
                <li>✔️ Fixing Server Error (5xx)</li>
                <li>✔️ Fixing Page Not Found Error (404)</li>
                <li>✔️ Fixing Duplicate, submitted URL</li>

              </ul>
            </div>
          </div>

        </div>
        <Request tittle="Would You Like To Discuss Your Project With Our Experts?" content="Send Your Project Details By Clicking On Get In Touch And One Of Our Team Members Will Call You Soon!" />
        <div className='mt-[100px]'>
          <h1 className='text-gray-300 text-3xl mt-4 font-bold text-center my-5'>Technical SEO Services Overview</h1>
          <div className='xl:flex flex-row mt-9 justify-around'>
            <div className='w-full xl:w-[50%]'>
              <img src={img1} className='' />
            </div>
            <div className='w-full xl:w-[50%]'>
              <h1 className='text-gray-300 text-3xl mt-4 font-bold text-start my-5'>What Are Technical SEO Audits?</h1>
              <p className='text-[1.1rem] leading-7 text-gray-500 mt-10'>Technical SEO audits are like check-ups for websites. They are essential assessments that evaluate a website’s overall health and pinpoint areas that need improvement. These audits analyze technical elements such as website structure, page loading speed, mobile-friendliness, and crawlability to identify any issues that could negatively impact a website’s search engine rankings and visibility. After the audit, a detailed report is generated that highlights the findings and recommended actions for optimization.</p>
              <p className='text-[1.1rem] leading-7 text-gray-500 mt-10'>Technical SEO audits provide valuable insights into a website’s health and help businesses ensure that their website remains optimized for search engine algorithms.</p>
            </div>
          </div>
          <p className='text-[1.1rem] leading-7 text-gray-500 mt-11'> By conducting regular technical SEO audits, businesses can keep their website healthy and competitive in the online marketplace, leading to higher rankings, targeted traffic, and increased revenue.</p>
        </div>
        <div className='mt-[100px]'>
          <div className='xl:flex flex-row mt-9 justify-between'>
            <div className=' w-full xl:w-[50%]'>
              <h1 className='text-gray-300 text-3xl mt-4 font-bold text-start my-5'>Page Speed Optimization</h1>
              <p className='text-[1.1rem] leading-7 text-gray-500 mt-10 text-start'>Page speed optimization is a critical aspect of website performance that can have a significant impact on user experience and search engine rankings. It involves improving the loading speed of web pages through the implementation of various techniques, such as compressing image sizes, reducing the number of HTTP requests, minifying CSS and JavaScript, utilizing browser caching, and optimizing server response time.</p>
              <p className='text-[1.1rem] leading-7 text-gray-500 mt-10 text-start'>The importance of page speed optimization cannot be overstated, as faster websites tend to rank higher in search engine results and attract more targeted traffic, which can lead to increased revenue.</p>
            </div>
            <div className='w-full xl:w-[50%] flex justify-center items-center'>
              <img src={img1} className='' />
            </div>
          </div>
          <p className='text-[1.1rem] leading-7 text-gray-500 mt-11'> Regularly monitoring and optimizing page speed is crucial to maintaining a competitive online presence and providing users with an exceptional browsing experience. By investing in page speed optimization, businesses can ensure that their website remains optimized for search engine algorithms, resulting in higher search engine rankings, more targeted traffic, and better conversion rates.</p>
        </div>
        <div className='mt-[100px]'>
          <div className='xl:flex flex-row mt-9 justify-between'>
            <div className='w-full xl:w-[50%] flex justify-center items-center'>
              <img src={img1} className='' />
            </div>
            <div className=' w-full xl:w-[50%]'>
              <h1 className='text-gray-300 text-3xl mt-4 font-bold text-start my-5'>Image Optimization</h1>
              <p className='text-[1.1rem] leading-7 text-gray-500 mt-10 text-start'>Optimizing images is a vital factor of website performance and search engine optimization that every company should consider to enhance its online presence. Image optimization seeks to reduce the size of image files without sacrificing their quality to enhance page load times and overall website performance. By using diverse optimization techniques, such as compressing images, resizing them to fit the page, and selecting the proper file format, businesses can achieve faster-loading images that enhance user experience and drive more targeted traffic to their website.</p>
              <p className='text-[1.1rem] leading-7 text-gray-500 mt-10 text-start'>Additionally, optimized images can help improve search engine rankings, as faster-loading web pages are prioritized in search engine algorithms. </p>
            </div>
          </div>
          <p className='text-[1.1rem] leading-7 text-gray-500 mt-11'>By optimizing images, businesses can also reduce their website’s bandwidth usage, resulting in lower hosting costs. Therefore, image optimization is a must for businesses that want to improve their website’s performance, search engine visibility, and user experience. By investing in image optimization, businesses can stay ahead of the competition and deliver an exceptional online experience to their customers.</p>
        </div>
        <div className='mt-[100px]'>
          <div className='xl:flex flex-row mt-9 justify-between'>
            <div className=' w-full xl:w-[50%]'>
              <h1 className='text-gray-300 text-3xl mt-4 font-bold text-start my-5'>Fixing Broken Links (404 Error)</h1>
              <p className='text-[1.1rem] leading-7 text-gray-500 mt-10 text-start'>Fixing broken links is an important aspect of search engine optimization (SEO) and website maintenance. Broken links can negatively affect user experience and search engine rankings by preventing users and search engine crawlers from accessing the desired content. Broken links may arise due to various reasons, such as outdated content, website redesigns, or changes in the URL structure</p>
              <p className='text-[1.1rem] leading-7 text-gray-500 mt-10 text-start'>To fix broken links, website owners must first identify the broken links using tools like Google Search Console or online broken link checkers. After identifying the broken links, website owners can either update the link to a working URL or remove it entirely. Regularly checking and fixing broken links is an essential part of website maintenance that can benefit the overall health and success of a website. By fixing broken links, website owners can improve the user experience, increase search engine rankings, and ultimately drive more targeted traffic to their websites.</p>
            </div>
            <div className='w-full xl:w-[50%] flex justify-center items-center'>
              <img src={img1} className='' />
            </div>
          </div>
          <p className='text-[1.1rem] leading-7 text-gray-500 mt-11'> Therefore, fixing broken links should be a priority for website owners to ensure a seamless user experience and improve search engine rankings.</p>
        </div>
        <div className='mt-[100px]'>
          <h1 className='text-gray-300 text-3xl mt-4 font-bold text-center'>How Do We Optimize Websites For Better Technical SEO Score?</h1>
          <p className='text-[1.1rem] leading-7 text-gray-500 mt-7 text-start'>When it comes to optimizing websites for better technical SEO scores, there are several steps that we take.</p>
          <p className='text-[1.1rem] leading-7 text-gray-500 mt-7 text-start'>The first step is to execute a thorough technical SEO audit, which applies to analyzing various elements of the website, such as its speed, mobile-friendliness, and page structure, to determine any issues that may be hampering search engine rankings. Once these problems are identified, we take steps to fix them and enhance the website’s overall technical SEO score.</p>
          <p className='text-[1.1rem] leading-7 text-gray-500 mt-7 text-start'>Optimizing website content is another important step in enhancing technical SEO scores. This concerns ensuring that the website’s meta descriptions, title tags, and header tags are properly optimized with relevant keywords and structured in a way that search engines can easily understand the website’s content. On-page optimization techniques, such as using alt tags for images and optimizing URLs, can also help to enhance technical SEO scores.</p>
          <p className='text-[1.1rem] leading-7 text-gray-500 mt-7 text-start'>A well-designed internal link structure is also essential for enhancing technical SEO scores. By confirming that the website’s internal links are properly structured and easy to navigate, website owners can help search engines better understand the website’s hierarchy and the relationships between different pages. Additionally, executing HTTPS protocol can help to improve the website’s security and further increase technical SEO scores.</p>
          <p className='text-[1.1rem] leading-7 text-gray-500 mt-7 text-start'>Finally, it’s important to regularly monitor and update the website to maintain technical SEO scores. By staying up-to-date with the most delinquent SEO best practices and making critical updates to the website, website owners can continue to enhance their website’s technical SEO scores and eventually boost organic traffic. Must check our website maintenance services.</p>
        </div>
        <div>
          <Video1 />
        </div>
        <div className='mt-[100px]'>
          <h1 className='text-gray-300 text-3xl mt-4 font-bold text-center'>Why Blue soltech For Best Technical SEO Services?</h1>
          <p className='text-[1.1rem] leading-7 text-gray-500 mt-7 text-start'>Blue soltech is the best choice for Technical SEO services in India. With a crew of experienced SEO professionals, we assure you that your website fulfils all the technical requirements set by search engines to gain better rankings. Our SEO services include a thorough technical SEO audit, optimization of website content and structure, fixing broken links, and improving page speed. We use SEO tools that include keyword analysis tools, onpage SEO tools and technical SEO tools.</p>
          <p className='text-[1.1rem] leading-7 text-gray-500 mt-7 text-start'>We also assure you that your website has a well-designed internal link structure and is secured with HTTPS protocol. Our crew stays up-to-date with the latest Google algorithms to deliver the most practical strategies for enhancing your website’s technical SEO scores. By selecting Blue soltech, you can anticipate higher search engine rankings, increased organic traffic, and a website that meets the highest standards of technical SEO.</p>
        </div>
        <Result />
        <div className='mt-[120px]'>
          <h1 className='text-gray-300 text-3xl mt-4 font-bold text-center'>Here Are Some Frequently Asked Questions About Technical SEO</h1>
          <Questions faqs={faqs} />
        </div>
      </div>
    </div>
  )
}

export default Technical_seo