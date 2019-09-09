import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'

class confirmed extends React.Component {
    render(){
        return(
            <div>
                <div className='text-center ' style={{marginTop: '50px', color: 'limegreen'}}>
                <FontAwesomeIcon  icon={faCheckCircle} style={{fontSize: '100px'}} />
                <h2>your email successfully verified</h2>
                 <h3> you can login now </h3>
                </div>
             
                </div>
        )
    }
   
}

export default confirmed;