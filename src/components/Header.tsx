import "../App.css";
import logo from "../Assests/logo.jpg";
const Header = () => {
  return (
    // <div className="Header">
    //   <h1>
    //     <SchoolIcon />
    //     YouLearn
    //   </h1>
    // </div>

    <div className="header">
      <img className="image-icon" src={logo} alt="" />
      {/* <div className="image-icon"></div> */}
      {/* <h1 className="name">Speak-Ease</h1> */}
      <h3>SITE LANGUAGE:ENGLISH</h3>
    </div>
  );
};

export default Header;
