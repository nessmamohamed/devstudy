import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAILED
  } from './types';

  import axios from 'axios'

  import {returnError} from './errorActions'

  //load user
  export const loadUser = () => (dispatch, getState) => {
    // User loading
    dispatch({ type: USER_LOADING });
  
    axios.get('http://localhost:5000/api/auth', tokenConfig(getState))
      .then(res =>
        dispatch({
          type: USER_LOADED,
          payload: res.data
        })
      )
      .catch(err => {
        dispatch(returnError(err.response.data, err.response.status));
        dispatch({
          type: AUTH_ERROR
        });
      });
  };

  // register 

  export const registerUser =({name , email, password})=> (dispatch)=>{
    const config ={
      headers: {
        "content-type": "application/json"
      }
    }

    const body = JSON.stringify({name, email, password})

    axios.post('http://localhost:5000/api/user', body, config)
    .then(res => dispatch({
      type: REGISTER_SUCCESS, 
      payload: res.data
    })
    ).catch(err => {
      dispatch(returnError(err.response.data, err.response.status, 'register failed'))
         dispatch({
           type: REGISTER_FAILED
         })
    })

  }

    //login
    export const loginUser = ({email, password})=> (dispatch)=>{
      const config ={
        headers: {
          "content-type": "application/json"
        }
      }

      const body = JSON.stringify({email, password}) 

      axios.post('http://localhost:5000/api/auth', body, config)
      .then(res => dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      }) )
      .catch(err => {
        dispatch(returnError(err.response.data, err.response.status, 'login failed'))
        dispatch({
          type:LOGIN_FAILED
        })
      })
      }

      //logout

      export const logout =()=>{
        return{
          type: LOGOUT_SUCCESS
        }
      }


      export const tokenConfig = getState => {
        // Get token from localstorage
        const token = getState().auth.token;
      
        // Headers
        const config = {
          headers: {
            'Content-type': 'application/json'
          }
        };
      
        // If token, add to headers
        if (token) {
          config.headers['x-auth-token'] = token;
        }
      
        return config 
      } 