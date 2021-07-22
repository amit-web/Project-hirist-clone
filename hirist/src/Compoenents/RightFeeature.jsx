import React,{useEffect,useState} from 'react';
import axios from  "axios";
import styled from "styled-components"
const RightFeeature = () => {

   useEffect(() => {
      getfeatureData()
   },[]) 

  const getfeatureData=async()=>{
     let feturedData = await axios.get("http://localhost:3032/featuredata")
     console.log(feturedData)
  }
    return (
       <>
         
       </> 
    );
}

export default RightFeeature;