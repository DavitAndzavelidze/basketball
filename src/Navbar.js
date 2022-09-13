import logo from "./images/logo.svg";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <img src={logo} alt="logo" />
        <div className="navbar-items">
          <ul>
            <li className="active">Home</li>
            <li>News</li>
            <li>Collection</li>
            <li>Gallery</li>
          </ul>
        </div>
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
