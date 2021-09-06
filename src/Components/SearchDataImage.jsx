import React from 'react'
import styled from "styled-components";
function SearchDataImage({ photosData }) {
    return (
        <SearchDataImageStyled>
            {photosData.map((el) => {
                return <div key={el.id}>
                    <img className="zoom" src={el.photo} alt="" />
                </div>
            })}

        </SearchDataImageStyled>
    )
}


const SearchDataImageStyled = styled.div`
display: flex;

    width: 91%;
    margin: auto;
    height: 15rem;
&>div{
    img{
        width: 100%;
        height: 100%;
        :hover{
            transform:translate3D(7px)
        }
    }
}
.zoom {

  transition: transform .2s; /* Animation */

}

.zoom:hover {
  transform: scale(1.01); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}

`
export default SearchDataImage
