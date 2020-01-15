import React from 'react'
import Fade from 'react-reveal/Fade'

export default function Footer(){
    return(
        <div >
         
              <Fade >

            <footer className='page-footer font-sm pt-3 pb-2' style={{background: 'rgb(166, 165, 255)'}}>
                  <div className='container-fluid text-center '>

                      <p>As a group inside and outside, 
                      from Roblox and our game, we offer a friendly open
                       community to all. <br/>
      We strive to make everyone's day just a little better,
       if that is through our games or our server, whatever way is great.<br/>
      
      Please remember to play safely, and have fun while doing so
      Most importantly remember our moto ~ <br/>  <span className ="opacity">
          Study, satisfies the need.</span> </p>  
      
                  </div>
                <div className= ' developer text-center'>
                    programmed by Nessma M. Nazir
                    <p>contact info: nessomohamed555@gmail.com // K𝓪reem11222 (Gaster)™️ ✘#5136</p>
                  
                </div>
            </footer>

            </Fade>

            
        </div>
    )
}