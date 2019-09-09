import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';

let socket = io(process.env.PORT);
let socketIoMiddleware = createSocketIoMiddleware(socket, "server/");

const Middleware = [thunk],
      initState = {}


const store = createStore(rootReducer, initState, compose(
    applyMiddleware(...Middleware, socketIoMiddleware)
    ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    
))



 

export default store ;