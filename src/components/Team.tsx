import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import pranit from "../assets/Pranit.jpg";
import jindal from "../assets/jindal.jpeg"

type props = {
  name: string;
  role: string;
  imgSrc: string;
};
const ProfileCard = ({ name, role, imgSrc }: props) => {
  return (
    <div className="profile-card">
      <div className="img">
        <img src={imgSrc} alt={name} />
      </div>
      <div className="caption">
        <h3>{name}</h3>
        <p>{role}</p>
        <div className="social-links">
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaYoutube />
          </a>
        </div>
      </div>
    </div>
  );
};

const Main = () => {
  return (
    <div className="main-team">
      <ProfileCard name="Pratik Jindal" role="Team Leader" imgSrc={jindal} />
      <ProfileCard name="Pranit" role="Backend Developer" imgSrc={pranit} />
      <ProfileCard
        name="Pratyush"
        role="FrontEnd Developer"
        imgSrc="https://media-ccu1-1.cdn.whatsapp.net/v/t61.24694-24/429322446_1475723499959766_8539388646029510447_n.jpg?ccb=11-4&oh=01_AdQS7DTePZmzRVkQKhoJEkG6SHzbmzQYT7K65TlJ9PSzVA&oe=65F5E4A2&_nc_sid=e6ed6c&_nc_cat=104"
      />
      <ProfileCard
        name="Pratik Tiwari"
        role="UI/UX Designer"
        imgSrc="https://media-ccu1-1.cdn.whatsapp.net/v/t61.24694-24/416139214_725498679678791_6756071819476719527_n.jpg?ccb=11-4&oh=01_AdSitYpX7cwl40DZraVyrIGuj5Rk176MTF5m2IAHfakEgg&oe=65F5F415&_nc_sid=e6ed6c&_nc_cat=100"
      />
    </div>
  );
};
export default Main;
