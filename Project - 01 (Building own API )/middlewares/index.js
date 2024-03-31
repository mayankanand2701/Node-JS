const fs=require("fs");

function logReqRes(filename){
    return (res,req,next)=>{
        fs.appendFile(filename,`${Date.now()}:  ${req.ip}:  ${req.method}:  ${req.path} \n`,(err,data)=>{
            next();
        });
    };
}

module.exports={
    logReqRes,
}