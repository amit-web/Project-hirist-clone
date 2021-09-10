import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import styled from "styled-components";
import { shallowEqual, useSelector } from "react-redux";

const useStyles = makeStyles({
    root: {
        position: "absolute",
        width: "322px",
        boxShadow: "1px 1px 14px black",
        zIndex: "12",
        left: "24.3rem",
        top: "12.8rem",
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)",
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function DebouncingCard({ jobsCatArr, setSearchtext, setBouncing }) {
    const { jobsData } = useSelector((state) => state.activities, shallowEqual);


    if (jobsData.length === 0) {
        setBouncing(true)
    }
    const classes = useStyles();
    // useEffect(() => {
    //     console.log(debouncing, "hello from debouncing")
    // }, [debouncing])

    // console.log(jobsData)
    return (
        <Card className={classes.root}>
            <CardContent>
                <CardStyled>
                    <div>
                        {jobsData.map((el) => {
                            return <div onClick={(e) => {
                                setSearchtext(e.target.textContent)
                                setBouncing(true)
                            }}>{el.jobs}</div>;
                        })}
                    </div>
                </CardStyled>
            </CardContent>
        </Card>
    );
}
const CardStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: start;
  justify-content: start;
  row-gap: 1rem;
  & > div {
    & > div {
      height: 2rem;
      padding-left: 1rem;
      cursor: pointer;
      padding-top: 0.5rem;
      :hover{
          background-color:rgb(239,243,250);
      }
    }
  }
`;
