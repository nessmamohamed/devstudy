const express = require('express'),
      router = express.Router(),
      User = require('../models/user'),
      config = require('config'),
      jwt = require('jsonwebtoken')
     


      router.get('/confirmation/:id/:token', (req, res)=>{

        

        try{
         
          jwt.verify(req.params.token, config.get('jwtSecret'))

          User.findById(req.params.id)
         .then(user => user.updateOne({confirmed: true})
         )
         setTimeout(() => {
          res.redirect('/confirmed')
         }, 2000);
         

        }catch(e){
              res.send('confirmation error')
        }
        
        

      })


      module.exports = router