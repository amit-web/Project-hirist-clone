import React from 'react'
import './Header.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footerFirst">
                <div><p>COMPANY</p><br />
                    <br />
                    <p>Home</p><br />
                    <p>AboutUs</p><br />
                    <p>ContactUs</p><br />
                </div>
                <div><p>INFORMATION</p><br />
                    <p>Blog</p><br />
                    <p>Privacy</p></div>
                <div><p>OTHER PORTALS</p><br />
                    <p>iimjobs.com - MBA Jobs</p><br />
                    <p>updazz.com - Sales Jobs</p><br />
                    <p>engineeristic.com - Engineering Jobs</p> <br />
                    <p>biojoby.com - Medical Jobs</p><br />
                </div>
                <div>
                    <p>SALES ENQUIRIES</p><br />
                    <p>Toll Free No. (9:30 AM to 6:30 PM)</p><br />
                    <p> <i class="fas fa-phone-alt"></i>1800-103-7344</p><br />
                    <p><i class="far fa-envelope"></i> buynow@hirist</p> <br />
                    <p>Customer Support</p><br />
                    <p><i class="far fa-envelope"></i>nfo@hirist</p><br />
                </div>
            </div>
            <div className="footerSecond">
                <span style={{ marginLeft: "20px", fontSize: "50px" }}>
                    <i class="fab fa-facebook"></i>
                </span>
                <span style={{ marginLeft: "20px", fontSize: "50px" }}> <i class="fab fa-twitter"></i></span>
                <span style={{ marginLeft: "20px", fontSize: "50px" }}>  <i class="fab fa-linkedin-in"></i></span>

                <p>hirist.com © 2021. All rights reserved..</p>
            </div>
        </div>
    )
}

export default Footer
