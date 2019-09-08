const express = require('express'),
      app = express(),
      config= require('config'),
      mongoose = require('mongoose'),
      path= require('path')

      server = app.listen(5002),

       io = require('socket.io').listen(server)
       

       
       

      app.use(function (req, res, next) {

      

        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
      
        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      
        // Request headers you wish to allow
 
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-auth-token");
        
        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);
      
        // Pass to next layer of middleware
        next();
      });  
      
      
      app.use(express.json())
      
      app.use('/api/user', require('./routes/user'))
      app.use('/api/auth', require('./routes/auth'))
      app.use('/', require('./routes/confirm'))


      //serve static assets if in production

      if(process.env.NODE.ENV === 'production'){
        //set static folder
        app.use(express.static('client/build'))

        app.get('*', (req, res)=>{
          res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
        })
      }


      const dbs = config.get('mongoURL')

      mongoose.connect(dbs, { 
        useNewUrlParser: true,
        useCreateIndex: true}, (err, db)=>{
              if (err) throw err
          io.on('connection', function(socket){
             
            let chat = db.collection('chat')

            // find chat 
            chat.find().limit(100).sort({_id: 1}).toArray(
              (err, res)=>{
                if (err) throw err
                socket.emit('server/output', res)
              }
            ) 
            
            socket.on('server/input', (newMessage)=>{
               
              let name = newMessage.name,
                  message = newMessage.message,
                  senderId = newMessage.senderId,
                  recieverId = newMessage.recieverId

                  chat.insertOne({
                    name,
                    message,
                    senderId, 
                    recieverId
                  },()=>{
                    io.emit('server/output', [newMessage])
                  })
              
              
            })

            
        
       })

        })
      .then(() => console.log("mongoose connected..."))
      .catch(err => console.log(err))


       


    

