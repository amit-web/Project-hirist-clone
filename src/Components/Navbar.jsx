import { NavbarWrapper } from './NavbarCss'

import { LocationSelect, Form } from './LocationSelect'
import userLogo from '../logos/icons8-user-24.png'
import { useHistory } from 'react-router-dom'
import { useState, useContext, useEffect } from 'react'
import { useDispatch } from "react-redux";
import { getDebouncing } from "../store/actions";
import { SearchDataContext } from '../Context/searchDataContext'
import DebouncingCard from './Material-ui-compo/DebouncingCard'

// import Typewriter from 'react-type-carousel'
export function Navbar() {
    const dispatch = useDispatch()
    const history = useHistory();
    const { handleLocations, handleExperience, handleSearchData, handleDebouncing } = useContext(SearchDataContext)
    const [searchtext, setSearchtext] = useState("")
    const [locationarr, setLocationarr] = useState([])
    const [experience, setExperience] = useState("")
    const [bouncing, setBouncing] = useState(false)
    // const getData = () => {
    //     axios.get("http://localhost:8000/searchData").then(({ data }) => {
    //         console.log(data)
    //     })
    // }
    useEffect(() => {
        console.log(searchtext)
    }, [searchtext, handleDebouncing])
    const handleGo = () => {
        if (searchtext.length === 0) {
            alert("please fill all require details")
        } else {
            handleSearchData(searchtext)
            handleLocations(locationarr)
            handleExperience(experience)

            history.push('/SearchData')
        }

    }


    return <><NavbarWrapper>
        <div className="navbarTop">
            <div className="navbarTop-hirist-logo">
                <img src="https://job-static.hirist.com/V2/static/media/hirist_logo.03e14260.svg" alt="hiristLogo" />
            </div>
            <div className="navbarTop-buttons">
                <div className="download-button">
                    <button>
                        <img src="data:image/png;base64,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" alt="Mob-app-logo" />
                        <span>Download App</span>
                        <span><i class="fas fa-chevron-right"></i></span>
                    </button>
                </div>
                <div className="recruiter-anchor">

                    <a href="/Recruter">  Recruiter Login</a>

                </div>
                <div className="jobseeker-anchor">
                    <a href="/RegiForm"><img src={userLogo} alt="" />Jobseeker Login</a>
                </div>
            </div>
        </div>
        <div className="navbarBottom">

            <div>
                <span>Inspiring&nbsp;</span><div><span>
                    <span>
                        Golang Developer</span>&nbsp;
                </span>Jobs for the future!</div>
            </div>
            <div className="navbarBottom-search-section">
                <div className="search-jobs">
                    <img src="https://www.searchpng.com/wp-content/uploads/2019/03/Search-ico-715x715.png" alt="search-logo" />
                    <input value={searchtext} type="text" placeholder="Search Jobs" onChange={(e) => {
                        setSearchtext(e.target.value)
                        setBouncing(false)

                        // handleDebouncing(searchtext)

                        dispatch(getDebouncing(searchtext))




                    }} />
                </div>
                <div className="location-select">

                    <LocationSelect getlocation={locationarr => setLocationarr(locationarr)} />

                </div>
                <div className="experience-select">
                    <Form getExperience={experience => setExperience(experience)} />
                    {/* <select name="experience">
                        <option value="" disabled selected hidden>Experience</option>
                        <option value="anyexp">Any Exp. Level</option>
                        <option value="0-1">0-1 yrs</option>
                        <option value="1-3">1-3 yrs</option>
                        <option value="4-6">4-6 yrs</option>
                        <option value="7-10">7-10 yrs</option>
                        <option value="11-15">11-15 yrs</option>
                        <option value="15+">15+ yrs</option>
                    </select> */}
                    <div>
                        <button onClick={handleGo}>Go</button>
                    </div>
                </div>

            </div>

        </div>
    </NavbarWrapper>
        <div style={searchtext.length > 1 && !bouncing ? { display: "block" } : { display: "none" }}>
            <DebouncingCard setBouncing={setBouncing} setSearchtext={setSearchtext} />
        </div>
    </>
}
