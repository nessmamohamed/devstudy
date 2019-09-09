import {SEND_MSG} from '../actions/types'

const initState ={
    messages : []
}
export default function(state = initState , action){
    switch(action.type){
        case SEND_MSG:
            return {
                
                messages: [ ...state.messages,
                           {id : action.id,
                            recieverId: action.recieverId,
                           senderId : action.senderId,
                           name: action.name,
                           message: action.message,
                         }
                           ]
            }
            default: 
            return state
    }
}