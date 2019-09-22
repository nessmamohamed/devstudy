import React from 'react'
import Img from './imgs/discordd15.jpg'
import About from './about'




class Home extends React.Component{
    
       render(){ 
         
    return(

        <div>
          
        <div className='row' style={{background:'#f8f6fd'}}>

        <div className='col-md-6 mt-5' >
            <div className=" text-center">

            <div className="wave"> 
               DevStudy
               </div>

             <p className="spa " >Study, satisfies the need</p>
             <a className="btn btn-lg" id ="button" href="/loginOrRegister" >login </a> 
             <a className="btn btn-lg" id ="button" href="/loginOrRegister" style={{background: 'orange'}}  >sign up!</a>
              </div>
            </div>

            <div className='col-md-6 text-center ' style={{height: '400px'}}>
                <img src={Img} />
            </div>
            
        </div>
          <div  style={{background: '#f8f6fd'}}>
            
          <About />   
          </div>
                                 
        </div>
    )}
  
}





export default Home;