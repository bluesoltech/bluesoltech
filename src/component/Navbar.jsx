import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logonew.png";
import { useNavigate } from "react-router-dom";
import { Dropdown, ButtonToolbar } from 'rsuite';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [isAbout, setAbout] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {}, [isAbout]);

  const scrollToAbout = () => {
    // console.log("about");
    navigate("/");
    // setAbout(true);

    const aboutPageElement = document.getElementById("about_page");
    // console.log(aboutPageElement);
    if (aboutPageElement) {
      aboutPageElement.scrollIntoView({ behavior: "smooth" });
    } else {
      setTimeout(scrollToAbout, 100);
    }
  };

  const handleContact = () => {
    navigate("/contact");
  };
  return (
    <div>
      <nav className="sticky top-0 z-50 py-4 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-8 h-full">
          <div className="flex items-center justify-between h-full w-full">
            <div className="flex items-center w-full h-full">
              <div className="flex-shrink-0">
                <img className="h-12 w-auto" src={logo} alt="Workflow" />
              </div>
              <div className="hidden md:block w-full h-full" >
                <div className="ml-10 flex justify-between items-center">
                  <div className="flex">
                    <Link
                      className="mr-4 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-black hover:text-white"
                      to="/"
                    >
                      Home
                    </Link>
                    <ButtonToolbar className=" w-[100px] mr-4 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-black hover:text-white">
                      <Dropdown title="About Us" placement="bottomStart" className="absolute w-[100px]">
                        <div className="bg-slate-50 text-black w-[150px] rounded-md p-3 mt-[9px] text-center">
                          <Dropdown.Menu title="Training" className="top-[100px]">
                            <Link to="/degital_marketing">
                              <Dropdown.Item className="bg-gray-300 rounded-md p-1">Digital Marketing</Dropdown.Item>
                            </Link>
                          </Dropdown.Menu>
                          <Link to="/portfolio">
                            <Dropdown.Item>Portfolio</Dropdown.Item>
                          </Link>
                          <Link to="/career">
                            <Dropdown.Item>Career</Dropdown.Item>
                          </Link>
                          <Link to="/reviews">
                            <Dropdown.Item>Review</Dropdown.Item>
                          </Link>
                        </div>
                      </Dropdown>
                    </ButtonToolbar>
                    <ButtonToolbar className=" w-[100px] mr-4 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-black hover:text-white">
                      <Dropdown title="Services" placement="bottomStart" className="absolute w-[100px] ">
                        <div className="bg-slate-50 text-black w-[200px] rounded-md p-3 mt-[9px] text-center">
                          <Dropdown.Menu title="SEO Services">
                            <Dropdown.Menu title="Local Business SEO">
                              <Link to="">
                                <Dropdown.Item>Pest Control SEO</Dropdown.Item>
                              </Link>
                              <Link to="">
                                <Dropdown.Item>Roofer SEO</Dropdown.Item>
                              </Link>
                            </Dropdown.Menu>
                            <div className="bg-gray-300 rounded-md p-1">
                              <Link to="">
                                <Dropdown.Item>Outsource SEO</Dropdown.Item>
                              </Link>
                              <Link to="">
                                <Dropdown.Item>Small Business SEO</Dropdown.Item>
                              </Link>
                              <Link to="">
                                <Dropdown.Item>OnPage SEO</Dropdown.Item>
                              </Link>
                              <Link to="">
                                <Dropdown.Item>Off-Page SEO</Dropdown.Item>
                              </Link>
                              <Link to="">
                                <Dropdown.Item>Competitor Analysis SEO</Dropdown.Item>
                              </Link>
                              <Link to="">
                                <Dropdown.Item>Technical SEO</Dropdown.Item>
                              </Link>
                            </div>
                            <Dropdown.Menu title="CMS SEO">
                              <div className="bg-gray-300 rounded-md p-1">
                                <Link to="">
                                  <Dropdown.Item>Magento SEO</Dropdown.Item>
                                </Link>
                                <Link to="">
                                  <Dropdown.Item>Squarespace SEO</Dropdown.Item>
                                </Link>
                                <Link to="">
                                  <Dropdown.Item>Shopify SEO</Dropdown.Item>
                                </Link>
                                <Link to="">
                                  <Dropdown.Item>WordPress SEO</Dropdown.Item>
                                </Link>
                                <Link to="">
                                  <Dropdown.Item>WIX SEO Services</Dropdown.Item>
                                </Link>
                              </div>
                            </Dropdown.Menu>
                          </Dropdown.Menu>
                          <Dropdown.Menu title="SMM Services" className="top-[100px]">
                            <Link to="">
                              <Dropdown.Item className="bg-gray-300 rounded-md p-1"> Local Business Seo</Dropdown.Item>
                            </Link>
                          </Dropdown.Menu>
                          <Link to="">
                            <Dropdown.Item>Social Media Management</Dropdown.Item>
                          </Link>
                          <Link to="">
                            <Dropdown.Item>SMO Services</Dropdown.Item>
                          </Link>
                          <Dropdown.Menu title="PPC services" className="top-[100px]">
                            <Link to="">
                              <Dropdown.Item className="bg-gray-300 rounded-md p-1"> Google Ads Management</Dropdown.Item>
                            </Link>
                            <Link to="">
                              <Dropdown.Item className="bg-gray-300 rounded-md p-1"> Google Search Ads</Dropdown.Item>
                            </Link>
                            <Link to="">
                              <Dropdown.Item className="bg-gray-300 rounded-md p-1"> Video Ads Campaign</Dropdown.Item>
                            </Link>
                          </Dropdown.Menu>
                          <Dropdown.Menu title="Content Marketing" className="top-[100px]">
                            <Link to="">
                              <Dropdown.Item className="bg-gray-300 rounded-md p-1"> Content Writing</Dropdown.Item>
                            </Link>
                          </Dropdown.Menu>
                          <Link to="">
                            <Dropdown.Item>Web Design services</Dropdown.Item>
                          </Link>
                          <Dropdown.Menu title="Web Development" className="top-[100px]">
                            <Link to="">
                              <Dropdown.Item className="bg-gray-300 rounded-md p-1"> WordPress</Dropdown.Item>
                            </Link>
                            <Link to="">
                              <Dropdown.Item className="bg-gray-300 rounded-md p-1"> Ecommerce</Dropdown.Item>
                            </Link>
                            <Link to="">
                              <Dropdown.Item className="bg-gray-300 rounded-md p-1"> Custom Website</Dropdown.Item>
                            </Link>
                            <Dropdown.Menu title="Website Maintenance" className="top-[100px]">
                              <Link to="">
                                <Dropdown.Item className="bg-gray-300 rounded-md p-1"> WordPress Maintenance</Dropdown.Item>
                              </Link>
                            </Dropdown.Menu>
                          </Dropdown.Menu>
                          <Dropdown.Menu title="Graphic Design" className="top-[100px]">
                            <Link to="">
                              <Dropdown.Item className="bg-gray-300 rounded-md p-1"> Logo Design</Dropdown.Item>
                            </Link>
                            <Link to="">
                              <Dropdown.Item className="bg-gray-300 rounded-md p-1"> Animated Video</Dropdown.Item>
                            </Link>
                          </Dropdown.Menu>
                        </div>
                      </Dropdown>
                    </ButtonToolbar>
                    <ButtonToolbar className=" w-[100px] mr-4 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-black hover:text-white">
                      <Dropdown title="Packages" placement="bottomStart" className="absolute w-[100px]">
                        <div className="bg-slate-50 text-black w-[180px] rounded-md p-3 mt-[9px] text-center">
                          <Link to="">
                          <Dropdown.Menu title="SEO PAckages" className="top-[100px]">
                            <Link to="local">
                              <Dropdown.Item className="bg-gray-300 rounded-md p-1">Local SEO Packages</Dropdown.Item>
                            </Link>
                            <Link to="">
                              <Dropdown.Item className="bg-gray-300 rounded-md p-1">OnPage SEO Packages</Dropdown.Item>
                            </Link>
                            <Link to="">
                              <Dropdown.Item className="bg-gray-300 rounded-md p-1">Aff-Page SEO Packages</Dropdown.Item>
                            </Link>
                            <Link to="">
                              <Dropdown.Item className="bg-gray-300 rounded-md p-1">Technical SEO Packages</Dropdown.Item>
                            </Link>
                          </Dropdown.Menu>
                          </Link>
                          <Dropdown.Menu title="PPC Packages" className="top-[100px]">
                            <Link to="googleadds">
                              <Dropdown.Item className="bg-gray-300 rounded-md p-1">Google ads marketing</Dropdown.Item>
                            </Link>
                          </Dropdown.Menu>
                          <Dropdown.Menu title="SMM Packages" className="top-[100px]">
                            <Link to="">
                              <Dropdown.Item className="bg-gray-300 rounded-md p-1">Facebook Packages</Dropdown.Item>
                            </Link>
                            <Link to="">
                              <Dropdown.Item className="bg-gray-300 rounded-md p-1">Instagram Packages</Dropdown.Item>
                            </Link>
                            <Link to="">
                              <Dropdown.Item className="bg-gray-300 rounded-md p-1">YouTube Packages</Dropdown.Item>
                            </Link>
                            <Link to="">
                              <Dropdown.Item className="bg-gray-300 rounded-md p-1">Twitter Packages</Dropdown.Item>
                            </Link>
                            <Link to="">
                              <Dropdown.Item className="bg-gray-300 rounded-md p-1">LinkedIn Packages</Dropdown.Item>
                            </Link>
                          </Dropdown.Menu>
                          <Link to="">
                            <Dropdown.Item>OMR Packages</Dropdown.Item>
                          </Link>
                          <Link to="">
                            <Dropdown.Item>Logo Designing</Dropdown.Item>
                          </Link>
                          <Link to="">
                            <Dropdown.Item>SMO Packages</Dropdown.Item>
                          </Link>
                          <Link to="">
                            <Dropdown.Item>Website Maintenance</Dropdown.Item>
                          </Link>
                          <Link to="">
                            <Dropdown.Item>Website Packages</Dropdown.Item>
                          </Link>
                        </div>
                      </Dropdown>
                    </ButtonToolbar>
                    <ButtonToolbar className=" w-[100px] mr-4 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-black hover:text-white">
                      <Dropdown title="Industries" placement="bottomStart" className="absolute w-[100px]">
                        <div className="bg-slate-50 text-black w-[200px] rounded-md p-3 mt-[9px] text-center">
                          <Dropdown.Menu title="Hospital Marketing" className="top-[100px]">
                            <Link to="">
                              <Dropdown.Item className="bg-gray-300 rounded-md p-1">Hospital App Cost</Dropdown.Item>
                            </Link>
                          </Dropdown.Menu>
                          <Dropdown.Menu title="Ecommerce Marketing" className="top-[100px]">
                            <Link to="">
                              <Dropdown.Item className="bg-gray-300 rounded-md p-1">Ecommerce SEO</Dropdown.Item>
                            </Link>
                          </Dropdown.Menu>
                          <Dropdown.Menu title="Dental Marketing" className="top-[100px]">
                            <Link to="">
                              <Dropdown.Item className="bg-gray-300 rounded-md p-1">Dental SEO</Dropdown.Item>
                            </Link>
                            <Link to="">
                              <Dropdown.Item className="bg-gray-300 rounded-md p-1">Dentist Advertising</Dropdown.Item>
                            </Link>
                            <Link to="">
                              <Dropdown.Item className="bg-gray-300 rounded-md p-1">Dental Website</Dropdown.Item>
                            </Link>
                          </Dropdown.Menu>
                          <Dropdown.Menu title="It Marketing" className="top-[100px]">
                            <Link to="">
                              <Dropdown.Item className="bg-gray-300 rounded-md p-1">IT Web Design</Dropdown.Item>
                            </Link>
                            <Link to="">
                              <Dropdown.Item className="bg-gray-300 rounded-md p-1">IT Website SEO</Dropdown.Item>
                            </Link>
                            <Link to="">
                              <Dropdown.Item className="bg-gray-300 rounded-md p-1">IT Social Media Marketing</Dropdown.Item>
                            </Link>
                          </Dropdown.Menu>
                          <Dropdown.Menu title="Law Firm Marketing" className="top-[100px]">
                            <Link to="">
                              <Dropdown.Item className="bg-gray-300 rounded-md p-1">Law Firm SEO</Dropdown.Item>
                            </Link>
                          </Dropdown.Menu>
                          <Dropdown.Menu title="Educational Marketing" className="top-[100px]">
                            <Dropdown.Menu title="SMM School" className="top-[100px]">
                              <Link to="">
                                <Dropdown.Item className="bg-gray-300 rounded-md p-1">Facebook School</Dropdown.Item>
                              </Link>
                            </Dropdown.Menu>
                            <Link to="">
                              <Dropdown.Item className="bg-gray-300 rounded-md p-1">School Web Design</Dropdown.Item>
                            </Link>
                          </Dropdown.Menu>
                          <Dropdown.Menu title="Real Estate Marketing" className="top-[100px]">
                            <Link to="">
                              <Dropdown.Item className="bg-gray-300 rounded-md p-1">Real Estate SEO</Dropdown.Item>
                            </Link>
                            <Link to="">
                              <Dropdown.Item className="bg-gray-300 rounded-md p-1">Real Estate Google Ads</Dropdown.Item>
                            </Link>
                            <Link to="">
                              <Dropdown.Item className="bg-gray-300 rounded-md p-1">Real Estate SMM</Dropdown.Item>
                            </Link>
                            <Link to="">
                              <Dropdown.Item className="bg-gray-300 rounded-md p-1">Real Estate Website</Dropdown.Item>
                            </Link>
                          </Dropdown.Menu>
                          <Dropdown.Menu title="Cleaning Company" className="top-[100px]">
                            <Link to="">
                              <Dropdown.Item className="bg-gray-300 rounded-md p-1">Maids Web Design</Dropdown.Item>
                            </Link>
                          </Dropdown.Menu>
                          <Dropdown.Menu title="Roofer Marketing" className="top-[100px]">
                            <Link to="">
                              <Dropdown.Item className="bg-gray-300 rounded-md p-1">Roofing Web Design</Dropdown.Item>
                            </Link>
                            <Link to="">
                              <Dropdown.Item className="bg-gray-300 rounded-md p-1">Roofing SEO</Dropdown.Item>
                            </Link>
                          </Dropdown.Menu>
                          <Dropdown.Menu title="Doctor Digital Marketing" className="top-[100px]">
                            <Link to="">
                              <Dropdown.Item className="bg-gray-300 rounded-md p-1">SEO For Doctors</Dropdown.Item>
                            </Link>
                          </Dropdown.Menu>
                          <Dropdown.Menu title="Mover Marketing" className="top-[100px]">
                            <Link to="">
                              <Dropdown.Item className="bg-gray-300 rounded-md p-1">Moving Web Design</Dropdown.Item>
                            </Link>
                            <Link to="">
                              <Dropdown.Item className="bg-gray-300 rounded-md p-1">Moverb SEO</Dropdown.Item>
                            </Link>
                          </Dropdown.Menu>
                        </div>
                      </Dropdown>
                    </ButtonToolbar>
                    <ButtonToolbar className=" w-[100px] mr-4 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-black hover:text-white">
                      <Dropdown title="Blog" placement="bottomStart" className="absolute w-[100px]">
                        <div className="bg-slate-50 text-black w-[150px] rounded-md p-3 mt-[9px]">
                          <Link to="">
                            <Dropdown.Item> Graphic Resources</Dropdown.Item>
                          </Link>
                          <Link to="">
                            <Dropdown.Item>Google Ads Resources</Dropdown.Item>
                          </Link>
                          <Link to="">
                            <Dropdown.Item>SEO Resources</Dropdown.Item>
                          </Link>
                          <Link to="">
                            <Dropdown.Item>Social Media Resources</Dropdown.Item>
                          </Link>
                          <Link to="">
                            <Dropdown.Item>Pricing Resources</Dropdown.Item>
                          </Link>
                        </div>
                      </Dropdown>
                    </ButtonToolbar>
                    <Link
                      className="mr-4 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-black hover:text-white"
                      to=""
                    >
                      Get Quote
                    </Link>
                  </div>
                  <button
                    onClick={handleContact}
                    className="bg-gray-700 text-white px-4 py-2 rounded-md text-sm font-medium "
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          className="absolute z-2 bg-white rounded m-2 right-0 w-[150px] "
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden " id="mobile-menu">
              <div
                ref={ref}
                className=" space-y-1 sm:px-3 flex flex-col justify-center items-center pb-2"
              >
                <Link
                  className="w-full hover:bg-gray-200 text-black block px-3 py-2 rounded-md text-base font-medium text-center"
                  to="/"
                >
                  Home
                </Link>

                <ButtonToolbar className="mr-4 px-3 py-2 rounded-md text-sm font-medium transition-all duration-600 ">
                  <Dropdown title="About Us">
                    <Link
                      className=""
                    >
                      <Dropdown.Menu title="Training">
                        <Link to="/degital_marketing">
                          <Dropdown.Item>Digital Marketing</Dropdown.Item>
                        </Link>
                      </Dropdown.Menu>
                      <Link to="portfolio">
                        <Dropdown.Item>Portfolio</Dropdown.Item>
                      </Link>
                      <Link to="/career">
                        <Dropdown.Item>Career</Dropdown.Item>
                      </Link>
                      <Link to="/reviews">
                        <Dropdown.Item>Review</Dropdown.Item>
                      </Link>
                    </Link>
                  </Dropdown>
                </ButtonToolbar>
                <Link
                  className="w-full hover:bg-gray-200 text-black block px-3 py-2 rounded-md text-base font-medium text-center"
                  to="/services"
                >
                  Services
                </Link>
                <Link
                  className="w-full hover:bg-gray-200 text-black block px-3 py-2 rounded-md text-base font-medium text-center"
                  to="/blog"
                >
                  Blog
                </Link>
                <div className="flex ">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 ">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
};
export default Navbar;
