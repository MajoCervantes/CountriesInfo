import React, { useState, useEffect } from "react";

const FetchDataAPI = (url, setLoader) => {
  //Estado del componente
  const [data, setData] = useState([]);

  //Consulta de API
  const handleFetchAPI = async () => {
    setLoader(true);
    try {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
      setTimeout(() => {
        setLoader(false);
      }, 2000);
      
    } catch (error) {
      setLoader(false);
      console.log(error);
    }
  };

  useEffect(() => {
    handleFetchAPI();
  }, [url]);

  return {data};
};

export default FetchDataAPI;

