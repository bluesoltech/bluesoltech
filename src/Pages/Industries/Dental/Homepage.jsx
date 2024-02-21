import React from 'react'
import Services_first from '../../../component/Services_first'
import img1 from '../../../assets/img/vision.png'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Video1 from '../../../component/Video1';
import Happy_client from '../../../component/About/Happy_client';


const Homepage = () => {
  const client1 = [
    {
      tittle: 'Competitor Analysis',
      content: 'With a comprehensive competitive analysis, we classify the factors that are taking you up and down. As one of the erudite Dental Marketing companies, we believe Competitor Analysis to be the only way to get ahead of your competitors in the market. After doing a thorough analysis, we provide tailor-made dental marketing plan in which we include the best dental marketing practices and strategies so that you can augment your sales, leads and conversions.'
    },
    {
      tittle: 'SEO',
      content: 'We came across Alok from Rankon technologies through Google and YouTube. While interacting with him I realised that I am talking to a person with knowledge and values . We are delighted to associate with Alok after that He and his team is professional, transperant and follow values and ethics. Looking forward for a long term association with Rankon.'
    },
    {
      tittle: 'SEO',
      content: 'Amazing experience with Rankon Technologies. Their whole crew is top notch. I am a plastic surgeon and needed to develop a patient-centric website for my practice in New York. They delivered and some more. The website was exactly how I wanted. They were very professional, thorough and responsive. I asked for multiple revisions and they were extremely patient and nice about it. I would recommend them very highly and have already referred my colleagues to them!'
    }
  ]
  return (
    <div className='bg-[#0F0E0E] p-10 xl:p-20 items-center'>
      <div className='w-full md:w-[80%] mt-4 mx-auto'>
        <Services_first
          imgSrc={img1}
          btn_title="Dental Marketing In India"
          duration="Dental Marketing"
          tittle="Dental Marketing Company In India"
          features1="Are you a dentist and looking for Digital Marketing Company for your dental clinic? Blue soltech has worked with many dentists around the world and provided top search engine rankings."
          features2="Interested? Let’s Discuss Your Dental Marketing Project With India’s Leading Dental Marketing Company in India Now!"
        />
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='font-bold items-start xl:items-start justify-start xl:justify-start text-center mb-10 text-gray-300 text-3xl'>How Hospital Marketing Can Help You To Grow?</h1>
          <div className='xl:flex flex-row justify-between items-start'>
            <div className='xl:w-[50%] w-full flex justify-center'>
              <img src={img1} className='gap-10 w-full xl:w-[60%]' />
            </div>
            <div className='xl:w-[50%] w-full'>
              <p className=' text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-start text-gray-500 text-start xl:text-start mt-10'>Are you aspiring more patients in your dental clinic? You can help gain more patients through proficient dental marketing services.
                We are a specialized dentist marketing company having years of experience in enhancing brand authority, online visibility, and conversion rates of dental clinics through Dental ads, Dental Social Media Marketing, Dental Online Marketing, etc.</p>
              <p className=' text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-start text-gray-400 font-bold text-start xl:text-start mt-10'>More Than 70% Of Patients Explore Web To Get A Dentists. Are You Available For Them On The Web?</p>
            </div>
          </div>
          <p className=' text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-start text-gray-500 text-start xl:text-start mt-10'>If not, then start leveraging our dental marketing services to catch these patients in the time of their need. Drop our expert dental marketing consultants an e-mail or make a call and see your dental clinic reaching pinnacles every next day.</p>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='font-bold items-start xl:items-start justify-start xl:justify-start text-start mb-10 text-gray-300 text-3xl'>How Our Dental Marketing Company In India Can Help Your Dental Clinic Growth?</h1>
          <h1 className='font-bold items-start xl:items-start justify-start xl:justify-start text-start mb-10 text-gray-300 text-3xl'>Our Dental Marketing Company Offers</h1>

          <div className='bg-black w-[100%] h-fit p-6 mx-auto border-gray-400 border-[1px] hover:border-[3px]'>
            <Carousel showThumbs={false} showStatus={false} showArrows={false} renderBottomCenterControls={() => null}>
              {client1.map((client1, index) => (
                <div className='xl:flex flex-row justify-around items-start'>
                  <div className='xl:w-[50%] w-full flex justify-center'>
                    <img src={img1} className='gap-10 w-full xl:!w-[50%]' />
                  </div>
                  <div className='xl:w-[50%] w-full'>
                    <p className=' text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-start text-gray-400 font-bold text-start xl:text-start '>{client1.tittle}</p>
                    <p className=' text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-start text-gray-500 text-start xl:text-start mt-2'>{client1.content}</p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
        <Video1 />
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='font-bold items-start xl:items-start justify-start xl:justify-start text-center mb-10 text-gray-300 text-3xl'>Why Choose Us As Your Dental Marketing Company In India?</h1>
          <p className=' text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-start text-gray-500 text-start xl:text-center mt-10'>At Blue soltech, we provide specialized Dental Marketing services exclusively for dentists that help them grow their brand value, authority, website ranking, and traffic. If you’re a dentist looking to expand your business, then choosing our dental digital marketing services could help in many ways like:</p>
          <div className='xl:flex flex-row justify-around items-start mt-10'>
            <div className='xl:w-[50%] w-full flex justify-center'>
              <div className='bg-black w-full xl:w-[70%] h-fit xl:h-[260px] p-6 mx-auto border-gray-400 border-[1px] hover:border-[3px] m-2'>
                <p className=' text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-start text-gray-400 font-bold text-start xl:text-start'>Increase In ROI</p>
                <p className=' text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-start text-gray-500 text-start xl:text-start mt-2'>Our expert Dental Marketing Consultants carve out result-oriented Dental SEO strategies for dentists that ensure a positive and sustainable return on investment.</p>
              </div>
            </div>
            <div className='xl:w-[50%] w-full'>
              <div className='bg-black w-full xl:w-[70%] h-[300px] md:h-fit xl:h-[260px]  p-6 mx-auto border-gray-400 border-[1px] hover:border-[3px] m-2'>
                <p className=' text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-start text-gray-400 font-bold text-start xl:text-start'>Transparency</p>
                <p className=' text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-start text-gray-500 text-start xl:text-start mt-2'>With our proven transparency policy, our Dental Marketing Agency provides insightful reports at fixed intervals that give you an idea of what all we are doing. We will guide you and provide reports on time so you can check progress.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='font-bold items-start xl:items-start justify-start xl:justify-start text-start mb-10 text-gray-300 text-3xl'>Why Hire Us As Your Dental Marketing Company?</h1>
          <p className=' text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-start text-gray-500 text-start xl:text-start mt-10'>We are available 24/7 to answer any of your queries, concerns, or service calls. Calling us is not less than calling a friend for guidance. We’re here to help and happy to do so!</p>
          <h1 className='font-bold items-start xl:items-start justify-start xl:justify-start text-start mb-10 text-gray-300 text-3xl'>Interested In Learning More About Our Dental Marketing Company? Call Our Dental Marketing Agency Now!</h1>
          <p className=' text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-start text-gray-500 text-start xl:text-start mt-10'>With us, you can rest assured about getting 360° dental marketing services for your dental facility. From bringing in quick results through Google ads to establishing a remarkable presence on search engines through focused SEO services, and others, Blue soltech comes out as your most reliable digital marketing partner concerning your dental facility. Check our digital marketing packages now!</p>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <div className='bg-white w-full h-[300px] xl:h-[800px] m-4 flex justify-center items-center mx-auto overflow-hidden rounded-lg'>
            <iframe width="1257" height="707" src="https://www.youtube.com/embed/6dvgZvotJiQ" title="Step into Wix Studio | The web platform for agencies and enterprises" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
          </div>
        </div>
        <Happy_client/>
      </div>
    </div >
  )
}

export default Homepage