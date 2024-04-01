const express=require("express");
const app=express();
const port=8000;

// Imports 
const {connectMongoDB}=require("./connection");
const userRouter=require("./routes/user");
const {logReqRes}=require("./middlewares/index");

// Conncections 
connectMongoDB("mongodb://127.0.0.1:27017/Project-01");

// Middleware plugin 
app.use(express.urlencoded({extended:false}));
app.use(logReqRes("log.txt"));

// Routes
app.use("/api/users",userRouter);

app.listen(port,()=>console.log(`Server Started at Port ${port}`));

