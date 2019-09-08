const jwt = require('jsonwebtoken'),
      config= require('config')

      const auth = (req, res, next)=>{
          const token = req.header('x-auth-token')

          if(!token) return res.status(401).json({
              msg: 'no token , authorization denied'
          })

          try{
              const decoded = jwt.verify(token, config.get('jwtSecret'))

              req.user = decoded
              next()
          }catch(e){
             res.status(400).json({msg: 'invalid token'})
          }

      }


      module.exports = auth