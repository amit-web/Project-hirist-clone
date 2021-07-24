import React from 'react'
import styled from "styled-components"
import { useFormik } from "formik"
import * as yup from "yup"
import { useState } from 'react'
import { v4 as uuid } from "uuid"
import api from "../../../src/api/Contact"


const RegiContainer = styled.div`
display:flex;
width:100%;
position:absolute;
`
const LeftDiv = styled.div`
height:100vh;
width:33%;
background: url("https://job-static.hirist.com/V2/static/media/login_bkg.9cb0156b.jpg");
background-position: top;
position: relative;
background-position-x: 0;
color:#fff;
`
const LogoImg = styled.img`
margin:10vh auto;
position: relative;
margin-left:30%;
align-items:center;
`
const LeftHeading = styled.h2`
word-spacing:1px;
margin:1% 7%;
text-align:center;
`
const PDetail = styled.p`
font-weight: 400;
line-height: 1.69;
font-size: 16px;
text-align:center;
`
const CompanyList = styled.div`
font-size: 16px;
font-weight: 400;
line-height: 1.69;
text-align: center;
margin-top:27vh;
p {
    display: block;
    -webkit-margin-before: 1em;
    margin-block-start: 1em;
    -webkit-margin-after: 1em;
    margin-block-end: 1em;
    -webkit-margin-start: 0;
    margin-inline-start: 0;
    -webkit-margin-end: 0;
    margin-inline-end: 0;
}
`

const CompanyLogos = styled.div`
display:flex;
`
const RightDiv = styled.div`
width:50%;
height:100vh;
position:relative;
margin-left:5%;
`

const TopBtn = styled.button`
width: auto;
height: 48px;
position: absolute;
right: 130px;
top: 50px;
margin: 0;
padding: 11px 12px 11px 14px;
border-radius: 24px;
border: 1px solid #fceecf;
background-color: #fffbf1;
cursor: pointer;
outline: none;
`
const BtnImg = styled.img`
width:15%;
position:relative;
left:-10%;
max-height:90%;
`

const SpanBtnText = styled.span`
margin: -3px 13px 3px 7px;
font-family: Nunito Sans;
font-size: 17px;
font-weight: 500;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: normal;
color: #e9630c;
position:relative;
top:-12%;
`
const AuthCont = styled.form`
position:relative;
    margin: 110px auto 0;
    width: 65%;

`
const AuthHeading = styled.h1`
font-weight:170;
font-size:45px;
word-spacing:6px;
`
const AuthB = styled.b`
    font-size: 26px;
    color: #000;
    display: block;
    font-weight: 700;
    
`

const FieldContainer = styled.div`
margin-top: 25px;
width: 100%;
`
const FieldLabel = styled.label`
display: block;
opacity: .8;
font-size: 14px;
font-weight: 700;
color: #000;
margin-bottom: 5px;
`
const FieldInp = styled.input`
width: 100%;
display: block;
height: 40px;
border-radius: 4px;
border: 2px solid #e6e6e6;
background-color: #fff;
font-size: 16px;
outline: none;
padding: 10px 10px;
`
const SubBtn = styled.button`
    position: relative;
    margin-top: 45px;
    width: 100%;
    height: 60px;
    border-radius: 8px;
    background-color: #e9630c;
    font-size: 20px;
    font-weight: 400;
    color: #fff;
    border: 0;
    outline: 0;
`
const PSpan = styled.span`
    font-weight: 700;
    color: #e9630c;
    cursor: pointer;
`
const FieldContainer2 = styled.div`
width:100%;
display:flex;
flex-direction:column;
`

const FieldError = styled.span`
color:#db2222;
font-size:11px;
min-height:10px;
`


export const LoginForm = () => {
    const [userData, setUserData] = useState([])
    const [loginData, setLoginData] = useState()

    const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    const validationSchema = yup.object({
        email: yup.string().email("please Enter a valid email address").required(),
        password: yup.string().matches(PASSWORD_REGEX, "Please enter a strong password").required(),

    })

    const onSubmit = async (value) => {
        setLoginData(value)
        const response = await api.get("/userLogin")
        const { data } = response
        setUserData(data)
        checkValidation(userData, loginData)
    }

    const checkValidation = (userData, loginData) => {
        userData.map((e) => {
            if (e.email === loginData.email && e.password === loginData.password) {
                alert("ok")
                return
            } else {
                alert("Enter a valid id or password")
                return
            }
        })
    }

    const formik = useFormik({
        initialValues: { email: "", password: "", },
        validateOnBlur: true,
        onSubmit,
        validationSchema: validationSchema,
    })

    console.log("Error", formik.errors);
    const { email, password } = formik.errors
    return (
        <RegiContainer>
            <LeftDiv>
                <LogoImg src="data:image/png;base64,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" alt="logo">
                </LogoImg>
                <LeftHeading>
                    Choose a job you love, and you never have to work a day in your life
                </LeftHeading>
                <PDetail>
                    - Confucius
                </PDetail>
                <CompanyList>
                    <p>Companies you might love to work with</p>
                </CompanyList>
                <CompanyLogos>
                    <a style={{ marginLeft: "6%" }}>
                        <img src="https://hirist-logos.s3.ap-south-1.amazonaws.com/Amazon+Login.png" alt="Amazon" />

                    </a>
                    <a style={{ marginLeft: "6%" }}>
                        <img src="https://hirist-logos.s3.ap-south-1.amazonaws.com/Amex+Login.png" alt="Amazon" />
                    </a>
                    <a style={{ marginLeft: "6%" }}>
                        <img src="https://hirist-logos.s3.ap-south-1.amazonaws.com/Zycus+Login.png" alt="Amazon" />
                    </a>
                </CompanyLogos>

            </LeftDiv>
            <RightDiv>

                <TopBtn>
                    <BtnImg src="data:image/png;base64,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" />
                    <SpanBtnText>Download App</SpanBtnText>
                </TopBtn>

                <AuthCont onSubmit={formik.handleSubmit}>
                    <AuthHeading>
                        <AuthB>Welcome Guest,</AuthB>
                        Sign up for Hirist
                    </AuthHeading>

                    <FieldContainer>
                        <FieldContainer2>
                            <FieldLabel for="email" >Email Address</FieldLabel>
                            <FieldInp type="text" placeholder="you@example.com" name="email"
                                value={formik.values.email}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange} />
                            <FieldError>{formik.touched.email && formik.errors.email ? email : ""}</FieldError>
                        </FieldContainer2>
                    </FieldContainer>
                    <FieldContainer>
                        <FieldContainer2>
                            <FieldLabel for="password" >Password</FieldLabel>
                            <FieldInp type="password" placeholder="Enter 8 character or more" name="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            <FieldError>{formik.touched.password && formik.errors.password ? password : ""}</FieldError>
                        </FieldContainer2>
                    </FieldContainer>

                    <SubBtn type="submit">
                        Continue
                    </SubBtn>
                </AuthCont>

                <p style={{
                    marginLeft: "0",
                    textAlign: "center",
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "#7e7e7e"
                }}>Already have an account?
                    <PSpan>Sign In</PSpan></p>
            </RightDiv>
        </RegiContainer>
    )
}
