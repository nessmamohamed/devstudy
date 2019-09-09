import {combineReducers} from 'redux'
import authReducer from './authReducer'
import errorReducer from './errorReducer'
import msgReducer from './msgReducer'


export default combineReducers({
  auth: authReducer,
  error: errorReducer,
  message: msgReducer
})
