import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faDiscord, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Flip from 'react-reveal'

class Social extends  React.Component {

   

    
  state = {
    link1: "https://discord.gg/V3RkKGR",
    link2: 'https://web.roblox.com/groups/4085087/DevStudy#!/about',
    link3: 'https://twitter.com/DevStudyRBLX',
    link4:  'https://www.youtube.com/channel/UCASN_SDVkf4yEwBGVEjHa1Q'
    
  }


      render(){
                
     
          return(

              <div >
                
                <div className='text-center mt-4'>
                <Flip> 
                  <div>

                  <a className='btn btn-lg' href = {this.state.link2}>
                        <div style={{color:'red', fontFamily:'bold', fontSize:'35px'}}>Roblox</div>
                      </a>

                      <ul></ul> 

                      <a className='btn btn-lg ' href = {this.state.link1}>
                        <FontAwesomeIcon icon= {faDiscord} color='#7289da' style={{fontSize: '30px'}}/>
                          <div> discord</div>
                      </a>

                     
                      
                  </div>
                  
                
                  <div className='mt-2'>

                    <a className='btn btn-lg' href={this.state.link3}>
                      <FontAwesomeIcon icon={faTwitter} color='#00acee' style={{fontSize: '30px'}}/>
                      <div>Twitter</div>
                    </a>

                    <a className='btn btn-lg m-3' href={this.state.link4}>
                    <FontAwesomeIcon icon={faYoutube} color='red' style={{fontSize: '30px'}}/>
                    <div>Youtube</div>
                    </a>
                  </div>
                  </Flip>
                  </div>
                      
                 

       
              </div>
          )
      }
}


export default Social;