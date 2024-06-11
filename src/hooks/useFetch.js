import axios from "axios";
import { useEffect, useState } from "react"


const useFetch = () => {
   const [apiData, setApiData] = useState();
   const [loading, setLoading] = useState();
   const [hasError, setHasError] = useState(false);
   const getApi = url => {
    setLoading(true);
    axios.get(url)
        .then(res => {
          setHasError(false);
          setApiData(res.data);
        })
        .catch(err => {
          setHasError(true);
          console.log(err);
        })
        .finally(() => {
          setTimeout(() => {
            setLoading(false)
          }, 1500);
        });
   } 
  return [apiData, getApi, loading, hasError];
}

export default useFetch