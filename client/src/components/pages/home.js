import React from 'react'
import Img from './imgs/discord4.jpg'




class Home extends React.Component{
    
       render(){ 
         
    return(

        <div>
           <div className='containerrr'>
           <img src={Img} alt="img" className= "imgSt"/>

           <div className="containertext text-center ">

      <div className="wave"> 
       DevStudy
     </div>

         <p className="spa" >Study, satisfies the need</p>
          <a className="btn btn-lg " id ="button" href="/about" >About Us !</a>

           </div>
           </div>
           
          
                                    
        </div>
    )}
  
}





export default Home;