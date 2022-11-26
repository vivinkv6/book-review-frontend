
import { useState,useEffect } from "react"

const useFetch=(url)=>{
   const[data,setData]=useState([]);
   const[error,setError]=useState(null);
   const[loading,setLoading]=useState(false);
  
   const fetchData=async()=>{

    try{
        setLoading(true);
        const res=await fetch(url);
        const json=await res.json();
        setData(d=>json.data);
        setLoading(false);
    }
    catch(err)
    {
        setError(err)
    }

    

   }

   useEffect(()=>{
    fetchData();
   },[url])



return {data,error,loading};

}

export default useFetch;