import React, { Suspense, useContext } from "react";
import { ProtectedRoute } from './Components/ProtectedRoute';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { rutas, Login } from "./navegation/Routers"; 
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { ModoOscuroContext } from "./Context/ModoOscuroContext";
import FavsContextProvider from './Context/FavsContext';
import Falla from "./Falla/Falla";
import AuthContextProvider from "./Context/AuthContext";

const App = () => {
  const {isModoOscuro} = useContext(ModoOscuroContext);
  
  return (
    <Suspense fallback={<h1>Cargando Página</h1>}>
      <AuthContextProvider>
        <FavsContextProvider>
          <BrowserRouter>
            <div className={isModoOscuro ? "dark" : "app"}>
              <Routes>
                <Route path='*' element={<Falla />} />
                <Route path='/login' element={<Login />} />
                <Route element={<ProtectedRoute/>}>
                  {
                    rutas.map(({ id, path, Component }) => (
                      <Route key={id} path={path} element=
                        {
                          <>
                            <Navbar />
                            <Component />
                            <Footer />
                          </>
                        }
                      />
                    ))
                  }
                </Route>
                <Route path='/' element={<Navigate to='/login' />} />
              </Routes>
            </div>
          </BrowserRouter>
        </FavsContextProvider>
      </AuthContextProvider>
    </Suspense>
  )
}

export default App;