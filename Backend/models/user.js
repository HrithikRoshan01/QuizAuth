const mongoose =require('mongoose')
const {Schema} = mongoose

const userScheme = new Schema({
    name : String,
    email:{
        type:String,
        unique:true
    },
    password:String

})

const UserModel = mongoose.model('user',userScheme)

module.exports = UserModel;