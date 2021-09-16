import React, { useState } from "react";
import styled from "styled-components";
import styles from "./Display.module.css";
import { useHistory } from "react-router-dom";
import "./Search.css";

const DisplayJobs = ({ data }) => {



  const history = useHistory();

  const handlecompanydes=(id)=>{

    console.log(id)

  }
  return (
    <>
      <JobsData>
        <div className={styles.display}  onClick={()=>handlecompanydes(data.id)}>
          <input type="checkbox" style={{ marginRight: "25px", marginTop: "15px" }} />
          <div className={styles.company_image} style={{ height: "70px" }}>

            <div className="hover" style={{ marginLeft: "-50px", marginTop: "5px", background: "white", height: "50px", width: "50px", cursor: "pointer", borderRadius: "10px", border: "1px solid #ececec" }}>

              <img height="50px" width="50px" src={data.url} alt="loading" />
            </div>

            <div className={styles.middledata}>
              <h5>{data.workat}</h5>
              <div className={styles.requirement_data}>
                <p className={styles.small_image}>
                  <img
                    height="10"
                    width="10"
                    src="https://image.shutterstock.com/image-vector/default-avatar-profile-icon-social-260nw-1677509740.jpg"
                    alt=""
                  />{" "}
                  {data.companyname}
                </p>
                <p >{data.experiance}</p>
                <p>{data.openfor}</p>
                <p>{data.postedon}</p>
              </div>
            </div>

            <LastButton>
              <div className={styles.last_button}>
                <div>
                  <button>
                    <img
                      height="20"
                      width="20"
                      src="icons8-best-seller-50.png"
                      alt=""
                    />
                  </button>
                  <p>Premium</p>
                </div>

                <div>
                  <button>
                    <img height="20" width="20" src="icons8-info.gif" alt="" />
                  </button>
                  <p>info</p>
                </div>
                <div>
                  <button>
                    <img
                      height="20"
                      width="20"
                      src="icons8-star-50.png"
                      alt=""
                    />
                  </button>
                  <p>Save</p>
                </div>
              </div>
            </LastButton>
          </div>
        </div>
      </JobsData>


    </>
  );
};
const JobsData = styled.div`
    width: 100%;
    margin: auto;
    margin-top:7px;
    height:auto;
    &>div:nth-child(1){
          width: 100%;
    margin: auto;
    margin-top: 7px;
    height: 5rem;
    &>div:nth-child(2){
      :hover{
      cursor: pointer;
    box-shadow: 0px 0px 8px grey;
      }
    }
    }
    p{
      font-size:13px;
      color:grey;
    }
  `;

const LastButton = styled.div`
    button {
      border: 0;
      height: 10px;
      margin-top: 0px;
      background: none;
      

    }
    p {
       margin-top: 2px;
    margin-right: -18px;
    margin-left: 29px;
  
    }
  `;
export default DisplayJobs;