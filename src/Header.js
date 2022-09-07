import hero from "./hero.png";
import "./Header.css";

function Header() {
  return (
    <>
      <header className="header-container">
        <div className="header-box">
          <h3 className="header-subtitle">The best of The Year</h3>
          <h1 className="header-title">Georgia</h1>
          <p className="header-text">
            Comfort and aesthetic looks stuff built with top quality material
            and professional worker, one of the best collection in 2022.
          </p>
          <div className="header-btn-box">
            <a className="header-btn" href="google.ge">
              Watch live stream
            </a>
            <i class="fa-solid fa-circle-play"></i>
          </div>
        </div>
        <img className="hero-image" src={hero} alt="hero" />
        <div className="reflection-box">
          <img className="reflection" src={hero} alt="hero" />
        </div>
      </header>
    </>
  );
}
export default Header;
