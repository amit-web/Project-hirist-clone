//import React,{useEffect,useState} from 'react';
//import axios from "axios"
import DisplayJobs from "./DisplayJobs";
import styled from "styled-components";

const Searching = ({ selected, jobdata }) => {
  const AgainSearch = styled.div`
    width: 100%;
    padding: 40px 0px 0px 30px;
    display: flex;
    justify-content: space-around;
    margin-left: 35px;
    margin-top: 10px;
    font-size: 16px;
    button {
      height: 35px;
      width: 195px;
      padding: 0px 20px 0px 0px;
      border-radius: 15px;
      font-size: 16px;
      font-family: "Nunito Sans";
      background-color: white;
      color: grey;
      margin-top: -15px;
      border: 0;
      
    }
    img {
      padding: 0px 10px 0px 0px;
    }
    p {
      margin-top: -20px;
      margin-left: -220px;
     
    }
  `;
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
    margin-bottom: -40px;
  `;

  return (
    <div style={{ backgroundColor: "#F2F5FA", height: "auto", width: "100%" }}>
      <div></div>

      <AgainSearch>
        <p>Search for - {selected}</p>
        <button>
          {" "}
          <img height="12" src="icons8-search (1).gif" alt="" />
          {selected}
        </button>
      </AgainSearch>

      <Multi>
        <p>You can apply to multiple jobs with a single click. Try it!</p>
      </Multi>

      <div style={{ marginTop: "50px" }}>
        {jobdata.map((item) => {
          return <DisplayJobs key={item.id} data={item} />;
        })}
      </div>
    </div>
  );
};

export default Searching;