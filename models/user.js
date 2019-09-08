const  mongoose = require('mongoose'),
       Schema = mongoose.Schema

       const UserSchema = new Schema({
           name: {
               type: String,
               required: true
           },
           email: {
            type: String,
            required: true,
            unique: true
           }, 
           password: {
            type: String,
            required: true
           },
           date:{
            type: Date,
            date: Date.now
           }, 
           confirmed:{
               type: Boolean
           }
       })


       module.exports = User = mongoose.model('user', UserSchema )