import React from "react";

import {Link} from "react-router-dom";

import {Card, CardGroup, Button } from "react-bootstrap";

//Styles 
import "../../Styles/Home/AllCountries.css"

const AllCountries = ({name, flag}) => {
    return (
        <>
        <div className="flag">
        <img src={flag} alt={name}></img>
        </div>
        <div className="complements">
        <h2>{name}</h2>
        <Link to={`/city/${name}`}>Más Info</Link>
        </div>
        </>
    )
}

export default AllCountries;