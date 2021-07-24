import styled from "styled-components"
import { v4 as uuid } from 'uuid';
const SubcatWrapper = styled.div`
  display: grid;
  width: 100%;
     grid-template-columns: 1fr 1fr 1fr 1fr;
     grid-gap: 1rem;
     
     img{
         width: 11rem;
     }
     .hirist-subcat{
         text-decoration:none;
     color: white;
     }
   
    &>a>span{
       position: relative;
    left: 0rem;
    top: -3.5rem;
    font-size: 17px;
    font-weight: 900;
    color: white;
   
    }
`
const SubcatcomWrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-gap: 1rem;


`
export function Backend({ subCatlist }) {
    return <SubcatWrapper>
        {
            subCatlist.map((el) => {
                return <a href="google.com" key={uuid()} className="hirist-subcat fade-in-image">

                    <img src={el.src} alt="" />
                    <span>{el.spanText}</span>
                </a>
            })
        }
    </SubcatWrapper>
}
export function SubCatComp({ subcatCompPic }) {

    return <SubcatcomWrapper>
        {subcatCompPic.map((el) => {
            return <div className="fade-in-image">
                <img src={el.src} alt="" />
            </div>
        })}
    </SubcatcomWrapper>
}