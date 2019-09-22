import React from 'react';

import Fade from 'react-reveal/Fade'
import Footer from '../footer'
class About extends React.Component{

    render(){
      
    return(
        <div>
               
            <div className = 'containerAbout'>
      

            <h2 className="cl-h4">'What is DevStudy'</h2> 

            <div className="animated fadeInUp" >

            <p className="cl-p fadeInBottom"> <a href='https://web.roblox.com/groups/4085087/DevStudy#!/about'>DevStudy</a> is a server for general Roblox, and anything to do with Climbing Simulator.<br/>
             We strive to bring joy to our community with our games, and open arms for all. <br/>
             We follow our motto as to help us remember our aim at all times, and to remind all of who we are.<br/>
             <span className="opacity">Study, satisfies the need.</span></p>

            </div>
            </div>
        

            <div className="containerAbout" style={{padding: '20px'}}>
            <div className="row" >
            <div className="col-md-6">
                
            <h2>Meet The Team </h2>

        <Fade left>

        <p>
         has an extensive staff team,
         backing both our development side of things,
         and our community side of the group. <br/>
         We currently employ the following on the development team:
        </p>

       <ul className="List">
           <li>Graphical Artists</li>
           <li>Scripters</li>
           <li>Modelers</li>
           <li>Sound effects artist</li>
           <li>composer</li>
           <li>Animator</li>                                                
        </ul> 

            </Fade> 
              </div>


                    <div className="col-md-6 ">

                        <h2>Our Team</h2>

                      <Fade right>

                      <p>
                        We also however have a community dedicated team bringing many more things to <a href='https://web.roblox.com/groups/4085087/DevStudy#!/about'>DevStudy</a>. 
                        <br/>These consist of: 
                      </p>

                        <ul className="List">
                            <li>2 Discord Bot Developers</li>
                            <li>1 Web developer</li>
                            <li>3 moderators</li>
                            <li>1 community manager</li>
                        </ul>

                      </Fade>

                    </div>
                    </div>
                    </div>

                    <div className="containerAbout">

                      <Fade bottom >
                          
                        <div className='history ' >
                       <div className='container '>
                       <h2>history</h2>
                       <p><a href='https://web.roblox.com/groups/4085087/DevStudy#!/about'>DevStudy</a> 
                       was originally founded in December 2018.<br/>
                       The group was founded by Double_Dev, and development for the groups game
                        started within days from the groups birth.

                       <a href='https://web.roblox.com/groups/4085087/DevStudy#!/about'>
                           DevStudy</a> has gradually collected its staff team from multiple out reaches,
                             and continues to do so.</p>

                             </div>
                       </div>
                      </Fade>
                       

                    </div>
                <Footer/>
                
        </div>
    )}

   }



export default About;