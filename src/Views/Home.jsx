import React, {useState} from "react";

//CustomHook
import FetchDataAPI from "../Hooks/FetchDataAPI";
import SearchForm from "../Components/Home/SearchForm";
import AllCountries from "../Components/Home/AllCountries";
import Loader from "./Loader";


const Home = () => {
  const [loader, setLoader] = useState(false);

    const { data} = FetchDataAPI("https://restcountries.eu/rest/v2/all", setLoader);
    let countries10 = data.splice(0, 10);

    return (
        <>
        {loader ? <Loader /> :  ( <div>
          <SearchForm/>
          {countries10.map(Country => (
            <AllCountries
              key={Country.name}
              flag={Country.flag}
              name={Country.name}
            />
          ))}
        </div> )}
      
        </>
    );
};

export default Home;