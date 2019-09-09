import {CLEAR_ERRORS, GET_ERRORS} from './types'


export const returnError = (msg, status, id= null)=>{
       return{
           type: GET_ERRORS,
           payload: {msg, status, id}
       }
}

export const clearError = ()=>{
    return{
        type: CLEAR_ERRORS
    }
}