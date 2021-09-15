import React from "react";

import {Link} from "react-router-dom";

//Styles
import "../Styles/NotFound.css"

const NotFound = () => {
    return (
        <div className="error">
            <h1>Error</h1>
            <p>No se puede acceder a esta página web.</p>
            <p>Comprueba si nombre hay un error de escritura  </p>
            <Link to="/">Inicio</Link>
        </div>
    )
};

export default NotFound;
