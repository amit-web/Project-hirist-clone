import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


const Main = () => {
    const popup = useRef(null)
    const history = useHistory();
    const handle = () => {

        if (popup.current.style.display === "none") {
            popup.current.style.display = "block";



        } else {
            popup.current.style.display = "none";
        }
    }
    const [user, setUser] = useState(
        { name: "", email: "", phone: "", designation: "", organization: "", password: "", cpassword: "" }
    )
    let name, value;
    const handleInput = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value })
    }
    const getData = (e) => {
        e.preventDefault()
        let list = localStorage.setItem("list", JSON.stringify(user))
        window.location = "/Recruter"
    }
    const [log, setLog] = useState({
        email: "", password: ""
    })
    let get = JSON.parse(localStorage.getItem('list'))



    const login = (e) => {
        name = e.target.name;
        value = e.target.value;
        setLog({ ...log, [name]: value })



    }
    const confirm = () => {
        if (log.email === get.email && log.password === get.password) {
            history.push('/Show')
        }
        else {
            alert("Please Enter correct Username and Password")
        }
    }



    return (
        <>
            <div className="we">
                <div className="recruting">
                    <h1>We <span><i class="far fa-heart"></i>
                    </span><br />
                        Recruiting</h1>
                    <img src="https://recruit.hirist.com/static/images/intro-image.png" alt="loading" />
                </div>
                <div className="Signup">
                    <div className="signupSecond">
                        <h1 style={{ marginLeft: "60px", marginTop: "50px" }}>Post a job for free</h1>
                        <form className="form" >
                            <input type="text" placeholder="Email" onChange={login} name="email" value={log.email} /> <br /><br />
                            <input type="password" placeholder="Password" onChange={login} name="password" value={log.password} /> <br /><br /><br />
                            <button onClick={confirm}>Login</button>
                        </form>
                        <p style={{ marginLeft: "240px", marginTop: "10px", fontSize: "small" }}><a href="#">Forget Password</a></p> <br />
                        <p style={{ marginLeft: "200px" }}>Dont have an Account ?<span onClick={handle} style={{ color: "blue", cursor: "pointer" }}>Register</span></p> <br />
                    </div>
                </div>

            </div>
            <div className="popup" ref={popup} style={{ display: "none" }}>
                <span style={{ marginLeft: "95%" }} onClick={handle}><i class="fas fa-times"></i></span>

                <h2>New Recruiter Registration</h2>
                <form >

                    <input type="text" name="name" value={user.name} onChange={handleInput} placeholder="Name" /> <br />
                    <input type="text" name="email" value={user.email} onChange={handleInput} placeholder="Your Work Email Id (Not Gmail Yahoo) " /><br />
                    <input type="text" name="phone" value={user.phone} onChange={handleInput} placeholder="Phone" /><br />
                    <input type="text" name="designation" value={user.designation} onChange={handleInput} placeholder="Designation" /><br />
                    <input type="text" name="organization" value={user.organization} onChange={handleInput} placeholder="Organization" /><br />
                    <input type="text" name="password" value={user.password} onChange={handleInput} placeholder="Password" /><br />
                    <input type="text" name="cpassword" value={user.cpassword} onChange={handleInput} placeholder="Confirm password" /><br />
                    <select placeholder="Select Recruter Type" id="">
                        <option value="">Direct Employer</option>
                        <option value="">Recruitment Firm</option>
                    </select><br /><br />
                    <button style={{ background: "#0c9175", color: "white" }} onClick={getData}>Rrgister</button>
                </form>
            </div>
            <div className="heigh">
                <div className="first"></div>
                <div className="Second"> <h1>Hiring is now simple</h1></div>
                <div className="third"></div>
            </div>
            <div className="post">
                <div className="div"><h1>Post a job</h1>
                    <p>Tell us about your role and we'll reach out to the right candidates.</p></div>
                <div className="div">
                    <img src="https://recruit.hirist.com/static/images/hero-image-1.png" alt="loading" />
                </div>
                <div className="div">
                    <img src="https://recruit.hirist.com/static/images/hero-image-2.png" alt="loading" />
                </div>
                <div className="div">
                    <h1>Review Candidates</h1>
                    <p>Browse profiles, shortlist and reject with a simple click.</p>
                </div>
                <div className="div">
                    <h1>Communicate</h1>
                    <p>Chat with your candidates and schedule interviews without multiple back-and-forth.</p>
                </div>
                <div className="div"><img src="https://recruit.hirist.com/static/images/hero-image-3.png" alt="loading" /></div>
                <div className="div"><img src="https://recruit.hirist.com/static/images/hero-image-4.png" alt="loading" /></div>
                <div className="div">
                    <h1>Hire</h1>
                    <p>Reduce your cost of hiring and time taken to hire.</p>
                </div>

            </div>
            <div className="service">
                <h1 >Reach out to quality candidates across multiple categories in IT domain</h1>
                <div className="content">
                    <div className="content1">
                        <div style={{ borderLeft: "1px solid black" }}>
                            <span style={{ color: "green", fontSize: "50px", marginLeft: "120px" }}><i class="fas fa-mobile-alt"></i></span>
                            <h3>Mobile/Web Development Jobs</h3>
                        </div>
                        <div style={{ borderLeft: "1px solid black" }}>
                            <span style={{ color: "green", fontSize: "50px", marginLeft: "120px" }}>
                                <i class="fas fa-network-wired"></i></span>
                            <h3>Systems/Product Software Jobs</h3></div>
                        <div style={{ borderLeft: "1px solid black" }}>
                            <span style={{ color: "green", fontSize: "50px", marginLeft: "120px" }}>
                                <i class="fas fa-microchip"></i></span> <h3>Semiconductor/VLSI/EDA Jobs</h3></div>
                        <div style={{ borderLeft: "1px solid black ", borderRight: "1px solid black" }}> <span style={{ color: "green", fontSize: "50px", marginLeft: "120px" }}><i class="fas fa-database"></i></span> <h3>Enterprise - SAP/Oracle Jobs</h3></div>
                        <div style={{ border: "1px solid black", borderRight: "0px solid black" }}> <span style={{ color: "green", fontSize: "50px", marginLeft: "120px" }}><i class="fas fa-desktop"></i> </span> <h3>Quality Testing Jobs</h3></div>
                        <div style={{ border: "1px solid black", borderRight: "0px solid black" }}> <span style={{ color: "green", fontSize: "50px", marginLeft: "120px" }}><i class="fas fa-laptop-code"></i> </span> <h3>UI/UX/Product Designer Jobs</h3></div>
                        <div style={{ border: "1px solid black", borderRight: "0px solid black" }}> <span style={{ color: "green", fontSize: "50px", marginLeft: "120px" }}><i class="fas fa-cogs"></i> </span> <h3>Project/Program Management Jobs</h3></div>
                        <div style={{ border: "1px solid black" }}> <span style={{ color: "green", fontSize: "50px", marginLeft: "120px" }}> <i class="fas fa-server"></i> </span> <h3>Business/Data Analyst Jobs</h3></div>
                    </div>
                </div>
            </div>
            <div className="mobile">
                <div className="mobile1">
                    <img src="https://recruit.hirist.com/static/images/hero-image-5.png" alt="loading" />
                </div>
                <div className="mobile2"><h1>Recruit on the go</h1> <br />
                    <ul><li>Easily organize and manage your candidate applications on the go</li><br />
                        <li>Simple and intuitive interface</li><br />
                        <li>The ability to shortlist, reject and save individual profiles for future reference</li><br />
                        <li>The ability to download resumes on your mobile device for detailed viewing and sharing</li><br />
                    </ul>
                    <p>Download our App</p><br />
                    <button><span style={{ fontSize: "20px" }}><i class="fab fa-android"></i>Android</span></button>
                    <button><span style={{ fontSize: "20px" }}><i class="fab fa-apple"></i>iPhones </span></button></div>

            </div>


        </>
    )
}
export default Main
