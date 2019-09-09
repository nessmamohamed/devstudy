import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';

let socket = io(process.env.PORT);
let socketIoMiddleware = createSocketIoMiddleware(socket, "server/");

const Middleware = [thunk],
      initState = {}

      
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, initState, composeEnhancers(
  
        applyMiddleware(...Middleware, socketIoMiddleware)
      ));





 

export default store ;