import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../assets/img/vision.png';
import digital12 from '../assets/img/digital12.png';
import local6 from '../assets/img/local6.png';
import local7 from '../assets/img/local7.png'
import local8 from '../assets/img/local8.png'
import local9 from '../assets/img/local9.png'
import local10 from '../assets/img/local10.png'



const sliderContent = [
    {
        title: "SEO vs. PPC Advertising: Which Is Better for Your Business in 2024?",
        description: "An SEO audit is a comprehensive evaluation of a website’s search engine optimization (SEO) performance. The purpose of an SEO audit is to identify areas of improvement, uncover issues that may be affecting a site’s visibility in search engine results, and provide recommendations for optimizing its overall SEO strategy.",
        imageUrl: local6
    },
    {
        title: "SEO Consultant: How to Become an SEO Expert in 2024",
        description: "An SEO audit is a comprehensive evaluation of a website’s search engine optimization (SEO) performance. The purpose of an SEO audit is to identify areas of improvement, uncover issues that may be affecting a site’s visibility in search engine results, and provide recommendations for optimizing its overall SEO strategy.",
        imageUrl: local7
    },
    {
        title: "SEO Strategy for 2024: Expert Tips to Optimize And Improve Website Rankings",
        description: "An SEO audit is a comprehensive evaluation of a website’s search engine optimization (SEO) performance. The purpose of an SEO audit is to identify areas of improvement, uncover issues that may be affecting a site’s visibility in search engine results, and provide recommendations for optimizing its overall SEO strategy.",
        imageUrl: local8
    },
    {
        title: " Why Your Website Isn’t Ranking and How to Fix Your Website SEO issues in 2024",
        description: "An SEO audit is a comprehensive evaluation of a website’s search engine optimization (SEO) performance. The purpose of an SEO audit is to identify areas of improvement, uncover issues that may be affecting a site’s visibility in search engine results, and provide recommendations for optimizing its overall SEO strategy.",
        imageUrl: local9
    },
    {
        title: "Best SEO Tools You Must Try in 2024 to Improve Your SEO Results	",
        description: "An SEO audit is a comprehensive evaluation of a website’s search engine optimization (SEO) performance. The purpose of an SEO audit is to identify areas of improvement, uncover issues that may be affecting a site’s visibility in search engine results, and provide recommendations for optimizing its overall SEO strategy.",
        imageUrl: local10
    },
    {
        title: "SEO Audit: Most Advanced SEO Audit Checklist for 2024",
        description: "An SEO audit is a comprehensive evaluation of a website’s search engine optimization (SEO) performance. The purpose of an SEO audit is to identify areas of improvement, uncover issues that may be affecting a site’s visibility in search engine results, and provide recommendations for optimizing its overall SEO strategy.",
        imageUrl: digital12
    },
];


const Slick = () => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        arrows: false
    };
    return (
        <div className="slider-container text-white">
            <Slider className='!text-3xl' {...settings}>
                {sliderContent.map((slide, index) => (
                    <div key={index} className="rounded-md p-4">
                        <div className="p-4 border border-gray-500 ">
                            <div className="flex h-[50%]  overflow-hidden justify-center items-center">
                                <img src={slide.imageUrl} className="w-[80%]" alt="no_img" />
                            </div>
                            <div>
                                <p className="text-white mt-4 text-xl font-bold">{slide.title}</p>
                                <p className="text-gray-500 mt-2 text-sm leading-7">{slide.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Slick;
