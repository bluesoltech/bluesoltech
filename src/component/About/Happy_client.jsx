import React from 'react'
import Slider from "react-slick";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Happy_client = () => {
    const client1 = [
        {
            tittle: 'SEO',
            content: 'Found the SEO expert (Alok Kumar) on Upwork and selected him based on recommendations and excellent feedback from other clients. My website is now listed on the first-page of Google relevant key-word searches. This is due to the online content created and posted in the various online venues by Alok.'
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
    const client2 = [
        {
            tittle: 'Social',
            content: 'I would like to recommend Rankon for all your web and social media solutions, they have a professional, quick and very responsive team and your works are done with full dedication within stipulated time. Keep it up!'
        },
        {
            tittle: 'Social',
            content: 'A fantastic team to work with. They listened and understood my business. Then created a strong marketing plan which I was happy with. However, RankOn over delivered. Great ROI. I highly recommend RankOn.'
        },
        {
            tittle: 'Social',
            content: 'Excellent service customisable to your particular needs, professional staff. I would say a go-to digital marketing agency for all the businesses in India who wants to make their digital presence felt.'
        }
    ]
    const client3 = [
        {
            tittle: 'Website',
            content: ' Blue soltech and his team greatly guided my daughter in her website designing process every step along the way! They were an highly resourceful team and possessed in-depth knowledge on website creation! My daughters business has really benefitted immensely from their services. She is receiving more enquiries and calls like never before! Thanks for the collective effort!'
        },
        {
            tittle: 'Website',
            content: 'Amazing experience with Rankon Technologies. Their whole crew is top notch. I am a plastic surgeon and needed to develop a patient-centric website for my practice in New York. They delivered and some more. The website was exactly how I wanted. They were very professional, thorough and responsive. I asked for multiple revisions and they were extremely patient and nice about it. I would recommend them very highly and have already referred my colleagues to them!'
        },
        {
            tittle: 'Website',
            content: ' Blue soltech and his team greatly guided my daughter in her website designing process every step along the way! They were an highly resourceful team and possessed in-depth knowledge on website creation! My daughters business has really benefitted immensely from their services. She is receiving more enquiries and calls like never before! Thanks for the collective effort!'
        }
    ]
    return (
        <div>
            <div className='text-gray-300 mt-14 mx-auto'>
                <h1 className='justify-center text-gray-300 text-center font-bold text-2xl xl:text-4xl'>Our Happy Clients</h1>
                <div className='flex flex-col xl:flex-row mt-4 md:mt-7 space-x-4 items-center justify-center'>
                    <div className='bg-black w-[100%] xl:w-[400px] h-fit xl:h-[400px] m-2'>
                        <Carousel showThumbs={false} showStatus={false} showArrows={false} renderBottomCenterControls={() => null}>
                            {client1.map((client1, index) => (
                                <div key={index} className="rounded-md">
                                    <div className='bg-gray-300 hover:bg-gray-300 h-[50px] rounded-t-md flex items-center justify-center'>
                                        <p className="text-black text-center font-bold">{client1.tittle}</p>
                                    </div>
                                    <div className='p-6'>
                                        <p className="text-gray-500 mt-4 text-center mb-4">{client1.content}</p>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                    <div className='bg-black w-[100%] xl:w-[400px] h-fit xl:h-[400px] m-2'>
                        <Carousel showThumbs={false} showStatus={false} showArrows={false} renderBottomCenterControls={() => null}>
                            {client2.map((client2, index) => (
                                <div key={index} className="rounded-md">
                                    <div className='bg-gray-300 hover:bg-gray-300 h-[50px] rounded-t-md flex items-center justify-center'>
                                        <p className="text-black text-center font-bold">{client2.tittle}</p>
                                    </div>
                                    <div className='p-6'>
                                        <p className="text-gray-500 mt-4 text-center mb-4">{client2.content}</p>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                    <div className='bg-black w-[100%] xl:w-[400px] h-fit xl:h-[400px] m-2'>
                        <Carousel showThumbs={false} showStatus={false} showArrows={false} renderBottomCenterControls={() => null}>
                            {client3.map((client3, index) => (
                                <div key={index} className="rounded-md">
                                    <div className='bg-gray-300 hover:bg-gray-300 h-[50px] rounded-t-md flex items-center justify-center'>
                                        <p className="text-black text-center font-bold">{client3.tittle}</p>
                                    </div>
                                    <div className='p-6'>
                                        <p className="text-gray-500 mt-4 text-center mb-4">{client3.content}</p>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Happy_client