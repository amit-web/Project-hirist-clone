import styled from "styled-components";

export const PremiumJobsCss = styled.div`
  height: 430px;
  width: 95.4vw;
  box-shadow: 0 6px 20px 0 rgb(0 0 0 / 6%);
  display: flex;

  & > .prem-jobs-cont {
    width: 30%;
    padding: 20px;
    .prem-jobs-text {
      position: relative;
      top: 2rem;
      left: 3rem;
      width: 90%;
      img {
        width: 30px;
        position: relative;
        left: -11.5rem;
      }
    }

    .text1 {
      font-size: 32px;
      font-weight: 200;
      line-height: 43px;
      color: #000;
      margin: 0 0 10px;
      text-align: start;
    }
    .text2 {
      font-size: 20px;
      font-weight: 300;
      line-height: 1.35;
      color: rgba(0, 0, 0, 0.5) !important;
      margin-bottom: 25px;
      display: inline-block;
      text-align: start;
    }
  }
  .prem-jobs-list {
    display: flex;
    width: 59%;
    position: relative;
    top: 3rem;
    left: 4rem;
    justify-content: space-between;
    .prem-jobs-card {
      display: inline-block;
      width: 100%;
      border-radius: 8px;
      border: 1px solid #efefef;
      background-color: #fff;
      box-shadow: 0 2px 30px 0 rgb(0 0 0 / 6%);
      vertical-align: top;
      cursor: pointer;
      padding-bottom: 20px;
      height: 200px;
      width: 17rem;
      min-height: 326px;
      border-radius: 0.8rem;
      .jobs-img-div > img {
        width: 100%;
        height: 10rem;
        border-top-right-radius: 0.8rem;
        border-top-left-radius: 0.8rem;
      }
      .company-logo-div {
        position: relative;
        left: -5rem;
      }
      p {
        display: block;
        width: 100%;
        line-height: 25px;
        font-size: 16px;
        font-weight: 600;
        color: #000;
        min-height: 75px;
        padding-left: 16px;
        padding-right: 10px;
        margin: 5px -10px 7px;
        text-align: start;
        overflow-wrap: break-word;
      }
      .job-location-exp {
        display: flex;
        width: 100%;
        padding-left: 17px;
        padding-right: 17px;
        min-height: 38px;
        p {
          display: inline-block;
          line-height: 19px;
          font-size: 14px;
          font-weight: 300;
          text-align: start;
          color: rgba(0, 0, 0, 0.7);
          margin: 0;
          margin-left: -1.3rem;
        }
        .exp-margin {
          margin-left: -7rem;
        }
      }
      .job-view-btn {
        display: none;
        button {
          width: 6rem;
          height: 2rem;
          border: none;
          outline: none;
          color: white;
          font-weight: bold;
          background-color: rgb(233, 99, 12);
          border-radius: 5px;
          position: relative;
          top: -2rem;
          left: -5rem;
        }
      }
    }
    .prem-jobs-card:hover{
        .job-view-btn{
            display: block;
            button{
                cursor: pointer;
            }
        }
    }
  }
`;
