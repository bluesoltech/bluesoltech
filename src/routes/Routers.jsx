import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import Teammember from "../Pages/Teammember";
import Blog from "../Pages/Blog";
import Get from "../Pages/Get";
import About from "../Pages/About/About";
import Career from "../Pages/About/Career";
import Reviews from "../Pages/About/Reviews";
import Degital_marketing from "../Pages/About/Degital_marketing";
import Local_business_seo from "../Pages/Services/SEO/Local_business_seo";
import Technical_seo from "../Pages/Services/SEO/Technical_seo";
import Pest_control_seo from "../Pages/Services/SEO/Pest_control_seo";
import Outsource_seo from "../Pages/Services/SEO/Outsource_seo";
import Roofer_seo from "../Pages/Services/SEO/Roofer_seo";
import Small_business_seo from "../Pages/Services/SEO/Small_business_seo";
import Onpage_seo from "../Pages/Services/SEO/Onpage_seo";
import Off_page_seo from "../Pages/Services/SEO/Off_page_seo";


const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/blog" element={<Teammember />} />
      <Route path="/blog/:id" element={<Blog />} />
      <Route path="/contact" element={<Get />} />
      <Route path="/about" element={<About />} />
      <Route path="/career" element={<Career />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/degital_marketing" element={<Degital_marketing />} />
      <Route path="/local_business_seo" element={<Local_business_seo />} />
      <Route path="/technical_seo" element={<Technical_seo />} />
      <Route path="/pest_control_seo" element={<Pest_control_seo />} />
      <Route path='/outsource_seo' element={<Outsource_seo />} />
      <Route path='/roofer_seo' element={<Roofer_seo/>}/>
      <Route path="/small_business_seo" element={<Small_business_seo/>}/>
      <Route path='/onpage_seo' element={<Onpage_seo/>}/>
      <Route path='/off_page_seo' element={<Off_page_seo/>}/>
    </Routes>
  );
};

export default Routers;
