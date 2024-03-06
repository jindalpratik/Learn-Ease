import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import pranit from "../assets/Pranit.jpg"


type props={
  name:string,
  role:string,
  imgSrc:string
}
const ProfileCard = ({ name, role, imgSrc }:props) => {
  return (
    <div className="profile-card">
      <div className="img">
        <img src={imgSrc} alt={name} />
      </div>
      <div className="caption">
        <h3>{name}</h3>
        <p>{role}</p>
        <div className="social-links">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaYoutube /></a>
        </div>
      </div>
    </div>
  );
};

const Main = () => {
  return (
    <div className="main-team">
      <ProfileCard name="Praniti" role="Backend Developer" imgSrc={pranit} />
      <ProfileCard name="Mutthi Bhai" role="Team Leader" imgSrc="bg2.jpg" />
      <ProfileCard name="Pratyushi" role="Full Stack Developer" imgSrc="bg3.jpg" />
      <ProfileCard name="BSDK Tiwari" role="UI/UX Designer" imgSrc="https://media-ccu1-1.cdn.whatsapp.net/v/t61.24694-24/425078206_910838057379560_5969315128447407495_n.jpg?ccb=11-4&oh=01_AdTpD6LgVJkrm348Qsn8o4Jm4TL_1lEhOuJVj8ifUapp7A&oe=65F3F1F7&_nc_sid=e6ed6c&_nc_cat=108" />
    </div>
  );
};
export default Main;
