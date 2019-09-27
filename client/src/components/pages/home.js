import React from 'react'
import Img from './imgs/discordd18.jpg'
import About from './about'




class Home extends React.Component{


      
       onClick = (e)=>{
       
        this.scrollToBottom()

         
       }


     
            scrollToBottom() {
         
              this.about.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              });
       }
    
       render(){ 

    return(

        <div> 

          <div 
           ref={(div) =>{
          this.row = div
        }}>

         
          
        <div className='row mx-0' style={{background: 'white', flexDirection: 'row-reverse'}}
       >

        <div className='col-md-6 mt-5' >
            <div className=" text-center">

            <div className="wave"> 
               DevStudy
               </div>

             <p className="spa " >Study, satisfies the need</p>
             <div className='mx-auto' style={{ width:'fit-content' }}>
            
             <button className="btn btn-md " onClick={this.onClick} id ="button" style={{background: '#41e4e4'}}  >About us </button>
             </div>
            
              </div>
            </div>

            <div className='col-md-6 text-center ' >
                <img src={Img} alt='img' style={{marginRight:'50px', maxWidth: '100%', backgroundSize: 'cover',height: '400px'}}/>
            </div>
            
        </div>
          <div  style={{background: '#f8f6fd'}} 
           ref = {(div => {
             this.about = div
           })}>
            
          <About />   
          </div>
          </div>                   
        </div>
    )}
  
}





export default Home;