import React, { useState} from "react";
import {useParams} from "react-router-dom";

//Hook
import FetchDataAPI from "../Hooks/FetchDataAPI";

//Styles
import "../Styles/CityInfo/SingleCity.css"

import SingleCity from "../Components/CityInfo/SingleCity"
import Loader from "./Loader";

const CityInfo = () => {
    const [loader, setLoader] = useState(false);

    const {name} = useParams();
    const {data} = FetchDataAPI(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`, setLoader)
         
       return (
        <>
        {loader ? <Loader/> :  (<div>
         {data.map(city => (
          <SingleCity
             key={city.name}
             flag={city.flag}
             name={city.name}
             capital = {city.capital}
             region = {city.region}
             demonym= {city.demonym}
             data= {data}
             />
         ))}
       </div>)}
       
       </>
    );
};

export default CityInfo;