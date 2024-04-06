const mongose=require("mongoose");

const UrlSchema=new mongose.Schema({
    shortId:{
        type:String,
        required:true,
        unique:true,
    },
    redirectURL:{
        type:String,
        required:true,
    },
    vistHistory:[{timestamp:{type:Number}}],
},
 {timestamps:true}
);

const URL=mongose.model("url",UrlSchema);

module.exports=URL;