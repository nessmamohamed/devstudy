import React from 'react'
import Img from './imgs/imgResized.jpg'
import Fade from 'react-reveal/Flip'
import { Wave } from 'react-animated-text';
import Dev1 from './imgs/dev1.png'
import Dev2 from './imgs/dev2.png'
import Dev3 from './imgs/dev3.png'
import Dev4 from './imgs/dev4.png'
import Dev5 from './imgs/dev5.png'
import Dev6 from './imgs/dev6.png'


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
                        <Fade top>
<div className="container ">

<div className="row">

<div className='img-thumbnail'  >

<div className="col- ">
<img src ={Dev1} className="imgth" alt='img'/>
</div>

   </div>
  
  <div className='img-thumbnail'>
    
  <div className="col- ">
   <img src ={Dev2} className="imgth" alt='img'/>
</div>

  </div>
  
  <div className="img-thumbnail"> 
  <div className="col- ">
   <img src ={Dev3} className="imgth" alt='img'/>
</div>

  </div>
    </div>  
   
      </div>


   <div className='container'>
     
<div className="row">

<div className='img-thumbnail' >

<div className="col- ">
<img src ={Dev4} className="imgth" alt='img'/>
 </div>

 </div>

 

 <div className='img-thumbnail'>

   <div className="col- ">
<img src ={Dev5} className="imgth" alt='img'/>
</div>

    </div>
</div>
</div>


<div className='container'>


<div className="row">

<div className='img-thumbnail' >

<div className="col- ">
<img src ={Dev6} className="imgth" alt='img'/>
</div>

</div>

   </div>  

</div>

</Fade>
</div>                       
            

        </div>
    )
    }
  
}





export default Home;