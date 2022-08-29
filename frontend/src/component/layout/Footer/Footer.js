import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>College Bazaar</h1>
        <p>Get best products at best price.</p>

        <p>Copyrights 2022 &copy; DEv </p>
      </div>

      <div className="rightFooter">
        <h4>Contact us</h4>
        <a href="http://instagram.com/meabhisingh">Instagram</a>
        {/* <a href="http://youtube.com/6packprogramemr">Youtube</a> */}
        <a href="http://google.com">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
