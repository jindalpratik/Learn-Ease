
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div>

      <footer className="footer-distributed">
        <div className="footer-left">
          <img className="image-icon" src={logo} alt="" />

          <p className="footer-links">
            <a href="#" className="link-1">
              Home
            </a>

            <a href="#">About</a>

            <a href="#">Faq</a>

            <a href="#">Contact</a>
          </p>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the company</span>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
            euismod convallis velit, eu auctor lacus vehicula sit amet.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
