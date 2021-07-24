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
    height: 140px;
    width: 200px;
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    background-color: white;
    border-radius: 15px;
    padding: 0px 0px 0px 10px;
    padding: 20px 10px 5px 10px;
    div {
      height: 30px;
      width: 30px;
      border: 0.2px solid grey;
      border-radius: 10px;
      background-color: white;
      margin-top: -10px;
    }
    img {
      border-radius: 10px;
    }
  `;
  const Second = styled.div`
    height: 80px;
    width: 200px;
    height: 100px;
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    background-color: white;
    border-radius: 15px;

    padding: 15px 10px 10px 10px;
    div {
      height: 30px;
      width: 30px;
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
    let feturedData = await axios.get("http://localhost:3032/featuredata");
    setFeature(feturedData.data);
  };

  const divercitydata = async () => {
    let diveredata = await axios.get("http://localhost:3032/employerdata");
    setDivercity(diveredata.data);
  };
  return (
    <>
      <RightSide>
        {feature.map((item) => {
          return (
            <div>
              <img height="30" src={item.url} alt="" />
              <p>{item.name}</p>
            </div>
          );
        })}
      </RightSide>

      <Second>
        {divercity.map((item) => {
          return (
            <div>
              <img height="30" src={item.url} alt="" />
            </div>
          );
        })}
      </Second>
    </>
  );
};

export default RightFeeature;
