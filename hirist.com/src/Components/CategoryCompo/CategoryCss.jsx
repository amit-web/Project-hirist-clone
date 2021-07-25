import styled from "styled-components";

export const CategoryCss = styled.div`
  height: 600px;
  .category {
    width: 95.4vw;
    height: 171px;
    border: 1px solid red;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    box-shadow: 0 6px 20px 0 rgb(0 0 0 / 6%);
    border: 1px solid #efefef;
    background-color: #fff;
    position: relative;

    .category-child {
      display: grid;
      grid-template-columns: 1fr;
      justify-content: center;
      align-items: center;

      & > span:nth-child(2) {
        line-break: inherit;
        font-weight: bold;
        color: black;
      }
    }
    
    .category-child:hover {
      span:nth-child(3) {
        left: 56px;
        top: 15px;

        border-bottom: 4px solid rgb(233, 99, 12);
        width: 135px;

        position: relative;
      }
      span:nth-child(2) {
        color: rgb(233, 99, 12);
      }
    }
    .category-child > div > img {
      width: 40px;
    }
  }

  .subcategories {
    width: 95.4vw;

    height: 429px;
    box-shadow: 0 6px 20px 0 rgb(0 0 0 / 6%);
    border: 1px solid #efefef;
    background-color: rgb(254, 250, 241);

    .sub-cat-list {
      min-height: 272px;
      width: 60%;
      background-color: #fff;
      border-bottom-right-radius: 90px;
      padding: 40px;
    }
    .company-list {
      padding: 3rem 25px;
      width: 40%;
      img{
        width: 60%;
      }
    }
  
  }
  .subcategories > div {
    display: flex;
  }
    .fade-in-image {
  animation: fadeIn 2s;
  -webkit-animation: fadeIn 2s;
  -moz-animation: fadeIn 2s;
  -o-animation: fadeIn 2s;
  -ms-animation: fadeIn 2s;
}
@keyframes fadeIn {
  60%{opacity:0.6;}
  80% {opacity:0.8;}
  100% {opacity:1;}
}

@-moz-keyframes fadeIn {
  80% {opacity:0.8;}
  100% {opacity:1;}
}

@-webkit-keyframes fadeIn {
  50% {opacity:0.5;}
  100% {opacity:1;}
}

@-o-keyframes fadeIn {
  50% {opacity:0.5;}
  100% {opacity:1;}
}

@-ms-keyframes fadeIn {
  50% {opacity:0.5;}
  100% {opacity:1;}
}
`;
