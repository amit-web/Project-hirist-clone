import styled from "styled-components"
import { v4 as uuidv4 } from 'uuid';
import { SearchDataContext } from "../../Context/searchDataContext";
import { useHistory } from 'react-router-dom'
import { useContext } from "react";
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
    const history = useHistory();
    const { handleSearchData } = useContext(SearchDataContext)
    return <SubcatWrapper>
        {
            subCatlist.map((el) => {
                return <a href="#" onClick={() => {
                    handleSearchData(el.spanText)
                    history.push('/SearchData')
                }} key={uuidv4()} className="hirist-subcat fade-in-image">

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
            return <div key={uuidv4()} className="fade-in-image">
                <img src={el.src} alt="" />
            </div>
        })}
    </SubcatcomWrapper>
}