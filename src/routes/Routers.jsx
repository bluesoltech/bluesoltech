import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import Teammember from "../Pages/Teammember";
import Blog from "../Pages/Blog";
import Get from "../Pages/Get";
import About from "../component/About/Portfolio";
import Career from "../Pages/About/Career";
import Reviews from "../Pages/About/Reviews";
import Portfolio from "../component/About/Portfolio";
import Degital_marketing from "../Pages/About/Degital_marketing";
import BlogHomepage from "../component/Blog/Homepage";
import BlogGoogleAds from "../component/Blog/GoogleAds";
import BlogGraphic from "../component/Blog/Graphic";
import BlogPricing from "../component/Blog/Pricing";
import BlogSEO from "../component/Blog/SEO";
import BlogSocialMedia from "../component/Blog/SocialMedia";
import ContactHomepage from "../component/contactUs/homepage";
import ContactPartner from "../component/ContactUs/Partner";
import Quote from "../component/GetQuote/Homepage";
import Cleaning from "../component/Industries/Cleaning/Homepage";
import MaidsCleaning from "../component/Industries/Cleaning/MaidsWebDesign";
import DentalHomepage from "../component/Industries/Dental/Homepage";
import DentalAdvertising from "../component/Industries/Dental/Advertising";
import DentalSEO from "../component/Industries/Dental/SEO";
import DentalWebsite from "../component/Industries/Dental/Website";
import DoctorHomepage from "../component/Industries/DoctorDM/Homepage";
import DoctorSEO from "../component/Industries/DoctorDM/SEO";
import EcommerceHomepage from "../component/Industries/Ecommerce/Homepage";
import EcommerceSEO from "../component/Industries/Ecommerce/ECommerceSEO";
import SMMSchool from "../component/Industries/Educational/SMM_School/Homepage";
import SMMFacebook from "../component/Industries/Educational/SMM_School/Facebook";
import Educational from "../component/Industries/Educational/Homepage";
import SchoolWebDesign from "../component/Industries/Educational/SchoolWebDesign";
import HospitalHomepage from "../component/Industries/Hospital/Homepage";
import HospitalAppCost from "../component/Industries/Hospital/HospitalApp";
import ItMarketing from "../component/Industries/ITMarketing/Homepage";
import ItSocialMedia from "../component/Industries/ITMarketing/SocialMedia";
import ItWebdesign from "../component/Industries/ITMarketing/WebDesign";
import ItWebSEO from "../component/Industries/ITMarketing/WebSEO";
import LawFirm from "../component/Industries/LawFirm/Homepage";
import LawFirmSEO from "../component/Industries/LawFirm/LawFirmSEO";
import MooverSEO from "../component/Industries/Moover/MoverSEO";
import MooverWebDesign from "../component/Industries/Moover/MovingWebDesign";
import RealEstate from "../component/Industries/RealEstate/Homepage";
import RealGoogleAds from "../component/Industries/RealEstate/GoogleAds";
import RealSEO from "../component/Industries/RealEstate/SEO";
import RealSMM from "../component/Industries/RealEstate/SMM";
import RealWebsite from "../component/Industries/RealEstate/Website";
import RooferSEO from "../component/Industries/Roofer/SEO";
import RooferWebDesign from "../component/Industries/Roofer/WebDesign";
// Packages
import LogoPackages from "../component/Packages/LogoDesigning";
import LogoORM from "../component/Packages/ORMPackages";
import LogoSMO from "../component/Packages/SMOPackages";
import LogoWebMaintainance from "../component/Packages/WebMaintainance";
import LogoWebPackages from "../component/Packages/WebPackages";
import PPCPackages from "../component/Packages/PPC_Packages/Homepage";
import PPCGoogleAds from "../component/Packages/PPC_Packages/GoogleAdds";
import SEOPackages from "../component/Packages/SEO_Packages/Homepage";
import SEOLocal from "../component/Packages/SEO_Packages/Local";
import SEOOffPage from "../component/Packages/SEO_Packages/OffPage";
import SEOOnPage from "../component/Packages/SEO_Packages/OnPage";
import SEOTechnical from "../component/Packages/SEO_Packages/Technical";
import SMMPackages from "../component/Packages/SMM_Packages/Homepage";
import PCKSMMFacebook from "../component/Packages/SMM_Packages/Facebook";
import PCKSSMMInstagram from "../component/Packages/SMM_Packages/Instagram";
import PCKSSMMLinkedIn from "../component/Packages/SMM_Packages/LinkedIn";
import PCKSSMMTwitter from "../component/Packages/SMM_Packages/Twitter";
import PCKSSMMYouTube from "../component/Packages/SMM_Packages/YouTube";
// Services
import SMOServices from "../component/Services/SMOServices";
import SMManagement from "../component/Services/SocialMediaManagement";
import WebDesignServices from "../component/Services/WebDesignServices";
import ContentMarketing from "../component/Services/ContentMarketing/Homepage";
import ContentWriting from "../component/Services/ContentMarketing/ContentWriting";
import GraphicDesignServices from "../component/Services/GraphicDesign/Homepage";
import AnimatedVideo from "../component/Services/GraphicDesign/AnimatedVideo";
import LogoDesign from "../component/Services/GraphicDesign/LogoDesign";
import PPCServices from "../component/Services/PPCServices/Homepage";
import GoogleAds from "../component/Services/PPCServices/GoogleAds";
import GoogleSearch from "../component/Services/PPCServices/GoogleSearch";
import VideoAds from "../component/Services/PPCServices/VideoAds";
import SeoServices from "../component/Services/SEOServices/Homepage";
import Competitor from "../component/Services/SEOServices/Competitor";
import OffPage from "../component/Services/SEOServices/OffPage";
import OnPage from "../component/Services/SEOServices/OnPage";
import OutSource from "../component/Services/SEOServices/OutSource";
import SmallBusiness from "../component/Services/SEOServices/SmallBusiness";
import Technical from "../component/Services/SEOServices/Technical";
import Magento from "../component/Services/SEOServices/CMSSEO/Magento";
import Shopify from "../component/Services/SEOServices/CMSSEO/Shopify";
import SquareSpace from "../component/Services/SEOServices/CMSSEO/SquareSpace";
import WIX from "../component/Services/SEOServices/CMSSEO/WIX";
import WordPress from "../component/Services/SEOServices/CMSSEO/WordPress";
import SEOLocalBusiness from "../component/Services/SEOServices/LocalBusinessSEO/Homepage";
import SEOPasteControl from "../component/Services/SEOServices/LocalBusinessSEO/PestControlSEO";
import SEORoofer from "../component/Services/SEOServices/LocalBusinessSEO/RooferSeo";
import SocialMedia from "../component/Services/SMMServices/Homepage";
import SMInstagram from "../component/Services/SMMServices/Instagram";
import SMLinkedin from "../component/Services/SMMServices/LinkedIn";
import SMPinterest from "../component/Services/SMMServices/Pinterest";
import SMTwitter from "../component/Services/SMMServices/Twitter";
import SMYouTube from "../component/Services/SMMServices/YouTube";
import SMFacebook from "../component/Services/SMMServices/Facebook/Homepage";
import SMFbBrand from "../component/Services/SMMServices/Facebook/Brand";
import SMFbCatalogue from "../component/Services/SMMServices/Facebook/Catalogue";
import SMFbLeadGeneration from "../component/Services/SMMServices/Facebook/LeadGeneration";
import SMFbPackageLikeAd from "../component/Services/SMMServices/Facebook/PageLikeAd";
import SMFbTrafficAd from "../component/Services/SMMServices/Facebook/TrafficAds";
import WebDev from "../component/Services/WebDevelopment/Homepage";
import CustomWeb from "../component/Services/WebDevelopment/CustomWebsite";
import EcommWeb from "../component/Services/WebDevelopment/Ecommerce";
import WordpressWeb from "../component/Services/WebDevelopment/Wordpress";
import WebMaintenance from "../component/Services/WebDevelopment/WebsiteMaintenance/Homepage";
import WordpressMaintenance from "../component/Services/WebDevelopment/WebsiteMaintenance/WordpressMaintenance";




const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/blog" element={<Teammember />} />
      <Route path="/blog/:id" element={<Blog />} />
      <Route path="/contact" element={<Get />} />
      <Route path="/about" element={<About />} />
      <Route path="/about/portfolio" element={<Portfolio />} />
      <Route path="/career" element={<Career />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/degital_marketing" element={<Degital_marketing />} />
      <Route path="/blog/homepage" element={<BlogHomepage />} />
      <Route path="/blog/google_ads" element={<BlogGoogleAds />} />
      <Route path="/blog/graphic" element={<BlogGraphic />} />
      <Route path="/blog/pricing" element={<BlogPricing />} />
      <Route path="/blog/SEO" element={<BlogSEO />} />
      <Route path="/blog/social_media" element={<BlogSocialMedia />} />
      <Route path="/contact/homepage" element={<ContactHomepage />} />
      <Route path="/contact/partner" element={<ContactPartner />} />
      <Route path="/quote" element={<Quote />} />
      {/* ======================= Industries ========================== */}
      <Route path="/industries/cleaning" element={<Cleaning />} />
      <Route path="/industries/cleaning/maids" element={<MaidsCleaning />} />
      <Route path="/industries/dental/homepage" element={<DentalHomepage />} />
      <Route path="/industries/dental/advertising" element={<DentalAdvertising />} />
      <Route path="/industries/dental/SEO" element={<DentalSEO />} />
      <Route path="/industries/dental/website" element={<DentalWebsite />} />
      <Route path="/industries/doctor/digital_marketing" element={<DoctorHomepage />} />
      <Route path="/industries/doctor/seo" element={<DoctorSEO />} />
      <Route path="/industries/ecommerce/homepage" element={<EcommerceHomepage />} />
      <Route path="/industries/ecommerce/seo" element={<EcommerceSEO />} />
      <Route path="/industries/educational" element={<Educational />} />
      <Route path="/industries/educational/school_web_design" element={<SchoolWebDesign />} />
      <Route path="/industries/educational/smm_school" element={<SMMSchool />} />
      <Route path="/industries/educational/smm_school/facebook" element={<SMMFacebook />} />
      <Route path="/industries/educational/nothing" element={<EcommerceSEO />} />
      <Route path="/industries/hospital" element={<HospitalHomepage />} />
      <Route path="/industries/hospital/hospital_app_cost" element={<HospitalAppCost />} />
      <Route path="/industries/IT_marketing" element={<ItMarketing />} />
      <Route path="/industries/IT_marketing/social_media" element={<ItSocialMedia />} />
      <Route path="/industries/IT_marketing/web_design" element={<ItWebdesign />} />
      <Route path="/industries/IT_marketing/web_seo" element={<ItWebSEO />} />
      <Route path="/industries/law_firm" element={<LawFirm />} />
      <Route path="/industries/law_firm/seo" element={<LawFirmSEO />} />
      <Route path="/industries/moover/seo" element={<MooverSEO />} />
      <Route path="/industries/moover/web_design" element={<MooverWebDesign />} />
      <Route path="/industries/real_estate" element={<RealEstate />} />
      <Route path="/industries/real_estate/google_ads" element={<RealGoogleAds />} />
      <Route path="/industries/real_estate/seo" element={<RealSEO />} />
      <Route path="/industries/real_estate/smm" element={<RealSMM />} />
      <Route path="/industries/real_estate/website" element={<RealWebsite />} />
      <Route path="/industries/roofer/seo" element={<RooferSEO />} />
      <Route path="/industries/roofer/web_design" element={<RooferWebDesign />} />
      {/* ======================= Packages ========================== */}
      <Route path="/packages/logo_designing" element={<LogoPackages />} />
      <Route path="/packages/orm_packages" element={<LogoORM />} />
      <Route path="/packages/smo_packages" element={<LogoSMO />} />
      <Route path="/packages/web_maintainance" element={<LogoWebMaintainance />} />
      <Route path="/packages/web_packages" element={<LogoWebPackages />} />
      <Route path="/packages/ppc" element={<PPCPackages />} />
      <Route path="/packages/ppc/google_ads" element={<PPCGoogleAds />} />
      <Route path="/packages/seo" element={<SEOPackages />} />
      <Route path="/packages/seo/local_seo" element={<SEOLocal />} />
      <Route path="/packages/seo/off_page_seo" element={<SEOOffPage />} />
      <Route path="/packages/seo/onpage_seo" element={<SEOOnPage />} />
      <Route path="/packages/seo/technical_seo" element={<SEOTechnical />} />
      <Route path="/packages/smm" element={<SMMPackages />} />
      <Route path="/packages/smm/facebook_marketing" element={<PCKSMMFacebook />} />
      <Route path="/packages/smm/instagram_marketing" element={<PCKSSMMInstagram />} />
      <Route path="/packages/smm/linkedin_marketing" element={<PCKSSMMLinkedIn />} />
      <Route path="/packages/smm/twitter_marketing" element={<PCKSSMMTwitter />} />
      <Route path="/packages/smm/youtube_marketing" element={<PCKSSMMYouTube />} />
      {/* ======================= Services ========================== */}
      <Route path="/services/smo_services" element={<SMOServices />} />
      <Route path="/services/social_media_management" element={<SMManagement />} />
      <Route path="/services/web_design_services" element={<WebDesignServices />} />
      <Route path="/services/content_marketing" element={<ContentMarketing />} />
      <Route path="/services/content_writing" element={<ContentWriting />} />
      <Route path="/services/graphic_design" element={<GraphicDesignServices />} />
      <Route path="/services/graphic_design/animation_video_services" element={<AnimatedVideo />} />
      <Route path="/services/graphic_design/logo_designing_services" element={<LogoDesign />} />
      <Route path="/services/ppc_services" element={<PPCServices />} />
      <Route path="/services/ppc_services/google_ads" element={<GoogleAds />} />
      <Route path="/services/ppc_services/google_search" element={<GoogleSearch />} />
      <Route path="/services/ppc_services/video_ads" element={<VideoAds />} />
      <Route path="/services/seo_services" element={<SeoServices />} />
      <Route path="/services/seo_services/competitor_analysis_seo" element={<Competitor />} />
      <Route path="/services/seo_services/off_page_seo" element={<OffPage />} />
      <Route path="/services/seo_services/onpage_seo" element={<OnPage />} />
      <Route path="/services/seo_services/outsource_seo" element={<OutSource />} />
      <Route path="/services/seo_services/small_business_seo" element={<SmallBusiness />} />
      <Route path="/services/seo_services/technical_seo" element={<Technical />} />
      <Route path="/services/seo_services/cms_seo/magento" element={<Magento />} />
      <Route path="/services/seo_services/cms_seo/shopify" element={<Shopify />} />
      <Route path="/services/seo_services/cms_seo/square_space" element={<SquareSpace />} />
      <Route path="/services/seo_services/cms_seo/WIX" element={<WIX />} />
      <Route path="/services/seo_services/cms_seo/wordpress" element={<WordPress />} />
      <Route path="/services/seo_services/local_business_seo" element={<SEOLocalBusiness />} />
      <Route path="/services/seo_services/local_business_seo/paste_control_seo" element={<SEOPasteControl />} />
      <Route path="/services/seo_services/local_business_seo/roofer_seo" element={<SEORoofer />} />
    <Route path="/services/smm_services" element={<SocialMedia />} />
    <Route path="/services/smm_services/instagram" element={<SMInstagram />} />
    <Route path="/services/smm_services/linkedin" element={<SMLinkedin />} />
    <Route path="/services/smm_services/pinterest" element={<SMPinterest />} />
    <Route path="/services/smm_services/twitter" element={<SMTwitter />} />
    <Route path="/services/smm_services/youtube" element={<SMYouTube />} />
    <Route path="/services/smm_services/facebook" element={<SMFacebook />} />
    <Route path="/services/smm_services/facebook/brand" element={<SMFbBrand />} />
    <Route path="/services/smm_services/facebook/catalogue" element={<SMFbCatalogue />} />
    <Route path="/services/smm_services/facebook/lead_generation" element={<SMFbLeadGeneration />} />
    <Route path="/services/smm_services/facebook/page_liked_ad" element={<SMFbPackageLikeAd />} />
    <Route path="/services/smm_services/facebook/traffic_ads" element={<SMFbTrafficAd />} />
    <Route path="/services/web_development" element={<WebDev />} />
    <Route path="/services/web_development/custom_web_development" element={<CustomWeb />} />
    <Route path="/services/web_development/e-commerce_web_development" element={<EcommWeb />} />
    <Route path="/services/web_development/wordpress_web_development" element={<WordpressWeb />} />
    <Route path="/services/web_development/web_maintenance" element={<WebMaintenance />} />
    <Route path="/services/web_development/web_maintenance/wordpress_maintenance" element={<WordpressMaintenance />} />
    </Routes>
  );
};

export default Routers;