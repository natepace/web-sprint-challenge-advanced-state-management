import axios from 'axios';

export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE';
export const ADD_SMURF = 'ADD_SMURF';
export const SMURF_ERROR = 'SMURF_ERROR';
export const fetchSmurfs = () => {
    return (dispatch) => {
        dispatch({type:FETCH_SMURF_START})
        axios
            .get('http://localhost:3333/smurfs')
            .then((res)=> {
                dispatch({type: FETCH_SMURF_SUCCESS, payload: res.data});
            })
            .catch((err)=>{
                console.log(err.message);
                dispatch({type: FETCH_SMURF_FAILURE, payload: err.message});
            })
    }
}

export const errorMessage = (error) => {
    return {type: SMURF_ERROR, payload: error}
}

export const addSmurf = (newSmurf) =>(dispatch) => {
    dispatch({type:ADD_SMURF, payload:newSmurf})
    axios
    .post('http://localhost:3333/smurfs', newSmurf)
    .then((res)=> {

    })
    .catch((err)=>{
        console.log(err)
    });
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.