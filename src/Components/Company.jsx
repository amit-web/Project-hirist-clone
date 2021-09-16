import React from "react";
import styled from "styled-components";
import "./Company.css";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import Courses from "./Courses"
import { useParams } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getById } from "../store/actions";
const Company = () => {
  const params = useParams();

  const dispatch = useDispatch()
  const { jobsData } = useSelector((state) => state.activities, shallowEqual);


  useEffect(() => {
    // axios.get(`http://localhost:8000/data/${params.id}`).then(({ res }) => {
    //   setObb(res)
    //   console.log(res)
    //   console.log(obb, "hii")
    //   // console.log(res)
    dispatch(getById(params.id))
    // })

    // console.log(obb, "hii")
  }, [params.id])
  const history = useHistory();

  return (
    <>
      <div style={{ width: "90%", margin: "auto" }}>
        <Navbar>
          <img
            height="30"
            src="https://job-static.hirist.com/V2/static/media/hirist_logo.03e14260.svg"
            alt=""
            onClick={() => {
              history.push("/Homepage")
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
          <p>Courses</p>
          <Search>
            <img height="15" src="icons8-search (1).gif" alt="" />
          </Search>
          <button
            onClick={() => {
              return history.push("/Homepage");
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
          <p>{jobsData[0].workat}</p>
        </Home>

        <Description>
          <img
            height="60"
            width="60"
            src={jobsData[0].url}
            alt=""
          />
          <div className="description">
            <p className="designation">{jobsData[0].jobs}</p>
            <div className="locations">
              <p>{jobsData[0].companyname}</p>
              <p>{jobsData[0].location}</p>
              <p>{jobsData[0].experiance}</p>
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

            <p className="posted">Posted on : {jobsData[0].postedon}</p>
          </div>
        </Description>

        <div className="responsibility_main">
          <div className="role">
            <div className="role-res">
              <h3>Roles and Responsibilities</h3>
              <div>
                <ul>
                  <li>Deliver across the entire app life cycle -concept, design, build, deploy, test, release to app stores and support.</li>
                  <li>Designs and oversees solutions for specific use cases that provide frameworks, interfaces, and services that can be extended and reused for future requirements</li>
                  <li>Works with product, project, and engineering teams to deliver products on schedule</li>
                  <li>Good knowledge of web programming concepts and good command over HTML, CSS, Bootstrap, JavaScript</li>
                  <li>Good Expertise with AngularJS and React_ JS or Polymer</li>
                  <li>Experience in developing Desktop applications using Electron.js and NW.js and good knowledge of the working of Chromium and Node.js</li>
                  <li>Good understanding of GraphQL, Redux, React and web pack</li>
                  <li> Good understanding of command-line build utilities and task runners like npm, grunt, and gulp</li>
                  <li>Good understanding of asynchronous request handling, partial page updates, and AJAX</li>
                  <li>Proficient understanding of cross-browser compatibility issues and ways to work around them</li>
                  <li>Proficient understanding of code versioning tools, such as Git</li>
                </ul>
              </div>

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
                <img src={jobsData[0].url} />

                <div>
                  <h3>{jobsData[0].companyname}</h3>
                  <p>{jobsData[0].jobs}</p>
                </div>
              </div>

              <div className="jobviews">
                <div>
                  <h2>{ }</h2>
                  <p>JOB VIEWS</p>
                </div>
              </div>

              <div className="postedin">
                <p>Posted in</p>

                <h4>{jobsData[0].postedon}</h4>
              </div>

              <hr />

              <div className="recrutieraction">
                <p>Recruiter Actions (what does this mean?)</p>
                <h4>{ }</h4>
              </div>
            </div>

            <div style={{ width: "100%", marginTop: "20px" }}>

              <p>Courses</p>

              <Courses />

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
