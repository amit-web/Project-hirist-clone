import mobAppIcon from "../../logos/mobapp.png";
import frontendIcon from "../../logos/front-end.png";
import backendIcon from "../../logos/backend (1).png";
import emergingIcon from "../../logos/search.png";
import datascienceIcon from "../../logos/data.png";
import devopsIcon from "../../logos/eternity.png";
import { CategoryCss } from "../CategoryCompo/CategoryCss";
import { useState, useContext } from "react";
import { Backend, SubCatComp } from "./Backend";
import { SearchDataContext } from "../../Context/searchDataContext";
import { useHistory } from 'react-router-dom'
export function Category() {
    const history = useHistory();
    const { handleSearchData } = useContext(SearchDataContext)
    const [frontend, setFrontend] = useState(false);
    const [backend, setBackend] = useState(false);
    const [mobapp, setMobapp] = useState(true);
    const [devops, setDevops] = useState(false);
    const [emerging, setEmerging] = useState(false);
    const [datascience, setDatascience] = useState(false);
    const handleBackend = () => {
        setBackend(true);
        setFrontend(false);
        setMobapp(false);
        setDevops(false);
        setEmerging(false);
        setDatascience(false);
    };
    const handleFrontend = () => {
        setFrontend(true);
        setMobapp(false);
        setDevops(false);
        setEmerging(false);
        setDatascience(false);
        setBackend(false);
    };
    const handleMobapp = () => {
        setMobapp(true);
        setDevops(false);
        setEmerging(false);
        setDatascience(false);
        setBackend(false);
        setFrontend(false);
    };
    const handleDevops = () => {
        setDevops(true);
        setEmerging(false);
        setDatascience(false);
        setBackend(false);
        setFrontend(false);
        setMobapp(false);
    };
    const handleEmerging = () => {
        setEmerging(true);
        setDatascience(false);
        setBackend(false);
        setFrontend(false);
        setMobapp(false);
        setDevops(false);
    };
    const handleDatascience = () => {
        setDatascience(true);
        setBackend(false);
        setFrontend(false);
        setMobapp(false);
        setDevops(false);
        setEmerging(false);
    };
    //data for images of companies
    const mobappCompanyPic = [
        { src: "https://d3qr48lsanmyop.cloudfront.net/1613741323644.jpeg" },
        { src: "https://d3qr48lsanmyop.cloudfront.net/1595395016223.jpeg" },
        { src: "https://d3qr48lsanmyop.cloudfront.net/1626348943077.jpeg" },
    ];
    const frontendCompanyPic = [
        { src: "https://d3qr48lsanmyop.cloudfront.net/1597054860669.jpeg" },
        { src: "https://d3qr48lsanmyop.cloudfront.net/1620638931135.jpeg" },
        { src: "https://d3qr48lsanmyop.cloudfront.net/1621257077759.jpeg" },
    ];
    const backendCompanyPic = [
        { src: "https://staticlogo.hirist.com/100x40/OlaCabs-1407-110X40.png" },
        { src: "https://d3qr48lsanmyop.cloudfront.net/1590129670268.jpeg" },
        { src: "https://d3qr48lsanmyop.cloudfront.net/1621257580003.jpeg" },
        { src: "https://d3qr48lsanmyop.cloudfront.net/1626348747811.jpegs" },
    ];
    const devopsCompanyPic = [
        { src: "https://d3qr48lsanmyop.cloudfront.net/1590129066889.jpeg" },
        { src: "https://d3qr48lsanmyop.cloudfront.net/1590130017722.jpeg" },
        { src: "https://d3qr48lsanmyop.cloudfront.net/1626348747811.jpeg" },
    ];
    const emergingCompanyPic = [
        { src: "https://staticlogo.hirist.com/100x40/ZSAssociates-123-110X40.png" },
        { src: "https://d3qr48lsanmyop.cloudfront.net/1620638810659.jpeg" },
        { src: "https://d3qr48lsanmyop.cloudfront.net/1620638931135.jpeg" },
    ];
    const datascienceCompanyPic = [
        { src: "https://d3qr48lsanmyop.cloudfront.net/1620639027345.jpeg" },
        { src: "https://d3qr48lsanmyop.cloudfront.net/1626348747811.jpeg" },
        { src: "https://d3qr48lsanmyop.cloudfront.net/1626348943077.jpeg" },
    ];
    //data for subcategories of jobs
    const mobappObj = [
        {
            src: "https://staticlogo.hirist.com/ios.png",
            spanText: "iOS",
        },
        {
            src: "https://staticlogo.hirist.com/android.png",
            spanText: "Android",
        },
        {
            src: "https://staticlogo.hirist.com/react-native.png",
            spanText: "React Native",
        },
        {
            src: "https://staticlogo.hirist.com/ionic.png",
            spanText: "Ionic",
        },
        {
            src: "https://staticlogo.hirist.com/phonegap.png",
            spanText: "Phonegap",
        },
        {
            src: "https://staticlogo.hirist.com/xamarin.png",
            spanText: "Xamarin",
        },
        {
            src: "https://staticlogo.hirist.com/opengl.png",
            spanText: "openGL",
        },
    ];
    const frontendObj = [
        {
            src: "https://staticlogo.hirist.com/ios.png",
            spanText: "Javascript",
        },
        {
            src: "https://staticlogo.hirist.com/reactjs.png",
            spanText: "ReactJs",
        },
        {
            src: "https://staticlogo.hirist.com/angularjs.png",
            spanText: "Angular Js",
        },
        {
            src: "https://staticlogo.hirist.com/jquery.png",
            spanText: "JQuery",
        },
        {
            src: "https://staticlogo.hirist.com/bootstrap.png",
            spanText: "Bootstrap",
        },
        {
            src: "https://staticlogo.hirist.com/ui.png",
            spanText: "UI",
        },
        {
            src: "https://staticlogo.hirist.com/nodejs.png",
            spanText: "NodeJs",
        },
        {
            src: "https://staticlogo.hirist.com/ux.png",
            spanText: "UX",
        },
    ];
    const backendObj = [
        {
            src: "https://staticlogo.hirist.com/python.png",
            spanText: "Python",
        },
        {
            src: "https://staticlogo.hirist.com/java.png",
            spanText: "Java",
        },
        {
            src: "https://staticlogo.hirist.com/golang.png",
            spanText: "Golang",
        },
        {
            src: "https://staticlogo.hirist.com/ruby-on-rails.png",
            spanText: "Ruby On Rails",
        },
        {
            src: "https://staticlogo.hirist.com/r.png",
            spanText: "R",
        },
        {
            src: "https://staticlogo.hirist.com/django.png",
            spanText: "Django",
        },
        {
            src: "https://staticlogo.hirist.com/nodejs.png",
            spanText: "NodeJs",
        },
        {
            src: "https://staticlogo.hirist.com/rest-api.png",
            spanText: "Rest Api",
        },
    ];
    const devopsObj = [
        {
            src: "https://staticlogo.hirist.com/cloud-architecture.png",
            spanText: "Cloid Architecture",
        },
        {
            src: "https://staticlogo.hirist.com/aws.png",
            spanText: "AWS",
        },
        {
            src: "https://staticlogo.hirist.com/google-cloud.png",
            spanText: "Google Cloud",
        },
        {
            src: "https://staticlogo.hirist.com/azure.png",
            spanText: "Azure",
        },
        {
            src: "https://staticlogo.hirist.com/kubernetes.png",
            spanText: "Kubernetes",
        },
        {
            src: "https://staticlogo.hirist.com/docker.png",
            spanText: "Docker",
        },
        {
            src: "https://staticlogo.hirist.com/jenkins.png",
            spanText: "Jenkins",
        },
        {
            src: "https://staticlogo.hirist.com/chef.png",
            spanText: "Chef",
        },
    ];
    const emergingObj = [
        {
            src: "https://staticlogo.hirist.com/blockchain.png",
            spanText: "BlockChain",
        },
        {
            src: "https://staticlogo.hirist.com/cryptocurrency.png",
            spanText: "CryptoCurrency",
        },
        {
            src: "https://staticlogo.hirist.com/augmented-reality.png",
            spanText: "Augmented Reality",
        },
        {
            src: "https://staticlogo.hirist.com/virtual-reality.png",
            spanText: "Virtual Reality",
        },
        {
            src: "https://staticlogo.hirist.com/iot.png",
            spanText: "iOT",
        },
        {
            src: "https://staticlogo.hirist.com/data-scientist.png",
            spanText: "Data Scientist",
        },
    ];
    const datascienceObj = [
        {
            src: "https://staticlogo.hirist.com/artificial-intelligence.png",
            spanText: "Artificial Intelligence",
        },
        {
            src: "	https://staticlogo.hirist.com/machine-learning.png",
            spanText: "Machine learning",
        },
        {
            src: "https://staticlogo.hirist.com/data-analytics.png",
            spanText: "Data Analytics",
        },
        {
            src: "https://staticlogo.hirist.com/nlp.png",
            spanText: "NLP",
        },
        {
            src: "https://staticlogo.hirist.com/data-mining.png",
            spanText: "Data mining",
        },
        {
            src: "https://staticlogo.hirist.com/data-modeling.png",
            spanText: "Data Modeling",
        },
        {
            src: "https://staticlogo.hirist.com/big-data.png",
            spanText: "Big Data",
        },
    ];

    return (
        <CategoryCss>
            <div className="category">
                <span className="category-child" onClick={(e) => {
                    handleSearchData("Mobile Applications")
                    history.push('/SearchData')
                }} onMouseOver={handleMobapp}>
                    <div>
                        <img src={mobAppIcon} alt="" />
                    </div>
                    <span>Mobile Applications</span>
                    <span></span>
                </span>
                <span className="category-child" onClick={(e) => {
                    handleSearchData("Frontend Developer")
                    history.push('/SearchData')
                }} onMouseOver={handleFrontend}>
                    <div>
                        <img src={frontendIcon} alt="" />
                    </div>
                    <span>Frontend Developer</span>
                    <span></span>
                </span>
                <span onClick={(e) => {
                    handleSearchData("Backend Developer")
                    history.push('/SearchData')
                }} className="category-child" onMouseOver={handleBackend}>
                    <div>
                        <img src={backendIcon} alt="" />
                    </div>
                    <span>Backend Developer</span>
                    <span></span>
                </span>
                <span onClick={(e) => {
                    handleSearchData("DevOps")
                    history.push('/SearchData')
                }} className="category-child" onMouseOver={handleDevops}>
                    <div>
                        <img src={devopsIcon} alt="" />
                    </div>
                    <span>DevOps</span>
                    <span></span>
                </span>
                <span onClick={(e) => {
                    handleSearchData("Emerging Technologies & Roles")
                    history.push('/SearchData')
                }} className="category-child" onMouseOver={handleEmerging}>
                    <div>
                        <img src={emergingIcon} alt="" />
                    </div>
                    <span>Emerging Technologies & Roles</span>
                    <span></span>
                </span>
                <span onClick={(e) => {
                    handleSearchData("Analytics & Data Science")
                    history.push('/SearchData')
                }} className="category-child" onMouseOver={handleDatascience}>
                    <div>
                        <img src={datascienceIcon} alt="" />
                    </div>
                    <span>Analytics & Data Science</span>
                    <span></span>
                </span>
            </div>

            <div className="subcategories">
                <div>
                    <div className="sub-cat-list">
                        {backend ? (
                            <Backend subCatlist={backendObj} />
                        ) : frontend ? (
                            <Backend subCatlist={frontendObj} />
                        ) : mobapp ? (
                            <Backend subCatlist={mobappObj} />
                        ) : devops ? (
                            <Backend subCatlist={devopsObj} />
                        ) : emerging ? (
                            <Backend subCatlist={emergingObj} />
                        ) : datascience ? (
                            <Backend subCatlist={datascienceObj} />
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="company-list">
                        {mobapp ? (
                            <SubCatComp subcatCompPic={mobappCompanyPic} />
                        ) : backend ? (
                            <SubCatComp subcatCompPic={backendCompanyPic} />
                        ) : frontend ? (
                            <SubCatComp subcatCompPic={frontendCompanyPic} />
                        ) : devops ? (
                            <SubCatComp subcatCompPic={devopsCompanyPic} />
                        ) : emerging ? (
                            <SubCatComp subcatCompPic={emergingCompanyPic} />
                        ) : datascience ? (
                            <SubCatComp subcatCompPic={datascienceCompanyPic} />
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            </div>
        </CategoryCss>
    );
}
