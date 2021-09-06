import {
    JOBS_REQUEST,
    JOBS_SUCCESS,
    JOBS_FAILURE,
} from "./actionsType";
const initState = {
    data: [],
    isLoading: false,
    isError: false,
    jobsData: [],
    jobsLoad: false,
    jobsErr: false,
    currPage: 1,
    currQuery: null
};

export const RecentlyReducer = (state = initState, { type, payload, currPage, query }) => {

    switch (type) {
        case JOBS_REQUEST: {

            return {
                ...state,
                jobsLoad: true,
            };
        }
        case JOBS_SUCCESS: {

            return {
                ...state,
                jobsLoad: false,
                jobsData: payload,
                currPage: currPage,
                query: query

            };
        }
        case JOBS_FAILURE: {
            return {
                ...state,
                jobsLoad: false,
                jobsErr: true,
                currPage: currPage,
                query: query
            };
        }
        default:
            return state;
    }
};
