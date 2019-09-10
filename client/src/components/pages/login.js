import React,{Fragment} from 'react'
import {Fade}  from 'react-reveal'
import {Alert} from 'reactstrap'
import {connect} from 'react-redux'
import {registerUser, loginUser} from '../../actions/authActions'
import {clearError} from '../../actions/errorActions'
import {Wave} from 'react-animated-text'

class LoginRegister extends React.Component{



  state={ 
      backgroundLogin: '',
      backgroundRegister: 'purple',
      displayLogin: 'block',
      displayRegister: 'none',
      displayLoginButton:'none',
      displayRegisterButton: 'block',
      name: '',
      email: '',
      password: '',
      loginMsg: null,
      registerMsg:null,
      registerSuccess: false
      
  }

  
  componentDidUpdate(prevProps){
    const {error} = this.props
    if(error !== prevProps.error){
      if(error.id === 'login failed'){
        this.setState({
          loginMsg: error.msg.msg
        })   
    }else{
      this.setState({
        loginMsg: null
      })
    }if (error.id === 'register failed'){
      this.setState({
        registerMsg: error.msg.msg
      })  
  }else{
    this.setState({
      registerMsg: null
    })
  }  
  }

  this.reload()
  

}


clearError=()=>{
  if(this.props.isAuthenticated){
    this.props.clearError()
  }
}


 onClickButton1 = (e)=>{

   this.props.clearError()
      e.preventDefault();
      this.setState({
        backgroundLogin: 'purple',
      backgroundRegister: '',
      displayLogin: 'none',
      displayRegister: 'block',
      displayLoginButton:'block',
      displayRegisterButton: 'none'
     
      })

     
      
  }

  onClickButton2 = (e)=>{
 
    this.props.clearError()
    e.preventDefault();
    this.setState({
      backgroundLogin: '',
      backgroundRegister: 'purple',
      displayLogin: 'block',
      displayRegister: 'none',
      displayLoginButton:'none',
      displayRegisterButton: 'block'
     
    })
  
}

onChange=(e)=>{
  this.setState({
    [e.target.name]: e.target.value
  })
}

onSubmit1=(e)=>{
 
e.preventDefault()
  const {name, email, password}= this.state

  const user ={
    name, email, password
  }

  this.props.registerUser(user)

 

  
}

onSubmit2=(e)=>{
 
e.preventDefault()
  const { email, password}= this.state

  const user ={
     email, password
  }

  this.props.loginUser(user)
  
 

    

}
 reload =()=>{
   

    setTimeout(() => {
      if(this.props.isAuthenticated){
       
      if(this.props.user && this.props.user.confirmed ){
        window.location.replace('/')
      }}
    }, 5000);

   
     
  }



 render(){

   const {isAuthenticated , user}= this.props
    
 return(
    <div>
         
     <div className='container'  > 

     {!isAuthenticated || user.confirmed === false? 
       <div className='row '>
          <div className='col-lg-10 container'>
            <div className='card mt-5 '>
               <div className='row mx-0'>

                      
                       <div className='col-md-6'  style= {{background: this.state.backgroundRegister}} >
                          <div className='card-body mx-md-4' >
                            <div className='container' >
                            <Fade>
                              <form  style={{display: this.state.displayRegisterButton }}>
                               <div className="form">
                               <h5 className='text-white text-center '> Don't have an account ? <div className='m-2'>Register now </div></h5>
                               <div className='text-center mt-4'>
                               <button className='btn btn-default rounded ' 
                               onClick={this.onClickButton1}>Register</button>
                               </div>
                               </div>
                                   
                               
                              </form>
                              </Fade>

                              <Fade >
                                
                              <form className='container' style={{display: this.state.displayRegister}}>
                              <div className='form-group '>
                                {this.props.registerSuccess?
                                 <Alert color='success'> you have successfully registered , please verify your email</Alert>:
                                 this.props.registerSuccess === false ? <Alert color='danger'>{this.state.registerMsg}</Alert>:null}
                                 <h3 className='text-center'>Register</h3>
                                 <label  htmlFor='Registeremail' >User Email:</label>
                                 <input id='Registeremail' className='form-control' placeholder=' Enter email'
                                  type='email' name = 'email'
                                  onChange={this.onChange}/>
                              </div>
                              <div className='form-group'>
                                <label htmlFor='RegisterName'>User Name:</label>
                                <input id='RegisterName' type='name' className='form-control'
                                placeholder='Enter Name' name = 'name'
                                onChange={this.onChange}/>
                              </div>
                              <div className='form-group'>
                                <label htmlFor='RegisterPassword'>Password:</label>
                                <input id='RegisterPassword' className='form-control' type='password'
                                placeholder='password' name = 'password'
                                onChange={this.onChange}/>
                              </div>
                              <button className='btn btn-default rounded'
                               type='submit' onClick={this.onSubmit1}
                               >Register</button>
                            </form>
                            </Fade>
                            </div>
                              
                          </div>
                      </div>
                      
                           

                      <div className='col-md-6' style={{backgroundColor: this.state.backgroundLogin}}>
                      <div className='card-body mx-md-4 ' >

                        <div className='container' >
                          <Fade>
                            
                        <form style={{display: this.state.displayLoginButton}} >
                               <div className="form2">
                               <h5 className='text-white text-center'> already have an account ? <div className='m-2'>login now</div> </h5>
                               <div className='text-center mt-4'>
                               <button className='btn btn-default rounded ' onClick={this.onClickButton2}>Login </button>
                               </div>
                               </div>
                                   
                               
                              </form>
                              </Fade>
                            
                             <Fade>
                            <form className='container' style={{display: this.state.displayLogin}}>
                                      
                                      <div className='form-group '>
                                      {this.state.loginMsg ? <Alert color='danger'>{this.state.loginMsg}</Alert>: null}
                                       <h3 className='text-center'>Login</h3>
                                       <label  htmlFor='email' >User email:</label>
                                       <input id='email' className='form-control ' placeholder=' Enter email'
                                        type='email' name = 'email'
                                        onChange={this.onChange}/>
                                    </div>
                                     
                                    <div className='form-group'>
                                      <label htmlFor='password'>Password:</label>
                                      <input id='password' className='form-control' type='password'
                                      placeholder='password' name = 'password'
                                      
                                      onChange={this.onChange}/>
                                    </div>
      
                                    <button className='btn btn-default rounded '
                                     type='submit' onClick={this.onSubmit2}  >Login</button>
                                      </form>
                                      </Fade>
                            
                            </div>
                      </div>
                      </div>
                  </div>
 
           </div>
           </div>
           </div>
           : 
           <Fragment> <h1 className ="text-center mt-5">welcome  {user.name}</h1> <div></div>
     <h2 className ="text-center mt-5">page will reload after 5 seconds <Wave text="........." effect='stretch' effectChange='3'/></h2> </Fragment>
           }
         </div>
            </div>
        )
    }
}

const mapStateToProps= state =>({
  isAuthenticated: state.auth.isAuthenticated,
  error : state.error,
  user: state.auth.user, 
  registerSuccess: state.auth.registerSuccess,
  registerFailed: state.auth.registerFailed
  
})
export default connect(mapStateToProps, {registerUser, loginUser, clearError})(LoginRegister);