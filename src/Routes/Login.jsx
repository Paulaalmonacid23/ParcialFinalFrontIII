import React, { useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField } from '@mui/material'
import {AuthContext} from "../Context/AuthContext";

const Login = () => {

    const [values, setValues] = useState({email:"", password:""});
    const { handleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin();
        navigate("/home");
    }
    

return (
    <Box 
        component='form'
        sx={{display: 'flex', flexDirection: 'column', gap: '20px', width: '20vw'}}
        onSubmit={handleSubmit}
    >
        <TextField
            name='email'
            size='small'
            type='text'
            label='email'
            placeholder='Ingrese su Correo'
            value={values.email}
            onChange={(e) => setValues({...values, email: e.target.value})}
        />
        <TextField
            name='password'
            size='small'
            type='text'
            label='password'
            placeholder='Ingrese su Contraseña'
            value={values.password}
            onChange={(e) => setValues({...values, password: e.target.value})}
        />
        <Button type='submit' size='small' variant='contaned'>
            Inicio
        </Button>

    </Box>
    )
}

export default Login;