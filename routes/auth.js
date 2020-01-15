const express = require('express'),
      router = express.Router(),
      User = require('../models/user'),
      config = require('config'),
      jwt = require('jsonwebtoken'),
      bcrypt = require('bcryptjs')
      auth = require('../middleware/auth')

      router.get('/', auth, (req, res)=>{
        User.findById(req.user.id)
        .select('-password')
        .then(user => res.json(user))

    
      })

      router.post('/', (req, res)=>{
          // recieve data 
          const { email , password} = req.body
           // check data
          if ( !email || !password) return  res.status(400).json({msg: 'please enter all fields'})
            // check existing user
          User.findOne({email})
          .then(user => {
              if (!user) return res.status(400).json({msg: `user doesn't exist`})

              if(user.confirmed=== false) return res.status(400).json({msg : `please confirm your email first`})


                  bcrypt.compare( password, user.password)
                  .then(isMatch => {
                      if(!isMatch) res.status(400).json({msg: 'invalid password'})
                       
                      jwt.sign(
                        {id: user.id},
                        config.get('jwtSecret'), 
                        { expiresIn: '1d' },
                        (err, token)=>{
                            if(err) throw err

                            res.json({
                                token, 
                                user: {
                                    name : user.name,
                                    email: user.email,
                                    password: user.password,
                                    confirmed: true
                                }
                            })
                        }
                    )
                    
                    })
                       
                    
                  })
              })

            
           
    

      module.exports = router