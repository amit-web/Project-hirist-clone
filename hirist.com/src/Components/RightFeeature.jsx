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
    height: 190px;
    width: 280px;
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    background-color: white;
    border-radius: 15px;
   
    padding: 10px 0px 5px 25px;
    div {
      height: 40px;
      width: 40px;
      border: 0.2px solid grey;
      border-radius: 10px;
      background-color: white;
     
     
    }
    img {
      border-radius: 10px;
    }
  `;
  const Second = styled.div`
       height: 123px;
    width: 285px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    gap: 25px;
    background-color: white;
    border-radius: 15px;
    padding: 10px 0px 5px 25px;
    position: relative;
    top: 5px;
    div {
      height: 40px;
      width: 40px;
      border: 0.2px solid grey;
      border-radius: 10px;
      background-color: white;
      margin-top: 0px;
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
              <img height="40" src={item.url} alt="" />
              <p>{item.name}</p>
            </div>
          );
        })}
      </RightSide>

      <Second>
        {divercity.map((item) => {
          return (
            <div>
              <img height="40" src={item.url} alt="" />
            </div>
          );
        })}
      </Second>
    </>
  );
};

export default RightFeeature;