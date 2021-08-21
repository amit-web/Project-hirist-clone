import styled from "styled-components";

export const NavbarWrapper = styled.div`
  width: 95.4vw;
  padding: 1rem 2rem;
  display: grid;
  background-color: rgb(254, 250, 241);
  height: 14rem;

  .navbarTop {
    display: flex;
    position: relative;
    top: 8px;
    .navbarTop-hirist-logo {
      width: 50%;
      text-align: start;
      padding-top: 1rem;
      padding-left: 2rem;
    }

    .navbarTop-hirist-logo > img {
      width: 85px;
    }
    .navbarTop-buttons {
     display: -webkit-box;
  
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 50%;
    padding-left: 4rem;
    padding-right: 1rem;
    position: relative;
    left: -3rem;
}

      a {
        text-decoration: none;
      }
      .download-button {
        width: 12rem;

        button {
          color: rgb(233, 99, 12);
          position: relative;
          top: -10px;
          left: -1rem;
          font-size: 0.9rem;
          -webkit-letter-spacing: 1px;
          -moz-letter-spacing: 1px;
          -ms-letter-spacing: 1px;
          letter-spacing: 1px;
          width: 100%;
          height: 2.5rem;
          text-align: start;
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: justify;
          -webkit-justify-content: space-between;
          -ms-flex-pack: justify;
          justify-content: space-between;
          -webkit-align-items: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          border-radius: 2rem;
          border: 1px solid rgb(233, 99, 12);
          background-color: transparent;
          :hover {
            cursor: pointer;
          }
        }
        img {
          width: 27px;
        }
      }
      .recruiter-anchor > a:hover {
        color: white;
        background-color: rgb(233, 99, 12);
      }
      .jobseeker-anchor > a:hover {
        background-color: white;
        color: rgb(233, 99, 12);
      }
      .jobseeker-anchor > a > img:hover {
        color: rgb(233, 99, 12);
      }
      .jobseeker-anchor > a,
      .recruiter-anchor > a {
        padding: 9px 23px;
        border: 1px solid rgb(233, 99, 12);
        color: rgb(233, 99, 12);
        border-radius: 7px;
        font-weight: bold;
      }
      .jobseeker-anchor > a {
        background-color: rgb(233, 99, 12);
        color: white;
        position: relative;
        top: -3px;
        left: -18px;
        img {
          width: 18px;
          margin-right: 6px;
        }
      }
    }
  }

  .navbarBottom {
    display: grid;
    .navbarBottom-search-section {
      display: flex;
      justify-content: center;
    }
    & > div:nth-child(1) {
        display: flex;
    width: 70%;
    margin: auto;
    text-align: center;
    font-size: 35px;
    margin-left: 22rem;
    }
    & > div:nth-child(1) > span {
      margin-left: -2rem;
      font-weight: bold;
    }
    & > div:nth-child(1) > div {
      font-size: 35px;
      font-weight: bold;
    }
    & > div:nth-child(1) > div > span {
      color: rgb(233, 99, 12);
    }
    .search-jobs {
         width: 20rem;
    height: 57px;
    border: 1px solid rgb(229,229,228);
    text-align: start;
    padding: 4px 6px;
    background-color: white;

      img {
        width: 13px;
        height: 13px;
        position: relative;
        top: 2px;
        left: 10px;
      }
      input {
        border: none;
        outline: none;
        height: 100%;
        margin-left: 15px;
        width: 80%;
        ::placeholder {
          font-size: 17px;
          color: rgb(170, 170, 170);
          margin-left: 3px;
        }
      }
    }
    .location-select {
      width: 12rem;
      background-color: white;
      height: 50px;

      .rmsc {
        --rmsc-main: none;
        text-align: start;
        --rmsc-h: 45px;
        .dropdown-heading {
          position: relative;
          padding: 0 var(--rmsc-p);
          display: grid;
          grid-template-columns: 3fr 1fr 1fr;
          align-items: center;
          width: 100%;
          height: var(--rmsc-h);
          cursor: default;
          outline: 0;
        }
        .clear-selected-button {
          cursor: pointer;
          background: none;
          border: 0;
          padding: 0;
          display: flex;
          position: relative;
          top: 12px;
          font-weight: 100;
          top: 1;
        }
      }
      .rmsc .dropdown-container {
           position: relative;
    outline: 0;
    background-color: white;
    border: 1px solid rgb(229,229,228);
    border-radius: 0px;
    height: 57px;
      }
      input {
        border: none;
        height: 20px;
        font-size: 16px;
        padding: 4px 0 0 0;
      }
      .dropdown-content {
        width: 16rem;
      }
      select {
        width: 100%;
        height: 100%;
        outline: none;
        border: none;
      }
    }
    .experience-select {
     width: 15rem;
    height: 56px;
    background-color: white;
    border: 1px solid rgb(229,229,228);
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
      select {
        width: 80%;
        height: 100%;

        outline: none;
        border: none;
      }
      .rrs__button {
        color: #555;
        position: relative;
        width: 12rem;
        cursor: pointer;
        line-height: 44px;
        /* background: #fff; */
        /* border-radius: 4px; */
        box-shadow: none;
      }
      .rrs__label {
        /* padding: 0 2rem 0 1rem; */
        display: inline-flex;
        height: 100%;
        width: 100%;
        max-width: 100%;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        font-size: inherit;
        /* background: transparent; */
        /* border-radius: 4px; */
        border: none;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .rrs__option {
        cursor: pointer;
        padding: 0.75rem 1rem;
        margin: 0;
        color: rgb(85, 85, 85);
      }
      .rrs--has-changed .rrs__label {
        color: rgb(153, 153, 152);
      }
      .rrs__button + .rrs__options {
        list-style: none;
        padding: 0;
        margin: 0;
        background: #fff;
        position: absolute;
        margin-top: 10px;
        z-index: 2;
        border: none;
        border-top: 1px solid #eee;
        border-radius: 0 0 4px 4px;
        top: 44px;
        left: 0;
        right: 0;
        height: 0;
        visibility: hidden;
        overflow: hidden;
        box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
      }
      .rrs--options-visible .rrs__options {
        height: auto;
        visibility: visible;
        text-align: start;
        overflow: visible;
        -webkit-overflow-scrolling: touch;
        max-height: 350px;
      }
      .rrs--options-visible .rrs__label,
      .rrs__button:focus .rrs__label {
        outline: 0;
        border: 1px solid none;
      }
      button {
          border: none;
    position: relative;
    top: 6px;
    right: 27px;
    width: 51px;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 7px;
    height: 44px;
    background-color: rgb(233,99,12);
      }
    }
  
`;
