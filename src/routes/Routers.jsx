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
import HospitalHomepage from "../Pages/Industries/Hospital/Homepage"
import HomepageEcommerce from "../Pages/Industries/Ecommerce/Homepage"
import ItmarketingHome from "../Pages/Industries/ITMarketing/Homepage"
import EducationalHome from "../Pages/Industries/Educational/Homepage"
import RealestateHome from "../Pages/Industries/RealEstate/Homepage"
import Roofer_seo from "../Pages/Services/SEO/Roofer_seo";
import DentalHomepage from "../Pages/Industries/Dental/Homepage"
import CleaningHomepage from "../Pages/Industries/Cleaning/Homepage"
import LawfirmsHomepage from "../Pages/Industries/LawFirm/Homepage"
import DectorDMHomepage from "../Pages/Industries/DoctorDM/Homepage"
import SmmHomepage from "../Pages/Packages/SMM_Packages/Homepage"
import ORMPackages from "../Pages/Packages/ORMPackages";
import LogoDesigning from "../Pages/Packages/LogoDesigning";

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
      <Route path="/local_business_seo" element={<Local_business_seo />} />
      <Route path="/technical_seo" element={<Technical_seo />} />
      <Route path="/industries/hospital" element={<HospitalHomepage />} />
      <Route path="/industries/ecommerce" element={<HomepageEcommerce />} />
      <Route path="/industries/dental" element={<DentalHomepage />} />
      <Route path="/industries/itmarketing" element={<ItmarketingHome />} />
      <Route path="/industries/lawFirm" element={<LawfirmsHomepage/>}/>
      <Route path ="/industries/Educational" element={<EducationalHome/>}/>
      <Route path="/industries/RealEstate" element={<RealestateHome/>}/>
      <Route path="/industries/cleaning" element={<CleaningHomepage/>}/>
      <Route path="/industries/DoctorDM" element={<DectorDMHomepage/>}/>
      <Route path ="/Packages/SMM_Packages" element={<SmmHomepage/>}/>
      <Route path="/roofer_seo" element={<Roofer_seo/>} />
      <Route path="/ormpackages"element={<ORMPackages/>}/>
      <Route path="logoDesigning" element={<LogoDesigning/>}/>
    </Routes>
  );
};

export default Routers;
