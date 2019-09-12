import React, { Fragment } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faComments, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons'
import { Card, CardText, CardBody,
    CardTitle, FormGroup, Input, Alert  } from 'reactstrap'
import {sendMsg} from '../actions/msgAction'
import {connect} from 'react-redux'    
import axios from 'axios'

import io from 'socket.io-client';

let socket = io.connect(process.env.PORT);

class chat extends React.Component{
      
   

   componentDidMount(){
       this.socket()
    axios.get('/api/user')
    .then(res =>{
        const data = res.data
        this.setState({
            data
        })
    })
   }

   socket(){
       socket.on('server/output' ,(newMessage)=>{
           if(newMessage.length){
               for(let i =0 ; i < newMessage.length ; i ++){
                this.props.dispatch(sendMsg(newMessage[i]))
               }
           }
           

           
       })
       
   }
   
     componentDidUpdate() {
        this.scrollToBottom();
      }

      scrollToBottom() {
        const scrollHeight = this.border.scrollHeight;
        const height = this.border.clientHeight;
        const maxScrollTop = scrollHeight - height;
        this.border.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
      }

      
    state={
        isOpen: false,
        display: 'none', 
        msg: ''  ,
        data: [],
        userId:  '',
        displayMembers : 'block',
        displayChat: 'none', 
        userChatId : ''
    }

  
    

    onClick=()=>{
        
        const {user, isAuthenticated} = this.props 
        
        if(!this.state.isOpen){
            this.setState({
                display: 'block',
                isOpen: !this.state.isOpen
            })
        }else{
            this.setState({
                display:'none',
                isOpen: !this.state.isOpen
            })
        }if(isAuthenticated){
            this.setState({
                userId: user._id
            })
        }
    }
     
    onChange=(e)=>{
       this.setState({
           [e.target.name]: e.target.value
       })
    }

    onClick2=()=>{
       
        const {user, isAuthenticated} = this.props
         
    

        if(isAuthenticated && this.state.msg.match(/\S+/g)){

          
           const newMessage = {
            recieverId: this.state.userChatId,
               senderId: user._id,
               name : user.name,
               message : this.state.msg
           }

           socket.emit('server/input', newMessage)
          
           
           this.setState({
               msg:''
           })
        } this.setState({
            alert: true
        })
         
    }

    onKeyPress=(e)=>{

        const {user, isAuthenticated} = this.props

        if(e.key==='Enter'){



            if(isAuthenticated && this.state.msg.match(/\S+/g) ){

          
                const newMessage = {
                    recieverId: this.state.userChatId,
                    senderId: user._id,
                    name : user.name,
                    message : this.state.msg
                }
     
                socket.emit('server/input', newMessage)
     
              
                this.setState({
                    msg: ''
                })
             } this.setState({
                 alert: true
             })
        }
    }

    onClick3 = (id)=>{

        this.setState({
            displayChat: 'block',
            displayMembers: 'none',
            userChatId: id
        })
        
    }

    iconClick =() => {
        this.setState({
            displayChat: 'none',
            displayMembers: 'block'
        })
    }

  
    


    render(){
   
        const { data, userId} = this.state

        const { messages, isAuthenticated} = this.props
         
     
       const members=  data.filter((n)=>{
               return n._id !== "5d74f9bf81d3431cac4c6443" & n._id !== "5d750f7b277b3920242dd040"
          })

        const moderators = data.filter((n) =>{
            return n._id === '5d74f9bf81d3431cac4c6443'  ||  n._id === "5d750f7b277b3920242dd040"
        })
         
      
        
         
         
        return(
            <div>
                
                  <Card  
                  className='fixed-bottom ' id='card' style={{display: this.state.display}}>
                      



                      <CardBody className='mt-3' style = {{display: this.state.displayMembers}}>


                           {userId !== '5d750f7b277b3920242dd040' && userId !== "5d74f9bf81d3431cac4c6443" ? 
                         /** moderators list */
                         <div className = 'moderatorsList'  >
                         <CardTitle className = 'moderators text-center ' >contact with support team</CardTitle>
                          <hr style={{width:'100px'}}/>
                          <div className='border p-4' 
                           ref={(div) => {
                            this.border = div;
                          }}>
                            
                         {moderators.map(({_id , name}) =>(
                             <Fragment key={_id}  >
                             <CardText  className = 'names'>
                                <button className='btn btn-block'
                               onClick={this.onClick3.bind(this, _id)} >{name}</button>
                               
                             </CardText>
                             
                                 
                           
                            </Fragment>
                         ))}
                         </div>
                           </div>: 
                           
                           /** members list */
                             <div className = 'membersList'  >
                          <CardTitle className = 'members text-center ' >Members</CardTitle>
                           <hr style={{width:'100px'}}/>
                           <div className='border p-4' 
                           ref={(div) => {
                            this.border = div;
                          }}>
                             
                          {members.map(({_id , name}) =>(
                              <Fragment key={_id}  >
                              <CardText  className = 'names'>
                                 <button className='btn btn-block'
                                onClick={this.onClick3.bind(this, _id)} >{name}</button>
                                
                              </CardText>
                                  
                            
                             </Fragment>
                          ))}
                          </div>
                            </div>
}
                          </CardBody>

                              
                            


                   <div style= {{display: this.state.displayChat}}>
                        <CardBody className='mt-3' >
                          {/** chat */}
                         <div className = 'chat' >
                             <div>
                <button className = 'iconButton'><FontAwesomeIcon onClick ={this.iconClick} icon ={faAngleDoubleLeft}  className='arrow'/></button> 
                          <CardTitle className='text-center chattext' style={{fontSize: '30px'}} > Chat 
                          </CardTitle>
                          </div>
                          
                          {!isAuthenticated? <Alert color ='danger'>please login first ..</Alert> : null}
                          <div className='border p-4' 
                           ref={(div) => {
                            this.border = div;
                          }}>
                         
                          {messages.map(({id,senderId, recieverId, name, message})=>(
                           recieverId === this.state.userChatId  && userId === senderId  ?
                             <CardText className='output' key={id}>
                               {name + ' : '}
                               <strong>{message}</strong>

                             </CardText> :
                             this.state.userChatId === senderId && userId === recieverId?
                             <CardText className='output' key={id}>
                               {name + ' : '}
                               <strong>{message}</strong>

                             </CardText>
                             : null 
                          ))}

                          </div>
                          </div>

                      </CardBody>

                      <FormGroup className='mx-5' >
                          <Input  type='textarea' name='msg' id='msg'
                          onChange={this.onChange}
                          onKeyPress={this.onKeyPress}
                          value ={this.state.msg}/>
                          <button className='btn btn rounded' style={{backgroundColor: '#2bbbad', color: 'white'}} id='send'
                          onClick={this.onClick2}>send</button>
                      </FormGroup>

                     </div> 
                  </Card>

                   
                <button className="btn btn-md btn-md-xl fixed-bottom " id ='chat'
                 onClick={this.onClick} >
                     <FontAwesomeIcon icon={faComments} style={{fontSize: '30px'}}/>
                  </button>

                  
            </div>
        )
    }
}



const mapStateToProps = state =>({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
    messages: state.message.messages
})


export default connect(mapStateToProps)(chat) 