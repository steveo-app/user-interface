import axios from 'axios';

// export action types

export const REGISTERING_USER = 'REGISTERING_USER';
export const REGISTERED_USER = 'REGISTERED_USER';
export const FAILED_REGISTER = 'FAILED_REGISTER';
export const ADD_LOCATION = 'ADD_LOCATION';
export const ADD_HOLES = 'ADD_HOLES';

export function registerUser(payload) {

  /* register data here */

  return dispatch => {

      dispatch({ type: REGISTERING_USER });

      return axios.post(`https://steveo-server.herokuapp.com/api/users/register/`, payload)
        .then((response) => {
          dispatch({ type: REGISTERED_USER, payload: response.data });
        })
  
        .catch((error) => {
          console.log(error)
          dispatch({ type: FAILED_REGISTER, payload: error })
        })
  
        }
}

export function addLocation(location) {

  return dispatch => {

    dispatch({ type: ADD_LOCATION, payload: location })
  }
}

export function addHoles(holes) {

  return dispatch => {

    dispatch({ type: ADD_HOLES, payload: holes })
  }
}