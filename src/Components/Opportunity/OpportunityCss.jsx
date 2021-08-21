import styled from "styled-components";

export const OpportunityCss = styled.div`
  width: 95.4vw;
  height: 270px;
  position: relative;

  img {
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    background-color: #e9630c;
    z-index: -1;
  }
  .opportunity-text {
    position: relative;
    width: 520px;
    text-align: start;
    left: 4rem;
    top: 1rem;

    p:nth-child(1) {
      line-height: 57px;
      font-size: 42px;
      font-weight: 200;
      /* margin: 1rem; */
      color: #fff;
      display: inline-block;
      margin-bottom: 11px;
      word-spacing: 0rem;
      span {
        margin-left: 1rem;
      }
    }
    p:nth-child(2) {
      width: 100%;
      font-size: 18px;
      font-weight: 300;
      line-height: 1.5;
      color: #fff !important;
      display: inline-block;
    }
  }
  .RegisterBtn {
    float: right;
    height: 60px;
    width: 232px;
    border-radius: 4px;
    box-shadow: 0 4px 21px 0 rgb(0 0 0 / 19%);
    background-color: #fff;
    /* margin-top: 105px; */
    cursor: pointer;
    padding: 17px 44px;
    line-height: 27px;
    font-size: 20px;
    text-align: center;
    color: #e9630c !important;
    position: relative;
    top: -7rem;
    left: -4rem;
  }
`;
