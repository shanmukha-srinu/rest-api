const mongoose = require('mongoose')
const validator=require('validator')

const User = mongoose.model('User', {
    name: {
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true,
        validate(value){
            if(! validator.isEmail(value)){
                throw new Error("Email is invalid")
            }
        }

    },
    age: {
        type: Number,
        validate(value){
            if(value<0){
                throw new Error('age must be positive number') 
            }
        }
    }
})

const me = new User({
    name:'hari',
    email:'hari@gmail.com',
    age: 1
})

me.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log('Error!', error)
})

module.exports=User