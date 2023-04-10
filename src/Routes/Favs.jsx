import React, { useContext } from "react";
import { FavsContext } from "../Context/FavsContext";



const Favs = () => {

  const { state, dispatch } = useContext(FavsContext);

  return (
    <>
      <h1>Dentists </h1>

      <section >
        {state.data?.map((data) => (
          <div>
            <img src="./images/doctor.jpg"/>
            <h5> {data.name}</h5>
            <p>{data.username}</p>
          </div>
        ))}
      </section>
    </>
  );
};

export default Favs;
