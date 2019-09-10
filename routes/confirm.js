const express = require('express'),
      router = express.Router(),
      User = require('../models/user'),
      config = require('config'),
      jwt = require('jsonwebtoken')
    

      
      //confirmation
       
      router.get('/confirmation/:id/:token', (req, res)=>{

        try{
          
         
          jwt.verify(req.params.token, config.get('jwtSecret'))

          User.findById(req.params.id)
         .then(user => user.updateOne({confirmed: true})
         )
         .then(res.redirect('/confirmed'))

        }catch(e){
              res.send('confirmation error')
        }
        
        

      })

      module.exports = router