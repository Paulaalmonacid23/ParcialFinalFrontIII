import React, { useContext } from "react";
import "../Estilos/estilos.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import { ModoOscuroContext } from "../Context/ModoOscuroContext";

const Footer = () => {
  const {isModoOscuro} = useContext(ModoOscuroContext);
  
  return (
    <footer className={isModoOscuro? "dark" : "app" }>
      <img src="./images/DH.png" alt="DH-logo" />

      <div className="ico">
        <FacebookIcon className="imgperfil" alt="logo Faceboock" />
        <InstagramIcon className="imgperfil" alt="logo Instagram" />
        <TwitterIcon className="imgperfil" alt="Twitter" />
        <WhatsAppIcon className="imgperfil" alt="logo WhatsApp" />
      </div>
    </footer>
  );
};

export default Footer;
