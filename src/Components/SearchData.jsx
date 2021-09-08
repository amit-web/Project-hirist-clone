import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./searchData.css";
import Searching from "./Searching";
import axios from "axios";
import RightFeeature from "./RightFeeature";
import Courses from "./Courses";
import { useHistory } from "react-router-dom";
import SearchDataImage from "./SearchDataImage";
import { MobileApp } from "./Data/Photos";
import { useContext } from "react";
import { SearchDataContext } from "../Context/searchDataContext";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getAllJobs } from "../store/actions";
import { mobileAppCat, frontendCat, backendCat } from '../Components/Data/jobsCatArr'
import SimpleCard from "./Material-ui-compo/SimpleCard";
const SearchData = () => {
  const history = useHistory();
  const { searchData, handleSearchData } = useContext(SearchDataContext)

  const [selected, setSelected] = useState("All jobs");
  const [isActive, setIsActive] = useState(false);
  const [select, setSelect] = useState("Location");
  const [active, setActive] = useState(false);
  const [selection, setSelection] = useState("Experiance");
  const [activate, setActivate] = useState(false);
  const [research, setResearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [mobileApp, setMobileApp] = useState(false);
  const [frontend, setFrontend] = useState(false);
  const [backengJobs, setBackendJobs] = useState(false);
  const [jobs, setJobs] = useState(false);
  const [allCards, setAllCards] = useState(false);
  const [companies, setCompanies] = useState(false);
  const [courses, setCourses] = useState(false)
  // const [empty, setEmpty] = useState("")

  const [showMobApp, setShowMobApp] = useState(false);
  const [showFrontend, setShowFrontend] = useState(false);
  const [showBackend, setShowBackend] = useState(false);
  const { jobsData } = useSelector((state) => state.activities, shallowEqual);

  const dispatch = useDispatch()
  useEffect(() => {
    getData()

  }, [searchData]);

  const getData = () => {
    dispatch(getAllJobs(searchData));


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
  const handleMobapp = () => {
    handleSearchData("Mobile Applications")
    getData()
    setMobileApp(true)
    setFrontend(false)
    setBackendJobs(false)

  }
  const handleFrontendJobs = () => {
    handleSearchData("Frontend Developer")
    getData()
    setMobileApp(false)
    setFrontend(true)
    setBackendJobs(false)

  }
  const handleBackendJobs = () => {
    handleSearchData("Backend Developer")
    getData()
    setMobileApp(false)
    setFrontend(false)
    setBackendJobs(true)

  }
  const handleMobappHover = () => {
    setAllCards(true)
    setShowMobApp(true)
    setShowFrontend(false)
    setShowBackend(false)

  }
  const handleFrontendHover = () => {
    setAllCards(true)
    setShowFrontend(true)
    setShowBackend(false)
    setShowMobApp(false)

  }
  const handleBackendHover = () => {
    setAllCards(true)
    setShowBackend(true)
    setShowFrontend(false)
    setShowMobApp(false)

  }
  const handleAllHover = () => {
    setAllCards(false)
  }

  return (
    <div style={{ backgroundColor: "#F2F5FA", height: "auto" }}>
      <Navbar>
        <img
          height="30"
          src="https://job-static.hirist.com/V2/static/media/hirist_logo.03e14260.svg"
          alt="logo"
          onClick={() => {
            history.push("/");
          }}
        />
        <p onClick={handleMobapp} onMouseEnter={handleMobappHover} className={mobileApp ? "par-toggle" : ""}>Mobile Applications</p>
        <p onClick={handleFrontendJobs} onMouseEnter={handleFrontendHover} className={frontend ? `${'par-toggle'}` : ""}>Frontend Developer</p>
        <p onClick={handleBackendJobs} onMouseEnter={handleBackendHover} className={backengJobs ? `${'par-toggle'}` : ""}>Backend Developer</p>
        <p>More</p>
        <p>|</p>
        <P>
          {" "}
          <p>Work from Home</p>
        </P>
        <p>Internship</p>
        <p>|</p>
        <p>Courses</p>
        <Search>
          <img height="15" src="icons8-search (1).gif" alt="logo" />
        </Search>
        <button
          onClick={() => {
            history.push("/LoginForm");
          }}
        >
          <img height="10" src="icons8-administrator-male-16.png" alt="logo" />{" "}
          Login
        </button>
      </Navbar>
      <div style={!allCards ? { display: 'none' } : { display: "block", }} >
        {showMobApp && <div className="simple-card-mobApp">  <SimpleCard jobsCatArr={mobileAppCat} /> </div>}
        {showFrontend && <div className="simple-card-frontend"><SimpleCard jobsCatArr={frontendCat} /></div>}
        {showBackend && <div className="simple-card-backend" ><SimpleCard jobsCatArr={backendCat} /></div>}
      </div>
      <SearchDataImage onMouseEnter={() => {
        setAllCards(false)
      }} photosData={MobileApp} />

      <Middle onMouseEnter={() => {
        setAllCards(false)
      }}>
        <p>Jobs</p>
        <p>Companies</p>
        <p>Courses</p>
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
        <div onMouseEnter={() => {
          setAllCards(false)
        }} className="dropdown">
          <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
            {selected}
            <img
              height="20"
              src="https://static.thenounproject.com/png/3466617-200.png"
              alt="logo"
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
              alt="logo"
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
              alt="logo"
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
          <button onClick={() => {
            if (selected === "All jobs") {
              handleSearchData("")
            } else {
              handleSearchData(selected)
            }
          }}>Refine</button>
        </Refine>

        <Clearall>
          <p>Clear All</p>
        </Clearall>
      </div>

      <AgainSearch onMouseEnter={() => {
        setAllCards(false)
      }}>
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
      <div style={{
        display: "flex",
        justifyContent: " space-between",

        width: "91%",
        margin: "auto"
      }}>
        <div style={{ height: "auto", width: "70%" }}>
          <Searching
            onMouseEnter={() => {
              setAllCards(false)
            }}
            selected={selected}
            jobdata={jobsData}
            isLoading={isLoading}
          />
        </div>

        <div style={{ marginTop: "45px" }}>
          <p style={{ fontSize: "16px", marginBottom: "10px" }}>
            Featured Employers
          </p>
          <RightFeeature onMouseEnter={() => {
            setAllCards(false)
          }} />
          <p style={{ fontSize: "16px", margin: "10px" }}>Courses</p>
          <Courses onMouseEnter={() => {
            setAllCards(false)
          }} />
        </div>
      </div>
    </div>
  );
};
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
    align-items: center;
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
    height: 29px;
    display: flex;
    justify-content: space-around;
    align-items: center;
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
    p{
      color: rgb(0,0,0);
      font-weight: bold;
    }
    p:hover{
      color: rgb(233, 99, 12);
      cursor: pointer;
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
    gap: 39px;
    height: 35px;
    font-weight: bold;
    width: 91.3%;
    margin: auto;
    background-color: white;
    font-family: "Nunito Sans";
    font-size: 15px;
    font-style: normal;
    font-variant: normal;
    padding: 8px 0px 0px 49px;
    margin-left: 65px;
    color: grey;
    border: 0px;
    p:nth-child(1){
      color: rgb(233, 99, 12);
    }

      p:hover{
      color: rgb(233, 99, 12);
      cursor: pointer;
    }
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
//sdjhfisuedhjiru
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

export default SearchData;
