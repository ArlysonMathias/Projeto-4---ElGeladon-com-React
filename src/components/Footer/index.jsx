import "./style.css";
import logoIcon from "../../assets/icons/logo.svg";
import whatsappIcon from "../../assets/icons/whatsapp.png"
import instagramIcon from "../../assets/icons/instagram.png"
import emailIcon from "../../assets/icons/o-email.png"

const Footer = () => {
  return (
    <div className="footer">
      <p> &#0169; Todos os direitos reservados</p>
      <img alt="Logo El GEladon" src={logoIcon} width="40px"/>
      <div>
          <img src={whatsappIcon} alt="ícone whatsapp" width="40px" />
          <img src={instagramIcon} alt="ícone intagram"  width="40px"/>
          <img src={emailIcon} alt="ícone email" width="40px" />
      </div>
    </div>
  );
};

export default Footer;
