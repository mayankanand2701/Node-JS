const mongoose=require("mongoose");

// Schema for DataBase
const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    jobTitle:{
        type:String,
    },
    gender:{
        type:String,
    },
});

// Creating a Model
const User=mongoose.model("user",userSchema);

module.exports=User;