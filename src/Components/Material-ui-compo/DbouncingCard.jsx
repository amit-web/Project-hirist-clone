import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { useContext } from "react";
import CardContent from "@material-ui/core/CardContent";
import styled from 'styled-components';
import { SearchDataContext } from "../../Context/searchDataContext";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles({
    root: {
        position: "absolute",
        width: "300px",
        height: "auto",
        border: "1px solid red",
        zIndex: "12",
        left: "25rem",
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

export default function DebouncingCard({ jobsCatArr }) {

    const { jobsData } = useSelector((state) => state.activities, shallowEqual);
    const { handleSearchData } = useContext(SearchDataContext)
    const classes = useStyles();
    console.log(jobsData)
    return (
        <Card className={classes.root}>
            <CardContent>
                <CardStyled>
                    <div>
                        {jobsData.map((el) => {

                            return <div>{el.jobs}</div>
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
&>div{
    padding-left: 1rem;
}

`