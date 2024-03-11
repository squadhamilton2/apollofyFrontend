
import { useState, useEffect } from "react";

export const useFetchDBJSON = ( endpoint = 'user' ) => {
  const [data, setData] = useState([]);

  
  useEffect(() => {
    const url = `http://localhost:3000/${endpoint}`
    const getData = async () => {
      const response = await fetch( url );
      const dataFetch = await response.json();
  
      setData(dataFetch);
    };
    getData();
  }, [endpoint]);

  
  return data;
};

