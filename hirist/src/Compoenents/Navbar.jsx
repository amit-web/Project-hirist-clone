import React from 'react';
import styled from 'styled-components'
const Navbar = () => {
    const Navbar = styled.div` 
    
   display: flex;
   justify-content:space-evenly;
    padding: 7px;
	font-family: "Nunito Sans";
	font-size: 9px;
	font-style: normal;
	font-variant: normal;
	font-weight: 530;
	letter-spacing: normal;
	line-height: 15.4px;
	text-decoration: none solid rgb(33, 37, 41);
	height: 40px;
    width: 90%;

    background-color:#ffffff;
    color:#212529;
	cursor: auto;
	visibility: visible;
	box-sizing: border-box;
	resize: none;
	text-shadow: none;
    border-bottom: 1px solid grey;
    margin: auto;
    button{
        margin-left: 20px;
        height:25px;
        width:80px;
        border-radius:5px;
        border: 0.5px solid #E9630C;
        background-color: white;
        color:#E9630C ;
      

	font-family: "Nunito Sans";
	font-size: 10px;
	font-style: normal;
	font-variant: normal;
	font-weight: 500;

  button:hover{
      background-color:#E9630C;
      color: white;
  }
    }
	       
    `

    const Search = styled.div`
    
    img{
        margin-top: 5px;
        margin-left:100px
    }
       
    `

    const Middle = styled.div`
    height: 20px;
    width: 90%;
    margin: auto;
    background-color:white;
    font-family: "Nunito Sans";
	font-size: 9px;
	font-style: normal;
	font-variant: normal;
     padding: 8px 0px 0px 20px;
    button{
        color: grey;
        font-size: 9px;
        border: 0px;
        margin: 0px 7px 0px 0px;
        background: none;
    }
    `
   
   const P= styled.div`
     p{
         font-weight: 600;
         font-family: "Nunito Sans";
     }
   `

   const Bottom = styled.div`
    height: 25px;
    width: 88%;
    margin: auto;
    background-color:#F2F5FA;
    font-family: "Nunito Sans";
	font-size: 9px;
	font-style: normal;
	font-variant: normal;
    padding: 5px 0px 0px 20px;
    display: flex;
    gap: 15px;

    button{
        height:18px;
        width:auto;
        padding:0px 10px 0px 10px;
        border-radius: 5px;
        font-size: 9px;
        font-family: "Nunito Sans";
        border: 0;
        color: grey;
        background-color:#ffffff;
        img{
            margin-top:0px;
        }
    }
      
   `

   const Refine = styled.div`
       button{ height:20px;
        width:65px;
        padding:0px 10px 0px 10px;
        border-radius: 15px;
        font-size: 9px;
        font-family: "Nunito Sans";
        background-color: #F2F5FA;
        color: #E9630C ;
        border: 1px solid #E9630C ;
       } 
   `
   const Clearall = styled.div`
        margin: 4px;
        font-size: 9px;
        font-family: "Nunito Sans";
        color: #E9630C ;
   `

 
    
    return (
        <>
      
          <Navbar>
              <img height="30" src="https://job-static.hirist.com/V2/static/media/hirist_logo.03e14260.svg" alt="" />
              <p>Mobile Applications</p>
              <p>Frontend Developer</p>
              <p>Backend Developer</p>
              <p>More</p>
              <p>|</p>
              <P> <p>Work from Home</p></P>
              <p>Internship</p>
              <p>|</p>
              <p>Courses</p>
              <Search>
                 <img height="15" src="icons8-search (1).gif" alt="" />
              </Search>
             <button >
                  <img height="10" src="icons8-administrator-male-16.png" alt="" />   Login
             </button>
             
          </Navbar>

         
           <Middle>
               <button>Jobs</button>
               <button>Companies</button>
               <button>Cources</button>
           </Middle>

            <Bottom>
                 <p>Filter By:</p>
                 <button>0-1 yrs   <img height="7" src="icons8-chevron-down-30.png" alt="" /> </button>
                 <button>7 selected  <img height="7" src="icons8-chevron-down-30.png" alt="" /></button>
                 <button>Posting  <img height="7" src="icons8-chevron-down-30.png" alt="" /></button>
                 <Refine>

                     <button>Refine</button>
                   
                 </Refine>

                 <Clearall>Clear All</Clearall>
                
            </Bottom>  

            <div></div> 
     
        </>
    );
}

export default Navbar;