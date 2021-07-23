import telephoneLogo from '../../logos/telephone.png'
import searchLogo from '../../logos/loupesearch.png'
import chatLogo from '../../logos/chat.png'
import { RecruiterNavbarCss } from './RecruiterNavbarCss'
export function RecruiterNavbar() {
    return <RecruiterNavbarCss>
        <div className="navbar-menu-links">
            <div>
                <h1>hirist</h1>
                <span>.com</span>
            </div>
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
                <img src={searchLogo} alt="" />
            </div>
            <div>
                <img src={chatLogo} alt="" />
            </div>
            <div>
                <img src="https://recruit.hirist.com/static/images/profilenoImage.png" alt="" />
            </div>
        </div>
    </RecruiterNavbarCss>
}