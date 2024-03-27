// const http=require("http");
// const fs=require("fs");
// const url=require("url");
const express=require("express");
const app=express();

app.get("/",(req,res)=>{
    return res.send("Hello From Home Page");
});

app.get("/about",(req,res)=>{
    return res.send(`Hello ${req.query.name}`);
    // return res.send("Hello From About Page"+" Hey "+req.query.name+" you are  "+req.query.age);
});

function myHandler(req,res){
    // call back functions
    // console.log("New Request Recieved.");
    // console.log(req.headers);
    // console.log(req);
    if(req.url=="/favicon.io") return res.end();
    const log=`${Date.now()}: ${req.method} ${req.url} New Request Recieved! \n`;
    const myUrl=url.parse(req.url,true);
    // console.log(myUrl);
    fs.appendFile("log.txt",log,(err,data)=>{
        switch(myUrl.pathname){
            case "/":
                // res.end("Home Page");
                if(req.method==="GET") res.end("Home Page");
                    break;
            case "/about":
                  const username=myUrl.query.name;
                  res.end(`Hi ${username}`);
                  break;
            case "/search":
                const search=myUrl.query.search_query;
                res.end("Here are your results for "+search);
                break;
            case "/signup":
                if(req.method==="GET")res.end("This is the signup form");
                else if(req.method==="POST")
                {
                    // DB Query
                    res.end("Success !");
                }

            default:res.end("404:Not Found");
        }
    });
}

// const myServer=http.createServer(myHandler);
// const myServer=http.createServer(app);
app.listen(8000,() =>console.log("Server Started!"));

// Now inorder to run the server you need to specify the port number for that
// one server can work on one port only
// myServer.listen(8000,()=>console.log("Server Started !!"));

// To close the server press CTRL+C

// If you will write this in the loaclhost then in the log file it will store like this 
// http://localhost:8000/?name=mayank
// 1711343798929: /?name=mayank New Request Recieved! 

// We are installing npm i url that will parse each component of url to us and give us the result

// You will see after using express the code become so short and modular so that we use express insted of using 
// nodes js for calling each and every methods for it 
// Express internally will acquire the http library and will write the code we did not have to write these codes