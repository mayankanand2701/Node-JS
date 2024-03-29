const express=require("express");
const fs=require("fs");
const app=express();
const users=require("./MOCK_DATA.json");
const port=8000;

// To now connect to MongoDB Database
// We need to install mongoose which provides the path for connectivity
// To install mongose run the command npm i mongoose
// More info about this is given in text.txt
const mongoose=require("mongoose");

// Connection Stablishing
mongoose
.connect("mongodb://127.0.0.1:27017/Project-01")
.then(()=>console.log("MongoDB Connected "))
.catch((err)=>console.log("MongoDB Error ",err));


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

    // to create your new header for your own 
    // this header will be send during the time of respnose
    // if you want to add your own header in the request then you need to add it as a key value pair
    // in postman before sending the request
    // console.log(req.headers);
    // res.setHeader("myName","Mayank Anand");
    return res.json(users);
});

// Insted of writing the indiviual code for each we are adding then in the same route

app.route("/api/users/:id").get((req,res)=>{
    const id=Number(req.params.id);
    const user=users.find(user=>user.id==id);
    if(!user) return res.status(404).json({Error : "User Not Found !"});
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

// app.post("/api/users",(req,res)=>{
//     // TODO : To create a new User
//     const body=req.body;
//     // adding the new status code for the the input validity 
//     if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title)
//     {
//         return res.status(400).json({msg:"All Fields should be Entered !"});
//     }
//     // console.log("Body",body);
//     users.push({...body,id:users.length+1});
//     fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{
//         // Status 201 for User Created
//         return res.status(201).json({status:"Success",id:users.length});
//     });
// });

// For Moongose DataBase
app.post("/api/users",async(req,res)=>{
    const body=req.body;
    if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title)
    {
        return res.status(400).json({msg:"All Fields should be Entered !"});
    }
    const result=await User.create({
        firstName:body.first_name,
        lastname:body.last_name,
        email:body.email,
        jobTitle:body.job_title,
        gender:body.gender
    });  
    console.log("Result ",result);
    return res.status(201).json({msg:"Success"});
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

