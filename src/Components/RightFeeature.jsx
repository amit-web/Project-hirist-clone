import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
const RightFeeature = () => {
  const [feature, setFeature] = useState([]);
  const [divercity, setDivercity] = useState([]);

  useEffect(() => {
    getfeatureData();
    divercitydata();
  }, []);
  const RightSide = styled.div`
    height: 250px;
    width: 320px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    background-color: white;
    border-radius: 15px;
    margin-bottom: 30px;
   
    padding: 10px 0px 5px 25px;
    div {
      height: 50px;
      width: 50px;
      border: 0.2px solid grey;
      border-radius: 10px;
      background-color: white;
     
     
    }
    img {
      border-radius: 10px;
    }
  `;
  const Second = styled.div`
    height: 140px;
    width: 320px;
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    background-color: white;
    border-radius: 15px;
    padding: 10px 0px 15px 20px;
    position: relative;
    top: 5px;
    margin-bottom: 30px;
    div {
      height: 50px;
      width: 50px;
      border: 0.2px solid grey;
      border-radius: 10px;
      background-color: white;
     
    }
    img {
      border-radius: 10px;
    }
  `;

  const getfeatureData = async () => {
    let feturedData = await axios.get("http://localhost:8000/featuredata");
    setFeature(feturedData.data);
  };

  const divercitydata = async () => {
    let diveredata = await axios.get("http://localhost:8000/employerdata");
    setDivercity(diveredata.data);
  };
  return (
    <>
      <RightSide>
        {feature.map((item) => {
          return (
            <div>
              <img height="50" width="50" src={item.url} alt="" />
            
            </div>
          );
        })}
      </RightSide>
       <p style={{fontSize:"16px"}}>Diversity Conscious Employers</p>
      <Second>
        {divercity.map((item) => {
          return (
            <div>
              <img height="50" width="50" src={item.url} alt="" />
            </div>
          );
        })}
      </Second>
    </>
  );
};

export default RightFeeature;