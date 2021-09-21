import  { useState, useEffect } from "react";

const FetchDataAPI = (url, setLoader) => {
  //Estado del componente
  const [data, setData] = useState([]);

  //Consulta de API
  useEffect(() => {
  const handleFetchAPI = async () => {
    setLoader(true);
    try {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
      setTimeout(() => {
        setLoader(false);
      }, 500);
      
    } catch (error) {
      setLoader(false);
      console.log(error);
    }
  };
  handleFetchAPI()
}, [url, setLoader])

  // useEffect(() => {
  //   handleFetchAPI();
  // }, [url]);

  return {data};
};

export default FetchDataAPI;

