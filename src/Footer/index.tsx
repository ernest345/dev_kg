import React from "react";
import logoDev from "../images/logo-dev.svg";
import devImg from "../images/img-dev.png";
import { FaTelegramPlane } from "react-icons/fa";
import { RiFacebookBoxFill } from "react-icons/ri";
import { TfiGithub } from "react-icons/tfi";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="footer">
          <img className="footer--img" src={logoDev} alt="logo" />

          <div className="footer--nav">
            <div className="footer--nav__info">
              <h4>
                Мы — сообщество разработчиков Кыргызстана. Данный проект
                поддерживается и <br /> администрируется членами нашего
                сообщества.
              </h4>
              <img src={devImg} alt="img" />
            </div>
            <div className="footer--nav__mes">
              <FaTelegramPlane />
              <RiFacebookBoxFill />
              <TfiGithub />
              <IoLogoYoutube />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
