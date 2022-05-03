import "./hero.css";

const HeroPage = () => {
  const fadeOut = () => {
    const dis = document.getElementById("disapear");
    dis.style.opacity = "0";
    dis.style.transition = "all 2s";
    window.setTimeout(function removethis() {
      dis.style.display = "none";
    }, 2000);
  };
  return (
    <div className="heroContainer" id="disapear">
      <div className="heroSection">
        <h1 className="heroText">HELLO!</h1>
        <h1 className="heroText">WELCOME TO MY PORTFOLIO PAGE</h1>
        <button className="btnExplore " onClick={fadeOut}>
          HOP UP!
        </button>
      </div>
    </div>
  );
};

export default HeroPage;
