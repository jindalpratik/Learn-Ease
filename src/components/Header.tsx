import "../App.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    // <div className="Header">
    //   <h1>
    //     <SchoolIcon />
    //     YouLearn
    //   </h1>
    // </div>

    <div className="header">
      <Link to="/">
        <img className="image-icon" src={logo} alt="Logo" />
      </Link>
      {/* <div className="image-icon"></div> */}
      {/* <h1 className="name">Speak-Ease</h1> */}

      <h3>SITE LANGUAGE:ENGLISH</h3>
      <h3>
        <Link to="/AboutUs" className="about-us">
          ABOUT US
        </Link>
      </h3>
    </div>
  );
};

export default Header;
