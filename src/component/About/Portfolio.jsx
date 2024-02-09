import React from "react";
import Happy_client from "../About/Happy_client";

const Portfolio = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col h-[600px] bg-black">
        <h1 className="text-6xl font-semibold my-8 text-white">
          Our Portfolio
        </h1>
        <div className="my-6 text-center">
          <p className="text-gray-500 my-3">
            Check Few Of Our Portfolio And How We Helped Them TO Grow Their
            Business
          </p>
          <p className="text-gray-500 my-3">
            Want To See You Here? Request Proposal Now!
          </p>
        </div>
        <button className="bg-white text-black font-bold py-2 px-4 rounded-md m-4">
          Apply Now
        </button>
      </div>
      <div className="bg-black flex justify-center items-center">
        <div className="w-4/5 bg-black rounded-3xl border-[#6b7280] border-solid border-2 flex justify-center items-center mb-20">
          <div className="w-[90%] mt-2">
            <ul className="m-2 flex space-around text-white p-5 flex justify-between items-center">
              <li>Facebook</li>
              <li>Google Ads</li>
              <li>Instagram</li>
              <li>SEO</li>
              <li>YouTube Ads</li>
              <li>Website Development</li>
            </ul>
            <div className="my-8 flex justify-around items-center">
              <div className="flex justify-center items-center flex-col">
                <h1 className="text-white text-center font-bold text-[1.2rem]">
                  Grow Online Agriculture App
                </h1>
                <div>
                  <table className="text-white my-8 text-center table-auto ">
                    <tr className="p-5 ">
                      <th className="rounded-3xl border-[#6b7280] border-solid border-2 font-medium p-2">
                        Objective
                      </th>
                      <td className="rounded-3xl text-gray-500 border-[#6b7280] border-solid border-2 p-2">
                        App Install
                      </td>
                    </tr>
                    <tr>
                      <th className="rounded-3xl border-[#6b7280] border-solid border-2 font-medium p-2">
                        Budget
                      </th>
                      <td className="rounded-3xl text-gray-500 border-[#6b7280] border-solid border-2 p-2">
                        1,50,000/month
                      </td>
                    </tr>
                    <tr>
                      <th className="rounded-3xl  border-[#6b7280] border-solid border-2 font-medium p-2">
                        Platform
                      </th>
                      <td className="rounded-3xl text-gray-500 border-[#6b7280] border-solid border-2 p-2">
                        Facebook
                      </td>
                    </tr>
                    <tr>
                      <th className="rounded-3xl border-[#6b7280] border-solid border-2 font-medium p-2">
                        Target
                      </th>
                      <td className="rounded-3xl  text-gray-500 border-[#6b7280] border-solid border-2 p-2">
                        50K App For Grow Online
                      </td>
                    </tr>
                    <tr>
                      <th className="rounded-3xl border-[#6b7280] border-solid border-2 font-medium p-2">
                        Result
                      </th>
                      <td className="rounded-3xl  text-gray-500 border-[#6b7280] border-solid border-2 p-2">
                        20 INR Per App Install
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
              <img
                src=""
                alt=""
                className="text-white h-[200px] w-[350px] bg-white"
              />
            </div>
            <div className="flex justify-around items-center my-12">
              <img
                src=""
                alt=""
                className="text-white h-[200px] w-[500px] bg-white"
              />
              <img
                src=""
                alt=""
                className="text-white h-[200px] w-[500px] bg-white"
              />
            </div>
            <div className="my-12">
              <p className=" text-gray-500 text-[1.1rem] leading-7">
                <span className="text-white text-[1.2rem] mr-2">
                  What We Did:
                </span>
                Our team of Facebook marketing, analyzed the app and started
                with linking the app to their Facebook page. Then, we started
                with Facebook ads and selected the objective “App Installs”.
              </p>
              <p className="text-gray-500 text-[1.1rem] leading-7 my-2">
                Initially client decided to spend less and started increasing
                budget as soon as he started getting downloads.
              </p>
              <p className="text-white text-[1.2rem] leading-7 my-6">
                www.bluesoltech.in
              </p>
              <button className="bg-white text-black font-bold py-2 px-4 rounded-md my-4">
                <a href="http://www.bluesoltech.in">Visit the Site</a>
              </button>
            </div>
            {/* ============================ another component ================================ */}
            <div className="my-8 flex justify-around items-center">
              <div className="flex justify-center items-center flex-col">
                <h1 className="text-white text-center font-bold text-[1.2rem]">
                  Ocean Pure- Hot & Cold Water Solution In Sikkim
                </h1>
                <div>
                  <table className="text-white my-8 text-center table-auto ">
                    <tr className="p-5 ">
                      <th className="rounded-3xl border-[#6b7280] border-solid border-2 font-medium p-2">
                        Objective
                      </th>
                      <td className="rounded-3xl text-gray-500 border-[#6b7280] border-solid border-2 p-2">
                        More Leads from Facebook Ads
                      </td>
                    </tr>
                    <tr>
                      <th className="rounded-3xl border-[#6b7280] border-solid border-2 font-medium p-2">
                        Budget
                      </th>
                      <td className="rounded-3xl text-gray-500 border-[#6b7280] border-solid border-2 p-2">
                        30K/Month
                      </td>
                    </tr>
                    <tr>
                      <th className="rounded-3xl  border-[#6b7280] border-solid border-2 font-medium p-2">
                        Platform
                      </th>
                      <td className="rounded-3xl text-gray-500 border-[#6b7280] border-solid border-2 p-2">
                        Facebook
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
              <img src="" alt="" className="h-[200px] w-[350px] bg-white" />
            </div>
            <div className="my-12">
              <p className=" text-gray-500 text-[1.1rem] leading-7">
                <span className="text-white text-[1.2rem] mr-2">
                  What We Did:
                </span>
                Client was already using Facebook ads from any other provider
                but he was not satisfied with the leads he was getting. We
                created a proper Facebook marketing strategy including Lead
                generation, Retargeting and Look A Like to increase the ROI of
                client.
              </p>
            </div>
            <div className="my-12">
              <span className="leading-7 text-white text-[1.2rem] mr-2">
                Strategies We Applied:
              </span>
              <ol className="my-4 list-disc">
                <li className="text-gray-500 text-[1.1rem] hover:text-white transition duration-500 ease-in-out w-[20%]">
                  Lead Generation
                </li>
                <li className="text-gray-500 text-[1.1rem] hover:text-white transition duration-500 ease-in-out w-[20%]">
                  Look A Like Campaign
                </li>
                <li className="text-gray-500 text-[1.1rem] hover:text-white transition duration-500 ease-in-out w-[20%]">
                  Retargeting Ads
                </li>
              </ol>
            </div>
            <img src="" alt="" className=" h-[600px] w-full bg-white my-12" />
            <h1 className="text-6xl font-semibold mt-16 text-white  text-center text-[2.5rem]">
              Other Case Studies
            </h1>

            {/* ============================ Carousel ================================ */}
            <img
              src=""
              alt=""
              className=" h-[600px] w-full bg-white my-12"
              text="Carousel Videos"
            />
          </div>
        </div>
      </div>
      <div className="my-12">
        <Happy_client />
      </div>
    </>
  );
};

export default Portfolio;
