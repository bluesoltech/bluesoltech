import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import SEOServices from "../Pages/Services/SEO/Seo_services";
import Teammember from "../Pages/Teammember";
import Blog from "../Pages/Blog";
import Get from "../Pages/Get";
import About from "../component/About/Portfolio";
import Career from "../Pages/About/Career";
import Reviews from "../Pages/About/Reviews";
import Portfolio from "../component/About/Portfolio";
import Degital_marketing from "../Pages/About/Degital_marketing";
import Local_business_seo from "../Pages/Services/SEO/Local_business_seo";
import Technical_seo from "../Pages/Services/SEO/Technical_seo";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/seo_services" element={<SEOServices />} />
      <Route path="/blog" element={<Teammember />} />
      <Route path="/blog/:id" element={<Blog />} />
      <Route path="/contact" element={<Get />} />
      <Route path="/about" element={<About />} />
      <Route path="/about/portfolio" element={<Portfolio />} />
      <Route path="/career" element={<Career />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/degital_marketing" element={<Degital_marketing />} />
      <Route path="local_business_seo" element={<Local_business_seo />} />
      <Route path="technical_seo" element={<Technical_seo />} />
    </Routes>
  );
};

export default Routers;
