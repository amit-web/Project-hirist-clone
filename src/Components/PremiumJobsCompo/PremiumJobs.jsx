import { PremiumJobsCss } from './PremiumJobsCss'
export function PremiumJobs() {
    return <PremiumJobsCss>
        <div className="prem-jobs-cont">
            <div className="prem-jobs-text">
                <span>
                    <img src="https://maxcdn.icons8.com/Color/PNG/512/Weather/dry-512.png" alt="" />
                </span>
                <p className="text1">Premium <b>Handpicked</b> jobs for you</p>
                <p className="text2">Premium handpicked jobs that you will not find anywhere else !</p>
            </div>
        </div>
        <div className="prem-jobs-list">
            <div className="prem-jobs-card">
                <div className="jobs-img-div">
                    <img src="https://d3qr48lsanmyop.cloudfront.net/1607489734670.jpeg" alt="" />
                </div>
                <div className="company-logo-div">
                    <img src="https://d3qr48lsanmyop.cloudfront.net/1607489682975.jpeg" alt="" />
                </div>
                <p className="job-title">Cognizant-Senior Associate-SAS programming</p>
                <div className="job-location-exp">
                    <p>Mumbai</p>
                    <p className="exp-margin">7-10 years</p>
                </div>
                <span className="job-view-btn">
                    <button>View Job</button>
                </span>
            </div>
            <div className="prem-jobs-card">
                <div className="jobs-img-div">
                    <img src="https://d3qr48lsanmyop.cloudfront.net/1606387251638.jpeg" alt="" />
                </div>
                <div className="company-logo-div">
                    <img src="https://d3qr48lsanmyop.cloudfront.net/1606386734454.jpeg" alt="" />
                </div>
                <p>American Express - Engineering Director-Frontend & Backend...</p>
                <div className="job-location-exp">
                    <p>Bangalore</p>
                    <p className="exp-margin">12-15 years</p>
                </div>
                <span className="job-view-btn">
                    <button>View Job</button>
                </span>
            </div>
            <div className="prem-jobs-card">
                <div className="jobs-img-div">
                    <img src="https://d3qr48lsanmyop.cloudfront.net/1607490027851.jpeg" alt="" />
                </div>
                <div className="company-logo-div">
                    <img src="https://d3qr48lsanmyop.cloudfront.net/1607489962770.jpeg" alt="" />
                </div>
                <p>Ola-Android Principle Engineer-BSP-Embedded Domain</p>
                <div className="job-location-exp">
                    <p>Bangalore</p>
                    <p className="exp-margin">10-15 years</p>
                </div>
                <span className="job-view-btn">
                    <button>View Job</button>
                </span>
            </div>
        </div>
    </PremiumJobsCss>
}