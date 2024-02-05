import React, { useState, useEffect, useRef } from "react";
import Services from "../component/Services";
import Logoslider from "../component/Logoslider";
import pc from "../assets/img/sa.webp";
import About from "../component/About/About";

// import { motion, useScroll, useTransform } from "framer-motion";

const Home = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [card, setCard] = useState("1");
  const [loadmore, setLoadamore] = useState(true);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  const isMobile = width <= 768;
  return (
    <div className="bg-[#0F0E0E]">
      <div className="h-[95vh] flex flex-col items-center justify-evenly bg-[#0F0E0E] text-white">
        <p className="text-4xl leading-[60px] md:text-7xl text-center font-[poppins] md:leading-[110px]">
          <div className="z-4 absolute w-[150px] h-[50px] border-white border-[1px] rounded-[100%] rotate-[-30deg] transition-all duration-300 hover:rotate-[30deg] "></div>
          We provide<br></br> IT Solutions for <br></br>your{" "}
          <span className="font-bold ">TASTE</span>
        </p>
        <div className="w-full">
          <Logoslider />
        </div>
      </div>
      <div className="flex justify-center items-center  mb-8">
        <div className="flex flex-col justify-center items-center md:w-[65%] 2xl:w-[65%] p-4">
          <div className="flex flex-col-reverse md:flex-row justify-between w-full">
            <div className="flex flex-col md:w-[50%] justify-around ">
              <p className="text-2xl text-center md:text-3xl md:text-start lg:text-5xl text-white p-2 transition-all duration-300 hover:rotate-[-2deg]">
                Solution to your digital Problems
              </p>
              <p className="text-sm text-center text-gray-500 py-4 w-full md:text-xl md:text-start md:flex md:justify-start transition-all duration-300 hover:rotate-[-2deg]">
                10 YEARS OF EXPERIENCE IN OUTSOURCING
              </p>
            </div>
            <div
              className="w-full md:w-[50%] h-auto transition-all duration-300 hover:rotate-2"
              s
            >
              {/* <div className="absolute">Hi! Nice to meet you</div> */}
              <img className="w-full h-auto object-contain" src={pc} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 md:flex-row p-6 transition-all duration-300">
        <div
          id="1"
          onClick={(e) => {
            // console.log(e);
            setCard(e.target.id.toString());
          }}
          className={
            card == "1"
              ? "hover:bg-white hover:text-black text-white cursor-pointer w-full h-auto md:w-[500px] md:h-[480px] lg:h-[400px] border-[1px] border-white rounded transition-all duration-300"
              : "hover:bg-white hover:text-black text-white cursor-pointer w-full h-auto md:w-[100px] md:h-[480px] lg:h-[400px] border-[1px] border-white rounded transition-all duration-1000"
          }
        >
          {card == "1" || isMobile ? (
            <div
              id="1"
              className="flex flex-col h-full justify-between items-center p-3"
            >
              <div>
                <h1 id="1" className="text-3xl mb-3">
                  Cyber Security
                </h1>
                <p id="1" className="text-md  text-gray-500">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptatibus labore aspernatur quidem, odio voluptas fuga
                  saepe tenetur quod animi est nihil id architecto provident rem
                  molestiae libero quo corporis, omnis nulla repellendus
                  consequatur pariatur in sapiente! Ipsa at sint nemo commodi ut
                  ducimus corrupti alias reiciendis totam eligendi? Velit,
                  laudantium.
                </p>
              </div>
              <div className="w-full flex justify-end">
                <button className="bg-gray-200 hover:bg-white p-2 rounded-xl text-black">
                  Click here
                </button>
              </div>
            </div>
          ) : (
            <h1
              id="1"
              style={{
                writingMode: "vertical-lr",
                textOrientation: "upright",
              }}
              className="text-3xl md:text-2xl mx-auto "
            >
              CYBER SECURITY
            </h1>
          )}
        </div>
        <div
          id="2"
          onClick={(e) => {
            setCard(e.target.id.toString());
          }}
          className={
            card == "2"
              ? "hover:bg-white hover:text-black text-white cursor-pointer w-full h-auto md:w-[500px] md:h-[480px] lg:h-[400px] border-[1px] border-white rounded transition-all duration-300"
              : "hover:bg-white hover:text-black text-white cursor-pointer w-full h-auto md:w-[100px] md:h-[480px] lg:h-[400px] border-[1px] border-white rounded transition-all duration-1000"
          }
        >
          {card == "2" || isMobile ? (
            <div
              id="2"
              className="flex flex-col h-full justify-between items-center p-3"
            >
              <div>
                <h1 id="2" className="text-3xl  mb-3">
                  Web Development
                </h1>
                <p id="2" className="text-md  text-gray-500">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptatibus labore aspernatur quidem, odio voluptas fuga
                  saepe tenetur quod animi est nihil id architecto provident rem
                  molestiae libero quo corporis, omnis nulla repellendus
                  consequatur pariatur in sapiente! Ipsa at sint nemo commodi ut
                  ducimus corrupti alias reiciendis totam eligendi? Velit,
                  laudantium.
                </p>
              </div>
              <div className="w-full flex justify-end">
                <button className="bg-gray-200 hover:bg-white p-2 rounded-xl text-black">
                  Click here
                </button>
              </div>
            </div>
          ) : (
            <h1
              id="2"
              style={{
                writingMode: "vertical-lr",
                textOrientation: "upright",
              }}
              className="text-3xl md:text-2xl mx-auto"
            >
              WEB DEVELOPMENT
            </h1>
          )}
        </div>
        <div
          id="3"
          onClick={(e) => {
            setCard(e.target.id.toString());
          }}
          className={
            card == "3"
              ? "hover:bg-white hover:text-black text-white cursor-pointer w-full h-auto md:w-[500px] md:h-[480px] lg:h-[400px] border-[1px] border-white rounded transition-all duration-300"
              : "hover:bg-white hover:text-black text-white cursor-pointer w-full h-auto md:w-[100px] md:h-[480px] lg:h-[400px] border-[1px] border-white rounded transition-all duration-1000"
          }
        >
          {card == "3" || isMobile ? (
            <div
              id="3"
              className="flex flex-col h-full justify-between items-center p-3"
            >
              <div>
                <h1 id="3" className="text-3xl mb-3">
                  App Development
                </h1>
                <p id="3" className="text-md  text-gray-500">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptatibus labore aspernatur quidem, odio voluptas fuga
                  saepe tenetur quod animi est nihil id architecto provident rem
                  molestiae libero quo corporis, omnis nulla repellendus
                  consequatur pariatur in sapiente! Ipsa at sint nemo commodi ut
                  ducimus corrupti alias reiciendis totam eligendi? Velit,
                  laudantium.
                </p>
              </div>
              <div className="w-full flex justify-end">
                <button className="bg-gray-200 hover:bg-white p-2 rounded-xl text-black">
                  Click here
                </button>
              </div>
            </div>
          ) : (
            <h1
              id="3"
              style={{
                writingMode: "vertical-lr",
                textOrientation: "upright",
              }}
              className="text-3xl md:text-2xl mx-auto"
            >
              APP DEVELOPMENT
            </h1>
          )}
        </div>
        {loadmore && isMobile && (
          <button
            onClick={() => {
              setLoadamore(false);
            }}
            className="border-[1px] border-white p-2 text-white rounded"
          >
            See all services
          </button>
        )}
        {(!loadmore || !isMobile) && (
          <div
            id="4"
            onClick={(e) => {
              setCard(e.target.id.toString());
            }}
            className={
              card == "4"
                ? "hover:bg-white hover:text-black text-white cursor-pointer w-full h-auto md:w-[500px] md:h-[480px] lg:h-[400px] border-[1px] border-white rounded transition-all duration-300"
                : "hover:bg-white hover:text-black text-white cursor-pointer w-full h-auto md:w-[100px] md:h-[480px] lg:h-[400px] border-[1px] border-white rounded transition-all duration-1000"
            }
          >
            {card == "4" || isMobile ? (
              <div
                id="4"
                className="flex flex-col h-full justify-between items-center p-3"
              >
                <div>
                  <h1 id="4" className="text-3xl  mb-3">
                    Data Analytics
                  </h1>
                  <p id="4" className="text-md  text-gray-500">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptatibus labore aspernatur quidem, odio voluptas fuga
                    saepe tenetur quod animi est nihil id architecto provident
                    rem molestiae libero quo corporis, omnis nulla repellendus
                    consequatur pariatur in sapiente! Ipsa at sint nemo commodi
                    ut ducimus corrupti alias reiciendis totam eligendi? Velit,
                    laudantium.
                  </p>
                </div>
                <div className="w-full flex justify-end">
                  <button className="bg-gray-200 hover:bg-white p-2 rounded-xl text-black">
                    Click here
                  </button>
                </div>
              </div>
            ) : (
              <h1
                id="4"
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                }}
                className="text-3xl md:text-2xl mx-auto"
              >
                DATA ANALYTICS
              </h1>
            )}
          </div>
        )}
        {(!loadmore || !isMobile) && (
          <div
            id="5"
            onClick={(e) => {
              setCard(e.target.id.toString());
            }}
            className={
              card == "5"
                ? "hover:bg-white hover:text-black text-white cursor-pointer w-full h-auto md:w-[500px] md:h-[480px] lg:h-[400px] border-[1px] border-white rounded transition-all duration-300"
                : "hover:bg-white hover:text-black text-white cursor-pointer w-full h-auto md:w-[100px] md:h-[480px] lg:h-[400px] border-[1px] border-white rounded transition-all duration-1000"
            }
          >
            {card == "5" || isMobile ? (
              <div
                id="5"
                className="flex flex-col h-full justify-between items-center p-3"
              >
                <div>
                  <h1 id="5" className="text-3xl mb-3">
                    SEO Optimization
                  </h1>
                  <p id="5" className="text-md  text-gray-500">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptatibus labore aspernatur quidem, odio voluptas fuga
                    saepe tenetur quod animi est nihil id architecto provident
                    rem molestiae libero quo corporis, omnis nulla repellendus
                    consequatur pariatur in sapiente! Ipsa at sint nemo commodi
                    ut ducimus corrupti alias reiciendis totam eligendi? Velit,
                    laudantium.
                  </p>
                </div>
                <div className="w-full flex justify-end">
                  <button className="bg-gray-200 hover:bg-white p-2 rounded-xl text-black">
                    Click here
                  </button>
                </div>
              </div>
            ) : (
              <h1
                id="5"
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                }}
                className="text-3xl md:text-2xl mx-auto"
              >
                SEO OPTIMIZATION
              </h1>
            )}
          </div>
        )}
        {(!loadmore || !isMobile) && (
          <div
            id="6"
            onClick={(e) => {
              setCard(e.target.id.toString());
            }}
            className={
              card == "6"
                ? "hover:bg-white hover:text-black text-white cursor-pointer w-full h-auto md:w-[500px] md:h-[480px] lg:h-[400px] border-[1px] border-white rounded transition-all duration-300"
                : "hover:bg-white hover:text-black text-white cursor-pointer w-full h-auto md:w-[100px] md:h-[480px] lg:h-[400px] border-[1px] border-white rounded transition-all duration-1000"
            }
          >
            {card == "6" || isMobile ? (
              <div
                id="6"
                className="flex flex-col h-full justify-between items-center p-3"
              >
                <div>
                  <h1 id="6" className="text-3xl  mb-3">
                    Social Media Management
                  </h1>
                  <p id="6" className="text-md  text-gray-500">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptatibus labore aspernatur quidem, odio voluptas fuga
                    saepe tenetur quod animi est nihil id architecto provident
                    rem molestiae libero quo corporis, omnis nulla repellendus
                    consequatur pariatur in sapiente! Ipsa at sint nemo commodi
                    ut ducimus corrupti alias reiciendis totam eligendi? Velit,
                    laudantium.
                  </p>
                </div>
                <div className="w-full flex justify-end">
                  <button className="bg-gray-200 hover:bg-white p-2 rounded-xl text-black">
                    Click here
                  </button>
                </div>
              </div>
            ) : (
              <h1
                id="6"
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                }}
                className=" text-3xl md:text-2xl mx-auto"
              >
                SOCIAL MEDIA MANAGEMENT
              </h1>
            )}
          </div>
        )}
        {(!loadmore || !isMobile) && (
          <div
            id="7"
            onClick={(e) => {
              setCard(e.target.id.toString());
            }}
            className={
              card == "7"
                ? "hover:bg-white hover:text-black text-white cursor-pointer w-full h-auto md:w-[500px]  md:h-[480px] lg:h-[400px] border-[1px] border-white rounded transition-all duration-300"
                : "hover:bg-white hover:text-black text-white cursor-pointer w-full h-auto md:w-[100px]  md:h-[480px] lg:h-[400px] border-[1px] border-white rounded transition-all duration-1000"
            }
          >
            {card == "7" || isMobile ? (
              <div
                id="7"
                className="flex flex-col h-full justify-between items-center p-3"
              >
                <div>
                  <h1 id="7" className="text-3xl mb-3">
                    Graphic Design
                  </h1>
                  <p id="7" className="text-md  text-gray-500">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptatibus labore aspernatur quidem, odio voluptas fuga
                    saepe tenetur quod animi est nihil id architecto provident
                    rem molestiae libero quo corporis, omnis nulla repellendus
                    consequatur pariatur in sapiente! Ipsa at sint nemo commodi
                    ut ducimus corrupti alias reiciendis totam eligendi? Velit,
                    laudantium.
                  </p>
                </div>
                <div className="w-full flex justify-end">
                  <button className="bg-gray-200 hover:bg-white p-2 rounded-xl text-black">
                    Click here
                  </button>
                </div>
              </div>
            ) : (
              <h1
                id="7"
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                }}
                className="text-3xl md:text-2xl mx-auto"
              >
                GRAPHIC DESIGN
              </h1>
            )}
          </div>
        )}
      </div>
      <About />
      <Services />
      <div className="w-full flex justify-center pb-8">
        <div className="w-[65%] grid md:grid-cols-2">
          <div className="text-5xl lg:text-7xl text-white p-4 h-[50vh] flex items-center text-center">
            Let's Solve All Your DIGITAL Problems
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-gray-500 md:text-2xl lg:text-4xl text-center mb-4">
              Give us a ping!<br></br> We will contact you.
            </h1>
            <button className="bg-white py-1 px-3 rounded-xl focus:border-none hover:bg-gray-200">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
