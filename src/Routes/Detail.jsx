import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { endPoint } from './Home'
import { Button } from '@mui/material'
import "../Estilos/estilos.css";


const Detail = () => {

  const { id } = useParams();
  const [details, setDetails] = useState([]);

  const getDetail = async () => {
    const res = await fetch(`${endPoint}/${id}`);
    const data = await res.json();
    setDetails(data);
  };


  useEffect(() => {
    getDetail();
  }, []);

  return (
    <section className='contenedor'>
      <h1 className='detail'> Dentist  </h1>
      <>
        <h4 className='1'>Id</h4>
        <h4 className='2'>Name</h4>
        <h4 className='3'>User</h4>
        <h4 className='4'>Email</h4>
        <h4 className='5'>Phone</h4>
        <h4 className='6' >Website</h4>
      </>
      <>
        <p className='d1'>{details?.id}</p>
        <p className='d2'>{details?.name}</p>
        <p className='d3'>{details?.username}</p>
        <p className='d4'>{details?.email}</p>
        <p className='d5'>{details?.phone}</p>
        <p className='d6'>{details?.website}</p>
      </>
    
      <Button>
        <Link to='/home'>Atras</Link>
      </Button>
    </section>

  )
}

export default Detail;