import React from "react";
import styled from "styled-components";
import "./Company.css"
const Company = () => {
  const Navbar = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 7px;
    font-family: "Nunito Sans";
    font-size: 9px;
    font-style: normal;
    font-variant: normal;
    font-weight: 530;
    letter-spacing: normal;
    line-height: 15.4px;
    text-decoration: none solid rgb(33, 37, 41);
    height: 40px;
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
      height: 25px;
      width: 70px;
      border-radius: 5px;
      border: 0.5px solid #e9630c;
      background-color: white;
      color: #e9630c;

      font-family: "Nunito Sans";
      font-size: 10px;
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
    font-size: 7px;
    display: flex;
    gap:10px;
    margin-left:40px;
    height:20px;
    width:91%;
    background-color:white;

    img{
        margin-top:7px;
        margin-left:30px;
    }
  `

  const Description = styled.div`
     display: flex;
     gap :20px ;
     width:91%;
     height: 110px;
     background-color:#13355C;
     color: white;
     margin-left:40px;

     img{
         position: relative;
         top: 35px;
         left: 30px;
     }
  `
  return (
    <>
      <div>
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
          <button>
            <img height="10" src="icons8-administrator-male-16.png" alt="" />{" "}
            Login
          </button>
        </Navbar>

        <Home>
            <img height="10" width="10" src="icons8-home-24 (2).png" alt="" />
            <p> Home</p>
            <img height="10" width="10" src="icons8-double-right-24.png" alt="" />
            <p>Analytics & Data Science</p>
            <img height="10"  width="10" src="icons8-chevron-right-30.png" alt="" />
            <p>Data Analyst - Python/Data Mining</p>
        </Home> 


        <Description>
            
           <img height="50" width="50" src="https://staticlogo.hirist.com/1407-100X100.png" alt="" />
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
      </div>
    </>
  );
};

export default Company;
