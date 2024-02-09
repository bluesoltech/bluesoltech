import React from 'react'
import Services_first from '../../../component/Services_first'
import img1 from '../../../assets/img/vision.png'
import Logoslider from '../../../component/Logoslider'


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
            <h1 className='font-bold text-white text-3xl p-4 text-center mb-2'>Our Agency Clients</h1>
            <p className=' text-[1.1rem] leading-7   text-gray-500 text-center my-5 mx-10'>Check out some of the precious clients we have helped with Digital Marketing and Website Development Services.</p>
            <Logoslider />
          </div>
        </div>
        <div className=''>
          <p className=' text-[1.1rem] leading-7 text-gray-500 text-center my-5 mt-4 mx-10'>Blue soltech ensures that its clients’ websites remain optimized for search engine algorithms with regular SEO audits and ongoing monitoring. With a data-driven approach and results-oriented strategies, Rankon Technologies is a trusted partner for businesses looking to improve their online visibility and drive targeted traffic to their websites. Choose Blue soltech for your technical SEO needs and get the peace of mind that comes with a reliable, professional partner.</p>
        </div>
        <div className='mt-[100px]'>
          <h1 className='text-white text-4xl mt-4 font-bold text-center'>What Is Technical SEO?</h1>

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
          <h1 className='text-white text-4xl mt-4 font-bold text-start my-5'>What Is Included In Technical SEO Services?</h1>
          <p className=' text-[1.1rem] leading-7  text-gray-500 text-start my-5'>echnical SEO services play a vital role in improving a website’s search engine visibility and rankings. These services encompass various tactics, such as optimizing website structure, improving site speed, implementing schema markup, and ensuring proper indexing and crawling. Technical SEO services also include mobile optimization to ensure a seamless user experience across all devices. A comprehensive technical SEO audit is typically performed to identify areas of improvement, followed by ongoing monitoring to maintain website optimization.</p>
          <p className=' text-[1.1rem] leading-7  text-gray-500 text-start my-5'>By implementing effective technical SEO services, businesses can significantly enhance their website’s search engine rankings, drive targeted traffic, and increase their online visibility and revenue. Partnering with a professional provider of technical SEO services is essential for businesses seeking to remain competitive in the ever-evolving digital landscape.</p>
          <h1 className='text-white text-4xl mt-10 font-bold text-start'>Our Technical SEO Services Include</h1>
          <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 text-sm justify-between mt-11'>
            <div>
              <ul className='text-gray-500 text-[1.1rem] leading-7'>
                <li>✔️ Running a Crawl Error Report</li>
                <li>✔️ Checking HTTPS Status Code</li>
                <li>✔️ Implementing SSL (Secure Socket Layer)</li>
                <li>✔️ Creating an XML Sitemap</li>
                <li>✔️ Page Speed Optimization</li>
                <li>✔️</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Technical_seo