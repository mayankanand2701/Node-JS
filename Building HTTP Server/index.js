const http=require("http");
const fs=require("fs");

const myServer=http.createServer((req,res)=>{
    // call back functions
    // console.log("New Request Recieved.");
    // console.log(req.headers);
    // console.log(req);
    const log=`${Date.now()}: ${req.url} New Request Recieved! \n`;
    fs.appendFile("log.txt",log,(err,data)=>{
        switch(req.url){
            case "/":res.end("Home Page");
                    break;
            case "/about":res.end("I am Mayank");
                    break;
            default:res.end("404:Not Found");
        }
        
    });
});

// Now inorder to run the server you need to specify the port number for that
// one server can work on one port only
myServer.listen(8000,()=>console.log("Server Started !"));

// To close the server press CTRL+C
