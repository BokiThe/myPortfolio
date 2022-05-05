import "./hero.css";
import { react, useEffect } from "react";

const HeroPage = () => {
  const fadeOut = () => {
    const dis = document.getElementById("disapear");
    dis.style.opacity = "0";
    dis.style.transition = "ease 1s";
    window.setTimeout(function removethis() {
      dis.style.display = "none";
    }, 2000);
  };
  useEffect(() => {}, []);
  return (
    <div className="heroContainer" id="disapear">
      <div className="heroSection">
        <h1 className="heroText">HELLO!</h1>
        <h1 className="heroText">WELCOME TO MY PORTFOLIO PAGE</h1>
        <button className="btnExplore heroBtn" onClick={fadeOut}>
          HOP UP!
        </button>
      </div>
    </div>
  );
};

export default HeroPage;
