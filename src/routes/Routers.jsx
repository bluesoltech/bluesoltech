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
    </Routes>
  );
};

export default Routers;
