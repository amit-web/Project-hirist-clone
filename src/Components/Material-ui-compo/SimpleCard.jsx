import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { useContext } from "react";
import CardContent from "@material-ui/core/CardContent";
import styled from 'styled-components';
import { SearchDataContext } from "../../Context/searchDataContext";
const useStyles = makeStyles({
    root: {
        minWidth: 275,
        backgroundColor: "rgb(242,245,250)",
        width: "100%",
        height: "100%",


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

export default function SimpleCard({ jobsCatArr }) {
    const { handleSearchData } = useContext(SearchDataContext)
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <CardStyled>
                    <div className="rightContent">
                        <div onClick={(e) => {
                            handleSearchData(e.target.textContent)
                        }}>{jobsCatArr[0]}</div>
                        <div onClick={(e) => {
                            handleSearchData(e.target.textContent)
                        }}>{jobsCatArr[1]}</div>
                        <div onClick={(e) => {
                            handleSearchData(e.target.textContent)
                        }}>{jobsCatArr[2]}</div>
                    </div>
                    <div className="leftContent">
                        <div onClick={(e) => {
                            handleSearchData(e.target.textContent)
                        }}>{jobsCatArr[3]}</div>
                        <div onClick={(e) => {
                            handleSearchData(e.target.textContent)
                        }}>{jobsCatArr[4]}</div>
                        <div onClick={(e) => {
                            handleSearchData(e.target.textContent)
                        }}>{jobsCatArr[5]}</div>
                    </div>
                </CardStyled>
            </CardContent>
        </Card>
    );
}
const CardStyled = styled.div`
width: 100%;
height: 100%;
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 2rem;
  background-color:rgb(242,245,250);
.rightContent,.leftContent{
    display: flex;
    flex-direction: column;
    row-gap:1rem;
    &>div{
        height: 2rem;
        background-color:rgb(242,245,250);
        :hover {
            background-color:#fff;
            cursor: pointer;
        }
    }
}

`