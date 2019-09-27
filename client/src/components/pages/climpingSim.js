import React from 'react'
import {Fade } from 'react-reveal'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import {  faGem, faBug, faPaw, faMountain, faBolt, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Climping(){
    return(
        <div>
            
            <div className='containerAbout'>
                <h2> Climping Simulator</h2>
                <p className="fadeInUp animated">
                Can you reach all the mountain summits?<br/>
                       Collect gems from the mountains.<br/>
                       Upgrade your gear to go higher.<br/>
                        Move on to new mountains.<br/>
        Use snowboards and other awesome gear to help you along the way <br/>
         Collect badges, better gear and compete to be the best climber.
                </p>
                       
               
                           
                <p>
                
                    This game is only 35% complete, there is much more to come<br/>
                Ropes, grappling hooks, pets and many more thing</p>
                
              
              
              <h2>
                     <FontAwesomeIcon icon={faStar} style={{ color: 'red'}}/>
                    This is an Alpha stage please bear in mind
                    <FontAwesomeIcon icon={faStar} style={{ color: 'red'}}/></h2>
           
     
                    
                     <div className="container">
                          <div className="row" style={{padding: '10px'}}>
                              <div className='col-sm-6'>
                                <h4>Updated Log</h4>
                                <Fade left duration={2000}>
                                <p >
                                    <FontAwesomeIcon icon={faGem}/>
                                ALPHA Release<br/>
                                <FontAwesomeIcon icon={faBug}/>
                                Bug Fixes
                                </p>
                                </Fade>
                              </div>

                              <div className='col-sm-6'>
                              <h4>Coming Soon ...</h4>
                              <Fade right duration={2000}>
                                <p >
                                    <FontAwesomeIcon icon={faBolt}/>
                                Youtuber Creator Codes<br/>
                                <FontAwesomeIcon icon={faPaw}/>
                                Pets<br/>
                                <FontAwesomeIcon icon={faMountain}/>
                                 New Mountains/Zones
                                </p>
                                </Fade>
                              </div>
                              </div>
                          </div>

                          <div style={{padding: '20px'}}></div>
                         
                              
                          <div >
                              <FontAwesomeIcon icon={faTwitter} style={{ color: 'red'}}/>
                          Follow for future codes & updates -
                          <a href="https://twitter.com/DevStudyRBLX">twitterRBL</a>
                          <FontAwesomeIcon icon={faTwitter} style={{ color: 'red'}}/>
                          </div>
                          
                          
                          
                          <div style={{paddingBottom: '30px'}}>
                              <FontAwesomeIcon icon={faExclamationTriangle} style={{ color: 'yellow'}}/>
                              Send bug reports to our  
                          <a href="https://twitter.com/DevStudyRBLX">twitterRBLX</a>
                          <FontAwesomeIcon icon={faExclamationTriangle} style={{ color: 'yellow'}}/>
                          </div>
                         
                         
                                
                                
                                <div  className='text-center pb-2' style={{backgroundColor: "#f8f6fd" , overflow: 'hidden'}}>
                                <h2 style={{paddingTop: '10px'}}>Credits</h2>
                                <a className='p-0'
                                href="https://devforum.roblox.com/t/climbing-simulator-credits/293020">
                                https://devforum.roblox.com/t/climbing-simulator-credits/293020 
                                </a>
                                </div>
                                
                          </div>
                     </div>

          
      
    )
}