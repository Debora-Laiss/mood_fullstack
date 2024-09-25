import React from "react";
import BannerImage from "../assets/image1.png";



const Home = () => {
    return (
      <div className="home-container">
        <div className="home-bannerImage-container">
        <img src={BannerImage} alt="" />
      
        </div>

      </div>
   
    );
  };
  
  export default Home;