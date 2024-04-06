const express=require("express");
const urlRoute=require("./routes/url");
const {connectToMongoDB}=require("./connect");
const URL=require("./models/url");

const app=express();
const PORT=8001;

connectToMongoDB("mongodb://127.0.0.1:27017/short-url")
.then(()=>console.log("MongoDB Connected "));

app.use(express.json());

app.use("/url",urlRoute);

app.use("/:shortId",async(req,res)=>{
    const shortId=req.params.shortId;
    const entry=await URL.findOneAndUpdate({
        shortId,
    },{$push:{
        vistHistory:{
            timestamp:Date.now(),
        },
    },
});
res.redirect(entry.redirectURL);
});

app.listen(PORT,()=>console.log(`Server Started at Port : ${PORT}`));
