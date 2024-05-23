import { Link } from "react-router-dom";
import { AvatarSVG, Dribble, Email, Figma, Linkedin, Alex } from "../../assets/image";
import { FaEnvelope, FaLink, FaLocationDot, FaPhone } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content grid items-center">
          <div className="header-intro">
            <div className="flex items-end header-intro-wrapper">
              <img src={Alex} alt="avatar" className="avatar" />
              <h1 className="header-name text-white">
                Alexander Hahn, <br /> Economy
              </h1>
   
            </div>
            <p className="header-text text text-white">
            Hallo zusammen! Mein Name ist <b>Alex</b>, und ich bin stolzer Bewohner der bezaubernden Stadt Würzburg.
             Inmitten der historischen Schönheit und lebendigen Kultur dieser bayerischen Perle habe ich mir ein Zuhause geschaffen.
          Mit einem Herz voller Leidenschaft für die lokale Gemeinschaft und einem unerschütterlichen Optimismus blicke ich freudig in die Zukunft.
          Als begeisterter Bürger Würzburgs schätze ich die einzigartige Mischung aus Tradition und Fortschritt, die diese Stadt prägt.
            </p>
          </div>

          <div className="header-contact">
            <ul className="contact-info-list grid text-white">
              <li><span><h2>Kontakt</h2></span></li>
              <li className="grid items-start info-item">
                
                <span className="info-item-icon">
                  <FaEnvelope size={13} />
                </span>
                <p className="info-item-text">
                  Email: <span className="text">alexanderhahn@email.com</span>
                </p>
              </li>
              <li className="grid items-start info-item">
                <span className="info-item-icon">
                  <FaPhone size={13} />
                </span>
                <p className="info-item-text">
                  Telefon: <span className="text">+49 (0) 163 7905970</span>
                </p>
              </li>
              <li className="grid items-start info-item">
                <span className="info-item-icon">
                  <FaLocationDot size={14} />
                </span>
                <p className="info-item-text">
                  Addresse: <span className="text">Würzburg, Deutschland</span>
                </p>
              </li>
            </ul>
            <ul className="contact-social-list flex items-center">
                <li className="social-item">
                    <Link to="/">
                        <img src={Linkedin} />
                        <span className="tooltip text">Linkedin</span>
                    </Link>
                </li>
                <li className="social-item">
                    <Link to={'mailto:${alexanderhahn@gmail.com}'}>
                        <img src={Email} />
                        <span className="tooltip text">Email</span>
                    </Link>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
