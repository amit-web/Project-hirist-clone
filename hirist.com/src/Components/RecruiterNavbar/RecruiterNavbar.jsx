import telephoneLogo from "../../logos/telephone.png";
import searchLogo from "../../logos/loupesearch.png";
import styled from "styled-components";
import chatLogo from "../../logos/chat.png";
import { useState } from "react";
import { RecruiterNavbarCss } from "./RecruiterNavbarCss";

const InputWrapper = styled.div`
  width: 500px;
  height: 40px;
  input {
    width: 55rem;
    position: relative;
    left: -5rem;
    height: 3rem;
    border-radius: 9px;
    background-color: transparent;
    border: 1px solid white;
    outline: none;
    color:white;
    padding-left: 1rem;
    font-size: 20px;
    top: -4px;
  }
`;
export function RecruiterNavbar() {
    const [showInput, setShowInput] = useState(true);
    const handleshowInput = () => {
        setShowInput(!showInput);
    };
    return (
        <RecruiterNavbarCss>
            <div className="navbar-menu-links">
                <div>
                    <h1>hirist</h1>
                    <span>.com</span>
                </div>
                {showInput ? (
                    <>
                        <div>
                            <a href="">Dashboard</a>
                        </div>
                        <div>
                            <a href="">jobs</a>
                        </div>
                        <div>
                            <a href="">Search Resume</a>
                        </div>
                        <div>
                            <a href="">Interviews</a>
                        </div>
                        <div>
                            <a href="">Assessment</a>
                        </div>
                        <div>
                            <a href="">Report</a>
                        </div>
                    </>
                ) : (
                    <InputWrapper>
                        <input type="text" />
                    </InputWrapper>
                )}
            </div>
            <div className="navbar-info-logo">
                <div className="callingdetails">
                    <div>
                        <p>Sales Enquiries (9:30 AM to 6:30 PM)</p>
                        <div>
                            <img src={telephoneLogo} alt="" />
                            <span>1800-103-7344</span>
                        </div>
                    </div>
                </div>
                <div>
                    <img onClick={handleshowInput} src={searchLogo} alt="" />
                </div>
                <div>
                    <img src={chatLogo} alt="" />
                </div>
                <div>
                    <img
                        src="https://recruit.hirist.com/static/images/profilenoImage.png"
                        alt=""
                    />
                </div>
            </div>
        </RecruiterNavbarCss>
    );
}
