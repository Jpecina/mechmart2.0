import React from "react";
import MainNavigation from "../Components/Header/MainNavigation";
import MainHeaderComponent from "../Components/Header/MainHeaderComponent";
import ImgSlideShowComponent from "../Components/ImgSlideShow/ImgSlideShowComponent";
import FeaturedComponent from "../Components/Featured/FeaturedComponent";
import Footer from "../Components/Footer/Footer";

function HomePageview() {
  return (
    <div className="views">
      <MainHeaderComponent />
      <MainNavigation />
      <ImgSlideShowComponent />
      <FeaturedComponent />
      <Footer />
    </div>
  );
}

export default HomePageview;
