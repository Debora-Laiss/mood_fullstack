import React from "react";
import BannerImage from "../assets/image1.png";
import gif from "../assets/gif.gif";


const Home = () => {
    return (
      <div className="home-container">
        <div className="home-bannerImage-container">
        <img src={BannerImage} alt="" />
      
          </div>
          <div className="home-text-section">
            <h1 className="primary-text">
            A Mood Record é sua forma de acompanhar seu humor a um clique de distância.
            Nosso aplicativo é construído para  te ajudar no acompanhamento de seu estado emocional atravez de descrições.
            </h1>
          
            <div className="home-image-section">
           <img src={gif} alt="" />
          </div> 
         
        </div>
      </div>
   
    );
  };
  
  export default Home;