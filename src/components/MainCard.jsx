import React from "react";
import CardBtn from "./CardBtn";
import Footer from "./Footer";
import Info from "./Info";
import InfoList from "./InfoList";
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function MainCard() {
  return (
    <div className="card-body">
      <div className="card__img">
        <img src={process.env.PUBLIC_URL + "images/Yasser-Shehab.JPG"} />
      </div>
      <header className="card-header">
        <h1>Yasser Shehab</h1>
        <h2> Front-End Developer</h2>
      </header>
      <div className="card-btns">
        <a href="mailto: yassershehab9@gmail.com">
          <CardBtn name="Email">
            <FaLinkedin />
          </CardBtn>
        </a>
        <a href="https://www.linkedin.com/in/yasser-shehab-494638182/" target="_blank">
          <CardBtn name="LinkedIn" style="blue">
            <FaEnvelope />
          </CardBtn>
        </a>
      </div>
      <section className="card-info">
        <InfoList />
        <Info title="Tech Stack">
          <p>Front-End : HTML5 & CSS3 , Reactjs, Redux , Angular , Tailwind CSS , SCSS , jQuery</p>
          <p>Back-End : Nodejs, Express.js , MongoDB , Mongoose</p>
        </Info>
      </section>
      <Footer />
    </div>
  );
}

export default MainCard;
