import React from 'react'
import './Header.css'

 const Header = () => {
    return (
        <>
       
        <div className="header">
          <div className="logo">
             <h1>hirist</h1>
            <p style={{marginLeft:"40px"}}>.com</p>
          </div>
          <div className="login">
             <button>Jobseeker Login</button>
          </div>
        </div>
        </>
    )
}
export default Header