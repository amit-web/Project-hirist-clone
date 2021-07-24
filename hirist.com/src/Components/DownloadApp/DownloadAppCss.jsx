import styled from "styled-components";

export const DownloadAppCss = styled.div`
  height: 900px;
  width: 95.4vw;

  padding-top: 130px;
  box-shadow: 0 6px 20px 0 rgb(0 0 0 / 6%);

  .DownloadApp {
    display: flex;
    .DownloadApp-text {
      position: relative;
      width: 500px;

      top: 4rem;
      padding: 1rem;
      padding-left: 4rem;
      .Dapp-heading {
        margin: 0 0 39px;
        font-size: 38px;
        font-weight: 200;
        line-height: 1.37;
        color: #000;
        text-align: start;
        font-weight: 700;
        p {
          font-weight: normal;
          margin-top: 1px;
        }
      }
      .features {
        display: grid;
        grid-gap: 1rem;
        text-align: start;
        .featuresChild {
          display: grid;
          grid-template-columns: 1fr 8fr;
          img {
            width: 20px;
            position: relative;
            top: 5px;
          }
          .featureText-span {
            line-height: 24px;
            font-size: -9rem;
            font-size: 18px;
            color: #000;
            font-weight: 700;
            margin-bottom: 2px;
          }
        }
      }
      .DownloadLinks {
        text-align: start;
        position: relative;
        top: 3rem;
      }
    }
    .DownloadApp-pic {
    }
    .DownloadApp-pic > img {
          width: 43rem;
    position: relative;
    top: -3rem;
    left: 7rem;
    }
  }
`;
