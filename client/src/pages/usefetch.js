
import { useState, useEffect } from "react";

// building useFetch hook to reuse for fetching data
const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      // const abortCont = new AbortController();
      // { signal: abortCont.signal }
  
   
        fetch(url)
        .then(res => {
          if (!res.ok) { 
            throw Error('could not fetch the data for that resource');
          } 
          return res.json();
        })
        .then(data => {
          setData(data);
          setError(null);
        })
        .catch(err => {
          if (err.name === 'AbortError') {
            console.log('fetch aborted')
          } else {
            
            
            setError(err.message);
          }
        })
   
  
     
      return
    }, [url])
  
    return { data, error };
  }
   
  export default useFetch;