import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name:{
        type:String,
         required:true
    },
    email:{
        type:String, 
        required:true,
         unique:true
    },
    password:{
        type:String,
         required:true
    },
    role:{
        type:String, 
        enum:["admin", "user"],
         default:"user"
    },
    isAgree:{
        type:Boolean,
         required:true
    },
     otp:{
        type:String,
         default:null
    },
     isAccountVerifed:{
        type:Boolean,
         default:false
    },
     otpExpired:{
        type:Boolean,
         required:true
    },
     resetOtp:{
        type:String,
         default:" "
    },
     resetOtpExpired:{
        type:Number,
         default:0
    },
    

})


export default mongoose.model("user", userSchema)