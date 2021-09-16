import React from "react";
import styled from "styled-components";
import "./Company.css";
import { useHistory } from "react-router-dom";
import Courses from "./Courses"
const Company = () => {
  const his = useHistory();

  return (
    <>
      <div style={{ width: "90%", margin: "auto" }}>
        <Navbar>
          <img
            height="30"
            src="https://job-static.hirist.com/V2/static/media/hirist_logo.03e14260.svg"
            alt=""
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
          <p>Courses</p>
          <Search>
            <img height="15" src="icons8-search (1).gif" alt="" />
          </Search>
          <button
            onClick={() => {
              return his.push("/Homepage");
            }}
          >
            <img height="10" src="icons8-administrator-male-16.png" alt="" />{" "}
            Logout
          </button>
        </Navbar>

        <Home>
          <img height="10" width="10" src="icons8-home-24 (2).png" alt="" />
          <p> Home</p>
          <img height="10" width="10" src="icons8-double-right-24.png" alt="" />
          <p>Analytics & Data Science</p>
          <img
            height="10"
            width="10"
            src="icons8-chevron-right-30.png"
            alt=""
          />
          <p>Data Analyst - Python/Data Mining</p>
        </Home>

        <Description>
          <img
            height="60"
            width="60"
            src="https://staticlogo.hirist.com/1407-100X100.png"
            alt=""
          />
          <div className="description">
            <p className="designation">Data Analyst - Python/Data Mining</p>
            <div className="locations">
              <p>Big Jobs</p>
              <p>Multiple Location</p>
              <p>1-3 years</p>
            </div>

            <div className="category">
              <button>Python</button>
              <button>MySQL</button>
              <button>eCommerce</button>
              <button>Data Analytics</button>
              <button>Data Analyst</button>
              <button>Data Modeling</button>
              <button>Database Design</button>
              <button>Data Mining</button>
            </div>

            <p className="posted">Posted on : 23/07/2021</p>
          </div>
        </Description>

        <div className="responsibility_main">
          <div className="role">
            <div className="role-res">
              <h3>Roles and Responsibilities</h3>
              <p>`- ${}`</p>
              <h3>Desired Candidate Profile</h3>
              <p>`- ${}`</p>
              <hr />

              <div className="apply-btn">
                <button className="apply">Apply</button>
                <button className="insight">Insights</button>
                <button className="follow-up">Follow-up</button>

                <div>
                  <img src="" />
                </div>

                <hr />
              </div>
            </div>
          </div>

          <div className="postedby">
            <div className="posteddata">
              <p>Posted by</p>

              <div className="companydes">
                <img src="" />

                <div>
                  <h3>{}</h3>
                  <p>{}</p>
                </div>
              </div>

              <div className="jobviews">
                <div>
                  <h2>{}</h2>
                  <p>JOB VIEWS</p>
                </div>
              </div>

              <div className="postedin">
                <p>Posted in</p>

                <h4>{}</h4>
              </div>

              <hr />

              <div className="recrutieraction">
                <p>Recruiter Actions (what does this mean?)</p>
                <h4>{}</h4>
              </div>
            </div>

            <div style={{ width:"100%",marginTop:"20px"}}>

             <p>Cources</p>

              <Courses/>

            </div>

            
          </div>
        </div>
      </div>
    </>
  );
};
const Navbar = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
  font-family: "Nunito Sans";
  font-size: 17px;
  font-style: normal;
  font-variant: normal;
  font-weight: 530;
  letter-spacing: normal;
  line-height: 15.4px;
  text-decoration: none solid rgb(33, 37, 41);
  height: 50px;
  width: 100%;

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
    height: 35px;
    width: 120px;
    border-radius: 5px;
    border: 0.5px solid #e9630c;
    background-color: white;
    color: #e9630c;
    font-family: "Nunito Sans";
    font-size: 18px;
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

const P = styled.div`
  p {
    font-weight: 600;
    font-family: "Nunito Sans";
  }
`;

const Home = styled.div`
  font-size: 12px;
  display: flex;
  gap: 10px;

  height: 40px;
  width: 100%;
  background-color: white;
  padding: 10px 0px 0px 0px;
  img {
    margin-top: 3px;
    margin-left: 30px;
  }
`;

const Description = styled.div`
  gap: 20px;
  width: 100%;
  display: flex;
  img {
    position: relative;
    top: 35px;
    left: 30px;
  }
  min-height: 180px;
  line-height: 1.5rem;
  background-color: #13355c;
  padding-left: 48px;
  position: relative;
  background-repeat: no-repeat;
  padding-top: 35px;
  padding-bottom: 28px;
  background-position-x: -50px;
  background-image: url(https://job-static.hirist.com/V2/static/media/background-bg.68c24dfd.png);
`;

export default Company;
