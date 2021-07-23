import styled from "styled-components";

export const RecruiterNavbarCss = styled.div`
  width: 100%;
  height: 80px;
  background-color: rgb(43, 43, 43);
  color: white;
  display: flex;

  .navbar-menu-links {
    display: flex;
    width: 50%;
    padding-left: 2rem;
    align-items: center;
    justify-content: space-between;
    align-items: center;
    div:nth-child(1) {
      span {
        position: relative;
        top: -28px;
        font-weight: bold;
        left: 14px;
      }
    }
    a {
      text-decoration: none;
      color: white;
      font-size: 15px;
      font-weight: bolder;
    }
  }
  .navbar-info-logo {
    display: flex;
    width: 50%;
    justify-content: flex-end;
    padding-right: 10px;
    .callingdetails {
        position: relative;
    left: -70px;
    top: 7px;
    div>div{
            text-align: start;
    margin-top: -7px;
    font-weight: bolder;
    }
      p {
        font-size: 12px;
      }
      img {
            width: 13px;
    position: relative;
    top: 1px;
    left: -3px;
      }
      span {
        font-size: 16px;
      }
    }
    div {
      margin-left: 6px;
      margin-right: 6px;
    }
    /* div:nth-child(2) img,div:nth-child(3) img,div:nth-child(4) img {
            left: -50px;
    width: 22px;
    position: relative;
    top: 30px;

    } */
    div:nth-child(4) {
        
      img {
        width: 40px;
      }
    }
  }
`;
