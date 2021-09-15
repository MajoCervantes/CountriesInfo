import React, { useState } from "react";
import {Link} from "react-router-dom";

//Styles
import "../../Styles/Home/SearchForm.css"

const SearchForm = () => {
    //Estado del componente 
    const [name, setName] = useState([]);

    const handleFetchData = async () => {
        const response = await fetch( `https://restcountries.eu/rest/v2/name/${name}?fullText=true`);
        const result = await response.json();
    }
  return (
    <div className="form">
      <input
        type="text"
        placeholder="Buscar por nombre"
        onChange={e => setName(e.target.value)}
      />
      <button onClick={handleFetchData}><Link to={`/city/${name}`}>Buscar</Link></button>
    </div>
  );
};

export default SearchForm;
