const http=require("http");
const fs=require("fs");
const url=require("url");

const myServer=http.createServer((req,res)=>{
    // call back functions
    // console.log("New Request Recieved.");
    // console.log(req.headers);
    // console.log(req);
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
});

// Now inorder to run the server you need to specify the port number for that
// one server can work on one port only
myServer.listen(8000,()=>console.log("Server Started !"));

// To close the server press CTRL+C

// If you will write this in the loaclhost then in the log file it will store like this 
// http://localhost:8000/?name=mayank
// 1711343798929: /?name=mayank New Request Recieved! 

// We are installing npm i url that will parse each component of url to us and give us the result
