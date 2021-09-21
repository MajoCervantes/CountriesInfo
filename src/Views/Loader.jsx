import React from 'react';

//Styles
import "../Styles/LoaderStyles.css";

const Loader = () => {
    return (
        <div className="loader-container">
        <div className="loader"></div>
        <h2>Loading...</h2>
        </div>
    )
}

export default Loader;
