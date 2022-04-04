import React from "react";
import CardBtn from "./CardBtn";
import Footer from "./Footer";
import Info from "./Info";
import InfoList from "./InfoList";

function MainCard() {
  return (
    <div className="card-body">
      <div className="card__img">
        <img src={process.env.PUBLIC_URL + "images/Yasser-Shehab.JPG"} />
      </div>
      <header className="card-header">
        <h1>Yasser Shehab</h1>
        <h2> Front-End Engineer</h2>
      </header>
      <div className="card-btns">
        <a href="mailto: yassershehab9@gmail.com">
          <CardBtn name="Email" icon="envelop" />
        </a>
        <a href="https://www.linkedin.com/in/yasser-shehab-494638182/" target="_blank">
          <CardBtn name="LinkedIn" icon="linkedIn" style="blue" />
        </a>
      </div>
      <section className="card-info">
        <InfoList />
        <Info
          title="Interests"
          content="Passionate about programming & designing and overcoming new Challenges, also Music , Reading , video games, traveling"
        />
      </section>
      <Footer />
    </div>
  );
}

export default MainCard;
