import React from 'react'
import img1 from '../../assets/img/vision.png'
import Services_first from '../../component/Services_first'
import Singal_slider from '../../component/Singal_slider'
import Video1 from '../../component/Video1'
import Happy_client from '../../component/About/Happy_client'

const clients = [
  {
    tittle: 'SEO',
    img: img1,
    content: 'Found the SEO expert (Alok Kumar) on Upwork and selected him based on recommendations and excellent feedback from other clients. My website is now listed on the first-page of Google relevant key-word searches. This is due to the online content created and posted in the various online venues by Alok.'
  },
  {
    tittle: 'SEO',
    img: img1,
    content: 'We came across Alok from Rankon technologies through Google and YouTube. While interacting with him I realised that I am talking to a person with knowledge and values . We are delighted to associate with Alok after that He and his team is professional, transperant and follow values and ethics. Looking forward for a long term association with Rankon.'
  },
  {
    tittle: 'SEO',
    img: img1,
    content: 'Amazing experience with Rankon Technologies. Their whole crew is top notch. I am a plastic surgeon and needed to develop a patient-centric website for my practice in New York. They delivered and some more. The website was exactly how I wanted. They were very professional, thorough and responsive. I asked for multiple revisions and they were extremely patient and nice about it. I would recommend them very highly and have already referred my colleagues to them!'
  }
]

const LogoDesigning = () => {
  return (
    <div className='bg-[#0F0E0E] p-10 xl:p-20 items-center'>
      <div className='w-full md:w-[80%]  mt-4 mx-auto'>
        <Services_first
          imgSrc={img1}
          btn_title="Logo Design Company In India"
          duration="Logo Design Services"
          tittle="Creative & Modern Logo Design Company In India"
          features1="Want digital marketing for doctors? RankON Technologies is a leading digital marketing agency in India. We offer complete digital marketing services for all types of businesses at very affordable prices. Must check our services and pricing plans."
        />
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='font-bold items-start xl:items-start justify-start xl:justify-start text-center mb-10 text-gray-300 text-2xl xl:text-3xl'>Trusted Logo Design Company In India</h1>
          <div className='xl:flex flex-row justify-between items-start'>
            <div className='xl:w-[50%] w-full'>
              <p className=' text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-start text-gray-500 text-start xl:text-start'>In addition, it allows firms to monitor customer behaviour and alter their ads accordingly. E-commerce marketing has endless potential since it allows firms to adapt their marketing messages to attract the ideal customers and enhance their return on investment.</p>
              <p className=' text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-start text-gray-500 text-start xl:text-start mt-10'>As a result, it should come as no surprise that e-commerce marketing is becoming an increasingly essential component of business marketing efforts.</p>
              <p className=' text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-start text-gray-500 text-start xl:text-start mt-10'>With its vast potential and capacity to reach a larger audience, e-commerce marketing will continue to expand over the next several years.</p>
            </div>
            <div className='xl:w-[50%] w-full flex justify-center xl:justify-end'>
              <img src={img1} className='gap-10 w-full xl:w-[60%]' />
            </div>
          </div>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='font-bold items-start xl:items-start justify-start xl:justify-start text-center mb-6 text-gray-300 text-2xl xl:text-3xl'>Professional Logo Design Service In India That Gives Your Business An Identity That Never Fades Out</h1>
          <p className='text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-center text-gray-500 text-center xl:text-start mt-4'>Gone are the days when traditional marketing methods alone could ensure a steady stream of patients. The advent of digital marketing has presented doctors with an unprecedented opportunity to tap into the vast online landscape and establish a robust online presence with best digital marketing for doctors. Through carefully crafted digital strategies, doctors can connect with their target audience, foster trust, and showcase their expertise in an increasingly competitive healthcare landscape.</p>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='font-bold items-start xl:items-start justify-start xl:justify-start text-center mb-10 text-gray-300 text-2xl xl:text-3xl'>Why Hire A Logo Design Company?</h1>
          <div className='xl:flex flex-row justify-between items-start'>
            <div className='xl:w-[50%] w-full'>
              <p className=' text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-start text-gray-500 text-start xl:text-start'>In addition, it allows firms to monitor customer behaviour and alter their ads accordingly. E-commerce marketing has endless potential since it allows firms to adapt their marketing messages to attract the ideal customers and enhance their return on investment.</p>
              <p className=' text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-start text-gray-500 text-start xl:text-start mt-10'>As a result, it should come as no surprise that e-commerce marketing is becoming an increasingly essential component of business marketing efforts.</p>
              <p className=' text-[1.1rem] leading-7 items-start xl:items-start justify-start xl:justify-start text-gray-500 text-start xl:text-start mt-10'>With its vast potential and capacity to reach a larger audience, e-commerce marketing will continue to expand over the next several years.</p>
            </div>
            <div className='xl:w-[50%] w-full flex justify-center xl:justify-end'>
              <img src={img1} className='gap-10 w-full xl:w-[60%]' />
            </div>
          </div>
        </div>
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='font-bold items-start xl:items-start justify-start xl:justify-start text-center mb-10 text-gray-300 text-2xl xl:text-3xl'>Process Our Logo Design Company Follows</h1>
          <Singal_slider clients={clients} />
        </div>
        <Video1 />
        <div className='xl:mt-[120px] mt-[60px]'>
          <h1 className='font-bold items-start xl:items-start justify-start xl:justify-start text-center mb-6 text-gray-300 text-2xl xl:text-3xl'>Latest Social Media Marketing Articles</h1>
          <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 text-sm justify-between mt-11 mx-auto'>
            <div className='w-[90%] xl:w-[400px] h-fit xl:h-[570px] md:h-fit bg-black border-gray-500 mx-auto hover:border-2 p-6 m-2 rounded-lg flex flex-col justify-center items-center'>
              <img src={img1} className='xl:w-[60%] !top-0' alt="Image" />
              <h1 className='font-bold text-center text-gray-300 text-lg my-4'>Real Estate SEO Services</h1>
              <p className="text-[1.1rem] leading-7 text-gray-500 text-center">
                Consider the company's overall marketing goals and objectives, such as increasing website traffic, generating leads, improving brand awareness, or increasing sales. These goals will help determine the scope and budget for the digital marketing campaign.
              </p>
            </div>
            <div className='w-[90%] xl:w-[400px] h-fit xl:h-[570px] md:h-fit bg-black border-gray-500 mx-auto hover:border-2 p-6 m-2 rounded-lg flex flex-col justify-center items-center'>
              <img src={img1} className='xl:w-[60%]' alt="Image" />
              <h1 className='font-bold text-center text-gray-300 text-lg my-4'>Real Estate PPC Services</h1>
              <p className="text-[1.1rem] leading-7 text-gray-500 text-center">
                Consider the company's overall marketing goals and objectives, such as increasing website traffic, generating leads, improving brand awareness, or increasing sales. These goals will help determine the scope and budget for the digital marketing campaign.
              </p>
            </div>
            <div className='w-[90%] xl:w-[400px] h-fit xl:h-[570px] md:h-fit bg-black border-gray-500 mx-auto hover:border-2 p-6 m-2 rounded-lg flex flex-col justify-center items-center'>
              <img src={img1} className='xl:w-[60%]' alt="Image" />
              <h1 className='font-bold text-center text-gray-300 text-lg my-4'>Real Estate SMM Services</h1>
              <p className="text-[1.1rem] leading-7 text-gray-500 text-center">
                As a general rule of thumb, a company should allocate around 7-12% of its total revenue towards marketing. However, this percentage may vary depending on the factors mentioned above. It is important to keep in mind that digital marketing is an ongoing process and requires continuous investment to maintain and improve results over time.</p>
            </div>
          </div>
        </div>
        <Happy_client/>
      </div>
    </div>
  )
}

export default LogoDesigning