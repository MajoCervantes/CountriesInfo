import React from "react";
import {Link} from "react-router-dom";

import "../../Styles/CityInfo/SingleCity.css"


const SingleCity = ({name, flag, capital, region, data, demonym}) => {
    console.log(data);
   
    return (
        <>
        <div className="single-city">
        <img src={flag} alt={name}></img>
        <h1>Nombre: {name}</h1>
        <div className="info">
        <p>Capital: {capital}</p>
        <p>Región: {region}</p>
        <p>Idioma: {data[0].languages[0].name}</p>
        <p>Etnia: {demonym}</p>
        <Link to="/">Inicio</Link>
        <Link to={`/city/${capital}`}>Clima</Link>
        </div>
        </div>
        </>
    );
};

export default SingleCity;