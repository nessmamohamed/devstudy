import React from 'react'
import Img from './imgs/discordd18.jpg'
import About from './about'




class Home extends React.Component{
    
       render(){ 
         
    return(

        <div>
          
        <div className='row mx-0' style={{background: 'white', flexDirection: 'row-reverse'}}>

        <div className='col-md-6 mt-5' >
            <div className=" text-center">

            <div className="wave"> 
               DevStudy
               </div>

             <p className="spa " >Study, satisfies the need</p>
             <div className='mx-auto' style={{ width:'fit-content' }}>
             <a className="btn btn-md " id ="button" href="/loginOrRegister" >login </a> 
             <a className="btn btn-md  " id ="button" href="/loginOrRegister" style={{background: '#41e4e4'}}  >sign up!</a>
             </div>
            
              </div>
            </div>

            <div className='col-md-6 text-center ' >
                <img src={Img} alt='img' style={{marginRight:'50px', maxWidth: '100%', backgroundSize: 'cover',height: '400px'}}/>
            </div>
            
        </div>
          <div  style={{background: '#f8f6fd'}}>
            
          <About />   
          </div>
                                 
        </div>
    )}
  
}





export default Home;