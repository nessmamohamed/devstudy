import {SEND_MSG} from  './types'
import uuid from 'uuid'

export  const sendMsg =(newMessage)=>({
     type: SEND_MSG,
      id: uuid() ,
      recieverId: newMessage.recieverId,
      senderId: newMessage.senderId,
      name: newMessage.name,
      message: newMessage.message,

})