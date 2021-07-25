import styled from "styled-components";
import { useFormik } from "formik";
import * as yup from "yup";
import { useState, useRef } from "react";
import { PostDetails } from "./PostDetails";
import api from "../../../src/api/Contact";
import { SelectTag } from "./SelectTag";
import { Bottom } from "./Bottom";
import React from "react";
import styles from "./RecruiterCss.module.css";
import { useHistory } from "react-router-dom"

const PageContent = styled.div`
  min-height: 100%;
  width: 100%;
  padding: 0;
  overflow: auto;
  position: relative;
  padding: 20px;
  position: absolute;
`;

const MainWrapper = styled.div`
  max-width: auto;
  display: flex;
  width: auto;
  margin: 0 auto;
  position: relative;
  img{
    width:40%;
  }
  input {
    flex: 1;
    border: none;
    height: 46px;
    font-size: 14px;
    padding: 4px 0 0 0;
  }
 
`;

const JobFormContent = styled.div`
  padding: 30px 30px 10px 30px;
  max-width: 1440px;
  margin: 0 auto;
`;

const JobPost = styled.div`
  display: inline-block;
  width: 70%;
  padding-right: 30px;
`;
const JobPostHeading = styled.div`
  margin: 10px 0 0 0;
  color: #2b2b2b;
  font-size: 18px;
  font-weight: 600;
  line-height: 1;
`;
const Form = styled.form``;
const SectionHead = styled.div``;
const SectionHeading = styled.h3`
  margin: 0;
  font-size: 26px;
  color: #149075;
  padding-bottom: 10px;
  border-bottom: 1px solid #e8e8e8;
`;

const FieldContainer = styled.div`
  padding: 0;
  margin-bottom: 30px;
  position: relative;
  overflow: visible;
  width: 70%;
  max-width: 70%;
`;
const Label = styled.label`
  display: block;
  font-size: 16px;
  color: #4b4b4b;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Input = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearanance: none;
  border-radius: 3px;
  background: #fff;
  width: 100%;
  border: 1px solid #e8e8e8;
  cursor: pointer;
  padding: 16px 22px;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 0;
  padding: 16px 15px;
`;

const Field = styled.div`
  display: block;
  font-size: 0;
`;
const InputDes = styled.input`
  width: 100%;
  max-width: 100%;
  min-height: 150px;
  height: auto;
  padding: 12px 15px;
  box-sizing: border-box;
  border: 1px solid #e8e8e8;
  border-radius: 0;
  background-color: inherit;
  font-size: 14px;
  line-height: 1.5;
  overflow-y: hidden;
  text-align: start;
`;
const Filebutton = styled.button`
  color: #2b2b2b;
  margin-top: 1rem;
  background: #fff;
  font-size: 13px;
  display: inline-block;
  vertical-align: top;
  cursor: pointer;
  padding: 6.5px 15px;
  border-radius: 3px;
  outline: 0;
  border: 1px solid #8f8a8a;
`;
const Select = styled.select`
  font-family: inherit;
  margin-left: 0;
  display: inline-block;
  font-size: 14px;
  color: #818181;
  padding: 16px 15px;
  border-radius: 3px;
  background: #fff;
  width: 100%;
  border: 1px solid #e8e8e8;
  /* background-image: url(/static/images/down-caret.svg); */
  background-repeat: no-repeat;
  background-position: right 18px center;
  cursor: pointer;
  border-color: #e8e8e8;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearanance: none;
  line-height: 1.5;
  outline: 0;
`;
const PremiumSection = styled.div`
  clear: both;
  margin: 0;
  padding: 30px;
  width: 100%;
  background: #f3fbfb;
`;
const PremiumContant = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const JobVisibleHead = styled.div`
  display: flex;
  padding-bottom: 10px;
  border-bottom: 1px solid #e8e8e8;
`;
const LogoImg = styled.img`
  width: 7% !important;
  margin-right: 1rem;
`;
const JobVisibleSubInfo = styled.p`
  margin-top: 15px;
  margin-left: 0;
  font-size: 16px;
  color: #2b2b2b;
`;

const SubmitSection = styled.div`
  padding: 0 30px;
  max-width: 1440px;
  margin: 30px auto;
`;
const ButtonWrapper = styled.div`
  display: inline-block;

  margin-top: 2px;
  text-align: center;
  outline: 0;
`;
const SbtBtn = styled.input`
  margin: 0;
  color: #fff;
  padding: 10px 32px;
  padding: 0;
  display: inline-block;
  background: #1f8f75;
  width: 95px;
  height: 40px;
  outline: 0;
  font-size: 15px;
`;

export const PostForm = () => {
  const initial = {
    title: "",
    location: "",
    minExp: "",
    maxExp: "",
    description: "",
    category: "",
    functionalArea: "",
    minSalary: "",
    maxSalary: "",
    DND: "",
    batch: "",
    tag: "",
    type: "",
  };
  const history = useHistory();

  const [data, setData] = useState(initial);
  const [allData, setAllData] = useState([]);
  const fileInputRef = useRef();
  const [showList, setShowList] = useState(false);

  const handleChange = (e) => {
    let { name, value, checked, type, files } = e.target;

    if (type === "file") {
      let reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = (el) => {
        setData({ ...data, [name]: e.target.result });
      };
    }

    value = type === "checkbox" ? checked : value;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  const changeList = () => [setShowList(!showList)];

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    const request = {
      ...data,
    };
    const response = await api.post("/allData", request);
    setAllData([...allData, response]);
    history.push('/')
  };

  const {
    title,
    location,
    minExp,
    maxExp,
    description,
    category,
    functionalArea,
    minSalary,
    maxSalary,
    DND,
    batch,
    tag,
    type,
  } = data;
  return (
    <PageContent>
      <MainWrapper>
        <JobFormContent>
          <JobPost>
            <JobPostHeading>
              <h1>
                Great! Now let's fill other details to complete your job posting
              </h1>
            </JobPostHeading>
            <Form>
              <SectionHead>
                <SectionHeading>Basic Details</SectionHeading>
              </SectionHead>
              <FieldContainer>
                <Label>Job Title*</Label>
                <Input
                  name="title"
                  type="text"
                  placeholder="Write a title that appropriately describes this job"
                  onChange={handleChange}
                  value={title}
                ></Input>
              </FieldContainer>
              <FieldContainer>
                <Label>Location*</Label>
                <Input
                  name="location"
                  type="text"
                  placeholder="+ Add Location"
                  onChange={handleChange}
                  value={location}
                ></Input>
              </FieldContainer>
              <FieldContainer>
                <Label>Years of experience*</Label>
                <Field>
                  <select
                    // className={`${styles.half} ${styles.left}`}
                    className={styles.shortBox}
                    name="minExp"
                    onChange={handleChange}
                    value={minExp}
                  >
                    <option className={styles.extraInfoColor} value="">
                      Select Min
                    </option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                  </select>

                  <select
                    // className={`${styles.half} ${styles.left}`}
                    className={styles.shortBox}
                    name="maxExp"
                    onChange={handleChange}
                    value={maxExp}
                  >
                    <option className={`${styles.extraInfoColor}`} value="">
                      Select Max
                    </option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                  </select>
                </Field>
              </FieldContainer>

              <FieldContainer>
                <Label>Job Description*</Label>
                <InputDes
                  name="description"
                  type="text"
                  placeholder="Describe the role and responsibilities, skills required for the job and help the candidates understand the role better"
                  onChange={handleChange}
                  value={description}
                ></InputDes>
              </FieldContainer>
              <FieldContainer>
                <Label for="file">Showcase your brand</Label>
                <span className={`${styles.subHeading}`}>
                  Add a video to tell your brand's story and show candidates
                  what it is like to work at your company
                </span>
                <Filebutton
                  onClick={(event) => {
                    event.preventDefault();
                    fileInputRef.current.click();
                  }}
                >
                  {" "}
                  +Add video
                </Filebutton>
                <input
                  style={{ display: "none" }}
                  type={"file"}
                  ref={fileInputRef}
                />
              </FieldContainer>

              <div>
                <div
                  className={`${styles.youtubeFieldAccordian}`}
                  onClick={changeList}
                >
                  <div className={`${styles.text}`}>
                    {" "}
                    <i
                      className={`${styles.far} ${styles.faLightbulb}`}
                    ></i>{" "}
                    Ideas for videos that you can add{" "}
                    <i className={`${styles.iconDown_arrow}`}></i>{" "}
                  </div>
                  <div className={`${styles.moreText} ${styles.hidden}`}>
                    {showList && (
                      <ul>
                        <li>
                          <b>Introduction by the hiring manager:</b> They can
                          explain the job role, what the day-to-day
                          responsibilities are, who the candidate will be
                          working with, or who will a good fit for the role.
                        </li>
                        <li>
                          <b>Employee Testimonials:</b> Your potential
                          candidates can hear directly from your current
                          employees, about their experiences and their journey.
                        </li>
                        <li>
                          <b>Showcase company culture:</b> Talk about your
                          vision, what drives you, what's unique about your
                          company, and what benefits your offer!
                        </li>
                      </ul>
                    )}
                  </div>
                </div>
              </div>

              <SectionHead>
                <SectionHeading>Application</SectionHeading>
              </SectionHead>
              <FieldContainer>
                <Label for="file">Screening Questions</Label>
                <span className={styles.subHeading}>
                  You can ask some questions before the candidates apply to your
                  job!
                </span>
                <br />
                <Filebutton
                  onClick={(event) => {
                    event.preventDefault();
                  }}
                >
                  Add Question
                </Filebutton>
              </FieldContainer>

              <SectionHead>
                <SectionHeading>Targeting</SectionHeading>
              </SectionHead>
              <FieldContainer>
                <div
                  className={`${styles.formgroup} ${styles.half} ${styles.left}`}
                >
                  <Label for="category">Category*</Label>

                  <Select
                    name="category"
                    onChange={handleChange}
                    value={category}
                  >
                    <option className={`${styles.extraInfoColor}`} value="">
                      Select
                    </option>
                    <option value="Analytics Data Science">
                      Analytics Data Science
                    </option>
                    <option value="Mobile Applications">
                      Mobile Applications
                    </option>
                    <option value="DevOps">DevOps</option>
                    <option value="Frontend Developer">
                      Frontend Developer
                    </option>
                    <option value="Backend Developer">Backend Developer</option>
                    <option value="Emerging Technologies Roles">
                      Emerging Technologies Roles
                    </option>
                    <option value="UI Design">UI Design</option>
                    <option value="Quality Assurance">Quality Assurance</option>
                    <option value="Product Management Jobs">
                      Product Management Jobs
                    </option>
                    <option value="Enterprise - SAP/Oracle Jobs">
                      Enterprise - SAP/Oracle Jobs
                    </option>
                    <option value="Semiconductor/VLSI/EDA">
                      Semiconductor/VLSI/EDA
                    </option>
                    <option value="Business Analysis and Project Management">
                      Business Analysis and Project Management
                    </option>
                    <option value="Other Jobs">Other Jobs</option>
                    <option value="Finance">Finance</option>
                    <option value="Consulting">Consulting</option>
                    <option value="HR">HR</option>
                    <option value="IT Systems">IT Systems</option>
                    <option value="Operations">Operations</option>
                    <option value="Legal">Legal</option>
                    <option value="BPO">BPO</option>
                  </Select>
                  <div className={`${styles.error} ${styles.hidden} `}></div>
                </div>

                <div
                  className={`${styles.formgroup} ${styles.half} ${styles.left}`}
                >
                  <div className={styles.label}>
                    <Label for="functional_area">Functional Area*</Label>
                  </div>

                  <Select
                    onChange={handleChange}
                    value={functionalArea}
                    data-attribute="mandatory"
                    name="functionalArea"
                  >
                    <option className={styles.extraInfoColor} value="">
                      Select
                    </option>
                    <option value="Software Developer">
                      Software Developer
                    </option>
                    <option value="Technical Architect">
                      Technical Architect
                    </option>
                    <option value="Project Lead / Manager">
                      Project Lead / Manager
                    </option>
                    <option value="Product Manager">Product Manager</option>
                    <option value="QA Testing">QA Testing</option>
                    <option value="Design / Graphics">Design / Graphics</option>
                    <option value="Network Administrator">
                      Network Administrator
                    </option>
                    <option value="System Administrator">
                      System Administrator
                    </option>
                    <option value="Database Administrator (DBA)">
                      Database Administrator (DBA)
                    </option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Technical Writer">Technical Writer</option>
                    <option value="Business Analyst">Business Analyst</option>
                    <option value="Senior Management">Senior Management</option>
                    <option value="Other">Other</option>
                    <option value="Software Developer">
                      Software Developer
                    </option>
                    <option value="Technical Architect">
                      Technical Architect
                    </option>
                    <option value="Project Lead / Manager">
                      Project Lead / Manager
                    </option>
                    <option value="Product Manager">Product Manager</option>
                    <option value="QA Testing">QA Testing</option>
                    <option value="Design / Graphics">Design / Graphics</option>
                    <option value="Network Administrator">
                      Network Administrator
                    </option>
                    <option value="System Administrator">
                      System Administrator
                    </option>
                    <option value="Database Administrator (DBA)">
                      Database Administrator (DBA)
                    </option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Technical Writer">Technical Writer</option>
                    <option value="Business Analyst">Business Analyst</option>
                    <option value="Senior Management">Senior Management</option>
                    <option value="Other">Other</option>
                  </Select>
                  {/* <div id="functional_area-label" className={`${}`"error hidden"></div> */}
                </div>
                {/* <div className={`${}`"clearfix"></div> */}
              </FieldContainer>

              <FieldContainer>
                <div
                  className={`${styles.formgroup} ${styles.half} ${styles.left}`}
                >
                  <div className={styles.label}>
                    <Label for="category">Min Salary*</Label>
                  </div>

                  <Select
                    id="category"
                    name="minSalary"
                    onChange={handleChange}
                    value={minSalary}
                  >
                    <option value="Minimum salary">Min Salary(in lakhs)</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                    <option value="32">32</option>
                    <option value="33">33</option>
                    <option value="34">34</option>
                    <option value="35">35</option>
                    <option value="36">36</option>
                    <option value="37">37</option>
                    <option value="38">38</option>
                    <option value="39">39</option>
                    <option value="40">40</option>
                    <option value="41">41</option>
                    <option value="42">42</option>
                    <option value="43">43</option>
                    <option value="44">44</option>
                    <option value="45">45</option>
                    <option value="46">46</option>
                    <option value="47">47</option>
                    <option value="48">48</option>
                    <option value="49">49</option>
                    <option value="50">50</option>
                    <option value="51">51</option>
                    <option value="52">52</option>
                    <option value="53">53</option>
                    <option value="54">54</option>
                    <option value="55">55</option>
                    <option value="56">56</option>
                    <option value="57">57</option>
                    <option value="58">58</option>
                    <option value="59">59</option>
                    <option value="60">60</option>
                    <option value="61">61</option>
                    <option value="62">62</option>
                    <option value="63">63</option>
                    <option value="64">64</option>
                    <option value="65">65</option>
                    <option value="66">66</option>
                    <option value="67">67</option>
                    <option value="68">68</option>
                    <option value="69">69</option>
                    <option value="70">70</option>
                    <option value="71">71</option>
                    <option value="72">72</option>
                    <option value="73">73</option>
                    <option value="74">74</option>
                    <option value="75">75</option>
                    <option value="76">76</option>
                    <option value="77">77</option>
                    <option value="78">78</option>
                    <option value="79">79</option>
                    <option value="80">80</option>
                    <option value="81">81</option>
                    <option value="82">82</option>
                    <option value="83">83</option>
                    <option value="84">84</option>
                    <option value="85">85</option>
                    <option value="86">86</option>
                    <option value="87">87</option>
                    <option value="88">88</option>
                    <option value="89">89</option>
                    <option value="90">90</option>
                    <option value="91">91</option>
                    <option value="92">92</option>
                    <option value="93">93</option>
                    <option value="94">94</option>
                    <option value="95">95</option>
                    <option value="96">96</option>
                    <option value="97">97</option>
                    <option value="98">98</option>
                    <option value="99">99</option>
                    <option value="100">100</option>
                    <option value="101">100+</option>
                  </Select>
                  <div
                    id="category-label"
                    className={`${styles.error} ${styles.hidden} `}
                  ></div>
                </div>

                <div
                  className={`${styles.formgroup} ${styles.half} ${styles.left}`}
                >
                  <div className={styles.label}>
                    <Label for="functional_area">Max Salary*</Label>
                  </div>

                  <Select
                    onChange={handleChange}
                    value={maxSalary}
                    data-attribute="mandatory"
                    name="maxSalary"
                  >
                    <option value="Maximum salary">Max Salary(in lakhs)</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                    <option value="32">32</option>
                    <option value="33">33</option>
                    <option value="34">34</option>
                    <option value="35">35</option>
                    <option value="36">36</option>
                    <option value="37">37</option>
                    <option value="38">38</option>
                    <option value="39">39</option>
                    <option value="40">40</option>
                    <option value="41">41</option>
                    <option value="42">42</option>
                    <option value="43">43</option>
                    <option value="44">44</option>
                    <option value="45">45</option>
                    <option value="46">46</option>
                    <option value="47">47</option>
                    <option value="48">48</option>
                    <option value="49">49</option>
                    <option value="50">50</option>
                    <option value="51">51</option>
                    <option value="52">52</option>
                    <option value="53">53</option>
                    <option value="54">54</option>
                    <option value="55">55</option>
                    <option value="56">56</option>
                    <option value="57">57</option>
                    <option value="58">58</option>
                    <option value="59">59</option>
                    <option value="60">60</option>
                    <option value="61">61</option>
                    <option value="62">62</option>
                    <option value="63">63</option>
                    <option value="64">64</option>
                    <option value="65">65</option>
                    <option value="66">66</option>
                    <option value="67">67</option>
                    <option value="68">68</option>
                    <option value="69">69</option>
                    <option value="70">70</option>
                    <option value="71">71</option>
                    <option value="72">72</option>
                    <option value="73">73</option>
                    <option value="74">74</option>
                    <option value="75">75</option>
                    <option value="76">76</option>
                    <option value="77">77</option>
                    <option value="78">78</option>
                    <option value="79">79</option>
                    <option value="80">80</option>
                    <option value="81">81</option>
                    <option value="82">82</option>
                    <option value="83">83</option>
                    <option value="84">84</option>
                    <option value="85">85</option>
                    <option value="86">86</option>
                    <option value="87">87</option>
                    <option value="88">88</option>
                    <option value="89">89</option>
                    <option value="90">90</option>
                    <option value="91">91</option>
                    <option value="92">92</option>
                    <option value="93">93</option>
                    <option value="94">94</option>
                    <option value="95">95</option>
                    <option value="96">96</option>
                    <option value="97">97</option>
                    <option value="98">98</option>
                    <option value="99">99</option>
                    <option value="100">100</option>
                    <option value="101">100+</option>
                  </Select>
                </div>
              </FieldContainer>

              {/* check box */}
              <div style={{ display: "block", clear: "both" }}>
                <input type="checkbox" onChange={handleChange} value={DND} />
                <Label for="salary_show">
                  <span>Don't show this to candidates</span>
                </Label>
              </div>

              <FieldContainer>
                <div
                  className={`${styles.formgroup} ${styles.half} ${styles.left}`}
                >
                  <div className={styles.label}>
                    <Label for="category">Graduation Year</Label>
                  </div>

                  <Select name="batch" onChange={handleChange} value={batch}>
                    <option value="">Batch</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                    <option value="2009">2009</option>
                    <option value="2008">2008</option>
                    <option value="2007">2007</option>
                    <option value="2006">2006</option>
                    <option value="2005">2005</option>
                    <option value="2004">2004</option>
                    <option value="2003">2003</option>
                    <option value="2002">2002</option>
                    <option value="2001">2001</option>
                    <option value="2000">2000</option>
                    <option value="1999">1999</option>
                    <option value="1998">1998</option>
                    <option value="1997">1997</option>
                    <option value="1996">1996</option>
                    <option value="1995">1995</option>
                    <option value="1994">1994</option>
                    <option value="1993">1993</option>
                    <option value="1992">1992</option>
                    <option value="1991">1991</option>
                    <option value="1990">1990</option>
                    <option value="1989">1989</option>
                    <option value="1988">1988</option>
                    <option value="1987">1987</option>
                    <option value="1986">1986</option>
                    <option value="1985">1985</option>
                    <option value="1984">1984</option>
                    <option value="1983">1983</option>
                    <option value="1982">1982</option>
                    <option value="1981">1981</option>

                    <option value="1980">1980</option>
                    <option value="1979">1979</option>
                    <option value="1978">1978</option>
                    <option value="1977">1977</option>
                    <option value="1976">1976</option>
                    <option value="1975">1975</option>
                    <option value="1974">1974</option>
                    <option value="1973">1973</option>
                    <option value="1972">1972</option>
                    <option value="1971">1971</option>
                    <option value="1970">1970</option>
                  </Select>
                  <div
                    id="category-label"
                    className={`${styles.error} ${styles.hidden} `}
                  ></div>
                </div>
              </FieldContainer>
              <br />

              <FieldContainer style={{ clear: "both" }}>
                <Label>Tags</Label>
                <SelectTag
                  type="tag"
                  onChange={handleChange}
                  value={tag}
                ></SelectTag>
              </FieldContainer>

              <FieldContainer style={{ display: "flex" }}>
                <div>
                  <div className={`${styles.courseOption} ${styles.fullTime} `}>
                    <input type="checkbox" id="course-type-full-time" />
                    <label
                      for="course-type-full-time"
                      className={styles.crsLabel}
                    >
                      <div className={styles.courseContent}>
                        <span className={styles.courseIcon}>
                          <img src="/full-time-job.png" alt="" />
                        </span>
                        <span className={styles.courseOptionLabel}>
                          Full time
                        </span>
                      </div>
                      <span className={styles.courseSelected}>
                        <i className={styles.iconCheckedIcon}></i>
                      </span>
                    </label>
                  </div>
                </div>

                <div>
                  <div className={`${styles.courseOption} ${styles.partTime}`}>
                    <input
                      type="checkbox"
                      id="course-type-part-time"
                      data-id="2"
                    />
                    <label
                      for="course-type-part-time"
                      className={styles.crsLabel}
                    >
                      <div className={styles.courseContent}>
                        <span class="course-icon">
                          <img src="/002-part-time.png" alt="" />
                        </span>
                        <span class="course-option-label">Part time</span>
                      </div>
                      <span class="course-selected">
                        <i class="icon-checked_icon"></i>
                      </span>
                    </label>
                  </div>
                </div>
                <div>
                  <div
                    className={`${styles.courseOption} ${styles.distanceLearning}`}
                  >
                    <input
                      type="checkbox"
                      id="course-type-distance-learning"
                      data-id="3"
                    />
                    <label
                      for="course-type-distance-learning"
                      className={styles.crsLabel}
                    >
                      <div className={styles.courseContent}>
                        <span class="course-icon">
                          <img src="/full-time-job.png" alt="" />
                        </span>
                        <span class="course-option-label">
                          Distance Learning Program
                        </span>
                      </div>
                      <span class="course-selected">
                        <i class="icon-checked_icon"></i>
                      </span>
                    </label>
                  </div>
                </div>
              </FieldContainer>

              <FieldContainer style={{ display: "flex" }}>
                <div>
                  <div
                    className={`${styles.courseOption} ${styles.exicutiveLearning}`}
                  >
                    <input type="checkbox" data-id="4" />
                    <label
                      for="course-type-executive-learning"
                      className={styles.crsLabel}
                    >
                      <div className={styles.courseContent}>
                        <span class="course-icon">
                          <img
                            src="/004-businessman.png"
                            alt="executve program"
                          />
                        </span>
                        <span class="course-option-label">
                          Executive Program
                        </span>
                      </div>
                      <span class="course-selected">
                        <i class="icon-checked_icon"></i>
                      </span>
                    </label>
                  </div>
                </div>
                <div>
                  <div
                    className={`${styles.courseOption} ${styles.distanceLearning}`}
                  >
                    <input type="checkbox" data-id="5" />
                    <label className={styles.crsLabel}>
                      <div className={styles.courseContent}>
                        <span class="course-icon">
                          <img src="/005-document.png" alt="" />
                        </span>
                        <span class="course-option-label">
                          Distance Learning Program
                        </span>
                      </div>
                      <span class="course-selected">
                        <i class="icon-checked_icon"></i>
                      </span>
                    </label>
                  </div>
                </div>
              </FieldContainer>
              <PremiumSection>
                <PremiumContant>
                  <JobVisibleHead>
                    <LogoImg
                      src="https://recruit.hirist.com/static/images/visiblity.svg"
                      alt="logo"
                    />
                    <h3>Boost your Job's Visibility</h3>
                  </JobVisibleHead>
                  <JobVisibleSubInfo>
                    Premium Postings are promoted amongst the jobseekers! Get
                    20x more visibility by making your job premium!
                  </JobVisibleSubInfo>
                  <div class="contents">
                    <input
                      type="checkbox"
                      id="isPremium"
                      name="premium"
                      value="0"
                      disabled="disabled"
                    />
                    <Label for="isPremium" id="planDeactivatedToolTipJobsPage">
                      <span>Make Job 'Premium'</span>
                    </Label>
                    <p class="" id="creditsText">
                      <span
                        id="creditsBuy"
                        style={{ color: "#155d9a", cursor: "pointer" }}
                      >
                        Buy Premium Credits <i class="icon-down_arrow"></i>
                      </span>
                    </p>
                    <span
                      style={{ display: "inline-block", marginTop: "8px" }}
                      class="premiumCreditsJobsPage "
                    >
                      <div
                        id="expireCreditsLabelsJobsPage"
                        class="theme-light"
                      ></div>
                    </span>
                  </div>
                </PremiumContant>
              </PremiumSection>
              <SubmitSection>
                <ButtonWrapper>
                  <SbtBtn type="submit" value="Post Job" onClick={onSubmit} />
                </ButtonWrapper>
              </SubmitSection>
            </Form>
          </JobPost>
        </JobFormContent>
        <PostDetails></PostDetails>
      </MainWrapper>
      <Bottom />
    </PageContent>
  );
};
