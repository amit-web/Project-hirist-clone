import React from 'react'
import styled from 'styled-components'

const GuidCont = styled.div`
    display: inline-block;
    width: 30%;
    vertical-align: top;
    background-color: #f3fbfb;
    padding: 20px;
    margin-top: 50px;
`;
const GuidH4 = styled.h4`
  font-size: 18px;
  color: #149075;
  margin-top: 0;
  padding-top: 10px;
`;
const GuidUl = styled.ul`
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
`;
export const PostDetails = () => {
    return (
      <GuidCont>
        <GuidH4>Few guidelines</GuidH4>

        <GuidUl>
          <li>
            Proper formatting of the text/content of the posting with clear
            spaces and standard bullets (-) to be used.
          </li>
          <li>No short forms/abbreviations to be used in the text.</li>
          <li>Correct mail ID to be included at the end of the posting.</li>
          <li>No spelling mistakes in the content.</li>
          <li>JD should be concise and crisp - to the point.</li>
        </GuidUl>
      </GuidCont>
    );
}
