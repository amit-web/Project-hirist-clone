import React,{useEffect,useState} from 'react';
import axios from "axios"
import DisplayJobs from './DisplayJobs';
import styled from "styled-components"
import Navbar from "./Navbar"
const Searching = () => {
  const [jobdata,setJobdata] = useState([])
    useEffect(()=>{
      getData()
    },[])
    const getData=async()=>{
      let data=  await axios.get("http://localhost:3032/data");
      setJobdata(data.data)
      
    }

    const AgainSearch = styled.div`
    width: 65%;
    padding:40px 0px 0px 30px;
    display: flex;
    justify-content:space-between;
    margin-left:10px;
    button{
    height:25px;
    width:125px;
    padding:0px 20px 0px 0px;
    border-radius: 15px;
    font-size: 9px;
    font-family: "Nunito Sans";
    background-color: white;
    color: grey ;
    margin-top: 20px;
   
    border: 0;
   
    }
    img{
      padding:0px 10px 0px 0px;
    }
   `
    const Multi = styled.div`
      
    height:25px;
    width:250px;
    padding:3px 0px 2px 20px;
    border-radius: 5px;
    font-size: 9px;
    font-family: "Nunito Sans";
    background-color: #1C2D41;
    color: white ;
    margin-top: 20px;
    margin-left: 35px;
    
    `

    return (
        <>
            <Navbar/>
             <AgainSearch>
                
                <p>Search for - {}</p>
                <button> <img height="10" src="icons8-search (1).gif" alt="" />Data Analyst</button>

              </AgainSearch>

              <Multi>
                  
                  <p>You can apply to multiple jobs with a single click. Try it!</p>
                 
              </Multi>
                       
           <div>
               {jobdata.map((item)=>{
                  return (
                      <DisplayJobs key={item.id} data={item}/>
                  )
               })}
           </div>
        </>
    );
}

export default Searching;