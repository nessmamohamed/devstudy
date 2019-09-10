
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAILED
  } from '../actions/types';

  const initState={
      token: localStorage.getItem('token'),
      isAuthenticated: false,
      isLoading: false,
      user: false,
      registerSuccess: false
  }

  export default function(state = initState, action){
      switch(action.type){
          case USER_LOADING:
              return {
                  ...state,
                  isLoading: true
              }
              case USER_LOADED:
                  return{
                      ...state,
                      isLoading: false,
                      isAuthenticated: true,
                      user: action.payload
                  }
                case LOGIN_SUCCESS:
                        localStorage.setItem('token', action.payload.token)
                        return{
                            ...state,
                            ...action.payload,
                            isLoading:false,
                            isAuthenticated: true
                        }

                case REGISTER_SUCCESS:
                    localStorage.setItem('token', action.payload.token)
                    return{
                        ...state,
                        ...action.payload,
                        isLoading:false,
                        isAuthenticated: true,
                        registerSuccess: true
                    }
                case REGISTER_FAILED:
                        localStorage.removeItem('token')  
                        return{
                            ...state,
                            isLoading:false,
                            isAuthenticated: false,
                            user: false,
                            token: null,
                            registerSuccess: false
                        } 
                case LOGIN_FAILED:
                case AUTH_ERROR: 
                case LOGOUT_SUCCESS:
                    localStorage.removeItem('token')  
                    return{
                        ...state,
                        isLoading:false,
                        isAuthenticated: false,
                        user: false,
                        token: null
                    } 
                    default: 
                    return state               
      }              
  }