import React,{useState} from 'react';
//import axios from "axios"
import DisplayJobs from "./DisplayJobs";
import styled from "styled-components";
const Searching = ({ isLoading, jobdata }) => {
 
  const Multi = styled.div`
    height: 30px;
    width: 350px;
    padding: 7px 0px 0px 20px;
    border-radius: 5px;
    font-size: 13px;
    font-family: "Nunito Sans";
    background-color: #1c2d41;
    color: white;
    margin-top: 15px;
    margin-left: 55px;
    margin-bottom:10px;
  `;
 
 return isLoading?<div style={{ backgroundColor: "#F2F5FA", height: "auto", width: "100%" }}>
      <div></div>

      

      <Multi>
        <p>You can apply to multiple jobs with a single click. Try it!</p>
      </Multi>

      <div style={{}}>
        {jobdata.map((item) => {
          return <DisplayJobs key={item.id} data={item} />;
        })}
      </div>
    </div>
  :<div style={{textAlign:"center",marginTop:"90px"}}>

      <img height="400" src="https://i.pinimg.com/originals/89/39/06/893906d9df7228cc36e1b3679a0d1dac.png" alt="" />
       
  </div>
 
};

export default Searching;