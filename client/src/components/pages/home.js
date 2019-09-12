import React from 'react'
import Img from './imgs/imgResized.jpg'
import Fade from 'react-reveal/Flip'
import { Wave } from 'react-animated-text';



class Home extends React.Component{
    
       render(){ 
         
    return(

        <div>
           
            <div className="containerrr" >

               <img src={Img} alt="img" className= "imgSt"/>

               <div className="containertext">

                 <div className="wave"> 
                     <Wave text = "DevStudy" effect="stretch" effectChange={1.3}  />
                 </div>
               
                <p className="spa" >Study, satisfies the need</p>
                <a className="btn btn-lg " id ="button" href="/about" >About Us !</a>

               </div>
          
               </div>
   
              <div className='cover'>
  
             </div>                       
        </div>
    )}
  
}





export default Home;