import React from "react";
import MainNavigation from "../Components/Header/MainNavigation";
import MainHeaderComponent from "../Components/Header/MainHeaderComponent";
import ImgSlideShowComponent from "../Components/ImgSlideShow/ImgSlideShowComponent";
import FeaturedComponent from "../Components/Featured/FeaturedComponent";

function HomePageview() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <MainHeaderComponent />
      <MainNavigation />
      <ImgSlideShowComponent />
      <FeaturedComponent />
    </div>
  );
}

export default HomePageview;
