import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
.par-toggle{

        color: rgb(233,99,12);
         font-weight: bold;
 
}
.simple-card-mobApp,.simple-card-frontend,.simple-card-backend{
     position: absolute;
    width: 400px;
    height: 200px;
    box-shadow: 11px 2px 12px black;
    z-index: 1000;
     
            animation: fadeInAnimation ease 1s;
            animation-iteration-count: 1;
            animation-fill-mode: forwards;
          @keyframes fadeInAnimation {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
}
.simple-card-mobApp{

    left: 8rem;
    top: 4rem;

}
.simple-card-frontend{
        left: 18rem;
    top: 4rem;

}
.simple-card-backend{
     left: 28rem;
    top: 4rem;
}
.cardDisplayNone{
        display: none !important;
}
`