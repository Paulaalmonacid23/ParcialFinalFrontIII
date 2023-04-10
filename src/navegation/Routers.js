import Home from "../Routes/Home";
import Favs from "../Routes/Favs";
import Contact from "../Routes/Contact";
import Login from "../Routes/Login"; 
import Detail from "../Routes/Detail";


export const rutas = [
    {
        id: 1,
        path: '/',
        Component: Home
    },
    {
        id: 2,
        path: '/favs',
        Component: Favs
    },
    {
        id: 3,
        path: '/contact',
        Component: Contact
    },

    {
        id: 4,
        path: "/users/:id",
        Component: Detail
    }

];

export {Login}; 
