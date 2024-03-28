const express=require("express");
const fs=require("fs");
const app=express();
const users=require("./MOCK_DATA.json");
const port=8000;

// Express Middleware - Plugin
// before putting this plugin when the post request was send through postman the ouput was :
// Body undefined
// But after defineing the below one the ouput comes in json format for the data we have passed through postman
// This is built in middleware

app.use(express.urlencoded({extended:false}));
// The output is :
// Body [Object: null prototype] {
//     first_name: 'Mayank',
//     last_name: 'Anand',
//     email: 'mayankanand@gmail.com',
//     gender: 'Male',
//     job_title: 'Software Enginner'
//   }

// The above it the first middleware
// Now we are writing our new middlware so after running the above middleware the next middleware that will run is
// the below one and after running the below one it will run the routes if we have provided the proper next code 
// and others

app.use((req,res,next)=>{
    // console.log("Hello from Middleware 1");
    // return res.json({msg:"Hello from Middleware 1"});
    // here we are not forwarding the execution of the code thus our code is not able to execute the below
    // routes and thus stopping the execution here
    // You will observer that the additional information you have added here is also visible to below middleware
    // and all the codes below it 
    // req.myUserName="Raj Singh";

    // Now creating a middleware that will log the data in the log file when the request was made and time
    fs.appendFile("log.txt",`${Date.now()}:  ${req.ip}:  ${req.method}:  ${req.path} \n`,(err,data)=>{
        next();
    });
    // next();
});

app.use((req,res,next)=>{
    console.log("Hello from Middleware 2");
    // console.log("Hello from Middleware 2",req.myUserName);
    next();
});
// We have downloaded the mock 1000 data from mockaroo.com
// Bascially the sever is hybrid server it means it should work for mobile phone,browser everything

app.get("/users", (req, res) => {
    const html = `
    <ul>
      ${users.map((user) => `<li>${user.first_name}</li>`).join("")} 
    </ul>
    `;
    res.send(html);
});

// Routes 

app.get("/api/users",(req,res)=>{
    // To check the above passed data will be avaible here or not
    // console.log("I am in GET /api/users & my username is ",req.myUserName);
    // It will list all the data on the server
    return res.json(users);
});

// Insted of writing the indiviual code for each we are adding then in the same route

app.route("/api/users/:id").get((req,res)=>{
    const id=Number(req.params.id);
    const user=users.find(user=>user.id==id);
    return res.json(user);
}).put((req,res)=>{
    // TODO : Edit the user with the id
    return res.json({status:"pending"});
}).delete((req,res)=>{
     // TODO : Delete the user with the id
     return res.json({status:"pending"});
});

// app.get("/api/users/:id",(req,res)=>{
//     const id=Number(req.params.id);
//     const user=users.find(user=>user.id==id);
//     return res.json(user);
// });

app.post("/api/users",(req,res)=>{
    // TODO : To create a new User
    const body=req.body;
    // console.log("Body",body);
    users.push({...body,id:users.length+1});
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{
        return res.json({status:"Success",id:users.length});
    });
});

// app.patch("/api/users/:id",(req,res)=>{
//     // TODO : Edit the user with the id
//     return res.json({status:pending});
// });

// app.delete("/api/users/:id",(req,res)=>{
//     // TODO : Edit the user with the id
//     return res.json({status:pending});
// });

app.listen(port,()=>console.log(`Server Started at Port ${port}`));

