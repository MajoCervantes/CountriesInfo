import React from 'react';
import {Link} from 'react-router-dom';


const CityWeather = ({name, description, temp, tempMax, tempMin, humidity, windSpeed, flag, icon}) => {
    //Cambiar temperatura en kelvin a celsius
    const tempNumber = parseFloat(temp);
    const tempMaxNumber = parseFloat(tempMax);
    const tempMinNumber = parseFloat(tempMin);
    const tempToCelsius = Math.round(tempNumber-273.15);
    const tempMaxToCelsius = Math.round(tempMaxNumber-273.15);
    const tempMinToCelsius = Math.round(tempMinNumber-273.15);
    return (
        <>
        
         <img src={flag} alt={name}></img>  
        <div className="main-container"> 
           <h1>Capital: {name}</h1>
           <p>Sky: {description}</p>
           <img src= {`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={icon}></img>
           <p>Temperature: {tempToCelsius}°</p>
           <p>Max Temperature: {tempMaxToCelsius}°</p>
           <p>Min Temperature: {tempMinToCelsius}°</p>
           <p>Humidity: {humidity}%</p>
           <p>Wind Speed: {windSpeed}km/h</p>
           <Link to="/">Home</Link> 
        </div>
        
        </>
    )
}

export default CityWeather;
