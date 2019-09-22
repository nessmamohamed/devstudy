import React, {Fragment}from 'react'
import {Link} from 'react-router-dom'
import '../App.css'
import {connect} from 'react-redux'
import {logout} from '../actions/authActions'


class header extends React.Component{
    render(){
           const  {isAuthenticated ,user}= this.props.auth

           
   
      return(
        <div>
             <nav className= "navbar navbar-expand-xl navbar-dark " style={{backgroundColor: ' rgb(31, 25, 39)'}}>
                     
                     <Link className="navbar-icon" to="/">
                         <img alt="img" className="icon" src="https://cdn.discordapp.com/attachments/590139135566675968/590551057533501490/MOSHED-2019-6-18-14-54-27.gif"/>
                     </Link>

                  <button className="navbar-toggler" type="button" data-toggle="collapse"
                  data-target="#collapsed">
                      <span className="navbar-toggler-icon"></span>
                      </button> 
                 
               <div className="collapse navbar-collapse justify-content-end" id ="collapsed">

                  <ul className="navbar-nav ">
                      <li className= "nav-item">
                         <Link className="nav-link" to="/"> Home</Link>  
                      </li>
                     
                      <li className="nav-item">
                          <Link className="nav-link" to="/store">Store</Link>
                      </li>
                      <li className="nav-item">
                         <Link className="nav-link" to="/climpingSim">Climbing Sim</Link>
                      </li>

                      <li className="nav-item">
                         <Link className="nav-link" to="/social">social</Link>
                      </li>
                    
                      
       
      <br/>
<ul></ul>
       {!user || (user.confirmed=== null || user.confirmed === false) ? 
       
       <li className="nav-item">
       <Link className="nav-link" to="/loginOrRegister">login/register</Link>
    </li>

       :
        <Fragment> 
            <span className='navbar-text mr-3'>
                <strong>{`${user.name}`}</strong>
            </span>
            <li className= 'nav-item'>
                        <a className='nav-link' href='/'
                        onClick={this.props.logout}>Logout</a>
                    </li> 
                    </Fragment> 
                   }
                    

                    
                      
                  </ul>

               </div>
             </nav>
                 

        </div>
      )
      }      
      
}

const mapStateToProps = state =>({
    auth: state.auth
})

export default connect(mapStateToProps, {logout})(header)