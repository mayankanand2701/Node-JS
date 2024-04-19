const express=require("express");
const {connectToMongoDB}=require("./connect");
const cookieParser=require("cookie-parser");
const {restrictToLoggedUserOnly}=require("./middlewares/auth");

const URL=require("./models/url");

const urlRoute=require("./routes/url");
const staticRoute=require("./routes/staticRoutes");
const userRoute=require("./routes/user");

const app=express();
const PORT=8001;

connectToMongoDB("mongodb://127.0.0.1:27017/short-url")
.then(()=>console.log("MongoDB Connected "));

// set the view engine to ejs
app.set('view engine', 'ejs');
const path=require("path");
app.set("views",path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());

// Routes for Server Side Rendering
// app.get("/test",async(req,res)=>{
//     const allUrls=await URL.find({});
//     // return res.end("<h1>He From the Server </h1>");

//     // return res.end(`
//     // <html>
//     //     <head></head>
//     //     <body>
//     //         <ol>
//     //             ${allUrls.map(url=>`<li>${url.shortId} - ${url.redirectURL} - ${url.vistHistory.length}</li>`).join("")}
//     //         </ol>
//     //     </body>
//     // </html>
//     // `);

//     res.render("home",{
//         // sending variables
//         urls:allUrls,
//     });
// });


app.use("/url",restrictToLoggedUserOnly,urlRoute);
app.use("/",staticRoute);
app.use("/user",userRoute);

app.get("/url/:shortId",async(req,res)=>{
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
