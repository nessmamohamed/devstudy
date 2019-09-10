const express = require('express'),
      router = express.Router(),
      User = require('../models/user'),
      config = require('config'),
      jwt = require('jsonwebtoken'),
      bcrypt = require('bcryptjs'),
      nodemailer = require('nodemailer')
       

      router.post('/', (req, res)=>{
          // recieve data 
          const {name, email , password} = req.body
           // check data
          if (!name || !email || !password) return  res.status(400).json({msg: 'please enter all fields'})
            // validate password
          
            if(!password.match(/([a-zA-Z])/) && password.match(/([0-9])/)  ){
                return res.status(400).json({msg: 'password should be at least 10 characters , contain at least one special character'})
               }   if(password.length < 8){

                    return res.status(400).json({msg: 'password should be at least 10 characters , contain at least one special character'})
                }
               
                // validate email
                var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if(!email.match(mailformat)){
                    return res.status(400).json({msg: 'email not valid'})
                }

            // check existing user
          User.findOne({email})
          .then(user => {
              if (user) return res.status(400).json({msg: 'user already exists'})

               
              const confirmed = false
              // create new user
              const newUser = new User({
                  name, 
                  email,
                  password, 
                  confirmed
              })

            
              
              // HASH PASSWORD 
              bcrypt.genSalt(10 , (err , salt)=>{
                  if (err) throw err
                  bcrypt.hash(newUser.password, salt , (err, hash)=> {
                      if (err) throw err
                      newUser.password = hash;

                      //save user
                      newUser.save()
                      .then(user => jwt.sign(
                          {id: user._id},
                          config.get('jwtSecret'), 
                          (err, token)=>{
                              if(err) throw err

                              res.json({
                                  token, 
                                  user: {
                                      name : user.name,
                                      email: user.email,
                                      password: user.password,
                                      confirmed: false
                                  }
                              }) 
                             
                              
               //confirmation email
               var transporter = nodemailer.createTransport({
                   host: 'smtp.gmail.com',
                   port: 465,
                   secure: true,
                   auth: {
                       user: 'nessomohamed555@gmail.com', 
                       pass: 'nesso159357456Ggnesso' 
                   },
                   tls: {
                     
                       rejectUnauthorized: false
                   }
               });
               
                    var host = req.get('host')

                   var mailOptions = {
                       from: 'DevStudy ✔ <nessomohamed555@gmail.com>',
                       to: email ,
                       subject: "Hello " + name,
                       text: 'Hello ' + email + '✔',
                       html: `<h2>Hello ${name} </h2> <br/> <h5> this is your  <a href = http://${req.headers.port}/confirmation/${user._id}/${token} >verification link</a> </h3> <br/> <h5> please verify it to login to your account<h3/> ` 
                   }
   
   
                   transporter.sendMail(mailOptions, function(error, info){
                       if(error){
                           console.log(error);
                       }else{
                           console.log('Message sent: %s', info.messageId);   
                           console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
                       }
                         
               })



                          }
                      ))
                    
                  })
              })

                
            

          })
            
          
      })


      router.get('/', (req, res)=>{
          User.find({}, 'name', (err, names)=>{
              if (err) throw err

              res.json(names)
          })
      })




      module.exports = router