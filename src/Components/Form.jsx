import React, {useState} from "react" ;


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
const [textoValidacion, setTextoValidacion] = useState("");

function validacionForm(e) {
    e.preventDefault();
    const nombreCompleto = e.target[0].value;
    const correo = e.target[1].value;
    console.log(nombreCompleto, correo);
    if (nombreCompleto.length < 5 || !correo.includes("@")) {
    setTextoValidacion("Por favor verifique su información nuevamente");
    } else {
    setTextoValidacion(
        `Gracias ${nombreCompleto}, te contactaremos cuanto antes vía mail`
    );
    }
}

return (
    <form onSubmit={validacionForm}>
        <input type="text" name="nombre" placeholder="full name" />
        <input type="text" name="email" placeholder="email" />
        <button type="submit">Enviar</button>
        <span>{textoValidacion}</span>
    </form>
    );
};

export default Form;
