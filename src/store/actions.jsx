import {

    JOBS_REQUEST,
    JOBS_SUCCESS,
    JOBS_FAILURE,

} from "./actionsType";
import axios from "axios";
import { useSelector, shallowEqual } from "react-redux";


const jobsRequest = () => {
    return {
        type: JOBS_REQUEST,
    };
};
const jobsSuccess = (payload, currPage, query) => {
    return {
        type: JOBS_SUCCESS,
        payload: payload,
        currPage,
        query
    };
};
const jobsFailure = (err, currPage, query) => {
    return {
        type: JOBS_FAILURE,
        payload: err,
        currPage,
        query
    };
};

export const getAllJobs = (query = null) => dispatch => {
    const requestAction = jobsRequest();
    console.log("hello from actions")
    dispatch(requestAction);
    if (!query) {
        const failureAction = jobsFailure("no results");
        dispatch(failureAction);
    }
    return axios.get(`http://localhost:8000/data?q=${query}`)
        .then((res) => {
            dispatch(jobsSuccess(res.data, query));
        })
        .catch((err) => {
            const failureAction = jobsFailure(err, query);
            dispatch(failureAction);
        });
};
export const getDebouncing = (query = null) => dispatch => {
    const requestAction = jobsRequest();
    console.log("hello from actions")
    dispatch(requestAction);
    if (!query) {
        const failureAction = jobsFailure("no results");
        dispatch(failureAction);
    }
    return axios.get(`http://localhost:8000/jobsData?q=${query}`)
        .then((res) => {
            dispatch(jobsSuccess(res.data, query));
        })
        .catch((err) => {
            const failureAction = jobsFailure(err, query);
            dispatch(failureAction);
        });
};
export const getById = (query = null) => dispatch => {
    const requestAction = jobsRequest();
    console.log("hello from actions")
    dispatch(requestAction);
    if (!query) {
        const failureAction = jobsFailure("no results");
        dispatch(failureAction);
    }
    return axios.get(`http://localhost:8000/data/?id=${query}`)
        .then((res) => {
            dispatch(jobsSuccess(res.data, query));
        })
        .catch((err) => {
            const failureAction = jobsFailure(err, query);
            dispatch(failureAction);
        });
};

// export const priceFilter = (payload, query, filterType = 'price') => dispatch => {
//     dispatch(jobsRequest());
//     if (query === null) {
//         axios.get(`/MainData`).then((res) => {
//             let { data } = res;
//             let filtered;
//             if (filterType === 'price') {
//                 filtered = data.filter(item => item.deals[0] <= payload);
//             } else if (filterType === 'rating') {
//                 filtered = data.filter(item => item.star >= payload);
//             } else if (filterType === 'star') {
//                 filtered = data.filter(item => item.star === payload);
//             }
//             dispatch(hotelSuccess(filtered, 1, query));
//         }).catch(err => {
//             dispatch(jobsFailure(err, 1, query));
//         })
//     } else {
//         axios.get(`/MainData?q=${query}`).then((res) => {
//             let { data } = res;
//             let filtered;
//             if (filterType === 'price') {
//                 filtered = data.filter(item => item.deals[0] <= payload);
//             } else if (filterType === 'rating') {
//                 filtered = data.filter(item => item.star >= payload);
//             } else if (filterType === 'star') {
//                 filtered = data.filter(item => item.star === payload);
//             }
//             dispatch(hotelSuccess(filtered, 1, query));
//         }).catch(err => {
//             dispatch(jobsFailure(err, 1, query));
//         })
//     }

// }




// export const sortHotelData = (query, sortType = 'price') => dispatch => {
//     dispatch(hotelRequest());

//     if (query === null) {
//         axios.get(`/MainData`).then((res) => {
//             let { data } = res;
//             let sorted;
//             if (sortType === 'price') {
//                 sorted = [...data].sort((a, b) => a.deals[0] - b.deals[0])
//             } else if (sortType === 'rating') {
//                 sorted = [...data].sort((a, b) => b.star - a.star);
//             } else {
//                 sorted = data;
//             }
//             dispatch(hotelSuccess(sorted, 1, query));
//         }).catch(err => {
//             dispatch(hotelFailure(err, 1, query));
//         })
//     } else {
//         axios.get(`/MainData?q=${query}`).then((res) => {
//             let { data } = res;
//             let sorted;
//             if (sortType === 'price') {
//                 sorted = [...data].sort((a, b) => a.deals[0] - b.deals[0])
//             } else if (sortType === 'rating') {
//                 sorted = [...data].sort((a, b) => b.star - a.star);
//             } else {
//                 sorted = data;
//             }
//             dispatch(hotelSuccess(sorted, 1, query));
//         }).catch(err => {
//             dispatch(hotelFailure(err, 1, query));
//         })
//     }


// }