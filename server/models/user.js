const mongoose = require('mongoose')
const {Schema} =mongoose
const bcrypt = require('bcrypt')

const userSchema= new Schema ({
    name:{
        type:String ,
        trim:true,
        required: "Name is required"
    },
    email:{
        type:String ,
        trim:true,
        unique:true,
        required: "email is required"
    },
    password:{
        type:String ,
        trim:true,                              // remove extra whitespace
        required: true,
        min:6,
        max:16
    },
    stripe_account_id:"",
    stripe_seller:{},
    stripeSection:{}


},{
    timestamps:true                             //create /update  at date 
})


userSchema.pre("save",function(next){
    let user=this
    if (user.isModified("password")) {
        return bcrypt.hash(user.password,10,function(err,hash){
            if (err){
                console.log("bcrypt err",err)
                return next(err)
            }
            user.password=hash
            return next()
        

        })
    } else {
            return next()
    }
})


module.exports = mongoose.model('user', userSchema)