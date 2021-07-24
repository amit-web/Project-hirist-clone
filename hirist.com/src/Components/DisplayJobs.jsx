import React from "react";
import styled from "styled-components";
import styles from "./Display.module.css";

const DisplayJobs = ({ data }) => {
  const JobsData = styled.div`
    width: 100%;
    margin-left: 10px;
  `;

  const LastButton = styled.div`
    button {
      border: 0;
      height: 10px;
      margin-top: 5px;
      background: none;
    }
    p {
      margin-top: 2px;
      margin-right: 4px;
    }
  `;

  return (
    <>
      <JobsData>
        <div className={styles.display} onClick={((e)=>{
            console.log("Amit")
        })}>
          <input type="checkbox" />
          <div className={styles.company_image}>
            <div className={styles.imagecom}>
              <img height="30px" width="30px" src={data.url} alt="" />
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
                <p>{data.experiance}</p>
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

export default DisplayJobs;
