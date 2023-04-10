import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import "../Estilos/estilos.css"
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { ModoOscuroContext } from "../Context/ModoOscuroContext";

const Navbar = () => {

  const {isModoOscuro, setIsModoOscuro} = useContext(ModoOscuroContext);

  const handleModoOscuro = () => { 
    if (isModoOscuro)
    {  setIsModoOscuro(false)
    } else {
      setIsModoOscuro(true)
    }
  }

  return (
    <nav className={isModoOscuro? "dark" : "app" }>
      <div className="odo">
        <h2>Odonto</h2>
      </div>

      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/favs">Favs</Link>

        <button onClick={handleModoOscuro}> 
        <StarHalfIcon className="imgperfil" alt="Estrella" sx={{color:"blue"}} />
        </button>
      </div>
      
    </nav>
  );
};
export default Navbar;
