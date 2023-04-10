import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
export const endPoint = "https://jsonplaceholder.typicode.com/users";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
    const [dentista, setDentista] = useState([]);

const getDentist = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data);
    setDentista(data);
};

useEffect(() => {
    getDentist();
}, []);

return (
    <main className="">
    <h1>Home</h1>
    <div className="card-grid">
        {dentista.length
        ? dentista.map((dentista) => (
            <Card
                key={dentista.id}
                name={dentista.name}
                username={dentista.username}
                id={dentista.id}
            />
            ))
        : null}
    </div>
    </main>
);
};

export default Home;
