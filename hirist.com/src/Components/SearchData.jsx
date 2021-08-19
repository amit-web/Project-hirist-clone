import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./searchData.css";
import Searching from "./Searching";
import axios from "axios";
import RightFeeature from "./RightFeeature";
import Cources from "./Cources";
import { useHistory } from "react-router-dom";
const SearchData = () => {
  const history = useHistory();
  const [selected, setSelected] = useState("All jobs");
  const [isActive, setIsActive] = useState(false);
  const [select, setSelect] = useState("Location");
  const [active, setActive] = useState(false);
  const [selection, setSelection] = useState("Experiance");
  const [activate, setActivate] = useState(false);
  const [jobdata, setJobdata] = useState([]);
  const [research, setResearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // const [empty, setEmpty] = useState("")
  useEffect(() => {
    axios.get("http://localhost:8000/searchData").then(({ data }) => {
      const recentSearch = data[data.length - 1];
      setSelected(recentSearch.jobRole);
      console.log(recentSearch.location);
      setSelect("delhi");
      setSelection(recentSearch.experience);
      getData();
    });
  }, []);
  // selection!=="posting" :`http://localhost:8000/data?jobs=${selected}&location=${select}&experiance=${}
  const getData = async () => {
    const urls =
      selected !== "All jobs"
        ? `http://localhost:8000/data?jobs=${selected}&location=${select}&experiance=${selection}`
        : "http://localhost:8000/data";

    try {
      
      let data = await axios.get(urls);
      
      setJobdata(data.data);
      console.log(data)
     if(data.data.length===0){
       
       setIsLoading(false);
     }
     else{
      setIsLoading(true);
     }
      
    } catch (error) {
      console.log(error);
    }
  };

 

 
  const options = ["data analyst", "testing", "ReactJs Developer", "All jobs"];
  const options2 = ["delhi", "mumbai", "hyderabad", "pune", "banglore"];
  const options3 = [
    "posting",
    "0-1 Years",
    "1-3 Years",
    "4-6 Years",
    "7-10 Years",
  ];
  const Navbar = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 15px;
    font-family: "Nunito Sans";
    font-size: 15px;
    font-style: normal;
    font-variant: normal;
    font-weight: 530;
    letter-spacing: normal;
    line-height: 15.4px;
    text-decoration: none solid rgb(33, 37, 41);
    height: 70px;
    width: 91%;

    background-color: #ffffff;
    color: #212529;
    cursor: auto;
    visibility: visible;
    box-sizing: border-box;
    resize: none;
    text-shadow: none;
    border-bottom: 1px solid grey;
    margin: auto;
    button {
      margin-left: 20px;
      height: 45px;
      width: 110px;
      border-radius: 5px;
      border: 0.5px solid #e9630c;
      background-color: white;
      color: #e9630c;

      font-family: "Nunito Sans";
      font-size: 15px;
      font-style: normal;
      font-variant: normal;
      font-weight: 500;
    }
    button:hover {
      background-color: #e9630c;
      color: white;
    }
  `;

  const Search = styled.div`
    img {
      margin-top: 5px;
      margin-left: 100px;
    }
  `;

  const Middle = styled.div`
    display: flex;
    gap: 15px;
    height: 35px;
    width: 91.3%;
    margin: auto;
    background-color: white;
    font-family: "Nunito Sans";
    font-size: 17px;
    font-style: normal;
    font-variant: normal;
    padding: 8px 0px 0px 20px;
    margin-left: 65px;
    color: grey;
    border: 0px;
  `;

  const P = styled.div`
    p {
      font-weight: 600;
      font-family: "Nunito Sans";
    }
  `;

  // const Bottom = styled.div`
  //   display: flex;
  //   gap: 30px;
  // `;
  const Refine = styled.div`
    button {
      height: 30px;
      width: 95px;
      padding: 0px 10px 0px 10px;
      border-radius: 15px;
      font-size: 15px;
      font-family: "Nunito Sans";
      background-color: #f2f5fa;
      color: #e9630c;
      border: 1px solid #e9630c;
      position: absolute;
      left: 55%;
    }
    button:hover {
      background-color: #e9630c;
      color: white;
    }
  `;
  const Clearall = styled.p`
    margin-bottom: -20px;
    font-size: 15px;
    font-family: "Nunito Sans";
    color: #e9630c;
    position: absolute;
    left: 65%;
    margin-top: 5px;
  `;
  const AgainSearch = styled.div`
    width: 80%;
    padding: 40px 0px 0px 30px;
    display: flex;
    justify-content: space-evenly;
    margin-left: 35px;
    margin-top: 10px;
    font-size: 16px;
    input {
      height: 35px;
      width: 195px;
      padding: 0px 20px 0px 60px;
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
  const I = styled.div`
    position: relative;
    left: 300px;
    bottom: 0px;
  `;

  return (
    <div style={{ backgroundColor: "#F2F5FA", height: "auto" }}>
      <Navbar>
        <img
          height="30"
          src="https://job-static.hirist.com/V2/static/media/hirist_logo.03e14260.svg"
          alt=""
          onClick={() => {
            history.push("/");
          }}
        />
        <p>Mobile Applications</p>
        <p>Frontend Developer</p>
        <p>Backend Developer</p>
        <p>More</p>
        <p>|</p>
        <P>
          {" "}
          <p>Work from Home</p>
        </P>
        <p>Internship</p>
        <p>|</p>
        <p>Cources</p>
        <Search>
          <img height="15" src="icons8-search (1).gif" alt="" />
        </Search>
        <button
          onClick={() => {
            history.push("/LoginForm");
          }}
        >
          <img height="10" src="icons8-administrator-male-16.png" alt="" />{" "}
          Login
        </button>
      </Navbar>

      <Middle>
        <p>Jobs</p>
        <p>Companies</p>
        <p>Cources</p>
      </Middle>

      <div
        style={{
          backgroundColor: "#E3E9F0",
          height: "60px",
          width: "91%",
          margin: "auto",
        }}
      >
        <p className="filter">Filter By:</p>
        <div className="dropdown">
          <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
            {selected}
            <img
              height="20"
              src="https://static.thenounproject.com/png/3466617-200.png"
              alt=""
            />
          </div>

          {isActive && (
            <div className="dropdown-content">
              {options.map((option) => (
                <div
                  onClick={(e) => {
                    setSelected(option);
                    setIsActive(false);
                  }}
                  className="dropdown-item"
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="dropdowns">
          <div className="dropdowns-btn" onClick={(e) => setActive(!active)}>
            {select}
            <img
              height="20"
              src="https://static.thenounproject.com/png/3466617-200.png"
              alt=""
            />
          </div>

          {active && (
            <div className="dropdowns-content">
              {options2.map((option) => (
                <div
                  onClick={(e) => {
                    setSelect(option);
                    setActive(false);
                  }}
                  className="dropdowns-item"
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="dropdownd">
          <div
            className="dropdownd-btn"
            onClick={(e) => setActivate(!activate)}
          >
            {selection}
            <img
              height="20"
              src="https://static.thenounproject.com/png/3466617-200.png"
              alt=""
            />
          </div>

          {activate && (
            <div className="dropdownd-content">
              {options3.map((option) => (
                <div
                  onClick={(e) => {
                    setSelection(option);
                    setActivate(false);
                  }}
                  className="dropdownd-item"
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>

        <Refine>
          <button onClick={getData}>Refine</button>
        </Refine>

        <Clearall>
          <p>Clear All</p>
        </Clearall>
      </div>

      <AgainSearch>
        <p>Search for - {selected}</p>
        <I>
          <i class="fas fa-search"></i>
        </I>
        <div>
          <input
            type="text"
            value={research}
            onChange={(e) => setResearch(e.target.value)}
          />
        </div>
      </AgainSearch>
      <div style={{ display: "flex", gap: "10px" }}>
        <div style={{ height: "auto", width: "70%", marginLeft: "4.5%" }}>
          <Searching
            selected={selected}
            jobdata={jobdata}
            isLoading={isLoading}
          />
        </div>

        <div style={{ marginTop: "45px" }}>
          <p style={{ fontSize: "16px", marginBottom: "10px" }}>
            Featured Employers
          </p>
          <RightFeeature />
          <p style={{ fontSize: "16px", margin: "10px" }}>Cources</p>
          <Cources />
        </div>
      </div>
    </div>
  );
};

export default SearchData;
