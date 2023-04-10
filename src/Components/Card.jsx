import React, {useContext} from "react";
import { Link } from "react-router-dom"
import { FavsContext } from "../Context/FavsContext"
import LibraryAddIcon from '@mui/icons-material/LibraryAdd'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'


const Card = ({ name, username, id }) => {
  const { state, dispatch } = useContext(FavsContext);

  const agregaFav = () => {
    dispatch({ type: 'AGREGAR', payload: { name, username, id } })
  };

  const quitaFav = () => {
    dispatch({ type: 'QUITAR', payload: { name, username, id } })
  };


  return (
    <div className="card">
      <img src="./images/doctor.jpg" />
      <h5> {name}</h5>
      <p>{username}</p>
      {state.data.some((element) => element.id === id) ? (
        <Link onClick={quitaFav} className="botonFav">
          <FavoriteIcon className="imgperfil" alt="me gusta" sx={{color:" #edde7e"}} />
        </Link>
      ): (
        <Link onClick={agregaFav} className="botonFav">
          <FavoriteBorderIcon className="imgperfil" alt="no me gusta" sx={{color:" #edde7e"}} />
        </Link>
      )}

      <Link to={`/users/${id}`} >
        <LibraryAddIcon className="imgperfil" alt="boton" />
      </Link>
    </div>
  );
};

export default Card;




