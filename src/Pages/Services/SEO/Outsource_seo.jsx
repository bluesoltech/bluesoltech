import React from 'react'
import Services_first from '../../../component/Services_first'
import img1 from '../../../assets/img/vision.png'
import Logoslider from '../../../component/Logoslider'
import Video1 from '../../../component/Video1';
import Questions from '../../../component/Questions';

const faqs = [
  {
    question: "What Is Outsourced SEO?",
    answer: ["SEO Outsourcing means adding-in SEO services in your curriculum by taking services from an external third-party.",
    ]
  },
  {
    question: "SEO Outsourcing means adding-in SEO services in your curriculum by taking services from an external third-party.",
    answer: [
      "Dependable Staffing",
      "Superior Affordability",
      "Long-Term Strategy",
      "All-inclusive Reports",
      "SEO Expertise",
      "Established Processes",
      "Get “in-House” SEO team without actually building one"
    ]
  },
  {
    question: "How Often I Will Get Report?",
    answer: [
      "Reporting by Blue soltech solely depends on the chosen SEO package. You can probably count on it happening every month or every week.",
    ]
  },
  {
    question: "What Outsourced SEO Package Should I Choose?",
    answer: [
      "SEO Package should be chosen as per your business goals and objectives. We have categorized our SEO packages in such a way that it benefits all types of businesses be it small, medium, or large—scale.",
    ]
  },
  {
    question: "Does It Work?",
    answer: [
      "SEO is a long-term process, therefore, you should not expect instant results. It totally depends on competition and SEO results are not guaranteed but you will be getting reports to measure the performance and you are free to end contract anytime.",
    ]
  },
  {
    question: "How Can I Trust Rankon Technologies?",
    answer: [
      "Dedicated and skilled SEO professionals",
      "Practice white hat SEO",
      "98% success rate and 76% returning clients",
      "Competitive pricing and timely reporting",
      "8 years of Experience",
    ]
  },
];

const Outsource_seo = () => {
  return (
    <div className='bg-[#0F0E0E] xl:p-20 p-10 items-center'>
      <div className='md:w-[80%] w-auto mt-4 mx-auto'>
        <Services_first
          imgSrc={img1}
          btn_title="SEO Outsourcing Company"
          duration="Outsourced SEO Services India"
          tittle="Outsourced SEO Services: The Best SEO Outsourcing Agency In India"
          features1="SEO Outsourcing Company in India- Blue soltech offers the best outsource SEO Services for businesses and provides white label SEO Services at very affordable monthly charges. As an end-to-end marketing business, web designer, or web developer, you perhaps want to contain SEO in your list of services."
          features2="However, building your SEO team may take away more inputs in the form of time, energy, and money than giving returns."
        />
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='text-gray-300 text-2xl  xl:text-3xl mt-4 font-bold text-center'>What Is Outsource SEO Services?</h1>
          <p className=' text-[1.1rem] leading-7 items-start xl:items-center justify-start xl:justify-end text-gray-500 text-start xl:text-start mt-7 text-2xl'>Outsourced SEO (Search Engine Optimization) services refer to the practice of hiring external professionals or agencies to handle the various aspects of a company’s SEO strategy and implementation. SEO is a crucial digital marketing component aimed at improving a website’s visibility in search engine results, ultimately driving organic traffic and enhancing online presence.</p>
          <p className=' text-[1.1rem] leading-7 items-start xl:items-center justify-start xl:justify-end text-gray-500 text-start xl:text-start mt-7 text-2xl'>Businesses may choose to outsource their SEO services to Blue soltech for several reasons:</p>
          <div className='mx-11'>
            <ol class='pl-5 space-y-3 text-gray-600 list-decimal marker:text-gray-300'>
              <li class="mt-7 text-gray-500"><span className='text-lg text-gray-300'>Expertise: </span>SEO is a specialized field that requires knowledge of search engine algorithms, keyword research, content optimization, link building, and more. Outsourcing SEO to us allows you to tap into the expertise of professionals who specialize in these areas at Blue soltech.</li>
              <li class="mt-2 text-gray-500"><span className='text-lg text-gray-300'>Cost-Effectiveness:</span>For many businesses, hiring an in-house SEO team can be expensive. Outsourcing SEO Services with us allows you to access the skills you need without the overhead costs associated with hiring and training full-time employees.</li>
              <li class="mt-2 text-gray-500"><span className='text-lg text-gray-300'>Time Efficiency: </span>SEO requires consistent effort and time. Our SEO Outsourcing Services allow businesses to focus on your core activities while leaving the SEO tasks to professionals who can dedicate the necessary time and resources.</li>
              <li class="mt-2 text-gray-500"><span className='text-lg text-gray-300'> Access to Tools and Technology: </span>SEO professionals often use specialized tools and technologies to analyze data, track performance, and implement strategies. Outsourcing can provide access to these tools without the need for companies to invest in them separately.</li>
              <li class="mt-2 text-gray-500"><span className='text-lg text-gray-300'>Scalability: </span>Outsourcing SEO services allows businesses to scale their efforts up or down based on their needs. This flexibility is especially beneficial for businesses with fluctuating workloads.</li>
              <li class="mt-2 text-gray-500"><span className='text-lg text-gray-300'>Stay Updated with Industry Trends: </span>SEO is an ever-evolving field, with search engines regularly updating their algorithms. Outsourced SEO professionals are likely to stay informed about the latest trends and changes in the industry.</li>
            </ol>
          </div>
          <p className=' text-[1.1rem] leading-7 items-start xl:items-center justify-start xl:justify-end text-gray-500 text-start xl:text-start mt-7 text-2xl'>When outsourcing SEO services, businesses typically collaborate with external agencies or freelancers that specialize in search engine optimization. These professionals can conduct website audits, keyword research, on-page and off-page optimization, content creation, and provide ongoing monitoring and reporting.</p>
          <p className=' text-[1.1rem] leading-7 items-start xl:items-center justify-start xl:justify-end text-gray-500 text-start xl:text-start mt-7 text-2xl'>It’s essential for businesses to carefully select an outsourcing partner with a proven track record, experience in their industry, and a clear understanding of their goals and target audience. Effective communication and regular reporting are crucial for a successful outsourced SEO partnership.</p>
        </div>
        <div className='flex items-center justify-center xl:mt-[120px] mt-[60px]'>
          <div className=' w-full'>
            <h1 className='text-gray-300 text-2xl xl:text-3xl mt-4 font-bold text-center'>Our Agency Clients</h1>
            <p className=' text-[1.1rem] leading-7 text-gray-500 text-center my-5 mx-10'>Check out some of the precious clients we have helped with Digital Marketing and Website Development Services.</p>
            <Logoslider />
          </div>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='text-gray-300 text-2xl xl:text-3xl mt-4 font-bold text-center'>Why Should You Hire A Local SEO Services Company?</h1>
          <p className=' text-[1.1rem] leading-7 items-start xl:items-center justify-start xl:justify-end text-gray-500 text-start xl:text-center mt-7 text-2xl'>By utilizing white label outsource SEO services in India, your clients would not even know their SEO Services are outsourced.</p>
          <div className='xl:flex flex-row mt-11  xl:justify-around'>
            <div className='xl:w-[50%] w-full'>
              <img src={img1} className='' />
            </div>
            <div>
              <div class='xl:flex flex-row justify-around'>
                <div class="flex-1">
                  <ul class='mt-6 text-gray-500 text-start px-14 text-[1.1rem] leading-7 list-disc'>
                    <li>Dependable Staffing</li>
                    <li>Superior Affordability</li>
                    <li>Long-Term Strategy</li>
                    <li>All-inclusive Reports</li>
                  </ul>
                </div>
                <div class="flex-1">
                  <ul class='mt-6 text-gray-500 text-start px-14 text-[1.1rem] leading-7 list-disc'>
                    <li>SEO Expertise</li>
                    <li>Established Processes</li>
                    <li>Get “in-House” SEO team without actually building one</li>
                  </ul>
                </div>
              </div>
              <div class='flex justify-center items-center mt-10'>
                <button class='bg-[#3B82F6] text-gray-300 font-bold py-4 px-[30px] rounded-md m-2'>Know-How We Did it!</button>
              </div>
            </div>
          </div>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='text-gray-300 text-2xl xl:text-3xl mt-4 font-bold text-center'>Why Should You Hire RankON For Outsourced SEO Services In India</h1>
          <div className='xl:flex flex-row mt-11 xl:justify-around'>
            <div>
              <p className=' text-[1.1rem] leading-7 items-start xl:items-center justify-start xl:justify-end text-gray-500 text-start xl:text-start mt-7 text-2xl'>By utilizing white label outsource SEO services in India, your clients would not even know their SEO Services are outsourced.</p>
              <p className=' text-[1.1rem] leading-7 items-start xl:items-center justify-start xl:justify-end text-gray-500 text-start xl:text-start mt-7 text-2xl'>This simply means you will get 100% of the credit with null efforts!</p>
              <div class='xl:flex flex-row justify-around'>
                <div class="flex-1">
                  <ul class='mt-6 text-gray-500 text-start px-14 text-[1.1rem] leading-7 list-disc'>
                    <li>Dependable Staffing</li>
                    <li>Superior Affordability</li>
                    <li>Long-Term Strategy</li>
                    <li>All-inclusive Reports</li>
                  </ul>
                </div>
                <div class="flex-1">
                  <ul class='mt-6 text-gray-500 text-start px-14 text-[1.1rem] leading-7 list-disc'>
                    <li>SEO Expertise</li>
                    <li>Established Processes</li>
                    <li>Get “in-House” SEO team without actually building one</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='xl:w-[50%] w-full'>
              <img src={img1} className='' />
            </div>
          </div>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='text-gray-300 text-2xl xl:text-3xl mt-4 font-bold text-center'>Extend Your Services By Hiring Blue soltech As Your Outsourced SEO Services Company In India</h1>
          <div className='xl:flex flex-row mt-11 xl:justify-around'>
            <div className='xl:w-[50%] w-full'>
              <img src={img1} className='' />
            </div>
            <div className='xl:w-[50%] w-full'>
              <p className=' text-[1.1rem] leading-7 items-start xl:items-center justify-start xl:justify-end text-gray-500 text-start xl:text-start mt-0 text-2xl'>Blue soltech has always been worthwhile both for its B2B as well as B2C partners.</p>
              <p className=' text-[1.1rem] leading-7 items-start xl:items-center justify-start xl:justify-end text-gray-500 text-start xl:text-start mt-7 text-2xl'>If you’re a Website Design and Web Development Company dedicated to building highly functional and attractive websites but are lacking customers because of the absence of SEO services in your curriculum, we can help.</p>
              <p className=' text-[1.1rem] leading-7 items-start xl:items-center justify-start xl:justify-end text-gray-500 text-start xl:text-start mt-7 text-2xl'>We can work as your outsourced SEO Service provider and provide your white label reports so you can increase your service horizon.</p>
              <p className=' text-[1.1rem] leading-7 items-start xl:items-center justify-start xl:justify-end text-gray-500 text-start xl:text-start mt-7 text-2xl'>We can help you get clients who need comprehensive services under a single roof. With our Outsource SEO Services, you can prove to your clients that you’re an all-in, devoted company. You can offer a wider range of services that boosts your company’s professionalism and reputability.</p>
            </div>
          </div>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <div className='xl:flex flex-row mt-11 xl:justify-around'>
            <div className='xl:w-[50%] w-full'>
              <h1 className='text-gray-300 text-2xl xl:text-3xl mt-4 font-bold text-start'>Quality Services With Great Support</h1>
              <p className=' text-[1.1rem] leading-7 items-start xl:items-center justify-start xl:justify-end text-gray-500 text-start xl:text-start mt-7 text-2xl'>As a professional and competent White label SEO Outsourcing Company in India, we try to bring your client’s website SEO ranking to the top of SERPs. Results are not guaranteed but we try to provide good quality and support to help you get better results. Even though SEO is a long-term strategy that gives out long-lasting results, we try to give results in the least possible time. In the SEO services we provide:</p>
              <div class='xl:flex flex-row justify-around'>
                <div class="flex-1">
                  <ul class='mt-6 text-gray-500 text-start px-14 text-[1.1rem] leading-7 list-disc'>
                    <li>Free Audits For Partners</li>
                    <li>Rebranded Reports</li>
                  </ul>
                </div>
                <div class="flex-1">
                  <ul class='mt-6 text-gray-500 text-start px-14 text-[1.1rem] leading-7 list-disc'>
                    <li>Quick Turnaround Time</li>
                    <li>Save Precious Sales Time</li>
                  </ul>
                </div>
              </div>
              <div class='flex justify-center items-center mt-10'>
                <button class='bg-[#3B82F6] text-gray-300 font-bold py-4 px-[30px] rounded-md m-2'>Request Proposal</button>
              </div>
            </div>
            <div className='xl:w-[50%] w-full'>
              <img src={img1} className='' />
            </div>
          </div>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <div className='xl:flex flex-row mt-11 xl:justify-around'>
            <div className='xl:w-[50%] w-full'>
              <h1 className='text-gray-300 text-2xl xl:text-3xl mt-4 font-bold text-start'>Unsurpassed Customer Service</h1>
              <p className=' text-[1.1rem] leading-7 items-start xl:items-center justify-start xl:justify-end text-gray-500 text-start xl:text-start mt-7 text-2xl'>Our customer support team encompasses experienced SEO pros who ponder upon each of the big and small queries of our clients and take care of everything they need. Here are a few qualities of our customer support team:</p>
              <ul class='mt-6 text-gray-500 text-start px-14 text-[1.1rem] leading-7 list-disc'>
                <li>24/7 Availability</li>
                <li>Friendly and Ready-To Help Behavior</li>
              </ul>
            </div>
            <div className='xl:w-[50%] w-full'>
              <img src={img1} className='' />
            </div>
          </div>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <div className='xl:flex flex-row mt-11 xl:justify-around'>
            <div className='xl:w-[50%] w-full'>
              <img src={img1} className='' />
            </div>
            <div className='xl:w-[50%] w-full'>
              <h1 className='text-gray-300 text-2xl xl:text-3xl mt-4 font-bold text-start'>We Are Experienced In Outsource SEO Services</h1>
              <p className=' text-[1.1rem] leading-7 items-start xl:items-center justify-start xl:justify-end text-gray-500 text-start xl:text-start mt-7 text-2xl'>We are a prominent White-label SEO Outsourcing Company in India and have consistently delivered high-quality SEO results for over 8 years. We believe in establishing long-lasting relationships with our partners and clients.</p>
              <p className=' text-[1.1rem] leading-7 items-start xl:items-center justify-start xl:justify-end text-gray-500 text-start xl:text-start mt-7 text-2xl'>When you hire us for outsourced SEO services we do our best to serve your clients as much as we can to get the top search engine rankings in the least time. We provide white-label reports. We also use SEO tools, that include keyword analysis tools, onpage SEO tools and technical SEO tools. We also add our clients to our tools so they can also check the reports.</p>
              <p className=' text-[1.1rem] leading-7 items-start xl:items-center justify-start xl:justify-end text-gray-500 text-start xl:text-start mt-7 text-2xl'>Here are a few things that make us famous for being the best SEO outsourcing company in India:</p>
              <ul class='mt-6 text-gray-500 text-start px-14 text-[1.1rem] leading-7 list-disc'>
                <li>8 years of experience</li>
                <li>Assured Quality</li>
                <li>More than 1000 projects</li>
                <li>100% White hat methods</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='text-gray-300 text-2xl xl:text-3xl mt-4 font-bold text-start'>Customized Outsourced SEO Services In India</h1>
          <p className=' text-[1.1rem] leading-7 items-start xl:items-center justify-start xl:justify-end text-gray-500 text-start xl:text-start mt-7 text-2xl'>As a professional and experienced SEO Outsourcing Company in India, we are well aware of the fact that one size doesn’t fit all. Therefore, we offer tailored Outsource SEO services to fit each of our customers’ needs.</p>
          <h1 className='text-gray-300 text-2xl xl:text-3xl mt-4 font-bold text-start'>White Label Dashboard</h1>
          <p className=' text-[1.1rem] leading-7 items-start xl:items-center justify-start xl:justify-end text-gray-500 text-start xl:text-start mt-7 text-2xl'>Being the White Label SEO Outsourcing Company, we will never come in between you and your clients. We will never send unwanted emails. Also, for your assurance, we will sign one of the stringent non-disclosure agreements.</p>
          <h1 className='text-gray-300 text-2xl xl:text-3xl mt-4 font-bold text-start'>How Much Does Outsourced SEO Services Cost In India?</h1>
          <p className=' text-[1.1rem] leading-7 items-start xl:items-center justify-start xl:justify-end text-gray-500 text-start xl:text-start mt-7 text-2xl'>The cost of outsourcing SEO services in India can vary widely depending on several factors, including the scope of work, the complexity of the SEO strategy, the reputation and expertise of the outsourcing provider, and the specific needs of the business. Additionally, different SEO agencies or freelancers may have their own pricing models.</p>
          <p className=' text-[1.1rem] leading-7 items-start xl:items-center justify-start xl:justify-end text-gray-500 text-start xl:text-start mt-7 text-2xl'>As of my last knowledge update in January 2022, here is a general overview of the cost structure for outsourced SEO services in India:</p>
          <div className='mx-11'>
            <ol class='text-gray-600 list-decimal marker:text-gray-300'>
              <li class="mt-7 text-gray-500"><span className='text-lg text-gray-300'>Hourly Rates: </span>Some SEO professionals or agencies charge on an hourly basis. Hourly rates can range from $10 to $50 or more per hour, depending on the expertise and experience of the individual or agency.</li>
              <li class="mt-2 text-gray-500"><span className='text-lg text-gray-300'>Monthly Retainer: </span>Many SEO service providers prefer a monthly retainer model, where clients pay a fixed amount each month for ongoing SEO services. Monthly retainer fees can vary widely, starting from a few hundred dollars to several thousand dollars, depending on the level of service and the complexity of the SEO strategy.</li>
              <li class="mt-2 text-gray-500"><span className='text-lg text-gray-300'>Project-Based Pricing: </span>For specific SEO projects, such as a website audit, keyword research, or a one-time optimization task, providers may offer project-based pricing. The cost for such projects can range from a few hundred to a few thousand dollars.</li>
              <li class="mt-2 text-gray-500"><span className='text-lg text-gray-300'>Performance-Based Pricing: </span>Some SEO agencies tie their compensation to the performance of the SEO campaign, such as improved search rankings or increased organic traffic. This model may involve a base fee plus additional payments based on predefined performance metrics.</li>
            </ol>
          </div>
          <p className=' text-[1.1rem] leading-7 items-start xl:items-center justify-start xl:justify-end text-gray-500 text-start xl:text-start mt-7 text-2xl'>It’s important to note that these are general estimates, and actual costs can vary based on individual circumstances and requirements. When considering outsourcing SEO services, businesses should carefully evaluate the expertise of the service provider, their track record, and the specific services included in the pricing.</p>
          <p className=' text-[1.1rem] leading-7 items-start xl:items-center justify-start xl:justify-end text-gray-500 text-start xl:text-start mt-7 text-2xl'>Additionally, the SEO landscape is dynamic, and prices may have changed since my last update. It’s recommended to reach out to multiple SEO service providers, discuss your specific needs, and request detailed quotes to get a better understanding of the costs involved.</p>
        </div>
        <Video1 />
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='text-gray-300 text-2xl  xl:text-3xl mt-4 font-bold text-center'>Frequently Asked Questions</h1>
          <Questions faqs={faqs} />
        </div>
      </div>
    </div>
  )
}

export default Outsource_seo