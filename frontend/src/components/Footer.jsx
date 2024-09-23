import React from "react";
import { BsTwitter } from 'react-icons/bs';
import { SiLinkedin } from 'react-icons/si';
import { FaFacebookF, FaGithub } from 'react-icons/fa'; // Importando ícones

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <FaGithub /> 
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>About</span>
          <span>Features</span>
          <span>Support</span>
          <span>Community</span>
        </div>
        <div className="footer-section-columns">
          <span>contact@moodrecord.com</span>
          <span>support@moodrecord.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
